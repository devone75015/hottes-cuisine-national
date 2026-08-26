import Link from "next/link";
import { site } from "@/lib/site";
import { pillars } from "@/data/services";
import { regions } from "@/data/regions";
import s from "./Footer.module.scss";

/**
 * Footer volontairement court : 22 liens maximum (§19 du cadrage).
 * Un footer à 300 liens casse les silos et dilue le maillage.
 */
export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.top}`}>
        <div className={s.brand}>
          <p className={s.logoText}>
            Hottes <em>Expert</em> France
          </p>
          <p className={s.baseline}>{site.baseline}.</p>
          <a href={`tel:${site.phone.href}`} className={s.phone}>
            {site.phone.display}
          </a>
          <p className={s.hours}>
            {site.hours}
            <br />
            {site.emergency}
          </p>
        </div>

        <nav className={s.col} aria-label="Prestations">
          <p className={s.colHead}>Prestations</p>
          <ul>
            {pillars.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}/`}>{p.nav}</Link>
              </li>
            ))}
            <li>
              <Link href="/contrat-entretien-hotte-professionnelle/">Contrat d&apos;entretien</Link>
            </li>
          </ul>
        </nav>

        <nav className={s.col} aria-label="Régions">
          <p className={s.colHead}>Régions</p>
          <ul className={s.regionList}>
            {regions.map((r) => (
              <li key={r.slug}>
                <Link href={`/zones/${r.slug}/`}>{r.shortName}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={s.col} aria-label="Entreprise">
          <p className={s.colHead}>En savoir plus</p>
          <ul>
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
        </nav>
      </div>

      <div className={`container ${s.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.legalName}. Intervention sur l&apos;ensemble du
          territoire métropolitain.
        </p>
        <p className={s.legal}>
          <Link href="/mentions-legales/">Mentions légales</Link>
          <span aria-hidden="true">·</span>
          <Link href="/confidentialite/">Confidentialité</Link>
        </p>
      </div>
    </footer>
  );
}
