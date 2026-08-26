import type { Region } from "@/lib/types";

/**
 * Les 13 régions métropolitaines.
 * Plan anti-duplicate : chaque région a son propre `angle`, sa propre ossature
 * de H2 et sa propre FAQ. Aucun gabarit interpolé.
 */

export const regions: Region[] = [
  {
    slug: "ile-de-france",
    name: "Île-de-France",
    shortName: "Île-de-France",
    code: "IDF",
    wave: 1,
    departments: [
      { code: "75", name: "Paris" },
      { code: "77", name: "Seine-et-Marne" },
      { code: "78", name: "Yvelines" },
      { code: "91", name: "Essonne" },
      { code: "92", name: "Hauts-de-Seine" },
      { code: "93", name: "Seine-Saint-Denis" },
      { code: "94", name: "Val-de-Marne" },
      { code: "95", name: "Val-d'Oise" },
    ],
    cities: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Créteil", "Versailles", "Nanterre", "Argenteuil", "Cergy", "Meaux", "Massy"],
    h1: "Nettoyage et ramonage de hottes professionnelles en Île-de-France",
    title: "Nettoyage & ramonage de hotte professionnelle en Île-de-France",
    description:
      "Spécialiste du nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle en Île-de-France : Paris, petite et grande couronne. Devis sous 24 h.",
    angle: "densité de restauration extrême et contraintes d'accès urbaines",
    intro: [
      "L'Île-de-France concentre la plus forte densité d'établissements de restauration de France, et avec elle les configurations d'installation les plus contraignantes du pays. Un conduit d'extraction y monte rarement en ligne droite : il traverse des étages d'habitation, emprunte une gaine technique partagée et débouche en toiture d'un immeuble dont l'accès dépend d'un syndic.",
      "Nos équipes franciliennes travaillent quotidiennement dans ces conditions : cuisines exiguës en sous-sol, livraisons de matériel en zone piétonne, créneaux d'intervention nocturnes imposés par la copropriété, coordination avec les gestionnaires d'immeubles.",
    ],
    sections: [
      {
        h2: "Paris intra-muros : la contrainte du bâti ancien",
        body: [
          "Dans les arrondissements centraux, la majorité des restaurants occupent des rez-de-chaussée d'immeubles haussmanniens dont les conduits ont été créés au fil des reprises successives. Le tracé réel diffère presque toujours des plans, et les trappes de visite sont l'exception plutôt que la règle.",
          "Notre première intervention sur un établissement parisien commence donc systématiquement par un repérage du réseau existant — c'est ce qui détermine ce qui pourra réellement être traité, et ce que nous écrivons dans le rapport.",
        ],
      },
      {
        h2: "Petite couronne : bureaux, hôtellerie et restauration collective",
        body: [
          "Les Hauts-de-Seine et le Val-de-Marne concentrent une restauration d'entreprise dense — La Défense, Issy-les-Moulineaux, le Val de Seine, Rungis — avec des cuisines de production dimensionnées pour plusieurs centaines de couverts quotidiens et des réseaux d'extraction étendus.",
          "En Seine-Saint-Denis, la zone de Roissy et la Plaine Saint-Denis génèrent une demande hôtelière et de restauration rapide qui impose des interventions de nuit et une réactivité forte.",
        ],
      },
      {
        h2: "Grande couronne : zones commerciales et cuisines centrales",
        body: [
          "Yvelines, Essonne, Val-d'Oise et Seine-et-Marne accueillent des cuisines centrales de collectivités, des restaurants de zones commerciales et une restauration liée aux pôles économiques : Saclay, Cergy-Pontoise, Saint-Quentin-en-Yvelines, Val d'Europe.",
          "Les problématiques y sont différentes de Paris : réseaux plus longs, accès plus faciles, mais volumes traités nettement supérieurs.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans Paris intra-muros malgré les contraintes de circulation ?",
        a: "Oui. Nos équipes parisiennes sont organisées pour les créneaux de livraison en zone réglementée et interviennent en dehors des heures de service, y compris tôt le matin et en soirée.",
      },
      {
        q: "Mon conduit passe dans la gaine technique de l'immeuble : qui doit autoriser l'intervention ?",
        a: "Dès que l'accès concerne les parties communes ou la toiture, l'accord du syndic ou du bailleur est nécessaire. Nous fournissons les éléments techniques à joindre à votre demande et coordonnons l'intervention avec le gestionnaire.",
      },
      {
        q: "Couvrez-vous la grande couronne aussi bien que Paris ?",
        a: "Oui, les huit départements franciliens. Nos plannings sont organisés par secteur, ce qui nous permet de traiter aussi bien un restaurant du 11e arrondissement qu'une cuisine centrale en Seine-et-Marne.",
      },
    ],
  },

  {
    slug: "auvergne-rhone-alpes",
    name: "Auvergne-Rhône-Alpes",
    shortName: "Auvergne-Rhône-Alpes",
    code: "ARA",
    wave: 1,
    departments: [
      { code: "01", name: "Ain" },
      { code: "03", name: "Allier" },
      { code: "07", name: "Ardèche" },
      { code: "15", name: "Cantal" },
      { code: "26", name: "Drôme" },
      { code: "38", name: "Isère" },
      { code: "42", name: "Loire" },
      { code: "43", name: "Haute-Loire" },
      { code: "63", name: "Puy-de-Dôme" },
      { code: "69", name: "Rhône" },
      { code: "73", name: "Savoie" },
      { code: "74", name: "Haute-Savoie" },
    ],
    cities: ["Lyon", "Villeurbanne", "Grenoble", "Saint-Étienne", "Clermont-Ferrand", "Annecy", "Chambéry", "Valence", "Bourg-en-Bresse", "Vienne"],
    h1: "Entretien des hottes et systèmes d'extraction en Auvergne-Rhône-Alpes",
    title: "Nettoyage & ramonage de hotte professionnelle en Auvergne-Rhône-Alpes",
    description:
      "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle en Auvergne-Rhône-Alpes : Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy.",
    angle: "capitale gastronomique et restauration de montagne saisonnière",
    intro: [
      "Aucune région française ne concentre autant de profils de cuisine différents. Entre les bouchons lyonnais installés dans des immeubles anciens du Vieux Lyon, les cuisines d'altitude de Savoie qui tournent quatre mois par an à plein régime, et les cuisines centrales de la métropole clermontoise, les besoins d'entretien n'ont rien de comparable.",
      "Nous adaptons la périodicité et les créneaux d'intervention à ces rythmes très différents : entretien continu sur les établissements ouverts à l'année, remise à niveau avant et après saison sur les stations.",
    ],
    sections: [
      {
        h2: "Lyon et sa métropole : une densité comparable à Paris",
        body: [
          "La métropole lyonnaise réunit une concentration de restaurants indépendants, de bouchons, de tables gastronomiques et de restauration rapide qui en fait notre deuxième zone d'activité après l'Île-de-France.",
          "Les configurations du Vieux Lyon, de la Presqu'île et de la Croix-Rousse posent les mêmes difficultés qu'à Paris : bâti ancien, conduits repris plusieurs fois, absence de trappes de visite, accès en toiture soumis à l'accord de la copropriété.",
        ],
      },
      {
        h2: "Savoie et Haute-Savoie : la contrainte de la saison",
        body: [
          "En station, l'entretien ne se planifie pas comme ailleurs. Une cuisine d'altitude fonctionne à plein régime pendant quatre à cinq mois, puis ferme. Le bon moment pour intervenir est donc encadré : juste après la fermeture, quand le dépôt est encore frais, ou juste avant l'ouverture, pour repartir sur une installation propre.",
          "Nous organisons des campagnes d'intervention groupées sur ces périodes, ce qui permet aux exploitants de traiter plusieurs établissements d'un même secteur en une seule opération logistique.",
        ],
      },
      {
        h2: "Grenoble, Saint-Étienne, Clermont-Ferrand : restauration collective et sites industriels",
        body: [
          "Ces trois métropoles concentrent une forte activité de restauration d'entreprise et de restauration collective — universités, hôpitaux, sites industriels — avec des cuisines de production et des réseaux d'extraction longs.",
          "Les interventions y sont planifiées sur les périodes de moindre activité : vacances universitaires, arrêts techniques, week-ends.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous en station de ski ?",
        a: "Oui, en Savoie et en Haute-Savoie, avec des campagnes organisées en début et en fin de saison. C'est la période où l'intervention est la plus efficace et la moins perturbante pour l'exploitation.",
      },
      {
        q: "Quel est votre délai d'intervention sur la métropole de Lyon ?",
        a: "Nos équipes basées sur la métropole permettent une intervention rapide sur Lyon, Villeurbanne et les communes de l'agglomération. Le délai exact vous est confirmé au moment du devis.",
      },
      {
        q: "Traitez-vous les cuisines centrales de la région ?",
        a: "Oui. Les cuisines centrales représentent une part importante de notre activité en Auvergne-Rhône-Alpes, avec des interventions planifiées sur les périodes d'arrêt de production.",
      },
    ],
  },

  {
    slug: "provence-alpes-cote-d-azur",
    name: "Provence-Alpes-Côte d'Azur",
    shortName: "PACA",
    code: "PACA",
    wave: 1,
    departments: [
      { code: "04", name: "Alpes-de-Haute-Provence" },
      { code: "05", name: "Hautes-Alpes" },
      { code: "06", name: "Alpes-Maritimes" },
      { code: "13", name: "Bouches-du-Rhône" },
      { code: "83", name: "Var" },
      { code: "84", name: "Vaucluse" },
    ],
    cities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon", "Cannes", "Antibes", "Arles", "Hyères", "Fréjus"],
    h1: "Spécialiste hotte et extraction de cuisine professionnelle en Provence-Alpes-Côte d'Azur",
    title: "Nettoyage & ramonage de hotte professionnelle en PACA",
    description:
      "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle en PACA : Marseille, Nice, Toulon, Aix-en-Provence, Cannes, Avignon. Devis sous 24 h.",
    angle: "saisonnalité littorale et hôtellerie de standing",
    intro: [
      "En Provence-Alpes-Côte d'Azur, l'activité de restauration se joue sur quelques mois. Un établissement du littoral peut réaliser en juillet-août ce qu'un restaurant de centre-ville réalise en un semestre — avec un encrassement du réseau d'extraction proportionnel.",
      "Cette concentration change complètement la logique d'entretien : l'intervention utile n'est pas celle qu'on programme n'importe quand, c'est celle qu'on cale avant l'ouverture de saison et après sa fermeture.",
    ],
    sections: [
      {
        h2: "Le rythme des saisons sur le littoral",
        body: [
          "De Cassis à Menton, la majorité des établissements de bord de mer traitent en trois mois l'essentiel de leur volume annuel. Le réseau d'extraction encaisse une charge très supérieure à sa moyenne, et le dépôt s'installe rapidement.",
          "Nous organisons deux fenêtres d'intervention : avril-mai pour partir sur une installation propre, et septembre-octobre pour retirer le dépôt avant qu'il ne durcisse pendant l'hiver. Les établissements qui attendent le printemps suivant se retrouvent avec une graisse polymérisée bien plus difficile — et plus coûteuse — à retirer.",
        ],
      },
      {
        h2: "Hôtellerie de standing et cuisines multi-postes",
        body: [
          "La Côte d'Azur concentre une hôtellerie haut de gamme dont les cuisines comportent plusieurs postes de cuisson, plusieurs hottes et des réseaux d'extraction étendus, parfois desservant simultanément un restaurant gastronomique, une brasserie et un service de banquets.",
          "Ces installations demandent une intervention découpée par zone, planifiée de nuit, avec un rapport détaillé poste par poste que le directeur technique peut intégrer à son plan de maintenance.",
        ],
      },
      {
        h2: "Marseille, Aix, Avignon : une activité à l'année",
        body: [
          "À l'écart du rythme saisonnier littoral, les métropoles marseillaise, aixoise et avignonnaise fonctionnent toute l'année, avec une restauration urbaine dense et une forte activité de restauration collective — établissements de santé, restauration scolaire, restauration d'entreprise.",
          "L'entretien y suit une périodicité classique, ajustée au type de cuisson de chaque établissement.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le meilleur moment pour faire nettoyer une hotte dans un établissement saisonnier ?",
        a: "Deux fenêtres sont efficaces : juste avant l'ouverture de saison, pour démarrer sur une installation propre, et immédiatement après la fermeture, quand le dépôt est encore frais et se retire facilement. Attendre le printemps suivant laisse la graisse durcir et alourdit l'intervention.",
      },
      {
        q: "Intervenez-vous de nuit dans les hôtels ?",
        a: "Oui. Sur les établissements hôteliers dont la cuisine tourne en continu, l'intervention nocturne est souvent la seule option compatible avec l'exploitation. Nous la planifions par zone pour maintenir un service partiel.",
      },
      {
        q: "Couvrez-vous l'arrière-pays et les Alpes du Sud ?",
        a: "Oui, les six départements de la région, y compris les Alpes-de-Haute-Provence et les Hautes-Alpes. Les interventions y sont groupées par secteur pour rester économiquement cohérentes.",
      },
    ],
  },

  {
    slug: "occitanie",
    name: "Occitanie",
    shortName: "Occitanie",
    code: "OCC",
    wave: 2,
    departments: [
      { code: "09", name: "Ariège" },
      { code: "11", name: "Aude" },
      { code: "12", name: "Aveyron" },
      { code: "30", name: "Gard" },
      { code: "31", name: "Haute-Garonne" },
      { code: "32", name: "Gers" },
      { code: "34", name: "Hérault" },
      { code: "46", name: "Lot" },
      { code: "48", name: "Lozère" },
      { code: "65", name: "Hautes-Pyrénées" },
      { code: "66", name: "Pyrénées-Orientales" },
      { code: "81", name: "Tarn" },
      { code: "82", name: "Tarn-et-Garonne" },
    ],
    cities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers", "Narbonne", "Carcassonne", "Albi", "Montauban", "Sète"],
    h1: "Nettoyage, dégraissage et ramonage de hottes professionnelles en Occitanie",
    title: "Nettoyage & ramonage de hotte professionnelle en Occitanie",
    description:
      "Entretien de hottes et de systèmes d'extraction de cuisine professionnelle en Occitanie : Toulouse, Montpellier, Nîmes, Perpignan, Béziers. Devis sous 24 h.",
    angle: "deux métropoles indépendantes et un littoral très saisonnier",
    intro: [
      "L'Occitanie est la seule région française organisée autour de deux métropoles de poids équivalent et de logiques économiques distinctes. Toulouse vit de l'aéronautique, de l'université et d'une restauration d'entreprise dense. Montpellier vit du littoral, du tourisme et d'une population étudiante considérable.",
      "S'y ajoute une bande côtière — de Sète à Argelès — dont l'activité se concentre sur l'été, et un arrière-pays où la restauration est diffuse mais réelle.",
    ],
    sections: [
      {
        h2: "Toulouse : restauration d'entreprise et cuisines de production",
        body: [
          "L'agglomération toulousaine concentre des sites industriels et tertiaires dotés de restaurants d'entreprise dimensionnés pour plusieurs centaines de couverts quotidiens. Ces cuisines fonctionnent selon un calendrier prévisible, ce qui facilite la planification des interventions sur les périodes de fermeture.",
          "En centre-ville, la restauration indépendante du secteur Capitole–Saint-Cyprien présente les difficultés habituelles du bâti ancien : conduits en gaine d'immeuble, accès en toiture négociés avec la copropriété.",
        ],
      },
      {
        h2: "Montpellier et le littoral héraultais",
        body: [
          "Montpellier combine une restauration urbaine à l'année, une restauration universitaire à fort volume et une activité littorale saisonnière à Palavas, Carnon et La Grande-Motte.",
          "Ces trois profils demandent trois rythmes d'entretien différents, que nous distinguons dès le diagnostic initial.",
        ],
      },
      {
        h2: "Gard, Aude, Pyrénées-Orientales : saisonnalité et restauration de terroir",
        body: [
          "Nîmes, Béziers, Narbonne, Carcassonne et Perpignan présentent une restauration de centre-ville active à l'année, doublée d'une forte pointe estivale liée au tourisme.",
          "Nous groupons les interventions par secteur pour desservir efficacement des zones où les établissements sont plus dispersés qu'en métropole.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur les deux métropoles avec les mêmes délais ?",
        a: "Oui, Toulouse et Montpellier sont couvertes avec des délais équivalents. Les secteurs plus dispersés — Lozère, Ariège, Gers — font l'objet d'interventions groupées par secteur.",
      },
      {
        q: "Traitez-vous les restaurants universitaires ?",
        a: "Oui. Les interventions y sont planifiées pendant les périodes de vacances universitaires, ce qui permet un traitement complet sans contrainte de service.",
      },
    ],
  },

  {
    slug: "nouvelle-aquitaine",
    name: "Nouvelle-Aquitaine",
    shortName: "Nouvelle-Aquitaine",
    code: "NAQ",
    wave: 2,
    departments: [
      { code: "16", name: "Charente" },
      { code: "17", name: "Charente-Maritime" },
      { code: "19", name: "Corrèze" },
      { code: "23", name: "Creuse" },
      { code: "24", name: "Dordogne" },
      { code: "33", name: "Gironde" },
      { code: "40", name: "Landes" },
      { code: "47", name: "Lot-et-Garonne" },
      { code: "64", name: "Pyrénées-Atlantiques" },
      { code: "79", name: "Deux-Sèvres" },
      { code: "86", name: "Vienne" },
      { code: "87", name: "Haute-Vienne" },
    ],
    cities: ["Bordeaux", "Mérignac", "Pessac", "Limoges", "Poitiers", "Pau", "La Rochelle", "Bayonne", "Angoulême", "Niort"],
    h1: "Entretien de hottes et conduits d'extraction en Nouvelle-Aquitaine",
    title: "Nettoyage & ramonage de hotte professionnelle en Nouvelle-Aquitaine",
    description:
      "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle en Nouvelle-Aquitaine : Bordeaux, Limoges, Poitiers, Pau, La Rochelle, Bayonne.",
    angle: "plus vaste région française, œnotourisme et façade atlantique",
    intro: [
      "La Nouvelle-Aquitaine est la plus vaste région de France métropolitaine. Cette étendue a une conséquence opérationnelle directe : la logistique d'intervention y compte autant que la technique. Entre Poitiers et Bayonne, il y a plus de 400 kilomètres.",
      "Nous organisons donc l'activité par pôles — Bordeaux et sa métropole, l'axe Limoges-Poitiers, la façade atlantique, le Pays basque et le Béarn — avec des tournées groupées qui rendent l'intervention accessible même aux établissements isolés.",
    ],
    sections: [
      {
        h2: "Bordeaux Métropole : restauration urbaine et œnotourisme",
        body: [
          "La métropole bordelaise a vu sa restauration se densifier fortement ces dernières années, dans le centre historique comme sur les quais et à Mérignac ou Pessac.",
          "Le bâti du centre ancien pose les contraintes classiques : conduits traversant des immeubles classés, absence de trappes, accès en toiture réglementé. En périphérie, les configurations sont nettement plus simples et les interventions plus rapides.",
        ],
      },
      {
        h2: "La façade atlantique : de La Rochelle à Biarritz",
        body: [
          "La Rochelle, Royan, Arcachon, Biarritz et la côte landaise concentrent une restauration très saisonnière, souvent orientée produits de la mer, avec des installations de cuisson qui tournent intensément trois à quatre mois par an.",
          "Comme sur le littoral méditerranéen, les fenêtres d'intervention efficaces se situent avant et après saison.",
        ],
      },
      {
        h2: "Pays basque, Béarn et intérieur",
        body: [
          "Bayonne, Anglet, Biarritz et Pau présentent une restauration de terroir active à l'année, avec des cuisines de type grillade et rôtissage qui encrassent rapidement les filtres et le plénum.",
          "Dans les départements de l'intérieur — Dordogne, Lot-et-Garonne, Corrèze, Creuse — nous fonctionnons par tournées programmées, ce qui permet de desservir des établissements que la distance rendrait autrement difficiles à traiter.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans les départements ruraux de la région ?",
        a: "Oui, par tournées groupées. Regrouper plusieurs interventions sur un même secteur permet de maintenir des conditions tarifaires cohérentes même loin des métropoles.",
      },
      {
        q: "Traitez-vous les établissements saisonniers du littoral atlantique ?",
        a: "Oui, avec des campagnes organisées avant l'ouverture et après la fermeture de saison, comme sur la façade méditerranéenne.",
      },
    ],
  },

  {
    slug: "hauts-de-france",
    name: "Hauts-de-France",
    shortName: "Hauts-de-France",
    code: "HDF",
    wave: 2,
    departments: [
      { code: "02", name: "Aisne" },
      { code: "59", name: "Nord" },
      { code: "60", name: "Oise" },
      { code: "62", name: "Pas-de-Calais" },
      { code: "80", name: "Somme" },
    ],
    cities: ["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Amiens", "Dunkerque", "Calais", "Valenciennes", "Arras", "Beauvais"],
    h1: "Spécialiste du nettoyage de hotte et de conduit d'extraction en Hauts-de-France",
    title: "Nettoyage & ramonage de hotte professionnelle en Hauts-de-France",
    description:
      "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle en Hauts-de-France : Lille, Amiens, Dunkerque, Calais, Valenciennes, Arras.",
    angle: "métropole transfrontalière et restauration collective industrielle",
    intro: [
      "Les Hauts-de-France présentent une combinaison particulière : une métropole lilloise transfrontalière à forte densité de restauration, un tissu industriel important générant une restauration d'entreprise conséquente, et une restauration traditionnelle — estaminets, friteries, brasseries — dont les modes de cuisson encrassent vite.",
      "La friture occupe ici une place que l'on ne retrouve pas ailleurs en France. C'est un point que nous prenons en compte dans la périodicité que nous recommandons.",
    ],
    sections: [
      {
        h2: "La friture change le rythme d'encrassement",
        body: [
          "Une friterie, un estaminet ou une brasserie du Nord dont la carte repose largement sur la friture produit un aérosol de graisse bien plus dense qu'une cuisine de cuisson mixte. Les filtres saturent plus vite, le plénum se charge plus vite, et le dépôt migre plus loin dans le conduit.",
          "Nous ne recommandons donc pas la même périodicité à un établissement de ce type qu'à une cuisine de production froide, quels que soient leurs volumes respectifs.",
        ],
      },
      {
        h2: "Métropole Européenne de Lille",
        body: [
          "Lille, Roubaix, Tourcoing et Villeneuve-d'Ascq forment un ensemble dense où la restauration indépendante côtoie une restauration d'enseigne importante et une activité de restauration collective liée aux universités et aux sièges d'entreprises.",
          "Le Vieux-Lille pose les contraintes du bâti ancien ; Villeneuve-d'Ascq et Euralille offrent des configurations plus récentes et plus faciles d'accès.",
        ],
      },
      {
        h2: "Littoral, bassin minier et Picardie",
        body: [
          "Dunkerque, Calais et Boulogne-sur-Mer combinent restauration portuaire, restauration collective industrielle et activité saisonnière. Le bassin minier — Lens, Douai, Valenciennes — présente une forte proportion de restauration collective et scolaire.",
          "En Picardie, Amiens, Beauvais, Compiègne et Saint-Quentin fonctionnent avec une restauration de centre-ville et des cuisines centrales de collectivités.",
        ],
      },
    ],
    faq: [
      {
        q: "Un établissement qui fait beaucoup de friture doit-il être traité plus souvent ?",
        a: "Oui. La friture génère un aérosol de graisse beaucoup plus dense : les filtres saturent plus vite et le dépôt migre plus loin dans le réseau. La périodicité recommandée est établie en fonction de votre carte réelle, après le premier diagnostic.",
      },
      {
        q: "Intervenez-vous sur les cuisines centrales de collectivités ?",
        a: "Oui, c'est une part importante de notre activité dans la région. Les interventions sont planifiées sur les périodes de vacances scolaires ou d'arrêt de production.",
      },
    ],
  },

  {
    slug: "grand-est",
    name: "Grand Est",
    shortName: "Grand Est",
    code: "GES",
    wave: 2,
    departments: [
      { code: "08", name: "Ardennes" },
      { code: "10", name: "Aube" },
      { code: "51", name: "Marne" },
      { code: "52", name: "Haute-Marne" },
      { code: "54", name: "Meurthe-et-Moselle" },
      { code: "55", name: "Meuse" },
      { code: "57", name: "Moselle" },
      { code: "67", name: "Bas-Rhin" },
      { code: "68", name: "Haut-Rhin" },
      { code: "88", name: "Vosges" },
    ],
    cities: ["Strasbourg", "Reims", "Metz", "Nancy", "Mulhouse", "Colmar", "Troyes", "Thionville", "Épinal", "Haguenau"],
    h1: "Nettoyage et ramonage de hottes de cuisine professionnelle dans le Grand Est",
    title: "Nettoyage & ramonage de hotte professionnelle dans le Grand Est",
    description:
      "Entretien de hottes, conduits et systèmes d'extraction de cuisine professionnelle dans le Grand Est : Strasbourg, Reims, Metz, Nancy, Mulhouse, Colmar.",
    angle: "restauration traditionnelle alsacienne, institutions européennes et tourisme champenois",
    intro: [
      "Le Grand Est réunit trois anciennes régions aux traditions culinaires marquées, et cette identité se traduit dans les cuisines : winstubs alsaciennes, brasseries lorraines, tables champenoises. Ce sont des cuisines de cuisson lente, de rôtissage et de plats mijotés, avec des installations souvent anciennes.",
      "Strasbourg y ajoute une dimension particulière avec l'hôtellerie et la restauration liées aux institutions européennes, soumises à des exigences de traçabilité et de planification élevées.",
    ],
    sections: [
      {
        h2: "Strasbourg et l'Eurométropole",
        body: [
          "Le centre historique strasbourgeois concentre une restauration traditionnelle installée dans un bâti très ancien, où les conduits d'extraction ont souvent été créés dans des structures existantes sans possibilité de reprise ultérieure.",
          "Ces installations demandent un repérage particulièrement soigné : le tracé réel est rarement documenté et les accès sont limités.",
        ],
      },
      {
        h2: "Reims et le vignoble champenois",
        body: [
          "L'activité de restauration rémoise et champenoise est fortement liée au tourisme œnologique : tables gastronomiques, maisons de champagne recevant des visiteurs, hôtellerie de standing.",
          "Ces établissements attachent une importance particulière à la traçabilité des interventions techniques, ce qui rend le rapport d'entretien aussi important que l'intervention elle-même.",
        ],
      },
      {
        h2: "Sillon lorrain et Alsace du Sud",
        body: [
          "Metz, Nancy, Thionville, Mulhouse et Colmar présentent une restauration de centre-ville active et une restauration collective importante liée aux établissements de santé, aux universités et aux sites industriels transfrontaliers.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment traiter le conduit d'un restaurant installé dans un bâtiment ancien ?",
        a: "Par un repérage préalable systématique. Sur du bâti très ancien, le tracé réel du conduit est rarement documenté : nous identifions les accès disponibles avant de chiffrer, et nous indiquons dans le rapport ce qui a pu être traité et ce qui ne l'a pas été.",
      },
      {
        q: "Fournissez-vous des rapports détaillés pour les établissements soumis à audit ?",
        a: "Oui : rapport par élément, état avant et après, méthode employée, zones sous réserve et attestation datée. Ce format est conçu pour être intégré à un dossier d'exploitation ou présenté lors d'un audit.",
      },
    ],
  },

  {
    slug: "pays-de-la-loire",
    name: "Pays de la Loire",
    shortName: "Pays de la Loire",
    code: "PDL",
    wave: 2,
    departments: [
      { code: "44", name: "Loire-Atlantique" },
      { code: "49", name: "Maine-et-Loire" },
      { code: "53", name: "Mayenne" },
      { code: "72", name: "Sarthe" },
      { code: "85", name: "Vendée" },
    ],
    cities: ["Nantes", "Saint-Herblain", "Angers", "Le Mans", "Saint-Nazaire", "Cholet", "La Roche-sur-Yon", "Laval", "Saumur", "Les Sables-d'Olonne"],
    h1: "Entretien de hottes professionnelles et d'extraction en Pays de la Loire",
    title: "Nettoyage & ramonage de hotte professionnelle en Pays de la Loire",
    description:
      "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle en Pays de la Loire : Nantes, Angers, Le Mans, Saint-Nazaire, La Roche-sur-Yon.",
    angle: "métropole en forte croissance et industrie agroalimentaire",
    intro: [
      "Les Pays de la Loire combinent une métropole nantaise dont la restauration s'est fortement développée, un tissu agroalimentaire dense — l'un des plus importants de France — et un littoral vendéen dont l'activité se concentre sur l'été.",
      "Cette présence agroalimentaire modifie notre périmètre habituel : au-delà des cuisines de restauration, nous intervenons sur des ateliers de production et des laboratoires où les exigences de traçabilité sont plus formalisées.",
    ],
    sections: [
      {
        h2: "Nantes Métropole",
        body: [
          "La restauration nantaise s'est densifiée avec la croissance de l'agglomération, du centre historique aux quartiers de l'Île de Nantes et de Saint-Herblain.",
          "Nous y intervenons aussi bien sur de la restauration indépendante que sur des restaurants d'entreprise liés aux pôles tertiaires.",
        ],
      },
      {
        h2: "Agroalimentaire et laboratoires de production",
        body: [
          "Les ateliers de transformation, laboratoires de traiteurs et unités de production alimentaire de la région disposent de systèmes d'extraction dont l'entretien s'inscrit dans un plan de maîtrise sanitaire formalisé.",
          "Le rapport d'intervention y joue un rôle documentaire précis : il doit pouvoir être présenté lors d'un audit client ou d'un contrôle, avec un périmètre décrit sans ambiguïté.",
        ],
      },
      {
        h2: "Littoral vendéen et Saint-Nazaire",
        body: [
          "Les Sables-d'Olonne, Saint-Jean-de-Monts et la côte vendéenne concentrent une restauration très saisonnière. Saint-Nazaire ajoute une restauration collective industrielle liée aux chantiers et à l'aéronautique.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur des ateliers de production agroalimentaire ?",
        a: "Oui, sur les systèmes d'extraction des zones de cuisson et de transformation, avec un rapport documenté conçu pour s'intégrer à un plan de maîtrise sanitaire.",
      },
      {
        q: "Traitez-vous les établissements saisonniers vendéens ?",
        a: "Oui, avec des campagnes d'intervention avant l'ouverture et après la fermeture de saison.",
      },
    ],
  },

  {
    slug: "bretagne",
    name: "Bretagne",
    shortName: "Bretagne",
    code: "BRE",
    wave: 3,
    departments: [
      { code: "22", name: "Côtes-d'Armor" },
      { code: "29", name: "Finistère" },
      { code: "35", name: "Ille-et-Vilaine" },
      { code: "56", name: "Morbihan" },
    ],
    cities: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes", "Saint-Malo", "Saint-Brieuc", "Lanester", "Concarneau", "Fougères"],
    h1: "Nettoyage de hotte et de conduit d'extraction en Bretagne",
    title: "Nettoyage & ramonage de hotte professionnelle en Bretagne",
    description:
      "Entretien de hottes et systèmes d'extraction de cuisine professionnelle en Bretagne : Rennes, Brest, Quimper, Lorient, Vannes, Saint-Malo.",
    angle: "crêperies, produits de la mer et forte saisonnalité côtière",
    intro: [
      "La Bretagne présente un profil de restauration singulier. Les crêperies y représentent une densité d'établissements sans équivalent ailleurs, avec des modes de cuisson — billigs, plaques à haute température en fonctionnement continu — dont l'encrassement diffère nettement d'une cuisine classique.",
      "S'y ajoutent une restauration de produits de la mer très active sur le littoral et une saisonnalité marquée de Saint-Malo à Concarneau.",
    ],
    sections: [
      {
        h2: "Crêperies : un profil d'encrassement spécifique",
        body: [
          "Une crêperie fonctionne avec plusieurs billigs en chauffe permanente sur de longues plages horaires. La combinaison chaleur constante et matière grasse produit un dépôt qui se forme rapidement au-dessus des plaques et dans le plénum.",
          "L'aspiration y est également plus sollicitée qu'ailleurs, ce qui rend l'entretien du réseau particulièrement sensible : une perte de débit se remarque immédiatement en salle.",
        ],
      },
      {
        h2: "Rennes et l'axe métropolitain",
        body: [
          "Rennes concentre une restauration urbaine dense, une restauration universitaire importante et une restauration d'entreprise liée aux pôles technologiques de l'agglomération.",
          "Les interventions sur la restauration collective y sont planifiées sur les périodes de vacances scolaires et universitaires.",
        ],
      },
      {
        h2: "Littoral : Brest, Lorient, Vannes, Saint-Malo",
        body: [
          "Les ports bretons combinent une restauration à l'année, orientée produits de la mer, et une pointe estivale marquée. Saint-Malo et le golfe du Morbihan présentent la saisonnalité la plus forte de la région.",
          "Nous organisons les interventions saisonnières en avril-mai et en septembre-octobre.",
        ],
      },
    ],
    faq: [
      {
        q: "L'entretien d'une hotte de crêperie est-il particulier ?",
        a: "Oui. La chauffe permanente des billigs sur de longues plages horaires produit un dépôt qui se forme plus vite au-dessus des plaques et dans le plénum. La périodicité recommandée est généralement plus resserrée que pour une cuisine de cuisson mixte.",
      },
      {
        q: "Couvrez-vous les quatre départements bretons ?",
        a: "Oui, avec des tournées organisées par secteur pour desservir aussi bien les métropoles que les communes littorales plus dispersées.",
      },
    ],
  },

  {
    slug: "normandie",
    name: "Normandie",
    shortName: "Normandie",
    code: "NOR",
    wave: 3,
    departments: [
      { code: "14", name: "Calvados" },
      { code: "27", name: "Eure" },
      { code: "50", name: "Manche" },
      { code: "61", name: "Orne" },
      { code: "76", name: "Seine-Maritime" },
    ],
    cities: ["Rouen", "Le Havre", "Caen", "Cherbourg-en-Cotentin", "Évreux", "Dieppe", "Deauville", "Lisieux", "Alençon", "Vernon"],
    h1: "Entretien de hottes et de réseaux d'extraction en Normandie",
    title: "Nettoyage & ramonage de hotte professionnelle en Normandie",
    description:
      "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle en Normandie : Rouen, Le Havre, Caen, Cherbourg, Évreux, Deauville.",
    angle: "activité portuaire, tourisme mémoriel et restauration collective industrielle",
    intro: [
      "La Normandie articule trois activités qui structurent la demande d'entretien : les grands ports du Havre, de Rouen, de Dieppe et de Cherbourg avec leur restauration collective industrielle ; un tourisme mémoriel et balnéaire concentré sur le Calvados et la Manche ; et une restauration de terroir active à l'année.",
      "Les rythmes d'intervention diffèrent nettement entre un restaurant d'entreprise portuaire, ouvert toute l'année, et un établissement de la côte fleurie dont l'activité culmine en été.",
    ],
    sections: [
      {
        h2: "Le Havre, Rouen : restauration collective et sites industriels",
        body: [
          "L'axe Seine concentre des sites industriels et logistiques dotés de restaurants d'entreprise à fort volume. Ces cuisines fonctionnent selon des calendriers stables, ce qui permet une planification d'entretien à l'année.",
          "Les réseaux d'extraction y sont généralement plus longs et plus accessibles qu'en centre-ville historique, ce qui rend les interventions plus complètes.",
        ],
      },
      {
        h2: "Côte fleurie et tourisme mémoriel",
        body: [
          "Deauville, Trouville, Honfleur et les plages du Débarquement génèrent une activité de restauration et d'hôtellerie fortement concentrée sur la saison et sur les week-ends prolongés.",
          "Nous y planifions les interventions en périodes creuses, en janvier-février et en novembre.",
        ],
      },
      {
        h2: "Caen, Cherbourg et l'intérieur",
        body: [
          "Caen et Cherbourg présentent une restauration urbaine à l'année doublée d'une restauration collective liée aux établissements de santé et d'enseignement. L'intérieur normand — Orne, Eure — fonctionne par tournées groupées.",
        ],
      },
    ],
    faq: [
      {
        q: "Quand intervenir dans un établissement de la côte normande ?",
        a: "Les périodes creuses de janvier-février et de novembre sont les plus adaptées : l'établissement est peu ou pas en activité, et l'installation repart propre pour la saison suivante.",
      },
      {
        q: "Traitez-vous les restaurants d'entreprise des sites portuaires ?",
        a: "Oui. Ces cuisines à fort volume représentent une part significative de notre activité normande, avec des plans d'entretien établis à l'année.",
      },
    ],
  },

  {
    slug: "centre-val-de-loire",
    name: "Centre-Val de Loire",
    shortName: "Centre-Val de Loire",
    code: "CVL",
    wave: 3,
    departments: [
      { code: "18", name: "Cher" },
      { code: "28", name: "Eure-et-Loir" },
      { code: "36", name: "Indre" },
      { code: "37", name: "Indre-et-Loire" },
      { code: "41", name: "Loir-et-Cher" },
      { code: "45", name: "Loiret" },
    ],
    cities: ["Tours", "Orléans", "Bourges", "Blois", "Chartres", "Châteauroux", "Dreux", "Joué-lès-Tours", "Olivet", "Montargis"],
    h1: "Nettoyage et ramonage de hottes professionnelles en Centre-Val de Loire",
    title: "Nettoyage & ramonage de hotte professionnelle en Centre-Val de Loire",
    description:
      "Entretien de hottes et de conduits d'extraction de cuisine professionnelle en Centre-Val de Loire : Tours, Orléans, Bourges, Blois, Chartres.",
    angle: "tourisme des châteaux, hôtellerie diffuse et cuisines centrales de collectivités",
    intro: [
      "Le Centre-Val de Loire présente une restauration géographiquement dispersée, structurée autour du tourisme des châteaux et de deux métropoles moyennes, Tours et Orléans.",
      "Cette dispersion a une conséquence pratique : sans organisation par tournées, beaucoup d'établissements de la région se retrouvent mal desservis par des prestataires qui ne se déplacent que sur les grandes agglomérations.",
    ],
    sections: [
      {
        h2: "Hôtellerie-restauration du Val de Loire",
        body: [
          "Les établissements installés dans ou à proximité des domaines et châteaux — restaurants gastronomiques, hôtels de charme, salles de réception — présentent souvent des cuisines aménagées dans des bâtiments anciens, avec des réseaux d'extraction contraints par la structure existante.",
          "L'activité y est fortement liée à la saison touristique et aux réceptions, ce qui concentre les périodes d'intervention possibles.",
        ],
      },
      {
        h2: "Tours et Orléans",
        body: [
          "Les deux métropoles régionales concentrent une restauration urbaine active, une restauration universitaire et une restauration d'entreprise.",
          "Elles constituent nos deux points d'appui pour desservir l'ensemble de la région.",
        ],
      },
      {
        h2: "Restauration collective départementale",
        body: [
          "Les cuisines centrales des collectivités du Cher, de l'Indre, du Loir-et-Cher et de l'Eure-et-Loir alimentent les établissements scolaires et médico-sociaux du territoire.",
          "Ces installations demandent une planification calée sur le calendrier scolaire, avec des interventions concentrées sur les vacances.",
        ],
      },
    ],
    faq: [
      {
        q: "Desservez-vous les établissements éloignés des grandes villes ?",
        a: "Oui, par tournées programmées. Nous regroupons les interventions d'un même secteur, ce qui rend le déplacement économiquement cohérent y compris pour un établissement isolé.",
      },
      {
        q: "Intervenez-vous dans les cuisines centrales scolaires ?",
        a: "Oui, avec une planification calée sur les vacances scolaires pour ne pas perturber la production.",
      },
    ],
  },

  {
    slug: "bourgogne-franche-comte",
    name: "Bourgogne-Franche-Comté",
    shortName: "Bourgogne-Franche-Comté",
    code: "BFC",
    wave: 3,
    departments: [
      { code: "21", name: "Côte-d'Or" },
      { code: "25", name: "Doubs" },
      { code: "39", name: "Jura" },
      { code: "58", name: "Nièvre" },
      { code: "70", name: "Haute-Saône" },
      { code: "71", name: "Saône-et-Loire" },
      { code: "89", name: "Yonne" },
      { code: "90", name: "Territoire de Belfort" },
    ],
    cities: ["Dijon", "Besançon", "Chalon-sur-Saône", "Mâcon", "Belfort", "Montbéliard", "Nevers", "Auxerre", "Beaune", "Dole"],
    h1: "Entretien de hottes de cuisine professionnelle en Bourgogne-Franche-Comté",
    title: "Nettoyage & ramonage de hotte professionnelle en Bourgogne-Franche-Comté",
    description:
      "Nettoyage, dégraissage et ramonage de hottes professionnelles en Bourgogne-Franche-Comté : Dijon, Besançon, Chalon-sur-Saône, Belfort, Beaune.",
    angle: "gastronomie et vignoble, axe autoroutier et restauration d'étape",
    intro: [
      "La Bourgogne-Franche-Comté est traversée par l'un des axes de circulation les plus fréquentés d'Europe. Cette position crée un type d'établissement particulier : la restauration d'étape, hôtels-restaurants d'autoroute et de nationale, dont les cuisines fonctionnent en continu sur de très larges plages horaires.",
      "À l'opposé, la région abrite une gastronomie de vignoble — Côte-d'Or, Beaune, Mâconnais — dont les tables présentent des exigences de propreté et de traçabilité élevées.",
    ],
    sections: [
      {
        h2: "Restauration d'étape : amplitude horaire et créneaux réduits",
        body: [
          "Un établissement d'étape ouvert de 6 h à 23 h ne dispose d'aucune coupure exploitable. L'intervention doit alors se faire de nuit ou lors d'une fermeture technique programmée.",
          "Ces cuisines à service continu encrassent aussi plus vite que la moyenne : le réseau n'a jamais de période de repos.",
        ],
      },
      {
        h2: "Gastronomie et vignoble",
        body: [
          "Dijon, Beaune et le Mâconnais concentrent des tables gastronomiques et des établissements liés à l'œnotourisme, souvent installés dans du bâti ancien.",
          "L'exigence porte autant sur la qualité de l'intervention que sur sa discrétion et sur le document remis.",
        ],
      },
      {
        h2: "Besançon, Belfort, Montbéliard : restauration collective industrielle",
        body: [
          "L'aire urbaine Belfort-Montbéliard et l'agglomération bisontine concentrent une restauration d'entreprise liée aux sites industriels de la région, avec des cuisines de production à fort volume et des réseaux d'extraction étendus.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment intervenir dans un établissement ouvert en continu ?",
        a: "De nuit, ou lors d'une fermeture technique programmée. Nous définissons le créneau avec vous au moment du devis et organisons l'intervention pour qu'elle soit terminée avant la reprise du service.",
      },
      {
        q: "Traitez-vous les hôtels-restaurants d'axe autoroutier ?",
        a: "Oui. Leur amplitude horaire et leur service continu en font des installations à périodicité resserrée, que nous suivons généralement sous contrat annuel.",
      },
    ],
  },

  {
    slug: "corse",
    name: "Corse",
    shortName: "Corse",
    code: "COR",
    wave: 4,
    departments: [
      { code: "2A", name: "Corse-du-Sud" },
      { code: "2B", name: "Haute-Corse" },
    ],
    cities: ["Ajaccio", "Bastia", "Porto-Vecchio", "Calvi", "Corte", "Propriano", "Bonifacio"],
    h1: "Nettoyage et ramonage de hottes professionnelles en Corse",
    title: "Nettoyage & ramonage de hotte professionnelle en Corse",
    description:
      "Entretien de hottes et de systèmes d'extraction de cuisine professionnelle en Corse : Ajaccio, Bastia, Porto-Vecchio, Calvi. Campagnes avant et après saison.",
    angle: "saisonnalité extrême et logistique insulaire",
    intro: [
      "La Corse pousse la saisonnalité à son maximum. De nombreux établissements réalisent la quasi-totalité de leur chiffre d'affaires entre juin et septembre, avec une activité qui s'effondre le reste de l'année.",
      "Cette concentration, combinée à la logistique insulaire, impose une organisation d'intervention spécifique : des campagnes groupées, planifiées longtemps à l'avance, sur deux fenêtres précises.",
    ],
    sections: [
      {
        h2: "Deux fenêtres d'intervention par an",
        body: [
          "La première se situe en avril-mai : elle permet de partir en saison sur une installation propre, avec un réseau à pleine section et une aspiration au maximum de ses capacités.",
          "La seconde, en octobre, retire le dépôt accumulé pendant l'été avant qu'il ne durcisse pendant les mois de fermeture. C'est de loin la plus rentable : une graisse fraîche se retire en une fraction du temps nécessaire à une graisse polymérisée.",
        ],
      },
      {
        h2: "Organisation logistique",
        body: [
          "Le matériel d'intervention — bacs de trempage, matériel de rotobrossage, produits — doit être acheminé. Nous fonctionnons donc par campagnes groupées, en traitant plusieurs établissements d'un même secteur sur une même période.",
          "Cela suppose une réservation anticipée : les créneaux d'avril-mai et d'octobre se remplissent plusieurs semaines à l'avance.",
        ],
      },
      {
        h2: "Ajaccio, Bastia et les pôles touristiques",
        body: [
          "Les deux préfectures concentrent une restauration active à l'année, tandis que Porto-Vecchio, Bonifacio, Calvi et Propriano fonctionnent sur un modèle très majoritairement saisonnier.",
          "Nous distinguons ces deux profils dans les périodicités recommandées.",
        ],
      },
    ],
    faq: [
      {
        q: "Quand faut-il réserver une intervention en Corse ?",
        a: "Plusieurs semaines à l'avance. Nous fonctionnons par campagnes groupées sur deux fenêtres — avril-mai et octobre — et les créneaux se remplissent rapidement.",
      },
      {
        q: "Intervenez-vous à l'année ou uniquement en saison ?",
        a: "Les établissements ouverts à l'année, notamment à Ajaccio et Bastia, peuvent être traités hors campagne. Pour les établissements saisonniers, les deux fenêtres d'avant et après saison sont nettement plus efficaces.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const regionSlugs = regions.map((r) => r.slug);

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export const totalDepartments = regions.reduce((n, r) => n + r.departments.length, 0);
