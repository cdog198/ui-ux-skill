"use client";

import { Leaf, Sprout, WheatOff } from "lucide-react";
import { useId, useState } from "react";
import { restaurant as r, type Diet } from "@/content/examples/restaurant";
import { formatEuro, useL, useLang } from "@/lib/i18n";

const dietIcon: Record<Diet, typeof Leaf> = { v: Leaf, vg: Sprout, gf: WheatOff };

export function DietBadge({ diet }: { diet: Diet }) {
  const tr = useL();
  const Icon = dietIcon[diet];
  return (
    <span title={tr(r.diets[diet])} className="inline-flex size-7 items-center justify-center rounded-full border border-[#2F3A1F]/40 text-[#2F3A1F]">
      <Icon aria-hidden className="size-3.5" strokeWidth={2} />
      <span className="sr-only">{tr(r.diets[diet])}</span>
    </span>
  );
}

export function Menu() {
  const tr = useL();
  const { lang } = useLang();
  const [active, setActive] = useState(r.menu[0].id);
  const baseId = useId();
  const category = r.menu.find((c) => c.id === active) ?? r.menu[0];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = r.menu.findIndex((c) => c.id === active);
    const next = r.menu[(i + (e.key === "ArrowRight" ? 1 : -1) + r.menu.length) % r.menu.length];
    setActive(next.id);
    document.getElementById(`${baseId}-${next.id}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={tr(r.menuIntro.title)} onKeyDown={onKeyDown} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {r.menu.map((c) => (
          <button
            key={c.id}
            id={`${baseId}-${c.id}`}
            role="tab"
            type="button"
            aria-selected={active === c.id}
            aria-controls={`${baseId}-panel`}
            tabIndex={active === c.id ? 0 : -1}
            onClick={() => setActive(c.id)}
            className={`min-h-11 shrink-0 cursor-pointer rounded-full border-2 border-[#2F3A1F] px-5 font-semibold transition-colors ${
              active === c.id ? "bg-[#2F3A1F] text-[#F5EEDD]" : "hover:bg-[#2F3A1F]/10"
            }`}
          >
            {tr(c.name)}
          </button>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Legend">
        {(Object.keys(r.diets) as Diet[]).map((d) => (
          <li key={d} className="flex items-center gap-2">
            <DietBadge diet={d} />
            <span aria-hidden>{tr(r.diets[d])}</span>
          </li>
        ))}
      </ul>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-${active}`}>
      <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
        {category.items.map((item) => (
          <li key={item.name.en} className="border-t border-[#2F3A1F]/25 py-5">
            <div className="flex items-baseline gap-3">
              <h3 className="font-[family-name:var(--font-alba-display)] text-2xl">
                {tr(item.name)}
                {item.special && <span className="ml-2 align-middle text-xs font-bold tracking-wider text-[#A64B25] uppercase">★ {lang === "it" ? "della casa" : "house favourite"}</span>}
              </h3>
              <span aria-hidden className="mb-1.5 flex-1 border-b-2 border-dotted border-[#2F3A1F]/30" />
              <span className="font-semibold tabular-nums">{formatEuro(item.price, lang)}</span>
            </div>
            <p className="mt-1 text-[#4A4436]">{tr(item.description)}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {item.diet.map((d) => (
                <DietBadge key={d} diet={d} />
              ))}
              <details className="group ml-auto text-sm">
                <summary className="inline-flex min-h-8 items-center gap-1 rounded-full px-2 font-semibold text-[#A64B25] underline decoration-dotted underline-offset-4">
                  {tr(r.menuIntro.allergens)}
                  <span aria-hidden className="transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2 text-right text-[#4A4436]">
                  {item.allergens.length ? item.allergens.map((a) => tr(r.allergenNames[a])).join(" · ") : tr(r.menuIntro.none)}
                </p>
              </details>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <p className="mt-6 text-sm text-[#4A4436]">{tr(r.menuIntro.note)}</p>
    </div>
  );
}
