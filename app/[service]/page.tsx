import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import {
  CtaBand,
  FaqList,
  Included,
  RelatedServices,
  Sections,
  Targets,
} from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { getCity } from "@/data/cities";
import { cityLinksFor, getPillar, getService, serviceSlugs, pillarLabels } from "@/data/services";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import s from "./service.module.scss";

/** Aucune page prestation hors du registre `data/services.ts`. */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[service]">): Promise<Metadata> {
  const { service } = await params;
  const sv = getService(service);
  if (!sv) return {};

  return buildMetadata({
    title: sv.title,
    description: sv.description,
    path: `/${sv.slug}/`,
    image: sv.slug,
  });
}

export default async function ServicePage({ params }: PageProps<"/[service]">) {
  const { service } = await params;
  const sv = getService(service);
  if (!sv) notFound();

  const pillar = getPillar(sv.pillar);
  const isPillar = sv.isPillar;

  const crumbs = isPillar
    ? [{ name: sv.nav, path: `/${sv.slug}/` }]
    : [
        { name: pillar?.nav ?? pillarLabels[sv.pillar], path: `/${pillar?.slug ?? sv.slug}/` },
        { name: sv.nav, path: `/${sv.slug}/` },
      ];

  const cityLinks = cityLinksFor(sv)
    .map((l) => ({ service: l.service, city: getCity(l.city) }))
    .filter((l) => l.city);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: sv.h1, description: sv.description, path: `/${sv.slug}/` }),
          faqJsonLd(sv.faq),
        ]}
      />
      <Breadcrumb crumbs={crumbs} />

      <PageHero
        eyebrow={sv.eyebrow}
        h1={sv.h1}
        lead={sv.lead}
        meta={
          <>
            <span>Devis sous 24 h</span>
            <span>Attestation remise</span>
            <span>Intervention hors service</span>
            <span>Partout en France</span>
          </>
        }
      />

      <PageBody service={sv.nav}>
        <Cover imageKey={sv.slug} priority />
        <Sections sections={sv.sections} />
        <Included items={sv.included} />
        <Targets items={sv.targets} />

        {cityLinks.length > 0 && (
          <section className={s.cities}>
            <h2>
              {isPillar
                ? "Nos interventions locales, ville par ville"
                : `${sv.nav} — nos interventions ville par ville`}
            </h2>
            <p className={s.citiesIntro}>
              Chaque page détaille le contexte local, les contraintes techniques du bâti et les
              communes réellement couvertes autour de la ville.
            </p>
            <ul className={s.cityList}>
              {cityLinks.map((l) => (
                <li key={`${l.service.slug}-${l.city!.slug}`}>
                  <Link href={`/${l.service.slug}/${l.city!.slug}/`}>
                    <span className={s.cityName}>{l.city!.name}</span>
                    <span className={s.cityMeta}>
                      {isPillar ? l.service.nav : `${l.city!.departmentCode} · ${l.city!.epci}`}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <FaqList items={sv.faq} />
        <RelatedServices slugs={sv.related} />
      </PageBody>

      <CtaBand
        title={`Un devis pour votre ${sv.nav.toLowerCase()}`}
        text="Quelques minutes au téléphone suffisent à cerner votre installation. Vous recevez un chiffrage détaillé, poste par poste, sous 24 heures."
      />
    </>
  );
}
