import Link from "next/link";
import { site } from "@/lib/site";
import { getService } from "@/data/services";
import type { ContentSection, Faq } from "@/lib/types";
import { Reveal } from "./Reveal";
import { Thumb } from "./Cover";
import s from "./Blocks.module.scss";

/* -------------------------------------------------------------------------- */
/*  Corps éditorial                                                            */
/* -------------------------------------------------------------------------- */

export function Sections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className={s.sections}>
      {sections.map((sec) => (
        <Reveal as="section" key={sec.h2} className={s.section}>
          <h2>{sec.h2}</h2>
          <div className="prose">
            {sec.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {sec.list && (
              <ul>
                {sec.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </div>
          {sec.callout && (
            <p className={s.callout}>
              <span aria-hidden="true" className={s.calloutMark} />
              {sec.callout}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Ce que comprend la prestation                                              */
/* -------------------------------------------------------------------------- */

export function Included({ items, title = "Ce que comprend l'intervention" }: { items: string[]; title?: string }) {
  return (
    <Reveal as="section" className={s.included}>
      <h2>{title}</h2>
      <ul>
        {items.map((i, n) => (
          <li key={i}>
            <span className={s.includedNum}>{String(n + 1).padStart(2, "0")}</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  Établissements ciblés                                                      */
/* -------------------------------------------------------------------------- */

export function Targets({ items, title = "Les établissements que nous traitons" }: { items: string[]; title?: string }) {
  return (
    <Reveal as="section" className={s.targets}>
      <h2>{title}</h2>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ — accordéon natif, aucun JavaScript                                    */
/* -------------------------------------------------------------------------- */

export function FaqList({ items, title = "Questions fréquentes" }: { items: Faq[]; title?: string }) {
  return (
    <Reveal as="section" className={s.faq}>
      <h2>{title}</h2>
      <div className={s.faqList}>
        {items.map((f) => (
          <details key={f.q} className={s.faqItem}>
            <summary>
              <span>{f.q}</span>
              <span className={s.faqIcon} aria-hidden="true" />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bandeau de conversion                                                      */
/* -------------------------------------------------------------------------- */

export function CtaBand({
  title = "Un devis, sous 24 heures",
  text = "Décrivez votre installation en quelques minutes. Nous vous rappelons sous 2 h ouvrées et vous recevez un chiffrage détaillé sous 24 h.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className={s.cta}>
      <div className={`container ${s.ctaInner}`}>
        <div>
          <p className="eyebrow eyebrow--onDark">{site.promise.quote}</p>
          <h2>{title}</h2>
          <p className={s.ctaText}>{text}</p>
        </div>
        <div className={s.ctaActions}>
          <a href={`tel:${site.phone.href}`} className="btn btn--lg">
            {site.phone.display}
          </a>
          <Link href="/devis-nettoyage-hotte/" className="btn btn--lg btn--gray">
            Demander un devis
          </Link>
          <a href={`mailto:${site.email}`} className={s.ctaMail}>
            {site.email}
          </a>
          <p className={s.ctaHours}>{site.hours}</p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bandeau de réassurance                                                     */
/* -------------------------------------------------------------------------- */

export function ProofBar() {
  return (
    <div className={s.proof}>
      <div className={`container ${s.proofInner}`}>
        {site.proof.map((p) => (
          <div key={p.label} className={s.proofItem}>
            <b>{p.value}</b>
            <span>{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Prestations liées — maillage interne                                       */
/* -------------------------------------------------------------------------- */

export function RelatedServices({
  slugs,
  title = "Prestations complémentaires",
}: {
  slugs: string[];
  title?: string;
}) {
  const items = slugs.map(getService).filter(Boolean);
  if (!items.length) return null;

  return (
    <Reveal as="section" className={s.related}>
      <h2>{title}</h2>
      <ul>
        {items.map((sv) => (
          <li key={sv!.slug}>
            <Link href={`/${sv!.slug}/`}>
              <Thumb imageKey={sv!.slug} className={s.relatedThumb} />
              <span className={s.relatedEyebrow}>{sv!.eyebrow}</span>
              <span className={s.relatedTitle}>{sv!.nav}</span>
              <span className={s.relatedLead}>{sv!.lead}</span>
              <span className={s.relatedArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  Zone d'intervention                                                        */
/* -------------------------------------------------------------------------- */

export function NearbyZone({
  cityName,
  epci,
  nearby,
}: {
  cityName: string;
  epci: string;
  nearby: string[];
}) {
  return (
    <Reveal as="section" className={s.zone}>
      <h2>Notre zone d&apos;intervention autour de {cityName}</h2>
      <p className={s.zoneIntro}>
        Nous intervenons {cityName === "Paris" ? "dans les vingt arrondissements" : `${cityName} et son agglomération`} ainsi
        que dans les communes du périmètre de {epci} :
      </p>
      <ul className={s.zoneList}>
        {nearby.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <p className={s.zoneNote}>
        Votre commune n&apos;apparaît pas dans cette liste ? Appelez-nous : nos tournées couvrent un
        périmètre plus large que les communes citées ici.
      </p>
    </Reveal>
  );
}
