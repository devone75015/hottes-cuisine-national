import type { City } from "@/lib/types";
import { extraCities } from "./cities-extra";

/**
 * Villes tier 1 — vague 1.
 *
 * PLAN ANTI-DUPLICATE (§18 du cadrage) : chaque ville porte un modèle éditorial
 * différent, un contexte économique propre, une contrainte technique propre,
 * un cas d'intervention propre et sa propre FAQ. Aucun de ces blocs n'est
 * interpolé depuis un gabarit commun.
 *
 * Règle de proximité : `nearby` ne contient que des communes du bassin
 * d'intervention réel. Aucune génération par rayon kilométrique aveugle.
 *
 * Une ville n'est publiée que si tous ces blocs sont rédigés.
 */

const tier1Cities: City[] = [
  // ===========================================================================
  {
    slug: "paris",
    name: "Paris",
    prep: "à Paris",
    department: "Paris",
    departmentCode: "75",
    region: "ile-de-france",
    epci: "Ville de Paris",
    tier: 1,
    template: "terrain",
    nearby: [
      "Boulogne-Billancourt",
      "Levallois-Perret",
      "Neuilly-sur-Seine",
      "Saint-Ouen-sur-Seine",
      "Pantin",
      "Montreuil",
      "Charenton-le-Pont",
      "Ivry-sur-Seine",
      "Vincennes",
      "Clichy",
      "Issy-les-Moulineaux",
      "Montrouge",
    ],
    districts: [
      "Le Marais et République",
      "Bastille et Oberkampf",
      "Montmartre et Pigalle",
      "Quartier latin et Saint-Germain",
      "Batignolles et Ternes",
      "Rue Montorgueil et Sentier",
      "Belleville et Ménilmontant",
      "Rive gauche et Montparnasse",
    ],
    context: [
      "Paris concentre plusieurs dizaines de milliers d'établissements de restauration sur 105 km², dans un bâti où presque aucune cuisine n'a été conçue comme telle à l'origine. Les cuisines s'installent en sous-sol, en arrière-salle, dans des espaces contraints où le conduit d'extraction a été créé après coup — souvent plusieurs fois, au gré des reprises successives du fonds.",
      "La conséquence est constante : le tracé du réseau ne correspond presque jamais aux plans, quand des plans existent. Un conduit part de la cuisine, traverse une cour, remonte dans une gaine technique partagée avec d'autres lots, et débouche en toiture au-dessus de six étages d'habitation.",
    ],
    constraint:
      "L'accès à la partie haute du conduit dépend presque toujours d'un tiers — syndic, bailleur ou copropriété voisine. C'est cette autorisation, et non la technique, qui conditionne le périmètre réellement traitable d'une intervention parisienne.",
    dominantEstablishments: [
      "Restaurants indépendants de quartier",
      "Bistrots et brasseries",
      "Restauration rapide et street food",
      "Hôtels avec restaurant",
      "Boulangeries-pâtisseries",
      "Traiteurs et laboratoires",
    ],
    caseStudy: {
      title: "Restaurant de 60 couverts, 11e arrondissement",
      body: "Établissement repris trois ans plus tôt, aucun historique d'entretien du conduit. Le repérage a révélé un conduit remontant sur cinq étages dans une gaine technique, sans aucune trappe de visite. Nous avons traité les huit premiers mètres depuis la hotte et les quatre derniers depuis la toiture, après accord du syndic obtenu en trois semaines. Le rapport a explicitement mentionné les vingt mètres intermédiaires non atteignables, et proposé la pose de deux trappes lors du prochain passage. L'exploitant a pu transmettre un document exact à son assureur.",
    },
    services: ["nettoyage-hotte-restaurant", "ramonage-hotte-restaurant", "degraissage-hotte-restaurant", "nettoyage-conduit-extraction", "depannage-hotte-restaurant", "remplacement-courroie-hotte-professionnelle"],
    faq: [
      {
        q: "Comment intervenir dans un restaurant parisien sans local technique ?",
        a: "Nous arrivons avec l'ensemble du matériel, y compris les bacs de trempage, et nous confinons une zone de travail dans la cuisine elle-même. Aucun espace de stockage sur place n'est nécessaire. Les résidus repartent avec nous.",
      },
      {
        q: "Mon conduit monte dans la gaine de l'immeuble : puis-je le faire traiter seul ?",
        a: "Vous pouvez faire traiter la partie située dans votre lot. Dès que l'intervention nécessite un accès aux parties communes ou à la toiture, l'accord du syndic est requis. Nous vous fournissons le descriptif technique à joindre à votre demande — comptez généralement deux à quatre semaines de délai.",
      },
      {
        q: "Intervenez-vous en zone piétonne et avec les restrictions de circulation ?",
        a: "Oui. Nos équipes parisiennes travaillent avec les créneaux de livraison réglementés et interviennent tôt le matin ou en soirée selon les contraintes de votre secteur.",
      },
      {
        q: "Quels arrondissements couvrez-vous ?",
        a: "Les vingt arrondissements, ainsi que les communes limitrophes de la petite couronne : Boulogne-Billancourt, Levallois-Perret, Neuilly-sur-Seine, Saint-Ouen, Pantin, Montreuil, Charenton, Ivry, Vincennes, Clichy, Issy-les-Moulineaux et Montrouge.",
      },
    ],
  },

  // ===========================================================================
  {
    slug: "lyon",
    name: "Lyon",
    prep: "à Lyon",
    department: "Rhône",
    departmentCode: "69",
    region: "auvergne-rhone-alpes",
    epci: "Métropole de Lyon",
    tier: 1,
    template: "technique",
    nearby: [
      "Villeurbanne",
      "Vénissieux",
      "Bron",
      "Caluire-et-Cuire",
      "Saint-Priest",
      "Vaulx-en-Velin",
      "Écully",
      "Oullins-Pierre-Bénite",
      "Décines-Charpieu",
      "Rillieux-la-Pape",
      "Saint-Fons",
      "Tassin-la-Demi-Lune",
    ],
    districts: [
      "Vieux Lyon et Saint-Jean",
      "Presqu'île et Bellecour",
      "Croix-Rousse",
      "Part-Dieu et Villette",
      "Confluence",
      "Guillotière et Jean Macé",
      "Brotteaux et Foch",
      "Gerland",
    ],
    context: [
      "Lyon est la deuxième zone de restauration de France et la première par la densité de tables traditionnelles. Les bouchons du Vieux Lyon et de la Presqu'île occupent des immeubles Renaissance et XVIIIe dont les structures n'autorisent aucune reprise lourde du réseau d'extraction.",
      "À l'inverse, la Part-Dieu, Confluence et Gerland concentrent une restauration récente installée dans des bâtiments conçus avec leurs réseaux techniques, où les interventions sont sensiblement plus complètes et plus rapides.",
    ],
    constraint:
      "Dans le Vieux Lyon et sur les pentes de la Croix-Rousse, les conduits empruntent des structures anciennes, parfois maçonnées, à section variable et fortement coudées. L'outillage de rotobrossage doit être choisi au cas par cas : une brosse standard n'y passe pas, ou l'endommage.",
    dominantEstablishments: [
      "Bouchons et tables traditionnelles",
      "Restaurants gastronomiques",
      "Brasseries de centre-ville",
      "Restaurants d'entreprise de la Part-Dieu",
      "Restauration universitaire",
      "Hôtellerie d'affaires",
    ],
    caseStudy: {
      title: "Bouchon traditionnel, Vieux Lyon",
      body: "Conduit maçonné d'origine, section irrégulière, quatre coudes sur douze mètres. Le rotobrossage standard était inutilisable sans risque pour la maçonnerie. Nous avons procédé par traitement chimique prolongé avec temps de contact étendu, puis retrait mécanique manuel depuis les deux extrémités et une trappe existante à mi-hauteur. L'intervention a demandé une journée complète contre une demi-journée sur un conduit métallique équivalent — écart annoncé au devis après repérage, pas découvert sur place.",
    },
    services: ["nettoyage-hotte-restaurant", "ramonage-hotte-restaurant", "degraissage-hotte-restaurant", "nettoyage-conduit-extraction", "depannage-hotte-restaurant", "remplacement-courroie-hotte-professionnelle"],
    faq: [
      {
        q: "Peut-on ramoner un conduit maçonné ancien sans l'abîmer ?",
        a: "Oui, mais pas avec l'outillage standard. Sur une maçonnerie ancienne, nous privilégions un traitement chimique à temps de contact prolongé suivi d'un retrait mécanique manuel, ce qui allonge l'intervention mais préserve la structure. Ce choix est arrêté après repérage et figure au devis.",
      },
      {
        q: "Quel délai d'intervention sur la Métropole de Lyon ?",
        a: "Nos équipes sont basées sur la métropole, ce qui nous permet d'intervenir rapidement sur Lyon et les communes de l'agglomération. Le délai exact vous est confirmé au devis, en fonction du créneau horaire souhaité.",
      },
      {
        q: "Intervenez-vous sur les restaurants d'entreprise de la Part-Dieu ?",
        a: "Oui. Ces cuisines de production à fort volume disposent généralement de réseaux accessibles et bien documentés, ce qui permet des interventions complètes planifiées sur les périodes de fermeture.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Lyon ?",
        a: "L'ensemble de la Métropole de Lyon : Villeurbanne, Vénissieux, Bron, Caluire-et-Cuire, Saint-Priest, Vaulx-en-Velin, Écully, Oullins-Pierre-Bénite, Décines-Charpieu, Rillieux-la-Pape, Saint-Fons et Tassin-la-Demi-Lune.",
      },
    ],
  },

  // ===========================================================================
  {
    slug: "marseille",
    name: "Marseille",
    prep: "à Marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "provence-alpes-cote-d-azur",
    epci: "Aix-Marseille-Provence",
    tier: 1,
    template: "sectoriel",
    nearby: [
      "Aubagne",
      "La Ciotat",
      "Vitrolles",
      "Marignane",
      "Allauch",
      "Plan-de-Cuques",
      "Cassis",
      "Septèmes-les-Vallons",
      "Les Pennes-Mirabeau",
      "Carry-le-Rouet",
    ],
    districts: [
      "Vieux-Port et Panier",
      "Cours Julien et Notre-Dame-du-Mont",
      "Joliette et Euroméditerranée",
      "Prado et Castellane",
      "Vallon des Auffes et Corniche",
      "Estaque et quartiers Nord",
      "La Valentine et Saint-Barnabé",
    ],
    context: [
      "La restauration marseillaise se distingue par la variété de ses modes de cuisson. Restaurants de poissons du Vieux-Port et du Vallon des Auffes, pizzerias au feu de bois présentes dans tous les quartiers, restauration méditerranéenne et orientale à forte proportion de grillades et de friture, snacks et pizzerias à emporter : chacun de ces profils encrasse son réseau différemment.",
      "S'y ajoute une activité de croisière et de tourisme urbain concentrée sur la belle saison, et une restauration collective importante liée aux établissements de santé et scolaires de la deuxième ville de France.",
    ],
    constraint:
      "Les pizzerias au feu de bois posent un cas particulier : le four dispose de son propre conduit, distinct de celui de la hotte de cuisson. Les deux doivent être traités, avec des méthodes différentes — dépôt de graisse d'un côté, résidus de combustion de l'autre. Beaucoup d'exploitants découvrent l'existence du second conduit au moment du diagnostic.",
    dominantEstablishments: [
      "Restaurants de poissons et de fruits de mer",
      "Pizzerias au feu de bois",
      "Restauration méditerranéenne et orientale",
      "Snacks et restauration rapide",
      "Hôtels et restaurants de bord de mer",
      "Cuisines centrales et restauration scolaire",
    ],
    caseStudy: {
      title: "Pizzeria au feu de bois, 6e arrondissement",
      body: "L'exploitant avait fait traiter la hotte de son piano de cuisson par un prestataire généraliste et pensait son installation en règle. Le diagnostic a mis en évidence un second conduit, celui du four à bois, jamais entretenu depuis l'ouverture huit ans plus tôt. Les deux réseaux ont été traités lors de la même intervention, avec deux méthodes distinctes et deux sections séparées dans le rapport — un point que son assureur avait précisément demandé de clarifier.",
    },
    services: ["nettoyage-hotte-restaurant", "ramonage-hotte-restaurant", "degraissage-hotte-restaurant", "depannage-hotte-restaurant", "remplacement-courroie-hotte-professionnelle"],
    faq: [
      {
        q: "Ma pizzeria a un four à bois : faut-il traiter deux conduits ?",
        a: "Oui, dans la quasi-totalité des cas. Le four dispose de son propre conduit d'évacuation, indépendant de celui de la hotte de cuisson. Les deux relèvent de traitements différents et doivent apparaître séparément dans le rapport d'intervention.",
      },
      {
        q: "Intervenez-vous sur les restaurants du Vieux-Port en pleine saison ?",
        a: "Oui, en dehors des services. Sur les établissements à forte activité estivale, nous privilégions cependant les fenêtres d'avant et d'après saison, où l'intervention est plus complète et le dépôt plus facile à retirer.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Marseille ?",
        a: "Aubagne, La Ciotat, Vitrolles, Marignane, Allauch, Plan-de-Cuques, Cassis, Septèmes-les-Vallons, Les Pennes-Mirabeau et Carry-le-Rouet, dans le périmètre de la métropole Aix-Marseille-Provence.",
      },
    ],
  },

  // ===========================================================================
  {
    slug: "bordeaux",
    name: "Bordeaux",
    prep: "à Bordeaux",
    department: "Gironde",
    departmentCode: "33",
    region: "nouvelle-aquitaine",
    epci: "Bordeaux Métropole",
    tier: 1,
    template: "process",
    nearby: [
      "Mérignac",
      "Pessac",
      "Talence",
      "Villenave-d'Ornon",
      "Bègles",
      "Le Bouscat",
      "Bruges",
      "Gradignan",
      "Cenon",
      "Lormont",
      "Floirac",
      "Eysines",
    ],
    districts: [
      "Triangle d'or et Chartrons",
      "Saint-Pierre et Place du Parlement",
      "Quais et Bassins à flot",
      "Saint-Michel et Capucins",
      "Victoire et Saint-Genès",
      "Bastide",
      "Caudéran",
    ],
    context: [
      "La restauration bordelaise a connu une croissance rapide, en centre historique comme sur les quais et les Bassins à flot. Beaucoup d'établissements se sont installés dans des immeubles du XVIIIe siècle inscrits ou situés en secteur sauvegardé, ce qui limite fortement les possibilités de reprise du réseau d'extraction.",
      "En première couronne — Mérignac, Pessac, Bègles, Bruges — les configurations sont plus récentes : locaux commerciaux conçus avec leurs réseaux, accès en toiture ou en façade, trappes de visite présentes dès l'origine.",
    ],
    constraint:
      "En secteur sauvegardé, toute modification visible en façade ou en toiture est soumise à autorisation. Sur ces établissements, la pose de trappes de visite ou la reprise d'un rejet supposent des démarches préalables : nous les identifions au diagnostic pour éviter de proposer une solution irréalisable.",
    dominantEstablishments: [
      "Restaurants de centre historique",
      "Bars à vins et tables œnotouristiques",
      "Brasseries et bistrots de quartier",
      "Restauration des Bassins à flot",
      "Restauration universitaire de Pessac et Talence",
      "Restaurants d'entreprise de Mérignac",
    ],
    caseStudy: {
      title: "Bar à vins avec cuisine, quartier des Chartrons",
      body: "Établissement de 40 couverts installé dans un immeuble XVIIIe, hotte unique, conduit remontant en façade arrière. La demande initiale portait sur un simple nettoyage de hotte. Le diagnostic a montré un plénum chargé et une entrée de conduit fortement réduite, expliquant la perte d'aspiration signalée depuis un an. Nous avons traité l'ensemble en une intervention de six heures un lundi de fermeture, puis établi un plan d'entretien à deux passages annuels : le second passage, six mois plus tard, a demandé moitié moins de temps.",
    },
    services: ["nettoyage-hotte-restaurant", "ramonage-hotte-restaurant", "depannage-hotte-restaurant"],
    faq: [
      {
        q: "Mon local est en secteur sauvegardé : puis-je faire poser des trappes de visite ?",
        a: "Sur la partie intérieure du conduit, généralement oui. Dès que la pose est visible en façade ou en toiture, une autorisation préalable est nécessaire. Nous identifions ce point au diagnostic pour ne pas vous proposer une solution qui ne pourra pas être mise en œuvre.",
      },
      {
        q: "Comment se déroule une première intervention ?",
        a: "Un échange téléphonique de quelques minutes, puis un devis sous 24 h — l'envoi de photos permet de chiffrer précisément dès ce stade. L'intervention est ensuite planifiée sur le créneau qui vous convient, généralement un jour de fermeture ou une coupure. Vous recevez le rapport photo et l'attestation le jour même.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Bordeaux ?",
        a: "Mérignac, Pessac, Talence, Villenave-d'Ornon, Bègles, Le Bouscat, Bruges, Gradignan, Cenon, Lormont, Floirac et Eysines, sur le périmètre de Bordeaux Métropole.",
      },
    ],
  },

  // ===========================================================================
  {
    slug: "toulouse",
    name: "Toulouse",
    prep: "à Toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "occitanie",
    epci: "Toulouse Métropole",
    tier: 1,
    template: "comparatif",
    nearby: [
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Balma",
      "Ramonville-Saint-Agne",
      "L'Union",
      "Cugnaux",
      "Saint-Orens-de-Gameville",
      "Portet-sur-Garonne",
      "Muret",
    ],
    districts: [
      "Capitole et centre historique",
      "Carmes et Saint-Étienne",
      "Saint-Cyprien",
      "Compans-Caffarelli",
      "Matabiau et Marengo",
      "Purpan et Ancely",
      "Rangueil et Université",
    ],
    context: [
      "Toulouse combine deux marchés que peu de villes réunissent à ce niveau : une restauration de centre-ville dense, concentrée autour du Capitole, des Carmes et de Saint-Cyprien, et une restauration d'entreprise de très grande échelle liée aux sites aéronautiques et technologiques de Blagnac, Colomiers et Rangueil.",
      "Ces deux univers n'ont ni les mêmes cuisines, ni les mêmes contraintes, ni les mêmes interlocuteurs — d'un côté un exploitant qui décide seul, de l'autre un service technique et un cahier des charges.",
    ],
    constraint:
      "La question posée le plus souvent par les exploitants toulousains n'est pas technique mais terminologique : faut-il un nettoyage, un dégraissage ou un ramonage ? Les trois termes circulent, notamment dans les demandes des assureurs, et recouvrent des périmètres différents. Le mauvais choix se traduit par une intervention incomplète et un document inadapté.",
    dominantEstablishments: [
      "Restaurants de centre-ville",
      "Restaurants d'entreprise aéronautiques",
      "Restauration universitaire",
      "Brasseries et bistrots",
      "Restauration rapide et food courts",
      "Cuisines centrales de collectivités",
    ],
    caseStudy: {
      title: "Restaurant d'entreprise, zone aéroportuaire de Blagnac",
      body: "Cuisine de production de 900 couverts quotidiens, quatre hottes, réseau d'extraction de plus de quarante mètres avec deux caissons. Le service technique demandait un « ramonage » ; le besoin réel était une remise à niveau complète du système, hotte comprise. Nous avons chiffré les deux périmètres séparément pour que la décision soit prise en connaissance de cause, puis réalisé l'intervention complète sur trois nuits consécutives, sans interruption du service de midi.",
    },
    services: ["nettoyage-hotte-restaurant", "ramonage-hotte-restaurant", "depannage-hotte-restaurant"],
    faq: [
      {
        q: "Nettoyage, dégraissage ou ramonage : de quoi ai-je besoin ?",
        a: "Le nettoyage remet le poste en état d'exploitation, filtres compris. Le dégraissage cible les dépôts accumulés et durcis. Le ramonage désigne le traitement intérieur du conduit et du réseau. Si votre assureur demande un justificatif d'entretien de conduit, c'est le ramonage qui est visé. Dans la plupart des cas, le plus pertinent est de coupler hotte et conduit dans une même intervention.",
      },
      {
        q: "Intervenez-vous sur les restaurants d'entreprise de la zone aéroportuaire ?",
        a: "Oui. Ces cuisines de production demandent une intervention découpée par zone et par créneau, généralement de nuit, pour maintenir le service. Nous fournissons un rapport structuré exploitable par un service technique.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Toulouse ?",
        a: "Colomiers, Blagnac, Tournefeuille, Balma, Ramonville-Saint-Agne, L'Union, Cugnaux, Saint-Orens-de-Gameville, Portet-sur-Garonne et Muret.",
      },
    ],
  },

  // ===========================================================================
  {
    slug: "lille",
    name: "Lille",
    prep: "à Lille",
    department: "Nord",
    departmentCode: "59",
    region: "hauts-de-france",
    epci: "Métropole Européenne de Lille",
    tier: 1,
    template: "reassurance",
    nearby: [
      "Roubaix",
      "Tourcoing",
      "Villeneuve-d'Ascq",
      "Wattrelos",
      "Marcq-en-Barœul",
      "Lambersart",
      "La Madeleine",
      "Croix",
      "Lomme",
      "Hellemmes",
      "Mons-en-Barœul",
      "Wasquehal",
    ],
    districts: [
      "Vieux-Lille",
      "Centre et Grand'Place",
      "Wazemmes",
      "Euralille et Gares",
      "Vauban et Esquermes",
      "Moulins",
      "Saint-Maurice Pellevoisin",
    ],
    context: [
      "La restauration lilloise repose largement sur des modes de cuisson à forte production de graisse : friteries, estaminets, brasseries traditionnelles. Un établissement dont la carte fait une place importante à la friture encrasse son réseau nettement plus vite qu'une cuisine de cuisson mixte, et ses exploitants le constatent souvent sans faire le lien avec le rythme d'entretien.",
      "La métropole ajoute une dimension d'enseigne : de nombreux groupes de restauration régionaux gèrent plusieurs établissements sur Lille, Roubaix, Tourcoing et Villeneuve-d'Ascq, avec un besoin de suivi consolidé plutôt que d'interventions isolées.",
    ],
    constraint:
      "Sur un parc de plusieurs établissements, la difficulté n'est plus technique : c'est de savoir, à un instant donné, quel site a été traité, quand, sur quel périmètre, et lequel présente une réserve ouverte. Sans document consolidé, un exploitant multisites pilote à l'aveugle.",
    dominantEstablishments: [
      "Estaminets et brasseries traditionnelles",
      "Friteries et restauration à emporter",
      "Groupes de restauration régionaux",
      "Restauration étudiante",
      "Restaurants d'entreprise d'Euralille",
      "Restauration collective et scolaire",
    ],
    caseStudy: {
      title: "Groupe de restauration, 7 établissements sur la métropole",
      body: "Sept sites répartis entre Lille, Roubaix, Villeneuve-d'Ascq et Marcq-en-Barœul, entretenus jusque-là par quatre prestataires différents, sans historique commun. Nous avons commencé par un diagnostic de l'ensemble du parc, puis établi un état consolidé : date de dernière intervention, périmètre traité, réserves ouvertes et échéance suivante pour chaque site. Trois établissements présentaient un conduit jamais traité. Le plan d'entretien mis en place depuis fonctionne avec un interlocuteur unique et un reporting trimestriel.",
    },
    services: ["nettoyage-hotte-restaurant", "ramonage-hotte-restaurant", "depannage-hotte-restaurant"],
    faq: [
      {
        q: "Que contient exactement l'attestation d'entretien que vous remettez ?",
        a: "L'identification de l'établissement, la date de l'intervention, le périmètre précis traité élément par élément, la méthode employée, et la mention explicite des zones qui n'ont pas pu être atteintes avec le motif. Elle est accompagnée d'un rapport photo avant / après.",
      },
      {
        q: "Comment suivez-vous un parc de plusieurs établissements ?",
        a: "Par un état de parc consolidé : pour chaque site, la date de dernière intervention, le périmètre traité, les réserves ouvertes et la prochaine échéance. Vous disposez d'un interlocuteur unique et d'un reporting périodique, au lieu de gérer site par site.",
      },
      {
        q: "Un établissement qui fait beaucoup de friture doit-il être traité plus souvent ?",
        a: "Oui. La friture produit un aérosol de graisse beaucoup plus dense : les filtres saturent plus vite et le dépôt migre plus loin dans le réseau. La périodicité recommandée est établie après le premier diagnostic, en fonction de votre carte réelle.",
      },
      {
        q: "Quelles communes couvrez-vous autour de Lille ?",
        a: "Roubaix, Tourcoing, Villeneuve-d'Ascq, Wattrelos, Marcq-en-Barœul, Lambersart, La Madeleine, Croix, Lomme, Hellemmes, Mons-en-Barœul et Wasquehal, sur le périmètre de la Métropole Européenne de Lille.",
      },
    ],
  },
];

/** Registre complet des villes publiées. */
export const cities: City[] = [...tier1Cities, ...extraCities];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const citySlugs = cities.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function citiesInRegion(regionSlug: string): City[] {
  return cities.filter((c) => c.region === regionSlug);
}
