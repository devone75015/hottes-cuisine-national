import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { JsonLd } from "@/components/ui/JsonLd";
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
      <body>
        <a href="#contenu" className="skipLink">
          Aller au contenu
        </a>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
