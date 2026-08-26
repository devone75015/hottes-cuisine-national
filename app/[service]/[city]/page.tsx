import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, NearbyZone, Sections } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { getCity } from "@/data/cities";
import { getPillar, getService, serviceCityPairs, services } from "@/data/services";
import { getRegion } from "@/data/regions";
import { buildLocalPage } from "@/lib/localPage";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import s from "./city.module.scss";

/**
 * Pages « prestation + ville ».
 * `dynamicParams = false` : une combinaison non déclarée dans le registre
 * n'existe pas. C'est le gate d'indexation du §14 — pas de page fantôme.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceCityPairs();
}

export async function generateMetadata({
  params,
}: PageProps<"/[service]/[city]">): Promise<Metadata> {
  const { service, city } = await params;
  const sv = getService(service);
  const ct = getCity(city);
  if (!sv || !ct) return {};

  const page = buildLocalPage(sv, ct);
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${sv.slug}/${ct.slug}/`,
    image: `city-${ct.slug}`,
  });
}

export default async function ServiceCityPage({ params }: PageProps<"/[service]/[city]">) {
  const { service, city } = await params;
  const sv = getService(service);
  const ct = getCity(city);
  if (!sv || !ct) notFound();

  const page = buildLocalPage(sv, ct);
  const pillar = getPillar(sv.pillar);
  const region = getRegion(ct.region);

  // Prestations sœurs disponibles dans la même ville — maillage horizontal.
  const siblings = services.filter(
    (x) => x.slug !== sv.slug && (x.cityPages ?? []).includes(ct.slug),
  );

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: page.h1,
            description: page.description,
            path: `/${sv.slug}/${ct.slug}/`,
            areaName: ct.name,
          }),
          faqJsonLd(page.faq),
        ]}
      />

      <Breadcrumb
        crumbs={[
          { name: pillar?.nav ?? sv.nav, path: `/${pillar?.slug ?? sv.slug}/` },
          { name: sv.nav, path: `/${sv.slug}/` },
          { name: ct.name, path: `/${sv.slug}/${ct.slug}/` },
        ]}
      />

      <PageHero
        eyebrow={page.eyebrow}
        h1={page.h1}
        lead={page.lead}
        meta={
          <>
            <span>{ct.department}</span>
            <span>{ct.epci}</span>
            <span>Devis sous 24 h</span>
            <span>Attestation remise</span>
          </>
        }
      />

      <PageBody
        service={sv.nav}
        city={ct.name}
        aside={
          <div className={s.asideZone}>
            <p className={s.asideHead}>Communes couvertes</p>
            <ul>
              {ct.nearby.slice(0, 8).map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            {region && (
              <Link href={`/zones/${region.slug}/`} className="arrowLink">
                Toute la région
              </Link>
            )}
          </div>
        }
      >
        <Cover imageKey={`city-${ct.slug}`} priority />
        <Sections sections={page.sections} />

        <NearbyZone cityName={ct.name} epci={ct.epci} nearby={ct.nearby} />

        {siblings.length > 0 && (
          <section className={s.siblings}>
            <h2>Nos autres prestations à {ct.name}</h2>
            <ul>
              {siblings.map((x) => (
                <li key={x.slug}>
                  <Link href={`/${x.slug}/${ct.slug}/`}>
                    <span className={s.siblingTitle}>
                      {x.h1} {ct.prep}
                    </span>
                    <span className={s.siblingArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <FaqList items={page.faq} title={`Questions fréquentes ${ct.prep}`} />

        <section className={s.parents}>
          <h2>Aller plus loin</h2>
          <ul>
            <li>
              <Link href={`/${sv.slug}/`}>{sv.h1} — la prestation en détail</Link>
            </li>
            {pillar && !sv.isPillar && (
              <li>
                <Link href={`/${pillar.slug}/`}>{pillar.h1}</Link>
              </li>
            )}
            {region && (
              <li>
                <Link href={`/zones/${region.slug}/`}>
                  Nos interventions en {region.name}
                </Link>
              </li>
            )}
            <li>
              <Link href="/contrat-entretien-hotte-professionnelle/">
                Le contrat d&apos;entretien annuel
              </Link>
            </li>
          </ul>
        </section>
      </PageBody>

      <CtaBand title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}
