"use client";

import { pricing } from "@/config/site";
import { fill, formatEuro, useLang, useT } from "@/lib/i18n";
import { Section } from "./Section";

/** Answers the obvious objection before anyone has to ask it. */
export function Catch() {
  const t = useT();
  const { lang } = useLang();
  const vars = { months: pricing.minimumTermMonths, fee: formatEuro(pricing.buyoutFee, lang) };

  return (
    <Section id="catch" title={t.catch.title} tone="paper">
      <div className="grid gap-10 md:grid-cols-3">
        {t.catch.points.map((p) => (
          <div key={p.title}>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-lg leading-relaxed text-muted">{fill(p.body, vars)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
