"use client";

import Link from "next/link";
import { contact, site } from "@/config/site";
import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="on-green bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm sm:px-8 md:grid-cols-3">
        <div>
          <p className="heading text-xl">{site.name}</p>
          <p className="mt-2 text-green-soft">{t.footer.based}</p>
        </div>
        <ul className="space-y-1.5 text-green-soft">
          <li>
            <a className="hover:text-paper hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </li>
          <li>
            <a className="hover:text-paper hover:underline" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp {contact.phoneDisplay}
            </a>
          </li>
          <li>
            <a className="hover:text-paper hover:underline" href={contact.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
        <div className="text-green-soft">
          <p>
            © {year} {site.name}
          </p>
          <p>
            {t.footer.vat} {site.vatNumber}
          </p>
          <Link className="mt-1.5 inline-block hover:text-paper hover:underline" href="/privacy">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
