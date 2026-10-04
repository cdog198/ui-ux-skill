"use client";

import { ArrowRight, Camera, Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { ExampleChrome, FeatureZone } from "@/components/examples/Features";
import { Gallery } from "@/components/examples/Lightbox";
import { MapEmbed, directionsUrl } from "@/components/examples/MapEmbed";
import { LangToggle } from "@/components/ui/LangToggle";
import { Photo } from "@/components/ui/Photo";
import { restaurant as r, restaurantMeta } from "@/content/examples/restaurant";
import { useL, useLang } from "@/lib/i18n";
import { Booking } from "./Booking";
import { Menu } from "./Menu";
import { OpenNowPill, useOpenStatus } from "./OpenNow";

/*
 * Trattoria Alba palette
 * cream #F5EEDD · olive #2F3A1F · terracotta #A64B25 · ink #231E16 · mustard #E0B44C
 */

export function RestaurantSite() {
  const tr = useL();
  const { lang } = useLang();

  const nav = [
    { href: "#menu", label: tr(r.nav.menu) },
    { href: "#specials", label: tr(r.nav.specials) },
    { href: "#gallery", label: tr(r.nav.gallery) },
    { href: "#visit", label: tr(r.nav.visit) },
  ];

  return (
    <ExampleChrome features={restaurantMeta.features}>
      <div
        className="min-h-dvh bg-[#F5EEDD] font-[family-name:var(--font-alba-sans)] text-[#231E16] [--ph-bg:#E9DFC6] [--ph-fg:#2F3A1F] [&_:focus-visible]:outline-[#A64B25]"
        lang={lang}
      >
        <a href="#alba-main" className="sr-only rounded bg-[#2F3A1F] px-4 py-2 text-[#F5EEDD] focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]">
          {lang === "it" ? "Vai al contenuto" : "Skip to content"}
        </a>

        {/* ── Nav ── */}
        <header className="sticky top-0 z-40 border-b border-[#2F3A1F]/15 bg-[#F5EEDD]/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20">
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-alba-display)] text-2xl text-[#2F3A1F] sm:text-3xl">Trattoria Alba</span>
              <span className="hidden text-xs tracking-[0.2em] text-[#A64B25] uppercase sm:inline">{lang === "it" ? "dal" : "since"} {r.since}</span>
            </a>
            <nav aria-label="Trattoria Alba" className="hidden lg:block">
              <ul className="flex gap-8 font-semibold">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-[#A64B25]">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <FeatureZone id="lang" labelPosition="below-right">
                <LangToggle className="text-[#2F3A1F]" activeClassName="bg-[#2F3A1F] text-[#F5EEDD]" inactiveClassName="hover:bg-[#2F3A1F]/10" />
              </FeatureZone>
              <a href="#book" className="hidden min-h-11 items-center rounded-full bg-[#A64B25] px-5 font-semibold text-[#F5EEDD] sm:inline-flex">
                {tr(r.nav.book)}
              </a>
            </div>
          </div>
          <nav aria-label="Trattoria Alba mobile" className="border-t border-[#2F3A1F]/10 lg:hidden">
            <ul className="flex gap-6 overflow-x-auto px-4 py-2 text-sm font-semibold whitespace-nowrap sm:px-6">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-block py-1.5">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#book" className="inline-block py-1.5 text-[#A64B25]">
                  {tr(r.nav.book)}
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main id="alba-main">
          {/* ── Hero ── */}
          <FeatureZone id="hero" as="section" className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
            <div id="top">
              <OpenNowPill />
              <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-[#A64B25] uppercase">{tr(r.hero.eyebrow)}</p>
              <h1 className="mt-4 font-[family-name:var(--font-alba-display)] text-[clamp(2.8rem,6.5vw,5.2rem)] leading-[1.02] text-[#2F3A1F]">{tr(r.hero.title)}</h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#4A4436]">{tr(r.hero.body)}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#book" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#A64B25] px-7 py-3.5 text-lg font-semibold text-[#F5EEDD] transition-transform hover:-translate-y-0.5">
                  {tr(r.hero.cta)} <ArrowRight aria-hidden className="size-5" />
                </a>
                <a href="#menu" className="inline-flex min-h-13 items-center justify-center rounded-full border-2 border-[#2F3A1F] px-7 py-3.5 text-lg font-semibold text-[#2F3A1F] hover:bg-[#2F3A1F] hover:text-[#F5EEDD]">
                  {tr(r.hero.secondary)}
                </a>
              </div>
            </div>
            {/* Roman-arch image frame */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full border-[10px] border-[#2F3A1F] lg:max-w-none">
              <Photo src={r.hero.image.src} alt={tr(r.hero.image.alt)} sizes="(min-width: 1024px) 45vw, 90vw" priority />
            </div>
          </FeatureZone>

          {/* ── Specials ── */}
          <FeatureZone id="events" as="section" className="bg-[#2F3A1F] text-[#F5EEDD]">
            <div id="specials" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
              <h2 className="font-[family-name:var(--font-alba-display)] text-4xl sm:text-5xl">{tr(r.specials.title)}</h2>
              <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-[#F5EEDD]/20 md:grid-cols-3">
                {r.specials.items.map((s) => (
                  <li key={s.title.en} className="bg-[#2F3A1F] p-7 md:p-8">
                    <p className="text-sm font-bold tracking-[0.2em] text-[#E0B44C] uppercase">{tr(s.day)}</p>
                    <h3 className="mt-3 font-[family-name:var(--font-alba-display)] text-3xl">{tr(s.title)}</h3>
                    <p className="mt-3 leading-relaxed text-[#F5EEDD]/85">{tr(s.body)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FeatureZone>

          {/* ── Menu ── */}
          <FeatureZone id="menu" as="section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div id="menu" className="scroll-mt-28" />
            <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
              <h2 className="font-[family-name:var(--font-alba-display)] text-5xl text-[#2F3A1F] sm:text-6xl">{tr(r.menuIntro.title)}</h2>
              <p className="text-lg text-[#4A4436] lg:text-right">{tr(r.menuIntro.body)}</p>
            </div>
            <div className="mt-10">
              <Menu />
            </div>
          </FeatureZone>

          {/* ── Gallery ── */}
          <FeatureZone id="gallery" as="section" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24">
            <h2 id="gallery" className="scroll-mt-28 font-[family-name:var(--font-alba-display)] text-4xl text-[#2F3A1F] sm:text-5xl">
              {tr(r.gallery.title)}
            </h2>
            <Gallery
              images={r.gallery.images}
              className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
              itemClassName={(i) => `rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square" : i === 5 ? "col-span-2 aspect-[2/1] md:col-span-4 md:aspect-[4/1]" : "aspect-square"}`}
              sizes="(min-width: 768px) 25vw, 50vw"
            />
          </FeatureZone>

          {/* ── Reviews ── */}
          <FeatureZone id="reviews" as="section" className="bg-[#E9DFC6]">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-[family-name:var(--font-alba-display)] text-4xl text-[#2F3A1F] sm:text-5xl">{tr(r.reviews.title)}</h2>
                <p className="rounded-full border border-[#2F3A1F]/40 px-3 py-1 text-xs font-semibold tracking-wider uppercase">{tr(r.reviews.disclaimer)}</p>
              </div>
              <ul className="mt-10 grid gap-6 md:grid-cols-3">
                {r.reviews.items.map((rev) => (
                  <li key={rev.name}>
                    <figure className="h-full rounded-3xl bg-[#F5EEDD] p-7">
                      <div className="flex gap-0.5 text-[#A64B25]" role="img" aria-label={`${rev.rating}/5`}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} aria-hidden className={`size-4 ${i < rev.rating ? "fill-current" : "opacity-30"}`} />
                        ))}
                      </div>
                      <blockquote className="mt-4 font-[family-name:var(--font-alba-display)] text-xl leading-snug">“{tr(rev.text)}”</blockquote>
                      <figcaption className="mt-5 text-sm font-semibold text-[#4A4436]">
                        {rev.name} · {rev.source}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </FeatureZone>

          {/* ── Booking ── */}
          <FeatureZone id="booking" as="section" className="bg-[#A64B25] text-[#F5EEDD]">
            <div id="book" className="mx-auto grid max-w-7xl scroll-mt-28 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
              <div className="lg:col-span-4">
                <h2 className="font-[family-name:var(--font-alba-display)] text-5xl sm:text-6xl">{tr(r.booking.title)}</h2>
                <p className="mt-4 text-lg text-[#F5EEDD]">{tr(r.booking.body)}</p>
                <p className="mt-6 flex items-center gap-2 font-semibold">
                  <Phone aria-hidden className="size-5" />
                  <a href={r.phoneHref} className="underline underline-offset-4">
                    {r.phone}
                  </a>
                </p>
              </div>
              <div className="lg:col-span-8">
                <Booking />
              </div>
            </div>
          </FeatureZone>

          {/* ── Visit: hours + map + call ── */}
          <section id="visit" aria-labelledby="visit-title" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
            <h2 id="visit-title" className="font-[family-name:var(--font-alba-display)] text-5xl text-[#2F3A1F] sm:text-6xl">
              {tr(r.visit.title)}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <FeatureZone id="hours" className="rounded-3xl border-2 border-[#2F3A1F] p-6 sm:p-8 lg:col-span-5">
                <HoursTable />
              </FeatureZone>
              <div className="grid gap-6 lg:col-span-7">
                <FeatureZone id="map" className="overflow-hidden rounded-3xl">
                  <MapEmbed query={r.mapsQuery} className="aspect-[16/10] w-full" tone={{ bg: "#E9DFC6", fg: "#2F3A1F" }} />
                  <div className="flex flex-col gap-3 bg-[#2F3A1F] p-6 text-[#F5EEDD] sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-start gap-2">
                      <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-[#E0B44C]" />
                      <span>
                        {r.address}
                        <span className="block text-sm text-[#F5EEDD]/80">{tr(r.visit.body)}</span>
                      </span>
                    </p>
                    <a href={directionsUrl(r.mapsQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#E0B44C] px-5 font-semibold text-[#231E16]">
                      {tr(r.visit.directions)}
                    </a>
                  </div>
                </FeatureZone>
                <FeatureZone id="call" className="grid gap-3 sm:grid-cols-2">
                  <a href={r.phoneHref} className="flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-[#2F3A1F] font-semibold hover:bg-[#2F3A1F] hover:text-[#F5EEDD]">
                    <Phone aria-hidden className="size-5" /> {tr(r.visit.call)}
                  </a>
                  <a href={`https://wa.me/${r.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-[#0B2E16]">
                    <MessageCircle aria-hidden className="size-5" /> WhatsApp
                  </a>
                </FeatureZone>
              </div>
            </div>
          </section>

          {/* ── Instagram + delivery ── */}
          <FeatureZone id="delivery" as="section" className="border-t border-[#2F3A1F]/15">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
              <div className="lg:col-span-7">
                <h2 className="font-[family-name:var(--font-alba-display)] text-4xl text-[#2F3A1F]">{tr(r.social.title)}</h2>
                <p className="mt-2 text-[#4A4436]">{tr(r.social.body)}</p>
                <div>
                  <ul className="mt-6 grid grid-cols-3 gap-2" aria-label={tr(r.social.placeholder)}>
                    {r.gallery.images.map((img, i) => (
                      <li key={i} className="relative aspect-square overflow-hidden rounded-lg">
                        <Photo src={img.src} alt="" label="Instagram" sizes="(min-width: 1024px) 18vw, 33vw" />
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-3 flex items-center gap-2 text-sm text-[#4A4436]">
                  <Camera aria-hidden className="size-4" /> {r.instagram} · {tr(r.social.placeholder)}
                </p>
              </div>
              <div className="rounded-3xl bg-[#2F3A1F] p-8 text-[#F5EEDD] lg:col-span-5 lg:self-start">
                <h2 className="font-[family-name:var(--font-alba-display)] text-4xl">{tr(r.social.delivery)}</h2>
                <p className="mt-2 text-[#F5EEDD]/85">{tr(r.social.deliveryBody)}</p>
                <ul className="mt-6 space-y-3">
                  {r.social.platforms.map((p) => (
                    <li key={p.name}>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex min-h-13 items-center justify-between rounded-full border-2 border-[#F5EEDD]/40 px-6 py-3 font-semibold hover:border-[#E0B44C] hover:text-[#E0B44C]">
                        {p.name} <ArrowRight aria-hidden className="size-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FeatureZone>
        </main>

        <footer className="bg-[#231E16] px-4 pt-14 pb-32 text-[#F5EEDD] sm:px-6 sm:pb-28">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-alba-display)] text-3xl">Trattoria Alba</p>
              <p className="mt-2 text-[#F5EEDD]/75">{tr(restaurantMeta.tagline)}</p>
            </div>
            <ul className="space-y-1 text-[#F5EEDD]/85">
              <li>{r.address}</li>
              <li>
                <a href={r.phoneHref}>{r.phone}</a>
              </li>
              <li>
                <a href={`mailto:${r.email}`}>{r.email}</a>
              </li>
            </ul>
            <p className="text-sm text-[#F5EEDD]/70">{tr(r.footer.fictional)}</p>
          </div>
        </footer>

        {/* Floating click-to-call + WhatsApp (mobile thumbs live at the bottom) */}
        <div className="fixed right-3 bottom-3 z-[65] flex flex-col gap-2 sm:right-5 sm:bottom-5">
          <a href={`https://wa.me/${r.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-[#0B2E16] shadow-lg">
            <MessageCircle aria-hidden className="size-6" />
          </a>
          <a href={r.phoneHref} aria-label={tr(r.visit.call)} className="flex size-13 items-center justify-center rounded-full bg-[#A64B25] text-[#F5EEDD] shadow-lg">
            <Phone aria-hidden className="size-6" />
          </a>
        </div>
      </div>
    </ExampleChrome>
  );
}

function HoursTable() {
  const tr = useL();
  const { lang } = useLang();
  const state = useOpenStatus();
  const order = [1, 2, 3, 4, 5, 6, 0]; // Monday first

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-[family-name:var(--font-alba-display)] text-3xl text-[#2F3A1F]">
          <Clock aria-hidden className="size-6" /> {tr(r.hours.title)}
        </h3>
        <OpenNowPill className="bg-[#E9DFC6]" />
      </div>
      <table className="mt-6 w-full text-left">
        <caption className="sr-only">{tr(r.hours.title)} (Europe/Rome)</caption>
        <tbody>
          {order.map((d) => {
            const slots = r.hours.week[d];
            const isToday = state?.today === d;
            return (
              <tr key={d} className={`border-b border-[#2F3A1F]/15 last:border-0 ${isToday ? "font-bold text-[#A64B25]" : ""}`}>
                <th scope="row" className="py-2.5 pr-4 font-[inherit]">
                  {r.hours.days[lang][d]}
                  {isToday && <span className="ml-2 rounded-full bg-[#A64B25] px-2 py-0.5 text-xs text-[#F5EEDD]">{tr(r.hours.today)}</span>}
                </th>
                <td className="py-2.5 text-right tabular-nums">{slots.length ? slots.map((s) => `${s.open}–${s.close}`).join(" · ") : tr(r.hours.closed)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
