"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LangToggle } from "@/components/ui/LangToggle";
import { useT } from "@/lib/i18n";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="display text-[2.1rem] leading-none tracking-tight">CPD</span>
      <span className="hidden font-mono text-[10px] leading-tight tracking-widest uppercase sm:inline">
        Web Design
        <br />
        Roma
      </span>
    </span>
  );
}

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    { href: "/#included", label: t.nav.included },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/#work", label: t.nav.work },
    { href: "/examples", label: t.nav.examples },
    { href: "/#faq", label: t.nav.faq },
    { href: "/#about", label: t.nav.about },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]"
      >
        {t.nav.skip}
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-paper/92 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-10">
          <Link href="/" aria-label="CPD Web Design, home" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="relative py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-rosso after:transition-transform hover:after:scale-x-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LangToggle label={t.nav.language} />
            <Link
              href="/#contact"
              className="hidden rounded-full bg-rosso px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              {t.nav.cta}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex min-h-11 items-center rounded-full border border-ink px-4 text-sm font-semibold xl:hidden"
            >
              {t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
            className="on-ink fixed inset-0 z-[60] flex flex-col bg-ink px-4 pt-4 pb-8 text-paper sm:px-6"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
          >
            <div className="flex h-12 items-center justify-between">
              <Logo />
              <button
                type="button"
                autoFocus
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center rounded-full border border-paper px-4 text-sm font-semibold"
              >
                {t.nav.close}
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-8 flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <li key={l.href} className="border-b border-paper/15">
                    <Link href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-3">
                      <span className="font-mono text-xs text-ochre">{String(i + 1).padStart(2, "0")}</span>
                      <span className="display text-5xl sm:text-6xl">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center justify-between gap-4 pt-6">
              <LangToggle label={t.nav.language} activeClassName="bg-paper text-ink" inactiveClassName="hover:bg-paper/10" />
              <Link href="/#contact" onClick={() => setOpen(false)} className="rounded-full bg-rosso-bright px-5 py-3 text-sm font-semibold text-ink">
                {t.nav.cta}
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
