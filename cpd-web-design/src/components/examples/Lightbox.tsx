"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import type { Img } from "@/content/examples/types";
import { useL } from "@/lib/i18n";

const labels = {
  open: { en: "Open photo", it: "Apri foto" },
  close: { en: "Close", it: "Chiudi" },
  prev: { en: "Previous photo", it: "Foto precedente" },
  next: { en: "Next photo", it: "Foto successiva" },
  of: { en: "of", it: "di" },
};

/**
 * Grid of thumbnails + accessible full-screen viewer built on <dialog>
 * (focus trapping and Esc come for free). Arrow keys move between photos.
 */
export function Gallery({
  images,
  className = "",
  itemClassName = () => "aspect-square",
  sizes = "(min-width: 1024px) 33vw, 50vw",
}: {
  images: Img[];
  className?: string;
  itemClassName?: (i: number) => string;
  sizes?: string;
}) {
  const tr = useL();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback((dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)), [images.length]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    d.addEventListener("keydown", onKey);
    d.addEventListener("close", onClose);
    return () => {
      d.removeEventListener("keydown", onKey);
      d.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : images[index];

  return (
    <>
      <ul className={className}>
        {images.map((img, i) => (
          <li key={`${img.src}-${i}`} className={`relative overflow-hidden ${itemClassName(i)}`}>
            <button type="button" onClick={() => open(i)} className="group absolute inset-0 block size-full cursor-zoom-in" aria-label={`${tr(labels.open)}: ${tr(img.alt)}`}>
              <Photo src={img.src} alt="" label={tr(img.alt)} sizes={sizes} className="transition-transform duration-500 group-hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current ? tr(current.alt) : undefined}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 text-white backdrop:bg-black/80"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        {current && index !== null && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-4 text-sm">
              <span aria-live="polite">
                {index + 1} {tr(labels.of)} {images.length} · {tr(current.alt)}
              </span>
              <button type="button" onClick={close} autoFocus className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20" aria-label={tr(labels.close)}>
                <X aria-hidden className="size-5" />
              </button>
            </div>
            <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
              {broken[index] ? (
                <Photo src={null} alt={tr(current.alt)} sizes="100vw" />
              ) : (
                <Image
                  src={current.src}
                  alt={tr(current.alt)}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  loader={current.src.startsWith("https://images.unsplash.com/") ? ({ src, width }) => `${src}?auto=format&w=${width}&q=75` : undefined}
                  onError={() => setBroken((b) => ({ ...b, [index]: true }))}
                />
              )}
            </div>
            <div className="flex justify-center gap-3 p-4">
              <button type="button" onClick={() => step(-1)} className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20" aria-label={tr(labels.prev)}>
                <ChevronLeft aria-hidden className="size-6" />
              </button>
              <button type="button" onClick={() => step(1)} className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20" aria-label={tr(labels.next)}>
                <ChevronRight aria-hidden className="size-6" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
