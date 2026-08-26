/**
 * Tarification.
 *
 * ⚠️ AUCUN PRIX N'EST INVENTÉ ICI.
 *
 * Les fourchettes sont volontairement à `null` : elles doivent être renseignées
 * par le client avec ses tarifs réels avant mise en production. Tant qu'elles
 * valent `null`, les pages prix affichent « sur devis » et se concentrent sur
 * les facteurs de variation — ce qui reste utile en SEO et honnête en conversion.
 *
 * Pour activer l'affichage : remplacer `null` par { from: 000, to: 000 } en euros HT.
 */

export interface PriceRange {
  from: number;
  to: number;
}

export interface PriceLine {
  label: string;
  detail: string;
  range: PriceRange | null;
}

export const nettoyagePrices: PriceLine[] = [
  {
    label: "Hotte simple, restaurant de quartier",
    detail: "Une hotte jusqu'à 3 m, filtres à chocs, installation suivie",
    range: null,
  },
  {
    label: "Hotte double ou linéaire important",
    detail: "Plusieurs postes de cuisson, jeu de filtres étendu",
    range: null,
  },
  {
    label: "Première intervention sur installation jamais traitée",
    detail: "Dépôts polymérisés, temps de contact prolongé, action mécanique intensive",
    range: null,
  },
  {
    label: "Cuisine centrale ou site multi-postes",
    detail: "Intervention planifiée sur plusieurs demi-journées",
    range: null,
  },
];

export const ramonagePrices: PriceLine[] = [
  {
    label: "Conduit court et rectiligne, trappes présentes",
    detail: "Moins de 10 m, accès disponibles, dépôt modéré",
    range: null,
  },
  {
    label: "Conduit long ou fortement coudé",
    detail: "Traitement individualisé des points singuliers",
    range: null,
  },
  {
    label: "Réseau sans trappe de visite",
    detail: "Périmètre partiel, devis de pose de trappes établi séparément",
    range: null,
  },
  {
    label: "Réseau complet jusqu'au rejet",
    detail: "Conduit, gaines, caisson d'extraction et sortie",
    range: null,
  },
];

/** Facteurs de variation — communs aux deux pages prix, formulés différemment. */
export const priceFactors = [
  {
    title: "Le nombre et le linéaire de hottes",
    body: "Une hotte de 2 mètres et un linéaire de 8 mètres sur trois postes ne demandent ni le même temps ni le même volume de produit.",
  },
  {
    title: "Le type et la quantité de filtres",
    body: "Filtres à chocs, à cassettes ou à charbon : le traitement diffère, et le nombre de filtres pèse directement sur la durée d'intervention.",
  },
  {
    title: "L'état d'encrassement au moment de l'intervention",
    body: "C'est le facteur le plus déterminant. Un dépôt frais se retire en une fraction du temps nécessaire à une graisse polymérisée depuis plusieurs années.",
  },
  {
    title: "L'accessibilité du plénum et du conduit",
    body: "Un réseau équipé de trappes de visite se traite plus vite et plus complètement qu'un réseau fermé, où chaque mètre supplémentaire coûte du temps.",
  },
  {
    title: "Le créneau horaire demandé",
    body: "Une intervention de nuit ou un dimanche mobilise les équipes en dehors des plages habituelles et se répercute sur le devis.",
  },
  {
    title: "La récurrence",
    body: "Un passage d'entretien sur une installation suivie coûte nettement moins qu'une remise à niveau. C'est l'argument économique principal du contrat annuel.",
  },
];
