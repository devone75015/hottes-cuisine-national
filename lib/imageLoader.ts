/**
 * Chargeur d'images pour l'export statique.
 *
 * En `output: "export"`, l'optimiseur intégré de Next n'existe plus : il n'y a
 * pas de serveur pour redimensionner à la volée. Le repli habituel est
 * `images.unoptimized: true`, qui sert à chaque fois l'image pleine largeur —
 * coûteux en bande passante et mauvais pour le LCP sur mobile.
 *
 * On fait mieux : Pexels redimensionne lui-même via le paramètre `w` de l'URL.
 * Ce chargeur réécrit donc `w` avec la largeur réellement demandée par
 * `next/image`, qui continue de produire un `srcset` correct. Le navigateur
 * télécharge la bonne taille, sans serveur intermédiaire.
 *
 * Les images locales (futures photos d'intervention placées dans /public) sont
 * renvoyées telles quelles : elles seront déjà dimensionnées à la source.
 */

interface LoaderArgs {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width }: LoaderArgs): string {
  // Chemin local servi depuis /public — rien à réécrire.
  if (!src.startsWith("http")) return src;

  try {
    const url = new URL(src);

    if (url.hostname === "images.pexels.com") {
      url.searchParams.set("w", String(width));
      // `auto=compress` et `cs=tinysrgb` sont déjà posés par pexelsUrl().
      // On ne touche pas à la qualité : Pexels ne l'expose pas, et forcer un
      // paramètre inconnu ferait tomber son cache CDN.
      return url.toString();
    }

    return src;
  } catch {
    // URL malformée : on renvoie la source plutôt que de casser le rendu.
    return src;
  }
}
