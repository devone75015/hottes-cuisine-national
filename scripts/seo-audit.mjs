#!/usr/bin/env node
/**
 * AUDIT SEO — garde-fou anti-duplicate (§18 du cadrage).
 *
 * Tourne sur le HTML réellement produit par `next build`, pas sur les données
 * source : c'est le rendu final qui compte pour Google.
 *
 * Contrôles :
 *   1. Title unique sur l'ensemble du corpus
 *   2. Meta description unique, et de longueur exploitable
 *   3. Un H1 et un seul par page
 *   4. Canonical présent
 *   5. Similarité inter-pages sous le seuil (5-grammes, indice de Jaccard)
 *   6. Volume de texte minimum sur les pages locales
 *   7. Vocabulaire domestique interdit sur les pages ramonage
 *
 * Usage :  node scripts/seo-audit.mjs
 * Sortie :  code 1 si un contrôle bloquant échoue.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const BUILD_DIR = ".next/server/app";
const SIMILARITY_MAX = 0.55;
const MIN_WORDS_LOCAL = 350;
const NGRAM = 5;

/** Termes du champ du chauffage domestique — interdits sur les pages ramonage. */
const FORBIDDEN_RAMONAGE = [
  "cheminée",
  "cheminee",
  "insert",
  "poêle à bois",
  "poele a bois",
  "conduit de fumée",
  "bûche",
  "buche de bois",
  "ramoneur de cheminée",
];

/* -------------------------------------------------------------------------- */

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (entry.isFile() && entry.name.endsWith(".html")) yield path;
  }
}

function decode(s) {
  return s
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
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

function attr(html, re) {
  const m = html.match(re);
  return m ? decode(m[1]).trim() : null;
}

/** Isole le contenu de <main> : le header et le footer sont partagés par toutes
 *  les pages et fausseraient la mesure de similarité. */
function mainOf(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return m ? m[1] : html;
}

function parse(html, file) {
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => textOf(m[1]));
  return {
    file,
    title: attr(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: attr(html, /<meta\s+name="description"\s+content="([^"]*)"/i),
    canonical: attr(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i),
    noindex: /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html),
    h1s,
    text: textOf(mainOf(html)),
  };
}

/** Empreinte en n-grammes de mots, normalisée. */
function shingles(text) {
  const words = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const set = new Set();
  for (let i = 0; i + NGRAM <= words.length; i++) {
    set.add(words.slice(i, i + NGRAM).join(" "));
  }
  return set;
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [small, large] = a.size < b.size ? [a, b] : [b, a];
  for (const s of small) if (large.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

/* -------------------------------------------------------------------------- */

const errors = [];
const warnings = [];

const pages = [];
for await (const file of walk(BUILD_DIR)) {
  const html = await readFile(file, "utf8");
  // Ignore les pages d'erreur générées par le framework.
  if (/[\\/](_not-found|_global-error|40\d)\.html$/.test(file)) continue;
  pages.push(parse(html, relative(BUILD_DIR, file).split(sep).join("/")));
}

console.log(`\n  Audit SEO — ${pages.length} pages analysées\n`);

/* --- 1 & 2 : unicité title / description ---------------------------------- */
const byTitle = new Map();
const byDesc = new Map();

for (const p of pages) {
  if (!p.title) {
    errors.push(`[title manquant] ${p.file}`);
  } else {
    if (!byTitle.has(p.title)) byTitle.set(p.title, []);
    byTitle.get(p.title).push(p.file);
  }

  if (!p.description) {
    errors.push(`[meta description manquante] ${p.file}`);
  } else {
    if (!byDesc.has(p.description)) byDesc.set(p.description, []);
    byDesc.get(p.description).push(p.file);
    // Les pages en noindex (légales, futures LP Ads) ne sont pas concernées.
    const len = p.description.length;
    if (!p.noindex && (len < 110 || len > 170)) {
      warnings.push(`[description ${len} car.] ${p.file}`);
    }
  }
}

for (const [title, files] of byTitle) {
  if (files.length > 1) errors.push(`[title dupliqué] « ${title} » → ${files.join(", ")}`);
}
for (const [, files] of byDesc) {
  if (files.length > 1) errors.push(`[description dupliquée] ${files.join(", ")}`);
}

/* --- 3 & 4 : H1 unique, canonical ----------------------------------------- */
for (const p of pages) {
  if (p.h1s.length === 0) errors.push(`[aucun H1] ${p.file}`);
  else if (p.h1s.length > 1) errors.push(`[${p.h1s.length} H1] ${p.file}`);
  if (!p.canonical) errors.push(`[canonical absent] ${p.file}`);
}

/* --- 5 : similarité inter-pages ------------------------------------------- */
const fingerprints = pages.map((p) => ({ ...p, sh: shingles(p.text) }));
let worst = { score: 0, a: "", b: "" };

for (let i = 0; i < fingerprints.length; i++) {
  for (let j = i + 1; j < fingerprints.length; j++) {
    const score = jaccard(fingerprints[i].sh, fingerprints[j].sh);
    if (score > worst.score) {
      worst = { score, a: fingerprints[i].file, b: fingerprints[j].file };
    }
    if (score > SIMILARITY_MAX) {
      errors.push(
        `[similarité ${(score * 100).toFixed(1)} %] ${fingerprints[i].file} ↔ ${fingerprints[j].file}`,
      );
    }
  }
}

/* --- 6 : volume de texte sur les pages locales ----------------------------- */
for (const p of pages) {
  const isLocal = p.file.includes("/") && !p.file.startsWith("zones/");
  const words = p.text.split(/\s+/).length;
  if (isLocal && words < MIN_WORDS_LOCAL) {
    errors.push(`[page locale trop courte : ${words} mots] ${p.file}`);
  }
}

/* --- 7 : vocabulaire interdit sur les pages ramonage ----------------------- */
for (const p of pages) {
  if (!/ramonage/.test(p.file)) continue;
  const lower = p.text.toLowerCase();
  for (const term of FORBIDDEN_RAMONAGE) {
    // « cheminée » est tolérée quand elle sert explicitement à s'en démarquer.
    if (!lower.includes(term)) continue;
    const contextOk = /(rien à voir|n'a rien à voir|jamais sur des conduits de cheminée|différence avec un ramoneur|pas de la suie|conduit de chauffage)/.test(
      lower,
    );
    if (contextOk) {
      warnings.push(`[terme domestique en contexte de différenciation : « ${term} »] ${p.file}`);
    } else {
      errors.push(`[vocabulaire domestique interdit : « ${term} »] ${p.file}`);
    }
  }
}

/* -------------------------------------------------------------------------- */

console.log(
  `  Similarité maximale observée : ${(worst.score * 100).toFixed(1)} % ` +
    `(seuil ${SIMILARITY_MAX * 100} %)\n  ${worst.a} ↔ ${worst.b}\n`,
);

if (warnings.length) {
  console.log(`  ${warnings.length} avertissement(s) :`);
  for (const w of warnings.slice(0, 30)) console.log(`    · ${w}`);
  if (warnings.length > 30) console.log(`    · … ${warnings.length - 30} de plus`);
  console.log();
}

if (errors.length) {
  console.error(`  ${errors.length} ERREUR(S) BLOQUANTE(S) :`);
  for (const e of errors.slice(0, 40)) console.error(`    ✗ ${e}`);
  if (errors.length > 40) console.error(`    ✗ … ${errors.length - 40} de plus`);
  console.error();
  process.exit(1);
}

console.log("  ✓ Tous les contrôles passent.\n");
