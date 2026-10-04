import Link from "next/link";
import { films, getFilm } from "@content/films";
import { home, distribuzione } from "@content/site";
import PosterWall from "@/components/PosterWall";
import FormatFilter from "@/components/FormatFilter";
import Reel, { type ReelCredit } from "@/components/Reel";
import Statement from "@/components/Statement";
import SectionLabel from "@/components/SectionLabel";
import { filmHref } from "@/lib/film";

function creditFor(slug: string, note?: string): ReelCredit {
  const f = getFilm(slug)!;
  return { title: f.title, year: f.year, director: f.director, href: filmHref(f), note };
}

export default function Home() {
  return (
    <>
      {/* Hero: the client's tagline, set huge, over a frame from their newest film. */}
      <Reel
        image="/media/stills/solo-il-mare-1.webp"
        credit={creditFor("solo-il-mare")}
        className="min-h-[100svh]"
        priority
      >
        <p className="mb-4 text-lg text-schermo/85">{home.statementLead}</p>
        <Statement as="h1" lines={home.statement} size="display-xl" rise />
        <p className="mt-8 max-w-[34ch] text-lg text-schermo/85">{home.line}</p>
      </Reel>

      {/* The catalogue is the homepage. */}
      <section id="catalogo" aria-label="Catalogo" className="scroll-mt-4 pt-16">
        <FormatFilter count={films.length} />
        <PosterWall films={films} eager={4} />
      </section>

      <Reel image="/media/subacquea/maaa08675.webp" credit={{ title: "Galleria subacquea", note: "fotografia", href: "/subacquea/" }}>
        <SectionLabel href="/subacquea/">subacquea</SectionLabel>
        <Statement lines={["l'avventura inizia", "sotto la superficie."]} />
      </Reel>

      <Reel image="/media/stills/i-corpi-degli-altri-2.webp" credit={creditFor("i-corpi-degli-altri")}>
        <SectionLabel href="/distribuzione-indipendente/">distribuzione</SectionLabel>
        <Statement lines={distribuzione.statement} />
      </Reel>

      <Reel image="/media/commercial/aaa07740.webp" credit={{ title: "Fashion Shooting", note: "commercial", href: "/commercial/" }}>
        <SectionLabel href="/commercial/">commercial</SectionLabel>
        <Statement lines={["storie, non semplici", "pubblicità."]} />
      </Reel>

      <section className="wrap grid gap-12 py-28 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionLabel href="/chi-siamo/">chi siamo</SectionLabel>
          <blockquote>
            <Statement as="p" lines={["“il visionario è", "l'unico realista”"]} size="display-lg" />
            <footer className="mt-5 text-nebbia">{home.quote.author}</footer>
          </blockquote>
        </div>
        <div className="space-y-5 text-schermo/85 md:col-span-5 md:pt-14">
          {home.philosophy.map((p) => (
            <p key={p.slice(0, 20)} className="measure">
              {p}
            </p>
          ))}
          <Link href="/chi-siamo/" className="inline-block underline decoration-schermo/40 hover:decoration-schermo">
            Leggi la storia di Sevenhalf Lab
          </Link>
        </div>
      </section>

      <section className="wrap border-t border-linea py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 className="display display-md md:col-span-5">impegno ambientale</h2>
          <p className="measure text-schermo/80 md:col-span-7">{home.environment}</p>
        </div>
      </section>
    </>
  );
}
