import type { Metadata } from "next";
import { Figtree, Gloock } from "next/font/google";
import { YogaSite } from "@/components/examples/yoga/YogaSite";

// Demo-only fonts: loaded on this route only.
const display = Gloock({ subsets: ["latin"], weight: "400", variable: "--font-resp-display", display: "swap" });
const sans = Figtree({ subsets: ["latin"], variable: "--font-resp-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Example: Respiro Yoga (yoga studio website)",
  description: "An example yoga studio website by CPD Web Design: weekly timetable with filters, class booking, passes, teachers and FAQ.",
  alternates: { canonical: "/examples/yoga" },
  robots: { index: false, follow: true }, // fictional business
};

export default function YogaExamplePage() {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <YogaSite />
    </div>
  );
}
