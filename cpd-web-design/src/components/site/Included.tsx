"use client";

import { Archive, Gauge, LifeBuoy, PencilLine, Server, ShieldCheck, Smartphone, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";
import { SectionHead } from "./SectionHead";

const icons: Record<string, LucideIcon> = {
  hosting: Server,
  ssl: ShieldCheck,
  maintenance: Wrench,
  backups: Archive,
  edits: PencilLine,
  support: LifeBuoy,
  speed: Gauge,
  mobile: Smartphone,
};

/** A "ledger" rather than a card grid: each line item, ticked off at €0 extra. */
export function Included() {
  const t = useT();
  return (
    <section id="included" aria-labelledby="included-title" className="on-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <SectionHead dark id="included-title" index="02" label={t.included.label} title={t.included.title} intro={t.included.intro} />

        <ul className="mt-16 grid border-t border-paper/20 md:grid-cols-2 md:gap-x-16 lg:mt-24">
          {t.included.items.map((item, i) => {
            const Icon = icons[item.key] ?? Server;
            return (
              <Reveal as="li" key={item.key} delay={(i % 2) * 0.06} className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-paper/20 py-6 sm:grid-cols-[auto_1fr_auto] lg:py-8">
                <span className="row-span-2 flex size-12 items-center justify-center rounded-full border border-paper/30 text-ochre transition-colors group-hover:border-ochre group-hover:bg-ochre group-hover:text-ink">
                  <Icon aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="display self-end text-4xl">{item.title}</h3>
                <span className="hidden self-end text-right font-mono text-xs tracking-wider text-ochre uppercase sm:block">
                  ✓ {t.included.tag} · €0
                </span>
                <p className="col-start-2 leading-relaxed text-muted-dark sm:col-span-2">{item.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
