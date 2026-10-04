import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SimplePage } from "@/components/site/SimplePage";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <SimplePage kind="privacy" />
      </main>
      <Footer />
    </>
  );
}
