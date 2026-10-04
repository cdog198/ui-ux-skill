"use client";

import { useT } from "@/lib/i18n";
import { Section } from "./Section";

export function Included() {
  const t = useT();
  return (
    <Section id="included" title={t.included.title} intro={t.included.intro} tone="paper-2" layout="split">
      <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {t.included.items.map((item) => (
          <div key={item.key} className="border-t border-line pt-4">
            <dt className="text-lg font-bold">{item.title}</dt>
            <dd className="mt-1 leading-relaxed text-muted">{item.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
