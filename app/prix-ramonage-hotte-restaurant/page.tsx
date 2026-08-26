import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, RelatedServices } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { PriceTable } from "@/components/blocks/PriceTable";
import { ramonagePrices } from "@/data/pricing";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Prix d'un ramonage de hotte de restaurant | Ce qui pèse sur le devis",
  description:
    "Prix d'un ramonage de conduit de hotte de restaurant : longueur du réseau, nombre de coudes, présence de trappes de visite et épaisseur du dépôt. Devis gratuit sous 24 h.",
  path: "/prix-ramonage-hotte-restaurant/",
  image: "prix-ramonage-hotte-restaurant",
});

const FAQ = [
  {
    q: "Pourquoi le ramonage d'un conduit coûte-t-il plus cher que le nettoyage d'une hotte ?",
    a: "Parce qu'il mobilise un outillage différent — brosses motorisées sur flexible, moyens de récupération des résidus, parfois caméra d'inspection — et parce que la matière à retirer est de la graisse polymérisée, qui ne se rince pas. La durée d'intervention est également plus difficile à estimer sans repérage préalable.",
  },
  {
    q: "L'absence de trappes de visite augmente-t-elle le prix ?",
    a: "Elle réduit le périmètre traitable plutôt qu'elle n'augmente le prix de l'intervention elle-même. En revanche, elle rend chaque passage moins complet et plus long à préparer, et elle vous prive d'une attestation couvrant l'ensemble du réseau. La pose de trappes se rentabilise généralement en quelques passages.",
  },
  {
    q: "L'accès en toiture est-il facturé en plus ?",
    a: "Il est intégré au devis lorsque l'accès est sécurisé et conforme. Les interventions nécessitant des moyens d'accès particuliers — nacelle, échafaudage, plan de prévention spécifique — font l'objet d'une ligne distincte, annoncée avant l'intervention.",
  },
  {
    q: "Peut-on coupler ramonage et nettoyage de hotte ?",
    a: "C'est même l'option la plus économique : un seul déplacement, une seule mise en place, une seule protection de zone. Traiter le conduit six mois après la hotte coûte davantage et laisse la première partie se recharger entre-temps.",
  },
];

export default function PriceRamonagePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Breadcrumb
        crumbs={[
          { name: "Ramonage de hotte", path: "/ramonage-hotte-professionnelle/" },
          { name: "Prix", path: "/prix-ramonage-hotte-restaurant/" },
        ]}
      />

      <PageHero
        eyebrow="Tarifs"
        h1="Prix d'un ramonage de hotte de restaurant"
        lead="Le prix d'un ramonage de conduit dépend d'abord d'une chose : la longueur de réseau réellement traitable. C'est le repérage qui l'établit, et c'est pourquoi aucun chiffrage sérieux ne se fait totalement à l'aveugle."
        meta={
          <>
            <span>Devis gratuit</span>
            <span>Attestation remise</span>
            <span>Périmètre annoncé à l&apos;avance</span>
          </>
        }
      />

      <PageBody service="Ramonage de conduit">
        <Cover imageKey="prix-ramonage-hotte-restaurant" priority />
        <section>
          <h2 className={p.h2}>Les quatre variables déterminantes</h2>
          <div className={p.cards}>
            <div className={p.card}>
              <span className={p.cardKicker}>Variable 01</span>
              <h3>La longueur du réseau</h3>
              <p>
                Un conduit de 6 mètres et un réseau de 40 mètres avec piquages ne se traitent pas
                dans le même temps ni avec le même volume de produit.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Variable 02</span>
              <h3>Le nombre de coudes</h3>
              <p>
                Chaque changement de direction est un point d&apos;accumulation qui demande un
                traitement individualisé, souvent manuel, depuis l&apos;accès le plus proche.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Variable 03</span>
              <h3>Les trappes de visite</h3>
              <p>
                Leur présence, leur position et leur état d&apos;ouverture déterminent ce qui peut être
                atteint. C&apos;est la première chose que nous vérifions.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Variable 04</span>
              <h3>L&apos;épaisseur du dépôt</h3>
              <p>
                Une croûte polymérisée de plusieurs millimètres demande un temps de contact prolongé
                et plusieurs passages mécaniques. Un dépôt récent se retire beaucoup plus vite.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className={p.h2}>Les configurations types</h2>
          <PriceTable lines={ramonagePrices} caption="Configurations de ramonage de conduit" />
          <div className={p.notice} style={{ marginTop: "var(--s-5)" }}>
            <h3>Ce que nous chiffrons, et ce que nous ne chiffrons pas</h3>
            <p>
              Nous ne facturons jamais le traitement d&apos;un réseau dont nous savons, avant
              l&apos;intervention, qu&apos;il ne pourra pas être atteint. Le périmètre réellement traitable
              figure au devis, avec les zones exclues et leur motif.
            </p>
            <p>
              Lorsque la pose de trappes de visite est pertinente, elle fait l&apos;objet d&apos;un devis
              distinct : vous décidez de la réaliser ou non, sans que cela conditionne
              l&apos;intervention d&apos;entretien.
            </p>
          </div>
        </section>

        <section>
          <h2 className={p.h2}>Le calcul des trappes de visite</h2>
          <div className="prose">
            <p>
              La pose de trappes représente un investissement ponctuel. En regard, chaque
              intervention ultérieure devient plus rapide — donc moins chère — et surtout plus
              complète.
            </p>
            <p>
              Sur un réseau entretenu deux fois par an, l&apos;écart de temps d&apos;intervention compense
              généralement le coût de pose en quelques passages. Sur un réseau long ou très coudé,
              l&apos;écart est encore plus net.
            </p>
          </div>
          <p style={{ marginTop: "var(--s-4)" }}>
            <Link href="/expertise/trappes-de-visite-conduit-extraction/" className="arrowLink">
              Pourquoi un conduit non visitable coûte plus cher
            </Link>
          </p>
        </section>

        <FaqList items={FAQ} />

        <RelatedServices
          slugs={[
            "ramonage-hotte-restaurant",
            "ramonage-conduit-hotte",
            "ramonage-conduit-extraction",
          ]}
        />
      </PageBody>

      <CtaBand
        title="Faire repérer et chiffrer votre réseau"
        text="Indiquez-nous la configuration de votre conduit — longueur approximative, coudes, trappes éventuelles. Vous recevez un chiffrage sous 24 heures."
      />
    </>
  );
}
