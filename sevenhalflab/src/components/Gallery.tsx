import type { Photo } from "@content/types";

/** Photos at their own proportions, in columns, with the site's own captions. */
export default function Gallery({ photos, label }: { photos: Photo[]; label: string }) {
  return (
    <ul aria-label={label} className="columns-1 gap-0.5 sm:columns-2 lg:columns-3">
      {photos.map((p) => (
        <li key={p.src} className="mb-0.5 break-inside-avoid">
          <figure className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.caption ?? ""} width={p.width} height={p.height} loading="lazy" decoding="async" className="h-auto w-full" />
            {p.caption && (
              <figcaption className="condensed absolute right-3 bottom-2 left-3 text-right text-[0.8rem] text-schermo [text-shadow:0_1px_8px_rgb(0_0_0/0.7)]">
                {p.caption}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
