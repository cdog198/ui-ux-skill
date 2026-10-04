import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { films, getFilm } from "@content/films";
import type { Film } from "@content/types";
import Trailer from "@/components/Trailer";
import { LaurelIcon } from "@/components/Laurel";
import { filmHref, filmMeta, roleLabel } from "@/lib/film";

export const dynamicParams = false;

export function generateStaticParams() {
  return films.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/film/[slug]">): Promise<Metadata> {
  const f = getFilm((await params).slug);
  if (!f) return {};
  return {
    title: f.title,
    description: f.synopsis.slice(0, 155),
    openGraph: { images: f.poster ? [f.poster] : [] },
    alternates: { canonical: filmHref(f) },
  };
}

function Credits({ film }: { film: Film }) {
  return (
    <dl className="condensed mt-12 border-t border-linea text-[0.98rem]">
      {film.credits.map((c) => (
        <div key={c.label} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-linea py-3 sm:grid-cols-[11rem_1fr]">
          <dt className="text-nebbia lowercase">{c.label}</dt>
          <dd>{c.names}</dd>
        </div>
      ))}
      {film.country && (
        <div className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-linea py-3 sm:grid-cols-[11rem_1fr]">
          <dt className="text-nebbia">paese</dt>
          <dd>{film.country}</dd>
        </div>
      )}
    </dl>
  );
}

function Festivals({ film }: { film: Film }) {
  if (!film.awards.length && !film.selections.length) return null;
  // Group selections by year, newest first.
  const years = [...new Set(film.selections.map((s) => s.year))].sort((a, b) => b - a);
  return (
    <section aria-labelledby="festival" className="wrap grid gap-12 border-t border-linea py-20 md:grid-cols-12">
      <h2 id="festival" className="display display-md md:col-span-4">
        festival
      </h2>
      <div className="space-y-12 md:col-span-8">
        {film.awards.length > 0 && (
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {film.awards.map((a) => (
              <li key={a.title + a.festival} className="flex gap-3">
                <LaurelIcon className="mt-1 h-6 w-7 shrink-0 text-settemezzo" />
                <span>
                  <span className="block text-lg leading-snug">{a.title}</span>
                  <span className="text-nebbia">
                    {a.festival} {a.year}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}
        {years.length > 0 && (
          <div>
            <p className="text-nebbia">
              {film.selections.length} {film.selections.length === 1 ? "selezione" : "selezioni"}
            </p>
            {years.map((y) => (
              <div key={y} className="mt-6 grid grid-cols-[4rem_1fr] gap-4">
                <p className="condensed text-nebbia">{y}</p>
                <ul className="condensed columns-1 gap-8 leading-relaxed sm:columns-2">
                  {film.selections
                    .filter((s) => s.year === y)
                    .map((s) => (
                      <li key={s.festival} className="break-inside-avoid">
                        {s.festival}
                        {s.note && <span className="text-nebbia">, {s.note}</span>}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default async function FilmPage({ params }: PageProps<"/film/[slug]">) {
  const film = getFilm((await params).slug);
  if (!film) notFound();

  const i = films.indexOf(film);
  const prev = films[(i - 1 + films.length) % films.length];
  const next = films[(i + 1) % films.length];
  const trailerFrame = film.trailer ? `/media/stills/trailer-${film.trailer}.webp` : null;
  // Don't repeat the trailer frame as a still when the trailer is already on the page.
  const stills = film.stills.filter((s) => !(film.trailer && s.source === "trailer"));

  return (
    <article>
      <header className="wrap grid gap-10 pt-28 pb-20 md:grid-cols-12 md:pt-36">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-8">
            {film.poster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={film.poster} alt={`Locandina di ${film.title}`} className="aspect-[2/3] w-3/5 max-w-sm object-cover md:w-full" />
            ) : (
              <div className="display display-md flex aspect-[2/3] w-3/5 max-w-sm items-end bg-fondale-2 p-5 md:w-full">{film.title}</div>
            )}
          </div>
        </div>
        <div className="md:col-span-8">
          <p className="text-nebbia">
            {filmMeta(film)}
            <span className="mx-2 text-linea">/</span>
            {roleLabel(film)}
          </p>
          <h1 className="display display-lg mt-4 text-balance">{film.title}</h1>
          {film.director && <p className="mt-5 text-xl">regia di {film.director}</p>}
          <p className="measure mt-10 text-xl leading-relaxed text-schermo/90">{film.synopsis}</p>
          <Credits film={film} />
        </div>
      </header>

      {film.trailer && trailerFrame && (
        <section aria-label="Trailer" className="wrap pb-20">
          <Trailer id={film.trailer} title={film.title} poster={trailerFrame} />
        </section>
      )}

      {stills.length > 0 && (
        <section aria-label="Fotogrammi" className="space-y-0.5 pb-20">
          {stills.map((s, n) => (
            <figure key={s.src} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={`${film.title}, fotogramma ${n + 1}`} loading="lazy" className="h-auto w-full" />
              <figcaption className="condensed absolute right-[var(--gutter)] bottom-3 text-right text-[0.8rem] text-schermo [text-shadow:0_1px_8px_rgb(0_0_0/0.7)]">
                {film.title}, {film.year}
                {s.source === "trailer" && ", dal trailer"}
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      <Festivals film={film} />

      <nav aria-label="Altri titoli" className="wrap grid grid-cols-2 gap-6 border-t border-linea py-10">
        <Link href={filmHref(prev)} className="group">
          <span className="text-sm text-nebbia">precedente</span>
          <span className="display mt-1 block text-[clamp(1.6rem,3vw,2.6rem)] group-hover:underline">{prev.title}</span>
        </Link>
        <Link href={filmHref(next)} className="group text-right">
          <span className="text-sm text-nebbia">successivo</span>
          <span className="display mt-1 block text-[clamp(1.6rem,3vw,2.6rem)] group-hover:underline">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
