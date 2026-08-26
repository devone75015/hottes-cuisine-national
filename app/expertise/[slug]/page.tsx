import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageBody, PageHero } from "@/components/ui/PageShell";
import { CtaBand, FaqList, Sections } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Cover } from "@/components/ui/Cover";
import { articleSlugs, articles, getArticle } from "@/data/articles";
import { getService } from "@/data/services";
import { articleJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import s from "./article.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/expertise/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};

  return buildMetadata({
    title: a.title,
    description: a.description,
    path: `/expertise/${a.slug}/`,
    image: `article-${a.slug}`,
  });
}

export default async function ArticlePage({ params }: PageProps<"/expertise/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const primary = getService(a.primaryTarget);
  const secondary = a.secondaryTargets.map(getService).filter(Boolean);
  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: a.h1,
            description: a.description,
            path: `/expertise/${a.slug}/`,
            published: a.published,
          }),
          ...(a.faq ? [faqJsonLd(a.faq)] : []),
        ]}
      />

      <Breadcrumb
        crumbs={[
          { name: "Centre d'expertise", path: "/expertise/" },
          { name: a.category, path: "/expertise/" },
          { name: a.title, path: `/expertise/${a.slug}/` },
        ]}
      />

      <PageHero
        eyebrow={a.category}
        h1={a.h1}
        lead={a.excerpt}
        meta={
          <>
            <span>{a.readingTime} min de lecture</span>
            <span>
              Mis à jour le{" "}
              {new Date(a.published).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </>
        }
      />

      <PageBody
        aside={
          <div className={s.asideLinks}>
            <p className={s.asideHead}>Sur le même sujet</p>
            <ul>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/expertise/${o.slug}/`}>{o.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <Cover imageKey={`article-${a.slug}`} priority />
        <Sections sections={a.sections} />

        {a.faq && <FaqList items={a.faq} />}

        {primary && (
          <section className={s.next}>
            <p className={s.nextKicker}>Passer à l&apos;action</p>
            <h2>{primary.h1}</h2>
            <p className={s.nextLead}>{primary.lead}</p>
            <Link href={`/${primary.slug}/`} className="btn">
              Voir la prestation
            </Link>

            {secondary.length > 0 && (
              <ul className={s.nextSecondary}>
                {secondary.map((sv) => (
                  <li key={sv!.slug}>
                    <Link href={`/${sv!.slug}/`}>{sv!.h1}</Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </PageBody>

      <CtaBand />
    </>
  );
}
