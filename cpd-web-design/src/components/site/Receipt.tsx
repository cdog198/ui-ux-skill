"use client";

import { m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { pricing, site } from "@/config/site";
import { fill, formatEuro, useLang, useT } from "@/lib/i18n";

/**
 * The hero device: an Italian "documento commerciale" for the site build, totalling €0,00,
 * printed out of a till slot. This is the page's one piece of non-interactive motion.
 */
export function Receipt() {
  const t = useT();
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const [stamp, setStamp] = useState("");

  // Date and time printed in Rome time, like a real till. Client-only to avoid hydration mismatch.
  useEffect(() => {
    const now = new Intl.DateTimeFormat("it-IT", {
      timeZone: "Europe/Rome",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStamp(now.replace(",", ""));
  }, []);

  const monthly = fill(t.receipt.from, { price: formatEuro(pricing.monthly, lang) });

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Till slot */}
      <div aria-hidden className="relative z-10 mx-[-14px] h-3 rounded-full bg-ink shadow-[0_2px_0_rgb(0_0_0/0.25)]" />
      <div className="-mt-1.5 overflow-hidden pb-6">
        <m.div
          initial={reduce ? false : { y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.6, ease: [0.45, 0, 0.25, 1], delay: 0.2 }}
          role="img"
          aria-label={`${t.receipt.total}: ${formatEuro(0, lang)}. ${t.receipt.then}: ${monthly} (${t.receipt.covers}).`}
          className="receipt-edge relative bg-white px-5 pt-6 pb-9 font-mono text-[12.5px] leading-[1.55] text-ink shadow-[0_18px_40px_-24px_rgb(0_0_0/0.6)]"
        >
          <div aria-hidden className="text-center">
            <p className="text-[15px] font-semibold">CPD WEB DESIGN</p>
            <p>Roma</p>
            <p>P.IVA {site.vatNumber.replace(/^IT/, "")}</p>
            <p className="mt-3 font-semibold">{t.receipt.doc}</p>
            <p>{t.receipt.docSub}</p>
          </div>

          <div aria-hidden className="mt-4 flex justify-between border-b border-dashed border-ink/50 pb-1">
            <span>{t.receipt.description}</span>
            <span>{t.receipt.price}</span>
          </div>
          <ul aria-hidden className="mt-1.5 space-y-0.5">
            {t.receipt.lines.map(([label, price], i) => (
              <li key={i} className="flex items-end gap-2">
                <span>{label}</span>
                <span className="dotted-leader mb-1.5 h-2 flex-1" />
                <span>{price}</span>
              </li>
            ))}
          </ul>

          <div aria-hidden className="mt-3 border-t border-dashed border-ink/50 pt-2">
            <p className="flex items-baseline justify-between pt-3 font-semibold">
              <span>{t.receipt.total}</span>
              {/* Tills print the total double-height; someone has gone over it with a highlighter */}
              <span className="relative">
                <span aria-hidden className="absolute -inset-x-1.5 -top-6 bottom-[-4px] -rotate-2 rounded-sm bg-sun/80" />
                <span className="relative inline-block origin-bottom scale-y-[1.9] text-[22px] leading-none">0,00</span>
              </span>
            </p>
            <p className="mt-2 flex justify-between">
              <span>{t.receipt.vat}</span>
              <span>0,00</span>
            </p>
            <p className="flex justify-between">
              <span>{t.receipt.payment}</span>
              <span>{t.receipt.paymentValue}</span>
            </p>
          </div>

          <div aria-hidden className="mt-3 flex justify-between border-t border-dashed border-ink/50 pt-2 text-[11.5px]">
            <span className="min-w-[8.5rem]">{stamp}</span>
            <span>DOC.N. 0001-0001</span>
          </div>

          <div aria-hidden className="mt-4 border-t border-dashed border-ink/50 pt-3 text-center">
            <p>{t.receipt.then}:</p>
            <p className="font-semibold">
              {monthly}
              {t.pricing.perMonthShort}
            </p>
            <p className="text-[11.5px]">{t.receipt.covers}</p>
          </div>

          {/* End-of-roll stripe, as on real till paper */}
          <span aria-hidden className="absolute inset-y-0 right-1.5 w-1 bg-stripe/70" />
        </m.div>
      </div>
    </div>
  );
}
