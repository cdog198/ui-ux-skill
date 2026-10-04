"use client";

import Link from "next/link";
import { contact, site } from "@/config/site";
import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="on-ink overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] border-t border-paper/15 px-4 pt-16 pb-8 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <p className="serif-accent text-3xl leading-tight">{t.footer.tagline}</p>
          <ul className="space-y-2 text-muted-dark">
            <li>
              <a className="hover:text-paper" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <a className="hover:text-paper" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp · {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-paper" href={contact.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
          <ul className="space-y-2 text-muted-dark">
            <li>
              <Link className="hover:text-paper" href="/examples">
                {t.nav.examples}
              </Link>
            </li>
            <li>
              <Link className="hover:text-paper" href="/#pricing">
                {t.nav.pricing}
              </Link>
            </li>
            <li>
              <Link className="hover:text-paper" href="/privacy">
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>

        <p aria-hidden className="display mt-16 -mb-[0.12em] text-center text-[27vw] leading-[0.78] text-paper select-none lg:text-[24rem]">
          CPD<span className="text-rosso-bright">.</span>
        </p>

        <div className="mt-8 flex flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-xs text-muted-dark sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name} · {t.footer.vat} {site.vatNumber} · {t.footer.rights}
          </p>
          <p>{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
}
