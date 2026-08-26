import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { regions } from "@/data/regions";
import { services, serviceCityPairs } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

/**
 * Sitemap.
 *
 * Segmentation logique par silo via la priorité et la fréquence : on isole
 * immédiatement quel bloc est mal indexé dans la Search Console. Le passage
 * à un sitemap index (generateSitemaps) deviendra pertinent au-delà de
 * quelques milliers d'URL — pas nécessaire en vague 1.
 *
 * Les pages en noindex (mentions légales, confidentialité, futures LP Ads)
 * n'y figurent volontairement pas.
 */

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/devis-nettoyage-hotte/"), changeFrequency: "monthly", priority: 0.9 },
    {
      url: absoluteUrl("/contrat-entretien-hotte-professionnelle/"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/prix-nettoyage-hotte-restaurant/"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/prix-ramonage-hotte-restaurant/"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    { url: absoluteUrl("/tarifs/"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/notre-methode-intervention/"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/attestation-entretien-hotte/"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/entreprise/"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/contact/"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/zones/"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/expertise/"), changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: absoluteUrl(`/${s.slug}/`),
    changeFrequency: "monthly",
    priority: s.isPillar ? 0.95 : 0.85,
  }));

  const cityPages: MetadataRoute.Sitemap = serviceCityPairs().map(({ service, city }) => ({
    url: absoluteUrl(`/${service}/${city}/`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: absoluteUrl(`/zones/${r.slug}/`),
    changeFrequency: "monthly",
    priority: r.wave === 1 ? 0.8 : 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: absoluteUrl(`/expertise/${a.slug}/`),
    lastModified: new Date(a.published),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...regionPages,
    ...articlePages,
  ].map((entry) => ({ lastModified: now, ...entry }));
}
