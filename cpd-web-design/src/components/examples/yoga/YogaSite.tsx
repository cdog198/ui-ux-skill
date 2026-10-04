"use client";

import { Check, MapPin, MessageCircle, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { ExampleChrome, FeatureZone } from "@/components/examples/Features";
import { Gallery } from "@/components/examples/Lightbox";
import { MapEmbed, directionsUrl } from "@/components/examples/MapEmbed";
import { LangToggle } from "@/components/ui/LangToggle";
import { Photo } from "@/components/ui/Photo";
import { yoga as y, yogaMeta, type ClassType } from "@/content/examples/yoga";
import { romeNow } from "@/lib/hours";
import { fill, formatEuro, useL, useLang } from "@/lib/i18n";

/*
 * Respiro Yoga palette
 * sand #F1EBE1 · deep teal #1F4E5A · saffron #D98E2B (fills only) · white
 */

const display = "font-[family-name:var(--font-resp-display)]";
const WEEK = [1, 2, 3, 4, 5, 6, 0];
const TYPES: ClassType[] = ["vinyasa", "hatha", "yin", "prenatal"];

export function YogaSite() {
  const tr = useL();
  const { lang } = useLang();

  const nav = [
    { href: "#timetable", label: tr(y.nav.timetable) },
    { href: "#styles", label: tr(y.nav.styles) },
    { href: "#prices", label: tr(y.nav.prices) },
    { href: "#teachers", label: tr(y.nav.teachers) },
  ];

  return (
    <ExampleChrome features={yogaMeta.features}>
      <div className="min-h-dvh bg-[#F1EBE1] font-[family-name:var(--font-resp-sans)] text-[#1F4E5A] [--ph-bg:#E4DACB] [--ph-fg:#1F4E5A] [&_:focus-visible]:outline-[#1F4E5A]" lang={lang}>
        <a href="#resp-main" className="sr-only bg-[#1F4E5A] px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]">
          {lang === "it" ? "Vai al contenuto" : "Skip to content"}
        </a>

        <header className="sticky top-0 z-40 bg-[#F1EBE1]/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
            <a href="#top" className={`${display} text-2xl`}>
              respiro
            </a>
            <nav aria-label="Respiro Yoga" className="hidden md:block">
              <ul className="flex gap-7 text-sm font-medium">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:underline">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <FeatureZone id="lang" labelPosition="below-right">
              <LangToggle className="text-[#1F4E5A]" activeClassName="bg-[#1F4E5A] text-white" inactiveClassName="hover:bg-[#1F4E5A]/10" />
            </FeatureZone>
          </div>
        </header>

        <main id="resp-main">
          <FeatureZone id="hero" as="section" className="px-3 sm:px-4">
            <div id="top" className="relative mx-auto flex min-h-[78svh] max-w-[1400px] items-end overflow-hidden rounded-[32px] bg-[#1F4E5A]">
              <Photo src={y.hero.image.src} alt={tr(y.hero.image.alt)} sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a31]/85 via-[#0f2a31]/20 to-transparent" />
              <div className="relative w-full p-6 text-white sm:p-10 lg:p-14">
                <h1 className={`${display} max-w-3xl text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[1]`}>{tr(y.hero.title)}</h1>
                <p className="mt-5 max-w-[50ch] text-lg text-white/85">{tr(y.hero.body)}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#timetable" className="inline-flex min-h-12 items-center rounded-full bg-[#D98E2B] px-6 font-semibold text-[#1a1408]">
                    {tr(y.hero.cta)}
                  </a>
                  <span className="rounded-full bg-white/15 px-4 py-2.5 text-sm backdrop-blur">{tr(y.hero.offer)}</span>
                </div>
              </div>
            </div>
          </FeatureZone>

          <FeatureZone id="timetable" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <div id="timetable" className="scroll-mt-16">
              <Timetable />
            </div>
          </FeatureZone>

          <FeatureZone id="styles" as="section" className="bg-white">
            <div id="styles" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 sm:px-8 lg:py-24">
              <h2 className={`${display} text-5xl`}>{tr(y.styles.title)}</h2>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {TYPES.map((type) => (
                  <li key={type} className="border-t-2 border-[#1F4E5A] pt-4">
                    <h3 className={`${display} text-3xl`}>{tr(y.styles.items[type].name)}</h3>
                    <p className="mt-2 leading-relaxed text-[#1F4E5A]/90">{tr(y.styles.items[type].body)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FeatureZone>

          <FeatureZone id="prices" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <h2 id="prices" className={`${display} scroll-mt-16 text-5xl`}>
              {tr(y.prices.title)}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {y.prices.items.map((item) => (
                <li key={item.name.en} className={`rounded-3xl p-7 ${item.highlight ? "bg-[#D98E2B] text-[#1a1408]" : "bg-white"}`}>
                  <p className="font-semibold">{tr(item.name)}</p>
                  <p className={`${display} mt-4 text-5xl`}>{formatEuro(item.price, lang)}</p>
                  <p className="mt-2 text-sm opacity-80">{tr(item.note)}</p>
                </li>
              ))}
            </ul>
          </FeatureZone>

          <FeatureZone id="teachers" as="section" className="bg-white">
            <div id="teachers" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 sm:px-8 lg:py-24">
              <h2 className={`${display} text-5xl`}>{tr(y.teachers.title)}</h2>
              <ul className="mt-10 grid gap-8 sm:grid-cols-3">
                {y.teachers.people.map((p) => (
                  <li key={p.name}>
                    <div className="relative aspect-square overflow-hidden rounded-full">
                      <Photo src={p.image.src} alt={tr(p.image.alt)} sizes="(min-width: 640px) 30vw, 80vw" />
                    </div>
                    <p className={`${display} mt-5 text-center text-3xl`}>{p.name}</p>
                    <p className="text-center text-[#1F4E5A]/90">{tr(p.role)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FeatureZone>

          <FeatureZone id="gallery" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <h2 className={`${display} text-5xl`}>{tr(y.gallery.title)}</h2>
            <Gallery
              images={y.gallery.images}
              className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4"
              itemClassName={(i) => `rounded-3xl ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              sizes="(min-width: 768px) 25vw, 50vw"
            />
          </FeatureZone>

          <FeatureZone id="faq" as="section" className="bg-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
              <h2 className={`${display} text-5xl lg:col-span-4`}>{tr(y.faq.title)}</h2>
              <div className="border-t border-[#1F4E5A]/20 lg:col-span-8">
                {y.faq.items.map((item) => (
                  <details key={item.q.en} className="group border-b border-[#1F4E5A]/20">
                    <summary className="flex min-h-14 items-center justify-between gap-4 py-4">
                      <h3 className="text-lg font-semibold">{tr(item.q)}</h3>
                      <Plus aria-hidden className="size-5 shrink-0 transition-transform group-open:rotate-45" />
                    </summary>
                    <p className="pb-5 leading-relaxed text-[#1F4E5A]/90">{tr(item.a)}</p>
                  </details>
                ))}
              </div>
            </div>
          </FeatureZone>

          <FeatureZone id="map" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className={`${display} text-5xl`}>{tr(y.contact.title)}</h2>
                <p className="mt-4 flex items-start gap-2 text-lg">
                  <MapPin aria-hidden className="mt-1 size-5 shrink-0" />
                  <span>
                    {y.address}
                    <span className="block text-base text-[#1F4E5A]/90">{tr(y.contact.body)}</span>
                  </span>
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={directionsUrl(y.mapsQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-[#1F4E5A] px-5 font-medium">
                    {tr(y.contact.directions)}
                  </a>
                  <a href={`https://wa.me/${y.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 font-medium text-[#0B2E16]">
                    <MessageCircle aria-hidden className="size-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <MapEmbed query={y.mapsQuery} className="min-h-80 rounded-3xl lg:col-span-7" tone={{ bg: "#E4DACB", fg: "#1F4E5A" }} />
            </div>
          </FeatureZone>
        </main>

        <footer className="bg-[#1F4E5A] px-5 pt-10 pb-32 text-sm text-white/75 sm:px-8 sm:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
            <p>
              <span className={`${display} text-2xl text-white`}>respiro</span> · {y.address} · {y.email}
            </p>
            <p>{tr(y.footer.fictional)}</p>
          </div>
        </footer>
      </div>
    </ExampleChrome>
  );
}

function Timetable() {
  const tr = useL();
  const { lang } = useLang();
  const [day, setDay] = useState(1);
  const [type, setType] = useState<ClassType | "all">("all");
  const [booked, setBooked] = useState<Record<string, boolean>>({});
  const t = y.timetable;

  // Start on today's day (Rome time) once in the browser.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDay(romeNow().day);
  }, []);

  const classes = t.classes.filter((c) => c.day === day && (type === "all" || c.type === type)).sort((a, b) => a.time.localeCompare(b.time));

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className={`${display} text-5xl`}>{tr(t.title)}</h2>
        <div role="group" aria-label="Style" className="flex flex-wrap gap-2 text-sm">
          {(["all", ...TYPES] as const).map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={type === k}
              onClick={() => setType(k)}
              className={`min-h-10 cursor-pointer rounded-full px-4 font-medium ${type === k ? "bg-[#1F4E5A] text-white" : "bg-white hover:bg-white/70"}`}
            >
              {k === "all" ? tr(t.all) : tr(y.styles.items[k].name)}
            </button>
          ))}
        </div>
      </div>

      <div role="tablist" aria-label={tr(t.title)} className="mt-8 grid grid-cols-7 gap-1 rounded-2xl bg-white p-1">
        {WEEK.map((d) => (
          <button
            key={d}
            role="tab"
            type="button"
            aria-selected={day === d}
            onClick={() => setDay(d)}
            className={`min-h-11 cursor-pointer rounded-xl text-sm font-semibold ${day === d ? "bg-[#1F4E5A] text-white" : "hover:bg-[#1F4E5A]/5"}`}
          >
            {t.days[lang][d]}
          </button>
        ))}
      </div>

      <FeatureZone id="booking" labelPosition="top-right">
      <div role="tabpanel">
      <ul className="mt-4">
        {classes.length === 0 && <li className="rounded-2xl bg-white p-6 text-[#1F4E5A]/90">{tr(t.empty)}</li>}
        {classes.map((c) => {
          const key = `${c.day}-${c.time}`;
          const spots = 3 + ((c.time.charCodeAt(1) + c.day) % 9);
          const isBooked = booked[key];
          return (
            <li key={key} className="mt-2 grid grid-cols-[4.5rem_1fr] items-center gap-x-4 gap-y-2 rounded-2xl bg-white p-4 sm:grid-cols-[5rem_1fr_auto] sm:p-5">
              <span className="text-2xl font-semibold tabular-nums">{c.time}</span>
              <div>
                <p className={`${display} text-2xl`}>{tr(y.styles.items[c.type].name)}</p>
                <p className="text-sm text-[#1F4E5A]/90">
                  {c.teacher} · {c.minutes} min · {tr(t.levels[c.level])} · {c.lang}
                </p>
              </div>
              <div className="col-span-2 flex items-center justify-between gap-3 sm:col-span-1">
                <span className="text-sm text-[#1F4E5A]/90">{fill(tr(t.spots), { n: isBooked ? spots - 1 : spots })}</span>
                <button
                  type="button"
                  onClick={() => setBooked((b) => ({ ...b, [key]: !b[key] }))}
                  aria-pressed={!!isBooked}
                  className={`inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-5 font-semibold ${isBooked ? "bg-[#1F4E5A] text-white" : "bg-[#D98E2B] text-[#1a1408]"}`}
                >
                  {isBooked && <Check aria-hidden className="size-4" />}
                  {isBooked ? tr(t.booked) : tr(t.book)}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
      </FeatureZone>
      <p className="mt-4 text-sm text-[#1F4E5A]/90">{tr(t.demoNote)}</p>
    </>
  );
}
