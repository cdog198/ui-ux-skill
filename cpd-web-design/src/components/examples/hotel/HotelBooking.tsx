"use client";

import { BedDouble } from "lucide-react";
import { useState } from "react";
import { hotel as h } from "@/content/examples/hotel";
import { romeToday } from "@/lib/hours";
import { fill, formatEuro, useL, useLang } from "@/lib/i18n";

export type StaySearch = { checkIn: string; checkOut: string; guests: string; room: string };

const nightsBetween = (a: string, b: string) => {
  if (!a || !b) return 0;
  return Math.round((new Date(`${b}T12:00:00`).getTime() - new Date(`${a}T12:00:00`).getTime()) / 86_400_000);
};

const field =
  "mt-1.5 block w-full min-h-12 rounded-none border-0 border-b border-[#14202B]/30 bg-transparent px-0 text-[#14202B] focus:border-[#7A5A2E] focus:ring-0 focus:outline-none";

/** Small availability search used in the hero. */
export function AvailabilitySearch({ onSearch }: { onSearch: (s: Omit<StaySearch, "room">) => void }) {
  const tr = useL();
  const [s, setS] = useState({ checkIn: "", checkOut: "", guests: "2" });
  const today = romeToday();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(s);
      }}
      className="grid gap-4 bg-[#FAF7F1] p-5 text-[#14202B] shadow-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.7fr_auto] lg:items-end lg:gap-6 lg:p-6"
    >
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.hero.checkIn)}</span>
        <input type="date" min={today} suppressHydrationWarning value={s.checkIn} onChange={(e) => setS({ ...s, checkIn: e.target.value })} className={field} />
      </label>
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.hero.checkOut)}</span>
        <input type="date" min={s.checkIn || today} suppressHydrationWarning value={s.checkOut} onChange={(e) => setS({ ...s, checkOut: e.target.value })} className={field} />
      </label>
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.hero.guests)}</span>
        <select value={s.guests} onChange={(e) => setS({ ...s, guests: e.target.value })} className={field}>
          {["1", "2", "3", "4"].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      <button type="submit" className="min-h-13 cursor-pointer bg-[#14202B] px-7 py-3.5 text-sm font-medium tracking-[0.2em] text-[#FAF7F1] uppercase transition-colors hover:bg-[#7A5A2E] sm:col-span-2 lg:col-span-1">
        {tr(h.hero.search)}
      </button>
    </form>
  );
}

/** Direct booking request form. Re-mounted (via key) when the hero search or a room button pre-fills it. */
export function HotelBooking({ initial, searched }: { initial: StaySearch; searched: boolean }) {
  const tr = useL();
  const { lang } = useLang();
  const [f, setF] = useState({ ...initial, name: "", email: "", requests: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<typeof f | null>(null);
  const today = romeToday();

  const nights = nightsBetween(f.checkIn, f.checkOut);
  const room = h.rooms.find((r) => r.id === f.room);
  const estimate = nights > 0 ? (room?.fromPrice ?? Math.min(...h.rooms.map((r) => r.fromPrice))) * nights : 0;

  const set = (k: keyof typeof f, v: string) => {
    setF((p) => ({ ...p, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    (["checkIn", "checkOut", "name", "email"] as const).forEach((k) => {
      if (!f[k].trim()) next[k] = tr(h.booking.required);
    });
    if (f.checkIn && f.checkOut && nights <= 0) next.checkOut = tr(h.booking.invalidDates);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`stay-${first}`)?.focus();
      return;
    }
    setDone(f);
  };

  const fmt = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString(lang === "it" ? "it-IT" : "en-GB", { day: "numeric", month: "short" });

  if (done) {
    return (
      <div role="status" className="bg-[#FAF7F1] p-8 text-[#14202B] sm:p-12">
        <BedDouble aria-hidden className="size-10 text-[#7A5A2E]" strokeWidth={1.25} />
        <p className="mt-4 font-[family-name:var(--font-vg-display)] text-4xl">{tr(h.booking.confirmTitle)}</p>
        <p className="mt-3 text-lg">
          {fill(tr(h.booking.confirmBody), {
            room: room ? tr(room.name) : tr(h.booking.anyRoom),
            from: fmt(done.checkIn),
            to: fmt(done.checkOut),
            guests: done.guests,
            email: done.email,
          })}
        </p>
        <p className="mt-4 text-sm text-[#14202B]/70">{tr(h.booking.demoNote)}</p>
        <button type="button" onClick={() => setDone(null)} className="mt-6 min-h-11 cursor-pointer border border-[#14202B] px-5 text-sm tracking-[0.15em] uppercase">
          {tr(h.booking.another)}
        </button>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <span id={`stay-${k}-err`} className="mt-1 block text-sm font-medium text-[#A33A2A]">
        {errors[k]}
      </span>
    ) : null;
  const aria = (k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `stay-${k}-err` } : {});

  return (
    <form onSubmit={submit} noValidate className="grid gap-6 bg-[#FAF7F1] p-6 text-[#14202B] sm:grid-cols-2 sm:p-10">
      {searched && <p className="text-sm font-medium tracking-[0.15em] text-[#7A5A2E] uppercase sm:col-span-2">✓ {tr(h.booking.searchedFor)}</p>}
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.hero.checkIn)}</span>
        <input id="stay-checkIn" type="date" min={today} suppressHydrationWarning value={f.checkIn} onChange={(e) => set("checkIn", e.target.value)} className={field} {...aria("checkIn")} />
        {err("checkIn")}
      </label>
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.hero.checkOut)}</span>
        <input id="stay-checkOut" type="date" min={f.checkIn || today} suppressHydrationWarning value={f.checkOut} onChange={(e) => set("checkOut", e.target.value)} className={field} {...aria("checkOut")} />
        {err("checkOut")}
      </label>
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.booking.room)}</span>
        <select value={f.room} onChange={(e) => set("room", e.target.value)} className={field}>
          <option value="">{tr(h.booking.anyRoom)}</option>
          {h.rooms.map((r) => (
            <option key={r.id} value={r.id}>
              {tr(r.name)} · {tr(h.roomsSection.from)} {formatEuro(r.fromPrice, lang)}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.hero.guests)}</span>
        <select value={f.guests} onChange={(e) => set("guests", e.target.value)} className={field}>
          {["1", "2", "3", "4"].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.booking.name)}</span>
        <input id="stay-name" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} className={field} {...aria("name")} />
        {err("name")}
      </label>
      <label className="block">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.booking.email)}</span>
        <input id="stay-email" type="email" autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} className={field} {...aria("email")} />
        {err("email")}
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">{tr(h.booking.requests)}</span>
        <textarea rows={2} value={f.requests} onChange={(e) => set("requests", e.target.value)} className={`${field} py-2`} />
      </label>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="font-[family-name:var(--font-vg-display)] text-2xl">
          {nights > 0 && (
            <>
              {nights === 1 ? tr(h.booking.night) : fill(tr(h.booking.nights), { n: nights })} ·{" "}
              <span className="text-[#7A5A2E]">{fill(tr(h.booking.estimate), { total: formatEuro(estimate, lang) })}</span>
            </>
          )}
        </p>
        <button type="submit" className="min-h-13 cursor-pointer bg-[#14202B] px-8 py-3.5 text-sm font-medium tracking-[0.2em] text-[#FAF7F1] uppercase hover:bg-[#7A5A2E]">
          {tr(h.booking.submit)}
        </button>
      </div>
      <p className="text-sm text-[#14202B]/70 sm:col-span-2">{tr(h.booking.demoNote)}</p>
    </form>
  );
}
