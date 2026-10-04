"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

/** Shared body for the privacy and 404 pages. */
export function SimplePage({ kind }: { kind: "privacy" | "notFound" }) {
  const t = useT();
  if (kind === "notFound") {
    return (
      <section className="mx-auto max-w-[1440px] px-4 pt-32 pb-24 sm:px-6 lg:px-10 lg:pt-44">
        <p className="display outline-text text-[clamp(8rem,30vw,22rem)] text-rosso">404</p>
        <h1 className="display text-[clamp(3rem,8vw,6rem)]">{t.notFound.title}</h1>
        <p className="serif-accent mt-4 text-2xl">{t.notFound.body}</p>
        <Link href="/" className="mt-10 inline-flex min-h-13 items-center rounded-full bg-rosso px-7 font-semibold text-paper">
          {t.notFound.home}
        </Link>
      </section>
    );
  }
  return (
    <section className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 lg:pt-44">
      <h1 className="display text-[clamp(3.5rem,10vw,7rem)]">{t.privacyPage.title}</h1>
      <p className="mt-8 border-l-4 border-rosso pl-5 text-lg leading-relaxed text-muted">{t.privacyPage.placeholder}</p>
    </section>
  );
}
