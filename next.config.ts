import type { NextConfig } from "next";

/**
 * NEXT_PUBLIC_SITE_URL est inlinée AU BUILD, pas lue à l'exécution : toutes les
 * pages étant prégénérées, les balises canonical et og:image sont figées dans
 * le HTML. La définir uniquement au runtime n'aurait donc aucun effet.
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
      "     Définissez-la dans hPanel AVANT que le build ne soit lancé.",
      "",
    ].join("\n"),
  );
}

const nextConfig: NextConfig = {
  /**
   * L'architecture d'URL définie au cadrage utilise le slash final
   * (/nettoyage-hotte-restaurant/lyon/). Sans cette option, chaque lien
   * interne déclencherait une redirection 308 — coûteuse en crawl.
   */
  trailingSlash: true,

  sassOptions: {
    silenceDeprecations: ["import"],
  },

  images: {
    // AVIF d'abord, WebP en repli (§27 du cadrage).
    formats: ["image/avif", "image/webp"],
    // Visuels d'illustration hébergés par Pexels (licence commerciale libre).
    // À remplacer par les photos d'intervention du client dès qu'elles existent.
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },

  poweredByHeader: false,

  /**
   * Hostinger place un reverse proxy devant le processus Node. La compression
   * y est déjà assurée : la refaire côté applicatif consommerait du CPU pour
   * rien sur un hébergement mutualisé.
   */
  compress: false,
};

export default nextConfig;
