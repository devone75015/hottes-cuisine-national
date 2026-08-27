import type { NextConfig } from "next";

/**
 * NEXT_PUBLIC_SITE_URL est inlinée AU BUILD, pas lue à l'exécution : le site
 * étant entièrement prégénéré, les balises canonical et og:image ainsi que le
 * sitemap sont figés dans les fichiers produits. La définir après coup
 * n'aurait aucun effet.
 *
 * Sans elle, le site se déclare sur le domaine de démonstration et Google
 * indexerait des canonical fausses. On le signale ici, et l'audit SEO le bloque
 * pour de bon (contrôle n° 8 de scripts/seo-audit.mjs).
 */
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    [
      "",
      "  ⚠  NEXT_PUBLIC_SITE_URL n'est pas définie.",
      "     Les canonical et les og:image porteront le domaine de démonstration.",
      "     Définissez-la AVANT de lancer le build.",
      "",
    ].join("\n"),
  );
}

const nextConfig: NextConfig = {
  /**
   * EXPORT STATIQUE — `next build` produit un dossier `out/` prêt à être
   * déposé sur n'importe quel hébergement web, sans processus Node.
   *
   * Le site s'y prête : les 96 pages sont déjà toutes prégénérées et aucune
   * ne dépend de la requête. Contrepartie assumée : plus de Server Actions,
   * le formulaire poste vers un point de réception externe (voir lib/lead.ts).
   */
  output: "export",

  /**
   * Slash final : l'architecture d'URL du cadrage l'utilise
   * (/nettoyage-hotte-restaurant/lyon/). En export, cette option produit
   * `out/…/index.html` plutôt que `out/….html` — c'est la structure qu'attend
   * un serveur Apache ou Nginx classique.
   */
  trailingSlash: true,

  sassOptions: {
    silenceDeprecations: ["import"],
  },

  images: {
    /**
     * L'optimiseur intégré exige un serveur : il n'existe pas en export.
     * On délègue le redimensionnement à Pexels lui-même via un chargeur
     * personnalisé, ce qui vaut mieux que `unoptimized: true`.
     */
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
  },

  poweredByHeader: false,
};

export default nextConfig;
