import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, ProofBar } from "@/components/ui/Blocks";
import { regions, totalDepartments } from "@/data/regions";
import { Cover } from "@/components/ui/Cover";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "L'entreprise | Spécialiste de la hotte professionnelle et de l'extraction",
  description:
    "Une entreprise spécialisée exclusivement dans le nettoyage, le dégraissage et le ramonage des hottes, conduits et systèmes d'extraction de cuisine professionnelle.",
  path: "/entreprise/",
  image: "entreprise",
});

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: "L'entreprise", path: "/entreprise/" }]} />

      <PageHero
        eyebrow="Qui nous sommes"
        h1="Un seul métier : la hotte professionnelle et son réseau d'extraction"
        lead={`${site.name} n'est pas une entreprise de propreté qui propose accessoirement le nettoyage de hottes. Nous n'intervenons que sur des cuisines professionnelles, et uniquement sur leur système d'extraction.`}
        meta={
          <>
            <span>{regions.length} régions</span>
            <span>{totalDepartments} départements</span>
            <span>B2B exclusivement</span>
          </>
        }
      />

      <ProofBar />

      <PageBody>
        <Cover imageKey="entreprise" priority />
        <section>
          <h2 className={p.h2}>La spécialisation, ce n&apos;est pas un argument marketing</h2>
          <div className="prose">
            <p>
              C&apos;est une question d&apos;équipement et d&apos;habitude. Traiter un réseau d&apos;extraction de
              cuisine professionnelle demande des bacs de trempage, des dégraissants alcalins
              compatibles avec un environnement alimentaire, un outillage de rotobrossage dimensionné
              au conduit, et des moyens de récupération des résidus.
            </p>
            <p>
              Cela demande aussi de savoir ce qu&apos;on regarde : reconnaître un plénum chargé,
              identifier un tracé de conduit qui ne correspond pas aux plans, distinguer une perte
              d&apos;aspiration due à l&apos;encrassement d&apos;une perte due à un défaut de compensation d&apos;air.
              Cette compétence-là ne s&apos;improvise pas entre deux prestations de nettoyage de bureaux.
            </p>
            <p>
              Nous avons donc fait un choix simple : ne faire que cela, partout en France, pour des
              clients qui sont tous des professionnels de la restauration ou de la restauration
              collective.
            </p>
          </div>
        </section>

        <section>
          <h2 className={p.h2}>Ce que nous nous engageons à faire</h2>
          <ul className={p.checks}>
            <li>
              Établir le périmètre réellement traitable <strong>avant</strong> l&apos;intervention, pas
              pendant.
            </li>
            <li>
              Écrire dans le rapport les zones que nous n&apos;avons pas pu atteindre, avec le motif.
            </li>
            <li>
              Vous dire quand le problème que vous constatez ne relève pas de l&apos;entretien mais de
              la conception ou du matériel.
            </li>
            <li>
              Ne jamais affirmer une obligation réglementaire que nous n&apos;avons pas vérifiée auprès
              d&apos;une source officielle.
            </li>
            <li>
              Restituer une cuisine prête à servir, sans reprise de nettoyage de votre côté.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={p.h2}>Une organisation par région</h2>
          <div className="prose">
            <p>
              Nos équipes sont réparties par région et travaillent sur des bassins d&apos;activité
              réels, pas sur des rayons kilométriques théoriques. C&apos;est ce qui nous permet
              d&apos;annoncer des délais tenables et de regrouper les interventions en tournées, y
              compris dans les départements où les établissements sont dispersés.
            </p>
            <p>
              Pour les exploitants multisites, cette organisation se double d&apos;un interlocuteur
              unique et d&apos;un état de parc consolidé — vous ne gérez pas une relation par région.
            </p>
          </div>
        </section>

        <div className={p.notice}>
          <h3>Cette page reste à compléter</h3>
          <p>
            Les éléments d&apos;identité de l&apos;entreprise — raison sociale, année de création, effectif,
            références clients, certifications et attestation d&apos;assurance — sont à renseigner avec
            les données réelles avant la mise en ligne. <span className={p.todo}>À compléter</span>
          </p>
        </div>
      </PageBody>

      <CtaBand />
    </>
  );
}
