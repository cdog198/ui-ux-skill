"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio, type PortfolioItem } from "@/config/site";
import { useL, useT } from "@/lib/i18n";
import { SectionHead } from "./SectionHead";

/** Asymmetric portfolio wall. Items come from src/config/site.ts → portfolio. */
export function Work() {
  const t = useT();
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
      <SectionHead id="work-title" index="05" label={t.work.label} title={t.work.title} intro={t.work.intro} />

      <ul className="mt-16 grid gap-5 md:grid-cols-6 lg:mt-24 lg:gap-6">
        {portfolio.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(i % 3) * 0.06}
            className={
              item.featured
                ? "md:col-span-6 lg:col-span-4 lg:row-span-2"
                : i < 3
                  ? "md:col-span-3 lg:col-span-2"
                  : "md:col-span-3"
            }
          >
            <WorkTile item={item} large={!!item.featured} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function WorkTile({ item, large }: { item: PortfolioItem; large: boolean }) {
  const t = useT();
  const tr = useL();
  const isDemo = !!item.href;
  const link = item.href ?? item.url;
  const cta = isDemo ? t.work.view : item.url ? t.work.visit : t.work.soon;

  const body = (
    <>
      <div
        className={`relative overflow-hidden rounded-sm ${large ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[34rem]" : item.image || item.href ? "aspect-[4/3]" : "aspect-[16/9]"}`}
        style={{ background: item.cover.bg, color: item.cover.fg, ["--ph-bg" as string]: item.cover.bg, ["--ph-fg" as string]: item.cover.fg }}
      >
        {item.image ? (
          <Photo
            src={item.image}
            alt=""
            label={item.title}
            sizes={large ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
            className="transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
            <span className="font-mono text-xs tracking-widest uppercase opacity-80">{item.url?.replace(/^https?:\/\//, "") ?? "cpd · 2026"}</span>
            <span className={`display ${large ? "text-[clamp(4rem,10vw,9rem)]" : "text-6xl"}`}>{item.title}</span>
          </div>
        )}
        {link && (
          <span className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-paper text-ink transition-transform group-hover:rotate-45">
            <ArrowUpRight aria-hidden className="size-5" />
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm text-muted">{tr(item.category)}</p>
          <p className="mt-2 max-w-md text-muted">{tr(item.description)}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted">{item.year}</span>
      </div>
      <span className="mt-3 inline-block text-sm font-semibold text-rosso underline decoration-2 underline-offset-4">{cta}</span>
    </>
  );

  if (!link) return <div className="group block">{body}</div>;
  if (isDemo)
    return (
      <Link href={link} className="group block">
        {body}
      </Link>
    );
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
      {body}
    </a>
  );
}
