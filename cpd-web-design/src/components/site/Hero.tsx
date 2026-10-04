"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useT } from "@/lib/i18n";
import { Receipt } from "./Receipt";

export function Hero() {
  const t = useT();
  return (
    <section aria-labelledby="hero-title" className="grain relative overflow-hidden pt-24 lg:pt-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24">
        <div className="lg:col-span-7 xl:col-span-8">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">{t.hero.kicker}</p>
          <h1 id="hero-title" className="display mt-6 text-[clamp(4.2rem,15vw,11.5rem)]">
            <span className="block">{t.hero.titleA}</span>
            <span className="block text-rosso">{t.hero.titleB}</span>
          </h1>
          <p className="serif-accent mt-5 text-[clamp(1.6rem,3.6vw,2.75rem)] leading-tight">{t.hero.sub}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.body}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-rosso px-8 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/examples"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-ink px-8 text-base font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              {t.hero.secondary}
              <ArrowDownRight aria-hidden className="size-5 transition-transform group-hover:rotate-[-45deg]" />
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-muted">{t.hero.proof}</p>
        </div>

        <div className="flex items-center lg:col-span-5 xl:col-span-4">
          <Receipt />
        </div>
      </div>
      <Ticker />
    </section>
  );
}

function Ticker() {
  const t = useT();
  const items = [...t.ticker, ...t.ticker];
  return (
    <div className="border-y-2 border-ink bg-ink py-3 text-paper" aria-label={t.ticker.join(", ")} role="note">
      <div className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className="display flex items-center gap-6 pr-6 text-3xl">
            {item}
            <span className="text-rosso-bright">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
