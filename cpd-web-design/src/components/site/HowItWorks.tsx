"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";
import { SectionHead } from "./SectionHead";

export function HowItWorks() {
  const t = useT();
  return (
    <section id="how" aria-labelledby="how-title" className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
      <SectionHead id="how-title" index="01" label={t.how.label} title={t.how.title} intro={t.how.intro} />

      <ol className="relative mt-16 grid gap-px overflow-hidden rounded-sm border-2 border-ink bg-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
        {t.how.steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.08} className="group relative flex flex-col bg-paper p-6 transition-colors hover:bg-receipt lg:min-h-[26rem] lg:p-8">
            <div className="flex items-start justify-between">
              <span aria-hidden className="display outline-text text-[7rem] text-rosso transition-colors group-hover:text-rosso lg:text-[9rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 rounded-full border border-ink px-3 py-1 font-mono text-[11px] tracking-wider uppercase">{step.when}</span>
            </div>
            <h3 className="display mt-auto pt-8 text-5xl">
              <span className="sr-only">{i + 1}. </span>
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
