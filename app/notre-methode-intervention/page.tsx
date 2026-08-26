import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, RelatedServices } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { method } from "@/data/method";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Notre méthode d'intervention | Protocole en 7 étapes",
  description:
    "Le protocole complet d'une intervention sur hotte et réseau d'extraction : prise de contact, devis, repérage, protection, traitement, contrôle et attestation.",
  path: "/notre-methode-intervention/",
  image: "notre-methode-intervention",
});

const FAQ = [
  {
    q: "Pourquoi un protocole identique à chaque passage ?",
    a: "Parce que c'est la seule manière de rendre deux rapports comparables. Si le déroulé change d'une fois sur l'autre, on ne peut pas savoir si une différence constatée vient de l'installation ou de la méthode. Un protocole constant permet de repérer une dérive réelle : un poste qui encrasse plus vite, un raccord qui a bougé, un filtre qui se dégrade.",
  },
  {
    q: "Que se passe-t-il si vous découvrez un problème pendant l'intervention ?",
    a: "Nous vous en informons immédiatement, nous le photographions et nous le consignons dans le rapport avec une préconisation. Nous ne réalisons aucun travail supplémentaire non prévu au devis sans votre accord explicite.",
  },
  {
    q: "Combien de techniciens interviennent ?",
    a: "Cela dépend de l'ampleur du chantier. Une hotte simple mobilise généralement un technicien, une remise à niveau complète ou une cuisine centrale une équipe. L'effectif prévu figure au devis, avec la durée estimée.",
  },
  {
    q: "Intervenez-vous avec vos propres bacs de trempage ?",
    a: "Oui, ainsi qu'avec l'ensemble du matériel : produits, outillage de rotobrossage, protections, moyens de récupération des résidus. Aucun espace de stockage n'est requis chez vous.",
  },
];

export default function MethodPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Breadcrumb crumbs={[{ name: "Notre méthode", path: "/notre-methode-intervention/" }]} />

      <PageHero
        eyebrow="Protocole"
        h1="Notre méthode d'intervention, en sept étapes"
        lead="Le même déroulé à chaque passage, du premier appel à la remise de l'attestation. C'est ce qui rend une intervention prévisible, un devis tenable et deux rapports comparables."
        meta={
          <>
            <span>7 étapes</span>
            <span>Protocole constant</span>
            <span>Rapport photo systématique</span>
          </>
        }
      />

      <PageBody>
        <Cover imageKey="notre-methode-intervention" priority />
        <section>
          <h2 className={p.h2}>Le déroulé complet</h2>
          <ol className={p.timeline}>
            {method.map((m) => (
              <li key={m.n} className={p.step}>
                <span className={p.stepN}>Étape {m.n}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className={p.h2}>Ce que nous nous interdisons</h2>
          <ul className={p.checks}>
            <li>
              Facturer le traitement d&apos;un réseau dont nous savons, avant l&apos;intervention, qu&apos;il ne
              pourra pas être atteint.
            </li>
            <li>
              Remettre une attestation laissant croire qu&apos;un conduit fermé a été traité sur toute
              sa longueur.
            </li>
            <li>
              Pousser les résidus décollés plus loin dans le réseau faute de pouvoir les récupérer.
            </li>
            <li>
              Découvrir un supplément le jour de l&apos;intervention alors que l&apos;incertitude était
              connue au moment du devis.
            </li>
            <li>
              Vendre un dégraissage à un exploitant dont le problème d&apos;aspiration relève en réalité
              de la compensation d&apos;air ou du dimensionnement du réseau.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={p.h2}>Le matériel que nous apportons</h2>
          <div className={p.cards}>
            <div className={p.card}>
              <span className={p.cardKicker}>Filtres</span>
              <h3>Bacs de trempage</h3>
              <p>
                Trempage en bac dégraissant chaud, sur place. Le temps de contact fait une grande
                partie du travail — ce qu&apos;un passage au jet ne reproduit pas.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Réseau</span>
              <h3>Rotobrossage motorisé</h3>
              <p>
                Brosses sur flexible, en nylon ou en acier selon le support, dimensionnées au
                diamètre réel du conduit.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Produits</span>
              <h3>Dégraissants alcalins</h3>
              <p>
                Compatibles avec un environnement de production alimentaire, intégralement rincés.
                Fiches de données de sécurité disponibles sur demande.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Protection</span>
              <h3>Bâchage et confinement</h3>
              <p>
                Protection intégrale du poste de cuisson et confinement de la zone avant toute
                ouverture du réseau.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Contrôle</span>
              <h3>Caméra d&apos;inspection</h3>
              <p>
                Lorsque la configuration du réseau s&apos;y prête. C&apos;est le meilleur moyen d&apos;objectiver
                l&apos;état avant et après.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Évacuation</span>
              <h3>Récupération des résidus</h3>
              <p>
                Conditionnement et évacuation par nos soins, conformément à la réglementation
                applicable aux déchets d&apos;activité.
              </p>
            </div>
          </div>
        </section>

        <FaqList items={FAQ} />

        <RelatedServices
          slugs={[
            "nettoyage-hotte-professionnelle",
            "degraissage-hotte-professionnelle",
            "ramonage-hotte-professionnelle",
          ]}
        />
      </PageBody>

      <CtaBand />
    </>
  );
}
