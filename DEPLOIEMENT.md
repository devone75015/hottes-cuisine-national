# Déploiement sur Hostinger — plan Business

Le site est une application **Next.js 16 en mode serveur**, pas un site statique.
Le plan Business de Hostinger sait exécuter des applications Node.js déployées
depuis un dépôt GitHub, avec reconstruction automatique à chaque `push`.

---

## 1. Créer l'application dans hPanel

**Sites web → Ajouter un site web → Deploy Web App → GitHub**

Connectez le dépôt `devone75015/hottes-cuisine-national`, branche `main`.

Hostinger détecte Next.js et pré-remplit les champs. Vérifiez qu'ils
correspondent exactement à ceci :

| Champ | Valeur | Pourquoi |
|---|---|---|
| **Framework preset** | `Next.js` | détecté automatiquement |
| **Branch** | `main` | branche de production |
| **Node.js version** | `22` | Next 16 exige ≥ 20.9 ; 22 est la version testée |
| **Package manager** | `npm` | un `package-lock.json` est versionné |
| **Build command** | `npm run check` | voir §3 |
| **Output directory** | `.next` | sortie de build de Next |
| **Entry file** | `server.js` | fourni à la racine du dépôt |

---

## 2. Variable d'environnement — la seule obligatoire

**Sites web → votre application → Variables d'environnement**

```
NEXT_PUBLIC_SITE_URL = https://www.votre-domaine-reel.fr
```

Sans slash final, avec le protocole, sur le domaine que Google doit indexer.

> ### ⚠ Cette variable doit exister AVANT le premier build
>
> Elle est **inlinée dans le HTML au moment du build**, pas lue à l'exécution.
> Toutes les pages étant prégénérées, les balises `canonical`, les `og:image`,
> le `sitemap.xml` et le `robots.txt` sont figés dans les fichiers produits.
>
> La définir seulement après un premier déploiement n'aurait aucun effet tant
> qu'un nouveau build n'a pas tourné.
>
> **Si elle manque, le build échoue volontairement.** L'audit SEO refuse de
> laisser passer 91 pages dont la canonique pointe vers un domaine de
> démonstration : c'est le pire scénario SEO possible, il vaut mieux un
> déploiement rouge qu'un site indexé sur une mauvaise adresse.

`PORT` et `HOSTNAME` sont fournis par Hostinger — **ne les définissez pas**.

---

## 3. Pourquoi `npm run check` plutôt que `npm run build`

`npm run check` enchaîne le build **et** l'audit SEO
([`scripts/seo-audit.mjs`](scripts/seo-audit.mjs)). Un déploiement est refusé si
l'un de ces huit contrôles échoue :

1. Title unique sur tout le corpus
2. Meta description unique et de longueur exploitable
3. Un seul `<h1>` par page
4. Canonical présente partout
5. Similarité inter-pages sous 55 % (n-grammes, indice de Jaccard)
6. Minimum 350 mots propres sur chaque page locale
7. Aucun vocabulaire de chauffage domestique sur les pages ramonage
8. Domaine canonique réel

C'est ce qui rend le plan anti-duplicate **contraignant** plutôt que
déclaratif : une page locale trop proche d'une autre ne peut pas atteindre la
production.

**Le compromis :** une régression de contenu bloque la mise en ligne. Si vous
préférez pouvoir déployer malgré un avertissement, remplacez la commande par
`npm run build` — mais lancez alors `npm run audit:seo` en local avant chaque
push, sinon le garde-fou ne sert plus à rien.

---

## 4. Domaine et HTTPS

Une fois l'application déployée, **Sites web → Domaines** pour rattacher le
domaine réel. Activez le certificat SSL (Let's Encrypt, inclus dans le plan).

Le domaine rattaché doit être **identique** à `NEXT_PUBLIC_SITE_URL`, y compris
sur le `www` : `www.exemple.fr` et `exemple.fr` sont deux hôtes différents pour
Google. Choisissez-en un, redirigez l'autre vers lui.

---

## 5. Ce que fait `server.js`

Hostinger demande un fichier d'entrée `.js`. Celui de la racine reproduit
exactement le comportement de `next start` :

- il lit le port dans `process.env.PORT` — l'écrire en dur ferait échouer le
  démarrage, car le port est attribué par l'hébergeur ;
- il écoute sur `0.0.0.0` et non `127.0.0.1`, sans quoi le reverse proxy de
  Hostinger ne peut pas joindre le processus.

`npm start` utilise le même fichier en local : ce qui tourne sur votre machine
est ce qui tourne en production.

---

## 6. Points d'attention propres à cet hébergement

**Dépendances de build.** `sass` et `typescript` sont déclarés en
`dependencies`, pas en `devDependencies`. C'est volontaire : si l'hébergeur
installe en `--omit=dev`, le build échouerait sans eux — le SCSS ne serait plus
compilé et la vérification de types serait impossible.

**Optimisation des images.** `sharp` est déclaré explicitement, alors qu'il
n'est qu'une dépendance optionnelle de Next. Sans lui, l'optimisation des
images distantes échoue silencieusement en production.

**Mémoire au build.** Le site prégénère 96 pages. C'est confortable, mais si le
build échoue sur un dépassement mémoire, la piste à suivre est
`NODE_OPTIONS=--max-old-space-size=2048` en variable d'environnement.

**Compression.** Elle est désactivée côté Next (`compress: false`) : le reverse
proxy de Hostinger s'en charge déjà, la refaire consommerait du CPU pour rien.

---

## 7. Après chaque `push` sur `main`

Hostinger reconstruit automatiquement. Le déploiement échoue si le build ou
l'audit SEO échoue — c'est le comportement recherché.

En local, avant de pousser :

```bash
npm run check     # build + audit SEO, exactement ce que fait l'hébergeur
npm run lint      # ESLint
```

---

## 8. Reste à faire avant l'ouverture au public

Ces éléments sont signalés en clair sur le site par un encart « À compléter » :

- coordonnées réelles (téléphone, e-mail, adresse) dans [`lib/site.ts`](lib/site.ts)
- mentions légales et politique de confidentialité
- fourchettes tarifaires dans [`data/pricing.ts`](data/pricing.ts) — laissées à
  `null`, les pages affichent « sur devis » plutôt qu'un prix inventé
- branchement du formulaire dans [`lib/lead.ts`](lib/lead.ts) : les demandes
  sont pour l'instant journalisées côté serveur, pas envoyées
- vérification du périmètre électrique du pilier Réparation au regard des
  habilitations réelles
- mesure d'audience et suivi des conversions (non installés)
