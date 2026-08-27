# Déploiement sur Hostinger — export statique

Le site est exporté en **HTML statique**. `npm run build` produit un dossier
`out/` déposable tel quel dans `public_html`, sans processus Node à maintenir.

Le site s'y prête bien : les 91 pages indexables sont toutes prégénérées et
aucune ne dépend de la requête.

---

## 1. Construire

```bash
NEXT_PUBLIC_SITE_URL=https://reparationhottecuisinenettoyage.fr npm run check
```

`npm run check` enchaîne le build **et** l'audit SEO. Si l'audit échoue, ne
déployez pas : le dossier `out/` produit contient un défaut réel.

Résultat : `out/` — 94 fichiers HTML, environ 21 Mo.

> ### ⚠ `NEXT_PUBLIC_SITE_URL` doit être présente AU MOMENT DU BUILD
>
> Elle est **inlinée dans le HTML**, pas lue à l'exécution. Toutes les pages
> étant prégénérées, les `canonical`, les `og:image`, le `sitemap.xml` et le
> `robots.txt` sont figés dans les fichiers produits.
>
> Sans elle, 91 pages se déclarent sur un domaine de démonstration. L'audit
> refuse alors de passer — c'est volontaire : mieux vaut un build rouge qu'un
> site indexé sur une mauvaise adresse.

---

## 2. Déposer sur Hostinger

**hPanel → Gestionnaire de fichiers → `public_html`**

Videz le dossier, puis déposez **le contenu de `out/`** — pas le dossier `out`
lui-même. `index.html` doit se retrouver directement à la racine de
`public_html`.

Par FTP, c'est la même chose : `out/*` → `public_html/`.

Le fichier `.htaccess` est inclus dans `out/`. Vérifiez qu'il a bien été
transféré : beaucoup de clients FTP masquent les fichiers commençant par un
point.

---

## 3. Le formulaire — le point à ne pas oublier

L'export statique supprime les Server Actions. Le formulaire poste désormais en
JavaScript vers **`/api/lead.php`**, livré dans `out/api/lead.php` et exécuté
par PHP sur l'hébergement mutualisé.

Les constantes sont déjà renseignées :

```php
const DEST_EMAIL     = 'devis@reparationhottecuisinenettoyage.fr';
const ALLOWED_ORIGIN = 'https://reparationhottecuisinenettoyage.fr';
```

`ALLOWED_ORIGIN` doit correspondre **exactement** à la forme servie du domaine.
Si vous basculez sur `www`, changez-la ici aussi, sinon toutes les demandes
seront rejetées en 403.

Ce script valide côté serveur, neutralise l'injection d'en-têtes, journalise
chaque demande dans `leads.log` puis envoie un courriel. Il répond `ok` même si
l'envoi échoue : le prospect ne doit pas voir d'erreur alors que ses
coordonnées sont enregistrées. La supervision se fait donc sur `leads.log`.

**Si les courriels n'arrivent pas** — c'est le cas le plus fréquent — la
fonction `mail()` de PHP est souvent filtrée. La correction fiable est de
passer par le SMTP authentifié de votre boîte Hostinger.

**Pour utiliser un service tiers** (Formspree, Brevo, Web3Forms) plutôt que
PHP, définissez au build :

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxx
```

---

## 4. Domaine, HTTPS et canonicalisation

Rattachez le domaine dans **hPanel → Domaines**, activez le SSL (Let's Encrypt,
inclus).

**La forme retenue est SANS `www`** — celle du domaine de l'adresse e-mail :

```
https://reparationhottecuisinenettoyage.fr
```

Trois endroits doivent désigner le même hôte, sans quoi Google verra deux sites
servant le même contenu :

| Où | Valeur |
|---|---|
| `NEXT_PUBLIC_SITE_URL` au build | `https://reparationhottecuisinenettoyage.fr` |
| `ALLOWED_ORIGIN` dans `lead.php` | `https://reparationhottecuisinenettoyage.fr` |
| `.htaccess` | variante B active — `www` redirigé vers le domaine nu |

Le `.htaccess` livré force déjà HTTPS, redirige `www` vers la forme nue et
ajoute le slash final.

**Pour servir le site sur `www` à la place**, il faut inverser les trois : la
variante A du `.htaccess`, `ALLOWED_ORIGIN`, et `NEXT_PUBLIC_SITE_URL`.

---

## 5. Ce que l'export statique fait perdre, et comment c'est compensé

| Perdu | Compensation |
|---|---|
| Server Actions | Le formulaire poste vers `/api/lead.php` |
| Optimiseur d'images intégré | Chargeur personnalisé : Pexels redimensionne lui-même via `?w=`, le `srcset` va de 384 à 3840 px |
| `redirects` / `headers` de `next.config` | Repris dans `.htaccess` |
| Revalidation à la demande | Sans objet : le contenu ne change qu'au build |

L'absence de serveur a aussi des avantages réels ici : plus de processus à
surveiller, plus de redémarrage à gérer, et un temps de réponse qui ne dépend
que du serveur web.

---

## 6. Mettre à jour le site

À chaque modification de contenu ou de code :

```bash
NEXT_PUBLIC_SITE_URL=https://reparationhottecuisinenettoyage.fr npm run check
```

puis redéposez le contenu de `out/` dans `public_html`.

Il n'y a **pas de déploiement automatique** avec cette méthode : un `push` sur
GitHub ne met pas le site à jour. C'est la contrepartie du choix statique.

Pour prévisualiser localement exactement ce qui sera déposé :

```bash
npm run preview        # sert out/ sur http://localhost:3000
```

---

## 7. Reste à faire avant l'ouverture au public

Ces éléments sont signalés en clair sur le site par un encart « À compléter » :

- raison sociale et nom commercial dans [`lib/site.ts`](lib/site.ts) — le
  téléphone et l'e-mail sont renseignés
- mentions légales et politique de confidentialité
- fourchettes tarifaires dans [`data/pricing.ts`](data/pricing.ts) — laissées à
  `null`, les pages affichent « sur devis » plutôt qu'un prix inventé
- vérification du périmètre électrique du pilier Réparation au regard des
  habilitations réelles
- mesure d'audience et suivi des conversions (non installés)
- photos d'intervention réelles, en remplacement des visuels d'illustration
