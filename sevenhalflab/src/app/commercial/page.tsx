import type { Metadata } from "next";
import { commercial, commercialGallery } from "@content/site";
import SectionPage from "@/components/SectionPage";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = { title: "Commercial", description: commercial.intro[0] };

export default function Commercial() {
  return (
    <SectionPage
      label="commercial"
      lead="Raccontare il tuo marchio, illuminare il tuo messaggio:"
      lines={["storie, non semplici", "pubblicità"]}
      image="/media/commercial/aaa02539.webp"
      credit={{ title: "Still Life per Chiara De Concilio", note: "commercial" }}
      intro={commercial.intro}
      services={commercial.services}
      why={commercial.why}
      closing={["il tuo marchio,", "la nostra passione"]}
    >
      <section aria-label="Lavori commercial" className="py-12">
        <Gallery photos={commercialGallery} label="Lavori commercial" />
      </section>
    </SectionPage>
  );
}
