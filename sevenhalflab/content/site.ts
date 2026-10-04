import type { Photo } from "./types";

// Site-wide copy, verbatim from sevenhalflab.com unless a line is marked
// "// new:", which means rewritten/shortened for the new layout. Every "new" line is
// built only from facts already on the site.

export const company = {
  name: "Sevenhalf Lab",
  legalName: "Sevenhalf Lab s.r.l.",
  founded: 2022,
  city: "Napoli",
  vat: "10026241215",
  email: "info@sevenhalflab.com",
  phone: "+39 338 243 2952",
  address: null, // TODO: ask client — no street address on the site
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/sevenhalf_lab/" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCrVSYaWKGsbnK7F8u2ZrFiA" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100091432094685" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sevenhalf-lab-srl/" },
  ],
};

export const home = {
  // Site tagline, lower-cased and broken by hand for the hero.
  statement: ["non inquina,", "non sfrutta,", "non esclude."],
  statementLead: "cinema sostenibile:",
  // new: compressed from “casa di produzione cinematografica e audiovisiva indipendente con sede a Napoli”
  line: "produzione cinematografica e audiovisiva indipendente, a Napoli.",
  quote: { text: "Il visionario è l'unico realista", author: "Federico Fellini" },
  intro:
    "Siamo una casa di produzione cinematografica e audiovisiva indipendente con sede a Napoli. Il nostro team è composto da giovani creativi appassionati e competenti, pronti a lavorare con cura su ogni progetto, trasformando idee in realtà con un’attenzione costante alla sostenibilità, al rispetto dei territori e delle persone.",
  services: [
    {
      title: "Produzione cinematografica",
      text: "Seguiamo ogni fase del processo creativo: dalla scrittura allo sviluppo, dalle riprese alla post-produzione, per garantire un prodotto finale di alta qualità.",
      href: "/cinema",
    },
    {
      title: "Fotografie e video subacquei",
      text: "Esploriamo gli abissi con attrezzature professionali, catturando la bellezza del mondo sottomarino e subacqueo. Realizziamo riprese per documentari, cortometraggi, progetti artistici e shooting creativi.",
      href: "/subacquea",
    },
    {
      title: "Contenuti audiovisivi",
      text: "Sviluppiamo contenuti su misura: spot pubblicitari, video musicali, branded content e storytelling aziendali. Ogni progetto è pensato per coinvolgere il pubblico e rafforzare l’identità del brand attraverso un linguaggio visivo autentico e riconoscibile.",
      href: "/commercial",
    },
    {
      title: "Formazione e laboratori",
      text: "Realizziamo laboratori di cinema, scrittura creativa e produzione audiovisiva in contesti educativi, sociali e penitenziari, accompagnando gruppi e individui nella creazione di contenuti originali, favorendo espressione personale, crescita creativa e consapevolezza sociale.",
      href: null, // no dedicated page on the current site
    },
  ],
  philosophy: [
    "Ci guida la curiosità e il desiderio di emozionare. Ogni progetto è un’occasione per spingerci oltre i nostri limiti e dare vita a qualcosa di autentico. Ci piace raccontare storie che sappiano toccare e lasciare un segno.",
    "Sevenhalf Lab racconta storie radicate nei luoghi e nelle esperienze umane, unendo arte e impegno sociale per costruire, attraverso il cinema, spazi di libertà e consapevolezza.",
    "Crediamo nel valore della diversità e nella forza delle voci femminili, che sosteniamo e promuoviamo sia davanti che dietro la macchina da presa. Il nostro team è composto da professionisti e professioniste che condividono passione e impegno, con l’obiettivo di produrre contenuti di qualità.",
  ],
  environment:
    "Siamo consapevoli del grande impatto che il comparto audiovisivo ha sull’ambiente. I nostri set sono ecosostenibili: prestiamo attenzione alla gestione dei rifiuti, collaboriamo con aziende impegnate nella sostenibilità per fornire materiali eco-friendly, adottiamo pratiche green, riduciamo gli sprechi sul set, privilegiamo fornitori locali e materiali riciclabili e integriamo criteri ESG in ogni fase del processo creativo. Crediamo in un cinema responsabile, capace di rispettare l’ambiente e le comunità che lo ospitano.",
  collaborate:
    "Sia che tu stia cercando di portare alla luce storie avvincenti o di esplorare le meraviglie sommerse del nostro pianeta, siamo pronti a collaborare con te per dare vita alle tue visioni.",
  // The homepage embeds this YouTube video. The site doesn't say which work it's from.
  video: { youtube: "VXhV7DKAg0g", title: null as string | null }, // TODO: ask client — which film/showreel is this?
};

export const cinema = {
  title: "Liberi di creare: la nostra visione cinematografica",
  intro:
    "Abbracciamo la libertà artistica, l’innovazione e il coraggio di raccontare storie autentiche. Ci impegniamo a esplorare nuovi orizzonti e a celebrare la diversità in ogni progetto.",
  services: [
    {
      title: "Produzione cinematografica",
      text: "Diamo forma alle storie fin dalle loro basi: sviluppiamo soggetti, costruiamo sceneggiature, definiamo lo stile visivo e accompagniamo l’intero percorso creativo.",
    },
    {
      title: "Produzione esecutiva",
      text: "Gestiamo tutti gli aspetti logistici, organizzativi e amministrativi della produzione, garantendo un flusso di lavoro efficiente e senza intoppi. Dalla pianificazione del budget alla gestione delle tempistiche, ci occupiamo di coordinare risorse e team per garantire risultati ottimali e rispettare le scadenze.",
    },
    {
      title: "Cortometraggi e documentari",
      text: "Sosteniamo la creatività emergente attraverso la produzione di cortometraggi e documentari indipendenti.",
    },
  ],
  why: [
    {
      title: "Indipendenza creativa",
      text: "Siamo liberi dagli schemi, pronti a esplorare nuovi stili, generi e approcci. La nostra indipendenza ci consente di abbracciare l'originalità e di dare vita a storie che altrimenti potrebbero restare inesplorate.",
    },
    {
      title: "Impegno nell'eccellenza",
      text: "Pur essendo un'azienda indipendente, ci impegniamo a mantenere alti standard di qualità in ogni progetto. Ogni progetto riceve la massima attenzione e cura, dalla fase di sviluppo fino alla post-produzione.",
    },
    {
      title: "Forza della narrativa",
      text: "Crediamo nella capacità delle storie di cambiare la nostra percezione della realtà. Ogni racconto che condividiamo è un modo per creare connessioni e dare vita a nuove prospettive.",
    },
  ],
  closing: "Il futuro è un foglio bianco: scriviamolo insieme",
};

export const subacquea = {
  title: "La nostra missione: esplorare, catturare, condividere",
  intro: [
    "Se siete affascinati dalle profondità marine o desiderate raccontare la bellezza nascosta sotto la superficie, siete nel posto giusto.",
    "Come operatori video subacquei, portiamo la magia degli abissi direttamente sul vostro schermo, grazie alle nostre competenze tecniche, attrezzature dedicate e un approccio rispettoso dell’ambiente marino.",
  ],
  services: [
    {
      title: "Riprese subacquee professionali",
      text: "Catturiamo la magia del mondo sommerso attraverso videocamere ad alta definizione, garantendo qualità e chiarezza in ogni singolo frame.",
    },
    {
      title: "Documentari subacquei",
      text: "Realizziamo documentari coinvolgenti che accompagnano lo spettatore in un viaggio immersivo nelle profondità marine, rivelando luoghi nascosti, ecosistemi fragili e creature straordinarie.",
    },
    {
      title: "Progetti personalizzati",
      text: "Che si tratti di produzioni artistiche, riprese per eventi speciali, esplorazioni scientifiche o contenuti su commissione, sviluppiamo soluzioni su misura, adattate alle esigenze del progetto e nel pieno rispetto dell’ambiente marino.",
    },
  ],
  why: [
    {
      title: "Flessibilità e disponibilità agli spostamenti",
      text: "Crediamo che le storie straordinarie possano sbocciare in ogni angolo del pianeta. Per questo motivo, siamo pronti a portare la nostra passione e le nostre competenze cinematografiche e subacquee in tutto il mondo.",
    },
    {
      title: "Impegno ambientale",
      text: "Siamo fortemente impegnati nella conservazione dell'ambiente marino e operiamo seguendo le migliori pratiche ecologiche.",
    },
    {
      title: "Capacità di lavoro in team",
      text: "Crediamo nel potere della collaborazione. Siamo pronti e entusiasti di lavorare in team per portare alla luce progetti straordinari che uniscano le nostre competenze alle tue visioni.",
    },
  ],
  closing: "L'avventura inizia sotto la superficie. Siete pronti a esplorare con noi?",
};

export const commercial = {
  title: "Raccontare il tuo marchio, illuminare il tuo messaggio: storie, non semplici pubblicità",
  intro: [
    "Ogni brand ha un mondo dentro: noi lo trasformiamo in immagini. Creiamo spot che parlano al pubblico con autenticità, racconti pensati per far vibrare la tua identità.",
    "Collaboriamo con realtà grandi e piccole per dare forma visiva alle idee, trovando lo stile, il tono e l’atmosfera giusta per ogni messaggio.",
  ],
  services: [
    { title: "Spot aziendali", text: "Creiamo narrazioni visive capaci di emozionare e connettere il pubblico al tuo brand." },
    {
      title: "Video pubblicitari",
      text: "Progettiamo e realizziamo video pubblicitari che comunicano efficacemente il tuo messaggio, in modo chiaro ed efficace su ogni piattaforma.",
    },
    {
      title: "Video promozionali",
      text: "Dai lanci di prodotto agli eventi aziendali, catturiamo l’energia e la personalità della tua realtà.",
    },
    {
      title: "Contenuti visivi per il web",
      text: "Ottimizziamo i tuoi messaggi per il mondo digitale, creando contenuti visivi accattivanti e adatti ai social media, siti web e altre piattaforme online.",
    },
  ],
  why: [
    {
      title: "Sguardo curioso e internazionale",
      text: "Esploriamo luoghi, persone e mondi con uno sguardo aperto, portando ovunque la nostra sensibilità visiva.",
    },
    {
      title: "Approccio responsabile",
      text: "Adottiamo pratiche sostenibili, riduciamo l’impatto ambientale e lavoriamo in armonia con i territori e gli ecosistemi che ci ospitano.",
    },
    {
      title: "Cura in ogni dettaglio",
      text: "Dalla preparazione alle riprese, fino alla post-produzione, curiamo ogni fase con attenzione artigianale. Usiamo tecnologie avanzate e un metodo di lavoro solido per offrire risultati professionali, coerenti e affidabili.",
    },
  ],
  closing: "Il tuo marchio, la nostra passione",
};

export const distribuzione = {
  paragraphs: [
    "Sevenhalf Lab affianca alla produzione anche la distribuzione cinematografica, intesa come una fase delicata e necessaria del percorso di un film.",
    "Ci occupiamo di distribuzione indipendente di cortometraggi e documentari d’autore, seguendo progetti che sentiamo affini per linguaggio, temi e sguardo. Ogni film viene accompagnato in modo mirato, costruendo un percorso coerente con la sua identità, i suoi tempi e il pubblico a cui può davvero arrivare.",
    "La distribuzione, per noi, non è solo inviare un film ai festival, ma capire dove e come può essere visto, in quali contesti può generare un dialogo, quali spazi possono accoglierlo senza snaturarlo. Lavoriamo a stretto contatto con autori e produttori, mantenendo un approccio artigianale e non standardizzato.",
    "Sevenhalf Lab crede in una distribuzione sostenibile, attenta alle opere e alle persone che le hanno create. Un lavoro spesso silenzioso, ma essenziale, perché un film possa continuare a esistere oltre la sua realizzazione.",
  ],
  // new: lifted from the last sentence above
  statement: ["perché un film possa", "continuare a esistere", "oltre la sua realizzazione."],
  closing: "Il futuro è un foglio bianco: scriviamolo insieme",
};

export const chiSiamo = {
  paragraphs: [
    "La Sevenhalf Lab s.r.l., fondata nel 2022 e con sede a Napoli, è una dinamica società di produzione audiovisiva attiva nella cinematografia e nella realizzazione di contenuti multimediali. Specializzata in una vasta gamma di progetti creativi, tra cui cortometraggi, documentari e spot pubblicitari, ha ampliato le sue competenze nella produzione di video subacquei e documentari di genere avventura, legati a contesti estremi come la montagna e il mare. Grazie all’acquisizione di attrezzature cinematografiche avanzate, supportata dall’incentivo “Resto al Sud”, la società ha potuto migliorare le proprie capacità tecniche.",
    "Nel 2023 e 2024, la Sevenhalf Lab ha ottenuto il sostegno del “Piano Cinema Campania” della Film Commission Campania per la produzione di due cortometraggi: Fratelli di Carne, diretto da Paola B. Ortolani, e Lento, diretto da Edoardo Sandulli, consolidando così il suo ruolo nel settore cinematografico.",
    "La società ha inoltre curato la produzione esecutiva del reality show Models Runway Academy, in onda su Amazon Prime Video USA, espandendo il suo portfolio nel settore dell’intrattenimento internazionale.",
    "Attualmente, la Sevenhalf Lab è impegnata nella produzione del documentario Macbeth – Cuore Nero, diretto da Paola B. Ortolani, che racconta il percorso del laboratorio teatrale presso la Casa di Reclusione “De Angelis” di Arienzo. Questo documentario esplora la vita carceraria attraverso l’arte e il teatro, confermando l’impegno della Sevenhalf Lab nelle produzioni culturali e sociali.",
  ],
  // TODO: ask client — the site names no team members or roles. Paola Beatrice Ortolani
  // directs most titles; confirm whether she (and who else) should appear as founders/team.
  team: null,
};

export const contatti = {
  intro:
    "Siamo qui per ascoltare le tue idee e rispondere alle tue domande. Compila il modulo qui sotto per entrare in contatto con noi. Saremo felici di aiutarti!",
};

// Galleries. Captions are the image alt text on the live site; null where the site
// only used the filename. TODO: ask client for photographer credit and location/subject.
const sub = (f: string, width: number, height: number): Photo => ({
  src: `/media/subacquea/${f}.webp`,
  width,
  height,
  caption: null,
});

export const subacqueaGallery: Photo[] = [
  sub("maaa08675", 1600, 1067),
  sub("aaa05446", 1440, 960),
  sub("dsc5407-1", 1300, 867),
  sub("aaa07414", 1300, 867),
  sub("maaa00197", 1600, 1067),
  sub("aaa06968-1", 1290, 860),
  sub("wa-2024-04-06", 1600, 1131),
  sub("maaa00018", 1400, 934),
  sub("aaa05439", 1128, 752),
  sub("maaa00067", 1600, 1066),
  sub("maaa00134", 1400, 933),
];

const com = (f: string, width: number, height: number, caption: string | null): Photo => ({
  src: `/media/commercial/${f}.webp`,
  width,
  height,
  caption,
});

export const commercialGallery: Photo[] = [
  com("aaa07740", 1440, 960, "Fashion Shooting"),
  com("aaa00019-1", 1319, 879, "Opera dell’artista Marco Coda"),
  com("aaa01965", 933, 1400, "Shooting per Gruppo Schiano"),
  com("aaa02539", 1400, 933, "Still Life per Chiara De Concilio"),
  com("aaa06688", 1367, 912, "Still Life per Il Portico del Gusto"),
  com("aaa08021", 800, 1200, "Fashion Shooting"),
  com("aaa00830", 1200, 1200, "Opera dell’artista Marco Coda"),
  com("procida-fao", 1440, 960, "Foto Procida per FAO"),
  com("aaa02574", 800, 1200, "Still Life per Chiara De Concilio"),
  com("aaa06698", 1326, 884, "Still Life per Il Portico del Gusto"),
  com("aaa09637", 1200, 800, "Fashion Shooting"),
  com("aaa00848", 918, 1377, "Opera dell’artista Marco Coda"),
  com("maaa00354", 1408, 939, null), // TODO: ask client — alt was just the filename
];
