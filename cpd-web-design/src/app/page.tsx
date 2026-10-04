import { About } from "@/components/site/About";
import { Catch } from "@/components/site/Catch";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Included } from "@/components/site/Included";
import { Industries } from "@/components/site/Industries";
import { Pricing } from "@/components/site/Pricing";
import { Work } from "@/components/site/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <HowItWorks />
        <Pricing />
        <Included />
        <Catch />
        <Industries />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
