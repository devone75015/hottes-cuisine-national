import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/ui/PageShell";
import { QuoteForm } from "@/components/blocks/QuoteForm";
import { FaqList, ProofBar } from "@/components/ui/Blocks";
import { Cover } from "@/components/ui/Cover";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Devis nettoyage de hotte professionnelle — gratuit, sous 24 h",
  description:
    "Demandez votre devis de nettoyage, dégraissage ou ramonage de hotte professionnelle. Rappel sous 2 h ouvrées, chiffrage détaillé sous 24 h, partout en France.",
  path: "/devis-nettoyage-hotte/",
  image: "devis-nettoyage-hotte",
});

const FAQ = [
  {
    q: "Le devis est-il vraiment gratuit et sans engagement ?",
    a: "Oui. L'établissement du devis ne vous engage à rien et n'est jamais facturé, y compris lorsqu'un repérage sur site est nécessaire pour chiffrer précisément une installation complexe.",
  },
  {
    q: "Quelles informations vous faut-il pour chiffrer ?",
    a: "Le type d'établissement, la ville, le nombre de hottes, le système d'extraction concerné et, si vous le savez, la date du dernier entretien. Deux ou trois photos de votre hotte et de votre plénum permettent d'affiner considérablement le chiffrage.",
  },
  {
    q: "Sous quel délai recevons-nous le devis ?",
    a: "Sous 24 heures après notre échange téléphonique. Nous vous rappelons sous 2 h ouvrées après réception de votre demande.",
  },
  {
    q: "Le prix annoncé peut-il changer une fois sur place ?",
    a: "Non, sauf si l'installation réelle diffère de ce qui nous a été décrit. Les incertitudes connues — accessibilité du réseau notamment — figurent explicitement au devis avec leur impact chiffré, pour qu'aucun supplément ne soit découvert le jour de l'intervention.",
  },
];

export default function DevisPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: "Demander un devis", path: "/devis-nettoyage-hotte/" }]} />

      <PageHero
        eyebrow="Devis gratuit"
        h1="Votre devis de nettoyage de hotte, sous 24 heures"
        lead="Quelques minutes suffisent. Nous vous rappelons sous 2 h ouvrées pour préciser votre installation, puis vous recevez un chiffrage détaillé poste par poste — sans supplément découvert le jour de l'intervention."
        meta={
          <>
            <span>Gratuit et sans engagement</span>
            <span>{site.promise.callback}</span>
            <span>{site.promise.quote}</span>
          </>
        }
      />

      <ProofBar />

      <div className={`container ${p.quoteLayout}`}>
        <div className={p.quoteCopy}>
          <Cover imageKey="devis-nettoyage-hotte" priority />

          <section>
            <h2 className={p.h2}>Ce que vous recevez</h2>
            <ul className={p.checks}>
              <li>Un chiffrage détaillé poste par poste, pas un forfait opaque.</li>
              <li>
                Le périmètre exactement couvert : ce qui sera traité, et ce qui ne pourra pas
                l&apos;être si votre réseau comporte des zones inaccessibles.
              </li>
              <li>La durée d&apos;intervention estimée et le créneau horaire proposé.</li>
              <li>
                Les incertitudes connues, chiffrées à l&apos;avance — jamais découvertes le jour J.
              </li>
              <li>Une préconisation de périodicité, avec le tarif d&apos;un passage d&apos;entretien.</li>
            </ul>
          </section>

          <section>
            <h2 className={p.h2}>Accélérer le chiffrage</h2>
            <div className={p.cards}>
              <div className={p.card}>
                <span className={p.cardKicker}>Le plus utile</span>
                <h3>Deux ou trois photos</h3>
                <p>
                  Une vue d&apos;ensemble de la hotte, une vue des filtres déposés et une vue du plénum
                  si vous y avez accès. C&apos;est ce qui divise par deux le temps de chiffrage.
                </p>
              </div>
              <div className={p.card}>
                <span className={p.cardKicker}>Utile</span>
                <h3>Le dernier document d&apos;entretien</h3>
                <p>
                  S&apos;il existe. Il indique ce qui a été traité et quand — donc l&apos;état probable du
                  réseau aujourd&apos;hui.
                </p>
              </div>
              <div className={p.card}>
                <span className={p.cardKicker}>Si applicable</span>
                <h3>La demande de votre assureur</h3>
                <p>
                  Transmettez-nous les exigences exactes de votre contrat : nous adapterons le
                  document remis en fin d&apos;intervention.
                </p>
              </div>
            </div>
          </section>

          <FaqList items={FAQ} title="Avant de demander votre devis" />
        </div>

        <div className={p.quoteForm}>
          <QuoteForm />
        </div>
      </div>
    </>
  );
}
