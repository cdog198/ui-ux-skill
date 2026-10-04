/**
 * DEMO: Marta Ricci Fotografia (fictional wedding & portrait photographer, Rome)
 * A one-page site: the kind of thing the "One page" plan covers.
 */
import { unsplash, type ExampleMeta, type Img } from "./types";

export type WorkCategory = "weddings" | "portraits" | "travel";

export const portfolioMeta: ExampleMeta = {
  slug: "portfolio",
  name: "Marta Ricci Fotografia",
  industry: { en: "Photographer portfolio", it: "Portfolio fotografico" },
  tagline: { en: "A one-page portfolio for a wedding and portrait photographer", it: "Un portfolio di una pagina per una fotografa di matrimoni e ritratti" },
  location: "Roma",
  plan: "onepage",
  domain: "martaricci.photo",
  screenshot: "/images/work/portfolio.jpg",
  cover: unsplash("1519741497674-611481863552"),
  palette: { bg: "#F4F3F1", fg: "#141414", accent: "#9C2F2F" },
  features: [
    { id: "hero", label: { en: "Full-screen opening image", it: "Immagine d'apertura a tutto schermo" }, description: { en: "Your best photo is the first thing people see.", it: "La tua foto migliore è la prima cosa che si vede." } },
    { id: "work", label: { en: "Work gallery with filters", it: "Galleria lavori con filtri" }, description: { en: "Visitors jump straight to weddings, portraits or travel.", it: "Si passa subito a matrimoni, ritratti o viaggi." } },
    { id: "about", label: { en: "About", it: "Chi sono" }, description: { en: "A face and a few lines people can trust.", it: "Un volto e poche righe di cui fidarsi." } },
    { id: "services", label: { en: "Services and starting prices", it: "Servizi e prezzi di partenza" }, description: { en: "Answers the first question before it's asked.", it: "Risponde alla prima domanda prima che venga fatta." } },
    { id: "contact", label: { en: "Enquiry form", it: "Modulo di richiesta" }, description: { en: "Date, type of shoot and a message, straight to your inbox.", it: "Data, tipo di servizio e messaggio, dritti nella tua email." } },
    { id: "social", label: { en: "Instagram and WhatsApp links", it: "Link a Instagram e WhatsApp" }, description: { en: "For people who'd rather message than fill in a form.", it: "Per chi preferisce scrivere invece di compilare un modulo." } },
    { id: "lang", label: { en: "Second language (add-on)", it: "Seconda lingua (extra)" }, description: { en: "Included in Business, or added to One page.", it: "Inclusa in Business, o aggiunta a Una pagina." } },
  ],
};

export const portfolio = {
  name: "Marta Ricci",
  email: "ciao@martaricci.example",
  whatsapp: "390000000002",
  instagram: "@marta.ricci.foto",
  nav: {
    work: { en: "Work", it: "Lavori" },
    about: { en: "About", it: "Chi sono" },
    services: { en: "Services", it: "Servizi" },
    contact: { en: "Get in touch", it: "Contattami" },
  },
  hero: {
    image: { src: unsplash("1519741497674-611481863552"), alt: { en: "A bride holding a bouquet in warm evening light", it: "Una sposa con il bouquet nella luce calda della sera" } } as Img,
    title: { en: "Weddings, portraits and the light in between.", it: "Matrimoni, ritratti e la luce nel mezzo." },
    sub: { en: "Photographer based in Rome, working across Italy.", it: "Fotografa a Roma, lavoro in tutta Italia." },
  },
  work: {
    title: { en: "Selected work", it: "Lavori scelti" },
    all: { en: "All", it: "Tutti" },
    categories: {
      weddings: { en: "Weddings", it: "Matrimoni" },
      portraits: { en: "Portraits", it: "Ritratti" },
      travel: { en: "Travel", it: "Viaggi" },
    } as Record<WorkCategory, { en: string; it: string }>,
    images: [
      { src: unsplash("1511285560929-80b456fea0bc"), category: "weddings", alt: { en: "A couple at their outdoor wedding reception", it: "Una coppia al ricevimento all'aperto" } },
      { src: unsplash("1494790108377-be9c29b29330"), category: "portraits", alt: { en: "Portrait of a woman laughing", it: "Ritratto di una donna che ride" } },
      { src: unsplash("1501785888041-af3ef285b470"), category: "travel", alt: { en: "A boat on a turquoise mountain lake", it: "Una barca su un lago alpino turchese" } },
      { src: unsplash("1531746020798-e6953c6e8e04"), category: "portraits", alt: { en: "Close portrait against a pink wall", it: "Ritratto ravvicinato su un muro rosa" } },
      { src: unsplash("1519741497674-611481863552"), category: "weddings", alt: { en: "A bride's bouquet in evening light", it: "Il bouquet della sposa nella luce della sera" } },
      { src: unsplash("1515542622106-78bda8ba0e5b"), category: "travel", alt: { en: "The Colosseum against a blue sky", it: "Il Colosseo contro il cielo azzurro" } },
      { src: unsplash("1507003211169-0a1dd7228f2d"), category: "portraits", alt: { en: "Portrait of a smiling man", it: "Ritratto di un uomo sorridente" } },
      { src: unsplash("1470071459604-3b5ec3a7fe05"), category: "travel", alt: { en: "Green hills under a dramatic sky", it: "Colline verdi sotto un cielo drammatico" } },
      { src: unsplash("1544005313-94ddf0286df2"), category: "portraits", alt: { en: "Portrait of a woman in a striped shirt", it: "Ritratto di una donna con camicia a righe" } },
    ] as (Img & { category: WorkCategory })[],
  },
  about: {
    title: { en: "Hi, I'm Marta.", it: "Ciao, sono Marta." },
    body: {
      en: "I've photographed over 120 weddings and countless portraits, mostly in Rome and Lazio. I work quietly, use natural light whenever I can, and send every gallery within three weeks.",
      it: "Ho fotografato più di 120 matrimoni e tantissimi ritratti, soprattutto a Roma e nel Lazio. Lavoro con discrezione, uso la luce naturale quando posso e consegno ogni galleria entro tre settimane.",
    },
    image: { src: unsplash("1516035069371-29a1b244cc32"), alt: { en: "Marta's camera and lenses", it: "La macchina fotografica e gli obiettivi di Marta" } } as Img,
  },
  services: {
    title: { en: "Services", it: "Servizi" },
    from: { en: "from", it: "da" },
    items: [
      { name: { en: "Wedding, full day", it: "Matrimonio, giornata intera" }, price: 1800, note: { en: "Preparations to first dance, 400+ edited photos", it: "Dai preparativi al primo ballo, oltre 400 foto" } },
      { name: { en: "Elopement or civil ceremony", it: "Fuga d'amore o rito civile" }, price: 650, note: { en: "Up to 3 hours, anywhere in Rome", it: "Fino a 3 ore, ovunque a Roma" } },
      { name: { en: "Portrait session", it: "Servizio ritratto" }, price: 220, note: { en: "1 hour, 30 edited photos, studio or outdoors", it: "1 ora, 30 foto, in studio o all'aperto" } },
      { name: { en: "Personal branding", it: "Personal branding" }, price: 350, note: { en: "For your website and LinkedIn", it: "Per il tuo sito e LinkedIn" } },
    ],
  },
  contact: {
    title: { en: "Tell me about your day", it: "Raccontami la tua giornata" },
    name: { en: "Your name", it: "Il tuo nome" },
    email: { en: "Email", it: "Email" },
    date: { en: "Date (if you have one)", it: "Data (se ce l'hai)" },
    type: { en: "Type of shoot", it: "Tipo di servizio" },
    message: { en: "Message", it: "Messaggio" },
    submit: { en: "Send enquiry", it: "Invia richiesta" },
    required: { en: "Fill in this field", it: "Compila questo campo" },
    sent: { en: "Thanks! I'll reply within two days.", it: "Grazie! Ti rispondo entro due giorni." },
    demoNote: { en: "Demo only: nothing is sent.", it: "Solo demo: non viene inviato nulla." },
  },
  footer: {
    fictional: { en: "Marta Ricci Fotografia is a fictional business, created as an example site by CPD Web Design.", it: "Marta Ricci Fotografia è un'attività immaginaria, creata come sito di esempio da CPD Web Design." },
  },
};
