import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/ui/PageShell";
import { CtaBand, ProofBar } from "@/components/ui/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { Cover, Thumb } from "@/components/ui/Cover";
import { cities } from "@/data/cities";
import { servicesForCity } from "@/data/services";
import { regions, totalDepartments } from "@/data/regions";
import { buildMetadata } from "@/lib/seo";
import s from "./zones.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Zones d'intervention — nettoyage et ramonage de hottes partout en France",
  description:
    "Nettoyage, dégraissage et ramonage de hottes de cuisine professionnelle dans les 13 régions métropolitaines et 96 départements. Trouvez votre zone d'intervention.",
  path: "/zones/",
  image: "zones-france",
});

export default function ZonesPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: "Zones d'intervention", path: "/zones/" }]} />

      <PageHero
        eyebrow="Couverture nationale"
        h1="Nos zones d'intervention en France"
        lead="Nos équipes sont organisées par région, avec des tournées calées sur les bassins d'activité réels. Un interlocuteur unique, que vous exploitiez un établissement ou trente répartis sur plusieurs départements."
        meta={
          <>
            <span>13 régions</span>
            <span>{totalDepartments} départements</span>
            <span>France métropolitaine</span>
          </>
        }
      />

      <ProofBar />

      <div className={`container ${s.wrap}`}>
        <Cover imageKey="zones-france" priority />

        <section>
          <div className="sectionHead">
            <p className="eyebrow">Par région</p>
            <h2>Choisissez votre région</h2>
            <p>
              Chaque page régionale détaille le contexte local, les villes couvertes et les
              contraintes propres au territoire.
            </p>
          </div>

          <ul className={s.grid}>
            {regions.map((r, i) => (
              <Reveal as="li" key={r.slug} delay={i * 40}>
                <Link href={`/zones/${r.slug}/`} className={s.card}>
                  <Thumb imageKey={`region-${r.slug}`} className={s.cardThumb} />
                  <span className={s.cardCode}>{r.code}</span>
                  <span className={s.cardName}>{r.name}</span>
                  <span className={s.cardAngle}>{r.angle}</span>
                  <span className={s.cardMeta}>
                    {r.departments.length} départements · {r.cities.length} villes couvertes
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className={s.citiesBlock}>
          <div className="sectionHead">
            <p className="eyebrow eyebrow--air">Villes prioritaires</p>
            <h2>Pages ville par ville</h2>
            <p>
              Ces villes disposent de pages dédiées par prestation, avec le contexte local, les
              contraintes techniques du bâti et les communes réellement couvertes.
            </p>
          </div>

          <ul className={s.cityGrid}>
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/nettoyage-hotte-restaurant/${c.slug}/`}>
                  <span className={s.cityName}>{c.name}</span>
                  <span className={s.cityMeta}>
                    {c.departmentCode} · {c.department}
                  </span>
                  <span className={s.cityServices}>
                    {servicesForCity(c.slug).length} prestation
                    {servicesForCity(c.slug).length > 1 ? "s" : ""} détaillée
                    {servicesForCity(c.slug).length > 1 ? "s" : ""}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className={s.note}>
            Votre ville n&apos;apparaît pas encore ? Nous intervenons dans toute la France
            métropolitaine, y compris là où nous n&apos;avons pas encore de page dédiée. Passez par la
            page de votre région ou appelez-nous.
          </p>
        </section>
      </div>

      <CtaBand
        title="Trouver votre équipe locale"
        text="Indiquez-nous votre ville et votre code postal : nous vous rappelons sous 2 h ouvrées avec le créneau d'intervention le plus proche."
      />
    </>
  );
}
