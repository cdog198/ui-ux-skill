import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { HotelSite } from "@/components/examples/hotel/HotelSite";

// Demo-only fonts: loaded on this route only.
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-vg-display", display: "swap" });
const sans = Jost({ subsets: ["latin"], variable: "--font-vg-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Example: Hotel Via Giulia (boutique hotel website)",
  description: "A complete example hotel website by CPD Web Design: availability search, room carousels, direct booking requests, local guide and more.",
  alternates: { canonical: "/examples/hotel" },
  // Fictional business: keep it out of search results so it's never mistaken for a real hotel.
  robots: { index: false, follow: true },
  openGraph: { title: "Example hotel site: Hotel Via Giulia", url: "/examples/hotel" },
};

export default function HotelExamplePage() {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <HotelSite />
    </div>
  );
}
