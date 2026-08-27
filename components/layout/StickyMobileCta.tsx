"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import s from "./StickyMobileCta.module.scss";

/**
 * Barre d'appel fixe mobile (§21 du cadrage).
 *
 * Elle apparaît dès le premier pixel de défilement. Le seuil précédent — 12 %
 * de la hauteur de page — la retenait très longtemps sur les pages longues :
 * sur une page ville, 12 % représentent plusieurs écrans, et le prospect
 * pouvait lire une bonne partie du contenu sans jamais voir le bouton d'appel.
 *
 * Elle reste masquée tout en haut de page, où le hero porte déjà ses propres
 * boutons : l'afficher là ferait doublon et masquerait l'accroche.
 */
export function StickyMobileCta() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShown(window.scrollY > 0);
    }

    // Appel immédiat : au retour en arrière, le navigateur restaure la
    // position de défilement sans émettre d'événement scroll.
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={s.bar} data-shown={shown || undefined}>
      <a href={`tel:${site.phone.href}`} className={s.call}>
        <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16">
          <path
            d="M3 1.5h2.4l1.2 3-1.5 1.1a9 9 0 0 0 4.3 4.3l1.1-1.5 3 1.2V12a2 2 0 0 1-2.2 2A12.5 12.5 0 0 1 1 3.7 2 2 0 0 1 3 1.5Z"
            fill="currentColor"
          />
        </svg>
        Appel direct
      </a>
      <Link href="/devis-nettoyage-hotte/" className={s.quote}>
        Demander un devis
      </Link>
    </div>
  );
}
