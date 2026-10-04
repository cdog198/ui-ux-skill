import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { SalonSite } from "@/components/examples/salon/SalonSite";

// Demo-only fonts: loaded on this route only.
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-iris-display", display: "swap" });
const sans = Outfit({ subsets: ["latin"], variable: "--font-iris-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Example: Salone Iris (hair salon website)",
  description: "An example hair salon website by CPD Web Design: price list, online appointment booking, team, gallery and live opening hours.",
  alternates: { canonical: "/examples/salon" },
  robots: { index: false, follow: true }, // fictional business
};

export default function SalonExamplePage() {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <SalonSite />
    </div>
  );
}
