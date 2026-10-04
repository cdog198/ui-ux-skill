"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { btn } from "./Section";

/** Shared body for the privacy and 404 pages. */
export function SimplePage({ kind }: { kind: "privacy" | "notFound" }) {
  const t = useT();
  if (kind === "notFound") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <h1 className="heading text-[clamp(2.5rem,6vw,4.5rem)]">{t.notFound.title}</h1>
        <p className="mt-4 text-lg text-muted">{t.notFound.body}</p>
        <Link href="/" className={`${btn.primary} mt-8`}>
          {t.notFound.home}
        </Link>
      </section>
    );
  }
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
      <h1 className="heading text-[clamp(2.5rem,6vw,4.5rem)]">{t.privacyPage.title}</h1>
      <p className="mt-8 border-l-4 border-cobalt pl-5 text-lg leading-relaxed text-muted">{t.privacyPage.placeholder}</p>
    </section>
  );
}
