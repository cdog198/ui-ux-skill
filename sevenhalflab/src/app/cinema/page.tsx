import type { Metadata } from "next";
import { cinema } from "@content/site";
import { films, getFilm } from "@content/films";
import SectionPage from "@/components/SectionPage";
import PosterWall from "@/components/PosterWall";
import { filmHref } from "@/lib/film";

export const metadata: Metadata = { title: "Cinema", description: cinema.intro };

const lento = getFilm("lento")!;
const produced = films.filter((f) => f.roles.some((r) => r !== "distribuzione"));

export default function Cinema() {
  return (
    <SectionPage
      label="cinema"
      lines={["liberi di creare:", "la nostra visione", "cinematografica"]}
      image="/media/stills/lento-1.webp"
      credit={{ title: lento.title, year: lento.year, director: lento.director, href: filmHref(lento) }}
      intro={[cinema.intro]}
      services={cinema.services}
      why={cinema.why}
      closing={["il futuro è un foglio bianco:", "scriviamolo insieme"]}
    >
      <section aria-labelledby="prodotti" className="py-12">
        <h2 id="prodotti" className="wrap mb-5 text-lg text-schermo/80">
          i nostri film
        </h2>
        <PosterWall films={produced} />
      </section>
    </SectionPage>
  );
}
