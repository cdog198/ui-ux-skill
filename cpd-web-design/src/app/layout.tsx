import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { Providers } from "@/components/ui/Providers";
import { contact, pricing, site } from "@/config/site";
import { translations } from "@/content/translations";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-newsreader",
  display: "swap",
  preload: false, // accent font: let the main font win the bandwidth race
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

const t = translations.en;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: t.meta.title, template: `%s · ${site.name}` },
  description: t.meta.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: t.meta.title,
    description: t.meta.description,
    url: "/",
    locale: "en_GB",
    alternateLocale: ["it_IT"],
  },
  twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#15120E",
};

/** Structured data: tells Google this is a local web-design business in Rome. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: t.meta.description,
  url: site.url,
  email: contact.email,
  telephone: contact.phoneDisplay,
  image: `${site.url}/opengraph-image`,
  priceRange: `€${Math.min(...pricing.tiers.map((x) => x.monthly))}–€${Math.max(...pricing.tiers.map((x) => x.monthly))}/month`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: [{ "@type": "City", name: "Rome" }, { "@type": "Country", name: "Italy" }],
  knowsLanguage: ["en", "it"],
  makesOffer: pricing.tiers.map((tier) => ({
    "@type": "Offer",
    name: `${tier.name} website plan`,
    description: tier.summary.en,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: tier.monthly,
      priceCurrency: "EUR",
      unitCode: "MON",
    },
  })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
