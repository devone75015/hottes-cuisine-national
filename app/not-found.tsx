import Link from "next/link";
import { PageNarrow } from "@/components/ui/PageShell";
import { pillars } from "@/data/services";
import { site } from "@/lib/site";
import p from "./pages.module.scss";

export default function NotFound() {
  return (
    <PageNarrow>
      <div>
        <p className="eyebrow">Erreur 404</p>
        <h1 style={{ marginBlock: "var(--s-4)" }}>Cette page n&apos;existe pas</h1>
        <p className="prose">
          Le lien que vous avez suivi est erroné, ou la page a été déplacée. Voici les points
          d&apos;entrée les plus utiles.
        </p>
      </div>

      <div className={p.cards}>
        {pillars.map((sv) => (
          <Link key={sv.slug} href={`/${sv.slug}/`} className={p.card}>
            <span className={p.cardKicker}>{sv.eyebrow}</span>
            <h3>{sv.h1}</h3>
            <p>{sv.lead}</p>
          </Link>
        ))}
      </div>

      <div className={p.notice}>
        <h3>Besoin d&apos;une réponse rapide ?</h3>
        <p>
          Appelez-nous au <a href={`tel:${site.phone.href}`}>{site.phone.display}</a> — {site.hours}.
          Ou passez par la <Link href="/zones/">carte de nos zones d&apos;intervention</Link>.
        </p>
      </div>
    </PageNarrow>
  );
}
