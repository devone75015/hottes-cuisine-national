/**
 * Typologies d'établissements.
 * Les pages dédiées (/etablissements/…) arrivent en vague 2 : en vague 1,
 * chaque typologie pointe vers la prestation la plus pertinente pour elle,
 * afin de ne créer aucun lien mort.
 */

export interface Establishment {
  name: string;
  /** Prestation cible tant que la page verticale n'existe pas. */
  href: string;
  note: string;
  /** Clé dans le manifeste `data/images.ts`. */
  imageKey: string;
}

export const establishments: Establishment[] = [
  { name: "Restaurant", href: "/nettoyage-hotte-restaurant/", note: "Intervention hors service" , imageKey: "etab-restaurant" },
  { name: "Brasserie", href: "/nettoyage-hotte-restaurant/", note: "Amplitude horaire large" , imageKey: "etab-brasserie" },
  { name: "Hôtel", href: "/ramonage-hotte-professionnelle/", note: "Multi-postes de cuisson" , imageKey: "etab-hotel" },
  { name: "Fast-food", href: "/degraissage-hotte-professionnelle/", note: "Friture intensive" , imageKey: "etab-fast-food" },
  { name: "Kebab", href: "/degraissage-hotte-restaurant/", note: "Broche verticale" , imageKey: "etab-kebab" },
  { name: "Snack", href: "/nettoyage-hotte-restaurant/", note: "Forfait petits volumes" , imageKey: "etab-snack" },
  { name: "Pizzeria", href: "/ramonage-conduit-hotte/", note: "Conduit de four distinct" , imageKey: "etab-pizzeria" },
  { name: "Boulangerie", href: "/ramonage-conduit-hotte/", note: "Buées de four et farine" , imageKey: "etab-boulangerie" },
  { name: "Pâtisserie", href: "/nettoyage-filtres-hotte/", note: "Exigence d'hygiène" , imageKey: "etab-patisserie" },
  { name: "Boucherie", href: "/degraissage-hotte-professionnelle/", note: "Laboratoire de cuisson" , imageKey: "etab-boucherie-charcuterie" },
  { name: "Traiteur", href: "/entretien-hotte-professionnelle/", note: "Production par pics" , imageKey: "etab-traiteur" },
  { name: "Laboratoire alimentaire", href: "/nettoyage-systeme-extraction-cuisine-professionnelle/", note: "Traçabilité documentaire" , imageKey: "etab-laboratoire-alimentaire" },
  { name: "Cuisine centrale", href: "/nettoyage-systeme-extraction-cuisine-professionnelle/", note: "Continuité de production" , imageKey: "etab-cuisine-centrale" },
  { name: "Cuisine collective", href: "/nettoyage-reseau-extraction/", note: "Calendrier imposé" , imageKey: "etab-cuisine-collective" },
  { name: "Cantine scolaire", href: "/ramonage-conduit-extraction/", note: "Vacances scolaires" , imageKey: "etab-cantine-scolaire" },
  { name: "EHPAD", href: "/entretien-hotte-professionnelle/", note: "Service non interruptible" , imageKey: "etab-ehpad" },
  { name: "Hôpital / clinique", href: "/nettoyage-reseau-extraction/", note: "Plan de prévention" , imageKey: "etab-hopital-clinique" },
  { name: "Restaurant d'entreprise", href: "/nettoyage-systeme-extraction-cuisine-professionnelle/", note: "Interlocuteur technique" , imageKey: "etab-restaurant-entreprise" },
  { name: "Collectivité", href: "/contrat-entretien-hotte-professionnelle/", note: "Marché et reconduction" , imageKey: "etab-collectivite" },
];
