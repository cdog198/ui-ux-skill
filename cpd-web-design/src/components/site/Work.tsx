"use client";

import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { portfolio, type PortfolioItem } from "@/config/site";
import { useL, useT } from "@/lib/i18n";
import { Section, btn } from "./Section";

/** Items come from src/config/site.ts → portfolio. The first featured item gets the wide slot. */
export function Work() {
  const t = useT();
  return (
    <Section id="work" title={t.work.title} intro={t.work.intro} tone="paper-2">
      <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
        {portfolio.map((item) => (
          <li key={item.title} className={item.featured ? "md:col-span-2" : ""}>
            <WorkItem item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function WorkItem({ item }: { item: PortfolioItem }) {
  const t = useT();
  const tr = useL();
  const isDemo = !!item.href;
  const label = isDemo ? t.work.view : item.url ? t.work.visit : t.work.soon;

  const cover = (
    <div
      className={`relative overflow-hidden rounded-md ${item.featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"}`}
      style={{ background: item.cover.bg, color: item.cover.fg, ["--ph-bg" as string]: item.cover.bg, ["--ph-fg" as string]: item.cover.fg }}
    >
      {item.image ? (
        <Photo src={item.image} alt="" label={item.title} sizes={item.featured ? "100vw" : "(min-width: 768px) 50vw, 100vw"} />
      ) : (
        // No screenshot yet: show the site's name as a plain cover.
        <span className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <span className="heading text-[clamp(2.5rem,7vw,5.5rem)]">{item.title}</span>
        </span>
      )}
    </div>
  );

  return (
    <article>
      {cover}
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <span className="shrink-0 text-sm text-muted">{item.year}</span>
      </div>
      <p className="text-sm text-muted">{tr(item.category)}</p>
      <p className="mt-2 max-w-[60ch] leading-relaxed">{tr(item.description)}</p>
      {isDemo ? (
        <Link href={item.href!} className={`${btn.link} mt-3 inline-block`}>
          {label}
          <span className="sr-only">: {item.title}</span>
        </Link>
      ) : item.url ? (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className={`${btn.link} mt-3 inline-block`}>
          {label}
          <span className="sr-only">: {item.title}</span>
        </a>
      ) : (
        <p className="mt-3 text-sm text-muted">{label}</p>
      )}
    </article>
  );
}
