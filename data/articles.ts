import type { Article } from "@/lib/types";

/**
 * Centre d'expertise — vague 1.
 * Règle : un article alimente UNE money page principale (`primaryTarget`)
 * et deux liens secondaires. Aucun article ne cible un mot-clé déjà porté
 * par une page commerciale (règle de non-cannibalisation, §4 du cadrage).
 */

export const articles: Article[] = [
  {
    slug: "frequence-nettoyage-hotte-professionnelle",
    title: "Quelle fréquence pour nettoyer une hotte professionnelle ?",
    h1: "Quelle fréquence pour nettoyer une hotte professionnelle ?",
    description:
      "Ce qui détermine réellement la fréquence de nettoyage d'une hotte professionnelle : type de cuisson, volume, configuration du réseau, exigences d'assurance.",
    category: "Entretien",
    readingTime: 6,
    published: "2026-08-26",
    excerpt:
      "Il n'existe pas de fréquence universelle. Voici les cinq facteurs qui déterminent réellement le rythme d'entretien de votre installation.",
    primaryTarget: "nettoyage-hotte-professionnelle",
    secondaryTargets: ["entretien-hotte-professionnelle", "degraissage-hotte-professionnelle"],
    sections: [
      {
        h2: "Pourquoi la question n'a pas de réponse unique",
        body: [
          "C'est la question qui revient le plus souvent, et c'est aussi celle à laquelle il est le plus tentant de répondre par un chiffre rond. Deux fois par an, une fois par trimestre, tous les six mois : ces réponses circulent, mais aucune ne tient face à la réalité des cuisines.",
          "Une friterie qui tourne quatorze heures par jour et une cuisine de production froide qui sert 300 couverts n'ont rien à voir en termes d'encrassement. Leur donner la même périodicité revient à sur-entretenir l'une et à négliger l'autre.",
        ],
      },
      {
        h2: "Les cinq facteurs qui déterminent réellement le rythme",
        body: [
          "La périodicité correcte se déduit de la combinaison de cinq éléments, que nous évaluons lors du diagnostic initial.",
        ],
        list: [
          "Le mode de cuisson dominant : la friture, le grill et le rôtissage produisent un aérosol de graisse bien plus dense qu'une cuisson vapeur ou qu'une remise en température",
          "Le volume réel : le nombre de couverts servis, pas la capacité théorique de la salle",
          "L'amplitude horaire : une cuisine en service continu n'a jamais de période de repos, contrairement à une cuisine à deux services",
          "La configuration du réseau : un conduit long et coudé accumule davantage et plus loin qu'un conduit court et rectiligne",
          "Les exigences propres à votre contrat d'assurance, qui peuvent imposer leur propre rythme indépendamment de ces critères techniques",
        ],
      },
      {
        h2: "Ce que dit — et ne dit pas — la réglementation",
        body: [
          "Les obligations d'entretien applicables à un établissement dépendent de son classement, de son activité et du règlement sanitaire de son département, dont le contenu varie d'un département à l'autre. Il n'existe donc pas de fréquence nationale unique qu'on pourrait citer ici.",
          "Nous vous recommandons de vérifier deux sources : les exigences précises figurant dans votre contrat d'assurance, et le règlement sanitaire applicable dans votre département. Nous ne nous substituons ni à l'un ni à l'autre — nous adaptons le plan d'entretien à ce que ces textes vous imposent.",
        ],
        callout:
          "Méfiez-vous de tout prestataire qui vous annonce une fréquence « obligatoire » sans vous demander votre activité, votre département ni votre contrat d'assurance.",
      },
      {
        h2: "La méthode que nous utilisons",
        body: [
          "Nous établissons une préconisation après le premier diagnostic, en fonction de ce que nous constatons réellement dans votre installation. Puis nous l'ajustons : si le deuxième passage montre une installation encore propre, nous espaçons ; si elle est déjà chargée, nous resserrons.",
          "Une périodicité juste est une périodicité vérifiée sur deux ou trois passages, pas une périodicité annoncée à la signature.",
        ],
      },
      {
        h2: "Les signes qui indiquent qu'il faut avancer l'intervention",
        body: [
          "Indépendamment du calendrier, certains symptômes signalent qu'il ne faut pas attendre : une aspiration qui a visiblement faibli, des odeurs qui reviennent en salle, un inox qui redevient poisseux en quelques heures, ou des gouttes qui se forment sous la hotte.",
        ],
      },
    ],
    faq: [
      {
        q: "Existe-t-il une fréquence légale de nettoyage de hotte ?",
        a: "Les obligations dépendent du classement de l'établissement, de son activité et du règlement sanitaire de son département, dont le contenu varie localement. Il n'existe pas de fréquence nationale unique applicable à tous les établissements. Vérifiez auprès de votre assureur et de l'autorité compétente de votre département.",
      },
      {
        q: "Peut-on espacer les interventions pour réduire les coûts ?",
        a: "C'est généralement une fausse économie. Plus l'écart entre deux passages s'allonge, plus le dépôt polymérise et plus l'intervention suivante devient longue et coûteuse. Le coût annuel d'un entretien régulier est le plus souvent inférieur à celui d'une remise à niveau ponctuelle.",
      },
    ],
  },

  {
    slug: "nettoyage-degraissage-ramonage-difference",
    title: "Nettoyage, dégraissage, ramonage : quelle différence pour une hotte pro ?",
    h1: "Nettoyage, dégraissage, ramonage : quelle différence pour une hotte professionnelle ?",
    description:
      "Trois termes, trois périmètres différents. Comprendre ce que recouvre chaque prestation pour demander la bonne intervention et obtenir le bon document.",
    category: "Comprendre",
    readingTime: 5,
    published: "2026-08-26",
    excerpt:
      "Les trois mots circulent, parfois pour désigner la même chose, parfois non. Voici ce que chacun recouvre réellement.",
    primaryTarget: "nettoyage-hotte-professionnelle",
    secondaryTargets: ["degraissage-hotte-professionnelle", "ramonage-hotte-professionnelle"],
    sections: [
      {
        h2: "Pourquoi la confusion existe",
        body: [
          "Les trois termes sont employés indifféremment par les exploitants, les prestataires et parfois les assureurs. Ils ne recouvrent pourtant pas le même périmètre, et le malentendu a une conséquence concrète : une intervention qui ne correspond pas au besoin, et un document qui ne convient pas à celui qui l'a demandé.",
        ],
      },
      {
        h2: "Le nettoyage : remettre le poste en état d'exploitation",
        body: [
          "Le nettoyage traite l'ensemble visible et démontable du poste : caisson de la hotte, surfaces internes, filtres, plénum, bacs à graisse, éclairage. C'est l'intervention de référence, celle qui restitue une cuisine propre et opérationnelle.",
          "Elle s'arrête généralement aux premiers mètres du conduit — au-delà, il faut un autre outillage.",
        ],
      },
      {
        h2: "Le dégraissage : s'attaquer au dépôt durci",
        body: [
          "Le dégraissage vise spécifiquement la graisse accumulée et polymérisée, celle qu'un nettoyage courant ne retire plus. Il combine action chimique prolongée et action mécanique.",
          "Sur une installation régulièrement entretenue, nettoyage et dégraissage se confondent largement. Sur une installation négligée depuis des années, le dégraissage devient une opération de rattrapage à part entière, souvent plus longue qu'un nettoyage classique.",
        ],
      },
      {
        h2: "Le ramonage : traiter l'intérieur du réseau",
        body: [
          "Le ramonage désigne le traitement intérieur du conduit et du réseau d'extraction : sections verticales, coudes, gaines horizontales, jusqu'au rejet. C'est une prestation distincte, avec son propre outillage — brosses motorisées sur flexible, dimensionnées au diamètre du conduit.",
          "C'est aussi, dans la pratique, celle que visent les assureurs quand ils demandent un justificatif d'entretien de conduit.",
        ],
        callout:
          "Attention au vocabulaire : dans notre métier, le ramonage porte sur un réseau d'extraction de cuisine et sur des dépôts de graisse. Il n'a rien à voir avec le ramonage d'une cheminée ou d'un conduit de chauffage domestique.",
      },
      {
        h2: "Comment savoir ce qu'il vous faut",
        body: [
          "Si votre cuisine est sale et que l'aspiration fonctionne : nettoyage. Si l'inox reste poisseux après nettoyage et que le dépôt est durci : dégraissage. Si votre assureur demande un justificatif, ou si l'aspiration a nettement faibli sans que les filtres soient en cause : ramonage du conduit.",
          "Dans la majorité des situations réelles, la réponse la plus pertinente est de coupler hotte et conduit dans une même intervention — c'est aussi la moins chère, puisqu'un seul déplacement et une seule mise en place.",
        ],
      },
    ],
  },

  {
    slug: "quand-faire-ramoner-conduit-extraction",
    title: "Quand faire ramoner le conduit d'extraction d'un restaurant ?",
    h1: "Quand faire ramoner le conduit d'extraction d'un restaurant ?",
    description:
      "Les situations qui déclenchent un ramonage de conduit d'extraction en restauration : demande d'assureur, perte d'aspiration, reprise d'établissement, avant contrôle.",
    category: "Ramonage",
    readingTime: 5,
    published: "2026-08-26",
    excerpt:
      "Quatre situations reviennent systématiquement. Savoir les reconnaître évite de découvrir le problème au pire moment.",
    primaryTarget: "ramonage-conduit-hotte",
    secondaryTargets: ["ramonage-hotte-restaurant", "nettoyage-conduit-extraction"],
    sections: [
      {
        h2: "Situation 1 — Votre assureur demande un justificatif",
        body: [
          "C'est le déclencheur le plus fréquent, à la souscription du contrat, à son renouvellement, ou après un sinistre survenu dans un établissement comparable.",
          "Le point important : transmettez au prestataire les exigences exactes figurant dans votre contrat avant l'intervention. Les compagnies n'attendent pas toutes le même niveau de détail, et un document qui ne correspond pas devra être refait.",
        ],
      },
      {
        h2: "Situation 2 — L'aspiration a faibli progressivement",
        body: [
          "Une perte de débit qui s'installe sur plusieurs mois, alors que les filtres sont propres, désigne presque toujours le conduit. La section utile s'est réduite sous l'effet des dépôts, et le débit chute de manière disproportionnée par rapport à l'épaisseur accumulée.",
          "Le signe qui ne trompe pas : les buées ne sont plus reprises au-dessus des plaques et stagnent en cuisine.",
        ],
      },
      {
        h2: "Situation 3 — Vous reprenez un établissement",
        body: [
          "À la reprise d'un fonds, l'historique d'entretien du réseau est rarement documenté. Le cédant ne l'a pas nécessairement, et personne ne sait quand le conduit a été traité pour la dernière fois — parfois jamais.",
          "Un diagnostic à la reprise vous donne un point de départ écrit et vous évite d'hériter d'une situation dont vous devenez responsable sans le savoir.",
        ],
      },
      {
        h2: "Situation 4 — Avant un contrôle ou une réouverture",
        body: [
          "Avant une visite de contrôle, avant une réouverture après travaux, ou avant une cession, l'état documenté du réseau devient un élément du dossier. Anticiper de quelques semaines évite l'intervention en urgence, qui coûte plus cher et se planifie mal.",
        ],
      },
      {
        h2: "Ce qu'il faut préparer avant l'intervention",
        body: [
          "Trois informations font gagner du temps et améliorent la précision du devis : savoir si des trappes de visite existent et où, connaître le trajet approximatif du conduit jusqu'au rejet, et savoir si l'accès à la toiture dépend d'un tiers.",
        ],
      },
    ],
  },

  {
    slug: "deroulement-degraissage-hotte-professionnelle",
    title: "Comment se déroule le dégraissage d'une hotte professionnelle ?",
    h1: "Comment se déroule le dégraissage d'une hotte professionnelle, étape par étape",
    description:
      "Le déroulé complet d'un dégraissage de hotte de cuisine professionnelle : protection, filtres, action chimique, action mécanique, rinçage, contrôle et rapport.",
    category: "Méthode",
    readingTime: 6,
    published: "2026-08-26",
    excerpt:
      "Ce qui se passe réellement entre l'arrivée du technicien et la remise des clés, étape par étape.",
    primaryTarget: "degraissage-hotte-professionnelle",
    secondaryTargets: ["degraissage-hotte-restaurant", "nettoyage-hotte-professionnelle"],
    sections: [
      {
        h2: "Avant l'intervention : le diagnostic",
        body: [
          "Rien ne commence sans un état des lieux. Type de hotte, nature et nombre de filtres, accès au plénum, présence de trappes sur le conduit, épaisseur du dépôt. Ce repérage détermine la méthode, la durée et le résultat atteignable — et il est photographié.",
          "C'est aussi le moment où nous vous disons ce qui ne pourra pas être restitué. Un inox longtemps recouvert de dépôts polymérisés peut rester marqué : mieux vaut le savoir avant.",
        ],
      },
      {
        h2: "Étape 1 — Protection du poste de cuisson",
        body: [
          "Pianos, plaques, friteuses, plans de travail et sols sont bâchés. Cette étape prend du temps et elle n'est pas négociable : les produits utilisés ne doivent en aucun cas entrer en contact avec les surfaces de travail alimentaire.",
        ],
      },
      {
        h2: "Étape 2 — Dépose et trempage des filtres",
        body: [
          "Les filtres sont repérés, déposés et placés en bac dégraissant chaud. Ils y restent pendant que le reste de l'intervention se déroule — le temps de contact fait une grande partie du travail.",
        ],
      },
      {
        h2: "Étape 3 — Action chimique sur les surfaces internes",
        body: [
          "Le dégraissant alcalin est appliqué sur les parois du caisson, les jonctions, les angles et le plénum. Le temps de contact est adapté à l'épaisseur du dépôt : trop court, il ne ramollit rien ; inutilement long, il n'apporte plus rien.",
        ],
      },
      {
        h2: "Étape 4 — Action mécanique",
        body: [
          "C'est l'étape qui retire réellement la matière : grattage, brossage, et rotobrossage sur l'entrée du conduit. Les résidus sont récupérés au fur et à mesure, jamais rincés vers le réseau.",
        ],
      },
      {
        h2: "Étape 5 — Rinçage, séchage, remontage",
        body: [
          "Rinçage complet pour éliminer tout résidu de produit, séchage des surfaces, remontage des filtres dans le bon sens et à leur position d'origine, remise en état de l'éclairage.",
        ],
      },
      {
        h2: "Étape 6 — Contrôle et remise",
        body: [
          "Contrôle du fonctionnement de l'aspiration, dépose des protections, nettoyage de la zone de travail, puis remise de la cuisine en état de service. Le rapport photo avant / après et l'attestation d'entretien vous sont remis le jour même.",
        ],
      },
    ],
  },

  {
    slug: "risques-hotte-fortement-encrassee",
    title: "Quels risques présente une hotte fortement encrassée ?",
    h1: "Quels risques présente une hotte de cuisine professionnelle fortement encrassée ?",
    description:
      "Les conséquences réelles d'un système d'extraction encrassé : perte d'aspiration, surconsommation, hygiène, odeurs et accumulation de matière combustible.",
    category: "Comprendre",
    readingTime: 5,
    published: "2026-08-26",
    excerpt:
      "Les effets d'un réseau encrassé sont progressifs et se cumulent. La plupart des exploitants ne les relient pas à l'état de leur hotte.",
    primaryTarget: "degraissage-hotte-professionnelle",
    secondaryTargets: ["extraction-cuisine-professionnelle", "ramonage-hotte-professionnelle"],
    sections: [
      {
        h2: "Le problème n'est pas la saleté, c'est l'accumulation",
        body: [
          "Une hotte encrassée n'est pas seulement peu présentable. C'est un système dont la fonction se dégrade et dont la masse de matière accumulée augmente mois après mois, dans des zones que personne n'inspecte.",
          "Les effets se manifestent dans un ordre assez constant, et le premier passe presque toujours inaperçu.",
        ],
      },
      {
        h2: "1 — La perte d'aspiration",
        body: [
          "Elle s'installe progressivement, ce qui la rend difficile à percevoir. Les filtres saturent, la section du conduit se réduit, le débit chute. Les buées et la chaleur restent en cuisine, et les conditions de travail des équipes se dégradent avant que quiconque ne fasse le lien.",
        ],
      },
      {
        h2: "2 — La surconsommation et l'usure du moteur",
        body: [
          "L'extracteur compense la perte de charge en forçant. Sa consommation augmente, son usure s'accélère, et sa durée de vie se réduit. Un moteur remplacé prématurément coûte nettement plus cher que les entretiens qui auraient évité sa sollicitation excessive.",
        ],
      },
      {
        h2: "3 — Les odeurs et les refoulements",
        body: [
          "Un réseau chargé transmet les odeurs différemment. Elles s'installent en salle, remontent parfois dans les étages en immeuble, et provoquent des plaintes de voisinage. C'est souvent ce qui déclenche l'appel, longtemps après l'apparition du problème.",
        ],
      },
      {
        h2: "4 — L'hygiène et le plan de maîtrise sanitaire",
        body: [
          "Des points de graisse qui se forment au bord de la hotte finissent par retomber sur le poste de cuisson. C'est un point qui apparaît régulièrement lors des contrôles d'hygiène, et il est difficile à justifier.",
        ],
      },
      {
        h2: "5 — L'accumulation de matière combustible",
        body: [
          "Un réseau d'extraction fortement chargé accumule, à proximité immédiate de sources de chaleur, une quantité importante de matière grasse. C'est un facteur de risque reconnu par les assureurs, et c'est la raison pour laquelle beaucoup de contrats comportent des exigences d'entretien du conduit.",
          "Les exigences précises applicables à votre établissement figurent dans votre contrat : nous vous invitons à les vérifier auprès de votre assureur, qui est la seule source fiable sur ce point.",
        ],
      },
    ],
  },

  {
    slug: "trappes-de-visite-conduit-extraction",
    title: "Trappes de visite : pourquoi un conduit non visitable coûte plus cher",
    h1: "Trappes de visite : pourquoi un conduit non visitable coûte plus cher à entretenir",
    description:
      "Ce qu'est une trappe de visite sur un conduit d'extraction, ce qu'elle change concrètement à l'entretien du réseau, et comment évaluer l'intérêt d'en faire poser.",
    category: "Technique",
    readingTime: 5,
    published: "2026-08-26",
    excerpt:
      "Sans accès, une partie du réseau reste hors de portée — et se paie à chaque intervention suivante.",
    primaryTarget: "ramonage-conduit-extraction",
    secondaryTargets: ["ramonage-conduit-hotte", "nettoyage-conduit-hotte"],
    sections: [
      {
        h2: "Ce qu'est une trappe de visite",
        body: [
          "Une ouverture obturable posée sur le conduit d'extraction, qui permet d'introduire l'outillage de nettoyage et de contrôler visuellement l'intérieur du réseau. Elle se referme hermétiquement après chaque intervention.",
          "Sa position compte autant que son existence : une trappe placée avant un coude ne donne pas accès à ce qui se trouve après.",
        ],
      },
      {
        h2: "Ce qui se passe quand il n'y en a pas",
        body: [
          "Sur un conduit fermé, on ne traite que ce qu'on atteint depuis les extrémités : quelques mètres depuis la hotte, quelques mètres depuis le rejet. Tout ce qui se trouve entre les deux, et notamment les coudes, reste en place.",
          "Cela pose deux problèmes. Le premier est technique : la zone la plus chargée est précisément celle qui n'est pas traitée. Le second est documentaire : votre attestation mentionnera une longueur traitée partielle, ce qui peut ne pas satisfaire une demande d'assureur.",
        ],
        callout:
          "Un prestataire qui vous facture le ramonage complet d'un conduit sans aucun accès intermédiaire vous vend quelque chose qu'il ne peut pas réaliser.",
      },
      {
        h2: "Le calcul économique",
        body: [
          "La pose de trappes représente un investissement ponctuel. En regard, chaque intervention ultérieure devient plus rapide — donc moins chère — et plus complète.",
          "Sur un réseau entretenu deux fois par an, l'écart de temps d'intervention compense généralement le coût de pose en quelques passages. Sur un réseau long ou très coudé, l'écart est encore plus net.",
        ],
      },
      {
        h2: "Combien de trappes, et où",
        body: [
          "Cela se détermine sur site, en fonction du tracé réel : avant et après chaque coude significatif, à intervalles réguliers sur les longues sections droites, et à proximité des points singuliers.",
          "Nous établissons cette préconisation lors du repérage, avec un devis distinct de l'intervention d'entretien.",
        ],
      },
      {
        h2: "Les contraintes à anticiper",
        body: [
          "Toutes les configurations ne permettent pas la pose. Un conduit encastré dans une structure, situé en partie commune de copropriété, ou dont la modification serait visible en façade d'un immeuble en secteur protégé, suppose des autorisations préalables — voire rend la pose impossible.",
          "Nous identifions ces contraintes au diagnostic plutôt que de proposer une solution qui ne pourra pas être mise en œuvre.",
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------

export const articleSlugs = articles.map((a) => a.slug);

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
