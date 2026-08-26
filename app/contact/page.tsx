import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/ui/PageShell";
import { QuoteForm } from "@/components/blocks/QuoteForm";
import { Cover } from "@/components/ui/Cover";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Nettoyage et ramonage de hotte professionnelle",
  description:
    "Contactez notre équipe pour un devis de nettoyage, dégraissage ou ramonage de hotte de cuisine professionnelle. Rappel sous 2 h ouvrées, intervention partout en France.",
  path: "/contact/",
  image: "contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: "Contact", path: "/contact/" }]} />

      <PageHero
        eyebrow="Nous joindre"
        h1="Parlons de votre installation"
        lead="Le téléphone reste le plus rapide : quelques minutes suffisent à cerner votre besoin et à vous dire si la prestation qu'il vous faut est un nettoyage, un dégraissage ou un ramonage de conduit."
        meta={
          <>
            <span>{site.hours}</span>
            <span>{site.emergency}</span>
            <span>{site.promise.callback}</span>
          </>
        }
      />

      <div className={`container ${p.quoteLayout}`}>
        <div className={p.quoteCopy}>
          <Cover imageKey="contact" priority />

          <section>
            <h2 className={p.h2}>Nous joindre directement</h2>
            <div className={p.contactGrid}>
              <div className={p.contactCard}>
                <strong>
                  <a href={`tel:${site.phone.href}`}>{site.phone.display}</a>
                </strong>
                <span>{site.hours}</span>
                <span>{site.emergency}</span>
              </div>
              <div className={p.contactCard}>
                <strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </strong>
                <span>Réponse sous 24 h ouvrées</span>
                <span>Joignez vos photos d&apos;installation</span>
              </div>
              <div className={p.contactCard}>
                <strong>Interventions</strong>
                <span>France métropolitaine</span>
                <span>13 régions, 96 départements</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className={p.h2}>Ce qu&apos;il est utile de préparer</h2>
            <ul className={p.checks}>
              <li>Le type d&apos;établissement et la ville d&apos;intervention.</li>
              <li>Le nombre de hottes et, si vous le savez, le type de filtres.</li>
              <li>La date approximative du dernier entretien, si un entretien a eu lieu.</li>
              <li>
                Deux ou trois photos : vue d&apos;ensemble de la hotte, filtres déposés, plénum si vous
                y avez accès.
              </li>
              <li>
                Les exigences de votre assureur, si votre demande fait suite à sa sollicitation.
              </li>
            </ul>
          </section>

          <div className={p.notice}>
            <h3>Coordonnées à compléter</h3>
            <p>
              Le numéro de téléphone, l&apos;adresse e-mail et l&apos;adresse du siège affichés sur ce site
              sont des valeurs de démonstration. Elles doivent être remplacées par les coordonnées
              réelles avant mise en ligne. <span className={p.todo}>À compléter</span>
            </p>
          </div>
        </div>

        <div className={p.quoteForm}>
          <QuoteForm />
        </div>
      </div>
    </>
  );
}
