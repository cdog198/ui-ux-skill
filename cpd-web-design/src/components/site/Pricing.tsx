"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pricing, type Tier, type TierId } from "@/config/site";
import { fill, formatEuro, useL, useLang, useT } from "@/lib/i18n";
import { SectionHead } from "./SectionHead";

/** Lets pricing buttons pre-select a plan in the contact form. */
export const SELECT_PLAN_EVENT = "cpd:select-plan";
export function selectPlan(id: TierId) {
  window.dispatchEvent(new CustomEvent<TierId>(SELECT_PLAN_EVENT, { detail: id }));
}

export function Pricing() {
  const t = useT();
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
      <SectionHead id="pricing-title" index="03" label={t.pricing.label} title={t.pricing.title} intro={t.pricing.intro} />

      <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-3 lg:gap-0">
        {pricing.tiers.map((tier, i) => (
          <TierColumn key={tier.id} tier={tier} index={i} />
        ))}
      </div>

      <Reveal className="mt-10 grid gap-4 border-2 border-dashed border-ink p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 lg:p-8">
        <p className="display text-6xl text-rosso lg:text-7xl">
          {pricing.minimumTermMonths}
          <span className="serif-accent ml-2 text-2xl text-ink lg:text-3xl">{t.pricing.termUnit}</span>
        </p>
        <div>
          <h3 className="text-xl font-bold">{fill(t.pricing.termTitle, { months: pricing.minimumTermMonths })}</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-muted">{t.pricing.termBody}</p>
        </div>
      </Reveal>

      <Comparison />
    </section>
  );
}

function TierColumn({ tier, index }: { tier: Tier; index: number }) {
  const t = useT();
  const tr = useL();
  const { lang } = useLang();
  const popular = tier.popular;

  return (
    <Reveal
      delay={index * 0.08}
      className={`relative flex flex-col p-7 lg:p-10 ${
        popular
          ? "on-ink z-10 bg-ink text-paper shadow-[12px_12px_0_var(--color-rosso)] lg:-my-6 lg:py-16"
          : "border-2 border-ink bg-paper lg:border-x-0 first:lg:border-l-2 last:lg:border-r-2"
      }`}
    >
      {popular && (
        <p className="absolute -top-4 left-7 rounded-full bg-rosso px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-paper uppercase lg:left-10">
          ★ {t.pricing.popular}
        </p>
      )}
      <h3 className="display-wide text-lg">{tier.name}</h3>
      <p className={`mt-2 min-h-12 leading-snug ${popular ? "text-muted-dark" : "text-muted"}`}>{tr(tier.summary)}</p>

      <p className="mt-6 flex items-end gap-2">
        <span className={`display text-[6.5rem] leading-[0.8] ${popular ? "text-ochre" : "text-ink"}`}>{formatEuro(tier.monthly, lang)}</span>
        <span className="pb-1">
          <span className="block font-semibold">{t.pricing.perMonth}</span>
          <span className={`block font-mono text-xs ${popular ? "text-muted-dark" : "text-muted"}`}>{t.pricing.vat}</span>
        </span>
      </p>

      <ul className="mt-8 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f.en} className="flex gap-3">
            <Check aria-hidden className={`mt-0.5 size-5 shrink-0 ${popular ? "text-rosso-bright" : "text-rosso"}`} strokeWidth={2.5} />
            <span>{tr(f)}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={() => selectPlan(tier.id)}
        className={`mt-10 inline-flex min-h-13 items-center justify-center rounded-full px-6 py-3.5 font-semibold transition-transform hover:-translate-y-0.5 ${
          popular ? "bg-rosso-bright text-ink" : "border-2 border-ink hover:bg-ink hover:text-paper"
        }`}
      >
        {fill(t.pricing.choose, { name: tier.name })}
      </a>
    </Reveal>
  );
}

/** Two receipts side by side: typical agency vs CPD, year one. */
function Comparison() {
  const t = useT();
  const { lang } = useLang();
  const eur = (n: number) => formatEuro(n, lang);
  const ref = pricing.tiers.find((x) => x.popular) ?? pricing.tiers[0];
  const a = pricing.agency;
  const agencyYearMin = a.buildMin + (a.hostingMonthly + a.maintenanceMonthly) * 12;
  const agencyYearMax = a.buildMax + (a.hostingMonthly + a.maintenanceMonthly) * 12;
  const ours = ref.monthly * 12;

  const rows: [string, string, string][] = [
    [t.pricing.rows.build, `${eur(a.buildMin)}–${eur(a.buildMax)}`, eur(0)],
    [t.pricing.rows.hosting, `${eur(a.hostingMonthly)}${t.pricing.perMonthShort}`, t.pricing.included],
    [t.pricing.rows.maintenance, `${eur(a.maintenanceMonthly)}${t.pricing.perMonthShort}`, t.pricing.included],
    [t.pricing.rows.edits, t.pricing.billed, t.pricing.included],
    [t.pricing.rows.support, t.pricing.billed, t.pricing.included],
  ];

  return (
    <div className="mt-24 lg:mt-32">
      <Reveal className="max-w-3xl">
        <h3 className="display text-[clamp(2.6rem,6vw,4.75rem)]">{t.pricing.compareTitle}</h3>
        <p className="mt-3 text-lg text-muted">{t.pricing.compareIntro}</p>
      </Reveal>

      <div className="mt-10 grid items-start gap-8 md:grid-cols-2 lg:gap-14">
        <Reveal>
          <ReceiptCard
            title={t.pricing.agency}
            rows={rows.map(([l, v]) => [l, v])}
            due={`${eur(a.buildMin)}–${eur(a.buildMax)}`}
            year={`${eur(agencyYearMin)}–${eur(agencyYearMax)}`}
            muted
          />
        </Reveal>
        <Reveal delay={0.12}>
          <ReceiptCard title={t.pricing.you} rows={rows.map(([l, , v]) => [l, v])} due={eur(0)} year={eur(ours)} />
        </Reveal>
      </div>
      <p className="mt-6 font-mono text-xs text-muted">{fill(t.pricing.basedOn, { name: ref.name })}</p>
    </div>
  );
}

function ReceiptCard({ title, rows, due, year, muted = false }: { title: string; rows: [string, string][]; due: string; year: string; muted?: boolean }) {
  const t = useT();
  return (
    <div className={`receipt-edge px-6 pt-7 pb-10 font-mono text-sm sm:px-8 ${muted ? "bg-paper-2 md:rotate-[-1deg]" : "bg-receipt shadow-[0_24px_50px_-30px_rgb(21_18_14/0.5)] md:rotate-[1deg]"}`}>
      <p className="display-wide text-center text-base">{title}</p>
      <dl className="mt-5 space-y-2 border-t border-dashed border-ink/40 pt-4">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-end gap-2">
            <dt className="shrink-0">{label}</dt>
            <span aria-hidden className="dotted-leader mb-1.5 h-2 flex-1" />
            <dd className="shrink-0 text-right">{value}</dd>
          </div>
        ))}
      </dl>
      <dl className="mt-5 space-y-2 border-t-2 border-ink pt-4">
        <div className="flex items-end justify-between gap-4">
          <dt className="font-semibold">{t.pricing.rows.dueToday}</dt>
          <dd className={`display text-right text-4xl leading-none sm:text-5xl ${muted ? "text-ink" : "text-rosso"}`}>{due}</dd>
        </div>
        <div className="flex items-end justify-between gap-4 text-muted">
          <dt>{t.pricing.rows.yearOne}</dt>
          <dd className="text-right">{year}</dd>
        </div>
      </dl>
    </div>
  );
}
