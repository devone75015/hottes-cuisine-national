import type { Article } from "@/lib/types";

/**
 * Centre d'expertise — silo Réparation.
 *
 * Règle de non-cannibalisation appliquée strictement : aucun de ces articles
 * ne cible une requête déjà portée par une page commerciale. En particulier,
 * « hotte qui n'aspire plus » appartient à la money page du même nom et n'a
 * donc PAS d'article dédié.
 */

export const repairArticles: Article[] = [
  {
    slug: "duree-de-vie-courroie-extracteur",
    title: "Combien de temps dure une courroie d'extracteur de cuisine ?",
    h1: "Combien de temps dure une courroie d'extracteur de cuisine professionnelle ?",
    description:
      "Ce qui détermine réellement la durée de vie d'une courroie d'extraction : heures de fonctionnement, charge du réseau, tension et alignement.",
    category: "Technique",
    readingTime: 5,
    published: "2026-08-26",
    excerpt:
      "La question n'a pas de réponse en mois. Elle a une réponse en heures de fonctionnement et en charge imposée à la transmission.",
    primaryTarget: "remplacement-courroie-hotte-professionnelle",
    secondaryTargets: ["maintenance-hotte-professionnelle", "reparation-extracteur-cuisine-professionnelle"],
    sections: [
      {
        h2: "Pourquoi personne ne peut vous donner un chiffre",
        body: [
          "Une courroie ne vieillit pas au calendrier, elle vieillit à l'usage. Deux installations identiques posées le même jour peuvent voir leur courroie tenir trois ans dans un cas et huit mois dans l'autre, sans qu'aucune des deux ne soit défectueuse.",
          "Ce qui les sépare, c'est la somme de trois facteurs : le nombre d'heures pendant lesquelles la transmission tourne réellement, l'effort qu'on lui demande, et la qualité du réglage initial.",
        ],
      },
      {
        h2: "Les quatre facteurs qui font la différence",
        body: [
          "Aucun n'est mystérieux, et trois sur quatre sont directement sous votre contrôle.",
        ],
        list: [
          "Les heures de fonctionnement : un établissement en service continu de 6 h à 23 h sollicite sa transmission trois fois plus qu'une cuisine à deux services",
          "La charge imposée par le réseau : une turbine encrassée et un conduit rétréci obligent le moteur à forcer, et la courroie encaisse cet effort supplémentaire en permanence",
          "La tension de pose : trop lâche elle patine et chauffe, trop tendue elle use les roulements et se fatigue prématurément",
          "L'alignement des poulies : un désalignement même léger fait travailler la courroie en flanc et la détruit en quelques mois",
        ],
      },
      {
        h2: "Le lien direct avec l'entretien du réseau",
        body: [
          "C'est l'observation la plus constante sur le terrain, et la moins intuitive pour un exploitant : les ruptures de courroie touchent en priorité les installations dont le réseau n'est pas entretenu.",
          "Le mécanisme est simple. Un conduit dont la section utile s'est réduite oppose plus de résistance. La turbine doit fournir davantage pour maintenir le débit. Le moteur force, la transmission encaisse, la courroie chauffe et se détend. Remplacer la courroie sans traiter le réseau revient à programmer la prochaine rupture.",
        ],
        callout:
          "Une courroie qui casse deux fois en moins d'un an ne signale pas une mauvaise courroie. Elle signale un problème en amont.",
      },
      {
        h2: "Ce qu'il faut surveiller plutôt qu'un calendrier",
        body: [
          "Puisque la durée n'est pas prévisible, c'est l'état qui doit être contrôlé. Une courroie se lit : brillance des flancs, craquelures, jeu à la pression du doigt, traces noires de gomme sur les poulies ou dans le caisson.",
          "Et elle s'entend : un sifflement au démarrage signale un patinage, donc une tension insuffisante. C'est le signal le plus précoce, et celui qu'il ne faut pas laisser passer.",
        ],
      },
      {
        h2: "Remplacement préventif : le calcul",
        body: [
          "Une courroie est une pièce peu coûteuse dont la pose prend quelques minutes lorsqu'on est déjà sur place. Une rupture, elle, arrête une cuisine et impose une intervention en urgence.",
          "Sur une installation suivie, la courroie est contrôlée à chaque passage et remplacée dès qu'elle montre des signes d'usure. C'est l'un des points où le contrôle périodique se justifie le plus facilement.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on prévoir la rupture d'une courroie ?",
        a: "Pas à la date près, mais les signes précurseurs sont fiables : sifflement au démarrage, aspiration qui baisse sans encrassement des filtres, traces de gomme sur les poulies. Un contrôle visuel et sonore périodique permet d'intervenir avant la rupture dans la grande majorité des cas.",
      },
      {
        q: "Faut-il changer les poulies en même temps que la courroie ?",
        a: "Pas systématiquement, mais il faut les contrôler. Des gorges usées ou marquées détruisent une courroie neuve en quelques semaines. Si l'usure est avérée, remplacer la courroie seule est une dépense perdue.",
      },
    ],
  },

  {
    slug: "reparer-ou-remplacer-moteur-hotte",
    title: "Moteur de hotte : réparer ou remplacer ?",
    h1: "Moteur de hotte professionnelle : faut-il réparer ou remplacer ?",
    description:
      "Les critères qui font pencher la décision entre réparation et remplacement d'un moteur d'extraction : nature de la panne, âge, coût, délai de pièce.",
    category: "Comprendre",
    readingTime: 6,
    published: "2026-08-26",
    excerpt:
      "C'est la décision la plus coûteuse du silo réparation. Voici les critères qui la déterminent réellement, et l'erreur qui la fausse.",
    primaryTarget: "reparation-moteur-hotte-professionnelle",
    secondaryTargets: ["reparation-hotte-professionnelle", "reparation-extracteur-cuisine-professionnelle"],
    sections: [
      {
        h2: "L'erreur préalable : conclure trop vite à une panne moteur",
        body: [
          "Avant même de se poser la question, il faut être certain que le moteur est en cause. C'est loin d'être toujours le cas, et cette confusion coûte cher.",
          "Un moteur qui chauffe et se met en sécurité peut être en parfait état et simplement forcer contre un réseau dont la section s'est réduite. Un moteur qui ne démarre pas peut ne pas être alimenté. Un moteur bruyant peut subir le déséquilibre d'une turbine chargée. Dans ces trois cas, le remplacer ne règle rien — et la panne revient.",
        ],
        callout:
          "Un moteur remplacé alors que la cause était en amont, c'est une dépense importante pour un problème qui persiste.",
      },
      {
        h2: "Ce qui se répare",
        body: [
          "Une part des défaillances relève d'un entretien mécanique et non d'un remplacement.",
        ],
        list: [
          "Roulements usés ou durs, qui produisent bruit et échauffement",
          "Fixations desserrées, silentblocs fatigués, supports déformés",
          "Moteur empoussiéré ou gras qui ne dissipe plus sa chaleur et se met en sécurité",
          "Connexions mécaniques dégradées",
          "Turbine déséquilibrée par l'encrassement, qui sollicite anormalement l'axe",
        ],
      },
      {
        h2: "Ce qui pousse vers le remplacement",
        body: [
          "À l'inverse, certaines situations rendent la réparation peu pertinente, même quand elle reste techniquement possible.",
          "Un bobinage atteint. Un âge élevé rapporté au coût de l'intervention. Une pièce détachée introuvable ou dont le délai d'approvisionnement dépasse ce que l'exploitation peut supporter. Ou un moteur manifestement sous-dimensionné dès l'origine pour le réseau qu'il dessert — auquel cas le remplacer à l'identique reproduirait le problème.",
        ],
      },
      {
        h2: "Les quatre critères de décision",
        body: [
          "Quand la question se pose réellement, elle se tranche sur quatre éléments — et le prix n'est ni le premier ni le seul.",
        ],
        list: [
          "Le coût de la réparation rapporté à celui d'un ensemble neuf",
          "La durée de vie résiduelle raisonnablement attendue après réparation",
          "Le délai d'obtention de la pièce, souvent décisif sur une cuisine en activité",
          "La cohérence du moteur avec le réseau réel : un remplacement est aussi l'occasion de corriger un sous-dimensionnement d'origine",
        ],
      },
      {
        h2: "Notre position",
        body: [
          "Nous chiffrons les deux options lorsque la question se pose vraiment, avec les arguments de chacune. Nous ne poussons pas systématiquement vers le remplacement : c'est la solution la plus rentable pour un prestataire, pas nécessairement la plus juste pour l'exploitant.",
          "En revanche, nous refusons de réparer un moteur dont nous savons qu'il lâchera dans les mois qui suivent. Une réparation qui ne tient pas coûte deux fois : la première intervention, puis le remplacement.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure un moteur d'extraction de cuisine ?",
        a: "Cela dépend des heures de fonctionnement et surtout de la charge imposée. Un moteur qui force en permanence contre un réseau encrassé s'use bien plus vite qu'un moteur travaillant à débit nominal. L'entretien du réseau est le premier facteur de longévité du moteur.",
      },
      {
        q: "Peut-on remplacer un moteur par un modèle plus puissant ?",
        a: "Ce n'est pas une décision anodine : le dimensionnement doit rester cohérent avec le réseau, le rejet et la compensation d'air. Surdimensionner sans étudier l'ensemble produit du bruit, des vibrations et une surconsommation, sans gain réel de débit.",
      },
    ],
  },

  {
    slug: "entretien-ou-maintenance-difference",
    title: "Entretien ou maintenance : deux choses différentes",
    h1: "Entretien et maintenance d'une hotte : deux prestations différentes",
    description:
      "Pourquoi une installation parfaitement propre peut tomber en panne : la différence entre traiter l'encrassement et contrôler l'état mécanique.",
    category: "Comprendre",
    readingTime: 4,
    published: "2026-08-26",
    excerpt:
      "Une installation impeccable peut s'arrêter du jour au lendemain. Le nettoyage ne dit rien de l'état de la transmission.",
    primaryTarget: "maintenance-hotte-professionnelle",
    secondaryTargets: ["entretien-hotte-professionnelle", "remplacement-courroie-hotte-professionnelle"],
    sections: [
      {
        h2: "Deux prestations, deux objets",
        body: [
          "L'entretien traite la matière : les dépôts de graisse accumulés dans les filtres, le plénum, le conduit et les gaines. C'est ce que recouvrent le nettoyage, le dégraissage et le ramonage, et c'est ce que la plupart des exploitants font faire.",
          "La maintenance traite l'usure : tension et état de la courroie, alignement des poulies, jeu des roulements, équilibrage de la turbine, tenue des fixations, comportement du moteur. Aucun de ces points ne se voit depuis la cuisine, et aucun n'est couvert par une prestation de nettoyage.",
        ],
      },
      {
        h2: "La situation que cela produit",
        body: [
          "Nous la rencontrons régulièrement : un établissement fait consciencieusement nettoyer son réseau depuis des années, dispose de tous ses rapports d'entretien — et tombe en panne un vendredi soir sur une rupture de courroie que personne n'a jamais contrôlée.",
          "L'exploitant est de bonne foi : il a fait ce qu'on lui a dit de faire. Simplement, personne ne lui a expliqué que l'entretien du réseau et le contrôle mécanique sont deux choses distinctes.",
        ],
        callout:
          "Un rapport de nettoyage ne dit rien de l'état de votre transmission. Il ne prétend d'ailleurs pas le dire.",
      },
      {
        h2: "Pourquoi les deux se renforcent",
        body: [
          "Ce n'est pas seulement une addition. Les deux prestations agissent l'une sur l'autre.",
          "Un réseau encrassé fait forcer le moteur, chauffer la courroie et se déséquilibrer la turbine : le défaut d'entretien accélère l'usure mécanique. À l'inverse, une transmission qui patine réduit le débit, ce qui laisse davantage de dépôts se former dans le réseau : le défaut de maintenance accélère l'encrassement.",
          "Traiter l'un sans l'autre, c'est laisser chacun dégrader le second.",
        ],
      },
      {
        h2: "L'argument économique du couplage",
        body: [
          "Le déplacement, la protection de zone et la mise en place représentent une part réelle du coût d'une intervention. Réaliser le contrôle mécanique pendant le passage de nettoyage évite de payer cela deux fois.",
          "C'est la raison pour laquelle nous recommandons un plan unique plutôt que deux contrats séparés : un même passage, deux objets traités, un seul rapport.",
        ],
      },
    ],
    faq: [
      {
        q: "Mon prestataire de nettoyage contrôle-t-il la courroie ?",
        a: "Sauf mention explicite dans son contrat, non — et ce n'est pas un manquement de sa part : ce n'est pas l'objet de la prestation. Vérifiez ce que votre rapport d'intervention mentionne réellement ; s'il ne parle que de filtres, de plénum et de conduit, la partie mécanique n'est pas couverte.",
      },
      {
        q: "Faut-il deux contrats séparés ?",
        a: "Non, et c'est même moins avantageux. Un plan unique couplant entretien du réseau et contrôle mécanique sur les mêmes passages évite de payer deux fois le déplacement et la mise en place.",
      },
    ],
  },
];
