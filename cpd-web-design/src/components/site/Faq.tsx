"use client";

import { Plus } from "lucide-react";
import { pricing } from "@/config/site";
import { fill, formatEuro, useLang, useT } from "@/lib/i18n";
import { Section } from "./Section";

export function Faq() {
  const t = useT();
  const { lang } = useLang();
  const vars = { months: pricing.minimumTermMonths, fee: formatEuro(pricing.buyoutFee, lang) };

  return (
    <Section id="faq" title={t.faq.title} layout="split">
      <div className="border-t border-ink">
        {t.faq.items.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex min-h-14 items-center justify-between gap-6 py-4">
              <h3 className="text-lg font-bold sm:text-xl">{item.q}</h3>
              <Plus aria-hidden className="size-5 shrink-0 transition-transform group-open:rotate-45" />
            </summary>
            <p className="max-w-[64ch] pb-6 text-lg leading-relaxed text-muted">{fill(item.a, vars)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
