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

export type TierId = "starter" | "business" | "pro";

export type Tier = {
  id: TierId;
  name: string;
  /** Monthly price in euro. PLACEHOLDER values: set your real prices here. */
  monthly: number;
  popular?: boolean;
  summary: L;
  features: L[];
};

export const pricing = {
  /** Minimum term in months. Shown in pricing, FAQ and "the catch". */
  minimumTermMonths: 12,
  /** Fee to take full ownership of the design and code if you leave (FAQ). PLACEHOLDER. */
  buyoutFee: 500,
  tiers: [
    {
      id: "starter",
      name: "Starter",
      monthly: 39, // PLACEHOLDER
      summary: { en: "A sharp one-page site that gets you found.", it: "Un sito di una pagina, curato, che ti fa trovare." },
      features: [
        { en: "One-page website, designed for you", it: "Sito di una pagina, progettato per te" },
        { en: "Fast hosting + SSL certificate", it: "Hosting veloce + certificato SSL" },
        { en: "Monthly updates & security patches", it: "Aggiornamenti e patch di sicurezza mensili" },
        { en: "Daily backups", it: "Backup giornalieri" },
        { en: "1 content edit per month", it: "1 modifica dei contenuti al mese" },
        { en: "Email support", it: "Supporto via email" },
      ],
    },
    {
      id: "business",
      name: "Business",
      monthly: 69, // PLACEHOLDER
      popular: true,
      summary: { en: "Everything a local business needs to win customers.", it: "Tutto ciò che serve a un'attività locale per farsi scegliere." },
      features: [
        { en: "Up to 5 pages", it: "Fino a 5 pagine" },
        { en: "Contact & enquiry forms", it: "Moduli di contatto e richiesta" },
        { en: "Google Maps + Google Business Profile setup", it: "Google Maps + configurazione Google Business Profile" },
        { en: "3 content edits per month", it: "3 modifiche dei contenuti al mese" },
        { en: "Basic SEO (titles, meta, local search)", it: "SEO di base (titoli, meta, ricerca locale)" },
        { en: "Everything in Starter", it: "Tutto ciò che è incluso in Starter" },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      monthly: 119, // PLACEHOLDER
      summary: { en: "For businesses that take bookings and publish often.", it: "Per chi riceve prenotazioni e pubblica spesso." },
      features: [
        { en: "Up to 10 pages", it: "Fino a 10 pagine" },
        { en: "Blog or booking integration", it: "Blog o sistema di prenotazione integrato" },
        { en: "Priority support (same-day replies)", it: "Supporto prioritario (risposta in giornata)" },
        { en: "Unlimited small edits", it: "Piccole modifiche illimitate" },
        { en: "Bilingual site (English + Italian)", it: "Sito bilingue (italiano + inglese)" },
        { en: "Everything in Business", it: "Tutto ciò che è incluso in Business" },
      ],
    },
  ] satisfies Tier[] as Tier[],
  /** Typical agency costs, used in the comparison receipt. */
  agency: {
    buildMin: 1500,
    buildMax: 5000,
    hostingMonthly: 25,
    maintenanceMonthly: 50,
  },
};

export const tierRank: Record<TierId, number> = { starter: 0, business: 1, pro: 2 };

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
    cover: { bg: "#15120E", fg: "#E2A93B" },
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
  {
    title: "Your project",
    year: "2026",
    category: { en: "Placeholder · local shop", it: "Segnaposto · negozio locale" },
    description: { en: "Swap this slot for a real client in src/config/site.ts.", it: "Sostituisci questo spazio con un cliente reale in src/config/site.ts." },
    image: null,
    cover: { bg: "#E2A93B", fg: "#15120E" },
  },
  {
    title: "Another project",
    year: "2026",
    category: { en: "Placeholder · studio / salon", it: "Segnaposto · studio / salone" },
    description: { en: "Swap this slot for a real client in src/config/site.ts.", it: "Sostituisci questo spazio con un cliente reale in src/config/site.ts." },
    image: null,
    cover: { bg: "#B8321A", fg: "#F2ECE1" },
  },
];
