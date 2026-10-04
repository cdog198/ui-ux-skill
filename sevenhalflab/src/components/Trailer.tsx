"use client";

import { useState } from "react";

/**
 * Click-to-load YouTube (privacy-enhanced domain). Nothing is fetched from YouTube
 * until the visitor presses play, the same consent behaviour the old site had via Complianz.
 */
export default function Trailer({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-fondale-2">
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`Trailer di ${title}`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="group absolute inset-0 h-full w-full text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" loading="lazy" className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-90" />
          <span className="absolute bottom-0 left-0 flex items-center gap-4 p-5 sm:p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-schermo text-fondale sm:h-16 sm:w-16">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" aria-hidden fill="currentColor">
                <path d="M7 4.5v15l12.5-7.5z" />
              </svg>
            </span>
            <span className="text-lg">
              Guarda il trailer
              <span className="block text-sm text-schermo/70">si apre il video da YouTube</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
