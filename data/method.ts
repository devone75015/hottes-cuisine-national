/** Protocole d'intervention en 7 étapes — réutilisé homepage + page méthode. */

export interface MethodStep {
  n: string;
  title: string;
  body: string;
}

export const method: MethodStep[] = [
  {
    n: "01",
    title: "Prise de contact",
    body: "Un échange de quelques minutes suffit à cerner votre installation : type d'établissement, nombre de hottes, dernier entretien connu, contrainte de calendrier. Des photos accélèrent nettement le chiffrage.",
  },
  {
    n: "02",
    title: "Devis sous 24 heures",
    body: "Un chiffrage détaillé, poste par poste, avec le périmètre exactement couvert. S'il existe une incertitude sur l'accessibilité du réseau, elle figure au devis — pas en supplément découvert sur place.",
  },
  {
    n: "03",
    title: "Repérage et diagnostic",
    body: "Sur site, avant toute opération : configuration réelle du réseau, points d'accès disponibles, épaisseur des dépôts, état des filtres et des raccords. L'état initial est photographié.",
  },
  {
    n: "04",
    title: "Protection du poste",
    body: "Pianos, plaques, friteuses, plans de travail et sols sont bâchés. La zone de travail est confinée avant toute ouverture du réseau. Cette étape n'est jamais escamotée.",
  },
  {
    n: "05",
    title: "Intervention",
    body: "Traitement de l'amont vers l'aval : filtres en bac, caisson et plénum, puis conduit et gaines selon le périmètre retenu. Action chimique adaptée au dépôt, action mécanique pour le retrait, récupération systématique des résidus.",
  },
  {
    n: "06",
    title: "Contrôle et remise en service",
    body: "Rinçage, séchage, remontage, vérification du fonctionnement de l'aspiration et de l'éclairage. Dépose des protections et nettoyage de la zone. La cuisine est restituée prête à servir.",
  },
  {
    n: "07",
    title: "Attestation et suivi",
    body: "Rapport photo avant / après et attestation d'entretien datée, précisant le périmètre traité et les zones non accessibles. Puis une préconisation de périodicité fondée sur ce que nous avons réellement constaté.",
  },
];
