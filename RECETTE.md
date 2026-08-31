# Recette avant mise en ligne

Le contrôle qualité est réparti en deux : ce qu'une machine vérifie mieux qu'un
humain, et ce qu'aucun script ne peut voir.

```bash
npm run check      # build + audit SEO + portail de pré-déploiement
```

Si cette commande échoue, **la mise en ligne est refusée**. C'est le point
important : le contrôle n'est pas un document qu'on relit, c'est une commande
qui bloque.

---

## Ce qui est automatisé — 21 contrôles bloquants

### `scripts/seo-audit.mjs` — contenu et sémantique

| # | Contrôle |
|---|---|
| 1 | Title unique sur tout le corpus |
| 2 | Meta description unique et de longueur exploitable |
| 3 | Un seul `<h1>` par page |
| 4 | Canonical présente sur chaque page |
| 5 | Similarité inter-pages sous 55 % (5-grammes, Jaccard) |
| 6 | Minimum 350 mots propres sur chaque page locale |
| 7 | Aucun vocabulaire de chauffage domestique sur les pages ramonage |
| 8 | Un seul et même hôte canonique sur tout le corpus |

### `scripts/preflight.mjs` — intégrité de ce qui part en production

| # | Contrôle |
|---|---|
| 9 | Aucun lien interne cassé — chaque `href` résolu contre `out/` |
| 10 | Aucun texte temporaire (`À compléter`, `TODO`, `localhost`, `votre-domaine`…) |
| 11 | Chaque image a un `alt` non vide |
| 12 | Chaque image locale existe réellement |
| 13 | Bouton d'appel présent sur chaque page commerciale |
| 14 | Lien vers le devis présent sur chaque page commerciale |
| 15 | Chaque URL du sitemap correspond à un fichier réel |
| 16 | Aucune page `noindex` dans le sitemap |
| 17 | `robots.txt` ne bloque pas le site |
| 18 | `404.html`, `.htaccess`, `api/lead.php` présents dans `out/` |
| 19 | Formulaire présent sur accueil, devis et contact |
| 20 | Aucun asset référencé introuvable |
| 21 | Poids transféré de la page la plus lourde sous 400 Ko |

---

## Ce qu'aucun script ne peut vérifier

Ces points demandent un navigateur, un appareil réel ou un site déjà déployé.
**Ils ne sont pas optionnels** : ce sont exactement ceux où les défauts
coûteux se cachent.

### Rendu et responsive

- [ ] iPhone (Safari) — le plus exigeant sur les hauteurs de viewport
- [ ] Android (Chrome)
- [ ] Tablette en portrait et en paysage
- [ ] Desktop en 1280, 1440 et 1920
- [ ] Firefox et Edge — la coupe technique du réseau d'extraction utilise
      `animation-timeline: view()`, non supportée partout : vérifier que le
      contenu s'affiche bien, simplement sans animation
- [ ] Aucun scroll horizontal sur mobile
- [ ] Aucun texte coupé, aucun bloc superposé
- [ ] Barre d'appel fixe mobile : elle ne doit jamais masquer le dernier champ
      d'un formulaire

### Parcours réel, en se mettant à la place d'un restaurateur

- [ ] Ouvrir l'URL directement, sans passer par Google
- [ ] Le premier écran dit-il qui intervient, sur quoi, et où ?
- [ ] Cliquer le bouton d'appel depuis un vrai téléphone — le numéro se compose-t-il ?
- [ ] Remplir le formulaire de devis en entier
- [ ] Remplir le formulaire de dépannage en entier
- [ ] **Vérifier qu'un lead de test arrive réellement** dans la boîte
      `devis@reparationhottecuisinenettoyage.fr`
- [ ] Vérifier qu'il apparaît aussi dans `leads.log`
- [ ] Interrompre volontairement après l'étape 1 : le lead partiel doit être
      enregistré, c'est ce qui rend le prospect rappelable

### Mesure et conversions

À vérifier dans **l'aperçu de Google Tag Manager**, site déployé :

- [ ] Le conteneur se charge — événement `gtm.js` visible
- [ ] `tel_click` part au clic sur un numéro, depuis l'en-tête, la barre fixe
      mobile, le pied de page et les bandeaux
- [ ] `devis_click` part au clic sur un bouton « Demander un devis »
- [ ] `form_step_1` part à la validation de la première étape — c'est la
      conversion la plus importante à suivre : le lead est déjà rappelable
- [ ] `form_submit` part à l'envoi complet
- [ ] Sur le formulaire de dépannage, le paramètre `state` distingue bien une
      cuisine à l'arrêt d'un signe avant-coureur — c'est ce qui permet de
      valoriser différemment les conversions dans Google Ads
- [ ] Les conversions sont importées dans Google Ads et marquées comme
      principales

### Technique, une fois déployé

- [ ] HTTPS actif, certificat valide
- [ ] `www` redirige bien vers le domaine nu (ou l'inverse, selon le choix)
- [ ] Aucune erreur dans la console du navigateur
- [ ] `404.html` s'affiche sur une URL inexistante
- [ ] `/leads.log` renvoie bien 403
- [ ] Core Web Vitals mesurés sur PageSpeed Insights, en mobile

---

## Écarts assumés par rapport au prompt de contrôle générique

Le prompt de contrôle du groupe couvre plusieurs métiers. Certains points ne
s'appliquent pas à ce site, et il vaut mieux le dire que cocher des cases vides.

| Point du prompt | Statut ici |
|---|---|
| Webhook n8n de production | **Sans objet** — le formulaire poste vers `api/lead.php`, pas vers n8n. Si n8n doit être branché, il suffit de définir `NEXT_PUBLIC_FORM_ENDPOINT`. |
| Page « Merci » et redirection | **Sans objet** — le formulaire confirme sur place, sans changement de page. C'est délibéré : une redirection perd le contexte et casse le suivi de conversion sur un site statique. |
| Prise de rendez-vous en ligne | **Non prévu** — le parcours va vers l'appel et le devis. |
| Pages départements | **Non produites** — prévues en vague 3 du cadrage. Les 13 régions existent. |
| Photos métier (débouchage, toiture, TCE) | **Sans objet** — le métier est la hotte professionnelle. Les 90 visuels sont cohérents avec leur page, mais ce sont des **illustrations**, pas vos interventions. |
| Protection anti-spam | **Partielle** — `lead.php` valide, limite la taille et contrôle l'origine. Aucun captcha : à ajouter si le volume de spam le justifie. |
| Tracking Analytics / Ads | **Conteneur GTM posé** (`GTM-MBDMJ6C3`) et quatre événements de conversion poussés dans le `dataLayer`. Les balises restent à configurer dans GTM. |
| Bandeau de consentement | **Non installé** — bloquant si les balises du conteneur déposent des cookies de mesure ou de publicité. |

---

## Verdict actuel

`npm run check` **échoue**, volontairement, sur quatre pages :

```
✗ [texte temporaire « À compléter »] mentions-legales/
✗ [texte temporaire « À compléter »] confidentialite/
✗ [texte temporaire « À compléter »] entreprise/
✗ [texte temporaire « À compléter »] contact/
```

Les mentions légales et la politique de confidentialité sont **obligatoires**
et ne peuvent pas être rédigées sans vos informations réelles : raison sociale,
forme juridique, capital, SIRET, RCS, directeur de la publication, hébergeur,
assurance, durées de conservation des données.

Tant que ces quatre pages ne sont pas complétées, le portail refuse la mise en
ligne — et il a raison.
