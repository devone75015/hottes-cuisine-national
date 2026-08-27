import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, Sections } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { citiesInRegion } from "@/data/cities";
import { getRegion, regionSlugs } from "@/data/regions";
import { pillars, servicesForCity } from "@/data/services";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import s from "./region.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
  return regionSlugs.map((region) => ({ region }));
}

export async function generateMetadata({
  params,
}: PageProps<"/zones/[region]">): Promise<Metadata> {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) return {};

  return buildMetadata({
    title: r.title,
    description: r.description,
    path: `/zones/${r.slug}/`,
    image: `region-${r.slug}`,
  });
}

export default async function RegionPage({ params }: PageProps<"/zones/[region]">) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) notFound();

  const localCities = citiesInRegion(r.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: r.h1,
            description: r.description,
            path: `/zones/${r.slug}/`,
            areaName: r.name,
          }),
          faqJsonLd(r.faq),
        ]}
      />

      <Breadcrumb
        crumbs={[
          { name: "Zones d'intervention", path: "/zones/" },
          { name: r.name, path: `/zones/${r.slug}/` },
        ]}
      />

      <PageHero
        eyebrow={`Région ${r.code}`}
        h1={r.h1}
        lead={r.intro[0]}
        meta={
          <>
            <span>{r.departments.length} départements</span>
            <span>{r.cities.length} villes couvertes</span>
            <span>Devis sous 24 h</span>
          </>
        }
      />

      <PageBody
        aside={
          <div className={s.asideDept}>
            <p className={s.asideHead}>Départements couverts</p>
            <ul>
              {r.departments.map((d) => (
                <li key={d.code}>
                  <span className={s.deptCode}>{d.code}</span>
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <Cover imageKey={`region-${r.slug}`} priority />

        <div className="prose">
          {r.intro.slice(1).map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <Sections sections={r.sections} />

        {localCities.length > 0 && (
          <section className={s.cityBlock}>
            <h2>Nos pages ville en {r.shortName}</h2>
            <ul className={s.cityList}>
              {localCities.map((c) => (
                <li key={c.slug}>
                  <p className={s.cityName}>{c.name}</p>
                  <p className={s.cityEpci}>{c.epci}</p>
                  <ul className={s.cityServices}>
                    {servicesForCity(c.slug).map((sv) => (
                      <li key={sv.slug}>
                        <Link href={`/${sv.slug}/${c.slug}/`}>
                          {sv.h1} {c.prep}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className={s.citiesCovered}>
          <h2>Villes desservies en {r.shortName}</h2>
          <p className={s.citiesIntro}>
            Nos tournées régionales couvrent notamment :
          </p>
          <ul className={s.tagList}>
            {r.cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className={s.citiesNote}>
            Cette liste n&apos;est pas limitative. Nous intervenons également dans les communes
            périphériques de ces villes et dans les autres bassins d&apos;activité de la région.
          </p>
        </section>

        <section className={s.servicesBlock}>
          <h2>Nos prestations en {r.shortName}</h2>
          <ul>
            {pillars.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}/`}>
                  <span className={s.svcName}>{p.h1}</span>
                  <span className={s.svcLead}>{p.lead}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <FaqList items={r.faq} title={`Questions fréquentes en ${r.shortName}`} />
      </PageBody>

      <CtaBand
        title={`Une intervention en ${r.shortName}`}
        text={`Indiquez-nous votre ville et votre code postal. Nous vous rappelons sous 2 h ouvrées avec le créneau disponible le plus proche de votre établissement.`}
      />
    </>
  );
}
