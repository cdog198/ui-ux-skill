"use client";

import { Check } from "lucide-react";
import { pricing } from "@/config/site";
import { fill, formatEuro, useL, useLang, useT } from "@/lib/i18n";
import { Section, btn } from "./Section";

/** One plan, one price. Values come from src/config/site.ts → pricing. */
export function Pricing() {
  const t = useT();
  const tr = useL();
  const { lang } = useLang();
  const months = pricing.minimumTermMonths;

  return (
    <Section id="pricing" title={t.pricing.title} intro={t.pricing.intro}>
      <div className="on-green grid gap-10 rounded-md bg-green p-7 text-paper sm:p-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="flex items-end gap-3">
            <span className="display text-[clamp(6rem,14vw,9rem)]">{formatEuro(pricing.monthly, lang)}</span>
            <span className="pb-2 text-lg text-green-soft">
              {t.pricing.perMonth}
              <br />
              {t.pricing.vat}
            </span>
          </p>
          <p className="mt-5 text-lg leading-relaxed text-green-soft">{t.pricing.summary}</p>
          <a href="#contact" className={`${btn.primary} mt-7 min-h-13 px-7 text-lg`}>
            {t.pricing.cta}
          </a>
        </div>
        <div className="lg:col-span-7">
          <h3 className="text-lg font-bold">{t.pricing.includesTitle}</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {pricing.includes.map((item) => (
              <li key={item.en} className="flex gap-2.5">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-ochre" strokeWidth={3} />
                <span>{tr(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 max-w-[64ch]">
        <h3 className="text-xl font-bold">{fill(t.pricing.termTitle, { months })}</h3>
        <p className="mt-2 text-lg leading-relaxed text-muted">{fill(t.pricing.termBody, { months })}</p>
      </div>

      <Comparison />
    </Section>
  );
}

/** Two printed receipts side by side: typical agency vs CPD, first year. */
function Comparison() {
  const t = useT();
  const { lang } = useLang();
  const eur = (n: number) => formatEuro(n, lang);
  const a = pricing.agency;
  const ongoing = (a.hostingMonthly + a.maintenanceMonthly) * 12;

  const rows: [string, string, string][] = [
    [t.pricing.rows.build, `${eur(a.buildMin)}–${eur(a.buildMax)}`, eur(0)],
    [t.pricing.rows.hosting, `${eur(a.hostingMonthly)}${t.pricing.perMonthShort}`, t.pricing.included],
    [t.pricing.rows.maintenance, `${eur(a.maintenanceMonthly)}${t.pricing.perMonthShort}`, t.pricing.included],
    [t.pricing.rows.edits, t.pricing.billed, t.pricing.included],
    [t.pricing.rows.support, t.pricing.billed, t.pricing.included],
  ];

  return (
    <div className="mt-20">
      <h3 className="heading text-[clamp(1.6rem,3vw,2.25rem)]">{t.pricing.compareTitle}</h3>
      <p className="mt-2 text-lg text-muted">{t.pricing.compareIntro}</p>

      <div className="mt-8 grid items-start gap-6 md:grid-cols-2 lg:gap-10">
        <ReceiptCard
          title={t.pricing.agency}
          rows={rows.map(([l, v]) => [l, v])}
          due={`${eur(a.buildMin)}–${eur(a.buildMax)}`}
          year={`${eur(a.buildMin + ongoing)}–${eur(a.buildMax + ongoing)}`}
        />
        <ReceiptCard title={t.pricing.you} rows={rows.map(([l, , v]) => [l, v])} due={eur(0)} year={eur(pricing.monthly * 12)} ours />
      </div>
      <p className="mt-5 text-sm text-muted">{t.pricing.basedOn}</p>
    </div>
  );
}

function ReceiptCard({ title, rows, due, year, ours = false }: { title: string; rows: [string, string][]; due: string; year: string; ours?: boolean }) {
  const t = useT();
  return (
    <div className={`receipt-edge relative px-6 pt-6 pb-9 font-mono text-[13px] ${ours ? "bg-white shadow-[0_18px_40px_-26px_rgb(0_0_0/0.55)]" : "bg-paper-2"}`}>
      <p className="text-center font-semibold">{title}</p>
      <dl className="mt-4 space-y-1.5 border-t border-dashed border-ink/50 pt-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-end gap-2">
            <dt className="shrink-0">{label}</dt>
            <span aria-hidden className="dotted-leader mb-1.5 h-2 flex-1" />
            <dd className="shrink-0 text-right">{value}</dd>
          </div>
        ))}
      </dl>
      <dl className="mt-4 space-y-1 border-t border-dashed border-ink/50 pt-3">
        <div className="flex items-baseline justify-between gap-4 font-semibold">
          <dt>{t.pricing.rows.dueToday}</dt>
          <dd className="text-right text-lg">{due}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt>{t.pricing.rows.yearOne}</dt>
          <dd className="text-right">{year}</dd>
        </div>
      </dl>
      {ours && <span aria-hidden className="absolute inset-y-0 right-1.5 w-1 bg-stripe/70" />}
    </div>
  );
}
