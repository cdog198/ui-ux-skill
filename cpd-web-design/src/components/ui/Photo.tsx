"use client";

import Image, { type ImageLoaderProps } from "next/image";
import { useState } from "react";

/**
 * Unsplash images are resized by Unsplash's own CDN (no Vercel image quota used).
 * Local images (e.g. "/images/me.jpg") go through Next's optimiser as usual.
 */
function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 70}`;
}

type PhotoProps = {
  src: string | null | undefined;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Text shown on the placeholder if the image is missing or fails to load. */
  label?: string;
};

/**
 * Fills its (relatively positioned) parent. Falls back to a designed placeholder
 * when there's no image or it fails to load. Placeholder colours come from the
 * CSS variables --ph-bg and --ph-fg, so each site can theme them.
 */
export function Photo({ src, alt, sizes, className = "", priority, label }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        className={`absolute inset-0 flex items-end overflow-hidden p-4 ${className}`}
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--ph-bg, #e8e0d2) 0 14px, color-mix(in srgb, var(--ph-bg, #e8e0d2) 88%, var(--ph-fg, #15120e)) 14px 15px)",
          color: "var(--ph-fg, #15120e)",
        }}
      >
        <span className="font-mono text-[11px] tracking-wider uppercase opacity-70">{label ?? alt}</span>
      </div>
    );
  }

  const isUnsplash = src.startsWith("https://images.unsplash.com/");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      preload={priority}
      loader={isUnsplash ? unsplashLoader : undefined}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
