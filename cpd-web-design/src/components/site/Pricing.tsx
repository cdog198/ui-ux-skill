"use client";

import { Check } from "lucide-react";
import { pricing, type Tier, type TierId } from "@/config/site";
import { fill, formatEuro, useL, useLang, useT } from "@/lib/i18n";
import { Section, btn } from "./Section";

/** Lets pricing buttons pre-select a plan in the contact form. */
export const SELECT_PLAN_EVENT = "cpd:select-plan";
export function selectPlan(id: TierId) {
  window.dispatchEvent(new CustomEvent<TierId>(SELECT_PLAN_EVENT, { detail: id }));
}

export function Pricing() {
  const t = useT();
  const months = pricing.minimumTermMonths;
  return (
    <Section id="pricing" title={t.pricing.title} intro={t.pricing.intro}>
      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {pricing.tiers.map((tier) => (
          <TierCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="mt-10 max-w-[64ch]">
        <h3 className="text-xl font-bold">{fill(t.pricing.termTitle, { months })}</h3>
        <p className="mt-2 text-lg leading-relaxed text-muted">{fill(t.pricing.termBody, { months })}</p>
      </div>

      <Comparison />
    </Section>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const t = useT();
  const tr = useL();
  const { lang } = useLang();
  const popular = tier.popular;

  return (
    <div className={`flex flex-col rounded-md p-7 lg:p-8 ${popular ? "on-green bg-green text-paper" : "border border-ink/25"}`}>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-2xl font-bold">{tier.name}</h3>
        {popular && <span className="text-sm font-semibold text-ochre">{t.pricing.popular}</span>}
      </div>
      <p className={`mt-1 leading-snug ${popular ? "text-green-soft" : "text-muted"}`}>{tr(tier.summary)}</p>

      <p className="mt-6 flex items-end gap-2">
        <span className="display text-[5.5rem]">{formatEuro(tier.monthly, lang)}</span>
        <span className={`pb-1.5 text-sm ${popular ? "text-green-soft" : "text-muted"}`}>
          {t.pricing.perMonth}
          <br />
          {t.pricing.vat}
        </span>
      </p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {tier.features.map((f) => (
          <li key={f.en} className="flex gap-2.5">
            <Check aria-hidden className={`mt-1 size-4 shrink-0 ${popular ? "text-ochre" : "text-green"}`} strokeWidth={3} />
            <span>{tr(f)}</span>
          </li>
        ))}
      </ul>

      <a href="#contact" onClick={() => selectPlan(tier.id)} className={`mt-8 ${popular ? btn.primary : btn.secondary}`}>
        {fill(t.pricing.choose, { name: tier.name })}
      </a>
    </div>
  );
}

/** Two printed receipts side by side: typical agency vs CPD, first year. */
function Comparison() {
  const t = useT();
  const { lang } = useLang();
  const eur = (n: number) => formatEuro(n, lang);
  const ref = pricing.tiers.find((x) => x.popular) ?? pricing.tiers[0];
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
        <ReceiptCard title={t.pricing.you} rows={rows.map(([l, , v]) => [l, v])} due={eur(0)} year={eur(ref.monthly * 12)} ours />
      </div>
      <p className="mt-5 text-sm text-muted">{fill(t.pricing.basedOn, { name: ref.name })}</p>
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
