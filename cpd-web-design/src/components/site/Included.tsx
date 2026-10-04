"use client";

import { useT } from "@/lib/i18n";
import { Section } from "./Section";

export function Included() {
  const t = useT();
  return (
    <Section id="included" title={t.included.title} intro={t.included.intro} tone="paper-2">
      <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.included.items.map((item) => (
          <div key={item.key} className="border-t border-line pt-4">
            <dt className="text-lg font-semibold">{item.title}</dt>
            <dd className="mt-1 leading-relaxed text-muted">{item.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
