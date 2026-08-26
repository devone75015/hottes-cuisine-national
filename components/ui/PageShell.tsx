import type { ReactNode } from "react";
import { QuoteForm } from "@/components/blocks/QuoteForm";
import { site } from "@/lib/site";
import s from "./PageShell.module.scss";

/**
 * Coquille des pages de contenu : en-tête, colonne éditoriale et colonne
 * latérale de conversion (formulaire + téléphone toujours visibles).
 */

export function PageHero({
  eyebrow,
  h1,
  lead,
  meta,
}: {
  eyebrow: string;
  h1: string;
  lead: string;
  meta?: ReactNode;
}) {
  return (
    <section className={s.hero}>
      <div className={`container ${s.heroInner}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{h1}</h1>
        <p className={s.lead}>{lead}</p>
        {meta && <div className={s.meta}>{meta}</div>}
      </div>
    </section>
  );
}

export function PageBody({
  children,
  service,
  city,
  aside,
  form,
}: {
  children: ReactNode;
  service?: string;
  city?: string;
  aside?: ReactNode;
  /** Remplace le formulaire de devis — les pages réparation y mettent le formulaire de dépannage. */
  form?: ReactNode;
}) {
  return (
    <div className={`container ${s.body}`}>
      <div className={s.main}>{children}</div>
      <aside className={s.aside}>
        <div className={s.asideSticky}>
          {form ?? <QuoteForm compact defaultService={service} defaultCity={city} />}
          <div className={s.callCard}>
            <p className={s.callKicker}>Plus rapide</p>
            <a href={`tel:${site.phone.href}`} className={s.callNumber}>
              {site.phone.display}
            </a>
            <p className={s.callHours}>
              {site.hours}
              <br />
              {site.emergency}
            </p>
          </div>
          {aside}
        </div>
      </aside>
    </div>
  );
}

/** Page simple sans colonne latérale (pages légales, contact…). */
export function PageNarrow({ children }: { children: ReactNode }) {
  return (
    <div className={`container container--narrow ${s.narrow}`}>{children}</div>
  );
}
