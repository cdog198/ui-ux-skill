import type { Metadata } from "next";
import { ExamplesIndex } from "@/components/site/ExamplesIndex";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Example sites",
  description: "Fully working example websites for restaurants and hotels in Rome, built by CPD Web Design. See exactly what you'd get, free.",
  alternates: { canonical: "/examples" },
};

export default function ExamplesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ExamplesIndex />
      </main>
      <Footer />
    </>
  );
}
