"use client";

import { CalendarCheck, Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ExampleChrome, FeatureZone } from "@/components/examples/Features";
import { Gallery } from "@/components/examples/Lightbox";
import { MapEmbed, directionsUrl } from "@/components/examples/MapEmbed";
import { LangToggle } from "@/components/ui/LangToggle";
import { Photo } from "@/components/ui/Photo";
import { salon as s, salonMeta } from "@/content/examples/salon";
import { bookingTimes, openStatus, romeNow, romeToday, type OpenStatus } from "@/lib/hours";
import { fill, formatEuro, useL, useLang } from "@/lib/i18n";

/*
 * Salone Iris palette
 * blush #F6E9E6 · plum #3E1F38 · rose #B04A5A (text-safe on blush) · white
 */

const display = "font-[family-name:var(--font-iris-display)]";
const allServices = s.services.groups.flatMap((g) => g.items);

function useStatus() {
  const [state, setState] = useState<{ status: OpenStatus; today: number } | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = romeNow();
      setState({ status: openStatus(s.hours.week, now), today: now.day });
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return state;
}

export function SalonSite() {
  const tr = useL();
  const { lang } = useLang();
  const state = useStatus();

  const nav = [
    { href: "#prices", label: tr(s.nav.services) },
    { href: "#team", label: tr(s.nav.team) },
    { href: "#work", label: tr(s.nav.gallery) },
    { href: "#visit", label: tr(s.nav.visit) },
  ];

  return (
    <ExampleChrome features={salonMeta.features}>
      <div className="min-h-dvh bg-[#F6E9E6] font-[family-name:var(--font-iris-sans)] text-[#3E1F38] [--ph-bg:#EBD5D0] [--ph-fg:#3E1F38] [&_:focus-visible]:outline-[#B04A5A]" lang={lang}>
        <a href="#iris-main" className="sr-only bg-[#3E1F38] px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]">
          {lang === "it" ? "Vai al contenuto" : "Skip to content"}
        </a>

        <header className="sticky top-0 z-40 bg-[#F6E9E6]/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
            <a href="#top" className={`${display} text-3xl`}>
              Iris
            </a>
            <nav aria-label="Salone Iris" className="hidden md:block">
              <ul className="flex gap-7 text-sm font-medium">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-[#B04A5A]">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <FeatureZone id="lang" labelPosition="below-right">
                <LangToggle className="text-[#3E1F38]" activeClassName="bg-[#3E1F38] text-white" inactiveClassName="hover:bg-[#3E1F38]/10" />
              </FeatureZone>
              <a href="#book" className="hidden min-h-10 items-center rounded-full bg-[#3E1F38] px-5 text-sm font-medium text-white sm:inline-flex">
                {tr(s.nav.book)}
              </a>
            </div>
          </div>
        </header>

        <main id="iris-main">
          <FeatureZone id="hero" as="section" className="mx-auto grid max-w-7xl gap-10 px-5 pt-8 pb-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24">
            <div id="top">
              <StatusPill state={state} />
              <h1 className={`${display} mt-6 text-[clamp(3rem,6.5vw,5.5rem)] leading-[1]`}>{tr(s.hero.title)}</h1>
              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[#3E1F38]/80">{tr(s.hero.body)}</p>
              <a href="#book" className="mt-8 inline-flex min-h-13 items-center rounded-full bg-[#B04A5A] px-8 text-lg font-medium text-white hover:bg-[#963c4b]">
                {tr(s.hero.cta)}
              </a>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_24px_24px]">
              <Photo src={s.hero.image.src} alt={tr(s.hero.image.alt)} sizes="(min-width: 1024px) 45vw, 90vw" priority />
            </div>
          </FeatureZone>

          <FeatureZone id="services" as="section" className="bg-white">
            <div id="prices" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 sm:px-8 lg:py-24">
              <h2 className={`${display} text-5xl`}>{tr(s.services.title)}</h2>
              <div className="mt-10 grid gap-10 md:grid-cols-3">
                {s.services.groups.map((g) => (
                  <div key={g.name.en}>
                    <h3 className="text-sm font-semibold tracking-wide text-[#B04A5A]">{tr(g.name)}</h3>
                    <ul className="mt-3">
                      {g.items.map((item) => (
                        <li key={item.id} className="flex items-baseline gap-3 border-b border-[#3E1F38]/10 py-3">
                          <span className="font-medium">{tr(item.name)}</span>
                          <span className="text-sm text-[#3E1F38]/75">
                            {item.minutes} {tr(s.services.min)}
                          </span>
                          <span className="ml-auto tabular-nums">{formatEuro(item.price, lang)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-[70ch] text-sm text-[#3E1F38]/70">{tr(s.services.note)}</p>
            </div>
          </FeatureZone>

          <FeatureZone id="team" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <h2 id="team" className={`${display} scroll-mt-16 text-5xl`}>
              {tr(s.team.title)}
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-3">
              {s.team.people.map((person) => (
                <li key={person.name}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <Photo src={person.image.src} alt={tr(person.image.alt)} sizes="(min-width: 640px) 30vw, 90vw" />
                  </div>
                  <p className={`${display} mt-4 text-3xl`}>{person.name}</p>
                  <p className="text-[#3E1F38]/75">{tr(person.role)}</p>
                </li>
              ))}
            </ul>
          </FeatureZone>

          <FeatureZone id="booking" as="section" className="bg-[#3E1F38] text-white">
            <div id="book" className="mx-auto grid max-w-7xl scroll-mt-16 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
              <h2 className={`${display} text-5xl lg:col-span-4`}>{tr(s.booking.title)}</h2>
              <div className="lg:col-span-8">
                <SalonBooking />
              </div>
            </div>
          </FeatureZone>

          <FeatureZone id="gallery" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <h2 id="work" className={`${display} scroll-mt-16 text-5xl`}>
              {tr(s.gallery.title)}
            </h2>
            <Gallery images={s.gallery.images} className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3" itemClassName={() => "aspect-square rounded-2xl"} sizes="(min-width: 768px) 33vw, 50vw" />
          </FeatureZone>

          <FeatureZone id="reviews" as="section" className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className={`${display} text-5xl`}>{tr(s.reviews.title)}</h2>
                <p className="rounded-full border border-[#3E1F38]/30 px-3 py-1 text-xs font-medium">{tr(s.reviews.disclaimer)}</p>
              </div>
              <ul className="mt-10 grid gap-6 md:grid-cols-3">
                {s.reviews.items.map((r) => (
                  <li key={r.name} className="rounded-3xl bg-[#F6E9E6] p-7">
                    <div className="flex gap-0.5 text-[#B04A5A]" role="img" aria-label="5/5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} aria-hidden className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-lg leading-snug">“{tr(r.text)}”</p>
                    <p className="mt-4 text-sm font-medium text-[#3E1F38]/70">{r.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FeatureZone>

          <section id="visit" aria-labelledby="iris-visit" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 sm:px-8 lg:py-24">
            <h2 id="iris-visit" className={`${display} text-5xl`}>
              {tr(s.visit.title)}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <FeatureZone id="hours" className="rounded-3xl bg-white p-7 lg:col-span-5">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Clock aria-hidden className="size-5" /> {tr(s.hours.title)}
                </h3>
                <table className="mt-4 w-full">
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 0].map((d) => (
                      <tr key={d} className={`border-b border-[#3E1F38]/10 last:border-0 ${state?.today === d ? "font-semibold text-[#B04A5A]" : ""}`}>
                        <th scope="row" className="py-2 text-left font-[inherit]">
                          {s.hours.days[lang][d]}
                        </th>
                        <td className="py-2 text-right tabular-nums">{s.hours.week[d].length ? s.hours.week[d].map((x) => `${x.open}–${x.close}`).join(" · ") : tr(s.hours.closed)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </FeatureZone>
              <div className="grid gap-6 lg:col-span-7">
                <FeatureZone id="map" className="overflow-hidden rounded-3xl bg-white">
                  <MapEmbed query={s.mapsQuery} className="aspect-[16/9] w-full" tone={{ bg: "#EBD5D0", fg: "#3E1F38" }} />
                  <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-start gap-2">
                      <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-[#B04A5A]" />
                      <span>
                        {s.address}
                        <span className="block text-sm text-[#3E1F38]/70">{tr(s.visit.body)}</span>
                      </span>
                    </p>
                    <a href={directionsUrl(s.mapsQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#3E1F38] px-5 font-medium">
                      {tr(s.visit.directions)}
                    </a>
                  </div>
                </FeatureZone>
                <FeatureZone id="call" className="grid gap-3 sm:grid-cols-2">
                  <a href={s.phoneHref} className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#3E1F38] font-medium text-white">
                    <Phone aria-hidden className="size-5" /> {tr(s.visit.call)}
                  </a>
                  <a href={`https://wa.me/${s.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#25D366] font-medium text-[#0B2E16]">
                    <MessageCircle aria-hidden className="size-5" /> WhatsApp
                  </a>
                </FeatureZone>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#3E1F38] px-5 pt-10 pb-32 text-sm text-white/75 sm:px-8 sm:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
            <p>
              <span className={`${display} text-2xl text-white`}>Salone Iris</span> · {s.address} · {s.phone}
            </p>
            <p>{tr(s.footer.fictional)}</p>
          </div>
        </footer>
      </div>
    </ExampleChrome>
  );
}

function StatusPill({ state }: { state: { status: OpenStatus } | null }) {
  const tr = useL();
  if (!state) return <span className="inline-block h-9" aria-hidden />;
  const open = state.status.open;
  return (
    <span role="status" className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium">
      <span className={`size-2.5 rounded-full ${open ? "bg-[#2F8A4A]" : "bg-[#B04A5A]"}`} aria-hidden />
      {open ? tr(s.hours.openNow) : tr(s.hours.closedNow)}
      {state.status.open && <span className="font-normal text-[#3E1F38]/70">· {state.status.until}</span>}
    </span>
  );
}

function SalonBooking() {
  const tr = useL();
  const { lang } = useLang();
  const [f, setF] = useState({ service: allServices[0].id, stylist: "", date: "", time: "", name: "", phone: "" });
  const [missing, setMissing] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const times = useMemo(() => bookingTimes(s.hours.week, f.date), [f.date]);
  const closedDay = !!f.date && times.length === 0;
  const b = s.booking;

  const field = "mt-1.5 block w-full min-h-12 rounded-xl border-0 bg-white/10 px-4 text-white ring-1 ring-white/25 focus:ring-2 focus:ring-white focus:outline-none [&>option]:text-[#3E1F38]";
  const set = (k: keyof typeof f, v: string) => {
    setF((p) => ({ ...p, [k]: v, ...(k === "date" ? { time: "" } : {}) }));
    setMissing((m) => m.filter((x) => x !== k));
  };

  if (done) {
    const service = allServices.find((x) => x.id === f.service)!;
    const date = new Date(`${f.date}T12:00:00`).toLocaleDateString(lang === "it" ? "it-IT" : "en-GB", { weekday: "long", day: "numeric", month: "long" });
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-[#3E1F38]">
        <CalendarCheck aria-hidden className="size-9 text-[#B04A5A]" />
        <p className="mt-4 text-xl leading-snug font-medium">
          {fill(tr(b.confirm), { service: tr(service.name), stylist: f.stylist || tr(b.firstFree), date, time: f.time, phone: f.phone })}
        </p>
        <p className="mt-3 text-sm text-[#3E1F38]/70">{tr(b.demoNote)}</p>
        <button type="button" onClick={() => setDone(false)} className="mt-5 min-h-11 cursor-pointer rounded-full border border-[#3E1F38] px-5 font-medium">
          {tr(b.another)}
        </button>
      </div>
    );
  }

  const err = (k: string) => missing.includes(k) && <span className="mt-1 block text-sm text-[#F5C2CB]">{tr(b.required)}</span>;

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const miss = (["date", "time", "name", "phone"] as const).filter((k) => !f[k].trim());
        setMissing(miss);
        if (miss.length) document.getElementById(`iris-${miss[0]}`)?.focus();
        else setDone(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <label className="block text-sm">
        {tr(b.service)}
        <select value={f.service} onChange={(e) => set("service", e.target.value)} className={field}>
          {s.services.groups.map((g) => (
            <optgroup key={g.name.en} label={tr(g.name)}>
              {g.items.map((item) => (
                <option key={item.id} value={item.id}>
                  {tr(item.name)} · {formatEuro(item.price, lang)}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        {tr(b.stylist)}
        <select value={f.stylist} onChange={(e) => set("stylist", e.target.value)} className={field}>
          <option value="">{tr(b.anyone)}</option>
          {s.team.people.map((p) => (
            <option key={p.name}>{p.name}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        {tr(b.date)}
        <input id="iris-date" type="date" min={romeToday()} suppressHydrationWarning value={f.date} onChange={(e) => set("date", e.target.value)} className={`${field} [color-scheme:dark]`} aria-invalid={missing.includes("date")} />
        {err("date")}
      </label>
      <label className="block text-sm">
        {tr(b.time)}
        <select id="iris-time" value={f.time} onChange={(e) => set("time", e.target.value)} disabled={!f.date || closedDay} className={`${field} disabled:opacity-50`} aria-invalid={missing.includes("time")}>
          <option value="">{tr(b.chooseTime)}</option>
          {times.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {err("time")}
      </label>
      {closedDay && (
        <p role="alert" className="text-[#F5C2CB] sm:col-span-2">
          {tr(b.closed)}
        </p>
      )}
      <label className="block text-sm">
        {tr(b.name)}
        <input id="iris-name" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} className={field} aria-invalid={missing.includes("name")} />
        {err("name")}
      </label>
      <label className="block text-sm">
        {tr(b.phone)}
        <input id="iris-phone" type="tel" autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} className={field} aria-invalid={missing.includes("phone")} />
        {err("phone")}
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="min-h-13 cursor-pointer rounded-full bg-white px-8 font-medium text-[#3E1F38]">
          {tr(b.submit)}
        </button>
        <span className="text-sm text-white/70">{tr(b.demoNote)}</span>
      </div>
    </form>
  );
}
