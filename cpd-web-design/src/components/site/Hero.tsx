"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n";
import { Receipt } from "./Receipt";
import { btn } from "./Section";

/**
 * Big headline, then one wide panel: the €0,00 receipt printing between
 * real screenshots of the example sites (public/images/work/*.jpg).
 */
export function Hero() {
  const t = useT();
  return (
    <section aria-labelledby="hero-title" className="bg-paper">
      <div className="mx-auto max-w-[1280px] px-5 pt-14 sm:px-8 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 id="hero-title" className="headline text-[clamp(3.4rem,8.6vw,8rem)] lg:col-span-8">
            {t.hero.titleA}
            <br />
            {t.hero.titleB}
          </h1>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-xl leading-snug font-medium">{t.hero.sub}</p>
            <p className="mt-3 leading-relaxed text-muted">{t.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#contact" className={btn.primary}>
                {t.hero.cta}
              </Link>
              <Link href="/examples" className={btn.secondary}>
                {t.hero.secondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[28px] bg-sky px-5 pt-10 sm:px-10 lg:mt-16 lg:h-[600px] lg:pt-14">
          {/* Example sites either side of the receipt (desktop only) */}
          <Link href="/examples/restaurant" tabIndex={-1} aria-hidden className="absolute top-16 -left-24 hidden w-[480px] rotate-[-4deg] overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)] lg:block xl:-left-10">
            <Image src="/images/work/restaurant.jpg" alt="" width={1440} height={900} sizes="480px" className="h-auto w-full" />
          </Link>
          <Link href="/examples/hotel" tabIndex={-1} aria-hidden className="absolute top-28 -right-24 hidden w-[480px] rotate-[4deg] overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)] lg:block xl:-right-10">
            <Image src="/images/work/hotel.jpg" alt="" width={1440} height={900} sizes="480px" className="h-auto w-full" />
          </Link>
          <div className="relative">
            <Receipt />
          </div>
        </div>
      </div>
    </section>
  );
}
