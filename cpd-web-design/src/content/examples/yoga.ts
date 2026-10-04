/**
 * DEMO: Respiro Yoga (fictional yoga studio in Trastevere, Rome). Business plan.
 */
import { unsplash, type ExampleMeta, type Img } from "./types";

export type ClassType = "vinyasa" | "hatha" | "yin" | "prenatal";
export type YogaClass = { day: number; time: string; minutes: number; type: ClassType; teacher: string; level: "all" | "beginner" | "intermediate"; lang: "IT" | "EN" | "IT/EN" };

export const yogaMeta: ExampleMeta = {
  slug: "yoga",
  name: "Respiro Yoga",
  industry: { en: "Yoga studio", it: "Studio di yoga" },
  tagline: { en: "A small yoga studio in Trastevere", it: "Un piccolo studio di yoga a Trastevere" },
  location: "Trastevere, Roma",
  plan: "business",
  domain: "respiroyoga.it",
  screenshot: "/images/work/yoga.jpg",
  cover: unsplash("1544367567-0f2fcb009e0b"),
  palette: { bg: "#F1EBE1", fg: "#1F4E5A", accent: "#D98E2B" },
  features: [
    { id: "hero", label: { en: "Hero + intro offer", it: "Hero + offerta di prova" }, description: { en: "Turns curious visitors into first classes.", it: "Trasforma i curiosi in prime lezioni." } },
    { id: "timetable", label: { en: "Weekly timetable with filters", it: "Orario settimanale con filtri" }, description: { en: "By day and style; updated by me whenever it changes.", it: "Per giorno e stile; lo aggiorno io quando cambia." } },
    { id: "booking", label: { en: "Book a class", it: "Prenota una lezione" }, description: { en: "Reserve a mat in two taps.", it: "Prenoti il tappetino in due tocchi." } },
    { id: "styles", label: { en: "Class styles explained", it: "Stili spiegati" }, description: { en: "Beginners know where to start.", it: "Chi inizia sa da dove partire." } },
    { id: "prices", label: { en: "Passes and prices", it: "Abbonamenti e prezzi" }, description: { en: "Clear prices, no awkward questions.", it: "Prezzi chiari, niente domande imbarazzanti." } },
    { id: "teachers", label: { en: "Teachers", it: "Insegnanti" }, description: { en: "People choose a class because of the teacher.", it: "Si sceglie una lezione per l'insegnante." } },
    { id: "gallery", label: { en: "Gallery + lightbox", it: "Galleria + lightbox" }, description: { en: "Shows the space and the mood.", it: "Mostra lo spazio e l'atmosfera." } },
    { id: "faq", label: { en: "FAQ", it: "FAQ" }, description: { en: "Mats, showers, what to wear.", it: "Tappetini, docce, cosa indossare." } },
    { id: "map", label: { en: "Map & contact", it: "Mappa e contatti" }, description: { en: "Easy to find on the first visit.", it: "Facile da trovare la prima volta." } },
    { id: "lang", label: { en: "Italian / English", it: "Italiano / Inglese" }, description: { en: "Classes in both, so the site is too.", it: "Lezioni in entrambe, così anche il sito." } },
  ],
};

export const yoga = {
  name: "Respiro Yoga",
  phone: "+39 06 0000 0003",
  phoneHref: "tel:+390600000003",
  whatsapp: "390000000004",
  email: "ciao@respiroyoga.example",
  address: "Vicolo del Cinque (demo), 00153 Roma",
  mapsQuery: "Trastevere, Roma",
  nav: {
    timetable: { en: "Timetable", it: "Orario" },
    styles: { en: "Classes", it: "Lezioni" },
    prices: { en: "Prices", it: "Prezzi" },
    teachers: { en: "Teachers", it: "Insegnanti" },
    trial: { en: "Try 2 weeks for €29", it: "Prova 2 settimane a €29" },
  },
  hero: {
    title: { en: "Slow down in the middle of Trastevere.", it: "Rallenta nel cuore di Trastevere." },
    body: {
      en: "Small classes, no mirrors, teachers who know your name. In Italian and English, seven days a week.",
      it: "Classi piccole, niente specchi, insegnanti che conoscono il tuo nome. In italiano e inglese, sette giorni su sette.",
    },
    offer: { en: "New here? Two weeks unlimited for €29.", it: "Prima volta? Due settimane illimitate a €29." },
    cta: { en: "See the timetable", it: "Guarda l'orario" },
    image: { src: unsplash("1544367567-0f2fcb009e0b"), alt: { en: "A yoga pose silhouetted against the sunset", it: "Una posizione yoga in controluce al tramonto" } } as Img,
  },
  timetable: {
    title: { en: "This week", it: "Questa settimana" },
    all: { en: "All styles", it: "Tutti gli stili" },
    days: {
      en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      it: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    },
    levels: {
      all: { en: "All levels", it: "Tutti i livelli" },
      beginner: { en: "Beginners", it: "Principianti" },
      intermediate: { en: "Intermediate", it: "Intermedio" },
    },
    book: { en: "Book", it: "Prenota" },
    booked: { en: "Booked", it: "Prenotato" },
    spots: { en: "{n} spots left", it: "{n} posti liberi" },
    empty: { en: "No classes of this style today.", it: "Nessuna lezione di questo stile oggi." },
    demoNote: { en: "Demo only: bookings aren't saved.", it: "Solo demo: le prenotazioni non vengono salvate." },
    classes: [
      { day: 1, time: "07:30", minutes: 60, type: "vinyasa", teacher: "Giulia", level: "intermediate", lang: "IT/EN" },
      { day: 1, time: "18:30", minutes: 75, type: "hatha", teacher: "Marco", level: "beginner", lang: "IT" },
      { day: 1, time: "20:00", minutes: 60, type: "yin", teacher: "Sarah", level: "all", lang: "EN" },
      { day: 2, time: "07:30", minutes: 60, type: "hatha", teacher: "Marco", level: "all", lang: "IT" },
      { day: 2, time: "13:00", minutes: 45, type: "vinyasa", teacher: "Giulia", level: "all", lang: "IT/EN" },
      { day: 2, time: "19:00", minutes: 75, type: "prenatal", teacher: "Sarah", level: "all", lang: "EN" },
      { day: 3, time: "07:30", minutes: 60, type: "vinyasa", teacher: "Giulia", level: "intermediate", lang: "IT/EN" },
      { day: 3, time: "18:30", minutes: 60, type: "yin", teacher: "Sarah", level: "all", lang: "EN" },
      { day: 3, time: "20:00", minutes: 75, type: "hatha", teacher: "Marco", level: "beginner", lang: "IT" },
      { day: 4, time: "07:30", minutes: 60, type: "hatha", teacher: "Marco", level: "all", lang: "IT" },
      { day: 4, time: "19:00", minutes: 60, type: "vinyasa", teacher: "Giulia", level: "intermediate", lang: "IT/EN" },
      { day: 5, time: "07:30", minutes: 60, type: "vinyasa", teacher: "Giulia", level: "all", lang: "IT/EN" },
      { day: 5, time: "18:30", minutes: 75, type: "yin", teacher: "Sarah", level: "all", lang: "EN" },
      { day: 6, time: "09:30", minutes: 90, type: "vinyasa", teacher: "Giulia", level: "all", lang: "IT/EN" },
      { day: 6, time: "11:30", minutes: 75, type: "prenatal", teacher: "Sarah", level: "all", lang: "EN" },
      { day: 0, time: "10:00", minutes: 90, type: "hatha", teacher: "Marco", level: "beginner", lang: "IT" },
      { day: 0, time: "18:00", minutes: 75, type: "yin", teacher: "Sarah", level: "all", lang: "IT/EN" },
    ] as YogaClass[],
  },
  styles: {
    title: { en: "Our classes", it: "Le nostre lezioni" },
    items: {
      vinyasa: { name: { en: "Vinyasa", it: "Vinyasa" }, body: { en: "Flowing, breath-led sequences. You'll get warm.", it: "Sequenze fluide guidate dal respiro. Si suda." } },
      hatha: { name: { en: "Hatha", it: "Hatha" }, body: { en: "Slower, with time to learn each pose. Best place to start.", it: "Più lento, con il tempo di imparare ogni posizione. Il punto di partenza ideale." } },
      yin: { name: { en: "Yin", it: "Yin" }, body: { en: "Long, quiet holds on the floor. The antidote to a long day.", it: "Posizioni lunghe e silenziose a terra. L'antidoto a una giornata lunga." } },
      prenatal: { name: { en: "Prenatal", it: "Prenatale" }, body: { en: "Gentle practice for every trimester, with a midwife-trained teacher.", it: "Pratica dolce per ogni trimestre, con un'insegnante formata con ostetriche." } },
    } as Record<ClassType, { name: { en: string; it: string }; body: { en: string; it: string } }>,
  },
  prices: {
    title: { en: "Passes", it: "Abbonamenti" },
    items: [
      { name: { en: "Intro offer", it: "Offerta di prova" }, price: 29, note: { en: "2 weeks unlimited, first visit only", it: "2 settimane illimitate, solo la prima volta" }, highlight: true },
      { name: { en: "Drop-in class", it: "Lezione singola" }, price: 15, note: { en: "Mat included", it: "Tappetino incluso" } },
      { name: { en: "10-class pass", it: "Carnet 10 lezioni" }, price: 120, note: { en: "Valid 4 months", it: "Valido 4 mesi" } },
      { name: { en: "Unlimited monthly", it: "Mensile illimitato" }, price: 95, note: { en: "Cancel any time", it: "Disdici quando vuoi" } },
    ],
  },
  teachers: {
    title: { en: "Teachers", it: "Insegnanti" },
    people: [
      { name: "Giulia", role: { en: "Vinyasa · founder", it: "Vinyasa · fondatrice" }, image: { src: unsplash("1534528741775-53994a69daeb"), alt: { en: "Portrait of Giulia", it: "Ritratto di Giulia" } } },
      { name: "Marco", role: { en: "Hatha", it: "Hatha" }, image: { src: unsplash("1507003211169-0a1dd7228f2d"), alt: { en: "Portrait of Marco", it: "Ritratto di Marco" } } },
      { name: "Sarah", role: { en: "Yin · prenatal", it: "Yin · prenatale" }, image: { src: unsplash("1531746020798-e6953c6e8e04"), alt: { en: "Portrait of Sarah", it: "Ritratto di Sarah" } } },
    ],
  },
  gallery: {
    title: { en: "The studio", it: "Lo studio" },
    images: [
      { src: unsplash("1506126613408-eca07ce68773"), alt: { en: "Meditating in warm morning light", it: "Meditazione nella luce calda del mattino" } },
      { src: unsplash("1599901860904-17e6ed7083a0"), alt: { en: "Downward dog on the studio floor", it: "Cane a testa in giù sul pavimento dello studio" } },
      { src: unsplash("1575052814086-f385e2e2ad1b"), alt: { en: "A seated stretch by the plants", it: "Un allungamento seduto vicino alle piante" } },
      { src: unsplash("1518611012118-696072aa579a"), alt: { en: "A group class in full swing", it: "Una lezione di gruppo in pieno svolgimento" } },
      { src: unsplash("1600881333168-2ef49b341f30"), alt: { en: "Stretching before class", it: "Stretching prima della lezione" } },
    ] as Img[],
  },
  faq: {
    title: { en: "Before your first class", it: "Prima della prima lezione" },
    items: [
      { q: { en: "Do I need to bring a mat?", it: "Devo portare il tappetino?" }, a: { en: "No, mats, blocks and blankets are included. Bring water and wear something comfortable.", it: "No, tappetini, mattoncini e coperte sono inclusi. Porta dell'acqua e vestiti comodi." } },
      { q: { en: "I've never done yoga. Which class?", it: "Non ho mai fatto yoga. Quale lezione?" }, a: { en: "Hatha for beginners on Monday or Wednesday evening, or Sunday morning.", it: "Hatha principianti lunedì o mercoledì sera, o domenica mattina." } },
      { q: { en: "Are there showers?", it: "Ci sono le docce?" }, a: { en: "Yes, two showers and lockers. Towels are €2.", it: "Sì, due docce e armadietti. Gli asciugamani costano €2." } },
      { q: { en: "Can I cancel a booking?", it: "Posso disdire una prenotazione?" }, a: { en: "Up to 4 hours before class, from the link in your confirmation email.", it: "Fino a 4 ore prima della lezione, dal link nell'email di conferma." } },
    ],
  },
  contact: {
    title: { en: "Find the studio", it: "Come arrivare" },
    body: { en: "Behind Piazza Trilussa, first floor, ring “Respiro”.", it: "Dietro Piazza Trilussa, primo piano, citofono “Respiro”." },
    directions: { en: "Get directions", it: "Indicazioni stradali" },
  },
  footer: {
    fictional: { en: "Respiro Yoga is a fictional business, created as an example site by CPD Web Design.", it: "Respiro Yoga è un'attività immaginaria, creata come sito di esempio da CPD Web Design." },
  },
};
