import type { Metadata } from "next";
import { subacquea, subacqueaGallery } from "@content/site";
import SectionPage from "@/components/SectionPage";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = { title: "Subacquea", description: subacquea.intro[0] };

export default function Subacquea() {
  return (
    <SectionPage
      label="subacquea"
      lead="la nostra missione:"
      lines={["esplorare,", "catturare,", "condividere"]}
      image="/media/subacquea/aaa05446.webp"
      credit={{ title: "Galleria subacquea", note: "fotografia" }}
      intro={subacquea.intro}
      services={subacquea.services}
      why={subacquea.why}
      closing={["l'avventura inizia sotto la superficie.", "siete pronti a esplorare con noi?"]}
    >
      <section aria-label="Galleria subacquea" className="py-12">
        <Gallery photos={subacqueaGallery} label="Fotografie subacquee" />
      </section>
    </SectionPage>
  );
}
