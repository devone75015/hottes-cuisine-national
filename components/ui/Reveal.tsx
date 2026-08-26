import type { ReactNode } from "react";

/**
 * Révélation au scroll — 100 % CSS, via `animation-timeline: view()`.
 *
 * Aucun JavaScript, aucun état, aucun IntersectionObserver : c'est un
 * composant serveur. Les navigateurs qui ne supportent pas les timelines de
 * scroll affichent simplement le contenu, sans animation et sans risque de
 * bloc invisible si le JS ne s'exécute pas. `prefers-reduced-motion` est
 * respecté au niveau de la feuille de styles.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "article";
  /** Décalage d'entrée en px — produit l'effet d'escalier dans une grille. */
  delay?: number;
  className?: string;
}) {
  return (
    <Tag
      className={["reveal", className].filter(Boolean).join(" ")}
      style={delay ? ({ "--reveal-offset": `${delay}px` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
