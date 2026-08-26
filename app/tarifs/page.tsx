import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { PriceTable } from "@/components/blocks/PriceTable";
import { nettoyagePrices, priceFactors, ramonagePrices } from "@/data/pricing";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Tarifs | Nettoyage, dégraissage et ramonage de hotte professionnelle",
  description:
    "Tarification du nettoyage, du dégraissage et du ramonage de hottes de cuisine professionnelle : ce qui fait varier un devis et comment nous chiffrons.",
  path: "/tarifs/",
  image: "tarifs",
});

const FAQ = [
  {
    q: "Pratiquez-vous des tarifs différents selon les régions ?",
    a: "Les conditions d'intervention varient — accessibilité, contraintes de stationnement, créneaux imposés — et cela se reflète dans le devis. Le tarif horaire de nos équipes, lui, ne varie pas d'une région à l'autre.",
  },
  {
    q: "Y a-t-il un montant minimum d'intervention ?",
    a: "Toute intervention mobilise un déplacement, une équipe, du matériel et une mise en place. Il existe donc un seuil en dessous duquel un déplacement isolé n'est pas viable. Sur les petites installations, nous privilégions le regroupement en tournée, ce qui permet de rester accessible.",
  },
  {
    q: "Les tarifs sont-ils négociables sur un parc multisites ?",
    a: "Oui. Un parc permet de planifier des tournées, de mutualiser les déplacements et de réduire le temps de mise en place par site. C'est un vrai levier tarifaire, contrairement à une remise commerciale sans contrepartie opérationnelle.",
  },
  {
    q: "Comment se passe le règlement ?",
    a: "Facturation après intervention, aux conditions convenues au devis. Les modalités de paiement sont précisées sur le devis et sur la facture.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Breadcrumb crumbs={[{ name: "Tarifs", path: "/tarifs/" }]} />

      <PageHero
        eyebrow="Tarification"
        h1="Nos principes de tarification"
        lead="Nous n'affichons pas de tarif unique, parce qu'aucune installation n'est identique à une autre. En revanche, nous expliquons précisément ce qui fait varier un devis — et nous chiffrons sous 24 heures."
        meta={
          <>
            <span>Devis gratuit</span>
            <span>Chiffrage poste par poste</span>
            <span>Sans supplément découvert</span>
          </>
        }
      />

      <PageBody>
        <Cover imageKey="tarifs" priority />
        <section>
          <h2 className={p.h2}>Trois engagements sur le chiffrage</h2>
          <ul className={p.checks}>
            <li>
              <strong>Le devis détaille le périmètre.</strong> Ce qui sera traité, élément par
              élément, et ce qui ne pourra pas l&apos;être si votre réseau comporte des zones
              inaccessibles.
            </li>
            <li>
              <strong>Les incertitudes sont annoncées.</strong> Si l&apos;accessibilité du conduit ne
              peut pas être établie avant l&apos;intervention, l&apos;impact chiffré figure au devis — jamais
              découvert le jour J.
            </li>
            <li>
              <strong>Rien n&apos;est ajouté sans accord.</strong> Un filtre à remplacer, une trappe à
              poser, un raccord à reprendre : nous le photographions, nous le chiffrons à part, vous
              décidez.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={p.h2}>Nettoyage et dégraissage de hotte</h2>
          <PriceTable lines={nettoyagePrices} caption="Configurations de nettoyage de hotte" />
          <p style={{ marginTop: "var(--s-4)" }}>
            <Link href="/prix-nettoyage-hotte-restaurant/" className="arrowLink">
              Le détail des facteurs de prix en restauration
            </Link>
          </p>
        </section>

        <section>
          <h2 className={p.h2}>Ramonage de conduit et de réseau</h2>
          <PriceTable lines={ramonagePrices} caption="Configurations de ramonage de conduit" />
          <p style={{ marginTop: "var(--s-4)" }}>
            <Link href="/prix-ramonage-hotte-restaurant/" className="arrowLink">
              Le détail des variables d&apos;un ramonage
            </Link>
          </p>
        </section>

        <section>
          <h2 className={p.h2}>Ce qui fait varier un devis</h2>
          <div className={p.cards}>
            {priceFactors.map((f) => (
              <div key={f.title} className={p.card}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={p.notice}>
          <h3>Contrat d&apos;entretien</h3>
          <p>
            Un passage d&apos;entretien sur une installation suivie coûte nettement moins qu&apos;une remise
            à niveau. Le contrat annuel précise le nombre de passages, le périmètre traité et le
            tarif de chaque intervention, ce qui rend la dépense prévisible sur l&apos;exercice.
          </p>
          <p>
            <Link href="/contrat-entretien-hotte-professionnelle/" className="arrowLink">
              Voir le contrat d&apos;entretien
            </Link>
          </p>
        </div>

        <FaqList items={FAQ} />
      </PageBody>

      <CtaBand />
    </>
  );
}
