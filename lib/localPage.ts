import type { City, ContentSection, EditorialTemplate, Faq, Service } from "./types";
import { localFaqFor } from "@/data/faqPool";
import { services } from "@/data/services";

/**
 * MOTEUR ANTI-DUPLICATE (§18 du cadrage).
 *
 * Assemble une page « prestation + ville » à partir :
 *   - des blocs uniques rédigés pour la ville (contexte, contrainte, cas,
 *     établissements dominants, quartiers, bassin réel) ;
 *   - d'un modèle éditorial parmi six ;
 *   - de l'angle rédactionnel propre à la prestation, réservé aux pages locales.
 *
 * POINT CLÉ — le modèle éditorial est attribué au couple (ville × prestation),
 * pas à la ville seule. Sans cela, les quatre prestations d'une même ville
 * partagent la même ossature de H2 et les mêmes blocs de contexte : mesuré sur
 * une première version, cela produisait 65 à 78 % de similarité entre pages.
 * La rotation par prestation ramène chaque paire sous le seuil.
 *
 * Le H1 reste, lui, la formulation exacte de la requête ciblée : c'est la
 * seule chose qu'il ne faut PAS faire varier pour de mauvaises raisons.
 */

export interface LocalPage {
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  sections: ContentSection[];
  faq: Faq[];
  ctaTitle: string;
  ctaText: string;
  template: EditorialTemplate;
}

const TEMPLATES: EditorialTemplate[] = [
  "terrain",
  "technique",
  "sectoriel",
  "process",
  "comparatif",
  "reassurance",
];

/**
 * Prestations disposant de pages locales, dans l'ordre stable du registre.
 * L'index dans cette liste sert de décalage : c'est ce qui garantit que deux
 * prestations d'une même ville ne reçoivent JAMAIS le même modèle éditorial.
 *
 * Un décalage par hachage avait été essayé d'abord : deux slugs différents
 * peuvent retomber sur le même reste, et la collision s'était produite en
 * pratique (ramonage-hotte-restaurant et nettoyage-conduit-extraction à Lyon).
 *
 * ⚠ Au-delà de 6 prestations locales, les modèles se remettront à tourner :
 * il faudra alors ajouter des ossatures dans TEMPLATES.
 */
const LOCAL_SERVICE_ORDER = services.filter((s) => s.cityPages?.length).map((s) => s.slug);

/** Décalage stable par prestation — même entrée, même sortie à chaque build. */
function offsetOf(slug: string): number {
  const i = LOCAL_SERVICE_ORDER.indexOf(slug);
  return i >= 0 ? i : 0;
}

/**
 * Le modèle de la ville sert de point de départ ; la prestation le décale.
 * Deux prestations d'une même ville n'obtiennent donc jamais la même ossature.
 */
function templateFor(sv: Service, city: City): EditorialTemplate {
  const base = TEMPLATES.indexOf(city.template);
  return TEMPLATES[(base + 1 + offsetOf(sv.slug)) % TEMPLATES.length];
}

/* -------------------------------------------------------------------------- */
/*  Titres & métas — un patron par modèle éditorial                            */
/* -------------------------------------------------------------------------- */

function titleFor(sv: Service, city: City, tpl: EditorialTemplate): string {
  const base = `${sv.h1} ${city.prep}`;
  switch (tpl) {
    case "terrain":
      return `${base} (${city.departmentCode}) | Intervention hors service`;
    case "technique":
      return `${base} | Méthode adaptée au bâti local`;
    case "sectoriel":
      return `${base} | Toutes typologies d'établissements`;
    case "process":
      return `${base} | Devis sous 24 h, attestation remise`;
    case "comparatif":
      return `${base} | Quelle prestation vous concerne ?`;
    case "reassurance":
      return `${base} | Attestation et suivi multisites`;
  }
}

function descriptionFor(sv: Service, city: City, tpl: EditorialTemplate): string {
  const near = city.nearby.slice(0, 2).join(", ");

  /*
   * Le silo réparation a sa propre promesse. Lui appliquer les formulations
   * d'entretien (« attestation remise le jour même ») serait faux : sur une
   * panne, ce que le prospect cherche est un diagnostic et un délai.
   * Ces variantes sont aussi plus courtes — les H1 « réparation » sont longs.
   */
  if (sv.pillar === "reparation") {
    switch (tpl) {
      case "terrain":
        return `${sv.h1} ${city.prep} : diagnostic sur site, réparation et remise en fonctionnement. Arrêts traités en priorité.`;
      case "technique":
        return `${sv.h1} ${city.prep} : diagnostic mécanique, devis avant travaux, remise en service. Également à ${near}.`;
      case "sectoriel":
        return `${sv.h1} ${city.prep} : intervention adaptée à votre type d'établissement et à votre rythme d'activité.`;
      case "process":
        return `${sv.h1} ${city.prep} : de l'appel au redémarrage, diagnostic puis réparation. Devis avant toute pièce remplacée.`;
      case "comparatif":
        return `${sv.h1} ${city.prep} : identifier la cause réelle avant de remplacer une pièce. Diagnostic sur site.`;
      case "reassurance":
        return `${sv.h1} ${city.prep} : constat écrit, devis avant travaux et préconisation pour éviter la récidive.`;
    }
  }

  switch (tpl) {
    case "terrain":
      return `${sv.h1} ${city.prep} et alentours (${near}). Intervention hors service, rapport photo et attestation remis le jour même.`;
    case "technique":
      return `${sv.h1} ${city.prep} : repérage du réseau, outillage adapté au bâti local, traitement des zones accessibles. Devis sous 24 h.`;
    case "sectoriel":
      return `${sv.h1} ${city.prep} pour ${city.dominantEstablishments[0].toLowerCase()} et ${city.dominantEstablishments[1].toLowerCase()}. Méthode adaptée à votre cuisson.`;
    case "process":
      return `${sv.h1} ${city.prep} : diagnostic, devis sous 24 h, intervention hors service et attestation. Aussi à ${near}.`;
    case "comparatif":
      return `${sv.h1} ${city.prep} : identifier la prestation dont votre installation a besoin. Devis gratuit sous 24 h.`;
    case "reassurance":
      return `${sv.h1} ${city.prep} : attestation détaillée à chaque passage, suivi consolidé multisites. Devis sous 24 h.`;
  }
}

function leadFor(sv: Service, city: City, tpl: EditorialTemplate): string {
  const angle = sv.localAngle?.[0];
  switch (tpl) {
    case "terrain":
      return angle ?? `Nos équipes interviennent quotidiennement dans les cuisines de ${city.name}.`;
    case "technique":
      return `${city.constraint} C'est ce repérage préalable qui détermine le périmètre réellement traitable — et ce que nous écrivons dans le rapport.`;
    case "sectoriel":
      return `${city.dominantEstablishments[0]}, ${city.dominantEstablishments[1]?.toLowerCase()}, ${city.dominantEstablishments[2]?.toLowerCase()} : chaque profil de cuisine ${city.prep} encrasse son réseau différemment, et n'appelle pas le même rythme d'entretien.`;
    case "process":
      return `De l'appel à l'attestation, voici comment se déroule concrètement une intervention ${city.prep} — et ce que vous recevez à la fin.`;
    case "comparatif":
      return angle ?? city.constraint;
    case "reassurance":
      return `${city.constraint} Un état de parc consolidé règle le problème.`;
  }
}

/* -------------------------------------------------------------------------- */
/*  Ossatures éditoriales — 6 structures de H2 distinctes                      */
/* -------------------------------------------------------------------------- */

function sectionsFor(sv: Service, city: City, tpl: EditorialTemplate): ContentSection[] {
  const districts = city.districts.slice(0, 4).join(", ");
  const estabs = city.dominantEstablishments;
  const angle = sv.localAngle ?? [];

  switch (tpl) {
    /* ------------------------------------------------ Modèle A — Terrain */
    case "terrain":
      return [
        {
          h2: `Le contexte des cuisines de ${city.name}`,
          body: city.context,
        },
        {
          h2: `Ce que nous traitons ${city.prep}`,
          body: [sv.lead, ...angle.slice(1)],
          list: sv.included,
        },
        {
          h2: "Un exemple d'intervention",
          body: [city.caseStudy.body],
          callout: city.caseStudy.title,
        },
        {
          h2: `Les établissements que nous suivons ${city.prep}`,
          body: [
            `Nous intervenons sur l'ensemble des typologies de cuisine professionnelle, avec une présence marquée sur les secteurs ${districts}.`,
          ],
          list: estabs,
        },
      ];

    /* ---------------------------------------------- Modèle B — Technique */
    case "technique":
      return [
        {
          h2: `La contrainte technique dominante ${city.prep}`,
          body: [city.context[0]],
        },
        {
          h2: "Le repérage, avant toute chose",
          body: [
            `Nous ne chiffrons jamais une intervention ${city.prep} sans avoir identifié la configuration réelle du réseau : tracé, nature du conduit, section, nombre de coudes, trappes de visite disponibles et épaisseur du dépôt.`,
            `C'est ce repérage qui détermine l'outillage. Un conduit métallique récent, un conduit maçonné ancien et une gaine en faux plafond ne se traitent ni avec la même brosse, ni avec la même agressivité.`,
          ],
        },
        {
          h2: `Notre méthode ${city.prep}`,
          body: angle.length ? angle : [sv.lead],
          list: sv.included,
        },
        {
          h2: "Un cas rencontré sur le terrain",
          body: [city.caseStudy.body],
          callout: city.caseStudy.title,
        },
        {
          h2: "Ce que dit le rapport",
          body: [
            `Périmètre traité élément par élément, état avant et après, méthode employée, et mention explicite des zones qui n'ont pas pu être atteintes avec le motif. Sur les configurations contraintes ${city.prep}, ce dernier point n'est pas un détail : c'est ce qui rend le document exact.`,
          ],
        },
      ];

    /* ---------------------------------------------- Modèle C — Sectoriel */
    case "sectoriel":
      return [
        {
          h2: `Qui nous appelle ${city.prep}`,
          body: [city.context[1] ?? city.context[0]],
          list: estabs,
        },
        {
          h2: "Un point technique propre à ce territoire",
          body: [city.constraint],
        },
        {
          h2: `Notre prestation ${city.prep}`,
          body: angle.length ? angle : [sv.lead],
          list: sv.included,
        },
        {
          h2: "Un exemple concret",
          body: [city.caseStudy.body],
          callout: city.caseStudy.title,
        },
        {
          h2: "Quand intervenir",
          body: [
            `Le bon créneau dépend de votre activité. Nous intervenons pendant la coupure de l'après-midi, avant l'ouverture, après le dernier service, de nuit ou un jour de fermeture — et sur les établissements saisonniers, de préférence avant et après la saison, quand le dépôt est encore facile à retirer.`,
          ],
        },
      ];

    /* ------------------------------------------------ Modèle D — Process */
    case "process":
      return [
        {
          h2: "1 — Prise de contact et devis sous 24 h",
          body: [
            `Un échange de quelques minutes suffit à cerner votre installation : type d'établissement, nombre de hottes, dernier entretien connu, contraintes de calendrier. L'envoi de deux ou trois photos permet de chiffrer précisément dès ce stade.`,
          ],
        },
        {
          h2: "2 — Repérage sur site",
          body: [
            `Configuration réelle du réseau, points d'accès, épaisseur des dépôts, état des filtres et des raccords. L'état initial est photographié.`,
            city.constraint,
          ],
        },
        {
          h2: "3 — L'intervention",
          body: angle.length ? angle : [sv.lead],
          list: sv.included,
        },
        {
          h2: "4 — Attestation et suivi",
          body: [
            `Rapport photo avant / après et attestation d'entretien datée, remis le jour même. Puis une préconisation de périodicité fondée sur ce que nous avons réellement constaté dans votre cuisine.`,
          ],
        },
        {
          h2: "Un cas récent",
          body: [city.caseStudy.body],
          callout: city.caseStudy.title,
        },
      ];

    /* --------------------------------------------- Modèle E — Comparatif */
    case "comparatif":
      return [
        {
          h2: "Nettoyage, dégraissage, ramonage : trois périmètres différents",
          body: [
            `Le nettoyage remet le poste en état d'exploitation, filtres compris. Le dégraissage cible les dépôts accumulés et durcis que le nettoyage courant ne retire plus. Le ramonage désigne le traitement intérieur du conduit et du réseau d'extraction.`,
            `Si votre assureur demande un justificatif d'entretien de conduit, c'est le ramonage qui est visé — et une facture de nettoyage de hotte ne conviendra pas.`,
          ],
        },
        {
          h2: `Ce que recouvre précisément cette prestation ${city.prep}`,
          body: angle.length ? angle : [sv.lead],
          list: sv.included,
        },
        {
          h2: `Le marché local ${city.prep}`,
          body: [city.context[0]],
          list: estabs,
        },
        {
          h2: "Un cas d'école",
          body: [city.caseStudy.body],
          callout: city.caseStudy.title,
        },
      ];

    /* -------------------------------------------- Modèle F — Réassurance */
    case "reassurance":
      return [
        {
          h2: "Le document que vous recevez",
          body: [
            `Chaque passage donne lieu à une attestation d'entretien datée : identification de l'établissement, date, périmètre traité élément par élément, méthode employée, et mention explicite des zones qui n'ont pas pu être atteintes avec le motif. Elle est accompagnée d'un rapport photo avant / après.`,
            `C'est ce document que vous présenterez à votre assureur, à un bureau de contrôle ou à un repreneur. Il ne remplace ni une obligation légale ni une vérification réglementaire : il prouve que l'entretien a été réalisé, et détaille ce qui a été fait.`,
          ],
        },
        {
          h2: "Piloter un parc plutôt que subir des demandes",
          body: [city.constraint, city.context[1] ?? city.context[0]],
        },
        {
          h2: `Cette prestation ${city.prep}`,
          body: angle.length ? angle : [sv.lead],
          list: sv.included,
        },
        {
          h2: "Un exemple de mise en place",
          body: [city.caseStudy.body],
          callout: city.caseStudy.title,
        },
      ];
  }
}

/* -------------------------------------------------------------------------- */
/*  CTA — formulation variable selon le modèle                                 */
/* -------------------------------------------------------------------------- */

function ctaFor(sv: Service, city: City, tpl: EditorialTemplate) {
  switch (tpl) {
    case "terrain":
      return {
        ctaTitle: `${sv.nav} ${city.prep} : parlons-en`,
        ctaText: `Décrivez-nous votre installation en quelques minutes. Nous vous rappelons sous 2 h ouvrées et vous recevez un chiffrage détaillé sous 24 h.`,
      };
    case "technique":
      return {
        ctaTitle: `Faire repérer votre réseau ${city.prep}`,
        ctaText: `Le repérage détermine ce qui peut réellement être traité. Nous l'établissons avant de chiffrer, pas pendant l'intervention.`,
      };
    case "sectoriel":
      return {
        ctaTitle: `Une intervention adaptée à votre cuisine`,
        ctaText: `Dites-nous votre mode de cuisson et votre rythme d'activité : nous adaptons la méthode et la périodicité à votre établissement, pas à une moyenne de marché.`,
      };
    case "process":
      return {
        ctaTitle: `Votre devis ${city.prep} sous 24 heures`,
        ctaText: `Un appel de quelques minutes, deux ou trois photos, et vous recevez un chiffrage détaillé poste par poste — sans supplément découvert sur place.`,
      };
    case "comparatif":
      return {
        ctaTitle: `Vous ne savez pas quelle prestation demander ?`,
        ctaText: `Appelez-nous : en quelques minutes nous identifions ce dont votre installation a réellement besoin, et le document que votre assureur attend.`,
      };
    case "reassurance":
      return {
        ctaTitle: `Reprendre la main sur l'entretien de vos sites`,
        ctaText: `Un diagnostic de parc, un état consolidé, un interlocuteur unique. Nous établissons le point de départ, vous reprenez le pilotage.`,
      };
  }
}

/* -------------------------------------------------------------------------- */

export function buildLocalPage(sv: Service, city: City): LocalPage {
  const tpl = templateFor(sv, city);

  // Les questions propres à la ville tournent elles aussi : deux prestations
  // d'une même ville n'affichent pas le même sous-ensemble.
  const start = (offsetOf(sv.slug) * 2) % Math.max(city.faq.length, 1);
  const cityFaq = city.faq.length
    ? [city.faq[start], city.faq[(start + 1) % city.faq.length]]
    : [];

  return {
    h1: `${sv.h1} ${city.prep}`,
    title: titleFor(sv, city, tpl),
    description: descriptionFor(sv, city, tpl),
    eyebrow: `${sv.eyebrow} · ${city.name}`,
    lead: leadFor(sv, city, tpl),
    sections: sectionsFor(sv, city, tpl),
    faq: [...cityFaq, ...localFaqFor(sv, city)],
    template: tpl,
    ...ctaFor(sv, city, tpl),
  };
}
