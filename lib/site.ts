/**
 * Configuration globale du site.
 * Les valeurs marquées TODO doivent être remplacées par les données réelles
 * de l'entreprise avant mise en production.
 */

export const site = {
  name: "Hottes Expert France",
  legalName: "Hottes Expert France", // TODO raison sociale réelle
  baseline: "Spécialiste national du nettoyage, dégraissage et ramonage des hottes de cuisine professionnelle",

  /**
   * Domaine de production — sert au canonical, au sitemap et au JSON-LD.
   *
   * ⚠ La forme retenue ici est SANS www, celle du domaine de l'adresse e-mail.
   * Si le site doit être servi sur www, il faut changer cette valeur ET la
   * règle correspondante dans public/.htaccess : les deux doivent désigner
   * le même hôte, sinon Google voit deux sites servant le même contenu.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://reparationhottecuisinenettoyage.fr",

  /**
   * Téléphone : affiché partout, cliquable.
   * `display` est au format national, celui qu'un restaurateur lit et compose.
   * `href` est au format international : c'est le seul qui fonctionne de
   * manière fiable depuis un mobile, y compris hors de France.
   * Un numéro de tracking par canal viendra s'y substituer le moment venu.
   */
  phone: {
    display: "07 56 93 11 11",
    href: "+33756931111",
  },

  email: "devis@reparationhottecuisinenettoyage.fr",

  hours: "Du lundi au vendredi, 7h – 19h",
  emergency: "Interventions d'urgence 7j/7",

  /** Délais annoncés — à aligner sur la réalité opérationnelle. */
  promise: {
    quote: "Devis sous 24 h",
    callback: "Rappel sous 2 h ouvrées",
    coverage: "Intervention partout en France",
  },

  /** Preuves affichées dans le bandeau de réassurance. TODO : chiffres réels. */
  proof: [
    { value: "13", label: "régions couvertes" },
    { value: "24 h", label: "pour recevoir votre devis" },
    { value: "100 %", label: "des interventions attestées" },
    { value: "RC Pro", label: "assurance professionnelle" },
  ],

  /**
   * Google Tag Manager.
   *
   * Le conteneur est injecté dans le <head> au build. Pour un environnement
   * de préproduction où l'on ne veut pas polluer les statistiques, définir
   * NEXT_PUBLIC_GTM_ID à une chaîne vide : le conteneur n'est alors pas posé.
   */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MBDMJ6C3",

  social: {} as Record<string, string>,
} as const;

/**
 * Construit une URL absolue canonique à partir d'un chemin interne.
 * Le site est servi avec slash final (`trailingSlash: true`) : la forme
 * canonique le porte donc toujours.
 */
export function absoluteUrl(path = "/"): string {
  const withLead = path.startsWith("/") ? path : `/${path}`;
  const withTrail = withLead.endsWith("/") ? withLead : `${withLead}/`;
  return `${site.url}${withTrail}`;
}
