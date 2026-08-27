import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
/**
 * Requis par `output: "export"` : ce fichier est un route handler, il faut
 * déclarer explicitement qu'il est calculable au build.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Landing pages Google Ads : conversion pure, jamais indexées (§16).
          "/lp/",
          // Paramètres de tracking — évite la multiplication d'URL dupliquées.
          "/*?gclid=",
          "/*?utm_",
          "/*?fbclid=",
        ],
      },
    ],
    // Pas de slash final ici : c'est un fichier, pas un répertoire.
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
