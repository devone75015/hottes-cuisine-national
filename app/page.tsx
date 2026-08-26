import Link from "next/link";
import type { Metadata } from "next";
import { ExtractionDiagram } from "@/components/blocks/ExtractionDiagram";
import { QuoteForm } from "@/components/blocks/QuoteForm";
import { ZoneFinder } from "@/components/blocks/ZoneFinder";
import { CtaBand, FaqList, ProofBar } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover, Thumb } from "@/components/ui/Cover";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/data/articles";
import { establishments } from "@/data/establishments";
import { method } from "@/data/method";
import { regions } from "@/data/regions";
import { pillars } from "@/data/services";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import s from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title:
    "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle — partout en France",
  description:
    "Spécialiste national de la hotte professionnelle et de son réseau d'extraction : nettoyage, dégraissage, ramonage de conduit. Devis sous 24 h, attestation remise.",
  path: "/",
  image: "home-og",
});

const HOME_FAQ = [
  {
    q: "Quelle est la différence entre nettoyage, dégraissage et ramonage d'une hotte ?",
    a: "Le nettoyage remet le poste en état d'exploitation, filtres compris. Le dégraissage cible les dépôts accumulés et durcis que le nettoyage courant ne retire plus. Le ramonage désigne le traitement intérieur du conduit et du réseau d'extraction. Si votre assureur demande un justificatif d'entretien de conduit, c'est le ramonage qui est visé.",
  },
  {
    q: "Combien coûte le nettoyage d'une hotte de restaurant ?",
    a: "Cinq facteurs déterminent le prix : le nombre et la longueur des hottes, le type et la quantité de filtres, l'état d'encrassement, l'accessibilité du plénum et du conduit, et le créneau horaire demandé. Nous établissons un devis gratuit sous 24 h après un échange de quelques minutes.",
  },
  {
    q: "À quelle fréquence faut-il entretenir une hotte professionnelle ?",
    a: "Il n'existe pas de fréquence universelle : le rythme dépend du mode de cuisson, du volume réel, de l'amplitude horaire, de la configuration du réseau et des exigences de votre contrat d'assurance. Nous établissons une préconisation après le premier diagnostic, puis nous l'ajustons au vu des passages suivants.",
  },
  {
    q: "Faut-il fermer la cuisine pendant l'intervention ?",
    a: "Non. Nous intervenons pendant la coupure de l'après-midi, avant l'ouverture, après le dernier service, de nuit ou un jour de fermeture. Le poste de cuisson est protégé pendant toute la durée des travaux et restitué prêt à l'emploi.",
  },
  {
    q: "Quel document recevons-nous après l'intervention ?",
    a: "Une attestation d'entretien datée précisant l'établissement, le périmètre traité élément par élément, la méthode employée et les zones qui n'ont pas pu être atteintes, accompagnée d'un rapport photo avant / après.",
  },
  {
    q: "Intervenez-vous partout en France ?",
    a: "Oui, sur l'ensemble du territoire métropolitain. Nos équipes sont organisées par région, ce qui nous permet de traiter aussi bien un restaurant indépendant qu'un parc multisites réparti sur plusieurs départements.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(HOME_FAQ)} />

      {/* ---------------- 01 · Hero ---------------- */}
      <section className={s.hero}>
        <div className={`container ${s.heroInner}`}>
          <div className={s.heroCopy}>
            <p className="eyebrow">Spécialiste hotte &amp; extraction — réseau national</p>
            <h1>
              Nettoyage, dégraissage et ramonage de <em>hottes de cuisine professionnelle</em>
            </h1>
            <p className={s.heroLead}>
              Nous ne faisons que cela. De la hotte au rejet en toiture, nous traitons l&apos;intégralité
              du réseau d&apos;extraction de votre cuisine — filtres, plénum, conduits, gaines et
              extracteur — et nous vous remettons l&apos;attestation qui le prouve.
            </p>

            <div className={s.heroActions}>
              <a href={`tel:${site.phone.href}`} className="btn btn--lg">
                <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16">
                  <path
                    d="M3 1.5h2.4l1.2 3-1.5 1.1a9 9 0 0 0 4.3 4.3l1.1-1.5 3 1.2V12a2 2 0 0 1-2.2 2A12.5 12.5 0 0 1 1 3.7 2 2 0 0 1 3 1.5Z"
                    fill="currentColor"
                  />
                </svg>
                {site.phone.display}
              </a>
              <Link href="/devis-nettoyage-hotte/" className="btn btn--lg btn--ghost">
                Devis en 2 minutes
              </Link>
            </div>

            <div className={s.heroFinder}>
              <ZoneFinder />
            </div>
          </div>

          <div className={s.heroForm}>
            <QuoteForm compact />
          </div>
        </div>

        <div className={`container ${s.heroMedia}`}>
          <Cover imageKey="home-hero" priority caption={false} />
        </div>
      </section>

      {/* ---------------- 02 · Réassurance ---------------- */}
      <ProofBar />

      {/* ---------------- 03 · Les 4 prestations ---------------- */}
      <section className={`container ${s.services}`}>
        <div className="sectionHead">
          <p className="eyebrow">Nos quatre métiers</p>
          <h2>Une chaîne technique, quatre interventions distinctes</h2>
          <p>
            Chaque prestation a son périmètre, son outillage et son document. Choisir la bonne évite
            de payer une intervention qui ne répond pas à votre besoin.
          </p>
        </div>

        <ul className={s.serviceGrid}>
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 70}>
              <Link href={`/${p.slug}/`} className={s.serviceCard}>
                <Thumb imageKey={p.slug} className={s.serviceThumb} />
                <span className={s.serviceIndex}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.nav}</h3>
                <p>{p.lead}</p>
                <span className="arrowLink">Voir la prestation</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------------- 04 · Le réseau en coupe (pièce signature) ---------------- */}
      <section className={`container ${s.diagram}`}>
        <ExtractionDiagram />
      </section>

      {/* ---------------- 05 · Votre établissement ---------------- */}
      <section className={s.establishments}>
        <div className="container">
          <div className="sectionHead">
            <p className="eyebrow eyebrow--air">Votre activité</p>
            <h2>Chaque cuisine encrasse son réseau différemment</h2>
            <p>
              Une friterie, une boulangerie et une cuisine centrale n&apos;ont ni le même dépôt, ni le
              même rythme, ni les mêmes contraintes d&apos;intervention.
            </p>
          </div>
          <ul className={s.estabGrid}>
            {establishments.map((e) => (
              <li key={e.name}>
                <Link href={e.href}>
                  <Thumb imageKey={e.imageKey} className={s.estabThumb} />
                  <span className={s.estabName}>{e.name}</span>
                  <span className={s.estabNote}>{e.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- 06 · Pourquoi un spécialiste ---------------- */}
      <section className={`container ${s.why}`}>
        <div className={s.whyCopy}>
          <p className="eyebrow">Spécialiste, pas généraliste</p>
          <h2>Ce qu&apos;une entreprise de propreté ne peut pas faire</h2>
          <p className="prose">
            Une société de nettoyage classique traite ce qu&apos;elle voit. Le réseau d&apos;extraction
            d&apos;une cuisine professionnelle demande autre chose : ouvrir, traiter et refermer un
            système, avec l&apos;outillage correspondant et la capacité de documenter précisément ce qui
            a été fait.
          </p>
        </div>

        <Cover imageKey="home-why" className={s.whyMedia} />

        <div className={s.whyTable}>
          {[
            { k: "Périmètre", a: "Surfaces visibles", b: "Hotte, plénum, conduit, gaines, extracteur" },
            { k: "Filtres", a: "Rinçage sur place", b: "Trempage en bac dégraissant, contrôle mécanique" },
            { k: "Conduit", a: "Non traité", b: "Rotobrossage dimensionné, traitement des coudes" },
            { k: "Produits", a: "Détergents courants", b: "Dégraissants alcalins agroalimentaires" },
            { k: "Document remis", a: "Bon d'intervention", b: "Attestation détaillée + rapport photo" },
            { k: "Zones inaccessibles", a: "Non mentionnées", b: "Listées avec le motif" },
          ].map((r) => (
            <div key={r.k} className={s.whyRow}>
              <span className={s.whyKey}>{r.k}</span>
              <span className={s.whyA}>{r.a}</span>
              <span className={s.whyB}>{r.b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 07 · Notre méthode ---------------- */}
      <section className={s.method}>
        <div className="container">
          <div className="sectionHead">
            <p className="eyebrow">Protocole</p>
            <h2>Notre intervention, en sept étapes</h2>
            <p>Le même déroulé à chaque passage — c&apos;est ce qui rend deux rapports comparables.</p>
          </div>

          <ol className={s.steps}>
            {method.map((m, i) => (
              <Reveal as="li" key={m.n} delay={i * 50}>
                <span className={s.stepN}>{m.n}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </Reveal>
            ))}
          </ol>

          <Link href="/notre-methode-intervention/" className="arrowLink">
            Le détail de notre protocole
          </Link>
        </div>
      </section>

      {/* ---------------- 08 · Couverture nationale ---------------- */}
      <section className={`container ${s.coverage}`}>
        <div className="sectionHead">
          <p className="eyebrow">Couverture</p>
          <h2>Treize régions, quatre-vingt-seize départements</h2>
          <p>
            Nos équipes sont organisées par région. Un interlocuteur unique, que vous ayez un
            établissement ou trente répartis sur plusieurs départements.
          </p>
        </div>

        <ul className={s.regionGrid}>
          {regions.map((r) => (
            <li key={r.slug}>
              <Link href={`/zones/${r.slug}/`}>
                <span className={s.regionName}>{r.shortName}</span>
                <span className={s.regionMeta}>
                  {r.departments.length} départements · {r.cities.slice(0, 3).join(", ")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- 09 · Contrat & grands comptes ---------------- */}
      <section className={s.contract}>
        <div className={`container ${s.contractInner}`}>
          <Reveal className={s.contractCard}>
            <p className="eyebrow">Récurrence</p>
            <h2>Le contrat d&apos;entretien</h2>
            <p>
              Une installation suivie se traite en une fraction du temps nécessaire à une remise à
              niveau. Passages programmés sans relance, protocole constant, attestation à chaque
              passage, historique consolidé.
            </p>
            <Link href="/contrat-entretien-hotte-professionnelle/" className="btn">
              Voir le contrat d&apos;entretien
            </Link>
          </Reveal>

          <Reveal className={s.contractCard} delay={90}>
            <p className="eyebrow eyebrow--air">Grands comptes</p>
            <h2>Cuisines centrales &amp; multisites</h2>
            <p>
              Cuisines centrales, collectivités, établissements de santé, restauration d&apos;entreprise :
              planification par zone, continuité d&apos;activité, traçabilité documentaire et reporting
              consolidé sur l&apos;ensemble du parc.
            </p>
            <Link href="/nettoyage-systeme-extraction-cuisine-professionnelle/" className="btn btn--ghost">
              Traitement du réseau complet
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 10 · FAQ ---------------- */}
      <section className={`container ${s.faqSection}`}>
        <FaqList items={HOME_FAQ} title="Les questions que l'on nous pose le plus" />
      </section>

      {/* ---------------- 11 · Centre d'expertise ---------------- */}
      <section className={`container ${s.expertise}`}>
        <div className="sectionHead">
          <p className="eyebrow">Centre d&apos;expertise</p>
          <h2>Comprendre avant de décider</h2>
        </div>
        <ul className={s.articleGrid}>
          {articles.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <Link href={`/expertise/${a.slug}/`}>
                <Thumb imageKey={`article-${a.slug}`} className={s.articleThumb} />
                <span className={s.articleCat}>{a.category}</span>
                <span className={s.articleTitle}>{a.title}</span>
                <span className={s.articleExcerpt}>{a.excerpt}</span>
                <span className={s.articleMeta}>{a.readingTime} min de lecture</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/expertise/" className="arrowLink">
          Tous les articles
        </Link>
      </section>

      {/* ---------------- 12 · CTA final ---------------- */}
      <CtaBand />
    </>
  );
}
