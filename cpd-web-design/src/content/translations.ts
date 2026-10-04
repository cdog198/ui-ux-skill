/**
 * ───────────────────────────────────────────────────────────────
 *  ALL MAIN-SITE COPY (English + Italian)
 *  Keep both languages in sync: `it` must have the same shape as `en`
 *  (TypeScript will complain if a key is missing).
 *  Tokens like {price}, {months}, {fee}, {name} are filled in from src/config/site.ts.
 *
 *  Voice: first person, plain, specific. Say what happens, not slogans.
 * ───────────────────────────────────────────────────────────────
 */

const en = {
  meta: {
    title: "CPD Web Design: your website, built free. You just pay to keep it running.",
    description:
      "Web designer in Rome. I design and build your business website for free, then charge a flat monthly fee for hosting, updates, changes and support. English and Italian.",
  },
  nav: {
    how: "How it works",
    pricing: "Prices",
    work: "Work",
    examples: "Examples",
    faq: "FAQ",
    about: "About",
    cta: "Get your free site",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    language: "Language",
  },
  hero: {
    titleA: "Your website,",
    titleB: "built free.",
    sub: "You just pay to keep it running.",
    body: "I'm a web designer in Rome. I'll design and build a website for your business with nothing to pay up front. After that it's a flat monthly fee, and I host it, keep it secure and make changes whenever you ask.",
    cta: "Get your free site",
    secondary: "See example sites",
  },
  receipt: {
    doc: "DOCUMENTO COMMERCIALE",
    docSub: "di vendita o prestazione",
    description: "DESCRIPTION",
    price: "PRICE (€)",
    lines: [
      ["Website design", "0,00"],
      ["Development", "0,00"],
      ["Setup and launch", "0,00"],
      ["Help with text and photos", "0,00"],
    ],
    total: "TOTAL",
    vat: "of which VAT",
    payment: "Payment",
    paymentValue: "none",
    then: "Then each month",
    from: "from {price}",
    covers: "hosting, SSL, backups, changes, support",
  },
  how: {
    title: "How it works",
    steps: [
      { title: "We talk", body: "Twenty minutes on the phone or over a coffee. You tell me what the business does and what the site needs to do. There's no charge and no commitment." },
      { title: "I design and build it", body: "Usually within two weeks. I write or tidy up the text, sort out the photos and build it to work properly on phones. You see it first and tell me what to change." },
      { title: "It goes live", body: "I connect your domain, set up your Google Business Profile and analytics, and switch it on." },
      { title: "I look after it", body: "Every month I handle hosting, updates and backups, and make the changes you send me. New price or new photo? Send it on WhatsApp." },
    ],
  },
  included: {
    title: "What the monthly fee covers",
    intro: "Everything a site needs after launch. Most agencies charge for these separately.",
    items: [
      { key: "hosting", title: "Hosting", body: "Fast, reliable hosting. You never have to deal with a hosting company." },
      { key: "ssl", title: "SSL and security", body: "The padlock in the address bar, and security updates applied as soon as they're released." },
      { key: "maintenance", title: "Updates", body: "Software and integrations kept current, so nothing quietly stops working." },
      { key: "backups", title: "Daily backups", body: "If something breaks, I restore yesterday's version." },
      { key: "edits", title: "Changes", body: "New menu, new prices, new photos. Send them over and I'll update the site." },
      { key: "support", title: "Support", body: "Me, on WhatsApp or email, in English or Italian." },
      { key: "speed", title: "Speed", body: "Compressed images and lean code, so pages open quickly on a phone signal." },
      { key: "mobile", title: "Phones first", body: "Most people will find you on a phone, so that's what I design for first." },
    ],
  },
  pricing: {
    title: "Prices",
    intro: "Every plan includes the design and build. The difference is how big the site is and how much I do for you each month.",
    perMonth: "/month",
    vat: "+ VAT",
    popular: "Most popular",
    choose: "Choose {name}",
    termTitle: "There's a {months}-month minimum term.",
    termBody:
      "That's how the design and build get paid for without an upfront fee. After {months} months it's month to month, and you can cancel with 30 days' notice.",
    compareTitle: "Compared with a typical agency",
    compareIntro: "What a small business website usually costs in its first year.",
    agency: "Typical agency",
    you: "CPD Web Design",
    rows: {
      build: "Design and build",
      hosting: "Hosting and SSL",
      maintenance: "Maintenance",
      edits: "Changes",
      support: "Support",
      dueToday: "Due today",
      yearOne: "First year",
    },
    perMonthShort: "/mo",
    billed: "by the hour",
    included: "included",
    basedOn: "Based on the {name} plan. Agency figures are typical for small Italian businesses.",
  },
  catch: {
    title: "What's the catch?",
    points: [
      {
        title: "There's a minimum term",
        body: "{months} months. That's how I get paid for the design and build without charging you up front. After that it's month to month.",
      },
      {
        title: "I host the site",
        body: "It runs on my hosting so I can keep it fast, secure and up to date. You never have to touch a server, a plugin or a password reset.",
      },
      {
        title: "You can leave",
        body: "Your domain and your content are always yours. After the minimum term you can take the whole site with you for a one-off {fee}, or simply cancel.",
      },
    ],
  },
  industries: {
    title: "What you get for a restaurant or a hotel",
    intro: "Every feature below works in the example sites. Each one is marked with the cheapest plan that includes it.",
    feature: "Feature",
    yes: "Included",
    no: "Not included",
    demo: "Open the {name} example",
    note: "Need something that isn't listed? Most features can be added to any plan.",
  },
  work: {
    title: "Recent work",
    intro: "Two of these are example sites I built to show what a restaurant or a hotel would get.",
    visit: "Visit site",
    view: "Open example",
    soon: "Case study coming soon",
  },
  examples: {
    title: "Example sites",
    intro:
      "Complete, working websites for two made-up businesses in Rome, built the way I'd build yours. Try the language switch and the booking forms, and turn on Features to see what each part is for and which plan includes it.",
    open: "Open example",
    more: "Salon, gym and shop examples are on the way. If you run one, I'd like to hear from you.",
    ask: "Get in touch",
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "What's the catch?",
        a: "There's a {months}-month minimum term, which is how the design and build are paid for over time instead of up front. I host and maintain the site so it stays fast and secure. After the minimum term it's month to month, and you can leave whenever you like.",
      },
      {
        q: "Who owns the site?",
        a: "Your domain, your content (text, photos, logo) and your data are always yours. The design and code are licensed to you while you're on a plan. After the minimum term you can buy them outright for a one-off {fee} and host them anywhere.",
      },
      {
        q: "What if I want to cancel?",
        a: "After the minimum term, give 30 days' notice. There's no penalty. If you cancel during the minimum term, the remaining months are still due, as with any fixed-term contract.",
      },
      {
        q: "Can I get my domain back?",
        a: "It's always yours. I register domains in your name, or use the one you already have, and I'll transfer it to you or a new provider whenever you ask, at no cost.",
      },
      {
        q: "How long does it take?",
        a: "Most sites go live one to two weeks after we first talk. A one-page Starter site can be ready in a few days; a Pro site with bookings takes two to three weeks. The main thing that slows it down is gathering photos and text, and I help with both.",
      },
      {
        q: "Do you build sites in Italian?",
        a: "Yes. I work in English and Italian and can build your site in either language or both, with a language switch like the one on this site. Two languages are included in the Pro plan and can be added to the others.",
      },
      {
        q: "What counts as a small change?",
        a: "Anything that takes up to about 30 minutes: changing text, prices or opening hours, swapping photos, adding a dish or an event. New pages and new features are quoted separately, or included if you move up a plan.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes, whenever you like. Upgrades take effect straight away; downgrades from the following month.",
      },
    ],
  },
  about: {
    title: "About me",
    paragraphs: [
      "I'm {name}, a designer and developer based in Rome. I've built websites for small businesses for years, and kept seeing the same thing: thousands paid up front for a site that nobody looked after once it launched.",
      "So I changed how I charge. I build the site properly for free, and I'm paid each month for keeping it working. If your site isn't doing its job, I hear about it.",
      "I work with restaurants, hotels, studios and shops in Rome and further afield, in English and Italian.",
    ],
    photoAlt: "Photo of {name}",
    photoPlaceholder: "Your photo here",
  },
  contact: {
    title: "Get in touch",
    intro: "Tell me about your business and what you need. I reply within one working day.",
    whatsapp: "WhatsApp me",
    email: "Email me",
    or: "Or send a message here:",
    form: {
      name: "Your name",
      business: "Business name",
      email: "Email",
      need: "What do you need?",
      needPlaceholder: "For example: a site for my restaurant with the menu and online bookings",
      tier: "Which plan are you thinking of?",
      notSure: "Not sure yet",
      consent: "I agree to my details being used to reply to this enquiry, as described in the",
      privacy: "privacy policy",
      submit: "Send enquiry",
      sending: "Sending…",
      successTitle: "Enquiry sent",
      successBody: "Thanks. I'll reply within one working day.",
      error: "Your enquiry couldn't be sent. Check your connection and try again, or email me directly.",
      required: "Fill in this field",
      invalidEmail: "Enter an email address like name@example.com",
    },
  },
  footer: {
    vat: "VAT no.",
    privacy: "Privacy",
    based: "Based in Rome, working in English and Italian.",
  },
  examplesPage: {
    back: "Back to CPD Web Design",
  },
  privacyPage: {
    title: "Privacy policy",
    placeholder:
      "PLACEHOLDER: replace this page with your real privacy policy (GDPR). It should explain who you are, what data the contact form collects (name, business, email, message, preferred plan), why (to reply to enquiries), how long you keep it, which processors you use (e.g. Formspree, Vercel), and how people can access or delete their data.",
  },
  notFound: {
    title: "This page doesn't exist",
    body: "The link may be old or mistyped.",
    home: "Go to the home page",
  },
};

export type Dict = typeof en;

const it: Dict = {
  meta: {
    title: "CPD Web Design: il tuo sito, realizzato gratis. Paghi solo per tenerlo attivo.",
    description:
      "Web designer a Roma. Progetto e realizzo gratis il sito della tua attività, poi un canone mensile fisso copre hosting, aggiornamenti, modifiche e assistenza. Italiano e inglese.",
  },
  nav: {
    how: "Come funziona",
    pricing: "Prezzi",
    work: "Lavori",
    examples: "Esempi",
    faq: "Domande",
    about: "Chi sono",
    cta: "Il tuo sito gratis",
    menu: "Menu",
    close: "Chiudi",
    skip: "Vai al contenuto",
    language: "Lingua",
  },
  hero: {
    titleA: "Il tuo sito,",
    titleB: "fatto gratis.",
    sub: "Paghi solo per tenerlo attivo.",
    body: "Sono un web designer a Roma. Progetto e realizzo il sito della tua attività senza farti pagare nulla all'inizio. Poi c'è un canone mensile fisso: io lo ospito, lo tengo sicuro e faccio le modifiche quando me le chiedi.",
    cta: "Il tuo sito gratis",
    secondary: "Guarda i siti di esempio",
  },
  receipt: {
    doc: "DOCUMENTO COMMERCIALE",
    docSub: "di vendita o prestazione",
    description: "DESCRIZIONE",
    price: "PREZZO (€)",
    lines: [
      ["Design del sito", "0,00"],
      ["Sviluppo", "0,00"],
      ["Attivazione e lancio", "0,00"],
      ["Aiuto con testi e foto", "0,00"],
    ],
    total: "TOTALE COMPLESSIVO",
    vat: "di cui IVA",
    payment: "Pagamento",
    paymentValue: "nessuno",
    then: "Poi ogni mese",
    from: "da {price}",
    covers: "hosting, SSL, backup, modifiche, assistenza",
  },
  how: {
    title: "Come funziona",
    steps: [
      { title: "Ci sentiamo", body: "Venti minuti al telefono o davanti a un caffè. Mi racconti cosa fa la tua attività e cosa deve fare il sito. Gratis e senza impegno." },
      { title: "Lo progetto e lo realizzo", body: "Di solito entro due settimane. Scrivo o sistemo i testi, preparo le foto e lo costruisco perché funzioni bene sul telefono. Lo vedi per primo e mi dici cosa cambiare." },
      { title: "Va online", body: "Collego il dominio, configuro la scheda Google Business e le statistiche, e lo pubblico." },
      { title: "Me ne occupo io", body: "Ogni mese gestisco hosting, aggiornamenti e backup, e faccio le modifiche che mi mandi. Prezzo nuovo o foto nuova? Mandamela su WhatsApp." },
    ],
  },
  included: {
    title: "Cosa copre il canone mensile",
    intro: "Tutto ciò che serve a un sito dopo il lancio. Molte agenzie lo fanno pagare a parte.",
    items: [
      { key: "hosting", title: "Hosting", body: "Hosting veloce e affidabile. Non devi mai avere a che fare con un fornitore di hosting." },
      { key: "ssl", title: "SSL e sicurezza", body: "Il lucchetto nella barra degli indirizzi e gli aggiornamenti di sicurezza appena escono." },
      { key: "maintenance", title: "Aggiornamenti", body: "Software e integrazioni sempre aggiornati, così niente smette di funzionare di nascosto." },
      { key: "backups", title: "Backup giornalieri", body: "Se qualcosa si rompe, ripristino la versione del giorno prima." },
      { key: "edits", title: "Modifiche", body: "Nuovo menu, nuovi prezzi, nuove foto. Me li mandi e aggiorno il sito." },
      { key: "support", title: "Assistenza", body: "Io, su WhatsApp o via email, in italiano o in inglese." },
      { key: "speed", title: "Velocità", body: "Immagini compresse e codice leggero, così le pagine si aprono in fretta anche con poco segnale." },
      { key: "mobile", title: "Prima il telefono", body: "Quasi tutti ti troveranno dal telefono, quindi progetto prima per quello." },
    ],
  },
  pricing: {
    title: "Prezzi",
    intro: "Ogni piano include design e sviluppo. Cambiano le dimensioni del sito e quanto faccio per te ogni mese.",
    perMonth: "/mese",
    vat: "+ IVA",
    popular: "Il più scelto",
    choose: "Scegli {name}",
    termTitle: "La durata minima è di {months} mesi.",
    termBody:
      "È così che design e sviluppo vengono pagati senza un costo iniziale. Dopo {months} mesi si va mese per mese, e puoi disdire con 30 giorni di preavviso.",
    compareTitle: "Rispetto a un'agenzia tipica",
    compareIntro: "Quanto costa di solito il sito di una piccola attività nel primo anno.",
    agency: "Agenzia tipica",
    you: "CPD Web Design",
    rows: {
      build: "Design e sviluppo",
      hosting: "Hosting e SSL",
      maintenance: "Manutenzione",
      edits: "Modifiche",
      support: "Assistenza",
      dueToday: "Da pagare oggi",
      yearOne: "Primo anno",
    },
    perMonthShort: "/mese",
    billed: "a ore",
    included: "incluso",
    basedOn: "Calcolato sul piano {name}. Le cifre dell'agenzia sono tipiche per le piccole attività italiane.",
  },
  catch: {
    title: "Dov'è la fregatura?",
    points: [
      {
        title: "C'è una durata minima",
        body: "{months} mesi. È così che vengo pagato per design e sviluppo senza chiederti nulla all'inizio. Dopo si va mese per mese.",
      },
      {
        title: "Il sito lo ospito io",
        body: "Gira sul mio hosting, così posso tenerlo veloce, sicuro e aggiornato. Non devi mai toccare un server, un plugin o una password.",
      },
      {
        title: "Puoi andartene",
        body: "Il dominio e i contenuti sono sempre tuoi. Dopo la durata minima puoi portarti via tutto il sito con un pagamento unico di {fee}, oppure semplicemente disdire.",
      },
    ],
  },
  industries: {
    title: "Cosa ottieni per un ristorante o un hotel",
    intro: "Tutte le funzioni qui sotto sono attive nei siti di esempio. Per ognuna è indicato il piano più economico che la include.",
    feature: "Funzione",
    yes: "Incluso",
    no: "Non incluso",
    demo: "Apri l'esempio {name}",
    note: "Ti serve qualcosa che non è in elenco? Quasi tutte le funzioni si possono aggiungere a qualsiasi piano.",
  },
  work: {
    title: "Lavori recenti",
    intro: "Due di questi sono siti di esempio che ho realizzato per mostrare cosa avrebbe un ristorante o un hotel.",
    visit: "Visita il sito",
    view: "Apri l'esempio",
    soon: "Case study in arrivo",
  },
  examples: {
    title: "Siti di esempio",
    intro:
      "Siti completi e funzionanti per due attività immaginarie a Roma, realizzati come realizzerei il tuo. Prova il cambio lingua e i moduli di prenotazione, e attiva Funzioni per vedere a cosa serve ogni parte e quale piano la include.",
    open: "Apri l'esempio",
    more: "Stanno arrivando esempi per saloni, palestre e negozi. Se ne gestisci uno, scrivimi.",
    ask: "Contattami",
  },
  faq: {
    title: "Domande",
    items: [
      {
        q: "Dov'è la fregatura?",
        a: "C'è una durata minima di {months} mesi: è così che design e sviluppo vengono pagati nel tempo invece che all'inizio. Io ospito e mantengo il sito perché resti veloce e sicuro. Dopo la durata minima si va mese per mese e puoi andartene quando vuoi.",
      },
      {
        q: "Di chi è il sito?",
        a: "Il dominio, i contenuti (testi, foto, logo) e i dati sono sempre tuoi. Il design e il codice ti sono concessi in licenza finché hai un piano attivo. Dopo la durata minima puoi acquistarli con un pagamento unico di {fee} e ospitarli dove vuoi.",
      },
      {
        q: "E se voglio disdire?",
        a: "Dopo la durata minima basta un preavviso di 30 giorni, senza penali. Se disdici durante la durata minima, i mesi restanti sono comunque dovuti, come in qualsiasi contratto a termine.",
      },
      {
        q: "Posso riavere il mio dominio?",
        a: "È sempre tuo. Registro i domini a tuo nome, oppure uso quello che hai già, e lo trasferisco a te o a un nuovo fornitore quando vuoi, gratuitamente.",
      },
      {
        q: "Quanto tempo ci vuole?",
        a: "La maggior parte dei siti va online una o due settimane dopo la prima chiacchierata. Un sito Starter di una pagina può essere pronto in pochi giorni; un sito Pro con prenotazioni richiede due o tre settimane. Di solito rallenta solo la raccolta di foto e testi, e ti aiuto con entrambi.",
      },
      {
        q: "Fai siti in italiano?",
        a: "Sì. Lavoro in italiano e in inglese e posso realizzare il sito in una lingua o in entrambe, con un cambio lingua come quello di questo sito. Due lingue sono incluse nel piano Pro e si possono aggiungere agli altri.",
      },
      {
        q: "Cosa si intende per piccola modifica?",
        a: "Tutto ciò che richiede fino a circa 30 minuti: cambiare testi, prezzi o orari, sostituire foto, aggiungere un piatto o un evento. Nuove pagine e nuove funzioni si preventivano a parte, oppure sono incluse passando a un piano superiore.",
      },
      {
        q: "Posso cambiare piano più avanti?",
        a: "Sì, quando vuoi. Il passaggio a un piano superiore vale subito; quello a un piano inferiore dal mese successivo.",
      },
    ],
  },
  about: {
    title: "Chi sono",
    paragraphs: [
      "Sono {name}, designer e sviluppatore a Roma. Da anni realizzo siti per piccole attività, e vedevo sempre la stessa cosa: migliaia di euro pagati all'inizio per un sito che nessuno curava più dopo il lancio.",
      "Così ho cambiato il modo in cui mi faccio pagare. Realizzo il sito come si deve, gratis, e vengo pagato ogni mese per farlo funzionare. Se il tuo sito non fa il suo lavoro, lo vengo a sapere.",
      "Lavoro con ristoranti, hotel, studi e negozi a Roma e altrove, in italiano e in inglese.",
    ],
    photoAlt: "Foto di {name}",
    photoPlaceholder: "La tua foto qui",
  },
  contact: {
    title: "Contattami",
    intro: "Raccontami della tua attività e di cosa hai bisogno. Rispondo entro un giorno lavorativo.",
    whatsapp: "Scrivimi su WhatsApp",
    email: "Mandami una email",
    or: "Oppure scrivimi qui:",
    form: {
      name: "Il tuo nome",
      business: "Nome dell'attività",
      email: "Email",
      need: "Di cosa hai bisogno?",
      needPlaceholder: "Per esempio: un sito per il mio ristorante con il menu e le prenotazioni online",
      tier: "A quale piano stai pensando?",
      notSure: "Non so ancora",
      consent: "Acconsento all'uso dei miei dati per rispondere a questa richiesta, come descritto nella",
      privacy: "privacy policy",
      submit: "Invia richiesta",
      sending: "Invio in corso…",
      successTitle: "Richiesta inviata",
      successBody: "Grazie. Ti rispondo entro un giorno lavorativo.",
      error: "Non è stato possibile inviare la richiesta. Controlla la connessione e riprova, oppure scrivimi via email.",
      required: "Compila questo campo",
      invalidEmail: "Inserisci un indirizzo email come nome@esempio.it",
    },
  },
  footer: {
    vat: "P.IVA",
    privacy: "Privacy",
    based: "Lavoro da Roma, in italiano e in inglese.",
  },
  examplesPage: {
    back: "Torna a CPD Web Design",
  },
  privacyPage: {
    title: "Privacy policy",
    placeholder:
      "SEGNAPOSTO: sostituisci questa pagina con la tua privacy policy reale (GDPR). Deve spiegare chi sei, quali dati raccoglie il modulo di contatto (nome, attività, email, messaggio, piano preferito), perché (per rispondere alle richieste), per quanto tempo li conservi, quali fornitori usi (es. Formspree, Vercel) e come accedere ai propri dati o cancellarli.",
  },
  notFound: {
    title: "Questa pagina non esiste",
    body: "Il link potrebbe essere vecchio o scritto male.",
    home: "Vai alla home page",
  },
};

export const translations = { en, it };
