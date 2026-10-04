"use client";

import { CalendarCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { restaurant as r } from "@/content/examples/restaurant";
import { bookingTimes, romeToday } from "@/lib/hours";
import { fill, useL, useLang } from "@/lib/i18n";

type Form = { date: string; time: string; guests: string; name: string; phone: string; notes: string };

export function Booking() {
  const tr = useL();
  const { lang } = useLang();
  const [form, setForm] = useState<Form>({ date: "", time: "", guests: "2", name: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, boolean>>>({});
  const [done, setDone] = useState<Form | null>(null);

  const times = useMemo(() => bookingTimes(r.hours.week, form.date), [form.date]);
  const closedDay = !!form.date && times.length === 0;

  const set = (k: keyof Form, v: string) => {
    setForm((f) => ({ ...f, [k]: v, ...(k === "date" ? { time: "" } : {}) }));
    setErrors((e) => ({ ...e, [k]: false }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    (["date", "time", "name", "phone"] as const).forEach((k) => {
      if (!form[k].trim()) next[k] = true;
    });
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`book-${first}`)?.focus();
      return;
    }
    setDone(form);
  };

  if (done) {
    const date = new Date(`${done.date}T12:00:00`).toLocaleDateString(lang === "it" ? "it-IT" : "en-GB", { weekday: "long", day: "numeric", month: "long" });
    return (
      <div role="status" className="rounded-[2rem] bg-[#F5EEDD] p-8 text-[#231E16] sm:p-10">
        <CalendarCheck aria-hidden className="size-10 text-[#A64B25]" />
        <p className="mt-4 font-[family-name:var(--font-alba-display)] text-3xl">{tr(r.booking.confirmTitle)}</p>
        <p className="mt-3 text-lg">{fill(tr(r.booking.confirmBody), { guests: done.guests, date, time: done.time, phone: done.phone })}</p>
        <p className="mt-4 text-sm text-[#4A4436]">{tr(r.booking.demoNote)}</p>
        <button type="button" onClick={() => setDone(null)} className="mt-6 min-h-11 cursor-pointer rounded-full border-2 border-[#2F3A1F] px-5 font-semibold">
          {tr(r.booking.another)}
        </button>
      </div>
    );
  }

  const field = "mt-1.5 block w-full min-h-12 rounded-xl border-2 border-[#2F3A1F]/25 bg-white/70 px-4 text-[#231E16] focus:border-[#A64B25] focus:outline-none";
  const err = (k: keyof Form) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `book-${k}-err` } : {});
  const errMsg = (k: keyof Form) =>
    errors[k] && (
      <span id={`book-${k}-err`} className="mt-1 block text-sm font-semibold text-[#9A3F1C]">
        {tr(r.booking.required)}
      </span>
    );

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 rounded-[2rem] bg-[#F5EEDD] p-6 text-[#231E16] sm:grid-cols-3 sm:p-10">
      <label className="block sm:col-span-1">
        <span className="font-semibold">{tr(r.booking.date)}</span>
        <input
          id="book-date"
          type="date"
          min={romeToday()}
          suppressHydrationWarning
          value={form.date}
          onChange={(e) => set("date", e.target.value)}
          className={field}
          {...err("date")}
        />
        {errMsg("date")}
      </label>
      <label className="block">
        <span className="font-semibold">{tr(r.booking.time)}</span>
        <select id="book-time" value={form.time} onChange={(e) => set("time", e.target.value)} disabled={!form.date || closedDay} className={`${field} disabled:opacity-50`} {...err("time")}>
          <option value="">{tr(r.booking.chooseTime)}</option>
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errMsg("time")}
      </label>
      <label className="block">
        <span className="font-semibold">{tr(r.booking.guests)}</span>
        <select id="book-guests" value={form.guests} onChange={(e) => set("guests", e.target.value)} className={field}>
          {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      {closedDay && (
        <p role="alert" className="font-semibold text-[#9A3F1C] sm:col-span-3">
          {tr(r.booking.closedDay)}
        </p>
      )}
      <label className="block sm:col-span-1">
        <span className="font-semibold">{tr(r.booking.name)}</span>
        <input id="book-name" autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)} className={field} {...err("name")} />
        {errMsg("name")}
      </label>
      <label className="block sm:col-span-2">
        <span className="font-semibold">{tr(r.booking.phone)}</span>
        <input id="book-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={field} {...err("phone")} />
        {errMsg("phone")}
      </label>
      <label className="block sm:col-span-3">
        <span className="font-semibold">{tr(r.booking.notes)}</span>
        <textarea rows={2} value={form.notes} onChange={(e) => set("notes", e.target.value)} className={`${field} py-3`} />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="min-h-13 cursor-pointer rounded-full bg-[#A64B25] px-8 py-3.5 text-lg font-semibold text-[#F5EEDD] transition-transform hover:-translate-y-0.5">
          {tr(r.booking.submit)}
        </button>
        <span className="text-sm text-[#4A4436]">{tr(r.booking.demoNote)}</span>
      </div>
    </form>
  );
}
