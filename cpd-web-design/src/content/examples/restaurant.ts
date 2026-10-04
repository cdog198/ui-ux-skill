/**
 * DEMO: Trattoria Alba (fictional restaurant in Testaccio, Rome)
 * Every name, dish, price, review and image of the restaurant demo lives here.
 * To add a new industry, copy this file and src/components/examples/restaurant/,
 * then register it in ./index.ts.
 */
import type { L } from "@/lib/i18n";
import { unsplash, type ExampleMeta, type Img } from "./types";

export type Diet = "v" | "vg" | "gf";
export type Allergen = "gluten" | "dairy" | "eggs" | "nuts" | "fish" | "shellfish" | "soy" | "celery" | "sulphites" | "sesame";

export type MenuItem = { name: L; description: L; price: number; diet: Diet[]; allergens: Allergen[]; special?: boolean };
export type MenuCategory = { id: string; name: L; items: MenuItem[] };

/** Opening hours in Rome time. 0 = Sunday … 6 = Saturday. Each slot is "HH:MM". */
export type Slot = { open: string; close: string };

export const restaurantMeta: ExampleMeta = {
  slug: "restaurant",
  name: "Trattoria Alba",
  industry: { en: "Restaurant", it: "Ristorante" },
  tagline: { en: "A family trattoria in Testaccio", it: "Una trattoria di famiglia a Testaccio" },
  location: "Testaccio, Roma",
  cover: unsplash("1473093295043-cdd812d0e601"),
  palette: { bg: "#F5EEDD", fg: "#2F3A1F", accent: "#A64B25" },
  features: [
    { id: "hero", label: { en: "Hero + booking CTA", it: "Hero + invito a prenotare" }, description: { en: "First impression with one clear action: book.", it: "Prima impressione con un'azione chiara: prenotare." } },
    { id: "hours", label: { en: "Live “Open now” hours", it: "Orari con “Aperto ora”" }, description: { en: "Updates automatically on Rome time.", it: "Si aggiorna da solo sull'ora di Roma." } },
    { id: "call", label: { en: "Click-to-call & WhatsApp", it: "Chiamata e WhatsApp in un tocco" }, description: { en: "Customers reach you in one tap.", it: "I clienti ti contattano con un tocco." } },
    { id: "map", label: { en: "Google Maps & directions", it: "Google Maps e indicazioni" }, description: { en: "Turns visitors into walk-ins.", it: "Trasforma i visitatori in clienti al tavolo." } },
    { id: "menu", label: { en: "Interactive menu", it: "Menu interattivo" }, description: { en: "Categories, prices, dietary icons and allergens. Edited by me on request.", it: "Categorie, prezzi, icone dietetiche e allergeni. Lo aggiorno io su richiesta." } },
    { id: "gallery", label: { en: "Photo gallery + lightbox", it: "Galleria foto + lightbox" }, description: { en: "Let the food sell itself.", it: "Lascia che il cibo parli da sé." } },
    { id: "reviews", label: { en: "Reviews", it: "Recensioni" }, description: { en: "Social proof from real guests.", it: "La prova sociale dei tuoi clienti." } },
    { id: "delivery", label: { en: "Delivery & Instagram links", it: "Link delivery e Instagram" }, description: { en: "Send people where they can order or follow.", it: "Porta le persone dove ordinare o seguirti." } },
    { id: "booking", label: { en: "Table booking form", it: "Prenotazione tavoli" }, description: { en: "Requests by date, time and party size, only on open slots.", it: "Richieste per data, ora e coperti, solo negli orari aperti." } },
    { id: "events", label: { en: "Specials & events", it: "Speciali ed eventi" }, description: { en: "Wine nights and set menus that fill quiet evenings.", it: "Serate vino e menu fissi per riempire le serate tranquille." } },
    { id: "lang", label: { en: "Italian / English", it: "Italiano / Inglese" }, description: { en: "Serve locals and tourists alike.", it: "Per romani e turisti." } },
  ],
};

export const restaurant = {
  name: "Trattoria Alba",
  since: "1987",
  phone: "+39 06 0000 0000",
  phoneHref: "tel:+390600000000",
  whatsapp: "390000000000",
  email: "ciao@trattoria-alba.example",
  address: "Via Marmorata (demo), 00153 Roma",
  mapsQuery: "Testaccio, Roma",
  instagram: "@trattoria.alba",
  nav: {
    menu: { en: "Menu", it: "Menu" },
    specials: { en: "Specials", it: "Speciali" },
    gallery: { en: "Gallery", it: "Galleria" },
    visit: { en: "Visit", it: "Dove siamo" },
    book: { en: "Book a table", it: "Prenota un tavolo" },
  },
  hero: {
    eyebrow: { en: "Testaccio · Roma · since 1987", it: "Testaccio · Roma · dal 1987" },
    title: { en: "Roman cooking, the way Nonna made it.", it: "Cucina romana, come la faceva la nonna." },
    body: {
      en: "Fresh pasta rolled every morning, carbonara the proper way, and a wine list from the hills around Rome.",
      it: "Pasta fresca tirata ogni mattina, carbonara come si deve e una carta dei vini dai Castelli Romani.",
    },
    cta: { en: "Book a table", it: "Prenota un tavolo" },
    secondary: { en: "See the menu", it: "Guarda il menu" },
    image: { src: unsplash("1473093295043-cdd812d0e601"), alt: { en: "A bowl of farfalle with tomatoes and pesto", it: "Un piatto di farfalle con pomodorini e pesto" } } as Img,
  },
  specials: {
    title: { en: "This week at Alba", it: "Questa settimana da Alba" },
    items: [
      { day: { en: "Thursdays", it: "Giovedì" }, title: { en: "Wine night", it: "Serata vino" }, body: { en: "Four glasses from Lazio producers with cicchetti, €25.", it: "Quattro calici di produttori laziali con assaggi, €25." } },
      { day: { en: "Sundays", it: "Domenica" }, title: { en: "Pranzo della domenica", it: "Pranzo della domenica" }, body: { en: "Five-course family lunch, €35. Kids under 10 eat free.", it: "Pranzo di famiglia in cinque portate, €35. Bambini sotto i 10 anni gratis." } },
      { day: { en: "Oct – Dec", it: "Ott – Dic" }, title: { en: "White truffle season", it: "Stagione del tartufo bianco" }, body: { en: "Tagliolini with shaved truffle, market price.", it: "Tagliolini al tartufo bianco, prezzo di mercato." } },
    ],
  },
  menuIntro: {
    title: { en: "The menu", it: "Il menu" },
    body: { en: "Seasonal, local, mostly made in-house. Tap a dish for allergens.", it: "Stagionale, locale, quasi tutto fatto in casa. Tocca un piatto per gli allergeni." },
    allergens: { en: "Allergens", it: "Allergeni" },
    none: { en: "No major allergens", it: "Nessun allergene principale" },
    note: {
      en: "Please tell us about any allergy when booking. Cover charge €2.50. Prices include VAT.",
      it: "Segnalaci eventuali allergie al momento della prenotazione. Coperto €2,50. Prezzi IVA inclusa.",
    },
  },
  diets: {
    v: { en: "Vegetarian", it: "Vegetariano" },
    vg: { en: "Vegan", it: "Vegano" },
    gf: { en: "Gluten-free", it: "Senza glutine" },
  } satisfies Record<Diet, L>,
  allergenNames: {
    gluten: { en: "Gluten", it: "Glutine" },
    dairy: { en: "Milk", it: "Latte" },
    eggs: { en: "Eggs", it: "Uova" },
    nuts: { en: "Nuts", it: "Frutta a guscio" },
    fish: { en: "Fish", it: "Pesce" },
    shellfish: { en: "Shellfish", it: "Crostacei" },
    soy: { en: "Soy", it: "Soia" },
    celery: { en: "Celery", it: "Sedano" },
    sulphites: { en: "Sulphites", it: "Solfiti" },
    sesame: { en: "Sesame", it: "Sesamo" },
  } satisfies Record<Allergen, L>,
  menu: [
    {
      id: "antipasti",
      name: { en: "Starters", it: "Antipasti" },
      items: [
        { name: { en: "Supplì al telefono", it: "Supplì al telefono" }, description: { en: "Fried rice ball, tomato ragù, molten mozzarella.", it: "Riso al ragù fritto con cuore di mozzarella filante." }, price: 3.5, diet: [], allergens: ["gluten", "dairy", "eggs", "celery"] },
        { name: { en: "Carciofi alla giudia", it: "Carciofi alla giudia" }, description: { en: "Crisp-fried Roman artichoke, sea salt, lemon.", it: "Carciofo romanesco fritto croccante, sale e limone." }, price: 9, diet: ["v", "vg", "gf"], allergens: [] },
        { name: { en: "Burrata & tomatoes", it: "Burrata e pomodori" }, description: { en: "Puglian burrata, heritage tomatoes, basil oil.", it: "Burrata pugliese, pomodori antichi, olio al basilico." }, price: 12, diet: ["v", "gf"], allergens: ["dairy"] },
        { name: { en: "Fiori di zucca", it: "Fiori di zucca" }, description: { en: "Courgette flowers, mozzarella and anchovy, light batter.", it: "Fiori di zucca con mozzarella e alici, in pastella leggera." }, price: 8, diet: [], allergens: ["gluten", "dairy", "fish"] },
      ],
    },
    {
      id: "primi",
      name: { en: "Pasta", it: "Primi" },
      items: [
        { name: { en: "Carbonara", it: "Carbonara" }, description: { en: "Rigatoni, guanciale, egg yolk, pecorino romano, black pepper.", it: "Rigatoni, guanciale, tuorlo, pecorino romano, pepe nero." }, price: 14, diet: [], allergens: ["gluten", "eggs", "dairy"], special: true },
        { name: { en: "Cacio e pepe", it: "Cacio e pepe" }, description: { en: "Hand-rolled tonnarelli, pecorino, toasted pepper.", it: "Tonnarelli tirati a mano, pecorino, pepe tostato." }, price: 13, diet: ["v"], allergens: ["gluten", "dairy", "eggs"] },
        { name: { en: "Amatriciana", it: "Amatriciana" }, description: { en: "Bucatini, guanciale, San Marzano tomato, pecorino.", it: "Bucatini, guanciale, pomodoro San Marzano, pecorino." }, price: 14, diet: [], allergens: ["gluten", "dairy"] },
        { name: { en: "Gnocchi al pomodoro", it: "Gnocchi al pomodoro" }, description: { en: "Potato gnocchi, slow tomato sauce, basil. Gluten-free on request.", it: "Gnocchi di patate, sugo lento, basilico. Senza glutine su richiesta." }, price: 12, diet: ["v", "vg"], allergens: ["gluten"] },
      ],
    },
    {
      id: "secondi",
      name: { en: "Mains", it: "Secondi" },
      items: [
        { name: { en: "Saltimbocca alla romana", it: "Saltimbocca alla romana" }, description: { en: "Veal, prosciutto, sage, white wine butter.", it: "Vitello, prosciutto crudo, salvia, burro al vino bianco." }, price: 19, diet: ["gf"], allergens: ["dairy", "sulphites"] },
        { name: { en: "Coda alla vaccinara", it: "Coda alla vaccinara" }, description: { en: "Oxtail braised for six hours with celery and cocoa.", it: "Coda brasata sei ore con sedano e cacao." }, price: 21, diet: ["gf"], allergens: ["celery", "sulphites"] },
        { name: { en: "Catch of the day", it: "Pescato del giorno" }, description: { en: "From the Civitavecchia market, grilled, salmoriglio.", it: "Dal mercato di Civitavecchia, alla griglia, salmoriglio." }, price: 24, diet: ["gf"], allergens: ["fish"] },
        { name: { en: "Melanzane alla parmigiana", it: "Parmigiana di melanzane" }, description: { en: "Layered aubergine, tomato, fior di latte, parmigiano.", it: "Melanzane a strati, pomodoro, fior di latte, parmigiano." }, price: 15, diet: ["v", "gf"], allergens: ["dairy"] },
      ],
    },
    {
      id: "dolci",
      name: { en: "Desserts", it: "Dolci" },
      items: [
        { name: { en: "Tiramisù della casa", it: "Tiramisù della casa" }, description: { en: "Mascarpone, savoiardi, espresso, cocoa.", it: "Mascarpone, savoiardi, caffè, cacao." }, price: 7, diet: ["v"], allergens: ["gluten", "dairy", "eggs"] },
        { name: { en: "Maritozzo con la panna", it: "Maritozzo con la panna" }, description: { en: "Roman sweet bun, whipped cream.", it: "Il dolce romano con panna montata." }, price: 5, diet: ["v"], allergens: ["gluten", "dairy", "eggs"] },
        { name: { en: "Sorbet of the day", it: "Sorbetto del giorno" }, description: { en: "Made in-house with seasonal fruit.", it: "Fatto in casa con frutta di stagione." }, price: 5, diet: ["v", "vg", "gf"], allergens: [] },
      ],
    },
    {
      id: "vini",
      name: { en: "Wine", it: "Vini" },
      items: [
        { name: { en: "Frascati Superiore, glass", it: "Frascati Superiore, calice" }, description: { en: "Crisp white from the Castelli Romani.", it: "Bianco fresco dai Castelli Romani." }, price: 6, diet: ["v", "vg", "gf"], allergens: ["sulphites"] },
        { name: { en: "Cesanese del Piglio, glass", it: "Cesanese del Piglio, calice" }, description: { en: "Lazio's spicy, cherry-dark red.", it: "Il rosso speziato del Lazio, note di ciliegia." }, price: 7, diet: ["v", "vg", "gf"], allergens: ["sulphites"] },
        { name: { en: "House wine, ½ litre", it: "Vino della casa, ½ litro" }, description: { en: "Red or white, ask what's open today.", it: "Rosso o bianco, chiedi cosa abbiamo aperto oggi." }, price: 9, diet: ["v", "vg", "gf"], allergens: ["sulphites"] },
      ],
    },
  ] satisfies MenuCategory[] as MenuCategory[],
  hours: {
    title: { en: "Opening hours", it: "Orari" },
    openNow: { en: "Open now", it: "Aperto ora" },
    closedNow: { en: "Closed now", it: "Chiuso ora" },
    closesAt: { en: "until {time}", it: "fino alle {time}" },
    opensAt: { en: "opens {day} {time}", it: "apre {day} alle {time}" },
    closed: { en: "Closed", it: "Chiuso" },
    today: { en: "Today", it: "Oggi" },
    days: {
      en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      it: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    },
    /** 0 = Sunday … 6 = Saturday. Empty array = closed all day. */
    week: [
      [{ open: "12:30", close: "15:30" }],
      [],
      [{ open: "12:30", close: "15:00" }, { open: "19:00", close: "23:00" }],
      [{ open: "12:30", close: "15:00" }, { open: "19:00", close: "23:00" }],
      [{ open: "12:30", close: "15:00" }, { open: "19:00", close: "23:30" }],
      [{ open: "12:30", close: "15:00" }, { open: "19:00", close: "23:30" }],
      [{ open: "12:30", close: "15:30" }, { open: "19:00", close: "23:30" }],
    ] as Slot[][],
  },
  visit: {
    title: { en: "Come and eat", it: "Vieni a trovarci" },
    body: { en: "Five minutes from the Piramide metro stop, right by the Testaccio market.", it: "A cinque minuti dalla metro Piramide, accanto al mercato di Testaccio." },
    directions: { en: "Get directions", it: "Indicazioni stradali" },
    call: { en: "Call us", it: "Chiamaci" },
  },
  booking: {
    title: { en: "Book a table", it: "Prenota un tavolo" },
    body: { en: "Pick a day and time. We'll confirm by WhatsApp or SMS within the hour.", it: "Scegli giorno e ora. Ti confermiamo via WhatsApp o SMS entro un'ora." },
    date: { en: "Date", it: "Data" },
    time: { en: "Time", it: "Ora" },
    guests: { en: "Guests", it: "Persone" },
    name: { en: "Name", it: "Nome" },
    phone: { en: "Phone", it: "Telefono" },
    notes: { en: "Allergies or requests", it: "Allergie o richieste" },
    submit: { en: "Request booking", it: "Richiedi prenotazione" },
    chooseTime: { en: "Choose a time", it: "Scegli un orario" },
    closedDay: { en: "We're closed that day. Please pick another date.", it: "Quel giorno siamo chiusi. Scegli un'altra data." },
    confirmTitle: { en: "Richiesta ricevuta. Grazie!", it: "Richiesta ricevuta. Grazie!" },
    confirmBody: { en: "Table for {guests} on {date} at {time}. We'll confirm shortly on {phone}.", it: "Tavolo per {guests} il {date} alle {time}. Ti confermiamo a breve al {phone}." },
    another: { en: "Make another booking", it: "Nuova prenotazione" },
    demoNote: { en: "Demo only: no booking is sent.", it: "Solo demo: nessuna prenotazione viene inviata." },
    required: { en: "Please fill in this field", it: "Compila questo campo" },
  },
  gallery: {
    title: { en: "Inside Alba", it: "Dentro Alba" },
    images: [
      { src: unsplash("1517248135467-4c7edcad34c4"), alt: { en: "The dining room in the evening", it: "La sala la sera" } },
      { src: unsplash("1565299624946-b28f40a0ae38"), alt: { en: "A pizza fresh from the oven", it: "Una pizza appena sfornata" } },
      { src: unsplash("1414235077428-338989a2e8c0"), alt: { en: "A table set for dinner", it: "Un tavolo apparecchiato per la cena" } },
      { src: unsplash("1504674900247-0877df9cc836"), alt: { en: "Plates of grilled meat and salads to share", it: "Piatti di carne alla griglia e insalate da condividere" } },
      { src: unsplash("1510812431401-41d2bd2722f3"), alt: { en: "Glasses of red wine", it: "Calici di vino rosso" } },
      { src: unsplash("1555396273-367ea4eb4db5"), alt: { en: "The bar and back dining room", it: "Il bancone e la sala sul retro" } },
    ] as Img[],
  },
  reviews: {
    title: { en: "What guests say", it: "Cosa dicono i clienti" },
    disclaimer: { en: "Sample reviews (placeholder)", it: "Recensioni di esempio (segnaposto)" },
    items: [
      { name: "Giulia R.", source: "Google", rating: 5, text: { en: "The best carbonara in Testaccio, and I've tried them all. Warm, loud, perfect.", it: "La carbonara migliore di Testaccio, e le ho provate tutte. Calorosa, rumorosa, perfetta." } },
      { name: "Mark T.", source: "TripAdvisor", rating: 5, text: { en: "Booked online in two minutes. Staff explained every dish in English. We came back twice.", it: "Prenotato online in due minuti. Il personale ci ha spiegato ogni piatto in inglese. Siamo tornati due volte." } },
      { name: "Sofia & Luca", source: "Google", rating: 4, text: { en: "Sunday lunch is a proper event. Come hungry and bring the family.", it: "Il pranzo della domenica è un vero evento. Venite affamati e portate la famiglia." } },
    ],
  },
  social: {
    title: { en: "Follow the kitchen", it: "Segui la cucina" },
    body: { en: "Daily specials and behind-the-scenes on Instagram.", it: "Piatti del giorno e dietro le quinte su Instagram." },
    placeholder: { en: "Instagram feed placeholder: connects to your account", it: "Segnaposto feed Instagram: si collega al tuo account" },
    delivery: { en: "Eat at home", it: "Mangia a casa" },
    deliveryBody: { en: "Our pasta travels well. Order on:", it: "La nostra pasta viaggia bene. Ordina su:" },
    platforms: [
      { name: "Deliveroo", url: "https://deliveroo.it" },
      { name: "Glovo", url: "https://glovoapp.com" },
      { name: "Just Eat", url: "https://www.justeat.it" },
    ],
  },
  footer: {
    fictional: { en: "Trattoria Alba is a fictional business, created as an example site by CPD Web Design.", it: "Trattoria Alba è un'attività immaginaria, creata come sito di esempio da CPD Web Design." },
  },
};
