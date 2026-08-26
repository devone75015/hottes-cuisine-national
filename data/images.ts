/**
 * MANIFESTE D'IMAGES
 *
 * Source : Pexels — licence gratuite, usage commercial autorisé, sans
 * attribution obligatoire. Le crédit photographe est néanmoins rendu sur le
 * site : c'est une bonne pratique, et cela documente la provenance.
 * Licence : https://www.pexels.com/license/
 *
 * ⚠ TOUS les identifiants de ce fichier ont été VÉRIFIÉS : chaque URL a été
 * appelée et renvoie bien une image (HTTP 200, content-type image/*).
 * Ne jamais ajouter un identifiant sans l'avoir testé — un ID inventé produit
 * un 404 silencieux en production.
 *
 * ⚠ Ces images restent des VISUELS D'ILLUSTRATION. Elles ne montrent pas vos
 * interventions. Les remplacer par vos propres photos de chantier est le
 * meilleur gain de conversion possible sur ce type de site : un prospect
 * reconnaît immédiatement une photo de banque d'images.
 *
 * `title` sert de légende visible et d'attribut title.
 * `alt`   décrit l'image pour un lecteur d'écran et pour Google. Il est
 *         rédigé pour être compris hors contexte, sans bourrage de mots-clés.
 */

export interface SiteImage {
  /** Clé de rattachement : slug de page, ou identifiant de bloc. */
  key: string;
  pexelsId: number;
  title: string;
  alt: string;
  credit: string;
  /** Rapport largeur/hauteur souhaité au rendu. */
  ratio?: "wide" | "square" | "portrait";
}

/* -------------------------------------------------------------------------- */
/*  Fabrique d'URL                                                            */
/* -------------------------------------------------------------------------- */

/** URL d'une image Pexels à la largeur demandée. */
export function pexelsUrl(id: number, width = 1600): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/** Page de la photo sur Pexels — utile pour créditer ou re-télécharger. */
export function pexelsPage(id: number): string {
  return `https://www.pexels.com/photo/${id}/`;
}

/* -------------------------------------------------------------------------- */
/*  HOMEPAGE                                                                   */
/* -------------------------------------------------------------------------- */

export const images: SiteImage[] = [
  {
    key: "home-hero",
    pexelsId: 6375553,
    title: "Cuisine professionnelle inox avant service",
    alt: "Cuisine professionnelle vide aux surfaces en inox, avec plans de travail et équipements de cuisson sous la hotte",
    credit: "Skylar Kang / Pexels",
    ratio: "wide",
  },
  {
    key: "home-og",
    pexelsId: 34276646,
    title: "Cuisine industrielle équipée",
    alt: "Cuisine industrielle avec appareils en acier inoxydable, casseroles et poêles suspendues au-dessus du poste de cuisson",
    credit: "zkankeklik / Pexels",
    ratio: "wide",
  },
  {
    key: "home-why",
    pexelsId: 33210357,
    title: "Cuisine commerciale et matériel de production",
    alt: "Cuisine commerciale moderne équipée de batteurs industriels et d'outils de production alimentaire",
    credit: "Damla Selen Demir / Pexels",
    ratio: "wide",
  },

  /* ------------------------------- PILIERS ------------------------------- */
  {
    key: "nettoyage-hotte-professionnelle",
    pexelsId: 32239874,
    title: "Poste de cuisson sous hotte professionnelle",
    alt: "Poste de cuisson d'une cuisine professionnelle éclairé par la rampe lumineuse intégrée à la hotte d'extraction",
    credit: "Alina Okan / Pexels",
    ratio: "wide",
  },
  {
    key: "degraissage-hotte-professionnelle",
    pexelsId: 5779781,
    title: "Cuisson au grill sous hotte",
    alt: "Chef saisissant une pièce de viande au grill, flammes et fumées grasses aspirées par la hotte au-dessus du piano",
    credit: "RDNE Stock project / Pexels",
    ratio: "wide",
  },
  {
    key: "ramonage-hotte-professionnelle",
    pexelsId: 39051996,
    title: "Conduits d'extraction en façade de restaurant",
    alt: "Conduits métalliques d'extraction courant le long de la façade arrière d'un restaurant jusqu'au rejet",
    credit: "Talal / Pexels",
    ratio: "wide",
  },
  {
    key: "extraction-cuisine-professionnelle",
    pexelsId: 32032996,
    title: "Réseau de ventilation métallique",
    alt: "Réseau de ventilation métallique en environnement industriel, avec jonctions et coudes de gaines apparents",
    credit: "Bingqian Li / Pexels",
    ratio: "wide",
  },

  /* ----------------------------- NETTOYAGE ------------------------------ */
  {
    key: "nettoyage-hotte-restaurant",
    pexelsId: 15671373,
    title: "Service en cuisine de restaurant",
    alt: "Cuisinier en pleine préparation dans une cuisine de restaurant, sous une hotte professionnelle en fonctionnement",
    credit: "Luis Becerra / Pexels",
    ratio: "wide",
  },
  {
    key: "nettoyage-filtres-hotte",
    pexelsId: 8629124,
    title: "Lavage en bac inox",
    alt: "Nettoyage d'éléments métalliques dans un bac en acier inoxydable de cuisine professionnelle",
    credit: "Kampus Production / Pexels",
    ratio: "wide",
  },
  {
    key: "nettoyage-conduit-hotte",
    pexelsId: 29086539,
    title: "Conduit d'extraction en applique",
    alt: "Large conduit d'extraction métallique fixé sur un mur de briques, remontant vers le rejet en toiture",
    credit: "Victor Mora Griega / Pexels",
    ratio: "wide",
  },
  {
    key: "nettoyage-gaine-extraction",
    pexelsId: 8297856,
    title: "Gaines horizontales en plafond",
    alt: "Gaines d'extraction horizontales courant au plafond d'un local technique, avec raccords et suspensions",
    credit: "Mikhail Nilov / Pexels",
    ratio: "wide",
  },

  /* ----------------------------- DÉGRAISSAGE ---------------------------- */
  {
    key: "degraissage-hotte-restaurant",
    pexelsId: 17303438,
    title: "Piano de cuisson en service",
    alt: "Casseroles et poêles sur le piano d'une cuisine de restaurant, sous l'aspiration de la hotte",
    credit: "Fatma Çekmez / Pexels",
    ratio: "wide",
  },
  {
    key: "degraissage-conduit-extraction",
    pexelsId: 36129008,
    title: "Conduits d'extraction alignés",
    alt: "Trois conduits d'extraction industriels alignés sur un mur en béton, en attente d'entretien",
    credit: "Jan van der Wolf / Pexels",
    ratio: "wide",
  },

  /* ------------------------------ RAMONAGE ------------------------------ */
  {
    key: "ramonage-hotte-restaurant",
    pexelsId: 28914401,
    title: "Conduits d'extraction sur façade urbaine",
    alt: "Conduits d'extraction de cuisine remontant le long de la façade d'un immeuble de centre-ville",
    credit: "Roma Captainbarduck / Pexels",
    ratio: "wide",
  },
  {
    key: "ramonage-conduit-hotte",
    pexelsId: 11538226,
    title: "Conduit métallique et trappe d'accès",
    alt: "Conduit de ventilation métallique repéré et étiqueté, équipé d'un accès permettant son entretien intérieur",
    credit: "TheShutterVision / Pexels",
    ratio: "wide",
  },
  {
    key: "ramonage-conduit-extraction",
    pexelsId: 2464420,
    title: "Réseau apparent en plafond technique",
    alt: "Plafond technique laissant apparaître le tracé complet des gaines et conduits d'extraction",
    credit: "Adrien Olichon / Pexels",
    ratio: "wide",
  },
  {
    key: "ramonage-gaine-extraction",
    pexelsId: 26753121,
    title: "Gaines apparentes et éclairage technique",
    alt: "Gaines d'extraction apparentes au plafond d'un local professionnel, accessibles pour intervention",
    credit: "Muharrem Alper / Pexels",
    ratio: "wide",
  },

  /* ----------------------------- EXTRACTION ----------------------------- */
  {
    key: "nettoyage-systeme-extraction-cuisine-professionnelle",
    pexelsId: 7396978,
    title: "Réseau d'extraction en toiture",
    alt: "Vue en contre-plongée du réseau de gaines d'extraction installé sur la toiture d'un bâtiment",
    credit: "Alex360 / Pexels",
    ratio: "wide",
  },
  {
    key: "nettoyage-conduit-extraction",
    pexelsId: 10033425,
    title: "Conduits d'extraction en façade",
    alt: "Conduits d'extraction métalliques installés sur la façade extérieure d'un bâtiment moderne",
    credit: "Fikri Bijey / Pexels",
    ratio: "wide",
  },
  {
    key: "nettoyage-reseau-extraction",
    pexelsId: 13109834,
    title: "Caissons d'extraction en toiture",
    alt: "Caissons d'extraction et unités de ventilation installés en toiture-terrasse d'un bâtiment tertiaire",
    credit: "Radik 2707 / Pexels",
    ratio: "wide",
  },
  {
    key: "entretien-hotte-professionnelle",
    pexelsId: 6375558,
    title: "Batterie inox en cuisine professionnelle",
    alt: "Casseroles en acier inoxydable alignées sur le plan de travail d'une cuisine professionnelle entretenue",
    credit: "Skylar Kang / Pexels",
    ratio: "wide",
  },

  /* ------------------------- PAGES COMMERCIALES ------------------------- */
  {
    key: "devis-nettoyage-hotte",
    pexelsId: 5779775,
    title: "Équipe de cuisine au travail",
    alt: "Deux cuisiniers travaillant ensemble dans une cuisine professionnelle en pleine production",
    credit: "RDNE Stock project / Pexels",
    ratio: "wide",
  },
  {
    key: "contrat-entretien-hotte-professionnelle",
    pexelsId: 12209739,
    title: "Cuisine de restauration collective",
    alt: "Cuisinier au poste de service dans une cuisine de restauration collective",
    credit: "Keaven / Pexels",
    ratio: "wide",
  },
  {
    key: "prix-nettoyage-hotte-restaurant",
    pexelsId: 4947388,
    title: "Cuisine de restaurant en fin de service",
    alt: "Intérieur d'une cuisine de restaurant moderne avec piles d'assiettes et ustensiles rangés",
    credit: "orlovamaria / Pexels",
    ratio: "wide",
  },
  {
    key: "prix-ramonage-hotte-restaurant",
    pexelsId: 35962213,
    title: "Extracteur industriel",
    alt: "Extracteur industriel de grand diamètre installé en applique contre un mur de briques",
    credit: "Bluebee / Pexels",
    ratio: "wide",
  },
  {
    key: "tarifs",
    pexelsId: 4253300,
    title: "Cuisine ouverte en activité",
    alt: "Deux cuisiniers en tablier travaillant côte à côte dans une cuisine ouverte contemporaine",
    credit: "cottonbro studio / Pexels",
    ratio: "wide",
  },
  {
    key: "notre-methode-intervention",
    pexelsId: 6471913,
    title: "Technicien en intervention",
    alt: "Technicien effectuant une opération de maintenance sur une installation technique, outils et manomètres en main",
    credit: "Jose Andres Pacheco Cortes / Pexels",
    ratio: "wide",
  },
  {
    key: "attestation-entretien-hotte",
    pexelsId: 8293646,
    title: "Contrôle d'une bouche de ventilation",
    alt: "Intervenant casqué inspectant une bouche de ventilation avant établissement du rapport d'intervention",
    credit: "RDNE Stock project / Pexels",
    ratio: "wide",
  },
  {
    key: "entreprise",
    pexelsId: 6471914,
    title: "Maintenance d'installation technique",
    alt: "Technicien agenouillé réalisant l'entretien d'une installation de ventilation avec un outillage spécialisé",
    credit: "Jose Andres Pacheco Cortes / Pexels",
    ratio: "wide",
  },
  {
    key: "contact",
    pexelsId: 12181753,
    title: "Ustensiles inox suspendus",
    alt: "Ustensiles de cuisine en acier inoxydable suspendus dans une cuisine professionnelle",
    credit: "Cihan Yuce / Pexels",
    ratio: "wide",
  },

  /* ---------------------------- ARTICLES -------------------------------- */
  {
    key: "article-frequence-nettoyage-hotte-professionnelle",
    pexelsId: 27163971,
    title: "Cuisine industrielle en production",
    alt: "Cuisinier au travail dans une cuisine industrielle entourée de casseroles et de matériel de cuisson",
    credit: "Kubra Tokur / Pexels",
    ratio: "wide",
  },
  {
    key: "article-nettoyage-degraissage-ramonage-difference",
    pexelsId: 19431067,
    title: "Conduit d'extraction en milieu urbain",
    alt: "Conduit d'extraction contemporain installé en extérieur, distinct d'un conduit de chauffage",
    credit: "Thai Nguyễn / Pexels",
    ratio: "wide",
  },
  {
    key: "article-quand-faire-ramoner-conduit-extraction",
    pexelsId: 1000753,
    title: "Conduits en façade de bâtiment",
    alt: "Conduits métalliques d'extraction sur une façade de brique rouge, exposés aux intempéries",
    credit: "Brett Sayles / Pexels",
    ratio: "wide",
  },
  {
    key: "article-deroulement-degraissage-hotte-professionnelle",
    pexelsId: 31657837,
    title: "Travail de précision en cuisine professionnelle",
    alt: "Chef finalisant une assiette dans une cuisine commerciale moderne, sous une hotte en fonctionnement",
    credit: "Samet Burak Dağlıoğlu / Pexels",
    ratio: "wide",
  },
  {
    key: "article-risques-hotte-fortement-encrassee",
    pexelsId: 17229214,
    title: "Réseau de gaines de grand diamètre",
    alt: "Gaines d'extraction de grand diamètre dont l'intérieur accumule les dépôts au fil de l'exploitation",
    credit: "Aliaksei Lepik / Pexels",
    ratio: "wide",
  },
  {
    key: "article-trappes-de-visite-conduit-extraction",
    pexelsId: 31772935,
    title: "Conduits accessibles pour entretien",
    alt: "Conduits de ventilation disposés de manière accessible, permettant l'introduction de l'outillage d'entretien",
    credit: "Volker Braun / Pexels",
    ratio: "wide",
  },

  /* ------------------------------ VILLES -------------------------------- */
  {
    key: "city-paris",
    pexelsId: 4252771,
    title: "Cuisine de restaurant parisien",
    alt: "Cuisinier préparant un plat dans une cuisine de restaurant contemporaine à l'espace contraint",
    credit: "cottonbro studio / Pexels",
    ratio: "wide",
  },
  {
    key: "city-lyon",
    pexelsId: 15945555,
    title: "Cuisine de table traditionnelle",
    alt: "Cuisine professionnelle chaleureuse d'une table traditionnelle, ingrédients en place avant le service",
    credit: "Kathrine PNW / Pexels",
    ratio: "wide",
  },
  {
    key: "city-marseille",
    pexelsId: 5903389,
    title: "Pizzaiolo au four",
    alt: "Pizzaiolo enfournant une pizza dans un four traditionnel, dont le conduit est distinct de celui de la hotte",
    credit: "Roman Odintsov / Pexels",
    ratio: "wide",
  },
  {
    key: "city-bordeaux",
    pexelsId: 15747232,
    title: "Cuisine vue de dessus",
    alt: "Vue en plongée d'une équipe de cuisine préparant les plats dans un établissement de centre-ville",
    credit: "Khoa Võ / Pexels",
    ratio: "wide",
  },
  {
    key: "city-toulouse",
    pexelsId: 12193824,
    title: "Brigade en cuisine de production",
    alt: "Brigade en uniforme préparant les repas dans une cuisine de production à fort volume",
    credit: "Nick Souza / Pexels",
    ratio: "wide",
  },
  {
    key: "city-lille",
    pexelsId: 4253309,
    title: "Cuisine ouverte en service",
    alt: "Deux cuisiniers dressant les assiettes dans une cuisine professionnelle ouverte sur la salle",
    credit: "cottonbro studio / Pexels",
    ratio: "wide",
  },

  /* --------------------------- ÉTABLISSEMENTS --------------------------- */
  {
    key: "etab-restaurant",
    pexelsId: 15753262,
    title: "Restaurant",
    alt: "Cuisiniers préparant les plats avec méthode dans la cuisine animée d'un restaurant",
    credit: "Teresa Jang / Pexels",
    ratio: "square",
  },
  {
    key: "etab-brasserie",
    pexelsId: 4253303,
    title: "Brasserie",
    alt: "Cuisine ouverte de brasserie où deux cuisiniers assurent le service en continu",
    credit: "cottonbro studio / Pexels",
    ratio: "square",
  },
  {
    key: "etab-hotel",
    pexelsId: 14020332,
    title: "Hôtel",
    alt: "Buffet dressé dans la salle de restauration d'un hôtel, alimenté par une cuisine multi-postes",
    credit: "Quang Nguyen Vinh / Pexels",
    ratio: "square",
  },
  {
    key: "etab-fast-food",
    pexelsId: 4253296,
    title: "Fast-food",
    alt: "Cuisiniers assurant un service rapide dans une cuisine ouverte à forte cadence",
    credit: "cottonbro studio / Pexels",
    ratio: "square",
  },
  {
    key: "etab-kebab",
    pexelsId: 2696064,
    title: "Kebab",
    alt: "Cuisiniers travaillant ensemble à un poste de cuisson générant d'importantes fumées grasses",
    credit: "elletakesphotos / Pexels",
    ratio: "square",
  },
  {
    key: "etab-snack",
    pexelsId: 11179240,
    title: "Snack",
    alt: "Vapeurs de cuisson s'élevant des casseroles vers la hotte d'aspiration d'un petit établissement",
    credit: "createdstories / Pexels",
    ratio: "square",
  },
  {
    key: "etab-pizzeria",
    pexelsId: 33927682,
    title: "Pizzeria",
    alt: "Chef enfournant une pizza dans un four à brique, équipement doté de son propre conduit d'évacuation",
    credit: "Khoa Danh Nguyen / Pexels",
    ratio: "square",
  },
  {
    key: "etab-boulangerie",
    pexelsId: 6291407,
    title: "Boulangerie",
    alt: "Fournil de boulangerie avec four à étages en chauffe et poste de façonnage des pâtons",
    credit: "Shvets Production / Pexels",
    ratio: "square",
  },
  {
    key: "etab-patisserie",
    pexelsId: 30528624,
    title: "Pâtisserie",
    alt: "Viennoiseries sortant du four et mises à refroidir dans le laboratoire d'une pâtisserie",
    credit: "Enisa Halidi / Pexels",
    ratio: "square",
  },
  {
    key: "etab-boucherie-charcuterie",
    pexelsId: 4252149,
    title: "Boucherie et charcuterie",
    alt: "Poste de cuisson en laboratoire de transformation, équipé en acier inoxydable",
    credit: "cottonbro studio / Pexels",
    ratio: "square",
  },
  {
    key: "etab-traiteur",
    pexelsId: 3082785,
    title: "Traiteur",
    alt: "Plateaux de production alignés dans un laboratoire de traiteur fonctionnant par pics d'activité",
    credit: "Jonathan Borba / Pexels",
    ratio: "square",
  },
  {
    key: "etab-laboratoire-alimentaire",
    pexelsId: 12993874,
    title: "Laboratoire alimentaire",
    alt: "Opératrice au travail dans un laboratoire alimentaire équipé de machines de production",
    credit: "spmckee / Pexels",
    ratio: "square",
  },
  {
    key: "etab-cuisine-centrale",
    pexelsId: 18177444,
    title: "Cuisine centrale",
    alt: "Cuisine centrale équipée pour la production en grand volume, batterie suspendue au-dessus des postes",
    credit: "Elif / Pexels",
    ratio: "square",
  },
  {
    key: "etab-cuisine-collective",
    pexelsId: 36627080,
    title: "Cuisine collective",
    alt: "Ligne de self en restauration collective, alimentée par une cuisine de production attenante",
    credit: "Valeriya / Pexels",
    ratio: "square",
  },
  {
    key: "etab-cantine-scolaire",
    pexelsId: 34779210,
    title: "Cantine scolaire",
    alt: "Salle de restauration scolaire vide, desservie par une cuisine dont l'entretien se planifie en vacances",
    credit: "Caleb Oquendo / Pexels",
    ratio: "square",
  },
  {
    key: "etab-ehpad",
    pexelsId: 8477433,
    title: "EHPAD",
    alt: "Espace de restauration d'un établissement médico-social, dont la cuisine ne peut pas s'arrêter",
    credit: "fotografiagmazg / Pexels",
    ratio: "square",
  },
  {
    key: "etab-hopital-clinique",
    pexelsId: 7763035,
    title: "Hôpital et clinique",
    alt: "Salle de restauration d'un établissement de santé alimentée par une cuisine de production interne",
    credit: "Ahsen / Pexels",
    ratio: "square",
  },
  {
    key: "etab-restaurant-entreprise",
    pexelsId: 5490976,
    title: "Restaurant d'entreprise",
    alt: "Poste de distribution d'un restaurant d'entreprise équipé de lampes chauffantes infrarouges",
    credit: "Rachel Claire / Pexels",
    ratio: "square",
  },
  {
    key: "etab-collectivite",
    pexelsId: 6196223,
    title: "Collectivité",
    alt: "Agent d'entretien en uniforme intervenant sur un site géré par une collectivité",
    credit: "Tima Miroshnichenko / Pexels",
    ratio: "square",
  },
  /* ------------------------------ RÉGIONS ------------------------------- */
  /*
   * Choix éditorial : les hubs régionaux reçoivent des visuels TECHNIQUES —
   * réseaux, extracteurs, interventions — et non des photos de cuisine
   * choisies au hasard. Une image de four à bois sur la page Bretagne serait
   * de la décoration ; un réseau d'extraction et une équipe en intervention
   * disent ce que la page vend réellement : un réseau national d'intervention.
   */
  {
    key: "zones-france",
    pexelsId: 14614266,
    title: "Intervention d'équipe en toiture",
    alt: "Techniciens intervenant en toiture sur des équipements techniques d'un bâtiment",
    credit: "Trinh Trần / Pexels",
    ratio: "wide",
  },
  {
    key: "region-ile-de-france",
    pexelsId: 37726072,
    title: "Conduits en façade d'immeuble",
    alt: "Conduits de ventilation remontant en façade d'un immeuble ancien, au-dessus d'une fenêtre",
    credit: "Fez Brook / Pexels",
    ratio: "wide",
  },
  {
    key: "region-auvergne-rhone-alpes",
    pexelsId: 17792395,
    title: "Réseau technique en arrière de bâtiment",
    alt: "Conduits et équipements de ventilation regroupés à l'arrière d'un bâtiment de centre-ville",
    credit: "Vadutskevich / Pexels",
    ratio: "wide",
  },
  {
    key: "region-provence-alpes-cote-d-azur",
    pexelsId: 28726413,
    title: "Unités de traitement d'air en façade",
    alt: "Unités de traitement d'air installées en façade d'un bâtiment sous un ciel dégagé",
    credit: "Victor Mora Griega / Pexels",
    ratio: "wide",
  },
  {
    key: "region-occitanie",
    pexelsId: 10313698,
    title: "Conduits de ventilation urbains",
    alt: "Conduits de ventilation colorés courant le long d'une structure urbaine contemporaine",
    credit: "A.L.S / Pexels",
    ratio: "wide",
  },
  {
    key: "region-nouvelle-aquitaine",
    pexelsId: 5502720,
    title: "Extracteurs muraux sur bâtiment ancien",
    alt: "Extracteurs de grand diamètre montés sur la façade vieillissante d'un bâtiment de production",
    credit: "Mike van Schoonderwalt / Pexels",
    ratio: "wide",
  },
  {
    key: "region-hauts-de-france",
    pexelsId: 36727265,
    title: "Maintenance de ventilateurs industriels",
    alt: "Ventilateurs industriels en cours de maintenance dans un local technique",
    credit: "Lucas Porras / Pexels",
    ratio: "wide",
  },
  {
    key: "region-grand-est",
    pexelsId: 6471911,
    title: "Contrôle technique d'une installation",
    alt: "Technicien contrôlant une installation à l'aide de manomètres et d'outils de mesure",
    credit: "Jose Andres Pacheco Cortes / Pexels",
    ratio: "wide",
  },
  {
    key: "region-pays-de-la-loire",
    pexelsId: 37668425,
    title: "Entretien de machine de production",
    alt: "Intervenant assurant l'entretien d'une machine dans un atelier de production",
    credit: "Alshreef / Pexels",
    ratio: "wide",
  },
  {
    key: "region-bretagne",
    pexelsId: 8108687,
    title: "Ventilateur derrière grille de protection",
    alt: "Ventilateur d'extraction protégé par une grille métallique dans un local peu éclairé",
    credit: "Mikhail Nilov / Pexels",
    ratio: "wide",
  },
  {
    key: "region-normandie",
    pexelsId: 5463587,
    title: "Intervention technique en toiture",
    alt: "Intervenant réalisant une opération de maintenance sur un équipement installé en toiture",
    credit: "Jose Andres Pacheco Cortes / Pexels",
    ratio: "wide",
  },
  {
    key: "region-centre-val-de-loire",
    pexelsId: 6196694,
    title: "Agent d'entretien en combinaison",
    alt: "Agent d'entretien en combinaison de travail intervenant à l'intérieur d'un local professionnel",
    credit: "Tima Miroshnichenko / Pexels",
    ratio: "wide",
  },
  {
    key: "region-bourgogne-franche-comte",
    pexelsId: 8273523,
    title: "Remise en état d'une salle",
    alt: "Agent en combinaison assurant la remise en état d'une salle en dehors des heures d'exploitation",
    credit: "cottonbro studio / Pexels",
    ratio: "wide",
  },
  {
    key: "region-corse",
    pexelsId: 32520873,
    title: "Nettoyage haute pression en équipement de protection",
    alt: "Opérateur en équipement de protection réalisant un nettoyage haute pression sur un site technique",
    credit: "Mikail Firat / Pexels",
    ratio: "wide",
  },
];

/* -------------------------------------------------------------------------- */
/*  Réserve — visuels vérifiés, non encore attribués                          */
/* -------------------------------------------------------------------------- */

/**
 * Identifiants Pexels également testés et fonctionnels, gardés en réserve pour
 * les vagues suivantes (pages départements, villes tier 2, nouveaux articles).
 * Thème indiqué pour éviter d'avoir à re-chercher.
 */
export const spareImages: { pexelsId: number; theme: string }[] = [
  { pexelsId: 1082343, theme: "Four à bois en flammes" },
  { pexelsId: 6223172, theme: "Four à bois de pizzeria italienne" },
  { pexelsId: 9419406, theme: "Cuisson au four à bois" },
  { pexelsId: 5967842, theme: "Four à pizza avec conduit inox" },
  { pexelsId: 10481790, theme: "Four de boulangerie professionnel" },
  { pexelsId: 36445331, theme: "Défournement de pain" },
  { pexelsId: 11952100, theme: "Boulanger au four" },
  { pexelsId: 29737490, theme: "Boulangerie traditionnelle" },
  { pexelsId: 15721860, theme: "Chariots de production en boulangerie" },
  { pexelsId: 8535152, theme: "Réfectoire scolaire" },
  { pexelsId: 8617542, theme: "Service en restauration scolaire" },
  { pexelsId: 6213723, theme: "Cuisson en sauteuse inox, vapeur" },
  { pexelsId: 4253296, theme: "Cuisine ouverte, deux cuisiniers" },
  { pexelsId: 15119073, theme: "Hotte inox au-dessus d'une plaque" },
  { pexelsId: 29080604, theme: "Cuisine inox contemporaine" },
  { pexelsId: 6980566, theme: "Plan de cuisson sous hotte" },
];

/* -------------------------------------------------------------------------- */

const byKey = new Map(images.map((i) => [i.key, i]));

export function getImage(key: string): SiteImage | undefined {
  return byKey.get(key);
}
