import type { NextConfig } from "next";

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
};

export default nextConfig;
