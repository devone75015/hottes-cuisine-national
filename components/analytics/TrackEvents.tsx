"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

/**
 * Suivi des clics d'appel et de devis, par délégation sur le document.
 *
 * Un seul écouteur couvre tout le site plutôt qu'un `onClick` sur chacun des
 * boutons — ils sont répartis dans l'en-tête, le pied de page, la barre fixe
 * mobile, les bandeaux, les colonnes latérales et les pages. En instrumenter
 * chacun garantissait d'en oublier un, aujourd'hui ou au prochain ajout.
 *
 * Effet secondaire utile : tout futur lien `tel:` ou lien vers la page devis
 * est mesuré sans qu'on ait à y penser.
 */
export function TrackEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      // Emplacement du clic, pour distinguer la barre fixe du hero ou du footer.
      const from = window.location.pathname;

      if (href.startsWith("tel:")) {
        analytics.telClick(href.replace("tel:", ""), from);
        return;
      }

      if (href.includes("/devis-nettoyage-hotte/")) {
        analytics.devisClick(from);
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
