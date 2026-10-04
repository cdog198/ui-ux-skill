"use client";

import {
  AirVent,
  Bath,
  Car,
  Clock,
  ConciergeBell,
  Coffee,
  Eye,
  Luggage,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  Ruler,
  Star,
  Sun,
  Tv,
  Users,
  Vault,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { ExampleChrome, FeatureZone } from "@/components/examples/Features";
import { Gallery } from "@/components/examples/Lightbox";
import { MapEmbed, directionsUrl } from "@/components/examples/MapEmbed";
import { LangToggle } from "@/components/ui/LangToggle";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { hotel as h, hotelMeta, type AmenityIcon } from "@/content/examples/hotel";
import { fill, formatEuro, useL, useLang } from "@/lib/i18n";
import { AvailabilitySearch, HotelBooking, type StaySearch } from "./HotelBooking";
import { RoomCarousel } from "./RoomCarousel";

/*
 * Hotel Via Giulia palette
 * midnight #14202B · stone #EDE7DC · ivory #FAF7F1 · brass #C9A66B (on dark) / #7A5A2E (on light)
 */

const amenityIcons: Record<AmenityIcon, LucideIcon> = {
  wifi: Wifi,
  coffee: Coffee,
  car: Car,
  bell: ConciergeBell,
  wind: AirVent,
  sun: Sun,
  luggage: Luggage,
  clock: Clock,
  bath: Bath,
  tv: Tv,
  safe: Vault,
  view: Eye,
};

const display = "font-[family-name:var(--font-vg-display)]";
const eyebrow = "text-xs font-medium tracking-[0.3em] uppercase";

export function HotelSite() {
  const tr = useL();
  const { lang } = useLang();
  const [stay, setStay] = useState<StaySearch>({ checkIn: "", checkOut: "", guests: "2", room: "" });
  const [formKey, setFormKey] = useState(0);
  const [searched, setSearched] = useState(false);

  const prefill = (patch: Partial<StaySearch>, fromSearch = false) => {
    setStay((s) => ({ ...s, ...patch }));
    setFormKey((k) => k + 1);
    if (fromSearch) setSearched(true);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nav = [
    { href: "#rooms", label: tr(h.nav.rooms) },
    { href: "#amenities", label: tr(h.nav.amenities) },
    { href: "#location", label: tr(h.nav.location) },
    { href: "#guide", label: tr(h.nav.guide) },
    { href: "#faq", label: tr(h.nav.faq) },
  ];

  return (
    <ExampleChrome features={hotelMeta.features}>
      <div className="min-h-dvh bg-[#EDE7DC] font-[family-name:var(--font-vg-sans)] text-[#14202B] [--ph-bg:#D9D0C0] [--ph-fg:#14202B] [&_:focus-visible]:outline-[#7A5A2E]" lang={lang}>
        <a href="#vg-main" className="sr-only bg-[#14202B] px-4 py-2 text-[#FAF7F1] focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]">
          {lang === "it" ? "Vai al contenuto" : "Skip to content"}
        </a>

        {/* ── Nav (over the hero) ── */}
        <header className="absolute inset-x-0 top-0 z-40 text-[#FAF7F1]">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
            <a href="#top" className="leading-none">
              <span className={`${display} block text-2xl tracking-wide sm:text-3xl`}>Hotel Via Giulia</span>
              <span className="mt-1 block text-[10px] tracking-[0.4em] text-[#C9A66B] uppercase" aria-label={`${h.stars} stars`}>
                {"★".repeat(h.stars)} Roma
              </span>
            </a>
            <nav aria-label="Hotel Via Giulia" className="hidden lg:block">
              <ul className="flex gap-7 text-sm tracking-[0.15em] uppercase">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-[#C9A66B]">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-3">
              <FeatureZone id="lang" labelPosition="below-right">
                <LangToggle activeClassName="bg-[#FAF7F1] text-[#14202B]" inactiveClassName="hover:bg-white/10" />
              </FeatureZone>
              <a href="#booking" className="hidden min-h-11 items-center border border-[#C9A66B] px-5 text-sm tracking-[0.15em] text-[#FAF7F1] uppercase hover:bg-[#C9A66B] hover:text-[#14202B] sm:inline-flex">
                {tr(h.nav.book)}
              </a>
            </div>
          </div>
        </header>

        <main id="vg-main">
          {/* ── Full-screen hero with availability search ── */}
          <FeatureZone id="hero" as="section" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#14202B]" labelPosition="below-nav">
            <div id="top" className="absolute inset-0">
              <Photo src={h.hero.image.src} alt={tr(h.hero.image.alt)} sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-[#14202B]/70 via-[#14202B]/35 to-[#14202B]/85" />
            </div>
            <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-8 text-[#FAF7F1] sm:px-6 lg:pb-12">
              <p className={`${eyebrow} text-[#C9A66B]`}>{tr(h.hero.eyebrow)}</p>
              <h1 className={`${display} mt-5 max-w-4xl text-[clamp(2.9rem,7vw,6.2rem)] leading-[0.98] font-light`}>{tr(h.hero.title)}</h1>
              <FeatureZone id="search" className="mt-10 lg:mt-14" labelPosition="top-right">
                <AvailabilitySearch onSearch={(s) => prefill(s, true)} />
              </FeatureZone>
              <p className="mt-4 text-sm text-[#FAF7F1]/85">✦ {tr(h.hero.bestRate)}</p>
            </div>
          </FeatureZone>

          {/* ── Intro ── */}
          <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-32">
            <Reveal className="lg:col-span-5">
              <h2 className={`${display} text-5xl leading-[1.02] sm:text-6xl`}>{tr(h.intro.title)}</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-[#14202B]/80 first-letter:float-left first-letter:mr-3 first-letter:font-[family-name:var(--font-vg-display)] first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-[#7A5A2E]">
                {tr(h.intro.body)}
              </p>
            </Reveal>
          </section>

          {/* ── Rooms ── */}
          <FeatureZone id="rooms" as="section" className="bg-[#FAF7F1]">
            <div id="rooms" className="mx-auto max-w-7xl scroll-mt-4 px-4 py-20 sm:px-6 lg:py-28">
              <h2 className={`${display} text-5xl sm:text-6xl`}>{tr(h.roomsSection.title)}</h2>
              <ul className="mt-14 space-y-20 lg:space-y-28">
                {h.rooms.map((room, i) => (
                  <Reveal as="li" key={room.id} className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                    <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                      <RoomCarousel images={room.images} label={tr(room.name)} prevLabel={tr(h.roomsSection.prev)} nextLabel={tr(h.roomsSection.next)} />
                    </div>
                    <div className="lg:col-span-5">
                      <p className={`${eyebrow} text-[#7A5A2E]`}>0{i + 1}</p>
                      <h3 className={`${display} mt-2 text-4xl sm:text-5xl`}>{tr(room.name)}</h3>
                      <p className="mt-4 text-lg leading-relaxed text-[#14202B]/80">{tr(room.description)}</p>
                      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Users aria-hidden className="size-4 text-[#7A5A2E]" /> {fill(tr(h.roomsSection.guests), { n: room.guests })}
                        </li>
                        <li className="flex items-center gap-2">
                          <Ruler aria-hidden className="size-4 text-[#7A5A2E]" /> {room.size} m²
                        </li>
                        <li>{tr(room.bed)}</li>
                      </ul>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {room.amenities.map((a) => {
                          const Icon = amenityIcons[a];
                          return (
                            <li key={a} className="flex items-center gap-1.5 border border-[#14202B]/20 px-3 py-1.5 text-xs">
                              <Icon aria-hidden className="size-3.5" /> {tr(h.amenityNames[a])}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-[#14202B]/15 pt-6">
                        <p>
                          <span className="text-sm">{tr(h.roomsSection.from)} </span>
                          <span className={`${display} text-5xl`}>{formatEuro(room.fromPrice, lang)}</span>
                          <span className="text-sm">{tr(h.roomsSection.night)}</span>
                        </p>
                        <button type="button" onClick={() => prefill({ room: room.id })} className="min-h-12 cursor-pointer bg-[#14202B] px-6 text-sm tracking-[0.15em] text-[#FAF7F1] uppercase hover:bg-[#7A5A2E]">
                          {tr(h.roomsSection.select)}
                        </button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </FeatureZone>

          {/* ── Amenities ── */}
          <FeatureZone id="amenities" as="section" className="bg-[#14202B] text-[#FAF7F1]">
            <div id="amenities" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
              <h2 className={`${display} text-5xl sm:text-6xl`}>{tr(h.amenities.title)}</h2>
              <ul className="mt-12 grid grid-cols-2 gap-px bg-[#FAF7F1]/15 lg:grid-cols-4">
                {h.amenities.list.map((a) => {
                  const Icon = amenityIcons[a];
                  const note = h.amenities.notes[a];
                  return (
                    <li key={a} className="bg-[#14202B] p-5 sm:p-8">
                      <Icon aria-hidden className="size-8 text-[#C9A66B]" strokeWidth={1.25} />
                      <p className={`${display} mt-5 text-2xl sm:text-3xl`}>{tr(h.amenityNames[a])}</p>
                      {note && <p className="mt-1 text-sm text-[#FAF7F1]/75">{tr(note)}</p>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </FeatureZone>

          {/* ── Booking request ── */}
          <FeatureZone id="booking" as="section" className="bg-[#D9D0C0]">
            <div id="booking" className="mx-auto grid max-w-7xl scroll-mt-4 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
              <div className="lg:col-span-4">
                <h2 className={`${display} text-5xl sm:text-6xl`}>{tr(h.booking.title)}</h2>
                <p className="mt-4 text-lg text-[#14202B]/80">{tr(h.booking.body)}</p>
              </div>
              <div className="lg:col-span-8">
                <HotelBooking key={formKey} initial={stay} searched={searched} />
              </div>
            </div>
          </FeatureZone>

          {/* ── Location ── */}
          <FeatureZone id="location" as="section">
            <div id="location" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
              <div className="lg:col-span-5">
                <h2 className={`${display} text-5xl sm:text-6xl`}>{tr(h.location.title)}</h2>
                <p className="mt-4 text-lg text-[#14202B]/80">{tr(h.location.body)}</p>
                <dl className="mt-8">
                  {h.location.places.map((p) => (
                    <div key={p.name} className="flex items-end gap-3 border-b border-[#14202B]/10 py-3">
                      <dt className={`${display} text-xl`}>{p.name}</dt>
                      <span aria-hidden className="mb-1.5 flex-1 border-b border-dotted border-[#14202B]/30" />
                      <dd className="text-sm whitespace-nowrap text-[#7A5A2E]">{tr(p.time)}</dd>
                    </div>
                  ))}
                </dl>
                <a href={directionsUrl(h.mapsQuery)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center border border-[#14202B] px-6 text-sm tracking-[0.15em] uppercase hover:bg-[#14202B] hover:text-[#FAF7F1]">
                  {tr(h.location.directions)}
                </a>
              </div>
              <MapEmbed query={h.mapsQuery} className="min-h-[22rem] lg:col-span-7" tone={{ bg: "#D9D0C0", fg: "#14202B" }} />
            </div>
          </FeatureZone>

          {/* ── Gallery ── */}
          <FeatureZone id="gallery" as="section" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:pb-28">
            <h2 className={`${display} text-5xl sm:text-6xl`}>{tr(h.gallery.title)}</h2>
            <Gallery
              images={h.gallery.images}
              className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3"
              itemClassName={(i) => (i === 0 || i === 4 ? "aspect-[3/4] md:row-span-2 md:aspect-auto" : "aspect-[4/3]")}
              sizes="(min-width: 768px) 33vw, 50vw"
            />
          </FeatureZone>

          {/* ── Reviews ── */}
          <FeatureZone id="reviews" as="section" className="bg-[#FAF7F1]">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className={`${display} text-5xl sm:text-6xl`}>{tr(h.reviews.title)}</h2>
                <p className="border border-[#14202B]/30 px-3 py-1 text-xs tracking-[0.15em] uppercase">{tr(h.reviews.disclaimer)}</p>
              </div>
              <ul className="mt-12 grid gap-10 md:grid-cols-3">
                {h.reviews.items.map((r) => (
                  <li key={r.name}>
                    <figure>
                      <div className="flex gap-0.5 text-[#7A5A2E]" role="img" aria-label={`${r.rating}/5`}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} aria-hidden className={`size-4 ${i < r.rating ? "fill-current" : "opacity-30"}`} />
                        ))}
                      </div>
                      <blockquote className={`${display} mt-4 text-2xl leading-snug italic`}>“{tr(r.text)}”</blockquote>
                      <figcaption className="mt-4 text-sm tracking-[0.15em] uppercase">
                        {r.name} · {r.country}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </FeatureZone>

          {/* ── Things to do ── */}
          <FeatureZone id="guide" as="section">
            <div id="guide" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
              <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
                <h2 className={`${display} text-5xl sm:text-6xl`}>{tr(h.guide.title)}</h2>
                <p className="text-lg text-[#14202B]/80 lg:text-right">{tr(h.guide.body)}</p>
              </div>
              <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {h.guide.items.map((g, i) => (
                  <Reveal as="li" key={g.title.en} delay={i * 0.06}>
                    <article>
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Photo src={g.image.src} alt={tr(g.image.alt)} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                      </div>
                      <p className={`${eyebrow} mt-4 text-[#7A5A2E]`}>{tr(g.distance)}</p>
                      <h3 className={`${display} mt-2 text-2xl`}>{tr(g.title)}</h3>
                      <p className="mt-2 text-[#14202B]/80">{tr(g.body)}</p>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </FeatureZone>

          {/* ── FAQ ── */}
          <FeatureZone id="faq" as="section" className="bg-[#FAF7F1]">
            <div id="faq" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
              <h2 className={`${display} text-5xl sm:text-6xl lg:col-span-4`}>{tr(h.faq.title)}</h2>
              <div className="border-t border-[#14202B]/20 lg:col-span-8">
                {h.faq.items.map((item) => (
                  <details key={item.q.en} className="group border-b border-[#14202B]/20">
                    <summary className="flex min-h-16 items-center justify-between gap-4 py-4">
                      <h3 className={`${display} text-2xl`}>{tr(item.q)}</h3>
                      <Plus aria-hidden className="size-5 shrink-0 transition-transform group-open:rotate-45" />
                    </summary>
                    <p className="pb-6 text-lg leading-relaxed text-[#14202B]/80">{tr(item.a)}</p>
                  </details>
                ))}
              </div>
            </div>
          </FeatureZone>

          {/* ── Contact strip ── */}
          <FeatureZone id="whatsapp" as="section" className="bg-[#14202B] text-[#FAF7F1]">
            <div className="mx-auto grid max-w-7xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-3">
              <a href={`https://wa.me/${h.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 bg-[#25D366] font-medium text-[#0B2E16]">
                <MessageCircle aria-hidden className="size-5" /> {tr(h.contactSection.whatsapp)}
              </a>
              <a href={h.phoneHref} className="flex min-h-14 items-center justify-center gap-2 border border-[#C9A66B] hover:bg-[#C9A66B] hover:text-[#14202B]">
                <Phone aria-hidden className="size-5" /> {tr(h.contactSection.call)}
              </a>
              <a href={`mailto:${h.email}`} className="flex min-h-14 items-center justify-center gap-2 border border-[#FAF7F1]/40 hover:bg-[#FAF7F1] hover:text-[#14202B]">
                <Mail aria-hidden className="size-5" /> {tr(h.contactSection.email)}
              </a>
            </div>
          </FeatureZone>
        </main>

        <footer className="bg-[#0D161E] px-4 pt-14 pb-32 text-[#FAF7F1] sm:px-6 sm:pb-28">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <div>
              <p className={`${display} text-3xl`}>Hotel Via Giulia</p>
              <p className="mt-2 text-[#FAF7F1]/75">{tr(hotelMeta.tagline)}</p>
            </div>
            <ul className="space-y-1 text-[#FAF7F1]/85">
              <li>{h.address}</li>
              <li>
                <a href={h.phoneHref}>{h.phone}</a>
              </li>
              <li>
                <a href={`mailto:${h.email}`}>{h.email}</a>
              </li>
            </ul>
            <p className="text-sm text-[#FAF7F1]/70">{tr(h.footer.fictional)}</p>
          </div>
        </footer>

        <a
          href={`https://wa.me/${h.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tr(h.contactSection.whatsapp)}
          className="fixed right-3 bottom-3 z-[65] flex size-13 items-center justify-center rounded-full bg-[#25D366] text-[#0B2E16] shadow-lg sm:right-5 sm:bottom-5"
        >
          <MessageCircle aria-hidden className="size-6" />
        </a>
      </div>
    </ExampleChrome>
  );
}
