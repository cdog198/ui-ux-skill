"use client";

import { useT } from "@/lib/i18n";
import { Section } from "./Section";

/** A real sequence, shown as a numbered list of rows. */
export function HowItWorks() {
  const t = useT();
  return (
    <Section id="how" title={t.how.title} tone="paper-2">
      <ol className="border-t border-line">
        {t.how.steps.map((step, i) => (
          <li key={step.title} className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-8 md:py-9">
            <span aria-hidden className="text-muted md:col-span-1 md:pt-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="heading text-[clamp(1.8rem,3.2vw,2.75rem)] md:col-span-5">
              <span className="sr-only">{i + 1}. </span>
              {step.title}
            </h3>
            <p className="max-w-[52ch] text-lg leading-relaxed text-muted md:col-span-6 md:pt-1.5">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
