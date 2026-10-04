/**
 * DEMO: Hotel Via Giulia (fictional boutique hotel near Campo de' Fiori, Rome)
 * Every room, price, review and image of the hotel demo lives here.
 */
import { unsplash, type ExampleMeta, type Img } from "./types";

export type AmenityIcon = "wifi" | "coffee" | "car" | "bell" | "wind" | "sun" | "luggage" | "clock" | "bath" | "tv" | "safe" | "view";

export type Room = {
  id: string;
  name: { en: string; it: string };
  description: { en: string; it: string };
  fromPrice: number;
  guests: number;
  size: number; // m²
  bed: { en: string; it: string };
  amenities: AmenityIcon[];
  images: Img[];
};

export const hotelMeta: ExampleMeta = {
  slug: "hotel",
  name: "Hotel Via Giulia",
  industry: { en: "Boutique hotel", it: "Hotel boutique" },
  tagline: { en: "Twelve rooms in a 16th-century palazzo", it: "Dodici camere in un palazzo del Cinquecento" },
  location: "Centro Storico, Roma",
  cover: unsplash("1590490360182-c33d57733427"),
  palette: { bg: "#14202B", fg: "#EDE7DC", accent: "#C9A66B" },
  features: [
    { id: "hero", label: { en: "Full-screen hero", it: "Hero a schermo intero" }, description: { en: "Sets the mood before guests read a word.", it: "Crea l'atmosfera prima ancora di leggere." } },
    { id: "whatsapp", label: { en: "WhatsApp & contact buttons", it: "Pulsanti WhatsApp e contatti" }, description: { en: "Questions answered before guests book elsewhere.", it: "Risposte rapide prima che prenotino altrove." } },
    { id: "location", label: { en: "Map & distances", it: "Mappa e distanze" }, description: { en: "Shows how central you are, in minutes.", it: "Mostra quanto sei centrale, in minuti." } },
    { id: "rooms", label: { en: "Room types + carousels", it: "Tipologie camere + gallerie" }, description: { en: "Photos, amenities, capacity and “from” prices.", it: "Foto, servizi, capienza e prezzi “a partire da”." } },
    { id: "amenities", label: { en: "Amenities", it: "Servizi" }, description: { en: "Everything guests compare, at a glance.", it: "Tutto ciò che gli ospiti confrontano, a colpo d'occhio." } },
    { id: "gallery", label: { en: "Gallery + lightbox", it: "Galleria + lightbox" }, description: { en: "Full-screen photos, keyboard friendly.", it: "Foto a schermo intero, navigabili da tastiera." } },
    { id: "reviews", label: { en: "Guest reviews", it: "Recensioni ospiti" }, description: { en: "Trust, borrowed from happy guests.", it: "Fiducia, presa in prestito dagli ospiti felici." } },
    { id: "faq", label: { en: "FAQ", it: "FAQ" }, description: { en: "Fewer emails about parking and pets.", it: "Meno email su parcheggio e animali." } },
    { id: "search", label: { en: "Availability search", it: "Ricerca disponibilità" }, description: { en: "Check-in, check-out and guests, straight into a booking request.", it: "Arrivo, partenza e ospiti, dritti nella richiesta." } },
    { id: "booking", label: { en: "Direct booking requests", it: "Richieste di prenotazione dirette" }, description: { en: "No 15–20% OTA commission on these bookings.", it: "Niente commissioni OTA del 15–20% su queste prenotazioni." } },
    { id: "guide", label: { en: "Local area guide", it: "Guida della zona" }, description: { en: "Content that ranks on Google and helps guests plan.", it: "Contenuti che si posizionano su Google e aiutano a pianificare." } },
    { id: "lang", label: { en: "Multi-language", it: "Multilingua" }, description: { en: "Italian and English, more on request.", it: "Italiano e inglese, altre lingue su richiesta." } },
  ],
};

export const hotel = {
  name: "Hotel Via Giulia",
  stars: 4,
  phone: "+39 06 0000 0001",
  phoneHref: "tel:+390600000001",
  whatsapp: "390000000001",
  email: "stay@hotelviagiulia.example",
  address: "Via Giulia (demo), 00186 Roma",
  mapsQuery: "Via Giulia, Roma",
  nav: {
    rooms: { en: "Rooms", it: "Camere" },
    amenities: { en: "Services", it: "Servizi" },
    location: { en: "Location", it: "Posizione" },
    guide: { en: "Rome guide", it: "Guida di Roma" },
    faq: { en: "FAQ", it: "FAQ" },
    book: { en: "Book direct", it: "Prenota diretto" },
  },
  hero: {
    eyebrow: { en: "Boutique hotel · Centro Storico", it: "Hotel boutique · Centro Storico" },
    title: { en: "A quiet palazzo on Rome's most beautiful street.", it: "Un palazzo silenzioso sulla via più bella di Roma." },
    image: { src: unsplash("1590490360182-c33d57733427"), alt: { en: "A classic bedroom with tall curtains and a tufted sofa", it: "Una camera classica con tende alte e un divano capitonné" } } as Img,
    checkIn: { en: "Check-in", it: "Arrivo" },
    checkOut: { en: "Check-out", it: "Partenza" },
    guests: { en: "Guests", it: "Ospiti" },
    search: { en: "Check availability", it: "Verifica disponibilità" },
    bestRate: { en: "Best rate guaranteed when you book direct", it: "Miglior tariffa garantita prenotando direttamente" },
  },
  intro: {
    title: { en: "Twelve rooms. One very good address.", it: "Dodici camere. Un indirizzo d'eccezione." },
    body: {
      en: "Laid out by Bramante for Pope Julius II, Via Giulia is lined with palazzi, ivy and antique shops. Our twelve rooms sit behind a 16th-century façade, a few steps from Campo de' Fiori and the Tiber.",
      it: "Tracciata da Bramante per papa Giulio II, via Giulia è un susseguirsi di palazzi, edera e antiquari. Le nostre dodici camere si trovano dietro una facciata del Cinquecento, a pochi passi da Campo de' Fiori e dal Tevere.",
    },
  },
  roomsSection: {
    title: { en: "Rooms & suites", it: "Camere e suite" },
    from: { en: "from", it: "da" },
    night: { en: "/night", it: "/notte" },
    guests: { en: "Up to {n} guests", it: "Fino a {n} ospiti" },
    select: { en: "Request this room", it: "Richiedi questa camera" },
    prev: { en: "Previous photo", it: "Foto precedente" },
    next: { en: "Next photo", it: "Foto successiva" },
  },
  rooms: [
    {
      id: "classic",
      name: { en: "Classic Double", it: "Doppia Classic" },
      description: { en: "Calm and compact, with original beams and a rain shower.", it: "Tranquilla e raccolta, con travi originali e doccia a pioggia." },
      fromPrice: 160,
      guests: 2,
      size: 18,
      bed: { en: "Queen bed", it: "Letto queen" },
      amenities: ["wifi", "wind", "tv", "safe"],
      images: [
        { src: unsplash("1611892440504-42a792e24d32"), alt: { en: "Classic Double bedroom", it: "Camera Doppia Classic" } },
        { src: unsplash("1590490360182-c33d57733427"), alt: { en: "Classic Double, view of the bed", it: "Doppia Classic, vista del letto" } },
        { src: unsplash("1618773928121-c32242e63f39"), alt: { en: "Classic Double, bedside detail", it: "Doppia Classic, dettaglio del comodino" } },
      ],
    },
    {
      id: "deluxe",
      name: { en: "Deluxe Courtyard", it: "Deluxe sul Cortile" },
      description: { en: "Tall windows over the ivy courtyard, a writing desk and a deep bath.", it: "Finestre alte sul cortile con l'edera, scrittoio e vasca profonda." },
      fromPrice: 210,
      guests: 2,
      size: 24,
      bed: { en: "King bed", it: "Letto king" },
      amenities: ["wifi", "wind", "tv", "bath", "safe"],
      images: [
        { src: unsplash("1631049307264-da0ec9d70304"), alt: { en: "Deluxe Courtyard bedroom", it: "Camera Deluxe sul Cortile" } },
        { src: unsplash("1578683010236-d716f9a3f461"), alt: { en: "Deluxe Courtyard bed detail", it: "Dettaglio del letto Deluxe" } },
        { src: unsplash("1582719478250-c89cae4dc85b"), alt: { en: "Deluxe Courtyard seating area", it: "Zona salotto della Deluxe" } },
      ],
    },
    {
      id: "junior",
      name: { en: "Junior Suite", it: "Junior Suite" },
      description: { en: "Frescoed ceiling, a sitting area and a view straight down Via Giulia.", it: "Soffitto affrescato, salottino e vista lungo via Giulia." },
      fromPrice: 290,
      guests: 3,
      size: 34,
      bed: { en: "King bed + sofa bed", it: "Letto king + divano letto" },
      amenities: ["wifi", "wind", "tv", "bath", "view", "coffee"],
      images: [
        { src: unsplash("1582719478250-c89cae4dc85b"), alt: { en: "Junior Suite living area", it: "Salotto della Junior Suite" } },
        { src: unsplash("1618773928121-c32242e63f39"), alt: { en: "Junior Suite bedroom", it: "Camera della Junior Suite" } },
        { src: unsplash("1590490360182-c33d57733427"), alt: { en: "Junior Suite bed", it: "Letto della Junior Suite" } },
      ],
    },
    {
      id: "family",
      name: { en: "Family Room", it: "Camera Family" },
      description: { en: "Two connecting spaces, room for four, cots on request.", it: "Due ambienti comunicanti, spazio per quattro, culla su richiesta." },
      fromPrice: 240,
      guests: 4,
      size: 30,
      bed: { en: "Double + two singles", it: "Matrimoniale + due singoli" },
      amenities: ["wifi", "wind", "tv", "safe", "coffee"],
      images: [
        { src: unsplash("1578683010236-d716f9a3f461"), alt: { en: "Family Room main bedroom", it: "Camera principale della Family" } },
        { src: unsplash("1611892440504-42a792e24d32"), alt: { en: "Family Room second bedroom", it: "Seconda camera della Family" } },
        { src: unsplash("1631049307264-da0ec9d70304"), alt: { en: "Family Room detail", it: "Dettaglio della Camera Family" } },
      ],
    },
  ] as Room[],
  amenityNames: {
    wifi: { en: "Fast Wi-Fi", it: "Wi-Fi veloce" },
    coffee: { en: "Breakfast included", it: "Colazione inclusa" },
    car: { en: "Airport transfer", it: "Transfer aeroporto" },
    bell: { en: "Concierge", it: "Concierge" },
    wind: { en: "Air conditioning", it: "Aria condizionata" },
    sun: { en: "Rooftop terrace", it: "Terrazza panoramica" },
    luggage: { en: "Luggage storage", it: "Deposito bagagli" },
    clock: { en: "24h reception", it: "Reception 24h" },
    bath: { en: "Bathtub", it: "Vasca da bagno" },
    tv: { en: "Smart TV", it: "Smart TV" },
    safe: { en: "In-room safe", it: "Cassaforte" },
    view: { en: "Street view", it: "Vista sulla via" },
  } satisfies Record<AmenityIcon, { en: string; it: string }>,
  amenities: {
    title: { en: "Everything, taken care of", it: "Pensiamo a tutto noi" },
    list: ["wifi", "coffee", "car", "bell", "wind", "sun", "luggage", "clock"] as AmenityIcon[],
    notes: {
      wifi: { en: "Fibre throughout, free", it: "Fibra ovunque, gratis" },
      coffee: { en: "7–10:30 on the terrace", it: "7–10:30 in terrazza" },
      car: { en: "Fiumicino from €60", it: "Fiumicino da €60" },
      bell: { en: "Tables, tours, tickets", it: "Tavoli, tour, biglietti" },
      wind: { en: "Every room", it: "In ogni camera" },
      sun: { en: "Aperitivo at sunset", it: "Aperitivo al tramonto" },
      luggage: { en: "Before and after your stay", it: "Prima e dopo il soggiorno" },
      clock: { en: "Always someone here", it: "Sempre qualcuno qui" },
    } as Partial<Record<AmenityIcon, { en: string; it: string }>>,
  },
  booking: {
    title: { en: "Request a booking", it: "Richiedi una prenotazione" },
    body: { en: "Send us your dates. We reply within two hours with availability and our best direct rate.", it: "Inviaci le date. Rispondiamo entro due ore con disponibilità e la migliore tariffa diretta." },
    room: { en: "Room", it: "Camera" },
    anyRoom: { en: "Any available room", it: "Qualsiasi camera disponibile" },
    name: { en: "Full name", it: "Nome e cognome" },
    email: { en: "Email", it: "Email" },
    requests: { en: "Special requests", it: "Richieste particolari" },
    submit: { en: "Send request", it: "Invia richiesta" },
    nights: { en: "{n} nights", it: "{n} notti" },
    night: { en: "1 night", it: "1 notte" },
    estimate: { en: "Estimated from {total}", it: "Stima a partire da {total}" },
    invalidDates: { en: "Check-out must be after check-in.", it: "La partenza deve essere dopo l'arrivo." },
    required: { en: "Please fill in this field", it: "Compila questo campo" },
    confirmTitle: { en: "Thank you, request sent.", it: "Grazie, richiesta inviata." },
    confirmBody: { en: "{room}, {from} → {to}, {guests} guests. We'll email {email} within two hours.", it: "{room}, {from} → {to}, {guests} ospiti. Scriveremo a {email} entro due ore." },
    another: { en: "Start a new request", it: "Nuova richiesta" },
    demoNote: { en: "Demo only: no request is sent.", it: "Solo demo: nessuna richiesta viene inviata." },
    searchedFor: { en: "Showing availability for your dates", it: "Disponibilità per le tue date" },
  },
  location: {
    title: { en: "Where you'll be", it: "Dove sarai" },
    body: { en: "On foot to almost everything. Here's how far, at a stroll.", it: "A piedi quasi ovunque. Ecco quanto dista, passeggiando." },
    directions: { en: "Get directions", it: "Indicazioni stradali" },
    places: [
      { name: "Campo de' Fiori", time: { en: "4 min walk", it: "4 min a piedi" } },
      { name: "Ponte Sisto & Trastevere", time: { en: "6 min walk", it: "6 min a piedi" } },
      { name: "Piazza Navona", time: { en: "9 min walk", it: "9 min a piedi" } },
      { name: "Pantheon", time: { en: "14 min walk", it: "14 min a piedi" } },
      { name: "Vatican Museums", time: { en: "20 min walk", it: "20 min a piedi" } },
      { name: "Colosseum", time: { en: "12 min by taxi", it: "12 min in taxi" } },
      { name: "Fiumicino Airport", time: { en: "40 min by car", it: "40 min in auto" } },
    ],
  },
  gallery: {
    title: { en: "A look inside", it: "Uno sguardo dentro" },
    images: [
      { src: unsplash("1590490360182-c33d57733427"), alt: { en: "A classic room with a tufted sofa", it: "Una camera classica con divano capitonné" } },
      { src: unsplash("1631049307264-da0ec9d70304"), alt: { en: "A Deluxe room", it: "Una camera Deluxe" } },
      { src: unsplash("1529260830199-42c24126f198"), alt: { en: "St Peter's dome over the Tiber, ten minutes' walk away", it: "La cupola di San Pietro sul Tevere, a dieci minuti a piedi" } },
      { src: unsplash("1618773928121-c32242e63f39"), alt: { en: "A made bed in morning light", it: "Un letto rifatto nella luce del mattino" } },
      { src: unsplash("1611892440504-42a792e24d32"), alt: { en: "A warm-toned double room", it: "Una camera doppia dai toni caldi" } },
      { src: unsplash("1578683010236-d716f9a3f461"), alt: { en: "A suite with tall windows", it: "Una suite con finestre alte" } },
    ] as Img[],
  },
  reviews: {
    title: { en: "From our guests", it: "Dai nostri ospiti" },
    disclaimer: { en: "Sample reviews (placeholder)", it: "Recensioni di esempio (segnaposto)" },
    items: [
      { name: "Anna K.", country: "Germany", rating: 5, text: { en: "Silent at night, two minutes from everything. The breakfast terrace is a dream.", it: "Silenzioso di notte, a due minuti da tutto. La terrazza della colazione è un sogno." } },
      { name: "James & Priya", country: "UK", rating: 5, text: { en: "Booked direct after a WhatsApp chat, got a better rate and an upgrade. Faultless.", it: "Prenotato direttamente dopo una chat su WhatsApp: tariffa migliore e upgrade. Impeccabile." } },
      { name: "Marco B.", country: "Italia", rating: 4, text: { en: "Beautiful rooms full of character. Ask for a courtyard view.", it: "Camere bellissime e piene di carattere. Chiedete la vista sul cortile." } },
    ],
  },
  guide: {
    title: { en: "Things to do in Rome", it: "Cosa fare a Roma" },
    body: { en: "Our front desk's favourites, all within a short walk or ride.", it: "I preferiti della nostra reception, tutti a breve distanza." },
    items: [
      { title: { en: "The Colosseum at opening time", it: "Il Colosseo all'apertura" }, body: { en: "Go at 8:30 with pre-booked tickets and beat the crowds.", it: "Andate alle 8:30 con biglietti prenotati e battete la folla." }, distance: { en: "12 min by taxi", it: "12 min in taxi" }, image: { src: unsplash("1552832230-c0197dd311b5"), alt: { en: "The Colosseum", it: "Il Colosseo" } } },
      { title: { en: "St Peter's & the Vatican", it: "San Pietro e il Vaticano" }, body: { en: "Walk across Ponte Vittorio Emanuele II. Climb the dome for the view.", it: "Attraversate Ponte Vittorio Emanuele II. Salite sulla cupola per la vista." }, distance: { en: "20 min walk", it: "20 min a piedi" }, image: { src: unsplash("1531572753322-ad063cecc140"), alt: { en: "St Peter's Basilica", it: "La Basilica di San Pietro" } } },
      { title: { en: "Sunset on the Tiber", it: "Tramonto sul Tevere" }, body: { en: "Walk the river to Ponte Sant'Angelo for the classic view of St Peter's.", it: "Passeggiate lungo il fiume fino a Ponte Sant'Angelo per la vista classica su San Pietro." }, distance: { en: "10 min walk", it: "10 min a piedi" }, image: { src: unsplash("1529260830199-42c24126f198"), alt: { en: "St Peter's dome and Ponte Sant'Angelo at sunset", it: "La cupola di San Pietro e Ponte Sant'Angelo al tramonto" } } },
      { title: { en: "Trevi Fountain before breakfast", it: "Fontana di Trevi prima di colazione" }, body: { en: "Go before 8am and you'll have it almost to yourself.", it: "Andateci prima delle 8 e l'avrete quasi tutta per voi." }, distance: { en: "20 min walk", it: "20 min a piedi" }, image: { src: unsplash("1525874684015-58379d421a52"), alt: { en: "The Trevi Fountain", it: "La Fontana di Trevi" } } },
    ] as { title: { en: string; it: string }; body: { en: string; it: string }; distance: { en: string; it: string }; image: Img }[],
  },
  faq: {
    title: { en: "Good to know", it: "Buono a sapersi" },
    items: [
      { q: { en: "What are check-in and check-out times?", it: "Quali sono gli orari di check-in e check-out?" }, a: { en: "Check-in from 14:00, check-out by 11:00. We're happy to store luggage before and after.", it: "Check-in dalle 14:00, check-out entro le 11:00. Custodiamo volentieri i bagagli prima e dopo." } },
      { q: { en: "Is there parking?", it: "C'è un parcheggio?" }, a: { en: "Via Giulia is in the ZTL limited-traffic zone. We partner with a garage 300m away (€30/day) and can arrange valet.", it: "Via Giulia è in ZTL. Abbiamo una convenzione con un garage a 300 m (€30/giorno) e possiamo organizzare il valet." } },
      { q: { en: "Are pets welcome?", it: "Gli animali sono ammessi?" }, a: { en: "Small dogs are welcome in Classic and Deluxe rooms, €20 per stay. Let us know when booking.", it: "I cani di piccola taglia sono benvenuti nelle camere Classic e Deluxe, €20 a soggiorno. Avvisateci alla prenotazione." } },
      { q: { en: "What's the cancellation policy?", it: "Qual è la politica di cancellazione?" }, a: { en: "Free cancellation up to 48 hours before arrival on direct bookings. Non-refundable rates are 10% cheaper.", it: "Cancellazione gratuita fino a 48 ore prima dell'arrivo per le prenotazioni dirette. Le tariffe non rimborsabili costano il 10% in meno." } },
      { q: { en: "Is the city tax included?", it: "La tassa di soggiorno è inclusa?" }, a: { en: "Rome's city tax (€7.50 per person per night for 4-star hotels, up to 10 nights) is paid at the hotel.", it: "La tassa di soggiorno di Roma (€7,50 a persona a notte per i 4 stelle, fino a 10 notti) si paga in hotel." } },
    ],
  },
  contactSection: {
    whatsapp: { en: "Chat on WhatsApp", it: "Scrivici su WhatsApp" },
    call: { en: "Call reception", it: "Chiama la reception" },
    email: { en: "Email us", it: "Scrivici" },
  },
  footer: {
    fictional: { en: "Hotel Via Giulia is a fictional business, created as an example site by CPD Web Design.", it: "Hotel Via Giulia è un'attività immaginaria, creata come sito di esempio da CPD Web Design." },
  },
};
