import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { TrackEvents } from "@/components/analytics/TrackEvents";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.scss";

/* Grotesque industrielle — titres, navigation, chiffres */
const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/* Serif de labeur — contenus éditoriaux longs */
const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600"],
});

/* Mono — labels, données, repères techniques */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Nettoyage, dégraissage et ramonage de hottes professionnelles`,
    template: `%s | ${site.name}`,
  },
  description: site.baseline,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  formatDetection: { telephone: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        {/*
          Google Tag Manager — le plus haut possible dans le <head>, comme le
          demande la documentation de GTM.

          ESLint suggère le composant GoogleTagManager de @next/third-parties.
          Il est écarté sciemment : il injecte le conteneur via next/script en
          `afterInteractive`, donc dans le <body> après hydratation. La consigne
          de GTM ne serait pas respectée, et sur un export statique le conteneur
          dépendrait alors entièrement du JavaScript.

          `next/script` en `beforeInteractive` a également été essayé : malgré
          ce qu'annonce sa documentation, le script atterrit dans le mécanisme
          d'amorçage de Next, en début de <body>. Vérifié dans le HTML produit.
        */}
        {site.gtmId && (
          // eslint-disable-next-line @next/next/next-script-for-ga
          <script
            id="gtm-init"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`,
            }}
          />
        )}
      </head>

      <body>
        {/* Repli sans JavaScript — doit rester le tout premier enfant de body. */}
        {site.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}

        <a href="#contenu" className="skipLink">
          Aller au contenu
        </a>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <StickyMobileCta />
        <TrackEvents />
      </body>
    </html>
  );
}
