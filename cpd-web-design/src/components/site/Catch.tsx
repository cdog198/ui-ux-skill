"use client";

import { Reveal } from "@/components/ui/Reveal";
import { pricing } from "@/config/site";
import { fill, formatEuro, useLang, useT } from "@/lib/i18n";

/** Addresses the obvious objection head-on, before anyone has to ask. */
export function Catch() {
  const t = useT();
  const { lang } = useLang();
  const vars = { months: pricing.minimumTermMonths, fee: formatEuro(pricing.buyoutFee, lang) };

  return (
    <section aria-labelledby="catch-title" className="bg-rosso text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
              <span>03½</span>
              <span aria-hidden className="h-px w-10 bg-current" />
              <span>{t.catch.label}</span>
            </p>
            <h2 id="catch-title" className="display mt-4 text-[clamp(3.6rem,11vw,9rem)]">
              {t.catch.title}
            </h2>
          </div>
          <p className="serif-accent text-2xl leading-snug lg:col-span-4 lg:pb-3">{t.catch.intro}</p>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-paper/30 md:grid-cols-3 lg:mt-20">
          {t.catch.points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08} className="bg-rosso pt-6 md:px-6 md:first:pl-0 md:last:pr-0">
              <span aria-hidden className="display text-7xl text-paper/50">
                {i + 1}
              </span>
              <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-paper/90">{fill(p.body, vars)}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 border-t border-paper/40 pt-8">
          <p className="display text-[clamp(2rem,4.5vw,3.5rem)]">{t.catch.verdict}</p>
        </Reveal>
      </div>
    </section>
  );
}
