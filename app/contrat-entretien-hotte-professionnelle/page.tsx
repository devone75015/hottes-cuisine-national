import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, RelatedServices } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Contrat d'entretien de hotte professionnelle | Passages programmés & suivi",
  description:
    "Contrat d'entretien annuel de hotte et de réseau d'extraction : passages programmés, protocole constant, attestation à chaque passage, suivi multisites.",
  path: "/contrat-entretien-hotte-professionnelle/",
  image: "contrat-entretien-hotte-professionnelle",
});

const FAQ = [
  {
    q: "Sur quelle durée s'engage-t-on ?",
    a: "Nos contrats sont annuels et précisent le nombre de passages, le périmètre traité à chaque passage et le tarif de chaque intervention. Les modalités de reconduction et de résiliation figurent au contrat, sans clause de tacite reconduction pluriannuelle.",
  },
  {
    q: "Combien de passages par an faut-il prévoir ?",
    a: "Cela dépend du mode de cuisson dominant, du volume réel, de l'amplitude horaire, de la configuration du réseau et des exigences propres à votre contrat d'assurance. Nous établissons une préconisation après le premier diagnostic, puis nous l'ajustons au vu des passages suivants — à la hausse comme à la baisse.",
  },
  {
    q: "Que se passe-t-il si mon activité change en cours d'année ?",
    a: "Un changement de carte, un agrandissement ou l'ajout d'un poste de cuisson modifient le rythme d'encrassement. Le plan d'entretien est révisé en conséquence, et l'avenant vous est soumis avant application.",
  },
  {
    q: "Puis-je récupérer l'historique de mes interventions ?",
    a: "Oui, à tout moment : attestations, rapports photo et réserves de chaque passage. C'est particulièrement utile en cas de cession d'établissement, de changement d'assureur ou d'audit.",
  },
  {
    q: "Le contrat couvre-t-il plusieurs établissements ?",
    a: "Oui. Sur un parc multisites, vous disposez d'un interlocuteur unique, d'un calendrier consolidé et d'un état de parc unique : date de dernière intervention par site, périmètre traité, réserves ouvertes et prochaine échéance.",
  },
  {
    q: "Les interventions d'urgence sont-elles incluses ?",
    a: "Elles ne sont pas incluses dans le forfait mais bénéficient d'une priorité de planification et du tarif contractuel. C'est l'un des intérêts pratiques du contrat lorsqu'un contrôle ou une réouverture est annoncé à court délai.",
  },
];

export default function ContractPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Contrat d'entretien de hotte professionnelle",
            description:
              "Entretien programmé de hottes et de réseaux d'extraction de cuisine professionnelle, avec attestation et suivi consolidé.",
            path: "/contrat-entretien-hotte-professionnelle/",
          }),
          faqJsonLd(FAQ),
        ]}
      />

      <Breadcrumb
        crumbs={[
          { name: "Contrat d'entretien", path: "/contrat-entretien-hotte-professionnelle/" },
        ]}
      />

      <PageHero
        eyebrow="Récurrence"
        h1="Le contrat d'entretien de hotte professionnelle"
        lead="Une installation suivie se traite en une fraction du temps nécessaire à une remise à niveau. Le contrat n'est pas un abonnement : c'est le moyen de ne jamais repayer un rattrapage."
        meta={
          <>
            <span>Passages programmés</span>
            <span>Attestation à chaque passage</span>
            <span>Suivi multisites</span>
          </>
        }
      />

      <PageBody service="Contrat d'entretien">
        <Cover imageKey="contrat-entretien-hotte-professionnelle" priority />
        <section>
          <h2 className={p.h2}>La logique économique, sans détour</h2>
          <div className="prose">
            <p>
              Une installation traitée pour la première fois après plusieurs années demande une
              intervention lourde : dépôts polymérisés, temps de contact prolongé, action mécanique
              intensive, parfois plusieurs passages. Une installation suivie se traite en une
              fraction de ce temps.
            </p>
            <p>
              L&apos;écart de coût entre les deux situations est considérable, et il s&apos;accroît à chaque
              mois de report. Autrement dit : <strong>plus vous espacez, plus vous payez</strong> —
              non pas par majoration tarifaire, mais parce que le travail à fournir augmente.
            </p>
            <p>
              À cela s&apos;ajoute un effet moins visible mais réel : un réseau maintenu à section
              utile constante ne fait pas forcer l&apos;extracteur, ce qui préserve sa consommation et
              sa durée de vie.
            </p>
          </div>
        </section>

        <section>
          <h2 className={p.h2}>Ce que comprend le contrat</h2>
          <div className={p.cards}>
            <div className={p.card}>
              <span className={p.cardKicker}>Planification</span>
              <h3>Des passages programmés</h3>
              <p>
                Aux dates convenues, sans relance de votre part. Vous êtes prévenu à l&apos;avance et le
                créneau est calé sur votre exploitation.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Méthode</span>
              <h3>Un protocole constant</h3>
              <p>
                Le même déroulé à chaque passage. C&apos;est ce qui rend deux rapports comparables et
                permet de repérer une dérive : un poste qui encrasse plus vite, un raccord qui bouge.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Traçabilité</span>
              <h3>Attestation systématique</h3>
              <p>
                Rapport photo et attestation datée à chaque intervention, avec le périmètre traité et
                les zones sous réserve.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Pilotage</span>
              <h3>Historique consolidé</h3>
              <p>
                Accessible à tout moment. Sur un parc, un état unique : dernière intervention,
                périmètre, réserves ouvertes, prochaine échéance par site.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Réactivité</span>
              <h3>Priorité de planification</h3>
              <p>
                En cas de contrôle annoncé, de réouverture ou de sinistre, les établissements sous
                contrat sont planifiés en priorité, au tarif contractuel.
              </p>
            </div>
            <div className={p.card}>
              <span className={p.cardKicker}>Relation</span>
              <h3>Un interlocuteur unique</h3>
              <p>
                Le même contact pour l&apos;ensemble de vos sites, quel que soit le nombre de régions
                concernées.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className={p.h2}>Déterminer la bonne périodicité</h2>
          <div className="prose">
            <p>
              Il n&apos;existe pas de fréquence universelle. Le rythme dépend du type de cuisson, du
              volume de couverts, des heures de fonctionnement, de la configuration du réseau et des
              exigences propres à votre contrat d&apos;assurance.
            </p>
            <p>
              Nous établissons une préconisation après le premier diagnostic, puis nous l&apos;ajustons à
              la lumière de ce que montrent les passages suivants. Une périodicité correcte est une
              périodicité <strong>vérifiée</strong>, pas une périodicité annoncée à la signature.
            </p>
          </div>

          <div className={p.notice} style={{ marginTop: "var(--s-5)" }}>
            <h3>Sur les obligations d&apos;entretien</h3>
            <p>
              Les exigences de fréquence applicables à votre établissement peuvent découler de votre
              contrat d&apos;assurance et du règlement sanitaire de votre département, dont le contenu
              varie localement. Nous ne nous substituons ni à l&apos;un ni à l&apos;autre.
            </p>
            <p>
              Transmettez-nous les exigences dont vous disposez : nous calons le plan d&apos;entretien
              dessus et adaptons le document remis en conséquence.
            </p>
          </div>
        </section>

        <section>
          <h2 className={p.h2}>Grands comptes et multisites</h2>
          <div className="prose">
            <p>
              Cuisines centrales, collectivités, établissements de santé, restauration d&apos;entreprise,
              groupes et franchises : au-delà d&apos;une dizaine de sites, la difficulté n&apos;est plus
              technique mais organisationnelle.
            </p>
            <p>
              Nous démarrons par un diagnostic de l&apos;ensemble du parc, puis nous établissons un état
              consolidé qui devient votre référence : ce qui a été traité, quand, sur quel périmètre,
              et ce qui reste ouvert. Le reporting suit ensuite le rythme que vous fixez.
            </p>
          </div>
          <p style={{ marginTop: "var(--s-4)" }}>
            <Link href="/nettoyage-reseau-extraction/" className="arrowLink">
              Traitement de réseau complet et suivi de parc
            </Link>
          </p>
        </section>

        <FaqList items={FAQ} />

        <RelatedServices
          slugs={[
            "entretien-hotte-professionnelle",
            "nettoyage-hotte-professionnelle",
            "ramonage-hotte-professionnelle",
          ]}
        />
      </PageBody>

      <CtaBand
        title="Faire établir votre plan d'entretien"
        text="Un diagnostic initial, une préconisation de périodicité, un chiffrage par passage. Vous décidez ensuite."
      />
    </>
  );
}
