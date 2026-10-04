"use client";

import { Photo } from "@/components/ui/Photo";
import { site } from "@/config/site";
import { fill, useT } from "@/lib/i18n";
import { Section } from "./Section";

export function About() {
  const t = useT();
  const name = site.owner.name;

  return (
    <Section id="about" title={t.about.title} tone="paper-2" layout="split">
      <div className="grid gap-10 md:grid-cols-[minmax(0,15rem)_1fr] md:items-start">
        {/* Set site.owner.photo in src/config/site.ts */}
        <div className="relative aspect-[4/5] w-full max-w-60 overflow-hidden rounded-2xl [--ph-bg:#dfe3db]">
          <Photo src={site.owner.photo} alt={fill(t.about.photoAlt, { name })} label={t.about.photoPlaceholder} sizes="15rem" />
        </div>
        <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{fill(p, { name })}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
