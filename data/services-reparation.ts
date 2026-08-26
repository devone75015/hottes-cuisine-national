import type { Service } from "@/lib/types";

/**
 * PILIER 5 — RÉPARATION, DÉPANNAGE ET MAINTENANCE
 *
 * Intention dominante différente des quatre autres piliers : ici le prospect
 * a une panne en cours. Le contenu est donc construit pour la qualification
 * rapide et l'appel, pas pour la pédagogie longue.
 *
 * DEUX RÈGLES NON NÉGOCIABLES, tenues sur toutes les pages de ce silo :
 *
 * 1. AUCUN AUTODIAGNOSTIC. Une perte d'aspiration peut venir de l'encrassement,
 *    des filtres, du conduit, de la gaine, de la courroie, du moteur, de
 *    l'extracteur, de la transmission, de l'alimentation ou de la compensation
 *    d'air. Le site liste les causes possibles et oriente vers un diagnostic ;
 *    il ne conclut jamais à la place du technicien.
 *
 * 2. AUCUNE PROMESSE D'INTERVENTION ÉLECTRIQUE non couverte par une
 *    habilitation. Le volet électrique est décrit comme un périmètre de
 *    constat et de coordination tant que le client n'a pas confirmé ses
 *    habilitations réelles. Voir la section dédiée du pilier.
 */

export const repairServices: Service[] = [
  // ===========================================================================
  // PILIER
  // ===========================================================================
  {
    slug: "reparation-hotte-professionnelle",
    pillar: "reparation",
    isPillar: true,
    nav: "Réparation & dépannage",
    navShort: "Réparation",
    h1: "Réparation et dépannage de hotte professionnelle",
    title: "Réparation et dépannage de hotte professionnelle | Diagnostic sur site",
    description:
      "Votre hotte ou votre extraction est en panne ? Diagnostic sur site, réparation de courroie, moteur, extracteur et remise en fonctionnement. Devis avant travaux.",
    eyebrow: "Pilier — Réparation",
    lead:
      "Votre hotte est arrêtée, elle n'aspire plus ou elle fait un bruit anormal. Nous établissons d'abord ce qui est réellement en cause, puis nous réparons.",
    sections: [
      {
        h2: "Une panne d'extraction arrête une cuisine",
        body: [
          "Une hotte qui ne fonctionne plus n'est pas un inconfort : c'est une cuisine qui devient irrespirable en un service, des buées qui stagnent, des odeurs qui passent en salle et, très vite, une question de conditions de travail pour vos équipes.",
          "C'est aussi une situation où l'urgence pousse à réparer vite plutôt que juste. Nous faisons l'inverse : nous identifions la cause avant de remplacer quoi que ce soit, parce qu'un moteur changé sur une panne de courroie est une dépense inutile — et parce que la panne reviendra.",
        ],
      },
      {
        h2: "Le diagnostic d'abord, la pièce ensuite",
        body: [
          "Les symptômes se ressemblent, les causes non. Une perte d'aspiration peut venir d'un filtre saturé, d'un conduit dont la section s'est réduite, d'une courroie détendue, d'un moteur qui faiblit, d'une turbine encrassée ou déséquilibrée, d'une transmission, d'un défaut d'alimentation, ou simplement d'une compensation d'air insuffisante.",
          "Aucun de ces cas ne se déduit d'un appel téléphonique. Le diagnostic se fait sur site : contrôle du fonctionnement, examen mécanique de la transmission et de la turbine, vérification de l'état du réseau, mesure du comportement à la mise en route.",
        ],
        callout:
          "Méfiez-vous de tout prestataire qui annonce la pièce à changer avant d'avoir vu l'installation. Sur ce type de panne, c'est le meilleur moyen de payer deux fois.",
      },
      {
        h2: "Les interventions que nous réalisons",
        body: [
          "Notre périmètre couvre la partie mécanique et aéraulique du système d'extraction, ainsi que les éléments de la hotte elle-même.",
        ],
        list: [
          "Diagnostic complet du système, documenté et photographié",
          "Contrôle et remplacement de courroie, poulies et tension de transmission",
          "Diagnostic moteur : démarrage, échauffement, bruit, perte de puissance",
          "Réparation ou remplacement de moteur selon ce que l'état permet",
          "Extracteur et tourelle : turbine, volute, roulements, équilibrage",
          "Traitement des vibrations et bruits d'origine mécanique",
          "Reprise de fixations, supports et raccords desserrés",
          "Remise en fonctionnement et contrôle après intervention",
        ],
      },
      {
        h2: "Le volet électrique : ce que nous faisons, ce que nous ne faisons pas",
        body: [
          "Une part des pannes d'extraction est d'origine électrique : protection déclenchée, alimentation coupée, commande ou variateur défaillant, arrêt intempestif. Nous constatons ces situations pendant le diagnostic et nous les consignons dans le rapport.",
          "En revanche, nous n'annonçons aucune intervention électrique qui exigerait une habilitation dont nous ne disposerions pas. Lorsque la panne relève de ce périmètre, nous vous le disons clairement et nous coordonnons l'intervention avec l'électricien de l'établissement plutôt que de nous en charger indûment.",
        ],
        callout:
          "Périmètre électrique à confirmer avec vos habilitations réelles avant mise en ligne — cette section doit refléter ce que vos équipes sont autorisées à réaliser.",
      },
      {
        h2: "De la panne au contrat",
        body: [
          "Une panne est presque toujours le symptôme d'un manque de suivi. Une courroie ne casse pas du jour au lendemain : elle se détend, elle patine, elle chauffe, puis elle rompt. Une turbine ne se déséquilibre pas brutalement : elle s'encrasse.",
          "C'est pourquoi nous terminons chaque dépannage par une préconisation : ce qui a lâché, pourquoi, et ce qu'un contrôle périodique aurait permis d'anticiper. Libre à vous d'en rester à l'intervention ponctuelle.",
        ],
      },
    ],
    included: [
      "Diagnostic sur site, documenté et photographié",
      "Devis avant travaux, avec le périmètre exact",
      "Réparation mécanique et remplacement de pièces d'usure",
      "Contrôle du fonctionnement après intervention",
      "Rapport listant les constats et les réserves",
      "Préconisation de suivi pour éviter la récidive",
    ],
    targets: [
      "Restaurants",
      "Brasseries",
      "Hôtels",
      "Fast-foods",
      "Snacks",
      "Kebabs",
      "Pizzerias",
      "Boulangeries",
      "Pâtisseries",
      "Boucheries",
      "Traiteurs",
      "Cuisines centrales",
      "Cuisines collectives",
      "EHPAD",
      "Hôpitaux",
      "Collectivités",
      "Laboratoires alimentaires",
    ],
    faq: [
      {
        q: "Intervenez-vous en urgence quand la hotte est complètement arrêtée ?",
        a: "Nous traitons les arrêts complets en priorité, dans la limite des créneaux disponibles sur votre secteur. Appelez-nous plutôt que de passer par le formulaire : sur une cuisine à l'arrêt, le téléphone reste de loin le plus rapide.",
      },
      {
        q: "Pouvez-vous me dire au téléphone quelle pièce est en cause ?",
        a: "Non, et nous nous y refusons. Les symptômes d'une panne d'extraction se ressemblent alors que les causes diffèrent : courroie, moteur, turbine, transmission, encrassement, alimentation. L'échange téléphonique sert à qualifier l'urgence et à préparer l'intervention ; la cause s'établit sur site.",
      },
      {
        q: "Le diagnostic est-il facturé ?",
        a: "Le déplacement et le diagnostic font l'objet d'une ligne annoncée avant l'intervention. Lorsque la réparation nous est confiée, les modalités de prise en compte de ce diagnostic figurent au devis. Rien n'est découvert après coup.",
      },
      {
        q: "Réparez-vous toutes les marques de hottes ?",
        a: "Nous intervenons sur la partie mécanique et aéraulique quelle que soit la marque. Pour les pièces spécifiques à un fabricant, la disponibilité conditionne le délai : nous vous l'indiquons au devis, avec l'alternative si la pièce d'origine n'est plus fabriquée.",
      },
      {
        q: "Vaut-il mieux réparer ou remplacer ?",
        a: "Cela dépend de l'âge de l'installation, de l'état général du réseau et du coût de la pièce rapporté à celui d'un ensemble neuf. Nous chiffrons les deux options quand la question se pose réellement, avec les arguments de chacune — et sans pousser systématiquement vers le remplacement.",
      },
      {
        q: "Intervenez-vous partout en France ?",
        a: "Oui, sur l'ensemble du territoire métropolitain, avec des équipes organisées par région. Le délai dépend de votre secteur et de la disponibilité des pièces ; il vous est confirmé lors de l'appel.",
      },
    ],
    related: [
      "depannage-hotte-restaurant",
      "remplacement-courroie-hotte-professionnelle",
      "reparation-moteur-hotte-professionnelle",
      "reparation-extracteur-cuisine-professionnelle",
      "hotte-professionnelle-n-aspire-plus",
      "maintenance-hotte-professionnelle",
    ],
    priority: 1,
  },

  // ===========================================================================
  // DÉPANNAGE — money page verticale restaurant
  // ===========================================================================
  {
    slug: "depannage-hotte-restaurant",
    pillar: "reparation",
    isPillar: false,
    nav: "Dépannage restaurant",
    h1: "Dépannage de hotte de restaurant",
    title: "Dépannage de hotte de restaurant | Intervention rapide",
    description:
      "Hotte de restaurant arrêtée, aspiration insuffisante ou bruit anormal : diagnostic sur site, réparation et remise en fonctionnement. Devis avant travaux.",
    eyebrow: "Réparation",
    lead:
      "Une cuisine de restaurant ne peut pas attendre. Nous qualifions la panne au téléphone, nous intervenons sur site et nous repartons avec une installation qui fonctionne ou un plan précis pour qu'elle refonctionne.",
    localAngle: [
      "En restauration, la contrainte n'est pas seulement technique : c'est le service. Une panne déclarée à 11 h n'a pas la même urgence qu'une panne constatée le lundi de fermeture, et la réponse ne doit pas être la même non plus.",
      "Nous qualifions donc systématiquement deux choses à l'appel : la cuisine peut-elle tourner en l'état, et jusqu'à quand. C'est ce qui détermine si nous cherchons un créneau dans la journée ou si nous programmons une intervention plus complète au moment qui vous coûte le moins.",
    ],
    sections: [
      {
        h2: "Les trois situations que nous rencontrons le plus",
        body: [
          "La première : la hotte est complètement arrêtée. Rien ne démarre, ou le moteur tourne sans que l'air soit repris. Le service devient très vite impossible.",
          "La deuxième : la hotte fonctionne mais n'aspire plus correctement. Les buées stagnent au-dessus des plaques, les odeurs passent en salle, la chaleur ne part plus. L'exploitation continue, mais dans de mauvaises conditions.",
          "La troisième : un bruit ou une vibration apparaît. C'est souvent le signal le plus utile, parce qu'il précède la panne franche — et qu'à ce stade, l'intervention est encore légère.",
        ],
      },
      {
        h2: "Ce que nous vous demandons à l'appel",
        body: [
          "Quelques informations font gagner un déplacement, ou permettent d'arriver avec la bonne pièce.",
        ],
        list: [
          "La hotte est-elle totalement arrêtée, ou fonctionne-t-elle en dégradé ?",
          "Depuis quand, et le problème est-il apparu brutalement ou progressivement ?",
          "Entendez-vous un bruit inhabituel : sifflement, grincement, claquement, ronflement ?",
          "La protection électrique a-t-elle déclenché ?",
          "Quand a eu lieu le dernier entretien du réseau, si vous le savez ?",
          "La marque et le modèle de l'installation, s'ils sont accessibles",
        ],
      },
      {
        h2: "L'intervention sur un restaurant en activité",
        body: [
          "Nous convenons du créneau le moins pénalisant : coupure de l'après-midi, avant l'ouverture, après le dernier service, ou jour de fermeture si l'urgence le permet. La zone est protégée avant toute ouverture du caisson ou du plénum.",
          "Le diagnostic est réalisé et documenté sur place. Si la réparation est possible immédiatement, nous la réalisons après votre accord sur le devis. Si une pièce doit être commandée, nous vous indiquons le délai et, quand c'est possible, une solution de fonctionnement dégradé pour tenir jusque-là.",
        ],
      },
      {
        h2: "Ce que nous ne ferons pas",
        body: [
          "Remplacer une pièce coûteuse sans avoir établi qu'elle est en cause. Annoncer un diagnostic par téléphone. Facturer une intervention électrique qui sortirait de notre périmètre d'habilitation. Repartir sans vous dire ce qui a lâché et pourquoi.",
        ],
      },
    ],
    included: [
      "Qualification de l'urgence dès l'appel",
      "Créneau adapté au service de l'établissement",
      "Diagnostic sur site documenté",
      "Devis avant tout remplacement de pièce",
      "Réparation et remise en fonctionnement",
      "Rapport de constat et préconisation de suivi",
    ],
    targets: ["Restaurants", "Bistrots", "Brasseries", "Pizzerias", "Fast-foods", "Snacks", "Kebabs"],
    faq: [
      {
        q: "Ma hotte est arrêtée en plein service, que faire ?",
        a: "Appelez-nous immédiatement plutôt que de remplir un formulaire. Nous qualifions la situation en quelques minutes et nous vous indiquons le créneau réel que nous pouvons tenir sur votre secteur. Si une mesure conservatoire est possible en attendant, nous vous l'expliquons au téléphone.",
      },
      {
        q: "Puis-je continuer à cuisiner avec une hotte qui aspire mal ?",
        a: "C'est une décision d'exploitation qui vous appartient et qui dépend de votre installation, de votre activité et de vos obligations propres. Ce que nous pouvons dire : une extraction dégradée détériore les conditions de travail et laisse les dépôts s'accumuler plus vite. Nous vous donnons les constats, pas une autorisation.",
      },
      {
        q: "Combien de temps dure un dépannage ?",
        a: "Le diagnostic prend généralement moins d'une heure. La réparation dépend de la pièce : une courroie se remplace dans la foulée, un moteur ou une turbine demandent davantage de temps et parfois une commande.",
      },
    ],
    related: [
      "reparation-hotte-professionnelle",
      "hotte-professionnelle-n-aspire-plus",
      "remplacement-courroie-hotte-professionnelle",
      "nettoyage-hotte-restaurant",
      "maintenance-hotte-professionnelle",
    ],
    cityPages: ["paris", "lyon", "marseille", "toulouse", "bordeaux", "lille", "nantes", "strasbourg", "nice"],
    priority: 1,
  },

  // ===========================================================================
  // COURROIE
  // ===========================================================================
  {
    slug: "remplacement-courroie-hotte-professionnelle",
    pillar: "reparation",
    isPillar: false,
    nav: "Courroie",
    h1: "Remplacement de courroie de hotte professionnelle",
    title: "Remplacement de courroie de hotte professionnelle | Extracteur",
    description:
      "Courroie de hotte ou d'extracteur cassée, détendue ou qui patine : contrôle de la transmission, remplacement, réglage de tension et contrôle après intervention.",
    eyebrow: "Réparation",
    lead:
      "C'est la pièce d'usure la plus fréquente d'un système d'extraction — et celle dont la rupture arrête une cuisine sans prévenir.",
    localAngle: [
      "La courroie est une pièce consommable : elle a une durée de vie, et cette durée dépend directement de la charge qu'on lui impose. Une turbine encrassée demande plus d'effort à la transmission, la courroie chauffe, se détend et s'use plus vite.",
      "C'est ce qui explique une observation constante sur le terrain : les ruptures de courroie touchent en priorité les installations dont le réseau n'est pas entretenu. Remplacer la courroie sans traiter la cause revient à programmer la prochaine panne.",
    ],
    sections: [
      {
        h2: "Comment une courroie lâche",
        body: [
          "La rupture franche est rarement le premier signe. Avant elle, la courroie se détend, patine sur les poulies, chauffe et perd de sa capacité à transmettre le couple. Le débit d'air baisse progressivement, souvent sans qu'on fasse le lien.",
          "Ensuite viennent les bruits : un sifflement au démarrage, un grincement, parfois un claquement régulier. À ce stade, l'intervention est encore simple. Après la rupture, la hotte s'arrête net.",
        ],
        list: [
          "Aspiration qui baisse progressivement sans encrassement visible des filtres",
          "Sifflement ou grincement au démarrage du moteur",
          "Moteur qui tourne alors que la turbine ne suit pas",
          "Odeur de caoutchouc chaud à proximité du caisson",
          "Traces noires de gomme sur les poulies ou dans le caisson",
          "Arrêt brutal de l'aspiration, moteur toujours alimenté",
        ],
      },
      {
        h2: "Notre intervention sur la transmission",
        body: [
          "Nous ne nous contentons pas de poser une courroie neuve. Une courroie qui a lâché prématurément a une raison de l'avoir fait, et cette raison est presque toujours ailleurs : poulies usées ou désalignées, tension mal réglée, roulements durs, turbine chargée qui augmente l'effort demandé.",
          "Le contrôle porte donc sur l'ensemble de la transmission avant la repose, puis sur le comportement à la remise en route.",
        ],
        list: [
          "Contrôle de l'état des poulies : usure des gorges, alignement",
          "Vérification des roulements et de la libre rotation de la turbine",
          "Choix de la courroie au bon profil et à la bonne longueur",
          "Réglage de la tension selon les préconisations",
          "Contrôle du fonctionnement et du bruit après remise en route",
          "Constat sur l'état d'encrassement de la turbine, cause fréquente de surcharge",
        ],
      },
      {
        h2: "Remplacement préventif",
        body: [
          "Sur une installation suivie, la courroie se contrôle à chaque passage et se remplace avant la rupture. Cela coûte une pièce et quelques minutes, contre une cuisine arrêtée et une intervention en urgence dans le cas contraire.",
          "C'est l'un des arguments les plus concrets en faveur d'un contrat de maintenance : la courroie fait partie des points de contrôle systématiques.",
        ],
      },
    ],
    included: [
      "Contrôle complet de la transmission",
      "Remplacement de la courroie au profil adapté",
      "Vérification des poulies et de leur alignement",
      "Réglage de la tension",
      "Contrôle du fonctionnement après remise en route",
      "Constat sur les causes d'usure prématurée",
    ],
    targets: ["Restaurants", "Hôtels", "Fast-foods", "Boulangeries", "Cuisines centrales", "Restaurants d'entreprise"],
    faq: [
      {
        q: "À quelle fréquence faut-il changer la courroie d'une hotte professionnelle ?",
        a: "Il n'existe pas d'intervalle universel : la durée de vie dépend des heures de fonctionnement, de la charge imposée à la transmission et de l'état d'encrassement de la turbine. Sur une installation suivie, la courroie est contrôlée à chaque passage et remplacée dès qu'elle montre des signes d'usure.",
      },
      {
        q: "Peut-on remplacer une courroie soi-même ?",
        a: "Techniquement, une repose est simple. Le point délicat est ailleurs : le choix du profil et de la longueur, le réglage de la tension, et surtout l'identification de ce qui a provoqué l'usure. Une courroie mal tendue s'use en quelques semaines, et une turbine chargée fera lâcher la neuve aussi vite que l'ancienne.",
      },
      {
        q: "Ma courroie a cassé deux fois en six mois, pourquoi ?",
        a: "Une usure répétée signale une cause en amont : poulies usées ou désalignées, roulements durs, tension inadaptée, ou turbine fortement encrassée qui augmente l'effort demandé. Le diagnostic porte alors sur la transmission complète, pas sur la courroie seule.",
      },
      {
        q: "Intervenez-vous sur les extracteurs en toiture ?",
        a: "Oui, lorsque l'accès est sécurisé et conforme. Les configurations nécessitant des moyens d'accès particuliers font l'objet d'une organisation spécifique, définie et chiffrée au devis avant intervention.",
      },
    ],
    related: [
      "reparation-hotte-professionnelle",
      "reparation-moteur-hotte-professionnelle",
      "reparation-extracteur-cuisine-professionnelle",
      "hotte-professionnelle-bruyante",
      "maintenance-hotte-professionnelle",
    ],
    cityPages: ["paris", "lyon", "marseille"],
    priority: 1,
  },

  // ===========================================================================
  // MOTEUR
  // ===========================================================================
  {
    slug: "reparation-moteur-hotte-professionnelle",
    pillar: "reparation",
    isPillar: false,
    nav: "Moteur",
    h1: "Réparation de moteur de hotte professionnelle",
    title: "Réparation de moteur de hotte professionnelle | Diagnostic moteur",
    description:
      "Moteur de hotte en panne, bruyant, qui chauffe ou qui perd en puissance : diagnostic sur site, réparation quand elle est possible, remplacement quand elle ne l'est pas.",
    eyebrow: "Réparation",
    lead:
      "Un moteur d'extraction ne tombe pas en panne au hasard. Dans la majorité des cas que nous rencontrons, il a été mis en difficulté par autre chose.",
    sections: [
      {
        h2: "Les symptômes et ce qu'ils ne disent pas",
        body: [
          "Un moteur qui ne démarre plus, qui s'arrête en cours de service, qui chauffe anormalement, qui devient bruyant ou qui a manifestement perdu en puissance : ces signes désignent le moteur comme suspect. Ils ne prouvent pas qu'il est en cause.",
          "Un moteur qui chauffe et se met en sécurité peut simplement forcer contre un réseau bouché. Un moteur qui ne démarre pas peut ne pas être alimenté. Un moteur bruyant peut subir le déséquilibre d'une turbine chargée. Sauter à la conclusion revient souvent à remplacer une pièce saine.",
        ],
        callout:
          "Le remplacement d'un moteur est l'une des réparations les plus coûteuses du système. C'est aussi celle qui doit être la plus solidement justifiée par le diagnostic.",
      },
      {
        h2: "Notre méthode de diagnostic moteur",
        body: [
          "Nous procédons par élimination, du plus simple au plus lourd : présence et stabilité de l'alimentation, état de la transmission, libre rotation de la turbine, charge réelle imposée par le réseau, puis comportement du moteur lui-même à la mise en route.",
          "Cet ordre n'est pas anodin : il évite de conclure à une panne moteur alors que la cause est en amont, et il permet de vous dire ce qui devra être traité en plus du moteur pour que la panne ne revienne pas.",
        ],
        list: [
          "Contrôle de l'alimentation et des protections, dans notre périmètre de constat",
          "Examen de la transmission : courroie, poulies, alignement",
          "Contrôle de la libre rotation et de l'équilibrage de la turbine",
          "Évaluation de la charge imposée par l'état du réseau",
          "Observation du comportement moteur : démarrage, montée en régime, échauffement, bruit",
          "Constat écrit et photographié de chaque point vérifié",
        ],
      },
      {
        h2: "Réparer ou remplacer",
        body: [
          "Certaines défaillances se réparent : roulements, fixations, connexions mécaniques, nettoyage d'un moteur encrassé qui ne se refroidit plus correctement. D'autres non, ou plus pour un coût raisonnable au regard de l'âge de l'appareil.",
          "Lorsque la question se pose réellement, nous chiffrons les deux options et nous donnons les arguments de chacune : coût, délai de disponibilité de la pièce, durée de vie résiduelle attendue, compatibilité avec le reste de l'installation. La décision vous revient.",
        ],
      },
      {
        h2: "Ce qui use prématurément un moteur",
        body: [
          "Un réseau encrassé qui réduit la section utile et fait forcer le moteur en permanence. Une turbine chargée qui se déséquilibre et sollicite les roulements. Une transmission mal tendue. Un moteur lui-même empoussiéré ou gras, qui ne dissipe plus sa chaleur.",
          "Ces quatre causes sont toutes évitables par un entretien régulier. C'est la raison pour laquelle nous terminons chaque intervention moteur par un constat sur l'état du réseau.",
        ],
      },
    ],
    included: [
      "Diagnostic méthodique, du plus simple au plus lourd",
      "Constat écrit et photographié de chaque point contrôlé",
      "Réparation mécanique quand elle est possible",
      "Chiffrage comparé réparation / remplacement si la question se pose",
      "Remise en fonctionnement et contrôle",
      "Constat sur les causes d'usure en amont",
    ],
    targets: ["Restaurants", "Hôtels", "Cuisines centrales", "Restaurants d'entreprise", "EHPAD", "Laboratoires alimentaires"],
    faq: [
      {
        q: "Mon moteur de hotte chauffe et se met en sécurité, est-il mort ?",
        a: "Pas nécessairement, et c'est précisément le cas où un remplacement précipité coûte cher pour rien. Un moteur qui force contre un réseau dont la section s'est réduite chauffe et se protège en s'arrêtant, alors qu'il est en bon état. Le diagnostic doit établir la charge réelle avant de conclure.",
      },
      {
        q: "Combien de temps faut-il pour obtenir un moteur de remplacement ?",
        a: "Cela dépend entièrement du modèle et de sa disponibilité. Nous vous indiquons le délai au devis, ainsi que l'alternative lorsque la pièce d'origine n'est plus fabriquée. Sur les installations anciennes, c'est souvent le délai qui pèse le plus dans la décision.",
      },
      {
        q: "Un moteur bruyant est-il forcément à changer ?",
        a: "Non. Le bruit peut venir des roulements, d'une fixation desserrée, d'un déséquilibre de la turbine ou de la transmission. Chacune de ces causes se traite sans remplacer le moteur. C'est ce que le diagnostic mécanique permet de distinguer.",
      },
    ],
    related: [
      "reparation-hotte-professionnelle",
      "remplacement-courroie-hotte-professionnelle",
      "reparation-extracteur-cuisine-professionnelle",
      "hotte-professionnelle-n-aspire-plus",
      "nettoyage-reseau-extraction",
    ],
    priority: 1,
  },

  // ===========================================================================
  // EXTRACTEUR / TOURELLE
  // ===========================================================================
  {
    slug: "reparation-extracteur-cuisine-professionnelle",
    pillar: "reparation",
    isPillar: false,
    nav: "Extracteur & tourelle",
    h1: "Réparation d'extracteur et de tourelle d'extraction",
    title: "Réparation d'extracteur de cuisine professionnelle | Tourelle",
    description:
      "Extracteur ou tourelle d'extraction en panne, bruyant, vibrant ou en perte de débit : diagnostic mécanique, équilibrage, réparation et remplacement d'éléments.",
    eyebrow: "Réparation",
    lead:
      "L'extracteur est la pièce maîtresse du réseau, et la plus mal entretenue : installée en toiture ou en local technique, elle est hors de vue et le reste jusqu'à la panne.",
    sections: [
      {
        h2: "Ce qui se dégrade dans un caisson d'extraction",
        body: [
          "La turbine accumule les dépôts que le réseau n'a pas retenus. Cette matière se répartit de manière inégale sur les pales, ce qui crée un balourd : la turbine tourne déséquilibrée, vibre, et sollicite anormalement ses roulements et ses fixations.",
          "À partir de là, la dégradation s'enchaîne : les vibrations desserrent les fixations, les roulements durcissent, le bruit augmente, le débit chute et le moteur force. Une turbine chargée est donc à la fois une cause de perte de performance et une cause de casse mécanique.",
        ],
      },
      {
        h2: "Notre intervention sur l'extracteur",
        body: [
          "Le diagnostic est d'abord mécanique : nous contrôlons la libre rotation, l'état des roulements, la tenue des fixations, l'état de la volute et le niveau d'encrassement de la turbine.",
          "Selon les constats, l'intervention va du nettoyage de la turbine — souvent suffisant pour restituer le débit et supprimer les vibrations — au remplacement d'éléments mécaniques.",
        ],
        list: [
          "Contrôle de la libre rotation et du balourd",
          "État des roulements et des paliers",
          "Tenue des fixations, des supports et des silentblocs",
          "État de la volute et du caisson",
          "Nettoyage de la turbine, quand c'est la cause du déséquilibre",
          "Remplacement des éléments mécaniques défaillants",
          "Contrôle du fonctionnement et du bruit après intervention",
        ],
      },
      {
        h2: "Le cas des tourelles en toiture",
        body: [
          "Une part importante des extracteurs de cuisine professionnelle est installée en toiture. Cela ajoute deux contraintes à toute intervention : l'accès doit être sécurisé et conforme, et l'autorisation d'accès dépend souvent d'un tiers — syndic, bailleur ou gestionnaire du bâtiment.",
          "Nous intervenons lorsque ces conditions sont réunies. Les configurations nécessitant des moyens d'accès particuliers font l'objet d'une organisation spécifique, définie et chiffrée avant l'intervention plutôt que découverte sur place.",
        ],
      },
      {
        h2: "Perte de débit : l'extracteur n'est pas toujours coupable",
        body: [
          "Une baisse de débit constatée en cuisine peut venir de l'extracteur, mais aussi d'un conduit dont la section s'est réduite, de filtres saturés, d'une transmission qui patine ou d'une compensation d'air insuffisante.",
          "Le diagnostic porte donc sur la chaîne, pas sur le seul caisson. C'est ce qui évite de remplacer un extracteur en état pour un problème situé ailleurs.",
        ],
      },
    ],
    included: [
      "Diagnostic mécanique complet du caisson",
      "Contrôle du balourd et des roulements",
      "Nettoyage de turbine lorsque c'est la cause",
      "Remplacement d'éléments mécaniques défaillants",
      "Contrôle du fonctionnement et du niveau sonore",
      "Constat sur l'état du réseau en amont",
    ],
    targets: ["Restaurants", "Hôtels", "Cuisines centrales", "Centres commerciaux", "Établissements de santé", "Restaurants d'entreprise"],
    faq: [
      {
        q: "Mon extracteur vibre, est-ce grave ?",
        a: "C'est un signal à traiter sans attendre. Une vibration signale le plus souvent un déséquilibre de la turbine, généralement dû à des dépôts répartis de manière inégale sur les pales. Laissée en l'état, elle desserre les fixations et détruit les roulements — la réparation devient alors nettement plus lourde.",
      },
      {
        q: "Le nettoyage de la turbine suffit-il à régler le problème ?",
        a: "Souvent, oui, lorsque le déséquilibre vient uniquement de l'encrassement et que les roulements n'ont pas encore souffert. C'est justement pour cela qu'il vaut mieux intervenir tôt : passé un certain stade, il faut remplacer des pièces.",
      },
      {
        q: "Intervenez-vous sur les extracteurs installés en toiture ?",
        a: "Oui, sous réserve que l'accès soit sécurisé et conforme, et que l'autorisation d'accès soit obtenue lorsqu'elle dépend d'un syndic ou d'un gestionnaire. Nous fournissons les éléments techniques nécessaires à la demande.",
      },
    ],
    related: [
      "reparation-hotte-professionnelle",
      "reparation-moteur-hotte-professionnelle",
      "remplacement-courroie-hotte-professionnelle",
      "nettoyage-reseau-extraction",
      "hotte-professionnelle-bruyante",
    ],
    priority: 1,
  },

  // ===========================================================================
  // SYMPTÔME — ASPIRATION
  // ===========================================================================
  {
    slug: "hotte-professionnelle-n-aspire-plus",
    pillar: "reparation",
    isPillar: false,
    nav: "Hotte qui n'aspire plus",
    h1: "Votre hotte professionnelle n'aspire plus ou aspire mal",
    title: "Hotte professionnelle qui n'aspire plus | Causes et diagnostic",
    description:
      "Perte d'aspiration en cuisine professionnelle : les causes possibles, ce qu'il faut vérifier et pourquoi seul un diagnostic sur site permet de conclure.",
    eyebrow: "Réparation",
    lead:
      "C'est le symptôme le plus fréquent — et celui qui a le plus de causes possibles. Cette page vous aide à comprendre ce qui se joue, pas à poser un diagnostic à distance.",
    sections: [
      {
        h2: "Neuf causes possibles, un seul symptôme",
        body: [
          "Une perte d'aspiration se manifeste toujours de la même façon : les buées stagnent au-dessus des plaques, la chaleur reste en cuisine, les odeurs passent en salle. Ce que cela ne dit pas, c'est d'où vient le problème.",
          "Voici les causes que nous rencontrons réellement, de la plus fréquente à la plus rare. Aucune ne peut être confirmée sans voir l'installation.",
        ],
        list: [
          "Filtres saturés — la cause la plus fréquente, et la plus simple à traiter",
          "Conduit dont la section utile s'est réduite par accumulation de dépôts",
          "Gaine horizontale chargée, notamment en point bas",
          "Courroie détendue qui patine : le moteur tourne, la turbine ne suit plus",
          "Turbine d'extracteur encrassée ou déséquilibrée",
          "Roulements durs ou transmission dégradée",
          "Moteur en perte de puissance ou en sécurité thermique",
          "Défaut d'alimentation ou de commande — constat, hors périmètre d'intervention électrique",
          "Compensation d'air insuffisante : l'air extrait n'est pas remplacé, et rien ne peut être aspiré",
        ],
        callout:
          "Cette page ne pose aucun diagnostic. Les causes ci-dessus se ressemblent vues de la cuisine et se distinguent uniquement sur site.",
      },
      {
        h2: "Ce que vous pouvez vérifier vous-même",
        body: [
          "Trois observations simples, qui ne remplacent pas un diagnostic mais qui accélèrent le nôtre.",
          "L'état des filtres : s'ils sont visiblement colmatés, c'est déjà une piste. Le comportement au démarrage : le moteur démarre-t-il normalement, entendez-vous un sifflement ou un grincement, la turbine met-elle du temps à monter en régime. Et l'antériorité : la baisse est-elle progressive depuis des mois, ou brutale depuis hier.",
          "Une baisse progressive oriente plutôt vers l'encrassement du réseau. Une chute brutale oriente plutôt vers un élément mécanique. Ce ne sont que des orientations.",
        ],
      },
      {
        h2: "Le cas particulier de la compensation d'air",
        body: [
          "C'est la cause la plus souvent ignorée, et la seule qui ne relève ni de l'entretien ni de la réparation. L'air extrait d'une cuisine doit être remplacé par un apport d'air neuf équivalent. Quand cet apport est insuffisant — porte fermée, entrée d'air obstruée, installation mal dimensionnée à l'origine — la hotte ne peut pas aspirer, quel que soit l'état du réseau et du moteur.",
          "Si le diagnostic conclut à ce cas, nous vous le disons. Vous vendre un dégraissage ou un moteur ne réglerait rien.",
        ],
      },
      {
        h2: "Vers quelle prestation cela mène-t-il ?",
        body: [
          "Selon la cause établie, l'intervention relève d'un silo différent. C'est précisément pourquoi le diagnostic précède le devis.",
        ],
        list: [
          "Filtres colmatés → nettoyage des filtres et du plénum",
          "Conduit ou gaine chargés → ramonage et dégraissage du réseau",
          "Courroie, poulies, tension → remplacement de courroie",
          "Turbine encrassée ou déséquilibrée → intervention sur l'extracteur",
          "Moteur en cause → diagnostic et réparation moteur",
          "Compensation d'air → question de conception, hors entretien et hors réparation",
        ],
      },
    ],
    included: [
      "Diagnostic sur site de l'ensemble de la chaîne",
      "Contrôle des filtres, du plénum et du réseau accessible",
      "Contrôle de la transmission et de la turbine",
      "Observation du comportement moteur",
      "Constat écrit avec la cause établie",
      "Orientation vers la prestation réellement nécessaire",
    ],
    targets: ["Restaurants", "Brasseries", "Fast-foods", "Pizzerias", "Boulangeries", "Cuisines centrales", "Hôtels"],
    faq: [
      {
        q: "Ma hotte n'aspire plus du tout, d'où cela vient-il ?",
        a: "Un arrêt total oriente plutôt vers un élément mécanique ou une alimentation : rupture de courroie, moteur arrêté, protection déclenchée. Une baisse progressive oriente plutôt vers l'encrassement du réseau. Ce ne sont que des orientations : la cause s'établit sur site, et nous ne la confirmerons pas par téléphone.",
      },
      {
        q: "Un nettoyage suffira-t-il à retrouver l'aspiration ?",
        a: "Dans une bonne part des cas où la perte est progressive, oui : la section utile du conduit se restaure et le débit revient. Si l'aspiration reste insuffisante après traitement du réseau, la cause est mécanique ou aéraulique, et nous vous le signalons plutôt que de proposer un second passage.",
      },
      {
        q: "Pourquoi ne me dites-vous pas la cause au téléphone ?",
        a: "Parce que neuf causes différentes produisent le même symptôme et que se tromper coûte cher. Un moteur remplacé sur une panne de courroie, ou un dégraissage vendu sur un défaut de compensation d'air, ne règlent rien. L'appel sert à qualifier l'urgence et à préparer l'intervention.",
      },
      {
        q: "Combien coûte le diagnostic ?",
        a: "Le déplacement et le diagnostic font l'objet d'une ligne annoncée avant l'intervention. Lorsque les travaux nous sont confiés, les modalités de prise en compte figurent au devis.",
      },
    ],
    related: [
      "reparation-hotte-professionnelle",
      "depannage-hotte-restaurant",
      "nettoyage-filtres-hotte",
      "nettoyage-conduit-extraction",
      "remplacement-courroie-hotte-professionnelle",
      "reparation-extracteur-cuisine-professionnelle",
    ],
    priority: 1,
  },

  // ===========================================================================
  // SYMPTÔME — BRUIT ET VIBRATIONS
  // ===========================================================================
  {
    slug: "hotte-professionnelle-bruyante",
    pillar: "reparation",
    isPillar: false,
    nav: "Bruits & vibrations",
    h1: "Hotte professionnelle bruyante ou qui vibre",
    title: "Hotte professionnelle bruyante | Bruits et vibrations d'extraction",
    description:
      "Bruit anormal ou vibration sur une hotte ou un extracteur de cuisine professionnelle : ce que chaque type de bruit peut signaler et pourquoi il faut intervenir tôt.",
    eyebrow: "Réparation",
    lead:
      "Un bruit qui apparaît est le signal le plus utile que puisse donner une installation : il précède la panne franche, et à ce stade l'intervention est encore légère.",
    sections: [
      {
        h2: "Le bruit est une information, pas une nuisance",
        body: [
          "Un système d'extraction en bon état produit un ronflement régulier et stable. Tout ce qui s'écarte de ce bruit de fond — sifflement, grincement, claquement, ronflement qui s'amplifie, vibration ressentie dans la structure — signale un changement mécanique.",
          "L'erreur courante consiste à s'y habituer. Or entre le premier bruit et la casse, il s'écoule souvent plusieurs semaines pendant lesquelles une intervention simple aurait suffi.",
        ],
      },
      {
        h2: "Ce que chaque type de bruit peut signaler",
        body: [
          "Les correspondances ci-dessous sont des pistes d'orientation, pas un diagnostic. Plusieurs causes peuvent produire un bruit comparable, et un même défaut peut s'entendre différemment selon l'installation.",
        ],
        list: [
          "Sifflement au démarrage : courroie qui patine, tension insuffisante",
          "Grincement continu : roulements durs, manque de lubrification",
          "Claquement régulier : élément desserré, fixation qui a joué, corps étranger",
          "Ronflement qui s'amplifie : turbine déséquilibrée par l'encrassement",
          "Vibration ressentie dans la structure : balourd de turbine, silentblocs fatigués",
          "Bruit d'air anormal dans le réseau : obstruction partielle, registre ou raccord déplacé",
        ],
        callout:
          "Une vibration installée détruit progressivement les roulements et desserre les fixations. C'est le type de défaut dont le coût de réparation double si l'on attend.",
      },
      {
        h2: "Le bruit en salle : un enjeu commercial",
        body: [
          "Sur un établissement où la cuisine est ouverte ou proche de la salle, un extracteur devenu bruyant se paie directement en confort client. C'est souvent ce qui déclenche l'appel, longtemps après l'apparition du défaut mécanique.",
          "En immeuble, s'y ajoute la question du voisinage : un caisson qui vibre transmet dans la structure, et les plaintes remontent vite au syndic.",
        ],
      },
      {
        h2: "Notre intervention",
        body: [
          "Le diagnostic est mécanique et se fait installation en fonctionnement puis à l'arrêt : localisation de la source, contrôle de la libre rotation, état des roulements, tenue des fixations et des silentblocs, équilibrage de la turbine, état et tension de la transmission.",
          "Selon les constats, la remise en état va du simple nettoyage de turbine — qui supprime le balourd et donc la vibration — au remplacement d'éléments mécaniques.",
        ],
      },
    ],
    included: [
      "Localisation de la source du bruit, en marche et à l'arrêt",
      "Contrôle de la transmission et de sa tension",
      "État des roulements, fixations et silentblocs",
      "Contrôle du balourd de la turbine",
      "Remise en état ou remplacement des éléments concernés",
      "Contrôle du niveau sonore après intervention",
    ],
    targets: ["Restaurants à cuisine ouverte", "Brasseries", "Hôtels", "Établissements en copropriété", "Centres commerciaux"],
    faq: [
      {
        q: "Ma hotte est bruyante depuis des mois, est-ce urgent ?",
        a: "Un bruit installé depuis plusieurs mois signale un défaut qui a eu le temps de progresser. Ce n'est pas une urgence au sens d'une cuisine arrêtée, mais c'est le moment où l'intervention est encore beaucoup moins coûteuse qu'après la casse. Nous recommandons de faire diagnostiquer sans attendre la panne.",
      },
      {
        q: "Un simple nettoyage peut-il supprimer le bruit ?",
        a: "Oui, quand le bruit vient d'un balourd de turbine dû aux dépôts et que les roulements n'ont pas encore souffert. C'est un cas fréquent, et c'est la meilleure raison d'intervenir tôt.",
      },
      {
        q: "Mes voisins se plaignent du bruit de l'extracteur, que faire ?",
        a: "Faites d'abord établir un diagnostic mécanique : dans beaucoup de cas, le bruit résulte d'un défaut réparable — balourd, roulements, silentblocs fatigués — et non du dimensionnement de l'installation. Si le diagnostic conclut à un problème de conception ou d'implantation, nous vous le disons.",
      },
    ],
    related: [
      "reparation-extracteur-cuisine-professionnelle",
      "remplacement-courroie-hotte-professionnelle",
      "reparation-moteur-hotte-professionnelle",
      "reparation-hotte-professionnelle",
      "maintenance-hotte-professionnelle",
    ],
    priority: 2,
  },

  // ===========================================================================
  // MAINTENANCE
  // ===========================================================================
  {
    slug: "maintenance-hotte-professionnelle",
    pillar: "reparation",
    isPillar: false,
    nav: "Maintenance",
    h1: "Maintenance de hotte professionnelle",
    title: "Maintenance de hotte professionnelle | Contrôle et préventif",
    description:
      "Maintenance préventive des hottes et systèmes d'extraction : contrôle mécanique, points d'usure, transmission, turbine et réseau, avec rapport à chaque passage.",
    eyebrow: "Réparation",
    lead:
      "L'entretien traite l'encrassement. La maintenance traite l'usure mécanique. Les deux sont nécessaires, et beaucoup d'installations ne reçoivent que le premier.",
    sections: [
      {
        h2: "Entretien et maintenance ne sont pas la même chose",
        body: [
          "Un nettoyage, un dégraissage ou un ramonage traitent la matière accumulée : filtres, plénum, conduit, gaine. C'est indispensable, et c'est ce que la plupart des exploitants font faire.",
          "La maintenance traite autre chose : l'état mécanique du système. Tension et usure de la courroie, alignement des poulies, roulements, fixations, silentblocs, équilibrage de la turbine, comportement du moteur. Ces points ne se voient pas depuis la cuisine et ne sont pas couverts par une prestation de nettoyage.",
          "C'est ce qui explique une situation que nous rencontrons régulièrement : une installation parfaitement propre qui tombe en panne, parce que personne n'a jamais contrôlé la transmission.",
        ],
      },
      {
        h2: "Les points de contrôle d'un passage de maintenance",
        body: [
          "Le même protocole à chaque passage — c'est ce qui permet de comparer deux rapports et de repérer une dérive avant qu'elle ne devienne une panne.",
        ],
        list: [
          "Courroie : usure, tension, traces de patinage",
          "Poulies : état des gorges, alignement",
          "Roulements et paliers : jeu, bruit, échauffement",
          "Turbine : encrassement, équilibrage, libre rotation",
          "Fixations, supports et silentblocs",
          "Moteur : démarrage, montée en régime, échauffement, bruit",
          "Raccords, trappes et étanchéité du réseau accessible",
          "Constat sur le débit et le comportement général du système",
        ],
      },
      {
        h2: "Coupler maintenance et entretien",
        body: [
          "Le déplacement, la protection de zone et la mise en place représentent une part réelle du coût d'une intervention. Réaliser le contrôle mécanique pendant le passage de nettoyage ou de ramonage évite de la payer deux fois.",
          "C'est le fonctionnement que nous recommandons : un plan unique qui associe, selon les besoins de l'installation, contrôle, nettoyage, dégraissage, ramonage, diagnostic et réparation.",
        ],
      },
      {
        h2: "Ce que la maintenance évite",
        body: [
          "Une courroie remplacée à temps plutôt qu'une cuisine arrêtée en plein service. Une turbine nettoyée plutôt que des roulements détruits par le balourd. Un moteur qui ne force pas en permanence contre un réseau chargé, et qui dure.",
          "Le calcul est simple : le coût annuel d'un suivi est très inférieur à celui d'une intervention en urgence doublée d'un service perdu.",
        ],
      },
    ],
    included: [
      "Protocole de contrôle constant, comparable d'un passage à l'autre",
      "Contrôle mécanique complet de la transmission et de la turbine",
      "Signalement des points d'usure avant la panne",
      "Remplacement préventif des pièces d'usure sur accord",
      "Rapport à chaque passage, avec les dérives constatées",
      "Plan couplant maintenance et entretien du réseau",
    ],
    targets: [
      "Groupes de restauration",
      "Hôtels",
      "Cuisines centrales",
      "Cuisines collectives",
      "EHPAD",
      "Hôpitaux",
      "Restaurants d'entreprise",
      "Collectivités",
    ],
    faq: [
      {
        q: "Quelle différence entre un contrat d'entretien et un contrat de maintenance ?",
        a: "L'entretien porte sur la matière accumulée — filtres, plénum, conduit, gaine. La maintenance porte sur l'état mécanique — courroie, poulies, roulements, turbine, moteur. Les deux se complètent et se couplent avantageusement dans un même passage, ce que nous recommandons.",
      },
      {
        q: "À quelle fréquence faut-il un contrôle mécanique ?",
        a: "Le rythme dépend des heures de fonctionnement du système, de la charge imposée par l'état du réseau et de l'âge de l'installation. Nous établissons une préconisation après le premier passage, puis nous l'ajustons au vu de ce que montrent les suivants.",
      },
      {
        q: "Remplacez-vous les pièces d'usure de manière préventive ?",
        a: "Nous les signalons et nous vous proposons leur remplacement. Rien n'est remplacé sans votre accord : le rapport indique l'état constaté, notre recommandation, et vous décidez.",
      },
      {
        q: "La maintenance couvre-t-elle les pannes ?",
        a: "Un contrat de maintenance organise le contrôle périodique et le remplacement préventif. Les réparations consécutives à une panne font l'objet d'un devis distinct, au tarif contractuel, avec une priorité de planification pour les établissements suivis.",
      },
    ],
    related: [
      "reparation-hotte-professionnelle",
      "entretien-hotte-professionnelle",
      "remplacement-courroie-hotte-professionnelle",
      "nettoyage-hotte-professionnelle",
    ],
    priority: 1,
  },
];
