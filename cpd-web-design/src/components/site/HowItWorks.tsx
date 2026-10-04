"use client";

import { useT } from "@/lib/i18n";
import { Section } from "./Section";

/** A real sequence, so it's the one place that gets numbers. */
export function HowItWorks() {
  const t = useT();
  return (
    <Section id="how" title={t.how.title} layout="split">
      <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {t.how.steps.map((step, i) => (
          <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-x-3">
            <span aria-hidden className="display text-5xl text-green">
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-bold">
                <span className="sr-only">{i + 1}. </span>
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
