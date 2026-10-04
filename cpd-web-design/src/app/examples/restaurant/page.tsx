import type { Metadata } from "next";
import { Karla, Young_Serif } from "next/font/google";
import { RestaurantSite } from "@/components/examples/restaurant/RestaurantSite";

// Demo-only fonts: loaded on this route only.
const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-alba-display", display: "swap" });
const sans = Karla({ subsets: ["latin"], variable: "--font-alba-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Example: Trattoria Alba (restaurant website)",
  description: "A complete example restaurant website by CPD Web Design: interactive menu, table bookings, live opening hours, gallery and more.",
  alternates: { canonical: "/examples/restaurant" },
  // Fictional business: keep it out of search results so it's never mistaken for a real restaurant.
  robots: { index: false, follow: true },
  openGraph: { title: "Example restaurant site: Trattoria Alba", url: "/examples/restaurant" },
};

export default function RestaurantExamplePage() {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <RestaurantSite />
    </div>
  );
}
