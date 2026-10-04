"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import type { Img } from "@/content/examples/types";
import { useL } from "@/lib/i18n";

/** Lightweight scroll-snap carousel: swipe on touch, buttons + dots everywhere. */
export function RoomCarousel({ images, label, prevLabel, nextLabel }: { images: Img[]; label: string; prevLabel: string; nextLabel: string }) {
  const tr = useL();
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + images.length) % images.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="group relative" role="region" aria-roledescription="carousel" aria-label={label}>
      <div ref={track} onScroll={onScroll} className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] w-full shrink-0 snap-center" role="group" aria-roledescription="slide" aria-label={`${i + 1} / ${images.length}`}>
            <Photo src={img.src} alt={tr(img.alt)} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        ))}
      </div>
      <button type="button" onClick={() => go(index - 1)} aria-label={prevLabel} className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#FAF7F1]/90 text-[#14202B] shadow">
        <ChevronLeft aria-hidden className="size-5" />
      </button>
      <button type="button" onClick={() => go(index + 1)} aria-label={nextLabel} className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#FAF7F1]/90 text-[#14202B] shadow">
        <ChevronRight aria-hidden className="size-5" />
      </button>
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5" aria-hidden>
        {images.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full bg-[#FAF7F1] transition-all ${i === index ? "w-6" : "w-1.5 opacity-60"}`} />
        ))}
      </div>
    </div>
  );
}
