"use client";

import { m, useReducedMotion } from "framer-motion";
import { pricing, site } from "@/config/site";
import { fill, formatEuro, useLang, useT } from "@/lib/i18n";

/** The hero "scontrino": the business model in one glance. */
export function Receipt() {
  const t = useT();
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const lowest = Math.min(...pricing.tiers.map((x) => x.monthly));

  const line = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.35 + i * 0.12, duration: 0.35 },
  });

  return (
    <div className="relative mx-auto w-full max-w-[360px] rotate-[1.5deg] lg:max-w-[380px]">
      <m.div
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 -10% 0)" }}
        transition={{ duration: 1.1, ease: [0.6, 0, 0.2, 1] }}
        className="receipt-edge bg-receipt px-6 pt-7 pb-10 font-mono text-[13px] leading-relaxed text-ink shadow-[0_30px_60px_-30px_rgb(21_18_14/0.45)]"
        aria-label={`${t.receipt.total}: ${formatEuro(0, lang)}. ${t.receipt.then}: ${fill(t.receipt.from, { price: formatEuro(lowest, lang) })}`}
        role="img"
      >
        <div className="text-center" aria-hidden="true">
          <p className="display-wide text-base">{t.receipt.shop}</p>
          <p className="mt-1 text-[11px] text-muted">{fill(t.receipt.place, { vat: site.vatNumber.replace(/^IT/, "") })}</p>
          <p className="mt-3 border-y border-dashed border-ink/40 py-1 text-[11px] tracking-widest">
            ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★
          </p>
        </div>

        <ul className="mt-4 space-y-1.5" aria-hidden="true">
          {t.receipt.lines.map(([label, price], i) => (
            <m.li key={i} {...line(i)} className="flex items-end gap-2">
              <span className="whitespace-nowrap">{label}</span>
              <span className="dotted-leader mb-1.5 h-2 flex-1" />
              <span>€ {price}</span>
            </m.li>
          ))}
        </ul>

        <m.div {...line(t.receipt.lines.length)} aria-hidden="true" className="mt-4 flex items-end justify-between border-t-2 border-ink pt-3">
          <span className="font-semibold">{t.receipt.total}</span>
          <span className="display text-5xl leading-none text-rosso">€ 0,00</span>
        </m.div>

        <m.div {...line(t.receipt.lines.length + 1)} aria-hidden="true" className="mt-4 border-t border-dashed border-ink/40 pt-3">
          <div className="flex items-end justify-between">
            <span className="text-[11px] tracking-wider">{t.receipt.then}</span>
            <span className="font-semibold">
              {fill(t.receipt.from, { price: formatEuro(lowest, lang) })}
              <span className="text-muted">{t.pricing.perMonthShort}</span>
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted">{t.receipt.covers}</p>
        </m.div>

        <p className="mt-6 text-center text-[11px] tracking-[0.3em]" aria-hidden="true">
          {t.receipt.thanks}
        </p>
        <div aria-hidden="true" className="mx-auto mt-3 h-8 w-40 bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_2px,transparent_2px_4px,var(--color-ink)_4px_5px,transparent_5px_8px)]" />
      </m.div>

      {/* Rubber stamp */}
      <m.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, scale: 1.8, rotate: -24 }}
        animate={{ opacity: 1, scale: 1, rotate: -14 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 260, damping: 16 }}
        className="absolute right-2 bottom-[16%] rounded-md border-[3px] border-rosso px-3 py-1 text-rosso mix-blend-multiply sm:-right-8"
      >
        <span className="display block text-5xl leading-none">{t.receipt.stamp}</span>
      </m.div>
    </div>
  );
}
