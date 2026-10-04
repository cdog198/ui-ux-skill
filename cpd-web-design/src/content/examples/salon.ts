/**
 * DEMO: Salone Iris (fictional hair salon in Monti, Rome). Business plan.
 */
import type { Slot } from "@/lib/hours";
import { unsplash, type ExampleMeta, type Img } from "./types";

export const salonMeta: ExampleMeta = {
  slug: "salon",
  name: "Salone Iris",
  industry: { en: "Hair salon", it: "Parrucchiere" },
  tagline: { en: "A colour and cutting studio in Monti", it: "Uno studio di colore e taglio a Monti" },
  location: "Monti, Roma",
  plan: "business",
  domain: "saloneiris.it",
  screenshot: "/images/work/salon.jpg",
  cover: unsplash("1562322140-8baeececf3df"),
  palette: { bg: "#F6E9E6", fg: "#3E1F38", accent: "#B04A5A" },
  features: [
    { id: "hero", label: { en: "Hero + book button", it: "Hero + pulsante prenota" }, description: { en: "One clear action from the first second.", it: "Un'azione chiara fin dal primo secondo." } },
    { id: "hours", label: { en: "Live “Open now” hours", it: "Orari con “Aperto ora”" }, description: { en: "Always correct, on Rome time.", it: "Sempre corretti, sull'ora di Roma." } },
    { id: "services", label: { en: "Price list with durations", it: "Listino con durate" }, description: { en: "Fewer phone calls asking “how much?”.", it: "Meno telefonate per chiedere “quanto costa?”." } },
    { id: "booking", label: { en: "Online appointment booking", it: "Prenotazione online" }, description: { en: "Service, stylist, day and time, only when you're open.", it: "Servizio, stylist, giorno e ora, solo quando sei aperto." } },
    { id: "team", label: { en: "Team profiles", it: "Profili del team" }, description: { en: "Clients can ask for someone by name.", it: "I clienti possono chiedere qualcuno per nome." } },
    { id: "gallery", label: { en: "Gallery + lightbox", it: "Galleria + lightbox" }, description: { en: "Your best colour work, full screen.", it: "I tuoi lavori migliori, a schermo intero." } },
    { id: "reviews", label: { en: "Reviews", it: "Recensioni" }, description: { en: "Social proof from happy clients.", it: "La prova sociale dei clienti soddisfatti." } },
    { id: "map", label: { en: "Map & directions", it: "Mappa e indicazioni" }, description: { en: "Easy to find, easy to walk in.", it: "Facile da trovare, facile da raggiungere." } },
    { id: "call", label: { en: "Click-to-call & WhatsApp", it: "Chiamata e WhatsApp in un tocco" }, description: { en: "For clients who'd rather just ask.", it: "Per chi preferisce chiedere." } },
    { id: "lang", label: { en: "Italian / English", it: "Italiano / Inglese" }, description: { en: "For locals and the expats who live nearby.", it: "Per romani e stranieri che vivono in zona." } },
  ],
};

export type SalonService = { id: string; name: { en: string; it: string }; minutes: number; price: number };

export const salon = {
  name: "Salone Iris",
  phone: "+39 06 0000 0002",
  phoneHref: "tel:+390600000002",
  whatsapp: "390000000003",
  address: "Via del Boschetto (demo), 00184 Roma",
  mapsQuery: "Monti, Roma",
  nav: {
    services: { en: "Prices", it: "Listino" },
    team: { en: "Team", it: "Team" },
    gallery: { en: "Work", it: "Lavori" },
    visit: { en: "Visit", it: "Dove siamo" },
    book: { en: "Book now", it: "Prenota" },
  },
  hero: {
    title: { en: "Colour that grows out beautifully.", it: "Un colore che cresce bene." },
    body: {
      en: "Balayage, cuts and treatments in a bright little studio in Monti. Book online in a minute.",
      it: "Balayage, tagli e trattamenti in un piccolo studio luminoso a Monti. Prenoti online in un minuto.",
    },
    cta: { en: "Book an appointment", it: "Prenota un appuntamento" },
    image: { src: unsplash("1562322140-8baeececf3df"), alt: { en: "A stylist blow-drying a client's hair", it: "Una stylist asciuga i capelli di una cliente" } } as Img,
  },
  services: {
    title: { en: "Prices", it: "Listino" },
    note: { en: "Prices include VAT. Colour prices vary with hair length; we'll confirm at your consultation.", it: "Prezzi IVA inclusa. I prezzi del colore variano con la lunghezza; li confermiamo in consulenza." },
    min: { en: "min", it: "min" },
    groups: [
      {
        name: { en: "Cuts", it: "Tagli" },
        items: [
          { id: "cut-w", name: { en: "Cut & blow-dry", it: "Taglio e piega" }, minutes: 60, price: 45 },
          { id: "cut-m", name: { en: "Men's cut", it: "Taglio uomo" }, minutes: 30, price: 25 },
          { id: "cut-k", name: { en: "Kids (under 12)", it: "Bambini (sotto i 12 anni)" }, minutes: 30, price: 18 },
        ],
      },
      {
        name: { en: "Colour", it: "Colore" },
        items: [
          { id: "roots", name: { en: "Root colour", it: "Ricrescita" }, minutes: 75, price: 55 },
          { id: "full", name: { en: "Full colour", it: "Colore completo" }, minutes: 90, price: 75 },
          { id: "balayage", name: { en: "Balayage", it: "Balayage" }, minutes: 180, price: 140 },
        ],
      },
      {
        name: { en: "Styling & care", it: "Piega e trattamenti" },
        items: [
          { id: "blow", name: { en: "Blow-dry", it: "Piega" }, minutes: 40, price: 30 },
          { id: "updo", name: { en: "Occasion up-do", it: "Acconciatura per cerimonia" }, minutes: 60, price: 60 },
          { id: "keratin", name: { en: "Keratin smoothing", it: "Trattamento alla cheratina" }, minutes: 150, price: 120 },
        ],
      },
    ] as { name: { en: string; it: string }; items: SalonService[] }[],
  },
  team: {
    title: { en: "Who'll look after you", it: "Chi si prenderà cura di te" },
    people: [
      { name: "Iris", role: { en: "Owner, colour specialist", it: "Titolare, specialista del colore" }, image: { src: unsplash("1494790108377-be9c29b29330"), alt: { en: "Portrait of Iris", it: "Ritratto di Iris" } } },
      { name: "Davide", role: { en: "Cuts and men's grooming", it: "Tagli e barba" }, image: { src: unsplash("1507003211169-0a1dd7228f2d"), alt: { en: "Portrait of Davide", it: "Ritratto di Davide" } } },
      { name: "Sofia", role: { en: "Styling and up-dos", it: "Pieghe e acconciature" }, image: { src: unsplash("1544005313-94ddf0286df2"), alt: { en: "Portrait of Sofia", it: "Ritratto di Sofia" } } },
    ],
  },
  booking: {
    title: { en: "Book an appointment", it: "Prenota un appuntamento" },
    service: { en: "Service", it: "Servizio" },
    stylist: { en: "Stylist", it: "Stylist" },
    anyone: { en: "No preference", it: "Nessuna preferenza" },
    firstFree: { en: "the first available stylist", it: "il primo stylist libero" },
    date: { en: "Day", it: "Giorno" },
    time: { en: "Time", it: "Ora" },
    chooseTime: { en: "Choose a time", it: "Scegli un orario" },
    name: { en: "Name", it: "Nome" },
    phone: { en: "Phone", it: "Telefono" },
    submit: { en: "Book appointment", it: "Prenota l'appuntamento" },
    closed: { en: "We're closed that day. Please pick another.", it: "Quel giorno siamo chiusi. Scegline un altro." },
    required: { en: "Fill in this field", it: "Compila questo campo" },
    confirm: { en: "Booked: {service} with {stylist}, {date} at {time}. We'll text {phone} the day before.", it: "Prenotato: {service} con {stylist}, {date} alle {time}. Ti scriviamo al {phone} il giorno prima." },
    another: { en: "Book something else", it: "Prenota altro" },
    demoNote: { en: "Demo only: no appointment is made.", it: "Solo demo: nessun appuntamento viene fissato." },
  },
  gallery: {
    title: { en: "Recent work", it: "Lavori recenti" },
    images: [
      { src: unsplash("1522337360788-8b13dee7a37e"), alt: { en: "Long brunette hair with soft waves", it: "Capelli lunghi castani con onde morbide" } },
      { src: unsplash("1521590832167-7bcbfaa6381f"), alt: { en: "The salon's pink styling chairs", it: "Le poltrone rosa del salone" } },
      { src: unsplash("1580618672591-eb180b1a973f"), alt: { en: "A blow-dry in progress", it: "Una piega in corso" } },
      { src: unsplash("1595476108010-b4d1f102b1b1"), alt: { en: "A relaxing hair wash", it: "Un lavaggio rilassante" } },
      { src: unsplash("1633681926022-84c23e8cb2d6"), alt: { en: "The salon floor with round mirrors", it: "Il salone con gli specchi rotondi" } },
      { src: unsplash("1531746020798-e6953c6e8e04"), alt: { en: "A fresh cut with a soft fringe", it: "Un taglio fresco con frangia morbida" } },
    ] as Img[],
  },
  reviews: {
    title: { en: "Clients say", it: "Dicono di noi" },
    disclaimer: { en: "Sample reviews (placeholder)", it: "Recensioni di esempio (segnaposto)" },
    items: [
      { name: "Chiara M.", text: { en: "Iris finally fixed my box-dye disaster. The balayage still looks great three months later.", it: "Iris ha finalmente sistemato il mio disastro col colore fai-da-te. Il balayage è bellissimo anche dopo tre mesi." } },
      { name: "Emma W.", text: { en: "Booked online in English, no awkward phone call. Lovely people.", it: "Prenotato online in inglese, senza telefonate imbarazzanti. Persone deliziose." } },
      { name: "Luca R.", text: { en: "Quick, sharp cut from Davide every month. Never had to wait.", it: "Taglio veloce e preciso da Davide ogni mese. Mai aspettato." } },
    ],
  },
  hours: {
    title: { en: "Opening hours", it: "Orari" },
    openNow: { en: "Open now", it: "Aperto ora" },
    closedNow: { en: "Closed now", it: "Chiuso ora" },
    closed: { en: "Closed", it: "Chiuso" },
    days: {
      en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      it: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    },
    week: [[], [], [{ open: "09:30", close: "19:30" }], [{ open: "09:30", close: "19:30" }], [{ open: "09:30", close: "21:00" }], [{ open: "09:30", close: "19:30" }], [{ open: "09:00", close: "18:00" }]] as Slot[][],
  },
  visit: {
    title: { en: "Find us", it: "Dove siamo" },
    body: { en: "Two minutes from Cavour metro, on one of Monti's quieter streets.", it: "A due minuti dalla metro Cavour, in una delle vie più tranquille di Monti." },
    directions: { en: "Get directions", it: "Indicazioni stradali" },
    call: { en: "Call", it: "Chiama" },
  },
  footer: {
    fictional: { en: "Salone Iris is a fictional business, created as an example site by CPD Web Design.", it: "Salone Iris è un'attività immaginaria, creata come sito di esempio da CPD Web Design." },
  },
};
