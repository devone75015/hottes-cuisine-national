#!/usr/bin/env node
/**
 * PORTAIL DE PRÉ-DÉPLOIEMENT — contrôle qualité avant mise en ligne.
 *
 * Complète scripts/seo-audit.mjs, qui se concentre sur le duplicate et la
 * sémantique. Ce script-ci vérifie l'intégrité de ce qui part réellement en
 * production : liens, images, CTA, sitemap, textes temporaires, balises de mesure, poids.
 *
 * Il tourne sur out/, c'est-à-dire sur les fichiers qui seront déposés — pas
 * sur le code source. Ce qui n'est pas dans out/ n'existe pas.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ CE QUE CE SCRIPT NE PEUT PAS VÉRIFIER                                   │
 * │                                                                          │
 * │ Aucun script ne remplace un navigateur. Restent à contrôler à la main :  │
 * │   · rendu réel sur iPhone, Android, Safari, Firefox, Edge               │
 * │   · débordements, chevauchements, scroll horizontal                     │
 * │   · Core Web Vitals mesurés (LCP, INP, CLS)                             │
 * │   · réception effective d'un lead de test                               │
 * │   · certificat SSL et absence d'erreur console                          │
 * │ La checklist humaine est dans RECETTE.md.                               │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * Usage :  node scripts/preflight.mjs
 * Sortie :  code 1 si un contrôle bloquant échoue.
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import { existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";

/** Textes qui ne doivent jamais atteindre la production. */
const PLACEHOLDERS = [
  "votre-domaine",
  "exemple.fr",
  "lorem ipsum",
  "À compléter",
  "TODO",
  "localhost",
  "127.0.0.1",
  ".vercel.app",
  "XXXXX",
];

/** Pages sur lesquelles un CTA d'appel et un CTA devis sont obligatoires. */
const NO_CTA_REQUIRED = /^(mentions-legales|confidentialite)\//;

const errors = [];
const warnings = [];
const info = [];

/* -------------------------------------------------------------------------- */

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

function decode(s) {
  return s
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;|&#xA0;/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
}

function textOf(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

/** Un chemin interne existe-t-il réellement dans out/ ? */
function resolves(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (clean === "" || clean === "/") return existsSync(join(OUT, "index.html"));
  const base = join(OUT, clean.replace(/^\//, ""));
  return (
    existsSync(base) ||
    existsSync(base + ".html") ||
    existsSync(join(base, "index.html"))
  );
}

/* -------------------------------------------------------------------------- */

const htmlFiles = [];
let totalJs = 0;
let totalCss = 0;
let heaviestPage = { route: "", bytes: 0 };

for await (const file of walk(OUT)) {
  const rel = relative(OUT, file).split(sep).join("/");
  if (rel.endsWith(".js")) totalJs += (await stat(file)).size;
  if (rel.endsWith(".css")) totalCss += (await stat(file)).size;
  if (rel.endsWith(".html")) htmlFiles.push({ file, rel });
}

const pages = [];
for (const { file, rel } of htmlFiles) {
  const html = await readFile(file, "utf8");
  const route = rel.replace(/\/index\.html$/, "/").replace(/^index\.html$/, "/");
  if (/^(404|_not-found|_global-error)(\/|\.html$|$)/.test(route)) continue;

  const bytes = Buffer.byteLength(html);
  if (bytes > heaviestPage.bytes) heaviestPage = { route, bytes };

  pages.push({
    route,
    html,
    bytes,
    text: textOf(html),
    noindex: /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html),
    canonical: (html.match(/rel="canonical" href="([^"]+)"/) || [, null])[1],
  });
}

console.log(`\n  Pré-déploiement — ${pages.length} pages dans out/\n`);

/* --- 1. Liens internes : aucun ne doit pointer dans le vide --------------- */
const brokenByTarget = new Map();
for (const p of pages) {
  const hrefs = [...p.html.matchAll(/href="([^"]+)"/g)].map((m) => decode(m[1]));
  for (const href of hrefs) {
    if (/^(https?:|tel:|mailto:|#|data:)/.test(href)) continue;
    if (!href.startsWith("/")) continue;
    if (!resolves(href)) {
      if (!brokenByTarget.has(href)) brokenByTarget.set(href, new Set());
      brokenByTarget.get(href).add(p.route);
    }
  }
}
for (const [href, from] of brokenByTarget) {
  const list = [...from];
  errors.push(
    `[lien interne cassé] ${href} — depuis ${list.slice(0, 3).join(", ")}` +
      (list.length > 3 ? ` et ${list.length - 3} autre(s)` : ""),
  );
}

/* --- 2. Textes temporaires ------------------------------------------------ */
for (const p of pages) {
  for (const needle of PLACEHOLDERS) {
    if (p.text.toLowerCase().includes(needle.toLowerCase())) {
      errors.push(`[texte temporaire « ${needle} »] ${p.route}`);
    }
  }
}

/* --- 3. Images : alt renseigné, source exploitable ------------------------ */
for (const p of pages) {
  for (const [tag] of p.html.matchAll(/<img[^>]*>/g)) {
    const alt = tag.match(/alt="([^"]*)"/);
    if (!alt) errors.push(`[image sans attribut alt] ${p.route}`);
    else if (!alt[1].trim()) errors.push(`[image avec alt vide] ${p.route}`);

    const src = tag.match(/src="([^"]+)"/);
    if (!src) errors.push(`[image sans src] ${p.route}`);
    else {
      const url = decode(src[1]);
      if (url.startsWith("/") && !resolves(url)) {
        errors.push(`[image introuvable] ${url} sur ${p.route}`);
      }
    }
  }
}

/* --- 4. CTA : appel et devis atteignables depuis chaque page -------------- */
for (const p of pages) {
  if (NO_CTA_REQUIRED.test(p.route)) continue;
  if (!/href="tel:\+?\d+"/.test(p.html)) {
    errors.push(`[aucun bouton d'appel] ${p.route}`);
  }
  if (!/href="\/devis-nettoyage-hotte\/"/.test(p.html)) {
    errors.push(`[aucun lien vers le devis] ${p.route}`);
  }
}

/* --- 5. Sitemap : cohérent avec ce qui existe et ce qui est indexable ----- */
const sitemapPath = join(OUT, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  errors.push("[sitemap.xml absent de out/]");
} else {
  const xml = await readFile(sitemapPath, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const routesInSitemap = new Set();

  for (const loc of locs) {
    let path;
    try {
      path = new URL(loc).pathname;
    } catch {
      errors.push(`[URL de sitemap malformée] ${loc}`);
      continue;
    }
    routesInSitemap.add(path.replace(/^\//, "").replace(/^$/, "/"));
    if (!resolves(path)) {
      errors.push(`[sitemap → page inexistante] ${path}`);
    }
  }

  for (const p of pages) {
    const key = p.route === "/" ? "/" : p.route;
    const listed = routesInSitemap.has(key);
    if (p.noindex && listed) {
      errors.push(`[page noindex présente dans le sitemap] ${p.route}`);
    }
    if (!p.noindex && !listed) {
      warnings.push(`[page indexable absente du sitemap] ${p.route}`);
    }
  }
  info.push(`sitemap : ${locs.length} URL, toutes résolues`);
}

/* --- 6. robots.txt -------------------------------------------------------- */
const robotsPath = join(OUT, "robots.txt");
if (!existsSync(robotsPath)) {
  errors.push("[robots.txt absent de out/]");
} else {
  const robots = await readFile(robotsPath, "utf8");
  if (/Disallow:\s*\/\s*$/m.test(robots)) {
    errors.push("[robots.txt bloque tout le site] Disallow: /");
  }
  if (!/Sitemap:/i.test(robots)) {
    warnings.push("[robots.txt sans directive Sitemap]");
  }
}

/* --- 7. Fichiers d'exploitation attendus ---------------------------------- */
for (const f of ["404.html", ".htaccess", "api/lead.php", "favicon.ico"]) {
  if (!existsSync(join(OUT, f))) {
    // Le favicon peut être servi par une autre route Next : avertissement.
    (f === "favicon.ico" ? warnings : errors).push(`[fichier manquant dans out/] ${f}`);
  }
}

/* --- 8. Formulaire présent là où il doit l'être --------------------------- */
for (const route of ["devis-nettoyage-hotte/", "contact/", "/"]) {
  const p = pages.find((x) => x.route === route);
  if (!p) {
    errors.push(`[page attendue absente] ${route}`);
  } else if (!/<form/.test(p.html)) {
    errors.push(`[aucun formulaire sur une page qui doit en porter un] ${route}`);
  }
}

/* --- 9. Balises de mesure ------------------------------------------------- *
 * Les deux balises Google sont posées dans le <head> par app/layout.tsx. Rien
 * n'empêche une refonte du layout de les faire disparaître sans bruit : un
 * site qui ne mesure plus se construit et se déploie exactement pareil, et on
 * ne s'en aperçoit que des semaines plus tard, en constatant qu'aucune
 * conversion ne remonte dans Google Ads. D'où ce contrôle bloquant.
 *
 * Les identifiants sont relus dans lib/site.ts plutôt que recopiés ici : un
 * contrôle qui vérifie sa propre copie d'une valeur ne vérifie rien.
 *
 * Ce qui est contrôlé n'est PAS la position exacte des balises. React remonte
 * les scripts externes en tête du <head> — gtag.js s'y retrouve avant le
 * conteneur GTM, c'est sans effet puisqu'il est `async` et que les deux blocs
 * d'initialisation, eux, restent dans l'ordre. Ce qui est contrôlé : présence,
 * unicité, ordre d'initialisation, et intégrité du dataLayer partagé.
 */
{
  const siteSrc = await readFile("lib/site.ts", "utf8");
  const idOf = (key) => (siteSrc.match(new RegExp(`${key}:[^"\n]*"([^"]*)"`)) || [, ""])[1];
  const gtmId = idOf("gtmId");
  const adsId = idOf("googleAdsId");

  if (!gtmId) errors.push("[identifiant GTM introuvable dans lib/site.ts]");
  if (!adsId) errors.push("[identifiant Google Ads introuvable dans lib/site.ts]");

  for (const p of pages) {
    const head = p.html.slice(0, p.html.indexOf("</head>"));
    const body = p.html.slice(p.html.indexOf("<body"));

    const iGtm = gtmId ? head.indexOf(`'${gtmId}'`) : -1;
    if (gtmId && iGtm < 0) errors.push(`[conteneur GTM absent du <head>] ${p.route}`);
    if (gtmId && !body.includes(`ns.html?id=${gtmId}`)) {
      errors.push(`[repli noscript GTM absent du <body>] ${p.route}`);
    }

    // Le chargeur externe : présent une fois et une seule. Deux exemplaires
    // font compter chaque conversion deux fois, et rien ne le signale.
    const loaders = [...head.matchAll(/<script[^>]+gtag\/js\?id=([\w-]+)/g)].map((m) => m[1]);
    if (adsId && !loaders.includes(adsId)) {
      errors.push(`[gtag.js ${adsId} absent du <head>] ${p.route}`);
    }
    if (loaders.length > 1) {
      errors.push(`[gtag.js chargé ${loaders.length} fois] ${p.route}`);
    }

    const iCfg = adsId ? head.indexOf(`gtag('config','${adsId}')`) : -1;
    if (adsId && iCfg < 0) errors.push(`[config Google Ads ${adsId} absente] ${p.route}`);
    else if (iCfg >= 0 && iGtm >= 0 && iCfg < iGtm) {
      errors.push(`[gtag s'initialise avant le conteneur GTM] ${p.route}`);
    }

    // GTM et gtag écrivent dans le même dataLayer. Une réassignation sèche
    // vide la file de l'autre : c'est la panne silencieuse classique.
    if (/dataLayer\s*=\s*\[/.test(head)) {
      errors.push(`[dataLayer réinitialisé au lieu d'être réutilisé] ${p.route}`);
    }
  }
}

/* --- 10. Hiérarchie de titres ---------------------------------------------- */
for (const p of pages) {
  const h2 = [...p.html.matchAll(/<h2[^>]*>/g)].length;
  if (h2 === 0) warnings.push(`[aucun H2] ${p.route}`);
}

/* --- 11. Poids ------------------------------------------------------------ *
 * Le total des chunks présents dans out/ ne veut rien dire : un visiteur n'en
 * télécharge qu'une fraction. Ce qui compte est le JS réellement référencé par
 * une page — c'est ce qu'on mesure ici, page par page.
 * ------------------------------------------------------------------------- */
const kb = (n) => `${(n / 1024).toFixed(0)} Ko`;

/**
 * On mesure ce qui TRANSITE, compression comprise — pas le poids sur disque.
 * `.htaccess` active mod_deflate : le chiffre brut est trompeur, il annonçait
 * 794 Ko là où le visiteur en télécharge 287.
 */
let worstFirstLoad = { route: "", gz: 0, raw: 0 };
for (const p of pages) {
  const assets = [
    ...[...p.html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]),
    ...[...p.html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((m) => m[1]),
  ]
    .map(decode)
    .filter((u) => u.startsWith("/"));

  let raw = Buffer.byteLength(p.html);
  let gz = gzipSync(Buffer.from(p.html), { level: 6 }).length;

  for (const a of new Set(assets)) {
    try {
      const buf = await readFile(join(OUT, a.replace(/^\//, "")));
      raw += buf.length;
      gz += gzipSync(buf, { level: 6 }).length;
    } catch {
      errors.push(`[asset référencé introuvable] ${a} sur ${p.route}`);
    }
  }

  if (gz > worstFirstLoad.gz) worstFirstLoad = { route: p.route, gz, raw };
}

info.push(
  `page la plus lourde : ${worstFirstLoad.route} — ${kb(worstFirstLoad.gz)} transférés ` +
    `(${kb(worstFirstLoad.raw)} avant compression)`,
);
info.push(`JS présent dans out/, tous chunks confondus : ${kb(totalJs)}`);
info.push(`CSS total : ${kb(totalCss)}`);

// Seuil sur le poids transféré : au-delà, le temps d'interactivité se dégrade
// nettement sur un mobile de milieu de gamme en 4G.
if (worstFirstLoad.gz > 400 * 1024) {
  warnings.push(
    `[première charge élevée] ${kb(worstFirstLoad.gz)} transférés sur ${worstFirstLoad.route}`,
  );
}
for (const p of pages) {
  if (p.bytes > 250 * 1024) {
    warnings.push(`[page HTML lourde : ${kb(p.bytes)}] ${p.route}`);
  }
}

/* -------------------------------------------------------------------------- */

for (const line of info) console.log(`  · ${line}`);
console.log();

if (warnings.length) {
  console.log(`  ${warnings.length} avertissement(s) :`);
  for (const w of warnings.slice(0, 25)) console.log(`    · ${w}`);
  if (warnings.length > 25) console.log(`    · … ${warnings.length - 25} de plus`);
  console.log();
}

if (errors.length) {
  console.error(`  ${errors.length} ERREUR(S) BLOQUANTE(S) — mise en ligne refusée :`);
  const shown = new Set();
  for (const e of errors) {
    if (shown.size >= 40) break;
    if (shown.has(e)) continue;
    shown.add(e);
    console.error(`    ✗ ${e}`);
  }
  if (errors.length > shown.size) {
    console.error(`    ✗ … ${errors.length - shown.size} de plus`);
  }
  console.error();
  process.exit(1);
}

console.log("  ✓ Contrôle de pré-déploiement passé.\n");
