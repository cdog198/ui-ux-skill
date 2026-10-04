"use client";

import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";
import { fill, useL, useT } from "@/lib/i18n";
import { SectionHead } from "./SectionHead";

export function About() {
  const t = useT();
  const tr = useL();
  const name = site.owner.name;

  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper-2">
      <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <SectionHead id="about-title" index="07" label={t.about.label} title={t.about.title} />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            {/* Polaroid-style photo slot. Set site.owner.photo in src/config/site.ts */}
            <figure className="relative mx-auto max-w-sm -rotate-2 bg-receipt p-3 pb-14 shadow-[0_24px_50px_-28px_rgb(21_18_14/0.55)]">
              <div className="relative aspect-[4/5] overflow-hidden" style={{ ["--ph-bg" as string]: "#e8e0d2" }}>
                <Photo
                  src={site.owner.photo}
                  alt={fill(t.about.photoAlt, { name })}
                  label={t.about.photoPlaceholder}
                  sizes="(min-width: 1024px) 30vw, 90vw"
                />
              </div>
              <figcaption className="serif-accent mt-4 text-center text-2xl">
                {name}, {tr(site.owner.role).toLowerCase()}
              </figcaption>
              <span aria-hidden className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-3 bg-ochre/70" />
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-xl leading-relaxed sm:text-2xl">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "" : "text-muted"}>
                  {fill(p, { name })}
                </p>
              ))}
            </div>
            <dl className="mt-12 grid grid-cols-1 border-t-2 border-ink sm:grid-cols-3">
              {t.about.facts.map(([k, v]) => (
                <div key={k} className="border-b border-ink/20 py-4 sm:border-b-0 sm:py-5">
                  <dt className="font-mono text-xs tracking-wider text-muted uppercase">{k}</dt>
                  <dd className="display mt-1 text-3xl">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
