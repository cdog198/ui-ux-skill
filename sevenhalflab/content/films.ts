import type { Film } from "./types";

// Sources: sevenhalflab.com/film/<slug>/ (production pages) and
// sevenhalflab.com/film-distribuzione/<slug>/ (distribution pages, which carry
// CATEGORIA / GENERE / NAZIONE and the festival lists). Copy is verbatim.
// Order follows the /cinema/ page, with the distribution-only title slotted in by year.

const P = "/media/posters";
const S = "/media/stills";

export const films: Film[] = [
  {
    slug: "solo-il-mare",
    title: "Solo il mare",
    format: "corto",
    formatSource: "site",
    roles: ["produzione", "distribuzione"],
    director: "Paola Beatrice Ortolani",
    year: 2026,
    runtime: 17,
    country: "Italia",
    genre: "Drammatico",
    // Distribution-page synopsis (the fuller one). The production page has a shorter variant, kept in notes.
    synopsis:
      "Sopravvissuto al naufragio del sommergibile Velella nel 1943, il soldato Mario emerge dal mare e trova rifugio a casa di Giovanni, un pescatore, e di sua figlia Emilia. In quel luogo sospeso e lontano dalla guerra, nasce un legame profondo, fragile riflesso di ciò che la guerra ha negato ad un’intera generazione.",
    credits: [
      { label: "Regia", names: "Paola Beatrice Ortolani" },
      { label: "Sceneggiatura", names: "Paola Beatrice Ortolani" },
      { label: "Cast", names: "Giovanni Battaglia, Maria Vittoria Dallasta, Andrea Palladino" },
      { label: "Fotografia", names: "Daniel Di Meo" },
      { label: "Montaggio", names: "Paola Beatrice Ortolani, Mario Sposito" },
      {
        label: "Produzione",
        names:
          "Sevenhalf Lab s.r.l. con il contributo del Ministero della Cultura e della Film Commission Campania, in co-produzione con Iaia s.r.l.",
      },
    ],
    selections: [
      { festival: "Briganti Film Festival", year: 2026 },
      { festival: "Alta Marea Festival", year: 2026, note: "Semi-finalista" },
      { festival: "Mediterraneo Festival Corto XVI Edizione", year: 2026 },
      { festival: "Corti di mare", year: 2026 },
    ],
    awards: [{ title: "Miglior fotografia", festival: "Briganti Film Festival", year: 2026 }],
    poster: `${P}/solo-il-mare.webp`,
    stills: [
      { src: `${S}/solo-il-mare-1.webp`, source: "still" },
      { src: `${S}/solo-il-mare-2.webp`, source: "still" },
      { src: `${S}/solo-il-mare-3.webp`, source: "still" },
    ],
    trailer: null, // TODO: ask client — the production page has a "Trailer" heading but no video embedded
    notes: [
      "Production page synopsis: “Sopravvissuto al naufragio del sommergibile Velella nel 1943, il soldato Mario trova rifugio a casa del pescatore Giovanni e di sua figlia Emilia. In quel luogo sospeso e lontano nasce un legame profondo, nel vuoto devastante della guerra.” Which one should be used?",
    ],
  },
  {
    slug: "acque-degli-imperatori",
    title: "Acque degli Imperatori",
    format: "documentario",
    formatSource: "site",
    roles: ["produzione"],
    director: "Paola Beatrice Ortolani",
    year: 2025,
    runtime: null, // TODO: ask client
    country: null, // TODO: ask client
    genre: null, // TODO: ask client
    synopsis:
      "Il documentario attraversa il suggestivo paesaggio della campagna laziale e i suoi monumenti storici, seguendo il percorso dell’acqua. Un viaggio che parte dai Monti Simbruini, dove si trovano le fonti, e arriva alle rive dell’Aniene, arricchito da interviste a esperti e studiosi del settore speleosubacqueo.",
    credits: [
      { label: "Regia", names: "Paola Beatrice Ortolani" },
      { label: "Cast", names: "Giulio Venditti" },
      { label: "Fotografia", names: "Paola Beatrice Ortolani" },
      { label: "Montaggio", names: "Paola Beatrice Ortolani" },
      { label: "Produzione", names: "Sevenhalf Lab s.r.l., Sfrix Underwater Project" },
    ],
    selections: [], // TODO: ask client — none listed on the site
    awards: [],
    poster: `${P}/acque-degli-imperatori.webp`,
    stills: [{ src: `${S}/trailer-cHCoUUAjgH4.webp`, source: "trailer" }],
    trailer: "cHCoUUAjgH4",
    notes: ["The poster still says “coming soon”. Is there an updated poster?"],
  },
  {
    slug: "macbeth-cuore-nero",
    title: "Macbeth – Cuore Nero",
    format: "documentario",
    formatSource: "site",
    roles: ["produzione", "distribuzione"],
    director: "Paola Beatrice Ortolani",
    year: 2025,
    runtime: null, // TODO: ask client — production page says 55′, distribution page says 26′
    country: "Italia",
    genre: "Documentario",
    synopsis:
      "Il documentario segue la messa in scena di “Macbeth” da parte di detenuti della casa di reclusione “Gennaro De Angelis” di Arienzo, con la partecipazione del magistrato di sorveglianza. Attraverso il teatro, i protagonisti condividono le loro storie personali e le emozioni legate alla loro vita in carcere. Il progetto mostra il potere riabilitativo del teatro, avvicinando il pubblico alla realtà carceraria e dimostrando come l’espressione creativa possa dare nuova luce a chi è spesso dimenticato.",
    credits: [
      { label: "Regia", names: "Paola Beatrice Ortolani" },
      {
        label: "Cast",
        names:
          "Marvellous Atuma, Antonio Cacciapuoti, Salvatore Canzanello, Roberto Capuozzo, Alfonso Cetta, Nicola D’angelo, Francesco Diana, Luigi Grassi, Antonio Parisi, Marco Puglia, Pasquale Ruocco, Riccardo Sergio, Davide Sivero",
      },
      { label: "Fotografia", names: "Paola Beatrice Ortolani" },
      { label: "Montaggio", names: "Paola Beatrice Ortolani, Edim Sting" },
      { label: "Produzione", names: "Sevenhalf Lab s.r.l." },
    ],
    selections: [
      { festival: "International Film Festival Prison Movie in Olsztyn", year: 2026 },
      { festival: "Ponza Film Festival", year: 2025 },
      { festival: "River Film Festival", year: 2025 },
      { festival: "Sàff Film Festival", year: 2025 },
      { festival: "Marte Film Festival", year: 2025, note: "Menzione speciale" },
      { festival: "Festival Internazionale del Cinema di Salerno", year: 2024 },
      { festival: "accordi@DISACCORDI International Film Festival", year: 2025 },
      { festival: "Festival del cinema italiano “Stelle D’Argento”", year: 2026, note: "Finalista" },
      { festival: "ÉCU The European Independent Film Festival", year: 2025 },
      { festival: "CineOFF International Film Festival", year: 2025 },
      { festival: "Impruneta Film Festival", year: 2025, note: "proiezione fuori concorso" },
      { festival: "Premio Carpine Visciano", year: 2025 },
      { festival: "Ostia Film Festival", year: 2025 },
      { festival: "Fermenti Short Docs", year: 2025 },
      { festival: "Napoli Film Festival", year: 2025 },
      { festival: "Terni Film Festival", year: 2025 },
    ],
    awards: [
      { title: "Resocial Recovery Values", festival: "International Film Festival Prison Movie in Olsztyn", year: 2026 },
      { title: "Best Social Issues Film", festival: "Ponza Film Festival", year: 2025 },
      { title: "Miglior documentario italiano", festival: "Festival Internazionale del Cinema di Salerno", year: 2024 },
      { title: "Premio del pubblico sezione Antropocene", festival: "River Film Festival", year: 2025 },
      { title: "Premio Cinema di comunità", festival: "Sàff Film Festival", year: 2025 },
    ],
    poster: `${P}/macbeth-cuore-nero.webp`,
    stills: [
      { src: `${S}/macbeth-cuore-nero-1.webp`, source: "still" },
      { src: `${S}/macbeth-cuore-nero-2.webp`, source: "still" },
      { src: `${S}/macbeth-cuore-nero-3.webp`, source: "still" },
    ],
    trailer: "IRZeuSa0T_o",
    notes: [
      "Runtime conflict: 55′ on /film/, 26′ on /film-distribuzione/. Two cuts?",
      "The distribution page sets CATEGORIA to “Cortometraggio” and GENERE to “Documentario”. It is filed here as documentario.",
    ],
  },
  {
    slug: "i-corpi-degli-altri",
    title: "I corpi degli altri",
    format: "corto",
    formatSource: "site",
    roles: ["distribuzione"],
    director: "Gabriele Piccolo",
    year: 2025,
    runtime: 24,
    country: "Italia",
    genre: "Drammatico",
    synopsis:
      "Tommi, scappato di casa, si è unito a una comunità in attesa di partire per un viaggio che sogna da sempre. Fuggito da una vita dolorosa e insoddisfacente è ora arrivato il momento di mettersi alla guida e raggiungere l’aeroporto, prendere quel volo e non tornare più indietro.",
    credits: [
      { label: "Regia", names: "Gabriele Piccolo" },
      { label: "Sceneggiatura", names: "Gabriele Piccolo" },
      { label: "Cast", names: "Thomas Borgatti, Manuel Benati, Barbara Vanni, Giovanni Piccolo, Angelica Valbonesi" },
      { label: "Produzione", names: "Blow-up Academy" },
    ],
    selections: [], // TODO: ask client — none listed yet
    awards: [],
    poster: `${P}/i-corpi-degli-altri.webp`,
    stills: [
      { src: `${S}/i-corpi-degli-altri-1.webp`, source: "still" },
      { src: `${S}/i-corpi-degli-altri-2.webp`, source: "still" },
      { src: `${S}/i-corpi-degli-altri-3.webp`, source: "still" },
    ],
    trailer: null, // TODO: ask client
  },
  {
    slug: "lento",
    title: "Lento",
    format: "corto",
    formatSource: "site",
    roles: ["produzione", "distribuzione"],
    director: "Edoardo Sandulli",
    year: 2024,
    runtime: 19,
    country: "Italia",
    genre: "Drammatico",
    synopsis:
      "In seguito alla morte di suo marito e partner di ballo durante il terremoto del 1980, un’ex campionessa irpina di valzer lento si chiude in casa per più di quarant’anni. Non sembra intenzionata ad uscire da quella prigione, ma forse un giovane vicino riuscirà a spingerla a cambiare idea.",
    credits: [
      { label: "Regia", names: "Edoardo Sandulli" },
      { label: "Sceneggiatura", names: "Edoardo Sandulli" },
      { label: "Cast", names: "Marina Suma, Amato D’Auria" },
      { label: "Fotografia", names: "Daniel Di Meo" },
      { label: "Montaggio", names: "Edoardo Sandulli" },
      { label: "Musiche", names: "Luca Fiorillo, Sossio Noviello" },
      {
        label: "Produzione",
        names: "Sevenhalf Lab s.r.l. con il contributo della Film Commission Regione Campania e di Daniel Pallucca",
      },
    ],
    selections: [
      { festival: "Sàff Film Festival", year: 2025 },
      { festival: "Premio Carpine Visciano", year: 2025 },
      { festival: "Cefalù Film Festival", year: 2025 },
      { festival: "Sezze Film Festival", year: 2025 },
      { festival: "SHORT SESSION International Contest for Short Films", year: 2025 },
      { festival: "Apollo Film Festival", year: 2025 },
      { festival: "Aurora Film Festival", year: 2025 },
      { festival: "Ostia Film Festival", year: 2025 },
      { festival: "CineOFF International Film Festival", year: 2025 },
      { festival: "Napoli Film Festival", year: 2025 },
      { festival: "Laceno d’Oro", year: 2025, note: "proiezione fuori concorso" },
      { festival: "Mosaico LongTake Film Festival", year: 2025 },
      { festival: "Moonlight Short Film Festival", year: 2025 },
      { festival: "Lo Spiraglio Film Festival", year: 2025 },
      { festival: "Marte Film Festival", year: 2025 },
      { festival: "Asti Film Festival", year: 2025 },
      { festival: "Basilicata International Film Festival", year: 2025 },
      { festival: "Festival Internazionale del Cinema di Salerno", year: 2025 },
      { festival: "Theta Short Film Festival", year: 2025 },
      { festival: "Ciak Napoli Festival", year: 2025 },
      { festival: "Corto Dino Film Festival", year: 2025 },
    ],
    awards: [{ title: "Miglior talento campano", festival: "Corto Dino Film Festival", year: 2025 }],
    poster: `${P}/lento.webp`,
    stills: [
      { src: `${S}/lento-1.webp`, source: "still" },
      { src: `${S}/lento-2.webp`, source: "still" },
      { src: `${S}/lento-3.webp`, source: "still" },
    ],
    trailer: "ISq8BGFlcrU",
  },
  {
    slug: "oltre-la-linea-storie-scolpite-nella-roccia",
    title: "Oltre la linea – Storie scolpite nella roccia",
    format: "documentario",
    formatSource: "site",
    roles: ["produzione"],
    director: "Paola Beatrice Ortolani",
    year: 2024,
    runtime: 14,
    country: null, // TODO: ask client
    genre: null, // TODO: ask client
    synopsis:
      "Oltre la linea – Storie scolpite nella roccia segue un gruppo di speleologi che esplora la Grotta del Cavallone, un luogo che custodisce numerose tracce del passato, tra cui iscrizioni lasciate dai rifugiati durante la Seconda Guerra Mondiale. Il documentario ripercorre la storia di quel periodo attraverso le testimonianze di coloro che hanno vissuto quegli eventi, compreso un anziano signore che ha anche costruito la funivia che oggi permette l’accesso alla grotta. Un viaggio tra passato e presente, dove la memoria di quei momenti storici riaffiora attraverso la roccia e le voci di coloro che hanno contribuito a scrivere questo capitolo della storia.",
    credits: [
      { label: "Regia", names: "Paola Beatrice Ortolani" },
      { label: "Soggetto", names: "Giulio Venditti" },
      { label: "Produzione", names: "Sevenhalf Lab s.r.l., Sfrix Underwater Project" },
      // TODO: ask client — the CAST field is present on the site but empty
    ],
    selections: [], // TODO: ask client
    awards: [],
    poster: `${P}/oltre-la-linea.webp`,
    stills: [{ src: `${S}/trailer-DVJ2k-Xz8vc.webp`, source: "trailer" }],
    trailer: "DVJ2k-Xz8vc",
  },
  {
    slug: "fratelli-di-carne",
    title: "Fratelli di carne",
    format: "corto",
    formatSource: "site", // "Chi siamo": "due cortometraggi: Fratelli di Carne … e Lento"
    roles: ["produzione"],
    director: "Paola Beatrice Ortolani",
    year: 2023,
    runtime: 19,
    country: null, // TODO: ask client
    genre: null, // TODO: ask client
    synopsis:
      "Michele, un uomo di settantacinque anni emigrato in America, decide di tornare al Paese di origine dopo la morte della moglie, per la prima volta dopo cinquant’anni. Dovrà affrontare le ombre del proprio passato per ritrovare la pace interiore.",
    credits: [
      { label: "Regia", names: "Paola Beatrice Ortolani" },
      { label: "Sceneggiatura", names: "Paola Beatrice Ortolani" },
      { label: "Cast", names: "Dora Romano, Giovanni Battaglia, Corrado Taranto, Amato D’Auria, Simona Buono, Francesco Barra" },
      { label: "Fotografia", names: "Daniel Di Meo" },
      { label: "Montaggio", names: "Paola Beatrice Ortolani, Edim Sting" },
      { label: "Musiche", names: "Sossio Noviello" },
      { label: "Produzione", names: "Sevenhalf Lab s.r.l. con il contributo della Film Commission Regione Campania" },
    ],
    selections: [], // TODO: ask client
    awards: [],
    poster: `${P}/fratelli-di-carne.webp`,
    stills: [{ src: `${S}/trailer-PNbx5nh0Y4Q.webp`, source: "trailer" }],
    trailer: "PNbx5nh0Y4Q",
  },
  {
    slug: "models-runway-academy",
    title: "Models Runway Academy",
    format: "serie",
    formatSource: "site", // "Chi siamo": "reality show … in onda su Amazon Prime Video USA"
    roles: ["produzione esecutiva"],
    director: "Luca Guardabascio",
    year: 2023,
    runtime: null, // TODO: ask client (episodes / episode length)
    country: null, // TODO: ask client
    genre: "Reality show",
    synopsis:
      "Dodici aspiranti modelle competono in prove pratiche e teoriche per diventare modelle. Un percorso seguito da coach internazionali. Prove di postura, recitazione, trucco e posa fotografica. Solo una verrà scelta.",
    credits: [
      { label: "Regia", names: "Luca Guardabascio" },
      { label: "Fotografia", names: "Daniel Di Meo, Mario Sposito" },
      { label: "Montaggio", names: "Paola Beatrice Ortolani, Mario Sposito" },
      { label: "Produzione", names: "PG Consulting" },
      { label: "Produzione esecutiva", names: "Sevenhalf Lab s.r.l." },
      { label: "Distribuzione", names: "Amazon Prime Video USA" },
    ],
    selections: [],
    awards: [],
    poster: `${P}/models-runway-academy.webp`,
    stills: [{ src: `${S}/trailer-8PkwcARhZxE.webp`, source: "trailer" }],
    trailer: "8PkwcARhZxE",
  },
  {
    slug: "mami-wata",
    title: "Mami Wata",
    format: "corto",
    formatSource: "inferred", // TODO: ask client — the site never labels it; 8′ runtime
    roles: ["produzione"],
    director: "Paola Beatrice Ortolani",
    year: 2021,
    runtime: 8,
    country: null, // TODO: ask client
    genre: null, // TODO: ask client
    synopsis:
      "Gaia vive con la nonna in una casa rurale e ha un legame speciale con una pianta di gigli bianchi che cura con dedizione. Cristina, figlia di un potente imprenditore, si sente diversa a causa della sua pelle albina. Quando suo padre si interessa al terreno della nonna di Gaia, Cristina si ribella, dando vita a un’amicizia pura e semplice. Mami Wata, dal nome di una divinità africana, simboleggia la dualità della natura: pura, incontaminata, ribelle e libera.",
    credits: [
      { label: "Regia", names: "Paola Beatrice Ortolani" },
      { label: "Sceneggiatura", names: "Paola Beatrice Ortolani" },
      { label: "Cast", names: "Heyab Aglione, Cristina D’Alessandro, Gianfranco Gallo, Simona Buono" },
      { label: "Fotografia", names: "Daniel Di Meo" },
      { label: "Montaggio", names: "Paola Beatrice Ortolani" },
      { label: "Musiche", names: "Sossio Noviello" },
      { label: "Produzione", names: "Sevenhalf Lab s.r.l. con BCC – Banca di Credito Cooperativo di Buccino e dei Comuni Cilentani" },
    ],
    selections: [], // TODO: ask client
    awards: [],
    poster: `${P}/mami-wata.webp`,
    stills: [{ src: `${S}/trailer-RjzKKBxblFQ.webp`, source: "trailer" }],
    trailer: "RjzKKBxblFQ",
    notes: ["Sevenhalf Lab was founded in 2022 (Chi siamo) but this title is dated 2021. Confirm the credit/year."],
  },
];

export const formats = [
  { key: "corto", slug: "corti", label: "corti" },
  { key: "documentario", slug: "documentari", label: "documentari" },
  { key: "serie", slug: "serie", label: "serie" },
  // "lungometraggio": no feature on the site yet. Add here once there is one.
] as const;

export const getFilm = (slug: string) => films.find((f) => f.slug === slug);
