import type { City } from "@/lib/types";

/**
 * Villes tier 1 — deuxième lot, ouvert avec le pilier Réparation.
 *
 * Mêmes exigences que le premier lot (voir `data/cities.ts`) : contexte
 * économique propre, contrainte technique propre, cas d'intervention propre,
 * FAQ propre, bassin d'intervention réel. Rien n'est interpolé.
 *
 * Les contraintes retenues ici sont volontairement orientées « panne » plutôt
 * qu'« encrassement » : c'est l'angle que le pilier Réparation vient ouvrir,
 * et cela distingue ces trois villes des six précédentes.
 */

export const extraCities: City[] = [
  // ===========================================================================
  {
    slug: "nantes",
    name: "Nantes",
    prep: "à Nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "pays-de-la-loire",
    epci: "Nantes Métropole",
    tier: 1,
    template: "process",
    nearby: [
      "Saint-Herblain",
      "Rezé",
      "Orvault",
      "Vertou",
      "Carquefou",
      "Saint-Sébastien-sur-Loire",
      "Bouguenais",
      "Couëron",
      "La Chapelle-sur-Erdre",
      "Sainte-Luce-sur-Loire",
    ],
    districts: [
      "Bouffay et centre historique",
      "Île de Nantes",
      "Graslin et Commerce",
      "Hauts-Pavés Saint-Félix",
      "Chantenay",
      "Erdre et Beaujoire",
      "Zone tertiaire de Saint-Herblain",
    ],
    context: [
      "La restauration nantaise a fortement gagné en densité en une quinzaine d'années, portée par la croissance de l'agglomération. Cette expansion s'est faite en deux temps très différents : des reprises de locaux anciens dans le Bouffay et autour de Graslin, puis des créations récentes sur l'Île de Nantes et dans les zones tertiaires de Saint-Herblain.",
      "Ces deux générations d'installations ne posent pas les mêmes problèmes. Les premières ont des réseaux repris plusieurs fois, rarement documentés. Les secondes ont été conçues avec leurs équipements — et arrivent aujourd'hui à l'âge où les pièces d'usure commencent à lâcher.",
    ],
    constraint:
      "Les installations créées lors de la vague d'ouvertures des années 2010 atteignent aujourd'hui une douzaine d'années de fonctionnement. C'est l'âge où courroies, roulements et moteurs commencent à céder — et où beaucoup d'exploitants découvrent que leur système n'a jamais fait l'objet d'un contrôle mécanique, seulement de nettoyages.",
    dominantEstablishments: [
      "Restaurants de centre-ville",
      "Restauration de l'Île de Nantes",
      "Restaurants d'entreprise du tertiaire",
      "Brasseries et bistrots",
      "Laboratoires et ateliers agroalimentaires",
      "Restauration collective et scolaire",
    ],
    caseStudy: {
      title: "Restaurant de 90 couverts, Île de Nantes",
      body: "Établissement ouvert au début des années 2010, entretien du réseau réalisé régulièrement, aucun contrôle mécanique depuis l'installation. L'exploitant signalait une baisse d'aspiration progressive et un sifflement au démarrage. Le diagnostic a écarté l'encrassement — le réseau était propre — pour identifier une courroie fortement détendue et des poulies marquées. Remplacement de la courroie, reprise de l'alignement, contrôle des roulements : aspiration restituée en une intervention de deux heures. Le rapport a établi un plan de contrôle mécanique annuel, jusque-là inexistant.",
    },
    faq: [
      {
        q: "Mon réseau est propre mais l'aspiration a baissé, est-ce normal ?",
        a: "Non, et c'est un cas fréquent sur les installations nantaises créées dans les années 2010 : le réseau est bien entretenu, mais la partie mécanique n'a jamais été contrôlée. Une courroie détendue, des poulies usées ou des roulements durs font chuter le débit sans qu'aucun dépôt ne soit en cause.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Nantes ?",
        a: "Saint-Herblain, Rezé, Orvault, Vertou, Carquefou, Saint-Sébastien-sur-Loire, Bouguenais, Couëron, La Chapelle-sur-Erdre et Sainte-Luce-sur-Loire, sur le périmètre de Nantes Métropole.",
      },
      {
        q: "Intervenez-vous sur les ateliers agroalimentaires de la région ?",
        a: "Oui, sur les systèmes d'extraction des zones de cuisson et de transformation, avec un rapport documenté conçu pour s'intégrer à un plan de maîtrise sanitaire.",
      },
    ],
  },

  // ===========================================================================
  {
    slug: "strasbourg",
    name: "Strasbourg",
    prep: "à Strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    region: "grand-est",
    epci: "Eurométropole de Strasbourg",
    tier: 1,
    template: "technique",
    nearby: [
      "Schiltigheim",
      "Illkirch-Graffenstaden",
      "Lingolsheim",
      "Bischheim",
      "Ostwald",
      "Hœnheim",
      "Oberhausbergen",
      "Eckbolsheim",
      "Mundolsheim",
      "Vendenheim",
    ],
    districts: [
      "Grande Île et cathédrale",
      "Petite France",
      "Krutenau",
      "Quartier européen et Wacken",
      "Neudorf",
      "Gare et Tribunal",
      "Robertsau",
    ],
    context: [
      "Le centre historique strasbourgeois concentre une restauration traditionnelle installée dans un bâti à colombages et en maçonnerie ancienne, classé pour partie. Les winstubs de la Grande Île et de la Petite France occupent des locaux où le réseau d'extraction a dû être créé dans des structures existantes, sans possibilité de reprise ultérieure.",
      "À l'opposé, le quartier européen et le Wacken accueillent une restauration d'affaires et une hôtellerie liées aux institutions, avec des installations plus récentes et des exigences de traçabilité et de planification nettement plus formalisées.",
    ],
    constraint:
      "Dans le secteur sauvegardé, le tracé du conduit est presque toujours imposé par la structure du bâtiment et rarement documenté. Toute modification visible en façade ou en toiture est en outre soumise à autorisation : le repérage doit donc établir non seulement ce qui est atteignable, mais aussi ce qui pourra ou non être repris.",
    dominantEstablishments: [
      "Winstubs et restauration traditionnelle",
      "Brasseries de centre-ville",
      "Restauration d'affaires du quartier européen",
      "Hôtellerie",
      "Restauration universitaire",
      "Boulangeries-pâtisseries",
    ],
    caseStudy: {
      title: "Winstub, secteur de la Petite France",
      body: "Cuisine installée dans un bâtiment à colombages, conduit passant dans une structure ancienne sans aucune trappe. L'exploitant nous appelait pour un arrêt complet de l'extraction. Le diagnostic a écarté le moteur et identifié une turbine bloquée par un dépôt durci, dans un caisson que la configuration rendait difficile d'accès. Nettoyage de la turbine, contrôle des roulements, remise en service le jour même. Le rapport a signalé l'absence d'accès au conduit comme réserve, avec un devis distinct pour la pose de trappes soumise à autorisation préalable.",
    },
    faq: [
      {
        q: "Mon local est en secteur sauvegardé, cela limite-t-il l'intervention ?",
        a: "Cela limite les modifications, pas l'entretien ni le dépannage. Le nettoyage, le ramonage du réseau accessible et les réparations mécaniques se réalisent normalement. En revanche, la pose de trappes de visite visible en façade ou en toiture suppose une autorisation préalable : nous l'identifions au repérage plutôt que de vous proposer une solution irréalisable.",
      },
      {
        q: "Intervenez-vous dans les établissements du quartier européen ?",
        a: "Oui. Ces établissements demandent généralement une planification à l'avance et un rapport détaillé exploitable par un service technique, ce qui correspond à notre format standard.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Strasbourg ?",
        a: "Schiltigheim, Illkirch-Graffenstaden, Lingolsheim, Bischheim, Ostwald, Hœnheim, Oberhausbergen, Eckbolsheim, Mundolsheim et Vendenheim, sur le périmètre de l'Eurométropole.",
      },
    ],
  },

  // ===========================================================================
  {
    slug: "nice",
    name: "Nice",
    prep: "à Nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "provence-alpes-cote-d-azur",
    epci: "Métropole Nice Côte d'Azur",
    tier: 1,
    template: "sectoriel",
    nearby: [
      "Cagnes-sur-Mer",
      "Saint-Laurent-du-Var",
      "Villeneuve-Loubet",
      "Beaulieu-sur-Mer",
      "Cap-d'Ail",
      "Vence",
      "La Trinité",
      "Saint-André-de-la-Roche",
      "Villefranche-sur-Mer",
      "Èze",
    ],
    districts: [
      "Vieux-Nice",
      "Promenade des Anglais",
      "Carré d'Or et Masséna",
      "Port et Riquier",
      "Cimiez",
      "Libération et Gare",
      "Arénas et secteur aéroportuaire",
    ],
    context: [
      "Nice réunit trois régimes d'exploitation dans un même périmètre. Le Vieux-Nice concentre une restauration traditionnelle ouverte à l'année dans un bâti très ancien et très dense. Le front de mer et le Carré d'Or accueillent une hôtellerie de standing dont les cuisines fonctionnent en continu. Et une large part des établissements du littoral réalise l'essentiel de son volume entre juin et septembre.",
      "Cette saisonnalité a une conséquence directe sur les pannes : les installations subissent en trois mois une charge que d'autres étalent sur l'année, et c'est en pleine saison que les pièces d'usure lâchent — au pire moment possible.",
    ],
    constraint:
      "Sur les établissements saisonniers, la panne survient statistiquement au cœur de la période où l'arrêt coûte le plus cher et où les créneaux d'intervention sont les plus disputés. C'est ce qui rend le contrôle mécanique d'avant-saison particulièrement rentable ici : une courroie contrôlée en mai évite une cuisine arrêtée un samedi d'août.",
    dominantEstablishments: [
      "Restauration traditionnelle du Vieux-Nice",
      "Hôtellerie de standing du front de mer",
      "Restaurants de plage et établissements saisonniers",
      "Brasseries et bistrots de centre-ville",
      "Restauration rapide et snacks",
      "Restauration d'affaires du secteur aéroportuaire",
    ],
    caseStudy: {
      title: "Restaurant de plage, secteur Promenade",
      body: "Arrêt complet de l'extraction un vendredi de juillet, en plein service du soir. Le diagnostic a identifié une rupture de courroie sur un extracteur dont la turbine était fortement chargée : la surcharge avait accéléré l'usure de la transmission. Remplacement de la courroie le soir même pour permettre la reprise du service, puis nettoyage de la turbine programmé le lundi suivant, jour de moindre activité. Sans ce second passage, la courroie neuve aurait subi la même contrainte et cédé à son tour.",
    },
    faq: [
      {
        q: "Ma hotte est tombée en panne en pleine saison, quel délai ?",
        a: "Les arrêts complets sont traités en priorité, mais l'été est la période où les créneaux sont les plus disputés sur la Côte d'Azur. Appelez-nous immédiatement : nous vous indiquons le créneau réellement tenable plutôt qu'une promesse que nous ne pourrions pas honorer.",
      },
      {
        q: "Faut-il faire contrôler l'installation avant la saison ?",
        a: "C'est de loin le meilleur moment sur un établissement saisonnier. Un contrôle mécanique en avril-mai — courroie, poulies, roulements, turbine — coûte une fraction de ce que représente une cuisine arrêtée en août, service perdu compris.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Nice ?",
        a: "Cagnes-sur-Mer, Saint-Laurent-du-Var, Villeneuve-Loubet, Beaulieu-sur-Mer, Cap-d'Ail, Vence, La Trinité, Saint-André-de-la-Roche, Villefranche-sur-Mer et Èze, sur le périmètre de la Métropole Nice Côte d'Azur.",
      },
    ],
  },
];
