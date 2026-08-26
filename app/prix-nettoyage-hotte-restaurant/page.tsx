import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, RelatedServices } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { PriceTable } from "@/components/blocks/PriceTable";
import { nettoyagePrices, priceFactors } from "@/data/pricing";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Prix d'un nettoyage de hotte de restaurant | Ce qui fait varier la facture",
  description:
    "Prix d'un nettoyage de hotte de restaurant : les six facteurs qui déterminent le devis et l'écart entre première intervention et passage d'entretien.",
  path: "/prix-nettoyage-hotte-restaurant/",
  image: "prix-nettoyage-hotte-restaurant",
});

const FAQ = [
  {
    q: "Pourquoi ne pas afficher un tarif fixe ?",
    a: "Parce qu'un tarif fixe affiché sans connaître l'installation est soit surévalué pour se protéger, soit sous-évalué et complété par des suppléments le jour de l'intervention. Les deux pratiques existent. Nous préférons expliquer ce qui fait varier le prix et chiffrer précisément après un échange de quelques minutes.",
  },
  {
    q: "La première intervention coûte-t-elle plus cher ?",
    a: "Presque toujours, sur une installation jamais traitée. Le dépôt a polymérisé, ce qui impose un temps de contact prolongé et une action mécanique intensive. Une fois l'installation remise à niveau, les passages suivants demandent nettement moins de temps — c'est l'écart qui rend le contrat d'entretien économiquement intéressant.",
  },
  {
    q: "Le devis peut-il évoluer une fois sur place ?",
    a: "Non, sauf si l'installation réelle diffère de ce qui nous a été décrit. Les incertitudes connues au moment du devis — accessibilité du réseau notamment — y figurent explicitement avec leur impact chiffré.",
  },
  {
    q: "Les filtres à remplacer sont-ils compris dans le prix ?",
    a: "Le nettoyage des filtres est compris. Leur remplacement ne l'est pas : nous photographions les filtres concernés et vous soumettons un chiffrage séparé, que vous validez ou non.",
  },
  {
    q: "Facturez-vous le déplacement ?",
    a: "Le déplacement est intégré au devis, pas ajouté après coup. Sur les secteurs éloignés de nos bases, nous regroupons les interventions par tournée, ce qui permet de maintenir des conditions tarifaires cohérentes.",
  },
];

export default function PricePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Breadcrumb
        crumbs={[
          { name: "Nettoyage de hotte", path: "/nettoyage-hotte-professionnelle/" },
          { name: "Prix", path: "/prix-nettoyage-hotte-restaurant/" },
        ]}
      />

      <PageHero
        eyebrow="Tarifs"
        h1="Prix d'un nettoyage de hotte de restaurant"
        lead="Refuser de parler prix envoie le client chez le concurrent qui en parle. Voici donc, sans détour, ce qui détermine le montant d'un devis de nettoyage de hotte — et pourquoi deux restaurants voisins peuvent recevoir des chiffrages très différents."
        meta={
          <>
            <span>Devis gratuit</span>
            <span>Chiffrage sous 24 h</span>
            <span>Sans supplément découvert</span>
          </>
        }
      />

      <PageBody service="Nettoyage de hotte">
        <Cover imageKey="prix-nettoyage-hotte-restaurant" priority />
        <section>
          <h2 className={p.h2}>Les six facteurs qui déterminent le prix</h2>
          <div className={p.cards}>
            {priceFactors.map((f, i) => (
              <div key={f.title} className={p.card}>
                <span className={p.cardKicker}>Facteur {String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={p.h2}>Les configurations que nous rencontrons</h2>
          <p style={{ marginBottom: "var(--s-4)", color: "var(--c-steel)" }}>
            Quatre profils couvrent la grande majorité des demandes en restauration.
          </p>
          <PriceTable
            lines={nettoyagePrices}
            caption="Configurations de nettoyage de hotte de restaurant"
          />
          <div className={p.notice} style={{ marginTop: "var(--s-5)" }}>
            <h3>Chiffrage en 24 heures</h3>
            <p>
              Chaque installation est différente : nous établissons un devis gratuit après un
              échange téléphonique de quelques minutes. L&apos;envoi de deux ou trois photos — vue
              d&apos;ensemble de la hotte, filtres déposés, plénum si accessible — permet de chiffrer
              avec précision dès le premier contact.
            </p>
          </div>
        </section>

        <section>
          <h2 className={p.h2}>L&apos;écart entre rattrapage et entretien</h2>
          <div className="prose">
            <p>
              C&apos;est le point que les exploitants sous-estiment le plus souvent. Une installation
              traitée pour la première fois après plusieurs années demande une intervention lourde,
              parfois étalée sur plusieurs passages. Une installation suivie se traite en une
              fraction de ce temps.
            </p>
            <p>
              Autrement dit, le prix d&apos;un nettoyage n&apos;est pas une donnée fixe attachée à votre
              cuisine : c&apos;est une fonction du temps écoulé depuis le dernier passage. Reporter fait
              monter la facture suivante, mécaniquement.
            </p>
            <p>
              C&apos;est aussi pourquoi comparer deux devis sans comparer les périmètres n&apos;a aucun
              sens. Un devis plus bas qui exclut le plénum et le conduit ne traite pas la même chose.
            </p>
          </div>
          <p style={{ marginTop: "var(--s-4)" }}>
            <Link href="/contrat-entretien-hotte-professionnelle/" className="arrowLink">
              Voir le contrat d&apos;entretien annuel
            </Link>
          </p>
        </section>

        <section>
          <h2 className={p.h2}>Comment comparer deux devis</h2>
          <ul className={p.checks}>
            <li>
              Le <strong>périmètre</strong> : hotte seule, ou hotte + plénum + conduit ? C&apos;est le
              premier poste d&apos;écart entre deux propositions.
            </li>
            <li>
              Le <strong>traitement des filtres</strong> : trempage en bac, ou rinçage sur place ?
            </li>
            <li>
              Les <strong>zones inaccessibles</strong> : sont-elles identifiées et annoncées, ou
              découvertes le jour J ?
            </li>
            <li>
              Le <strong>document remis</strong> : bon d&apos;intervention, ou attestation détaillée
              avec rapport photo ?
            </li>
            <li>
              L&apos;<strong>évacuation des résidus</strong> : incluse, ou en supplément ?
            </li>
          </ul>
        </section>

        <FaqList items={FAQ} />

        <RelatedServices
          slugs={[
            "nettoyage-hotte-restaurant",
            "nettoyage-hotte-professionnelle",
            "entretien-hotte-professionnelle",
          ]}
        />
      </PageBody>

      <CtaBand
        title="Faire chiffrer votre installation"
        text="Quelques minutes au téléphone, deux ou trois photos, et vous recevez un chiffrage détaillé poste par poste sous 24 heures."
      />
    </>
  );
}
