import Image from "next/image";
import { getImage, pexelsUrl } from "@/data/images";
import s from "./Cover.module.scss";

/**
 * Visuel de page, rendu via next/image (AVIF/WebP, dimensionnement responsive).
 *
 * `alt` et `title` proviennent du manifeste `data/images.ts` : une image dont
 * la clé n'y figure pas n'est tout simplement pas rendue, plutôt que d'afficher
 * une balise cassée ou un alt vide.
 */
export function Cover({
  imageKey,
  priority = false,
  caption = true,
  className,
}: {
  imageKey: string;
  /** À activer uniquement sur l'image LCP de la page. */
  priority?: boolean;
  caption?: boolean;
  className?: string;
}) {
  const img = getImage(imageKey);
  if (!img) return null;

  return (
    <figure className={[s.figure, className].filter(Boolean).join(" ")} data-ratio={img.ratio}>
      <div className={s.frame}>
        <Image
          src={pexelsUrl(img.pexelsId, 1600)}
          alt={img.alt}
          title={img.title}
          fill
          sizes="(max-width: 860px) 100vw, (max-width: 1240px) 60vw, 760px"
          priority={priority}
          className={s.img}
        />
      </div>
      {caption && (
        <figcaption className={s.caption}>
          <span className={s.captionTitle}>{img.title}</span>
          <span className={s.credit}>{img.credit}</span>
        </figcaption>
      )}
    </figure>
  );
}

/** Vignette carrée sans légende — grilles d'établissements. */
export function Thumb({ imageKey, className }: { imageKey: string; className?: string }) {
  const img = getImage(imageKey);
  if (!img) return null;

  return (
    <span className={[s.thumb, className].filter(Boolean).join(" ")}>
      <Image
        src={pexelsUrl(img.pexelsId, 600)}
        alt={img.alt}
        title={img.title}
        fill
        sizes="(max-width: 640px) 45vw, 240px"
        className={s.img}
      />
    </span>
  );
}
