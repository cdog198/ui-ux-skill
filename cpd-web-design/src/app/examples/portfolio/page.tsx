import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import { PortfolioSite } from "@/components/examples/portfolio/PortfolioSite";

// Demo-only fonts: loaded on this route only.
const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-mr-display", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-mr-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Example: Marta Ricci Fotografia (one-page portfolio)",
  description: "An example one-page portfolio website by CPD Web Design: filterable gallery, services with prices and an enquiry form.",
  alternates: { canonical: "/examples/portfolio" },
  robots: { index: false, follow: true }, // fictional business
};

export default function PortfolioExamplePage() {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <PortfolioSite />
    </div>
  );
}
