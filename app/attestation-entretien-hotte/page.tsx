import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, RelatedServices } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Attestation d'entretien de hotte | Ce que contient le document",
  description:
    "Que contient une attestation d'entretien de hotte et de conduit d'extraction, à quoi elle sert face à un assureur ou un contrôle, et ce qu'elle ne prouve pas.",
  path: "/attestation-entretien-hotte/",
  image: "attestation-entretien-hotte",
});

const FAQ = [
  {
    q: "Une attestation d'entretien vaut-elle certificat de conformité ?",
    a: "Non, et il faut être clair sur ce point. Une attestation d'entretien atteste qu'une intervention a été réalisée, à une date donnée, sur un périmètre décrit. Elle ne se substitue à aucune vérification réglementaire, à aucun contrôle technique et à aucune obligation qui pourrait vous incomber. Elle prouve l'entretien, pas la conformité de l'installation.",
  },
  {
    q: "Mon assureur demande un certificat de ramonage : votre document convient-il ?",
    a: "Les exigences de forme varient d'une compagnie à l'autre. Transmettez-nous celles qui figurent dans votre contrat avant l'intervention : nous adaptons le document en conséquence. Dans le cas contraire, vous risquez de recevoir un document techniquement exact mais qui ne correspond pas au format attendu.",
  },
  {
    q: "Pourquoi mentionner les zones non traitées ?",
    a: "Parce que c'est ce qui rend le document exact. Un réseau sans trappe de visite ne peut pas être traité sur toute sa longueur. Une attestation qui passerait cette limite sous silence vous exposerait au moment précis où vous auriez besoin qu'elle tienne.",
  },
  {
    q: "Combien de temps faut-il conserver ces documents ?",
    a: "La durée de conservation dépend de vos obligations propres et des exigences de votre assureur. En pratique, nous recommandons de conserver l'ensemble de l'historique : c'est ce que demandent un repreneur lors d'une cession et un nouvel assureur lors d'un changement de contrat. Nous conservons de notre côté une copie que vous pouvez nous demander à tout moment.",
  },
];

export default function AttestationPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Breadcrumb
        crumbs={[{ name: "Attestation d'entretien", path: "/attestation-entretien-hotte/" }]}
      />

      <PageHero
        eyebrow="Traçabilité"
        h1="L'attestation d'entretien de hotte"
        lead="C'est le document que vous conservez, que vous présentez à votre assureur et que vous transmettez à un repreneur. Il mérite d'être précis — y compris sur ce qui n'a pas pu être traité."
        meta={
          <>
            <span>Remise le jour même</span>
            <span>Rapport photo joint</span>
            <span>Historique conservé</span>
          </>
        }
      />

      <PageBody>
        <Cover imageKey="attestation-entretien-hotte" priority />
        <section>
          <h2 className={p.h2}>Ce que contient le document</h2>
          <ul className={p.checks}>
            <li>
              <strong>L&apos;identification de l&apos;établissement</strong> : raison sociale, adresse
              d&apos;intervention, interlocuteur présent.
            </li>
            <li>
              <strong>La date et les horaires</strong> de l&apos;intervention.
            </li>
            <li>
              <strong>Le périmètre traité, élément par élément</strong> : hotte, filtres, plénum,
              conduit, gaines, extracteur, rejet — chacun coché ou non, jamais un « ensemble du
              système » sans détail.
            </li>
            <li>
              <strong>La méthode employée</strong> par zone : trempage, dégraissage chimique,
              rotobrossage, retrait manuel.
            </li>
            <li>
              <strong>Les zones non accessibles</strong>, avec le motif : absence de trappe de
              visite, conduit encastré, accès en toiture non autorisé.
            </li>
            <li>
              <strong>Les réserves et préconisations</strong> : filtres à remplacer, trappes à poser,
              raccord à reprendre.
            </li>
            <li>
              <strong>Le rapport photo avant / après</strong>, daté, zone par zone.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={p.h2}>À quoi il sert vraiment</h2>
          <div className={p.cards}>
            <div className={p.card}>
              <span className={p.cardKicker}>Assurance</span>
              <h3>Justifier l&apos;entretien</h3>
              <p>
                Beaucoup de contrats comportent des exigences d&apos;entretien du réseau d&apos;extraction.
                L&apos;attestation est la pièce qui documente leur respect.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Exploitation</span>
              <h3>Alimenter votre dossier</h3>
              <p>
                Elle se classe dans votre dossier d&apos;exploitation, aux côtés de vos autres documents
                techniques et sanitaires.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Cession</span>
              <h3>Rassurer un repreneur</h3>
              <p>
                Un historique d&apos;entretien complet est un actif lors d&apos;une cession : il évite au
                repreneur de découvrir un réseau dont personne ne connaît l&apos;état.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Suivi</span>
              <h3>Comparer dans le temps</h3>
              <p>
                Deux attestations issues du même protocole se comparent. C&apos;est ainsi qu&apos;on repère
                une dérive avant qu&apos;elle ne devienne un problème.
              </p>
            </div>
          </div>
        </section>

        <div className={p.notice}>
          <h3>Ce que l&apos;attestation ne fait pas</h3>
          <p>
            Elle n&apos;atteste ni de la conformité de votre installation, ni du respect d&apos;une
            obligation réglementaire particulière. Elle documente une intervention d&apos;entretien : sa
            date, son périmètre et sa méthode.
          </p>
          <p>
            Les obligations applicables à votre établissement dépendent de son classement, de son
            activité, du règlement sanitaire de votre département et de votre contrat d&apos;assurance.
            Nous vous invitons à les vérifier auprès de ces sources, qui sont les seules faisant
            autorité — et nous adaptons ensuite le document à ce qu&apos;elles exigent.
          </p>
        </div>

        <FaqList items={FAQ} />

        <RelatedServices
          slugs={[
            "ramonage-hotte-professionnelle",
            "entretien-hotte-professionnelle",
            "nettoyage-hotte-restaurant",
          ]}
        />
      </PageBody>

      <CtaBand
        title="Obtenir une attestation pour votre établissement"
        text="Transmettez-nous les exigences de votre assureur avant l'intervention : nous adaptons le document remis en conséquence."
      />
    </>
  );
}
