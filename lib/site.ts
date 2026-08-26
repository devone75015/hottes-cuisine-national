/**
 * Configuration globale du site.
 * Les valeurs marquées TODO doivent être remplacées par les données réelles
 * de l'entreprise avant mise en production.
 */

export const site = {
  name: "Hottes Expert France",
  legalName: "Hottes Expert France", // TODO raison sociale réelle
  baseline: "Spécialiste national du nettoyage, dégraissage et ramonage des hottes de cuisine professionnelle",

  /** Domaine de production — sert au canonical, au sitemap et au JSON-LD. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hottes-expert-france.fr",

  /** Téléphone : affiché partout, cliquable. Un numéro de tracking par canal viendra s'y substituer. */
  phone: {
    display: "01 23 45 67 89", // TODO numéro réel
    href: "+33123456789",
  },

  email: "contact@hottes-expert-france.fr", // TODO

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
