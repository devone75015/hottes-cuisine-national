import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";
import type { Faq } from "./types";
import { getImage, pexelsUrl } from "@/data/images";

/**
 * Construit les métadonnées d'une page.
 * `canonical` est systématiquement posé — aucune page ne part sans.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /**
   * Clé du manifeste `data/images.ts` servant d'image de partage.
   * Sans elle, un lien partagé sur LinkedIn, WhatsApp ou Slack s'affiche sans
   * visuel — ce qui divise mécaniquement son taux de clic.
   */
  image?: string;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const img = opts.image ? getImage(opts.image) : undefined;
  const ogImage = img
    ? [{ url: pexelsUrl(img.pexelsId, 1200), width: 1200, alt: img.alt }]
    : undefined;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      title: opts.title,
      description: opts.description,
      url,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: ogImage?.map((i) => i.url),
    },
    robots: opts.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.baseline,
    areaServed: { "@type": "Country", name: "France" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${site.phone.href.replace("+", "")}`,
      contactType: "sales",
      areaServed: "FR",
      availableLanguage: "French",
    },
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: "Nettoyage et entretien de systèmes d'extraction de cuisine professionnelle",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: opts.areaName
      ? { "@type": "Place", name: opts.areaName }
      : { "@type": "Country", name: "France" },
    audience: { "@type": "BusinessAudience", name: "Cuisines professionnelles" },
  };
}

export function faqJsonLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  path: string;
  published: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.published,
    dateModified: opts.published,
    mainEntityOfPage: absoluteUrl(opts.path),
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}
