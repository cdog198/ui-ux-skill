/**
 * ───────────────────────────────────────────────────────────────
 *  CPD WEB DESIGN: SITE CONFIG
 *  Edit this file to change prices, contact details, portfolio,
 *  the minimum term and the agency comparison. Page copy lives in
 *  src/content/translations.ts; demo sites in src/content/examples/.
 * ───────────────────────────────────────────────────────────────
 */
import type { L } from "@/lib/i18n";

export const site = {
  name: "CPD Web Design",
  shortName: "CPD",
  /** Production URL, used for SEO, sitemap and Open Graph. Set NEXT_PUBLIC_SITE_URL on Vercel. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cpdwebdesign.com").replace(/\/$/, ""),
  owner: {
    name: "Your Name", // PLACEHOLDER: your name as it should appear in the About section
    role: { en: "Designer & developer", it: "Designer e sviluppatore" } satisfies L,
    /** Put your photo in /public/images/ and set e.g. "/images/me.jpg". null shows a placeholder frame. */
    photo: null as string | null,
  },
  city: "Rome",
  address: {
    locality: "Roma",
    region: "RM",
    postalCode: "00100", // PLACEHOLDER
    country: "IT",
  },
  /** Italian businesses must show their Partita IVA on their website. */
  vatNumber: "IT00000000000", // PLACEHOLDER
  languages: ["English", "Italiano"],
};

export const contact = {
  email: "hello@cpdwebdesign.com", // PLACEHOLDER
  /** International format, digits only, no + or spaces (used for wa.me links). */
  whatsapp: "390000000000", // PLACEHOLDER
  /** Human-readable phone number shown on the page. */
  phoneDisplay: "+39 000 000 0000", // PLACEHOLDER
  instagram: "https://instagram.com/", // PLACEHOLDER
};

/**
 * CONTACT FORM
 * 1. Create a free form at https://formspree.io (or any service accepting JSON POSTs).
 * 2. Paste its endpoint below, e.g. "https://formspree.io/f/abcdwxyz".
 * While it still contains "YOUR_FORM_ID", the form runs in demo mode: it shows the
 * success message but sends nothing (and logs a warning in the browser console).
 */
export const contactForm = {
  endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/YOUR_FORM_ID",
};

export const pricing = {
  /** One plan, one price. Monthly price in euro, excluding VAT. */
  monthly: 79,
  /** Minimum term in months. Shown in pricing, FAQ and "What's the catch?". */
  minimumTermMonths: 12,
  /** Fee to take full ownership of the design and code if you leave (FAQ). PLACEHOLDER. */
  buyoutFee: 500,
  /** What the €79/month includes. PLACEHOLDER list: edit to match what you actually offer. */
  includes: [
    { en: "A custom-designed site, up to 5 pages", it: "Un sito progettato su misura, fino a 5 pagine" },
    { en: "English and Italian versions", it: "Versione italiana e inglese" },
    { en: "Hosting, SSL and daily backups", it: "Hosting, SSL e backup giornalieri" },
    { en: "Updates and security patches", it: "Aggiornamenti e patch di sicurezza" },
    { en: "Contact, enquiry or booking forms", it: "Moduli di contatto, richiesta o prenotazione" },
    { en: "Google Maps and Google Business Profile setup", it: "Google Maps e configurazione di Google Business Profile" },
    { en: "Basic SEO for local search", it: "SEO di base per la ricerca locale" },
    { en: "Up to 3 small changes a month", it: "Fino a 3 piccole modifiche al mese" },
    { en: "Support by WhatsApp and email", it: "Assistenza via WhatsApp e email" },
  ] satisfies L[],
  /** Typical agency costs, used in the comparison receipt. */
  agency: {
    buildMin: 1500,
    buildMax: 5000,
    hostingMonthly: 25,
    maintenanceMonthly: 50,
  },
};

export type PortfolioItem = {
  title: string;
  url?: string;
  /** Internal link (e.g. a demo). Takes priority over url. */
  href?: string;
  year: string;
  category: L;
  description: L;
  /** Screenshot path in /public (e.g. "/images/work/sevenhalflab.jpg") or remote URL. null shows a typographic cover. */
  image: string | null;
  /** Cover colours used when there's no image. */
  cover: { bg: string; fg: string };
  featured?: boolean;
};

/** Portfolio / recent work. Swap these out for real projects. */
export const portfolio: PortfolioItem[] = [
  {
    title: "Seven Half Lab",
    url: "https://sevenhalflab.com",
    year: "2026",
    category: { en: "Studio website", it: "Sito per studio creativo" },
    description: {
      en: "Brand-led studio site with a custom grid and fast static hosting.", // PLACEHOLDER description
      it: "Sito per studio creativo con griglia su misura e hosting statico veloce.",
    },
    image: null, // add a screenshot: "/images/work/sevenhalflab.jpg"
    cover: { bg: "#10281F", fg: "#F0B23E" },
    featured: true,
  },
  {
    title: "Trattoria Alba",
    href: "/examples/restaurant",
    year: "Demo",
    category: { en: "Restaurant · example site", it: "Ristorante · sito di esempio" },
    description: { en: "Menu, bookings, live opening hours, bilingual.", it: "Menu, prenotazioni, orari in tempo reale, bilingue." },
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    cover: { bg: "#2F3A1F", fg: "#F5EEDD" },
  },
  {
    title: "Hotel Via Giulia",
    href: "/examples/hotel",
    year: "Demo",
    category: { en: "Boutique hotel · example site", it: "Hotel boutique · sito di esempio" },
    description: { en: "Availability search, room carousels, booking requests.", it: "Ricerca disponibilità, camere, richieste di prenotazione." },
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    cover: { bg: "#14202B", fg: "#C9A66B" },
  },
  // Add real projects here. Copy this shape:
  // {
  //   title: "Bar Esempio",
  //   url: "https://example.com",
  //   year: "2026",
  //   category: { en: "Café", it: "Bar" },
  //   description: { en: "One-page site with menu and map.", it: "Sito di una pagina con menu e mappa." },
  //   image: "/images/work/bar-esempio.jpg",
  //   cover: { bg: "#1F4D3B", fg: "#FAFAF7" },
  // },
];
