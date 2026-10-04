"use client";

import { Camera, MessageCircle } from "lucide-react";
import { useState } from "react";
import { ExampleChrome, FeatureZone } from "@/components/examples/Features";
import { Gallery } from "@/components/examples/Lightbox";
import { LangToggle } from "@/components/ui/LangToggle";
import { Photo } from "@/components/ui/Photo";
import { portfolio as p, portfolioMeta, type WorkCategory } from "@/content/examples/portfolio";
import { formatEuro, useL, useLang } from "@/lib/i18n";

/*
 * Marta Ricci Fotografia palette
 * paper #F4F3F1 · ink #141414 · grey #5E5B57 · oxblood #9C2F2F
 * One page, photography first.
 */

const display = "font-[family-name:var(--font-mr-display)]";

export function PortfolioSite() {
  const tr = useL();
  const { lang } = useLang();
  const [filter, setFilter] = useState<WorkCategory | "all">("all");
  const images = p.work.images.filter((img) => filter === "all" || img.category === filter);

  return (
    <ExampleChrome features={portfolioMeta.features}>
      <div className="min-h-dvh bg-[#F4F3F1] font-[family-name:var(--font-mr-sans)] text-[#141414] [--ph-bg:#E4E1DC] [--ph-fg:#141414] [&_:focus-visible]:outline-[#9C2F2F]" lang={lang}>
        <a href="#mr-main" className="sr-only bg-[#141414] px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]">
          {lang === "it" ? "Vai al contenuto" : "Skip to content"}
        </a>

        <header className="absolute inset-x-0 top-0 z-40 text-white">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
            <a href="#top" className={`${display} text-2xl`}>
              Marta Ricci
            </a>
            <nav aria-label="Marta Ricci" className="hidden md:block">
              <ul className="flex gap-8 text-sm">
                <li><a href="#work" className="hover:underline">{tr(p.nav.work)}</a></li>
                <li><a href="#about" className="hover:underline">{tr(p.nav.about)}</a></li>
                <li><a href="#services" className="hover:underline">{tr(p.nav.services)}</a></li>
                <li><a href="#contact" className="hover:underline">{tr(p.nav.contact)}</a></li>
              </ul>
            </nav>
            <FeatureZone id="lang" labelPosition="below-right">
              <LangToggle className="text-white" activeClassName="bg-white text-[#141414]" inactiveClassName="hover:bg-white/15" />
            </FeatureZone>
          </div>
        </header>

        <main id="mr-main">
          <FeatureZone id="hero" as="section" className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#141414]" labelPosition="below-nav">
            <div id="top" className="absolute inset-0">
              <Photo src={p.hero.image.src} alt={tr(p.hero.image.alt)} sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
            </div>
            <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 text-white sm:px-8 lg:pb-20">
              <h1 className={`${display} max-w-3xl text-[clamp(2.8rem,6.5vw,5.75rem)] leading-[1.02]`}>{tr(p.hero.title)}</h1>
              <p className="mt-5 text-lg text-white/85">{tr(p.hero.sub)}</p>
            </div>
          </FeatureZone>

          <FeatureZone id="work" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div id="work" className="flex flex-wrap items-end justify-between gap-6 scroll-mt-6">
              <h2 className={`${display} text-5xl`}>{tr(p.work.title)}</h2>
              <div role="group" aria-label={tr(p.work.title)} className="flex flex-wrap gap-2 text-sm">
                {(["all", "weddings", "portraits", "travel"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={filter === c}
                    onClick={() => setFilter(c)}
                    className={`min-h-10 cursor-pointer rounded-full border px-4 ${filter === c ? "border-[#141414] bg-[#141414] text-white" : "border-[#141414]/25 hover:border-[#141414]"}`}
                  >
                    {c === "all" ? tr(p.work.all) : tr(p.work.categories[c])}
                  </button>
                ))}
              </div>
            </div>
            <Gallery
              key={filter}
              images={images}
              className="mt-10 grid grid-flow-dense grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3"
              itemClassName={(i) => (i % 4 === 0 ? "row-span-2 h-full min-h-full" : "aspect-square")}
              sizes="(min-width: 768px) 33vw, 50vw"
            />
          </FeatureZone>

          <FeatureZone id="about" as="section" className="bg-white">
            <div id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center lg:py-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Photo src={p.about.image.src} alt={tr(p.about.image.alt)} sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div>
                <h2 className={`${display} text-5xl`}>{tr(p.about.title)}</h2>
                <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[#5E5B57]">{tr(p.about.body)}</p>
              </div>
            </div>
          </FeatureZone>

          <FeatureZone id="services" as="section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 id="services" className={`${display} text-5xl`}>
              {tr(p.services.title)}
            </h2>
            <ul className="mt-10 border-t border-[#141414]/20">
              {p.services.items.map((s) => (
                <li key={s.name.en} className="grid gap-1 border-b border-[#141414]/20 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                  <div>
                    <h3 className={`${display} text-2xl`}>{tr(s.name)}</h3>
                    <p className="mt-1 text-[#5E5B57]">{tr(s.note)}</p>
                  </div>
                  <p className="text-lg">
                    <span className="text-sm text-[#5E5B57]">{tr(p.services.from)} </span>
                    {formatEuro(s.price, lang)}
                  </p>
                </li>
              ))}
            </ul>
          </FeatureZone>

          <section id="contact" aria-labelledby="mr-contact" className="bg-[#141414] text-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
              <div>
                <h2 id="mr-contact" className={`${display} text-5xl`}>
                  {tr(p.contact.title)}
                </h2>
                <FeatureZone id="social" className="mt-8 flex flex-wrap gap-3">
                  <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 font-medium text-[#141414]">
                    <MessageCircle aria-hidden className="size-4" /> WhatsApp
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 px-5 font-medium">
                    <Camera aria-hidden className="size-4" /> {p.instagram}
                  </a>
                </FeatureZone>
              </div>
              <FeatureZone id="contact">
                <EnquiryForm />
              </FeatureZone>
            </div>
          </section>
        </main>

        <footer className="bg-[#141414] px-5 pt-4 pb-32 text-sm text-white/60 sm:px-8 sm:pb-24">
          <div className="mx-auto max-w-7xl border-t border-white/15 pt-6">{tr(p.footer.fictional)}</div>
        </footer>
      </div>
    </ExampleChrome>
  );
}

function EnquiryForm() {
  const tr = useL();
  const [sent, setSent] = useState(false);
  const [missing, setMissing] = useState<string[]>([]);
  const c = p.contact;
  const field = "mt-1.5 block w-full min-h-12 border-0 border-b border-white/30 bg-transparent px-0 text-white focus:border-white focus:ring-0 focus:outline-none";

  if (sent) {
    return (
      <div role="status" className="border border-white/25 p-8">
        <p className={`${display} text-3xl`}>{tr(c.sent)}</p>
        <p className="mt-3 text-sm text-white/60">{tr(c.demoNote)}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const miss = ["name", "email", "message"].filter((k) => !String(data.get(k) ?? "").trim());
        setMissing(miss);
        if (miss.length) document.getElementById(`mr-${miss[0]}`)?.focus();
        else setSent(true);
      }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {(["name", "email"] as const).map((k) => (
        <label key={k} className="block text-sm">
          {tr(c[k])}
          <input id={`mr-${k}`} name={k} type={k === "email" ? "email" : "text"} className={field} aria-invalid={missing.includes(k)} />
          {missing.includes(k) && <span className="mt-1 block text-[#F2A7A7]">{tr(c.required)}</span>}
        </label>
      ))}
      <label className="block text-sm">
        {tr(c.date)}
        <input name="date" type="date" className={`${field} [color-scheme:dark]`} />
      </label>
      <label className="block text-sm">
        {tr(c.type)}
        <select name="type" className={`${field} [&>option]:text-[#141414]`}>
          {p.services.items.map((s) => (
            <option key={s.name.en}>{tr(s.name)}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm sm:col-span-2">
        {tr(c.message)}
        <textarea id="mr-message" name="message" rows={3} className={`${field} py-2`} aria-invalid={missing.includes("message")} />
        {missing.includes("message") && <span className="mt-1 block text-[#F2A7A7]">{tr(c.required)}</span>}
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="min-h-12 cursor-pointer rounded-full bg-white px-7 font-medium text-[#141414]">
          {tr(c.submit)}
        </button>
        <span className="text-sm text-white/60">{tr(c.demoNote)}</span>
      </div>
    </form>
  );
}
