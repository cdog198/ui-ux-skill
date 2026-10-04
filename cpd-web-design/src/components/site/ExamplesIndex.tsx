"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { pricing } from "@/config/site";
import { examples } from "@/content/examples";
import { useL, useT } from "@/lib/i18n";

export function ExamplesIndex() {
  const t = useT();
  const tr = useL();
  return (
    <section aria-labelledby="examples-title" className="mx-auto max-w-[1440px] px-4 pt-28 pb-24 sm:px-6 lg:px-10 lg:pt-40 lg:pb-36">
      <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-rosso uppercase">
        <span>★</span>
        <span aria-hidden className="h-px w-10 bg-current" />
        <span>{t.examples.label}</span>
      </p>
      <h1 id="examples-title" className="display mt-4 text-[clamp(3.6rem,12vw,10rem)]">
        {t.examples.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.examples.intro}</p>

      <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:mt-24 lg:gap-14">
        {examples.map((ex, i) => {
          const counts = pricing.tiers.map((tier) => ({ tier, n: ex.features.filter((f) => f.tier === tier.id).length }));
          return (
            <Reveal as="li" key={ex.slug} delay={i * 0.1}>
              <Link href={`/examples/${ex.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm" style={{ background: ex.palette.bg, ["--ph-bg" as string]: ex.palette.bg, ["--ph-fg" as string]: ex.palette.fg }}>
                  <Photo src={ex.cover} alt="" label={ex.name} sizes="(min-width: 768px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8" style={{ color: "#fff" }}>
                    <p className="font-mono text-xs tracking-widest uppercase opacity-90">
                      {tr(ex.industry)} · {ex.location}
                    </p>
                    <p className="mt-2 text-4xl font-semibold lg:text-5xl">{ex.name}</p>
                  </div>
                  <span className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-full bg-paper text-ink transition-transform group-hover:rotate-45">
                    <ArrowUpRight aria-hidden className="size-5" />
                  </span>
                </div>
                <p className="mt-4 text-lg">{tr(ex.tagline)}</p>
                <p className="mt-2 font-mono text-xs text-muted">
                  {ex.features.length} features · {counts.map(({ tier, n }) => `${tier.name} ${n}`).join(" · ")}
                </p>
                <span className="mt-3 inline-block font-semibold text-rosso underline decoration-2 underline-offset-4">{t.examples.open}</span>
              </Link>
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-20 flex flex-col gap-4 border-t-2 border-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="serif-accent text-2xl">{t.examples.more}</p>
        <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-rosso px-6 font-semibold text-paper">
          {t.examples.ask}
        </Link>
      </div>
    </section>
  );
}
