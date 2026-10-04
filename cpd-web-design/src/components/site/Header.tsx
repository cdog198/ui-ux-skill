"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LangToggle } from "@/components/ui/LangToggle";
import { useT } from "@/lib/i18n";
import { btn } from "./Section";

export function Logo() {
  return <span className="text-lg font-semibold tracking-tight whitespace-nowrap">CPD Web Design</span>;
}

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/#how", label: t.nav.how },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/#work", label: t.nav.work },
    { href: "/examples", label: t.nav.examples },
    { href: "/#faq", label: t.nav.faq },
    { href: "/#about", label: t.nav.about },
  ];

  return (
    <>
      <a href="#main" className="sr-only rounded bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]">
        {t.nav.skip}
      </a>
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" aria-label="CPD Web Design, home">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[15px]">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="underline-offset-4 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LangToggle label={t.nav.language} />
            <span className="hidden sm:block">
              <Link href="/#contact" className={`${btn.primary} min-h-10 px-4 text-sm`}>
                {t.nav.cta}
              </Link>
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex min-h-10 items-center rounded-full border border-ink/20 px-4 text-sm font-medium lg:hidden"
            >
              {t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={t.nav.menu} className="fixed inset-0 z-[60] flex flex-col bg-paper px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between border-b border-line">
            <Logo />
            <button type="button" autoFocus onClick={() => setOpen(false)} className="inline-flex min-h-10 items-center rounded-full border border-ink/20 px-4 text-sm font-medium">
              {t.nav.close}
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto py-6">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setOpen(false)} className="heading block py-3 text-4xl">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-between gap-4 border-t border-line py-5">
            <LangToggle label={t.nav.language} />
            <Link href="/#contact" onClick={() => setOpen(false)} className={btn.primary}>
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
