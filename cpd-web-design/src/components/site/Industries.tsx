"use client";

import { Check, Minus } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { pricing, tierRank } from "@/config/site";
import { examples } from "@/content/examples";
import { fill, useL, useT } from "@/lib/i18n";
import { Section, btn } from "./Section";

/** Demo features mapped to the cheapest plan that includes them. */
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
    <Section id="industries" title={t.industries.title} intro={t.industries.intro}>
      <div role="tablist" aria-label={t.industries.title} className="inline-flex rounded-[4px] border border-ink p-0.5" onKeyDown={onKeyDown}>
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
            className={`min-h-10 cursor-pointer rounded-[3px] px-4 font-semibold ${active === i ? "bg-ink text-paper" : "hover:bg-ink/10"}`}
          >
            {tr(x.industry)}
          </button>
        ))}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md" style={{ background: ex.palette.bg, ["--ph-bg" as string]: ex.palette.bg, ["--ph-fg" as string]: ex.palette.fg }}>
            <Photo src={ex.cover} alt="" label={ex.name} sizes="(min-width: 1024px) 30vw, 100vw" />
          </div>
          <p className="mt-4 text-xl font-bold">{ex.name}</p>
          <p className="text-muted">{tr(ex.tagline)}</p>
          <Link href={`/examples/${ex.slug}`} className={`${btn.secondary} mt-5`}>
            {fill(t.industries.demo, { name: ex.name })}
          </Link>
        </div>

        <div className="lg:col-span-8">
          {/* Phones: one line per feature with its plan */}
          <ul className="sm:hidden">
            {ex.features.map((f) => {
              const tier = pricing.tiers.find((x) => x.id === f.tier);
              return (
                <li key={f.id} className="flex items-start justify-between gap-4 border-b border-line py-3">
                  <span>
                    <span className="block font-semibold">{tr(f.label)}</span>
                    <span className="block text-sm text-muted">{tr(f.description)}</span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold">{tier?.name}+</span>
                </li>
              );
            })}
          </ul>

          <table className="hidden w-full border-collapse text-left sm:table">
            <caption className="sr-only">{tr(ex.industry)}</caption>
            <thead>
              <tr className="border-b border-ink">
                <th scope="col" className="py-3 pr-4 text-sm font-semibold">
                  {t.industries.feature}
                </th>
                {pricing.tiers.map((tier) => (
                  <th key={tier.id} scope="col" className="w-24 py-3 text-center text-sm font-semibold">
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ex.features.map((f) => (
                <tr key={f.id} className="border-b border-line">
                  <th scope="row" className="py-3 pr-4 font-normal">
                    <span className="block font-semibold">{tr(f.label)}</span>
                    <span className="block text-sm text-muted">{tr(f.description)}</span>
                  </th>
                  {pricing.tiers.map((tier) => (
                    <td key={tier.id} className="text-center">
                      {tierRank[tier.id] >= tierRank[f.tier] ? (
                        <Check aria-label={t.industries.yes} className="mx-auto size-5 text-green" strokeWidth={3} />
                      ) : (
                        <Minus aria-label={t.industries.no} className="mx-auto size-4 text-ink/30" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-muted">{t.industries.note}</p>
        </div>
      </div>
    </Section>
  );
}
