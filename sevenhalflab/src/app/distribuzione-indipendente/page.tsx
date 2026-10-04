import type { Metadata } from "next";
import { distribuzione } from "@content/site";
import { films, getFilm } from "@content/films";
import Reel from "@/components/Reel";
import Statement from "@/components/Statement";
import PosterWall from "@/components/PosterWall";
import Cta from "@/components/Cta";
import { filmHref } from "@/lib/film";

export const metadata: Metadata = { title: "Distribuzione indipendente", description: distribuzione.paragraphs[0] };

const macbeth = getFilm("macbeth-cuore-nero")!;
const distributed = films.filter((f) => f.roles.includes("distribuzione"));
const awards = distributed.reduce((n, f) => n + f.awards.length, 0);
const selections = distributed.reduce((n, f) => n + f.selections.length, 0);

export default function Distribuzione() {
  return (
    <>
      <Reel
        image="/media/stills/macbeth-cuore-nero-2.webp"
        credit={{ title: macbeth.title, year: macbeth.year, director: macbeth.director, href: filmHref(macbeth) }}
        className="min-h-[88svh]"
        priority
      >
        <p className="mb-4 text-lg text-schermo/85">distribuzione indipendente</p>
        <Statement as="h1" lines={distribuzione.statement} size="display-lg" rise />
      </Reel>

      <section className="wrap grid gap-8 py-20 md:grid-cols-12">
        <div className="space-y-5 text-xl leading-relaxed md:col-span-7 md:col-start-5">
          {distribuzione.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="measure">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="in-distribuzione" className="pb-12">
        <div className="wrap mb-5 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="in-distribuzione" className="text-lg text-schermo/80">
            in distribuzione
          </h2>
          {/* Totals are counted from the festival lists on each film page. */}
          <p className="text-sm text-nebbia">
            {selections} selezioni, <span className="text-settemezzo">{awards} premi</span>
          </p>
        </div>
        <PosterWall films={distributed} />
      </section>

      <Cta lines={["il futuro è un foglio bianco:", "scriviamolo insieme"]} />
    </>
  );
}
