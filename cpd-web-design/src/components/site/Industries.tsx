"use client";

import { ArrowUpRight, Check, Minus } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { pricing, tierRank } from "@/config/site";
import { examples } from "@/content/examples";
import { fill, useL, useT } from "@/lib/i18n";
import { SectionHead } from "./SectionHead";

/** "What you get" per industry: demo features mapped to the plans that include them. */
export function Industries() {
  const t = useT();
  const tr = useL();
  const [active, setActive] = useState(0);
  const baseId = useId();
  const ex = examples[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + examples.length) % examples.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <section id="industries" aria-labelledby="industries-title" className="border-t-2 border-ink bg-paper-2">
      <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <SectionHead id="industries-title" index="04" label={t.industries.label} title={t.industries.title} intro={t.industries.intro} />

        <Reveal className="mt-14 lg:mt-20">
          <div role="tablist" aria-label={t.industries.label} className="flex flex-wrap gap-2" onKeyDown={onKeyDown}>
            {examples.map((x, i) => (
              <button
                key={x.slug}
                id={`${baseId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls={`${baseId}-panel`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                className={`display min-h-12 cursor-pointer rounded-full border-2 border-ink px-6 pt-2 text-3xl transition-colors ${
                  active === i ? "bg-ink text-paper" : "hover:bg-ink/10"
                }`}
              >
                {tr(x.industry)}
              </button>
            ))}
          </div>

          <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="mt-8 grid gap-8 lg:grid-cols-12">
            <Link
              href={`/examples/${ex.slug}`}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm p-6 text-white sm:aspect-[16/10] lg:col-span-4 lg:aspect-[4/5] lg:self-start"
              style={{ background: ex.palette.bg, ["--ph-bg" as string]: ex.palette.bg, ["--ph-fg" as string]: ex.palette.fg }}
            >
              <Photo src={ex.cover} alt="" label={ex.name} sizes="(min-width: 1024px) 33vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.04]" />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="relative font-mono text-xs tracking-widest uppercase opacity-90">{ex.location}</span>
              <span className="relative mt-2 text-4xl leading-none font-semibold">{ex.name}</span>
              <span className="relative mt-2 opacity-90">{tr(ex.tagline)}</span>
              <span className="relative mt-6 inline-flex items-center gap-2 font-semibold" style={{ color: ex.palette.accent === "#A64B25" ? "#F2C49B" : ex.palette.accent }}>
                {fill(t.industries.demo, { name: ex.name })}
                <ArrowUpRight aria-hidden className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </Link>

            <div className="lg:col-span-8">
              <ul className="sm:hidden">
                {ex.features.map((f) => {
                  const tier = pricing.tiers.find((x) => x.id === f.tier);
                  return (
                    <li key={f.id} className="flex items-start justify-between gap-4 border-b border-ink/15 py-3">
                      <span>
                        <span className="block font-semibold">{tr(f.label)}</span>
                        <span className="block text-sm text-muted">{tr(f.description)}</span>
                      </span>
                      <span className="shrink-0 rounded-full border border-ink px-2.5 py-1 font-mono text-[11px] tracking-wider uppercase">{tier?.name}+</span>
                    </li>
                  );
                })}
              </ul>
              <div className="hidden overflow-x-auto sm:block">
              <table className="w-full min-w-[540px] border-collapse text-left">
                <caption className="sr-only">
                  {tr(ex.industry)}: {t.industries.label}
                </caption>
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="py-3 pr-4 font-mono text-xs tracking-wider uppercase">
                      {t.industries.feature}
                    </th>
                    {pricing.tiers.map((tier) => (
                      <th key={tier.id} scope="col" className={`w-24 py-3 text-center font-mono text-xs tracking-wider uppercase ${tier.popular ? "text-rosso" : ""}`}>
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ex.features.map((f) => (
                    <tr key={f.id} className="border-b border-ink/15">
                      <th scope="row" className="py-3 pr-4 font-normal">
                        <span className="block font-semibold">{tr(f.label)}</span>
                        <span className="block text-sm text-muted">{tr(f.description)}</span>
                      </th>
                      {pricing.tiers.map((tier) => {
                        const ok = tierRank[tier.id] >= tierRank[f.tier];
                        return (
                          <td key={tier.id} className="text-center">
                            {ok ? (
                              <Check aria-label={t.industries.yes} className="mx-auto size-5 text-rosso" strokeWidth={2.75} />
                            ) : (
                              <Minus aria-label={t.industries.no} className="mx-auto size-5 text-ink/30" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <p className="mt-4 text-sm text-muted">{t.industries.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
