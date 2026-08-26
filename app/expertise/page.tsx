import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/ui/PageShell";
import { CtaBand } from "@/components/ui/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { Thumb } from "@/components/ui/Cover";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";
import s from "./expertise.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Centre d'expertise — hottes, conduits et extraction de cuisine professionnelle",
  description:
    "Fréquence d'entretien, nettoyage ou ramonage, risques d'un réseau encrassé, trappes de visite : nos articles sur l'extraction de cuisine professionnelle.",
  path: "/expertise/",
  image: "article-frequence-nettoyage-hotte-professionnelle",
});

export default function ExpertiseIndex() {
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <>
      <Breadcrumb crumbs={[{ name: "Centre d'expertise", path: "/expertise/" }]} />

      <PageHero
        eyebrow="Centre d'expertise"
        h1="Comprendre l'entretien d'un système d'extraction"
        lead="Des réponses techniques, sans approximation réglementaire. Nous ne citons aucune obligation légale que nous n'ayons pas vérifiée, et nous distinguons systématiquement ce qui relève de la loi, de la recommandation, de la bonne pratique et de votre contrat d'assurance."
        meta={
          <>
            <span>{articles.length} articles</span>
            {categories.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </>
        }
      />

      <div className={`container ${s.wrap}`}>
        <ul className={s.list}>
          {articles.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 50}>
              <Link href={`/expertise/${a.slug}/`} className={s.card}>
                <Thumb imageKey={`article-${a.slug}`} className={s.cardThumb} />
                <div className={s.cardHead}>
                  <span className={s.cat}>{a.category}</span>
                  <span className={s.time}>{a.readingTime} min</span>
                </div>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <span className="arrowLink">Lire l&apos;article</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>

      <CtaBand
        title="Une question sur votre installation ?"
        text="Un appel de quelques minutes vaut mieux qu'une heure de recherche. Dites-nous ce que vous constatez, nous vous dirons ce qu'il faut faire."
      />
    </>
  );
}
