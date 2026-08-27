"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { getChildren, pillars } from "@/data/services";
import { regions } from "@/data/regions";
import s from "./Header.module.scss";

export function Header() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);

  /**
   * Fermeture du menu à la navigation.
   * Gérée par un gestionnaire de clic sur le conteneur plutôt que par un effet
   * synchronisé sur le pathname : un setState synchrone dans un effet déclenche
   * un rendu en cascade et React le signale à juste titre.
   */
  function closeMenus() {
    setOpen(false);
    setPanel(null);
  }

  // Verrouille le scroll quand le tiroir mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setPanel(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={s.header}>
      <div className={s.topbar}>
        <div className={`container ${s.topbarInner}`}>
          <p className={s.baseline}>
            Spécialiste hotte, conduit et extraction de cuisine professionnelle
          </p>
          <div className={s.topbarRight}>
            <a href={`mailto:${site.email}`} className={s.topbarMail}>
              {site.email}
            </a>
            <span className={s.dot} aria-hidden="true" />
            <span>{site.hours}</span>
          </div>
        </div>
      </div>

      <div className={s.bar}>
        <div className={`container ${s.barInner}`}>
          <Link href="/" className={s.logo} aria-label={`${site.name} — accueil`}>
            <svg viewBox="0 0 34 30" aria-hidden="true" className={s.mark}>
              <path d="M2 20 L10 6 h14 l8 14 Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M9 20 h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M17 6 V1" stroke="var(--c-flame)" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M11 26 v3 M17 26 v3 M23 26 v3" stroke="var(--c-flame)" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className={s.logoText}>
              Hottes <em>Expert</em> France
            </span>
          </Link>

          <nav className={s.nav} aria-label="Navigation principale">
            {pillars.map((p) => (
              <div
                key={p.slug}
                className={s.navItem}
                onMouseEnter={() => setPanel(p.slug)}
                onMouseLeave={() => setPanel(null)}
              >
                <Link
                  href={`/${p.slug}/`}
                  className={s.navLink}
                  data-open={panel === p.slug || undefined}
                  onFocus={() => setPanel(p.slug)}
                >
                  {p.navShort ?? p.nav}
                </Link>
                {panel === p.slug && (
                   
                  <div className={s.dropdown} onClick={closeMenus}>
                    <p className={s.dropHead}>{p.h1}</p>
                    <ul>
                      {getChildren(p.pillar).map((c) => (
                        <li key={c.slug}>
                          <Link href={`/${c.slug}/`}>{c.nav}</Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${p.slug}/`} className={s.dropAll}>
                      Voir la page complète →
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <Link href="/zones/" className={s.navLink}>
              Zones
            </Link>
            <Link href="/expertise/" className={s.navLink}>
              Expertise
            </Link>
          </nav>

          <div className={s.actions}>
            <a href={`tel:${site.phone.href}`} className={s.phone}>
              <svg viewBox="0 0 16 16" aria-hidden="true" width="15" height="15">
                <path
                  d="M3 1.5h2.4l1.2 3-1.5 1.1a9 9 0 0 0 4.3 4.3l1.1-1.5 3 1.2V12a2 2 0 0 1-2.2 2A12.5 12.5 0 0 1 1 3.7 2 2 0 0 1 3 1.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>{site.phone.display}</span>
            </a>
            <Link href="/devis-nettoyage-hotte/" className="btn btn--sm btn--gray">
              Demander un devis
            </Link>
          </div>

          <button
            type="button"
            className={s.burger}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <span className="srOnly">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span className={s.burgerBars} data-open={open || undefined} aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className={s.drawer} id="menu-mobile">
          {/* Tout clic sur un lien du tiroir le referme. */}
          { }
          <div className="container" onClick={closeMenus}>
            {pillars.map((p) => (
              <section key={p.slug} className={s.drawerSection}>
                <Link href={`/${p.slug}/`} className={s.drawerHead}>
                  {p.nav}
                </Link>
                <ul>
                  {getChildren(p.pillar).map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}/`}>{c.nav}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className={s.drawerSection}>
              <Link href="/zones/" className={s.drawerHead}>
                Zones d&apos;intervention
              </Link>
              <ul className={s.drawerCols}>
                {regions.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/zones/${r.slug}/`}>{r.shortName}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className={s.drawerSection}>
              <p className={s.drawerHead}>Aller plus loin</p>
              <ul>
                <li>
                  <Link href="/contrat-entretien-hotte-professionnelle/">Contrat d&apos;entretien</Link>
                </li>
                <li>
                  <Link href="/notre-methode-intervention/">Notre méthode</Link>
                </li>
                <li>
                  <Link href="/attestation-entretien-hotte/">Attestation d&apos;entretien</Link>
                </li>
                <li>
                  <Link href="/tarifs/">Tarifs</Link>
                </li>
                <li>
                  <Link href="/expertise/">Centre d&apos;expertise</Link>
                </li>
                <li>
                  <Link href="/entreprise/">L&apos;entreprise</Link>
                </li>
                <li>
                  <Link href="/contact/">Contact</Link>
                </li>
              </ul>
            </section>

            <div className={s.drawerCta}>
              <a href={`tel:${site.phone.href}`} className="btn btn--block">
                Appel direct — {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className={s.drawerMail}>
                {site.email}
              </a>
              <Link href="/devis-nettoyage-hotte/" className="btn btn--gray btn--block">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
