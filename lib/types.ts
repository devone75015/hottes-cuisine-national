export type PillarKey = "nettoyage" | "degraissage" | "ramonage" | "extraction" | "reparation";

export interface Faq {
  q: string;
  a: string;
}

export interface ContentSection {
  h2: string;
  body: string[];
  list?: string[];
  /** Rendu en encadré technique plutôt qu'en paragraphe courant. */
  callout?: string;
}

export interface Service {
  slug: string;
  pillar: PillarKey;
  isPillar: boolean;
  /** Libellé court pour la navigation et les fils d'Ariane. */
  nav: string;
  /**
   * Libellé ultra-court réservé à la barre de navigation principale.
   * Avec cinq piliers, « Réparation & dépannage » et « Système d'extraction »
   * font déborder la barre : le menu utilise ce libellé, tout le reste du site
   * garde `nav`.
   */
  navShort?: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  sections: ContentSection[];
  /** Ce que comprend concrètement la prestation. */
  included: string[];
  /** Établissements cités sur cette page (libellés, pas de slugs en vague 1). */
  targets: string[];
  faq: Faq[];
  /** Slugs de services liés — alimente le maillage interne. */
  related: string[];
  /** Villes pour lesquelles une page prestation + ville existe. */
  cityPages?: string[];
  /**
   * Angle rédactionnel réservé AUX PAGES LOCALES.
   * Ce texte n'apparaît jamais sur la page prestation nationale : c'est ce qui
   * évite que /nettoyage-hotte-restaurant/ et /nettoyage-hotte-restaurant/lyon/
   * se recopient, et ce qui différencie deux prestations dans une même ville.
   */
  localAngle?: string[];
  priority: number;
}

export interface Region {
  slug: string;
  name: string;
  /** Nom court utilisé dans les titres serrés. */
  shortName: string;
  code: string;
  departments: { code: string; name: string }[];
  cities: string[];
  h1: string;
  title: string;
  description: string;
  /** Angle éditorial propre à la région — jamais réutilisé ailleurs. */
  angle: string;
  intro: string[];
  sections: ContentSection[];
  faq: Faq[];
  /** Vague de production. */
  wave: 1 | 2 | 3 | 4;
}

/** Modèle éditorial appliqué à une page locale (plan anti-duplicate). */
export type EditorialTemplate = "terrain" | "technique" | "sectoriel" | "process" | "comparatif" | "reassurance";

export interface City {
  slug: string;
  name: string;
  /** Forme utilisée après une préposition : « à Paris », « au Havre », « aux Sables ». */
  prep: string;
  department: string;
  departmentCode: string;
  region: string;
  epci: string;
  tier: 1 | 2 | 3;
  template: EditorialTemplate;
  /** Communes réellement couvertes — bassin d'intervention, jamais un rayon aveugle. */
  nearby: string[];
  /** Quartiers ou zones d'activité cités dans le contenu. */
  districts: string[];
  /** Contexte économique local, propre à cette ville. */
  context: string[];
  /** Contrainte technique dominante du bâti local. */
  constraint: string;
  /** Typologie d'établissements dominante. */
  dominantEstablishments: string[];
  /** Exemple d'intervention anonymisé, unique à cette ville. */
  caseStudy: { title: string; body: string };
  /** Prestations déclinées en page prestation + ville. */
  services: string[];
  faq: Faq[];
}

export interface Article {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: string;
  readingTime: number;
  published: string;
  excerpt: string;
  sections: ContentSection[];
  /** Money page principale alimentée par l'article — un seul lien fort. */
  primaryTarget: string;
  secondaryTargets: string[];
  faq?: Faq[];
}
