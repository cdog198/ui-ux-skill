"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { Receipt } from "./Receipt";
import { btn } from "./Section";

export function Hero() {
  const t = useT();
  return (
    <section aria-labelledby="hero-title" className="on-green bg-green text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-14 pb-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-20 lg:pb-24">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="display text-[clamp(3.3rem,8.2vw,6.9rem)]">
            {t.hero.titleA}
            <br />
            {t.hero.titleB}
          </h1>
          <p className="mt-6 text-[clamp(1.4rem,2.6vw,2rem)] leading-snug font-semibold">{t.hero.sub}</p>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-green-soft">{t.hero.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className={`${btn.primary} min-h-13 px-7 text-lg`}>
              {t.hero.cta}
            </Link>
            <Link href="/examples" className={`${btn.secondaryOnGreen} min-h-13 px-7 text-lg`}>
              {t.hero.secondary}
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Receipt />
        </div>
      </div>
    </section>
  );
}
