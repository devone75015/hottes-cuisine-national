import type { Service } from "@/lib/types";
import { repairServices } from "./services-reparation";

/**
 * Registre des pages prestation — source unique de vérité.
 * Une page n'existe que si elle figure ici : c'est le garde-fou anti-page-fantôme
 * décrit dans le document de cadrage (§14, gate d'indexation).
 *
 * IMPORTANT — contenu réglementaire : aucune fréquence obligatoire ni référence
 * normative n'est affirmée. Les formulations restent au niveau « bonne pratique »
 * ou « exigence de votre assureur » tant que les sources officielles n'ont pas
 * été vérifiées et validées par le client.
 */

const coreServices: Service[] = [
  // ===========================================================================
  // PILIER 1 — NETTOYAGE
  // ===========================================================================
  {
    slug: "nettoyage-hotte-professionnelle",
    pillar: "nettoyage",
    isPillar: true,
    nav: "Nettoyage de hotte",
    navShort: "Nettoyage",
    h1: "Nettoyage de hotte professionnelle",
    title: "Nettoyage de hotte professionnelle | Spécialiste national",
    description:
      "Nettoyage complet de hottes de cuisine professionnelle : caisson, filtres, plénum et réseau. Intervention partout en France, devis sous 24 h, attestation remise.",
    eyebrow: "Pilier — Nettoyage",
    lead:
      "Le nettoyage d'une hotte professionnelle ne se limite pas aux surfaces visibles. Nous traitons l'ensemble de la chaîne d'aspiration, du filtre au conduit, avec le matériel et les produits adaptés à la cuisine professionnelle.",
    sections: [
      {
        h2: "Une hotte de cuisine professionnelle ne se nettoie pas comme une surface inox",
        body: [
          "Dans une cuisine professionnelle, la hotte est une machine, pas un meuble. Elle aspire en continu des aérosols de graisse qui se condensent sur les filtres, migrent dans le plénum, puis se déposent dans le conduit et la gaine d'extraction. Un passage d'éponge sur la façade ne retire rien de ce dépôt.",
          "Notre intervention porte sur la totalité des parties accessibles du système : la hotte elle-même, ses filtres, la chambre de répartition, les bacs de récupération et les premiers mètres du conduit. Quand l'installation le permet, nous remontons au-delà, jusqu'au réseau et à l'extracteur.",
        ],
      },
      {
        h2: "Ce que nous traitons, poste par poste",
        body: [
          "Chaque intervention démarre par un état des lieux du système : type de hotte, nature des filtres, points d'accès disponibles, degré d'encrassement. Ce diagnostic conditionne la méthode et le temps d'intervention — c'est ce qui explique qu'aucun devis sérieux ne peut être établi sans cette étape.",
        ],
        list: [
          "Filtres à chocs, à cassettes ou à charbon : démontage, trempage en bac dégraissant, rinçage, séchage, remontage",
          "Caisson et surfaces internes : dégraissage complet des parois, soudures, angles et jonctions",
          "Plénum : ouverture, nettoyage de la chambre de répartition et des grilles de distribution",
          "Bacs et gouttières de récupération des graisses : vidange et dégraissage",
          "Éclairage : démontage des protections, nettoyage, remontage et vérification du fonctionnement",
          "Premiers mètres de conduit accessibles depuis la hotte",
          "Surfaces inox extérieures : finition et lustrage",
        ],
      },
      {
        h2: "Pourquoi un spécialiste plutôt qu'une société de nettoyage généraliste",
        body: [
          "Une entreprise de propreté classique nettoie ce qu'elle voit. Le nettoyage de hotte professionnelle demande un équipement différent : bacs de trempage, dégraissants alcalins adaptés à l'agroalimentaire, protection intégrale du poste de cuisson, et surtout la capacité d'ouvrir, de traiter puis de refermer correctement un réseau d'extraction.",
          "C'est aussi une question de responsabilité : le document remis en fin d'intervention doit décrire précisément le périmètre traité. Un rapport vague ne vous servira ni face à votre assureur, ni lors d'un contrôle.",
        ],
        callout:
          "Nous intervenons exclusivement sur des cuisines professionnelles. Aucune activité de nettoyage domestique, aucune sous-traitance de généraliste.",
      },
      {
        h2: "Une intervention organisée autour de votre service",
        body: [
          "Une cuisine ne s'arrête pas. Nous intervenons pendant la coupure de l'après-midi, tôt le matin, en soirée après le dernier service, ou pendant un jour de fermeture. Le poste de cuisson est bâché, protégé, puis restitué propre et opérationnel — vous devez pouvoir reprendre le service sans reprise de nettoyage de votre côté.",
        ],
      },
    ],
    included: [
      "Diagnostic de l'installation avant intervention",
      "Protection intégrale du poste de cuisson et des plans de travail",
      "Démontage, trempage et remontage des filtres",
      "Dégraissage du caisson, du plénum et des parties accessibles",
      "Rapport photo avant / après daté",
      "Attestation d'entretien précisant le périmètre traité",
    ],
    targets: [
      "Restaurants",
      "Brasseries",
      "Hôtels",
      "Fast-foods",
      "Pizzerias",
      "Boulangeries",
      "Cuisines centrales",
      "Cuisines collectives",
      "EHPAD",
      "Restaurants d'entreprise",
    ],
    faq: [
      {
        q: "Combien de temps dure un nettoyage de hotte professionnelle ?",
        a: "Entre 2 et 6 heures pour une cuisine de restaurant classique, selon le nombre de hottes, le type de filtres et l'état d'encrassement. Une cuisine centrale ou une installation multi-postes demande généralement une intervention sur plusieurs demi-journées, planifiée à l'avance.",
      },
      {
        q: "Faut-il fermer la cuisine pendant l'intervention ?",
        a: "Non. Nous intervenons en dehors des services : coupure de l'après-midi, tôt le matin, en soirée ou un jour de fermeture. Le poste de cuisson est protégé pendant toute la durée des travaux et restitué prêt à l'emploi.",
      },
      {
        q: "À quelle fréquence faire nettoyer une hotte professionnelle ?",
        a: "La fréquence dépend du type de cuisson, du volume produit et des exigences de votre contrat d'assurance. Une cuisine à forte friture s'encrasse beaucoup plus vite qu'une cuisine de production froide. Nous établissons une périodicité recommandée après le premier diagnostic, et nous vous invitons à la confronter aux exigences propres à votre assureur et au règlement sanitaire applicable dans votre département.",
      },
      {
        q: "Recevons-nous un document après l'intervention ?",
        a: "Oui. Chaque passage donne lieu à une attestation d'entretien datée, accompagnée d'un rapport photo avant / après précisant les éléments traités et, le cas échéant, les parties du réseau non accessibles.",
      },
      {
        q: "Intervenez-vous partout en France ?",
        a: "Oui, sur l'ensemble du territoire métropolitain. Nos équipes sont organisées par région, ce qui nous permet de traiter aussi bien un restaurant indépendant qu'un parc multisites réparti sur plusieurs départements.",
      },
    ],
    related: [
      "nettoyage-hotte-restaurant",
      "nettoyage-filtres-hotte",
      "nettoyage-conduit-hotte",
      "degraissage-hotte-professionnelle",
      "ramonage-hotte-professionnelle",
      "entretien-hotte-professionnelle",
    ],
    priority: 1,
  },

  {
    slug: "nettoyage-hotte-restaurant",
    pillar: "nettoyage",
    isPillar: false,
    nav: "Hotte de restaurant",
    h1: "Nettoyage de hotte de restaurant",
    title: "Nettoyage de hotte de restaurant | Devis sous 24 h",
    description:
      "Entreprise spécialisée dans le nettoyage de hotte de restaurant : filtres, caisson, plénum et conduit. Intervention hors service, attestation, devis sous 24 h.",
    eyebrow: "Nettoyage",
    lead:
      "Une hotte de restaurant encrassée se voit, se sent et se paie. Nous la remettons à niveau en une intervention, sans fermer votre établissement.",
    sections: [
      {
        h2: "Le problème que rencontre tout restaurateur",
        body: [
          "Au fil des services, la graisse s'accumule là où personne ne regarde : derrière les filtres, dans le plénum, à la base du conduit. Les premiers signaux sont toujours les mêmes — une aspiration qui faiblit, des odeurs qui reviennent en salle, des gouttes qui se forment sous la hotte, un inox qui reste poisseux malgré le nettoyage quotidien de votre équipe.",
          "À ce stade, le nettoyage courant ne suffit plus. Il faut ouvrir, démonter et traiter le système lui-même.",
        ],
      },
      {
        h2: "Notre intervention en restaurant",
        body: [
          "Nous travaillons sur des cuisines en activité, ce qui impose une méthode stricte. Le poste de cuisson est intégralement bâché avant toute opération. Les filtres partent en bac de trempage pendant que le caisson et le plénum sont traités au dégraissant alcalin, puis rincés et séchés. Les bacs à graisse sont vidés et nettoyés, l'éclairage démonté et remis en état de fonctionnement.",
          "En fin d'intervention, tout est remonté, contrôlé et testé. Vous récupérez une cuisine opérationnelle, pas un chantier à finir.",
        ],
        list: [
          "Intervention pendant la coupure, tôt le matin ou après le dernier service",
          "Protection complète des pianos, plaques, friteuses et plans de travail",
          "Traitement des filtres en bac dégraissant, pas au jet sur place",
          "Contrôle du fonctionnement de l'aspiration avant départ",
          "Rapport photo et attestation remis le jour même",
        ],
      },
      {
        h2: "Ce qui fait varier le prix",
        body: [
          "Nous préférons l'annoncer clairement plutôt que de renvoyer systématiquement vers un devis opaque. Cinq facteurs déterminent le coût d'un nettoyage de hotte de restaurant : le nombre et la longueur des hottes, le type et la quantité de filtres, l'état d'encrassement au moment de l'intervention, l'accessibilité du plénum et du conduit, et le créneau horaire demandé.",
          "Une première intervention sur une installation jamais traitée coûte logiquement plus cher qu'un passage d'entretien sur une hotte suivie régulièrement — c'est l'argument principal en faveur d'un contrat annuel.",
        ],
      },
      {
        h2: "Restaurant indépendant, groupe ou franchise",
        body: [
          "Nous traitons aussi bien le restaurant de quartier à hotte unique que les réseaux de plusieurs dizaines d'établissements. Sur un parc multisites, la planification, le reporting consolidé et l'interlocuteur unique deviennent aussi importants que l'intervention elle-même.",
        ],
      },
    ],
    included: [
      "Bâchage et protection du poste de cuisson",
      "Démontage et trempage des filtres",
      "Dégraissage du caisson et du plénum",
      "Vidange et nettoyage des bacs à graisse",
      "Nettoyage et remise en état de l'éclairage",
      "Rapport photo et attestation datée",
    ],
    targets: ["Restaurants traditionnels", "Bistrots", "Brasseries", "Restaurants gastronomiques", "Restaurants de chaîne", "Franchises"],
    faq: [
      {
        q: "Quel est le prix d'un nettoyage de hotte de restaurant ?",
        a: "Le prix dépend du nombre de hottes, du linéaire, du type de filtres, de l'état d'encrassement et de l'accessibilité du réseau. Nous établissons un devis gratuit sous 24 h après un échange téléphonique de quelques minutes ; l'envoi de deux ou trois photos de votre installation permet de chiffrer avec précision dès le premier contact.",
      },
      {
        q: "Intervenez-vous pendant le service ?",
        a: "Non, jamais. L'intervention se fait pendant la coupure de l'après-midi, avant l'ouverture, après le dernier service ou un jour de fermeture, selon ce qui vous arrange.",
      },
      {
        q: "Nettoyez-vous aussi le conduit d'extraction ?",
        a: "Le conduit relève du ramonage et du dégraissage de réseau, une prestation distincte avec son propre matériel. Nous la réalisons également et elle peut être couplée à la même intervention — c'est souvent l'option la plus économique.",
      },
      {
        q: "Que se passe-t-il si une partie du réseau est inaccessible ?",
        a: "Nous le mentionnons explicitement dans le rapport d'intervention. Un réseau sans trappe de visite ne peut pas être traité sur toute sa longueur : nous vous indiquons alors les zones non traitées et les solutions possibles, sans jamais laisser croire que l'ensemble a été nettoyé.",
      },
    ],
    related: [
      "nettoyage-hotte-professionnelle",
      "degraissage-hotte-restaurant",
      "ramonage-hotte-restaurant",
      "nettoyage-filtres-hotte",
      "entretien-hotte-professionnelle",
    ],
    cityPages: ["paris", "lyon", "marseille", "toulouse", "bordeaux", "lille"],
    localAngle: [
      "Sur le terrain, la demande la plus fréquente ne porte pas sur un problème technique mais sur une contrainte d'exploitation : trouver le créneau. Une cuisine de restaurant ne s'arrête pas, et l'intervention doit se glisser entre deux services sans laisser la moindre trace au moment de la reprise.",
      "C'est ce qui nous impose une méthode stricte de protection et de remise en état. Le poste de cuisson est bâché avant toute opération, les filtres partent en bac pendant que le caisson est traité, et la cuisine est rendue testée : aspiration vérifiée, éclairage remonté, plans dégagés. Vous ne devez avoir aucune reprise de nettoyage à faire derrière nous.",
    ],
    priority: 1,
  },

  {
    slug: "nettoyage-filtres-hotte",
    pillar: "nettoyage",
    isPillar: false,
    nav: "Filtres de hotte",
    h1: "Nettoyage des filtres de hotte professionnelle",
    title: "Nettoyage filtres de hotte professionnelle | Trempage & remplacement",
    description:
      "Nettoyage des filtres à chocs, à cassettes et à charbon de votre hotte professionnelle : démontage, trempage dégraissant, contrôle et remplacement si nécessaire.",
    eyebrow: "Nettoyage",
    lead:
      "Le filtre est la première barrière du système d'extraction. Quand il sature, tout ce qu'il aurait dû retenir part directement dans le conduit.",
    sections: [
      {
        h2: "Trois familles de filtres, trois traitements",
        body: [
          "Les filtres à chocs, ou filtres à chicanes, sont les plus répandus en restauration : les aérosols de graisse heurtent des lames en quinconce et s'y déposent. Robustes, ils se nettoient et se réutilisent, mais perdent en efficacité dès que les chicanes se colmatent.",
          "Les filtres à cassettes, constitués d'un empilage de mailles métalliques, retiennent des particules plus fines mais saturent plus vite. Les filtres à charbon actif, eux, traitent les odeurs et non les graisses : ils ne se nettoient pas, ils se remplacent.",
        ],
      },
      {
        h2: "Pourquoi le trempage en bac plutôt qu'un lavage sur place",
        body: [
          "Passer un filtre au jet ou le mettre au lave-vaisselle déplace la graisse sans la dissoudre : elle se redépose en séchant et le colmatage revient en quelques jours. Le trempage en bac dégraissant chaud attaque le dépôt en profondeur, y compris entre les lames et dans les plis de maille.",
          "Après trempage, chaque filtre est rincé, séché puis contrôlé : un filtre déformé, percé ou dont les chicanes sont écrasées ne filtre plus correctement, quel que soit son état de propreté. Nous vous signalons ceux qui doivent être remplacés plutôt que de les remonter.",
        ],
        list: [
          "Dépose et repérage des filtres poste par poste",
          "Trempage en bac dégraissant adapté au contact alimentaire",
          "Rinçage, séchage et contrôle de l'état mécanique",
          "Signalement des filtres à remplacer, avec photo",
          "Remontage dans le bon sens et à la bonne position",
        ],
      },
      {
        h2: "Le filtre ne dispense pas de traiter le reste du système",
        body: [
          "Un jeu de filtres propre sur une hotte encrassée ne règle rien : le plénum, le caisson et le conduit continuent d'accumuler. À l'inverse, un système entretenu avec des filtres saturés se réencrasse immédiatement. Les deux vont ensemble, c'est pourquoi le nettoyage des filtres est systématiquement intégré à nos interventions de nettoyage de hotte.",
        ],
      },
    ],
    included: [
      "Dépose et repérage de l'ensemble des filtres",
      "Trempage en bac dégraissant",
      "Rinçage, séchage et contrôle mécanique",
      "Préconisation de remplacement documentée",
      "Remontage et vérification de l'aspiration",
    ],
    targets: ["Restaurants", "Fast-foods", "Snacks", "Kebabs", "Boulangeries", "Traiteurs", "Cuisines collectives"],
    faq: [
      {
        q: "Peut-on mettre des filtres de hotte au lave-vaisselle ?",
        a: "C'est une pratique courante mais peu efficace sur des filtres professionnels fortement chargés : la température et les produits d'un lave-vaisselle ne dissolvent pas les dépôts durcis logés entre les chicanes. Cela peut dépanner entre deux interventions, jamais les remplacer.",
      },
      {
        q: "Tous les filtres se nettoient-ils ?",
        a: "Non. Les filtres à chocs et à cassettes se nettoient et se réutilisent tant qu'ils sont mécaniquement intacts. Les filtres à charbon actif, destinés au traitement des odeurs, ne se régénèrent pas : ils se remplacent.",
      },
      {
        q: "Comment savoir si un filtre doit être remplacé ?",
        a: "Un filtre dont les chicanes sont écrasées, dont le cadre est déformé, dont la maille est percée ou qui reste gras après trempage complet ne remplit plus sa fonction. Nous photographions systématiquement les filtres concernés avant de vous proposer leur remplacement.",
      },
    ],
    related: ["nettoyage-hotte-professionnelle", "nettoyage-hotte-restaurant", "entretien-hotte-professionnelle", "extraction-cuisine-professionnelle"],
    priority: 3,
  },

  {
    slug: "nettoyage-conduit-hotte",
    pillar: "nettoyage",
    isPillar: false,
    nav: "Conduit de hotte",
    h1: "Nettoyage de conduit de hotte",
    title: "Nettoyage de conduit de hotte professionnelle | Réseau d'extraction",
    description:
      "Nettoyage et dégraissage du conduit de hotte de cuisine professionnelle : rotobrossage, traitement des coudes, accès par trappes de visite, rapport photo du réseau.",
    eyebrow: "Nettoyage",
    lead:
      "Le conduit est la partie du système que personne ne voit et que presque personne ne fait traiter. C'est aussi celle où le dépôt de graisse est le plus problématique.",
    sections: [
      {
        h2: "Ce qui se passe dans un conduit de hotte",
        body: [
          "Tout ce que les filtres ne retiennent pas continue son chemin. Les aérosols de graisse se condensent sur les parois du conduit, refroidissent, durcissent, et forment progressivement une croûte qui réduit la section de passage. Plus la section diminue, plus l'aspiration faiblit — et plus le moteur force.",
          "Sur un conduit vertical de plusieurs mètres avec des coudes, ces dépôts s'accumulent en priorité dans les changements de direction et aux points bas, là où l'écoulement ralentit.",
        ],
      },
      {
        h2: "Notre méthode d'intervention sur conduit",
        body: [
          "Le nettoyage de conduit demande un accès. Nous commençons donc par identifier les trappes de visite existantes et par évaluer la longueur réellement traitable. Le traitement combine action mécanique — rotobrossage adapté au diamètre et à la nature du conduit — et action chimique là où le dépôt est durci.",
          "Les résidus sont récupérés au fur et à mesure et évacués, jamais poussés plus loin dans le réseau. Chaque zone traitée est photographiée avant et après, ce qui vous donne une vision réelle de l'état de votre installation.",
        ],
        list: [
          "Repérage des trappes de visite et des points d'accès",
          "Protection des abords et confinement de la zone de travail",
          "Rotobrossage mécanique, diamètre adapté au conduit",
          "Traitement chimique ciblé des dépôts durcis",
          "Récupération et évacuation des résidus",
          "Rapport photo par zone, avec mention des parties non accessibles",
        ],
      },
      {
        h2: "Le cas des conduits sans trappe de visite",
        body: [
          "Beaucoup d'installations anciennes ne comportent aucun accès. Dans ce cas, seule une longueur limitée peut être traitée depuis la hotte et depuis le rejet. Nous vous le disons avant l'intervention, pas après : un devis annonçant le nettoyage d'un conduit intégralement fermé n'est pas tenable.",
          "La pose de trappes de visite normalisées règle le problème une fois pour toutes et rend chaque entretien ultérieur plus rapide, donc moins coûteux.",
        ],
        callout:
          "Nous indiquons systématiquement dans le rapport les parties du réseau qui n'ont pas pu être atteintes, et pourquoi.",
      },
    ],
    included: [
      "Repérage complet des accès disponibles",
      "Rotobrossage mécanique du conduit",
      "Traitement chimique des dépôts durcis",
      "Évacuation des résidus",
      "Rapport photo par zone traitée",
      "Préconisation de trappes de visite si nécessaire",
    ],
    targets: ["Restaurants", "Pizzerias", "Boulangeries", "Hôtels", "Cuisines centrales", "Établissements en copropriété"],
    faq: [
      {
        q: "Quelle différence entre nettoyage de conduit et ramonage de conduit ?",
        a: "Dans notre métier, les deux termes recouvrent la même réalité technique : retirer les dépôts de graisse accumulés à l'intérieur du réseau d'extraction. Le mot « ramonage » est celui qu'emploient beaucoup d'exploitants et d'assureurs, « nettoyage de conduit » celui qu'emploient les bureaux techniques. La prestation est identique.",
      },
      {
        q: "Faut-il des trappes de visite pour nettoyer un conduit ?",
        a: "Elles ne sont pas indispensables pour traiter les premiers mètres, mais elles sont nécessaires pour atteindre l'ensemble du réseau, notamment après les coudes. Sans accès, une partie du conduit reste hors de portée.",
      },
      {
        q: "L'intervention salit-elle la cuisine ?",
        a: "Non. La zone de travail est confinée et protégée avant ouverture du réseau, et les résidus sont récupérés au fur et à mesure puis évacués par nos soins.",
      },
    ],
    related: ["nettoyage-hotte-professionnelle", "ramonage-conduit-hotte", "nettoyage-gaine-extraction", "degraissage-conduit-extraction", "extraction-cuisine-professionnelle"],
    priority: 1,
  },

  {
    slug: "nettoyage-gaine-extraction",
    pillar: "nettoyage",
    isPillar: false,
    nav: "Gaine d'extraction",
    h1: "Nettoyage de gaine d'extraction",
    title: "Nettoyage de gaine d'extraction de cuisine professionnelle",
    description:
      "Nettoyage des gaines d'extraction horizontales de cuisine professionnelle : traitement du réseau accessible, rotobrossage, contrôle des raccords et rapport photo.",
    eyebrow: "Nettoyage",
    lead:
      "Les gaines horizontales sont le maillon oublié du réseau. Ce sont pourtant elles qui traversent les faux plafonds et les locaux techniques.",
    sections: [
      {
        h2: "Gaine, conduit, réseau : ce que recouvre chaque terme",
        body: [
          "Le conduit désigne généralement la partie verticale qui monte de la hotte vers le rejet. La gaine désigne les tronçons horizontaux qui relient les différents éléments, souvent dissimulés en faux plafond ou en local technique. L'ensemble forme le réseau d'extraction.",
          "Cette distinction n'est pas qu'un détail de vocabulaire : les gaines horizontales accumulent différemment. La graisse y stagne au point bas de chaque tronçon au lieu de s'écouler, ce qui produit des dépôts épais et localisés.",
        ],
      },
      {
        h2: "Une intervention qui commence par un repérage",
        body: [
          "Avant toute chose, il faut savoir par où passe le réseau. Sur des installations reprises plusieurs fois, le tracé réel diffère souvent des plans. Nous repérons les tronçons, les raccords, les points d'accès existants et les zones traversant des locaux sensibles.",
          "Le traitement se fait ensuite tronçon par tronçon, avec récupération des résidus au point bas. Les raccords et jonctions sont contrôlés au passage : une gaine dont un raccord a joué laisse échapper des odeurs dans les faux plafonds bien avant de poser un problème d'aspiration.",
        ],
        list: [
          "Repérage du tracé réel et des accès",
          "Traitement tronçon par tronçon",
          "Contrôle des raccords, jonctions et suspensions",
          "Récupération des résidus au point bas",
          "Remise en état des accès après intervention",
        ],
      },
      {
        h2: "Les configurations que nous rencontrons le plus souvent",
        body: [
          "Gaines en faux plafond au-dessus d'une salle de restaurant, traversées de locaux techniques partagés en copropriété, réseaux longs de cuisines centrales desservant plusieurs postes, ou raccordements réalisés lors d'un agrandissement sans trappe d'accès. Chacune impose une approche différente et un temps d'intervention distinct.",
        ],
      },
    ],
    included: [
      "Repérage du tracé et des points d'accès",
      "Nettoyage mécanique des tronçons accessibles",
      "Contrôle des raccords et jonctions",
      "Évacuation des résidus",
      "Rapport photo et plan des zones traitées",
    ],
    targets: ["Restaurants en centre commercial", "Hôtels", "Cuisines centrales", "Copropriétés", "Restaurants d'entreprise"],
    faq: [
      {
        q: "Comment accéder à une gaine dissimulée en faux plafond ?",
        a: "Par les trappes existantes lorsqu'il y en a, sinon par la dépose ponctuelle de dalles de faux plafond, remises en place en fin d'intervention. Quand aucun accès n'est possible sans travaux, nous le signalons et proposons la création de trappes de visite.",
      },
      {
        q: "Intervenez-vous dans les parties communes d'une copropriété ?",
        a: "Oui, sous réserve d'un accord préalable du syndic ou du bailleur quand le réseau traverse des parties communes. Nous vous aidons à formuler la demande et fournissons les éléments techniques nécessaires.",
      },
    ],
    related: ["nettoyage-conduit-hotte", "ramonage-gaine-extraction", "nettoyage-reseau-extraction", "extraction-cuisine-professionnelle"],
    priority: 2,
  },

  // ===========================================================================
  // PILIER 2 — DÉGRAISSAGE
  // ===========================================================================
  {
    slug: "degraissage-hotte-professionnelle",
    pillar: "degraissage",
    isPillar: true,
    nav: "Dégraissage de hotte",
    navShort: "Dégraissage",
    h1: "Dégraissage de hotte professionnelle",
    title: "Dégraissage de hotte professionnelle | Dépôts durcis & réseau",
    description:
      "Dégraissage de hotte et de réseau d'extraction en cuisine professionnelle : traitement des dépôts durcis, restitution de l'efficacité d'aspiration, hygiène et prévention.",
    eyebrow: "Pilier — Dégraissage",
    lead:
      "Le dégraissage traite la cause, pas le symptôme. C'est l'intervention qui s'attaque au dépôt lui-même, là où il s'est accumulé et durci.",
    sections: [
      {
        h2: "Comment la graisse s'installe dans un système d'extraction",
        body: [
          "Toute cuisson dégage des aérosols : de fines gouttelettes de matière grasse en suspension dans l'air chaud. Elles sont aspirées par la hotte, traversent les filtres, et se condensent dès que la température de l'air baisse — sur les parois du plénum, dans le caisson, puis à l'intérieur du conduit.",
          "Ce dépôt évolue. Frais, il est huileux et se retire facilement. Après quelques mois, il polymérise sous l'effet de la chaleur et se transforme en une croûte dure, adhérente, insensible aux produits ménagers. C'est à ce stade que le nettoyage courant devient inopérant et qu'un dégraissage devient nécessaire.",
        ],
      },
      {
        h2: "Ce que provoque un système fortement encrassé",
        body: [
          "Les conséquences sont progressives et se cumulent. La plupart des exploitants ne les relient pas immédiatement à l'état de leur hotte.",
        ],
        list: [
          "Perte d'aspiration : la section de passage se réduit, l'air circule moins bien, les buées et les odeurs restent en cuisine",
          "Surconsommation du moteur d'extraction, qui compense en forçant",
          "Odeurs persistantes en salle et refoulements ponctuels",
          "Points de graisse qui se forment et retombent sur le poste de cuisson",
          "Dégradation de l'hygiène des surfaces et du plan de maîtrise sanitaire",
          "Accumulation de matière combustible à proximité immédiate des sources de chaleur",
        ],
        callout:
          "L'accumulation de dépôts graisseux dans un réseau d'extraction constitue un facteur de risque reconnu par les assureurs. Les exigences précises figurent dans votre contrat : nous vous invitons à les vérifier auprès de votre assureur.",
      },
      {
        h2: "Notre méthode de dégraissage",
        body: [
          "Nous combinons systématiquement action chimique et action mécanique. Les dégraissants alcalins compatibles avec l'agroalimentaire ramollissent le dépôt ; le travail mécanique — grattage, brossage, rotobrossage selon la zone — le retire. Le rinçage et le séchage terminent l'opération.",
          "Sur les installations très encrassées, un premier passage ne suffit pas toujours à revenir à l'inox nu. Nous vous l'annonçons dans le devis plutôt que de le découvrir sur place, et nous vous indiquons ce qui pourra être restitué et ce qui restera marqué.",
        ],
      },
      {
        h2: "Dégraissage ponctuel ou entretien régulier",
        body: [
          "Un dégraissage de rattrapage sur une installation jamais traitée est une opération lourde. Une fois le système remis à niveau, un entretien périodique le maintient à un état où chaque passage est rapide et nettement moins coûteux. C'est mathématique : plus l'écart entre deux interventions s'allonge, plus chacune devient chère.",
        ],
      },
    ],
    included: [
      "Diagnostic du degré d'encrassement et photos d'état initial",
      "Application de dégraissants adaptés au contact alimentaire",
      "Action mécanique sur les dépôts polymérisés",
      "Rinçage, séchage et contrôle des surfaces",
      "Rapport avant / après documenté",
      "Préconisation de périodicité",
    ],
    targets: ["Restaurants", "Fast-foods", "Kebabs", "Friteries", "Brasseries", "Cuisines centrales", "Laboratoires alimentaires"],
    faq: [
      {
        q: "Quelle différence entre nettoyage et dégraissage d'une hotte ?",
        a: "Le nettoyage traite l'ensemble du poste et le remet en état d'exploitation, filtres compris. Le dégraissage cible spécifiquement les dépôts de graisse accumulés et durcis, y compris dans les parties du réseau où le nettoyage courant n'atteint pas. Sur une installation régulièrement suivie, les deux se confondent ; sur une installation négligée, le dégraissage est une opération de rattrapage à part entière.",
      },
      {
        q: "Une hotte très encrassée peut-elle retrouver son état d'origine ?",
        a: "Souvent oui, mais pas toujours intégralement. Un inox longtemps recouvert de dépôts polymérisés peut rester marqué. Nous photographions l'état initial et vous indiquons avant l'intervention le résultat réellement atteignable.",
      },
      {
        q: "Quels produits utilisez-vous ?",
        a: "Des dégraissants alcalins professionnels compatibles avec un environnement de production alimentaire, appliqués puis intégralement rincés. Les fiches de données de sécurité sont disponibles sur demande.",
      },
      {
        q: "Le dégraissage améliore-t-il l'aspiration ?",
        a: "Oui, dès lors que la perte d'aspiration provenait d'un encrassement du réseau, ce qui est le cas le plus fréquent. Si l'aspiration reste insuffisante après dégraissage, le problème est mécanique ou aéraulique : moteur, compensation d'air ou dimensionnement. Nous vous le signalons.",
      },
    ],
    related: ["degraissage-hotte-restaurant", "degraissage-conduit-extraction", "nettoyage-hotte-professionnelle", "ramonage-hotte-professionnelle", "extraction-cuisine-professionnelle"],
    priority: 1,
  },

  {
    slug: "degraissage-hotte-restaurant",
    pillar: "degraissage",
    isPillar: false,
    nav: "Dégraissage restaurant",
    h1: "Dégraissage de hotte de restaurant",
    title: "Dégraissage de hotte de restaurant | Intervention hors service",
    description:
      "Dégraissage complet de hotte de restaurant : dépôts durcis, plénum, caisson et conduit. Intervention hors service, rapport photo et attestation, devis sous 24 h.",
    eyebrow: "Dégraissage",
    lead:
      "Quand le nettoyage quotidien de votre équipe ne suffit plus, c'est que le dépôt a durci. Le dégraissage repart de l'inox.",
    sections: [
      {
        h2: "Les signes qui doivent vous alerter",
        body: [
          "Un inox qui redevient poisseux quelques heures après avoir été essuyé. Des gouttes brunes qui se forment au bord de la hotte. Une odeur de friture qui s'installe en salle malgré une aspiration en marche. Un tirage qui ne ramène plus les buées au-dessus des plaques.",
          "Ces symptômes signalent tous la même chose : le dépôt n'est plus en surface, il s'est installé dans le système.",
        ],
      },
      {
        h2: "Le déroulé sur un restaurant en activité",
        body: [
          "Nous convenons d'un créneau qui n'impacte pas le service — le plus souvent la coupure de l'après-midi ou l'après-fermeture. L'ensemble du poste de cuisson est protégé, les filtres partent en trempage, et les surfaces internes reçoivent le dégraissant avant traitement mécanique.",
          "Nous remontons ensuite dans le plénum et sur les premiers mètres du conduit, qui sont presque toujours les zones les plus chargées. Rinçage, séchage, remontage, contrôle de l'aspiration, puis restitution de la cuisine en état de service.",
        ],
        list: [
          "Créneau choisi avec vous, hors service",
          "Protection intégrale du poste de cuisson",
          "Dégraissage chimique puis mécanique des surfaces internes",
          "Traitement du plénum et de l'entrée de conduit",
          "Rinçage complet et séchage",
          "Contrôle de l'aspiration avant départ",
        ],
      },
      {
        h2: "Cuisines à forte friture : un rythme différent",
        body: [
          "Un restaurant qui fait de la friture toute la journée n'a pas le même profil d'encrassement qu'une cuisine de cuisson vapeur ou de production froide. Le dépôt s'installe plus vite, plus loin dans le réseau, et durcit davantage. Nous adaptons la périodicité recommandée à votre carte réelle, pas à une moyenne théorique.",
        ],
      },
    ],
    included: [
      "Protection complète du poste de cuisson",
      "Traitement des filtres en bac",
      "Dégraissage du caisson, du plénum et de l'entrée de conduit",
      "Rinçage et séchage",
      "Rapport photo avant / après",
      "Attestation d'entretien datée",
    ],
    targets: ["Restaurants", "Brasseries", "Fast-foods", "Pizzerias", "Kebabs", "Snacks"],
    faq: [
      {
        q: "Combien de temps faut-il pour dégraisser une hotte de restaurant ?",
        a: "Comptez 3 à 5 heures pour une cuisine de restaurant standard sur une installation suivie, et une journée complète sur une installation jamais traitée ou fortement chargée.",
      },
      {
        q: "Peut-on dégraisser une hotte sans démonter les filtres ?",
        a: "Non. Les filtres masquent le plénum et concentrent une part importante du dépôt : les laisser en place revient à ne traiter que la façade.",
      },
      {
        q: "Le dégraissage est-il compatible avec mon plan de maîtrise sanitaire ?",
        a: "Oui. Nous utilisons des produits compatibles avec un environnement de production alimentaire, intégralement rincés, et nous vous remettons un document daté que vous pouvez classer dans votre dossier d'exploitation.",
      },
    ],
    related: ["degraissage-hotte-professionnelle", "nettoyage-hotte-restaurant", "ramonage-hotte-restaurant", "degraissage-conduit-extraction"],
    cityPages: ["paris", "lyon", "marseille"],
    localAngle: [
      "Le dégraissage se distingue des autres prestations par un point précis : il ne se juge pas au rendu visuel immédiat mais à l'état de surface retrouvé. Un inox qui redevient poisseux quelques heures après avoir été essuyé signale que le dépôt n'était pas en surface — il s'était installé dans le système.",
      "Nous établissons donc systématiquement un état initial photographié avant de commencer, et nous vous indiquons ce qui pourra être restitué et ce qui restera marqué. Sur une installation longtemps négligée, une part du marquage de l'inox est définitive : mieux vaut le savoir avant l'intervention que le découvrir après.",
    ],
    priority: 1,
  },

  {
    slug: "degraissage-conduit-extraction",
    pillar: "degraissage",
    isPillar: false,
    nav: "Dégraissage conduit",
    h1: "Dégraissage de conduit d'extraction",
    title: "Dégraissage de conduit d'extraction | Cuisine professionnelle",
    description:
      "Dégraissage des conduits et réseaux d'extraction de cuisine professionnelle : dépôts polymérisés, rotobrossage, traitement chimique ciblé, rapport photo par zone.",
    eyebrow: "Dégraissage",
    lead:
      "Dans un conduit, le dépôt ne se rince pas. Il se décolle, se récupère et s'évacue.",
    sections: [
      {
        h2: "Un dépôt qui ne ressemble pas à celui de la hotte",
        body: [
          "À l'intérieur d'un conduit, la graisse subit des cycles répétés de chauffe et de refroidissement. Elle ne reste pas huileuse : elle se transforme en une couche dure, parfois vernissée, dont l'épaisseur peut atteindre plusieurs millimètres sur une installation ancienne.",
          "Cette matière adhère fortement à la paroi. Un produit seul ne la retire pas, une brosse seule non plus : il faut ramollir puis arracher, avec un outillage dimensionné pour le diamètre du conduit.",
        ],
      },
      {
        h2: "Notre approche du dégraissage de réseau",
        body: [
          "Nous partons toujours d'un repérage des accès et d'une évaluation de l'épaisseur du dépôt, souvent par caméra quand la configuration s'y prête. Le traitement associe application du dégraissant, temps de contact maîtrisé, puis rotobrossage progressif.",
          "Les résidus décollés sont impérativement récupérés. Une intervention qui se contente de désolidariser le dépôt et le laisse migrer dans le réseau ne fait que déplacer le problème vers l'extracteur ou le rejet.",
        ],
        list: [
          "Évaluation de l'épaisseur du dépôt par zone",
          "Application du dégraissant avec temps de contact adapté",
          "Rotobrossage progressif, outillage dimensionné au conduit",
          "Récupération intégrale et évacuation des résidus",
          "Contrôle visuel après traitement, photos par zone",
        ],
      },
      {
        h2: "Ce que le rapport doit vous dire",
        body: [
          "Un rapport de dégraissage de conduit utile mentionne trois choses : les zones traitées, l'état constaté avant et après pour chacune, et les zones qui n'ont pas pu être atteintes avec la raison. C'est ce document que vous conserverez et que vous pourrez présenter à votre assureur ou lors d'un contrôle.",
        ],
      },
    ],
    included: [
      "Repérage des accès et évaluation du dépôt",
      "Traitement chimique et mécanique combiné",
      "Récupération et évacuation des résidus",
      "Contrôle visuel après traitement",
      "Rapport photo détaillé par zone",
      "Mention explicite des parties non accessibles",
    ],
    targets: ["Restaurants", "Fast-foods", "Boulangeries", "Hôtels", "Cuisines centrales", "Établissements de santé"],
    faq: [
      {
        q: "Peut-on dégraisser un conduit sans l'ouvrir ?",
        a: "Partiellement, depuis la hotte et depuis le rejet. Mais un conduit long ou coudé ne peut pas être traité sur toute sa longueur sans accès intermédiaire. Les trappes de visite existent pour cela.",
      },
      {
        q: "Que deviennent les résidus retirés ?",
        a: "Ils sont récupérés pendant l'intervention, conditionnés et évacués par nos soins conformément à la réglementation applicable aux déchets d'activité.",
      },
      {
        q: "Utilisez-vous une caméra d'inspection ?",
        a: "Lorsque la configuration du réseau le permet, oui. C'est le meilleur moyen d'objectiver l'état avant et après, et cela évite les discussions sur ce qui a réellement été traité.",
      },
    ],
    related: ["degraissage-hotte-professionnelle", "ramonage-conduit-extraction", "nettoyage-conduit-hotte", "nettoyage-reseau-extraction"],
    priority: 2,
  },

  // ===========================================================================
  // PILIER 3 — RAMONAGE
  // ===========================================================================
  {
    slug: "ramonage-hotte-professionnelle",
    pillar: "ramonage",
    isPillar: true,
    nav: "Ramonage de hotte",
    navShort: "Ramonage",
    h1: "Ramonage de hotte professionnelle",
    title: "Ramonage de hotte professionnelle | Conduits & gaines d'extraction",
    description:
      "Ramonage de hotte et de conduit d'extraction en cuisine professionnelle : traitement du réseau, trappes de visite, rapport photo et attestation. Partout en France.",
    eyebrow: "Pilier — Ramonage",
    lead:
      "Le ramonage d'une hotte professionnelle n'a rien à voir avec celui d'une cheminée. Il s'agit de retirer des dépôts de graisse dans un réseau d'extraction de cuisine, pas de la suie dans un conduit de chauffage.",
    sections: [
      {
        h2: "Une prestation souvent mal nommée, jamais anodine",
        body: [
          "Les exploitants, les assureurs et les bureaux de contrôle emploient couramment le mot « ramonage » pour désigner le traitement intérieur du conduit d'extraction d'une cuisine professionnelle. Le terme vient de l'univers du chauffage, mais la réalité technique est différente : ici, la matière à retirer est de la graisse polymérisée, pas de la suie.",
          "Cette confusion de vocabulaire a une conséquence concrète : beaucoup d'établissements font appel à un ramoneur de cheminée, qui n'a ni le matériel, ni les produits, ni l'habitude d'un réseau de cuisine professionnelle. Le résultat est rarement à la hauteur, et le document remis ne décrit pas le bon périmètre.",
        ],
        callout:
          "Nous n'intervenons jamais sur des conduits de cheminée, d'insert ou de chauffage domestique. Notre métier est le réseau d'extraction de cuisine professionnelle, exclusivement.",
      },
      {
        h2: "Le périmètre réel d'un ramonage de hotte",
        body: [
          "Une prestation complète remonte la chaîne dans son intégralité, dans la limite de ce que l'installation rend accessible : hotte, plénum, entrée de conduit, conduit vertical, coudes, gaines horizontales, caisson d'extraction et sortie.",
          "Chaque installation impose ses limites. Un réseau équipé de trappes de visite se traite intégralement ; un réseau fermé ne se traite que partiellement. Nous établissons ce périmètre avant l'intervention et nous l'écrivons noir sur blanc dans le rapport.",
        ],
        list: [
          "Hotte, filtres et plénum",
          "Entrée et corps du conduit vertical",
          "Coudes et changements de direction",
          "Gaines horizontales accessibles",
          "Caisson d'extraction lorsque l'accès et l'équipement le permettent",
          "Sortie et abords immédiats du rejet",
        ],
      },
      {
        h2: "Le document remis en fin d'intervention",
        body: [
          "Chaque passage donne lieu à une attestation d'entretien datée, indiquant l'établissement, la date, le périmètre traité et les zones non accessibles. Elle est accompagnée d'un rapport photo.",
          "Ce document a une valeur pratique : c'est lui que vous présenterez à votre assureur, à un bureau de contrôle ou à un repreneur. Il ne remplace ni une obligation légale, ni une vérification réglementaire — c'est la preuve que l'entretien a été réalisé, et le détail de ce qui a été fait.",
        ],
      },
      {
        h2: "Restauration, hôtellerie, collectivités",
        body: [
          "Nous traitons aussi bien un restaurant à conduit unique qu'une cuisine centrale desservant plusieurs milliers de couverts. Sur les grands établissements, la planification devient un sujet à part entière : arrêt de production, accès en toiture, coordination avec les autres corps d'état, plan de prévention.",
        ],
      },
    ],
    included: [
      "Repérage complet du réseau et de ses accès",
      "Traitement mécanique et chimique du conduit",
      "Traitement des coudes et des gaines accessibles",
      "Récupération et évacuation des résidus",
      "Rapport photo par zone",
      "Attestation d'entretien datée et détaillée",
    ],
    targets: ["Restaurants", "Hôtels", "Boulangeries", "Fast-foods", "Cuisines centrales", "Cuisines collectives", "EHPAD", "Établissements scolaires"],
    faq: [
      {
        q: "Le ramonage de hotte est-il obligatoire ?",
        a: "Les obligations d'entretien applicables à votre établissement dépendent de son classement, de son activité et du règlement sanitaire de votre département, dont le contenu varie d'un département à l'autre. Votre contrat d'assurance peut par ailleurs imposer ses propres exigences. Nous ne nous substituons pas à ces textes : nous vous recommandons de vérifier auprès de votre assureur et de l'autorité compétente, et nous vous remettons dans tous les cas une attestation détaillant l'intervention réalisée.",
      },
      {
        q: "Quelle différence avec un ramoneur de cheminée ?",
        a: "Le métier, le matériel et la matière traitée. Un ramoneur de cheminée retire de la suie dans un conduit de chauffage. Nous retirons de la graisse polymérisée dans un réseau d'extraction de cuisine professionnelle, avec un outillage et des produits spécifiques.",
      },
      {
        q: "Combien de temps dure un ramonage de conduit de hotte ?",
        a: "De 3 heures à une journée complète selon la longueur du réseau, le nombre de coudes, le nombre d'accès disponibles et l'épaisseur du dépôt.",
      },
      {
        q: "Intervenez-vous en toiture ?",
        a: "Nous traitons les sorties d'extraction et leurs abords immédiats lorsque l'accès est sécurisé et conforme. Les interventions nécessitant des moyens d'accès particuliers font l'objet d'une organisation spécifique définie au devis.",
      },
    ],
    related: ["ramonage-hotte-restaurant", "ramonage-conduit-hotte", "ramonage-conduit-extraction", "nettoyage-conduit-hotte", "degraissage-conduit-extraction", "extraction-cuisine-professionnelle"],
    priority: 1,
  },

  {
    slug: "ramonage-hotte-restaurant",
    pillar: "ramonage",
    isPillar: false,
    nav: "Ramonage restaurant",
    h1: "Ramonage de hotte de restaurant",
    title: "Ramonage de hotte de restaurant | Conduit d'extraction",
    description:
      "Ramonage de hotte et de conduit d'extraction pour restaurant : traitement du réseau, intervention hors service, attestation d'entretien remise le jour même.",
    eyebrow: "Ramonage",
    lead:
      "Votre assureur vous demande un justificatif d'entretien de conduit ? Voici exactement ce que recouvre l'intervention et ce que vous recevez à la fin.",
    sections: [
      {
        h2: "Pourquoi un restaurant fait ramoner son conduit",
        body: [
          "Trois situations reviennent systématiquement. La première : une demande de l'assureur, à la souscription ou au renouvellement du contrat. La deuxième : une perte d'aspiration installée depuis plusieurs mois, avec des buées qui ne partent plus. La troisième : une reprise d'établissement, où le repreneur découvre un réseau dont personne ne sait quand il a été traité pour la dernière fois.",
          "Dans les trois cas, la démarche est la même : identifier ce qui est accessible, traiter, documenter.",
        ],
      },
      {
        h2: "Le déroulé d'une intervention en restaurant",
        body: [
          "Nous convenons d'un créneau hors service. La zone est confinée avant ouverture du réseau, ce qui évite toute dispersion en cuisine. Le conduit est traité depuis la hotte et depuis les trappes disponibles, par rotobrossage et traitement chimique des zones durcies.",
          "Les résidus sont récupérés au fur et à mesure. Le réseau est refermé, les accès remis en état, et l'aspiration contrôlée avant notre départ. Vous recevez le rapport photo et l'attestation le jour même.",
        ],
        list: [
          "Créneau hors service, y compris tôt le matin ou de nuit",
          "Confinement de la zone avant ouverture du réseau",
          "Rotobrossage depuis la hotte et les trappes disponibles",
          "Traitement ciblé des dépôts durcis dans les coudes",
          "Remise en état des accès",
          "Attestation et rapport photo remis le jour même",
        ],
      },
      {
        h2: "Le cas des restaurants en immeuble",
        body: [
          "En centre-ville, le conduit d'extraction d'un restaurant monte souvent dans une gaine technique d'immeuble jusqu'en toiture. L'accès à la partie haute dépend alors du syndic, et l'intervention doit être coordonnée. Nous avons l'habitude de ces configurations et fournissons les éléments techniques nécessaires à la demande d'autorisation.",
        ],
      },
    ],
    included: [
      "Confinement et protection de la zone",
      "Traitement du conduit depuis la hotte et les trappes",
      "Traitement des coudes accessibles",
      "Évacuation des résidus",
      "Contrôle de l'aspiration",
      "Attestation d'entretien et rapport photo",
    ],
    targets: ["Restaurants", "Bistrots", "Brasseries", "Pizzerias", "Restaurants en copropriété", "Restaurants de centre commercial"],
    faq: [
      {
        q: "Mon assureur demande un certificat de ramonage : que fournissez-vous ?",
        a: "Nous remettons une attestation d'entretien datée précisant l'établissement, le périmètre traité, la méthode employée et les zones non accessibles, accompagnée d'un rapport photo. Les exigences de forme peuvent varier selon les compagnies : transmettez-nous celles de votre contrat avant l'intervention et nous adapterons le document.",
      },
      {
        q: "Faut-il l'accord du syndic si le conduit passe dans l'immeuble ?",
        a: "Oui dès lors que l'intervention nécessite un accès aux parties communes ou à la toiture. Nous vous fournissons les éléments techniques à joindre à votre demande.",
      },
      {
        q: "Le ramonage peut-il être couplé au nettoyage de la hotte ?",
        a: "C'est même recommandé : traiter le conduit sans traiter la hotte, ou l'inverse, laisse une partie du système chargée. Le couplage réduit aussi le coût total par rapport à deux interventions séparées.",
      },
    ],
    related: ["ramonage-hotte-professionnelle", "ramonage-conduit-hotte", "nettoyage-hotte-restaurant", "degraissage-hotte-restaurant", "entretien-hotte-professionnelle"],
    cityPages: ["paris", "lyon", "marseille", "toulouse", "bordeaux", "lille"],
    localAngle: [
      "Une demande de ramonage arrive rarement spontanément. Elle est presque toujours déclenchée par un tiers : un assureur qui réclame un justificatif, un bureau de contrôle avant une visite, ou un repreneur qui découvre un réseau sans historique. La question n'est donc pas seulement technique, elle est documentaire.",
      "C'est pourquoi nous demandons, avant l'intervention, les exigences exactes figurant dans votre contrat. Les compagnies n'attendent pas toutes le même niveau de détail, et un document techniquement irréprochable mais au mauvais format devra être refait. Nous adaptons l'attestation à ce qui vous est réellement demandé.",
    ],
    priority: 1,
  },

  {
    slug: "ramonage-conduit-hotte",
    pillar: "ramonage",
    isPillar: false,
    nav: "Ramonage conduit de hotte",
    h1: "Ramonage de conduit de hotte",
    title: "Ramonage de conduit de hotte | Trappes de visite & coudes",
    description:
      "Ramonage de conduit de hotte de cuisine professionnelle : anatomie du réseau, traitement des coudes, accès par trappes de visite, rapport photo par zone.",
    eyebrow: "Ramonage",
    lead:
      "Un conduit de hotte n'est jamais une simple ligne droite. C'est le tracé réel qui détermine ce qui peut être traité — et ce qui ne le sera pas.",
    sections: [
      {
        h2: "Anatomie d'un conduit de hotte de cuisine professionnelle",
        body: [
          "Depuis le plénum, l'air chargé emprunte une première section verticale, franchit un ou plusieurs coudes, traverse parfois des tronçons horizontaux dissimulés en faux plafond, puis rejoint le caisson d'extraction avant d'être rejeté, le plus souvent en toiture.",
          "Chaque changement de direction est un point d'accumulation. La vitesse de l'air y chute, les particules les plus lourdes s'y déposent, et c'est là que le dépôt devient le plus épais. Un ramonage qui ne traite que les sections droites laisse l'essentiel en place.",
        ],
      },
      {
        h2: "Les trappes de visite décident de tout",
        body: [
          "Une trappe de visite est une ouverture obturable posée sur le conduit qui permet d'introduire l'outillage et de contrôler l'intérieur. Sans elle, on ne traite que ce qu'on atteint depuis les extrémités.",
          "Sur un réseau ancien, la première question que nous posons est donc toujours la même : y a-t-il des trappes, où, et sont-elles encore ouvrables ? La réponse détermine le périmètre du devis. Quand il n'y en a pas, la pose de trappes normalisées transforme durablement l'entretien de l'installation : chaque passage suivant est plus rapide, plus complet et moins cher.",
        ],
        list: [
          "Repérage des trappes existantes et vérification de leur ouverture",
          "Évaluation de la longueur réellement traitable",
          "Traitement section par section, coudes compris",
          "Contrôle visuel après passage",
          "Préconisation chiffrée de pose de trappes si nécessaire",
        ],
      },
      {
        h2: "Ce que nous refusons de faire",
        body: [
          "Facturer le ramonage d'un réseau que nous savons ne pas pouvoir atteindre. Remettre une attestation qui laisse croire qu'un conduit fermé a été traité sur toute sa longueur. Pousser les résidus plus loin dans le réseau faute de pouvoir les récupérer. Ces trois pratiques existent sur le marché ; elles se retournent contre l'exploitant au premier contrôle.",
        ],
      },
    ],
    included: [
      "Repérage du tracé réel et des accès",
      "Traitement des sections verticales et des coudes",
      "Récupération et évacuation des résidus",
      "Contrôle visuel, photos par zone",
      "Rapport mentionnant les parties non traitées",
      "Devis de pose de trappes de visite si pertinent",
    ],
    targets: ["Restaurants", "Boulangeries", "Pizzerias", "Hôtels", "Cuisines centrales", "Laboratoires alimentaires"],
    faq: [
      {
        q: "Qu'est-ce qu'une trappe de visite sur un conduit d'extraction ?",
        a: "Une ouverture obturable, posée sur le conduit, qui permet d'introduire l'outillage de nettoyage et de contrôler visuellement l'intérieur du réseau. Elle se referme hermétiquement après intervention.",
      },
      {
        q: "Combien coûte la pose de trappes de visite ?",
        a: "Cela dépend du nombre de trappes, du matériau et du diamètre du conduit, et de l'accessibilité de chaque point de pose. Nous établissons un devis distinct après repérage sur site.",
      },
      {
        q: "Peut-on ramoner un conduit uniquement depuis la toiture ?",
        a: "Sur des réseaux courts et rectilignes, parfois. Dès qu'il y a des coudes ou une longueur importante, un accès unique en toiture ne permet pas de traiter l'ensemble.",
      },
    ],
    related: ["ramonage-hotte-professionnelle", "ramonage-conduit-extraction", "nettoyage-conduit-hotte", "degraissage-conduit-extraction", "ramonage-gaine-extraction"],
    priority: 1,
  },

  {
    slug: "ramonage-conduit-extraction",
    pillar: "ramonage",
    isPillar: false,
    nav: "Ramonage conduit extraction",
    h1: "Ramonage de conduit d'extraction",
    title: "Ramonage de conduit d'extraction | Cuisine professionnelle",
    description:
      "Ramonage de conduit d'extraction pour cuisine professionnelle : rotobrossage adapté au diamètre, traitement des dépôts polymérisés, inspection et rapport détaillé.",
    eyebrow: "Ramonage",
    lead:
      "Vocabulaire technique, méthode technique. Cette page s'adresse aux exploitants, gestionnaires techniques et bureaux d'études qui veulent savoir précisément ce que nous faisons.",
    sections: [
      {
        h2: "Outillage et méthode",
        body: [
          "Le rotobrossage consiste à faire tourner une brosse motorisée, montée sur flexible, à l'intérieur du conduit. Le diamètre de la brosse doit correspondre à celui du conduit : trop petite, elle ne touche pas la paroi ; trop grande, elle bloque et peut endommager les jonctions.",
          "La nature du conduit compte également. Un conduit en acier galvanisé, un conduit inox soudé et un conduit maçonné ne se traitent pas avec le même outillage ni avec la même agressivité. Le repérage préalable sert précisément à faire ce choix.",
        ],
        list: [
          "Brosses de diamètre adapté, en nylon ou en acier selon le support",
          "Flexibles motorisés pour les sections longues et coudées",
          "Dégraissants alcalins pour les dépôts polymérisés",
          "Aspiration et récupération des résidus au point bas",
          "Caméra d'inspection lorsque la configuration le permet",
        ],
      },
      {
        h2: "Traitement des points singuliers",
        body: [
          "Les coudes, les réductions de section, les jonctions entre tronçons et les registres sont les zones où le dépôt est le plus épais et l'outillage le plus contraint. Elles demandent un traitement individualisé, souvent manuel, depuis l'accès le plus proche.",
          "Le caisson d'extraction est un cas à part : sa turbine, ses pales et sa volute accumulent une couche qui déséquilibre le rotor et fait chuter le débit. Nous le traitons lorsque son accès et son équipement le permettent, et nous le signalons quand ce n'est pas le cas.",
        ],
      },
      {
        h2: "Livrables techniques",
        body: [
          "Rapport par tronçon avec état avant et après, relevé des accès utilisés, liste des points singuliers traités, liste des zones non atteintes avec le motif, et préconisations. Sur les installations importantes, ce rapport constitue la base du plan de maintenance de l'année suivante.",
        ],
      },
    ],
    included: [
      "Repérage technique du réseau et choix de l'outillage",
      "Rotobrossage adapté au diamètre et au matériau",
      "Traitement individualisé des points singuliers",
      "Aspiration et évacuation des résidus",
      "Inspection après traitement",
      "Rapport technique par tronçon",
    ],
    targets: ["Cuisines centrales", "Restaurants d'entreprise", "Hôpitaux et cliniques", "EHPAD", "Hôtels", "Industries agroalimentaires"],
    faq: [
      {
        q: "Quel outillage utilisez-vous pour un conduit de grand diamètre ?",
        a: "Des brosses motorisées sur flexible, dimensionnées au diamètre réel du conduit, complétées par un traitement chimique des zones polymérisées et par une aspiration au point bas pour la récupération des résidus.",
      },
      {
        q: "Traitez-vous le caisson d'extraction et la turbine ?",
        a: "Oui lorsque l'accès et l'équipement le permettent. Une turbine chargée perd du débit et se déséquilibre ; son traitement fait partie d'une remise à niveau complète du réseau.",
      },
      {
        q: "Fournissez-vous un rapport exploitable par un bureau d'études ?",
        a: "Oui : rapport par tronçon, état avant et après, accès utilisés, points singuliers, zones non atteintes et préconisations. Il est conçu pour être intégré à un plan de maintenance.",
      },
    ],
    related: ["ramonage-conduit-hotte", "ramonage-hotte-professionnelle", "nettoyage-reseau-extraction", "degraissage-conduit-extraction", "extraction-cuisine-professionnelle"],
    priority: 1,
  },

  {
    slug: "ramonage-gaine-extraction",
    pillar: "ramonage",
    isPillar: false,
    nav: "Ramonage gaine",
    h1: "Ramonage de gaine d'extraction",
    title: "Ramonage de gaine d'extraction | Réseaux horizontaux",
    description:
      "Ramonage des gaines horizontales d'extraction de cuisine professionnelle : tronçons en faux plafond, locaux techniques, contrôle des raccords et rapport par zone.",
    eyebrow: "Ramonage",
    lead:
      "Sur les réseaux horizontaux, la graisse ne s'écoule pas : elle stagne. C'est ce qui rend le ramonage des gaines particulièrement nécessaire, et particulièrement technique.",
    sections: [
      {
        h2: "Pourquoi les gaines horizontales posent un problème spécifique",
        body: [
          "Dans un conduit vertical, une partie des dépôts finit par redescendre sous l'effet de la gravité et de la chaleur. Dans une gaine horizontale, rien ne bouge. La graisse se dépose en fond de gaine, s'accumule couche après couche et forme un lit épais que rien ne vient déloger.",
          "Sur des réseaux longs — cuisines centrales, hôtels, restaurants de centre commercial — cette accumulation représente rapidement plusieurs dizaines de kilos de matière répartis dans les faux plafonds.",
        ],
      },
      {
        h2: "Méthode de traitement",
        body: [
          "Repérage du tracé réel, identification des accès, puis traitement tronçon par tronçon avec récupération systématique en point bas. Les raccords et les suspensions sont contrôlés au passage : une gaine chargée pèse et sollicite ses fixations.",
          "Les accès déposés — dalles de faux plafond, trappes techniques — sont remis en état à l'identique en fin d'intervention.",
        ],
        list: [
          "Repérage du tracé et des tronçons accessibles",
          "Traitement mécanique tronçon par tronçon",
          "Récupération des résidus en point bas",
          "Contrôle des raccords, jonctions et suspensions",
          "Remise en état des accès déposés",
        ],
      },
      {
        h2: "Coordination sur site occupé",
        body: [
          "Intervenir dans un faux plafond au-dessus d'une salle de restaurant, d'un couloir d'hôtel ou d'un local de soins demande une organisation. Nous planifions ces interventions en dehors des heures d'exploitation et confinons systématiquement la zone.",
        ],
      },
    ],
    included: [
      "Repérage du tracé réel du réseau",
      "Traitement des tronçons horizontaux accessibles",
      "Contrôle des raccords et suspensions",
      "Évacuation des résidus",
      "Remise en état des accès",
      "Rapport photo par tronçon",
    ],
    targets: ["Hôtels", "Centres commerciaux", "Cuisines centrales", "Établissements de santé", "Restaurants d'entreprise"],
    faq: [
      {
        q: "Comment traiter une gaine sans trappe d'accès ?",
        a: "Par dépose ponctuelle de dalles de faux plafond quand c'est possible, sinon par création de trappes de visite. Sans aucun accès, seuls les tronçons atteignables depuis les extrémités peuvent être traités.",
      },
      {
        q: "Intervenez-vous de nuit ?",
        a: "Oui, en particulier sur les sites occupés : hôtels, établissements de santé, centres commerciaux. Le créneau est défini avec vous au moment du devis.",
      },
    ],
    related: ["ramonage-conduit-hotte", "nettoyage-gaine-extraction", "nettoyage-reseau-extraction", "ramonage-conduit-extraction"],
    priority: 2,
  },

  // ===========================================================================
  // PILIER 4 — EXTRACTION
  // ===========================================================================
  {
    slug: "extraction-cuisine-professionnelle",
    pillar: "extraction",
    isPillar: true,
    nav: "Système d'extraction",
    navShort: "Extraction",
    h1: "Entretien du système d'extraction de cuisine professionnelle",
    title: "Système d'extraction cuisine professionnelle | Entretien complet",
    description:
      "Entretien complet des systèmes d'extraction de cuisine professionnelle : hotte, filtres, plénum, conduits, gaines, extracteur et rejet. Diagnostic, traitement, rapport.",
    eyebrow: "Pilier — Extraction",
    lead:
      "Hotte, filtres, plénum, conduit, gaine, extracteur, rejet : sept éléments, une seule chaîne. Traiter l'un sans les autres ne règle jamais durablement le problème.",
    sections: [
      {
        h2: "Comprendre la chaîne d'extraction",
        body: [
          "L'air chargé est capté par la hotte, filtré une première fois, réparti dans le plénum, aspiré dans le conduit, transporté par les gaines, mis en mouvement par l'extracteur, puis rejeté à l'extérieur. Chaque maillon dépend du précédent.",
          "C'est pourquoi un diagnostic sérieux ne s'arrête jamais à la hotte. Une perte d'aspiration peut venir d'un filtre saturé, d'un conduit rétréci par les dépôts, d'une turbine encrassée ou d'une compensation d'air insuffisante — quatre causes, quatre interventions différentes.",
        ],
      },
      {
        h2: "Les sept éléments que nous traitons",
        body: [
          "Notre périmètre couvre l'ensemble des parties accessibles du système. Ce qui ne l'est pas est signalé, jamais passé sous silence.",
        ],
        list: [
          "La hotte : caisson, parois internes, jonctions, éclairage",
          "Les filtres : à chocs, à cassettes, à charbon",
          "Le plénum : chambre de répartition et grilles de distribution",
          "Le conduit : sections verticales, coudes, trappes de visite",
          "Les gaines : tronçons horizontaux, raccords, suspensions",
          "L'extracteur : caisson, turbine, volute, quand l'accès le permet",
          "Le rejet : sortie, chapeau et abords immédiats",
        ],
      },
      {
        h2: "Le diagnostic d'encrassement",
        body: [
          "Avant toute proposition commerciale, nous établissons un état du réseau : configuration réelle, accès disponibles, épaisseur des dépôts par zone, points singuliers, état des filtres et des raccords. Ce diagnostic est photographié et documenté.",
          "Il sert deux objectifs : chiffrer une intervention juste, et poser les bases d'un plan de maintenance réaliste plutôt qu'une périodicité décidée au hasard.",
        ],
      },
      {
        h2: "Aéraulique : ce qui ne relève pas de l'entretien",
        body: [
          "Certains problèmes d'extraction ne se règlent pas par le nettoyage. Un réseau sous-dimensionné, une compensation d'air absente, un moteur en fin de vie ou un rejet mal positionné relèvent d'un travail de conception ou de remplacement.",
          "Nous vous le disons quand c'est le cas. Vendre un dégraissage à un exploitant dont le problème est un défaut de compensation d'air, c'est encaisser une intervention qui ne réglera rien.",
        ],
      },
    ],
    included: [
      "Diagnostic complet du réseau avec photos",
      "Traitement de l'ensemble des parties accessibles",
      "Contrôle des filtres, raccords et suspensions",
      "Traitement de l'extracteur si accessible",
      "Rapport détaillé par élément",
      "Plan de maintenance recommandé",
    ],
    targets: ["Cuisines centrales", "Cuisines collectives", "Hôtels", "Restaurants", "Hôpitaux", "EHPAD", "Laboratoires alimentaires", "Industries agroalimentaires"],
    faq: [
      {
        q: "Mon aspiration a faibli, d'où cela peut-il venir ?",
        a: "Les causes les plus fréquentes sont un filtre saturé, un conduit dont la section s'est réduite par accumulation de dépôts, une turbine d'extracteur encrassée, ou une compensation d'air insuffisante. Le diagnostic permet de distinguer ce qui relève de l'entretien de ce qui relève d'un problème de conception ou de matériel.",
      },
      {
        q: "Nettoyez-vous le moteur d'extraction ?",
        a: "Nous traitons le caisson d'extraction, la turbine et la volute lorsque leur accès et leur équipement le permettent. Certaines installations en toiture ou en local technique fermé nécessitent des moyens d'accès particuliers, définis au devis.",
      },
      {
        q: "Peut-on traiter uniquement une partie du réseau ?",
        a: "Techniquement oui, et c'est parfois la seule option quand une partie est inaccessible. Mais le bénéfice est partiel : un conduit propre en aval d'un plénum chargé se réencrasse rapidement.",
      },
      {
        q: "Qu'est-ce que la compensation d'air ?",
        a: "L'air extrait d'une cuisine doit être remplacé par un apport d'air neuf équivalent. Quand cet apport est insuffisant, la hotte ne peut pas aspirer correctement, quelle que soit la propreté du réseau. C'est un problème de conception, pas d'entretien.",
      },
    ],
    related: ["nettoyage-systeme-extraction-cuisine-professionnelle", "nettoyage-conduit-extraction", "nettoyage-reseau-extraction", "ramonage-conduit-extraction", "entretien-hotte-professionnelle"],
    priority: 1,
  },

  {
    slug: "nettoyage-systeme-extraction-cuisine-professionnelle",
    pillar: "extraction",
    isPillar: false,
    nav: "Nettoyage système extraction",
    h1: "Nettoyage du système d'extraction d'une cuisine professionnelle",
    title: "Nettoyage système d'extraction cuisine professionnelle | De la hotte au rejet",
    description:
      "Nettoyage complet du système d'extraction d'une cuisine professionnelle, de la hotte au rejet : filtres, plénum, conduits, gaines et extracteur. Rapport par élément.",
    eyebrow: "Extraction",
    lead:
      "Une prestation unique qui traite la chaîne entière, en une seule intervention planifiée, avec un seul rapport.",
    sections: [
      {
        h2: "Pourquoi traiter l'ensemble en une fois",
        body: [
          "Séquencer les interventions élément par élément coûte plus cher et donne un résultat moins durable. Chaque déplacement, chaque protection de zone, chaque mise en place d'outillage se paie. Et traiter le conduit six mois après la hotte laisse la première partie se recharger entre-temps.",
          "Le traitement global remet l'installation à un niveau de référence à partir duquel une périodicité d'entretien a du sens.",
        ],
      },
      {
        h2: "Déroulé d'une remise à niveau complète",
        body: [
          "L'intervention se planifie sur une à plusieurs journées selon la taille de l'installation. Elle suit l'ordre de la chaîne, de l'amont vers l'aval, ce qui évite de resalir une partie déjà traitée.",
        ],
        list: [
          "Diagnostic et photos d'état initial de chaque élément",
          "Protection et confinement des zones de travail",
          "Traitement des filtres, du caisson et du plénum",
          "Traitement du conduit vertical et des coudes",
          "Traitement des gaines horizontales accessibles",
          "Traitement du caisson d'extraction et de la turbine si accessibles",
          "Traitement de la sortie et de ses abords",
          "Contrôle de l'aspiration et remise en service",
        ],
      },
      {
        h2: "Ce que vous recevez",
        body: [
          "Un rapport structuré élément par élément, avec état initial, état final, méthode employée et éventuelles réserves. Une attestation d'entretien datée. Et une préconisation de périodicité fondée sur ce que nous avons réellement constaté chez vous, pas sur une moyenne de marché.",
        ],
      },
    ],
    included: [
      "Diagnostic complet documenté",
      "Traitement de la chaîne complète, de l'amont vers l'aval",
      "Contrôle de l'aspiration en fin d'intervention",
      "Rapport structuré par élément",
      "Attestation d'entretien",
      "Préconisation de périodicité personnalisée",
    ],
    targets: ["Cuisines centrales", "Hôtels", "Restaurants", "Restaurants d'entreprise", "Cliniques", "EHPAD"],
    faq: [
      {
        q: "Combien de temps dure une remise à niveau complète ?",
        a: "D'une journée pour une cuisine de restaurant à plusieurs journées pour une cuisine centrale ou un site multi-postes. Le planning est établi au devis, après repérage.",
      },
      {
        q: "Faut-il arrêter la production ?",
        a: "Pas nécessairement. Sur les grands sites, nous découpons l'intervention par zone et par créneau pour maintenir la continuité d'activité. C'est un point que nous travaillons systématiquement avec les cuisines centrales et les établissements de santé.",
      },
    ],
    related: ["extraction-cuisine-professionnelle", "nettoyage-reseau-extraction", "nettoyage-conduit-extraction", "ramonage-conduit-extraction"],
    priority: 1,
  },

  {
    slug: "nettoyage-conduit-extraction",
    pillar: "extraction",
    isPillar: false,
    nav: "Conduit d'extraction",
    h1: "Nettoyage de conduit d'extraction",
    title: "Nettoyage de conduit d'extraction | Cuisine professionnelle",
    description:
      "Nettoyage de conduit d'extraction en cuisine professionnelle : évaluation de la section, rotobrossage, traitement des coudes et restitution du débit d'aspiration.",
    eyebrow: "Extraction",
    lead:
      "Un conduit encrassé, c'est une section qui rétrécit. Et une section qui rétrécit, c'est un débit qui s'effondre.",
    sections: [
      {
        h2: "L'effet mécanique de l'encrassement sur le débit",
        body: [
          "Un dépôt de quelques millimètres sur toute la circonférence d'un conduit réduit sa section utile de manière disproportionnée. Le débit chute, l'extracteur compense en forçant, sa consommation augmente et son usure s'accélère.",
          "C'est la raison pour laquelle une perte d'aspiration progressive s'explique presque toujours par l'état du réseau avant de relever du matériel. Nettoyer le conduit restitue le débit sans toucher au moteur.",
        ],
      },
      {
        h2: "Notre intervention",
        body: [
          "Repérage des accès, évaluation de l'épaisseur du dépôt, choix de l'outillage, traitement mécanique et chimique, récupération des résidus, contrôle après passage. Le protocole est le même que pour un ramonage — c'est la même opération technique, désignée par un autre mot.",
        ],
        list: [
          "Évaluation de la section utile résiduelle",
          "Rotobrossage adapté au diamètre",
          "Traitement chimique des zones polymérisées",
          "Traitement individualisé des coudes",
          "Récupération et évacuation des résidus",
          "Contrôle visuel et photos par zone",
        ],
      },
      {
        h2: "Quand le nettoyage ne suffira pas",
        body: [
          "Un conduit percé, un conduit dont les jonctions ont joué, ou un réseau manifestement sous-dimensionné par rapport aux appareils installés ne se règlent pas par un nettoyage. Nous le constatons pendant l'intervention et nous vous le signalons dans le rapport, avec les photos correspondantes.",
        ],
      },
    ],
    included: [
      "Repérage et évaluation de la section",
      "Rotobrossage mécanique",
      "Traitement chimique ciblé",
      "Évacuation des résidus",
      "Contrôle après passage",
      "Rapport photo et réserves techniques",
    ],
    targets: ["Restaurants", "Hôtels", "Cuisines centrales", "Boulangeries", "Restaurants d'entreprise"],
    faq: [
      {
        q: "Le nettoyage du conduit restitue-t-il l'aspiration d'origine ?",
        a: "Dans la grande majorité des cas où la perte de débit provenait de l'encrassement, oui. Si l'aspiration reste faible après traitement, la cause est ailleurs : turbine, compensation d'air ou dimensionnement du réseau.",
      },
      {
        q: "À quelle fréquence nettoyer un conduit d'extraction ?",
        a: "Cela dépend du type de cuisson, du volume produit et de la configuration du réseau. Une cuisine à forte friture encrasse son conduit bien plus vite qu'une cuisine de production froide. Nous établissons une préconisation après diagnostic, et nous vous invitons à la confronter aux exigences de votre assureur.",
      },
    ],
    related: ["extraction-cuisine-professionnelle", "ramonage-conduit-extraction", "nettoyage-conduit-hotte", "nettoyage-reseau-extraction"],
    cityPages: ["paris", "lyon"],
    localAngle: [
      "Cette prestation répond à un symptôme mesurable plutôt qu'à une échéance de calendrier : la perte de débit. Un dépôt de quelques millimètres sur toute la circonférence réduit la section utile de manière disproportionnée, et l'extracteur compense en forçant — sa consommation augmente, son usure s'accélère.",
      "Le diagnostic consiste donc d'abord à distinguer ce qui relève de l'encrassement de ce qui relève de l'aéraulique. Si l'aspiration reste insuffisante après traitement du conduit, la cause est ailleurs : turbine, compensation d'air ou dimensionnement du réseau. Nous vous le disons plutôt que de vous vendre un second passage.",
    ],
    priority: 1,
  },

  {
    slug: "nettoyage-reseau-extraction",
    pillar: "extraction",
    isPillar: false,
    nav: "Réseau d'extraction",
    h1: "Nettoyage de réseau d'extraction",
    title: "Nettoyage de réseau d'extraction | Traitement de bout en bout",
    description:
      "Nettoyage de réseau d'extraction de cuisine professionnelle : conduits, gaines, points singuliers, extracteur et rejet. Traitement de bout en bout et rapport technique.",
    eyebrow: "Extraction",
    lead:
      "Le réseau, c'est tout ce qui se trouve entre la hotte et l'extérieur. Sur les grandes installations, c'est la majeure partie de la matière accumulée.",
    sections: [
      {
        h2: "Ce que recouvre un réseau d'extraction",
        body: [
          "Sur un restaurant, le réseau se résume souvent à un conduit et quelques mètres de gaine. Sur une cuisine centrale, un hôtel ou un restaurant d'entreprise, il peut représenter plusieurs dizaines de mètres de tronçons, plusieurs coudes, des piquages multiples et un ou plusieurs caissons d'extraction.",
          "Plus le réseau est long, plus la question de l'accès devient déterminante — et plus le repérage préalable conditionne la qualité du résultat.",
        ],
      },
      {
        h2: "Traitement de bout en bout",
        body: [
          "Nous partons du plénum et progressons jusqu'au rejet, en traitant chaque tronçon et chaque point singulier. Les résidus sont récupérés au fur et à mesure, ce qui évite de charger l'aval.",
          "Sur les réseaux complexes, nous produisons un schéma des tronçons traités, référencés et photographiés. Ce document devient la base de suivi des interventions suivantes.",
        ],
        list: [
          "Repérage et schématisation du réseau réel",
          "Traitement de l'amont vers l'aval",
          "Traitement des piquages et des points singuliers",
          "Caisson d'extraction et turbine si accessibles",
          "Sortie et abords du rejet",
          "Schéma de suivi référencé et photographié",
        ],
      },
      {
        h2: "Gestion multisites",
        body: [
          "Pour les exploitants gérant plusieurs sites, nous consolidons les rapports dans un état de parc unique : date de dernière intervention par site, périmètre traité, réserves ouvertes et prochaine échéance. C'est ce qui permet de piloter un parc plutôt que de subir des demandes site par site.",
        ],
      },
    ],
    included: [
      "Repérage et schématisation du réseau",
      "Traitement complet de l'amont vers l'aval",
      "Points singuliers et piquages",
      "Évacuation des résidus",
      "Schéma de suivi référencé",
      "Consolidation multisites si applicable",
    ],
    targets: ["Cuisines centrales", "Hôtels", "Restaurants d'entreprise", "Hôpitaux", "EHPAD", "Centres commerciaux"],
    faq: [
      {
        q: "Produisez-vous un schéma du réseau ?",
        a: "Sur les réseaux complexes, oui : tronçons référencés, accès utilisés, zones traitées et zones sous réserve. Il sert de base au suivi des interventions ultérieures.",
      },
      {
        q: "Pouvez-vous suivre un parc de plusieurs établissements ?",
        a: "Oui. Nous consolidons l'état du parc dans un document unique : dernière intervention par site, périmètre, réserves et prochaine échéance. C'est le fonctionnement standard sur nos contrats multisites.",
      },
    ],
    related: ["extraction-cuisine-professionnelle", "nettoyage-systeme-extraction-cuisine-professionnelle", "ramonage-gaine-extraction", "nettoyage-gaine-extraction"],
    priority: 2,
  },

  {
    slug: "entretien-hotte-professionnelle",
    pillar: "extraction",
    isPillar: false,
    nav: "Entretien de hotte",
    h1: "Entretien de hotte professionnelle",
    title: "Entretien de hotte professionnelle | Périodicité & suivi",
    description:
      "Entretien périodique de hotte professionnelle : passages programmés, suivi documenté, attestation à chaque intervention et pilotage multisites.",
    eyebrow: "Extraction",
    lead:
      "L'entretien, c'est ce qui évite le rattrapage. Une installation suivie coûte moins cher à traiter, tient son débit et se documente toute seule.",
    sections: [
      {
        h2: "La logique économique de l'entretien périodique",
        body: [
          "Une installation traitée pour la première fois après plusieurs années demande une intervention lourde : dépôts polymérisés, temps de contact prolongé, action mécanique intensive, parfois plusieurs passages. Une installation suivie se traite en une fraction de ce temps.",
          "L'écart de coût entre les deux situations est considérable, et il s'accroît à chaque mois de report. C'est l'argument le plus solide en faveur d'un contrat : ce n'est pas un abonnement, c'est un moyen de ne jamais repayer une remise à niveau.",
        ],
      },
      {
        h2: "Ce que comprend un suivi d'entretien",
        body: [
          "Chaque passage suit le même protocole, ce qui permet de comparer les rapports d'une année sur l'autre et de repérer une dérive — un poste qui encrasse plus vite, un filtre qui se dégrade, un raccord qui bouge.",
        ],
        list: [
          "Passages programmés à date convenue, sans relance de votre part",
          "Protocole identique à chaque intervention, donc comparable",
          "Rapport photo et attestation systématiques",
          "Signalement des dérives constatées d'un passage à l'autre",
          "Historique consolidé accessible à tout moment",
          "Interlocuteur unique pour l'ensemble de vos sites",
        ],
      },
      {
        h2: "Déterminer la bonne périodicité",
        body: [
          "Il n'existe pas de fréquence universelle. Le rythme dépend du type de cuisson, du volume de couverts, des heures de fonctionnement, de la configuration du réseau et des exigences propres à votre contrat d'assurance.",
          "Nous établissons une préconisation après le premier diagnostic, puis nous l'ajustons à la lumière de ce que montrent les passages suivants. Une périodicité correcte est une périodicité vérifiée, pas une périodicité annoncée à l'avance.",
        ],
        callout:
          "Les exigences de fréquence peuvent découler de votre contrat d'assurance et du règlement sanitaire applicable dans votre département. Nous vous recommandons de les vérifier auprès des sources concernées — nous adaptons ensuite le plan d'entretien.",
      },
    ],
    included: [
      "Diagnostic initial et préconisation de périodicité",
      "Passages programmés sans relance",
      "Protocole d'intervention constant et comparable",
      "Rapport et attestation à chaque passage",
      "Historique consolidé",
      "Interlocuteur unique multisites",
    ],
    targets: ["Restaurants", "Groupes de restauration", "Hôtels", "Cuisines centrales", "EHPAD", "Restaurants d'entreprise", "Collectivités"],
    faq: [
      {
        q: "Un contrat d'entretien engage-t-il sur plusieurs années ?",
        a: "Nos contrats sont annuels et précisent le nombre de passages, le périmètre traité et le tarif de chaque intervention. Les modalités de reconduction et de résiliation figurent au contrat.",
      },
      {
        q: "Que se passe-t-il si mon activité change en cours d'année ?",
        a: "Un changement de carte, un agrandissement ou l'ajout d'un poste de cuisson modifient le rythme d'encrassement. Le plan d'entretien est révisé en conséquence, à la hausse comme à la baisse.",
      },
      {
        q: "Puis-je récupérer l'historique de mes interventions ?",
        a: "Oui, à tout moment : attestations, rapports photo et réserves de chaque passage. C'est particulièrement utile en cas de cession d'établissement ou de changement d'assureur.",
      },
    ],
    related: ["nettoyage-hotte-professionnelle", "ramonage-hotte-professionnelle", "degraissage-hotte-professionnelle", "extraction-cuisine-professionnelle"],
    priority: 1,
  },
];

/**
 * Registre complet. Le pilier Réparation vit dans son propre fichier :
 * ce fichier dépassait déjà 1 400 lignes.
 */
export const services: Service[] = [...coreServices, ...repairServices];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const pillars = services.filter((s) => s.isPillar);

export function getPillar(key: Service["pillar"]): Service | undefined {
  return services.find((s) => s.isPillar && s.pillar === key);
}

export function getChildren(key: Service["pillar"]): Service[] {
  return services.filter((s) => s.pillar === key && !s.isPillar);
}

export const pillarLabels: Record<Service["pillar"], string> = {
  nettoyage: "Nettoyage",
  degraissage: "Dégraissage",
  ramonage: "Ramonage",
  extraction: "Extraction",
  reparation: "Réparation",
};

/** Couples prestation + ville réellement publiés — alimente generateStaticParams. */
export function serviceCityPairs(): { service: string; city: string }[] {
  return services.flatMap((s) => (s.cityPages ?? []).map((city) => ({ service: s.slug, city })));
}

/**
 * Pages locales à mettre en avant depuis une page prestation.
 *
 * Les piliers ne portent volontairement PAS de pages ville : elles
 * cannibaliseraient les money pages (/nettoyage-hotte-professionnelle/paris/
 * et /nettoyage-hotte-restaurant/paris/ visent la même requête). Un pilier
 * relaie donc les pages ville de ses sous-pages, ce qui préserve le maillage
 * sans créer de concurrence interne.
 */
export function cityLinksFor(service: Service): { service: Service; city: string }[] {
  if (!service.isPillar) {
    return (service.cityPages ?? []).map((city) => ({ service, city }));
  }

  return getChildren(service.pillar).flatMap((child) =>
    (child.cityPages ?? []).map((city) => ({ service: child, city })),
  );
}
