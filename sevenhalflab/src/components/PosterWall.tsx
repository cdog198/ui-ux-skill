import Link from "next/link";
import type { Film } from "@content/types";
import { filmHref, filmMeta } from "@/lib/film";
import { LaurelCount } from "./Laurel";

function Poster({ film, priority }: { film: Film; priority?: boolean }) {
  return (
    <li>
      <Link href={filmHref(film)} className="poster relative block aspect-[2/3] overflow-hidden bg-fondale-2">
        {film.poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={film.poster}
            alt={`Locandina di ${film.title}`}
            className="h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          // No poster: the title set in type on a plain block.
          <span className="display display-md flex h-full items-end p-4">{film.title}</span>
        )}

        {/* Proof sits on the poster, like a laurel printed on a one-sheet. */}
        {(film.awards.length > 0 || film.selections.length > 0) && (
          <span className="absolute top-3 left-3 rounded-sm bg-fondale/80 px-1.5 py-1 backdrop-blur-sm">
            <LaurelCount awards={film.awards.length} selections={film.selections.length} />
          </span>
        )}

        <span className="poster-caption absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
          <span className="display text-[clamp(1.8rem,3vw,2.8rem)]">{film.title}</span>
          <span className="mt-2 text-sm text-schermo/80">{film.director}</span>
          <span className="text-sm text-nebbia">{filmMeta(film)}</span>
        </span>
      </Link>
      <p className="poster-touch hidden px-0.5 pt-2 pb-3 text-sm leading-snug">
        {film.title}
        <span className="block text-nebbia">{film.year}</span>
      </p>
    </li>
  );
}

// Pick the column count that fills the last row: 9 titles at 3, 8 or 4 at 4.
export default function PosterWall({ films, eager = 0, cols = 3 }: { films: Film[]; eager?: number; cols?: 3 | 4 }) {
  return (
    <ul className={`grid grid-cols-2 gap-0.5 ${cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {films.map((f, i) => (
        <Poster key={f.slug} film={f} priority={i < eager} />
      ))}
    </ul>
  );
}
