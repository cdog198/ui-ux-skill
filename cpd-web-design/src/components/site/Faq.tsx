"use client";

import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { pricing } from "@/config/site";
import { fill, formatEuro, useLang, useT } from "@/lib/i18n";
import { SectionHead } from "./SectionHead";

export function Faq() {
  const t = useT();
  const { lang } = useLang();
  const vars = { months: pricing.minimumTermMonths, fee: formatEuro(pricing.buyoutFee, lang) };

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t-2 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <SectionHead id="faq-title" index="06" label={t.faq.label} title={t.faq.title} />
        <Reveal className="mt-14 border-t-2 border-ink lg:mt-20 lg:ml-[33.333%]">
          {t.faq.items.map((item, i) => (
            <details key={item.q} className="group border-b-2 border-ink" open={i === 0}>
              <summary className="flex min-h-16 items-center justify-between gap-6 py-5">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <span className="mr-4 font-mono text-sm font-normal text-rosso">{String(i + 1).padStart(2, "0")}</span>
                  {item.q}
                </h3>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ink transition-transform group-open:rotate-45 group-open:bg-ink group-open:text-paper">
                  <Plus aria-hidden className="size-5" />
                </span>
              </summary>
              <p className="max-w-3xl pb-7 text-lg leading-relaxed text-muted sm:pl-10">{fill(item.a, vars)}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
