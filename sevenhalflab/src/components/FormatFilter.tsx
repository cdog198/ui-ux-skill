import Link from "next/link";
import { films, formats } from "@content/films";

/** Catalogue tabs above a poster wall. `current` = format slug, or undefined for "tutti". */
export default function FormatFilter({ current, count }: { current?: string; count: number }) {
  const items = [{ href: "/#catalogo", label: "tutti", slug: undefined as string | undefined, n: films.length }].concat(
    formats.map((f) => ({ href: `/${f.slug}/`, label: f.label, slug: f.slug as string | undefined, n: films.filter((x) => x.format === f.key).length })),
  );
  return (
    <div className="wrap flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pb-5">
      <nav aria-label="Catalogo per formato">
        <ul className="flex flex-wrap gap-x-6 gap-y-1 text-lg">
          {items.map((it) => {
            const active = it.slug === current;
            return (
              <li key={it.label}>
                <Link
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "underline" : "text-nebbia hover:text-schermo"}
                >
                  {it.label}
                  <sup className="ml-0.5 text-[0.65em] text-nebbia">{it.n}</sup>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className="text-sm text-nebbia">{count === 1 ? "1 titolo" : `${count} titoli`}</p>
    </div>
  );
}
