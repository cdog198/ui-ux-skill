"use client";

import { useEffect, useState } from "react";
import { restaurant as r } from "@/content/examples/restaurant";
import { openStatus, romeNow, type OpenStatus } from "@/lib/hours";
import { fill, useL, useLang } from "@/lib/i18n";

/** Live open/closed status in Rome time. Rendered client-side only to avoid hydration mismatches. */
export function useOpenStatus() {
  const [state, setState] = useState<{ status: OpenStatus; today: number } | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = romeNow();
      setState({ status: openStatus(r.hours.week, now), today: now.day });
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return state;
}

export function OpenNowPill({ className = "" }: { className?: string }) {
  const tr = useL();
  const { lang } = useLang();
  const state = useOpenStatus();
  if (!state) return <span className={`inline-block h-9 w-44 ${className}`} aria-hidden />;
  const { status } = state;

  let detail = "";
  if (status.open) detail = fill(tr(r.hours.closesAt), { time: status.until });
  else if (status.nextDay !== null) {
    const day =
      status.daysAhead === 0
        ? lang === "it" ? "oggi" : "today"
        : status.daysAhead === 1
          ? lang === "it" ? "domani" : "tomorrow"
          : r.hours.days[lang][status.nextDay];
    detail = fill(tr(r.hours.opensAt), { day, time: status.nextTime });
  }

  return (
    <span role="status" className={`inline-flex min-h-9 items-center gap-2 rounded-full bg-white/80 px-4 text-sm font-semibold text-[#231E16] ${className}`}>
      <span className={`relative flex size-2.5`}>
        {status.open && <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#3F8A3A] opacity-60 motion-reduce:animate-none" />}
        <span className={`relative inline-flex size-2.5 rounded-full ${status.open ? "bg-[#3F8A3A]" : "bg-[#9A3F1C]"}`} />
      </span>
      {status.open ? tr(r.hours.openNow) : tr(r.hours.closedNow)}
      <span className="font-normal text-[#4A4436]">· {detail}</span>
    </span>
  );
}
