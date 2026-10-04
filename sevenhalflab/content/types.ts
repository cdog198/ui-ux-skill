// Content model. Everything in /content was copied from sevenhalflab.com
// (scraped 2026-10-04). A field that the live site doesn't state is `null`
// with a `// TODO: ask client` next to it — nothing here is invented.

/** How the catalogue is split in the nav. */
export type Format = "corto" | "documentario" | "lungometraggio" | "serie";

/** What Sevenhalf did on the title. */
export type Role = "produzione" | "produzione esecutiva" | "distribuzione";

export type Credit = { label: string; names: string };

export type Selection = {
  festival: string;
  year: number;
  /** Text the site puts after the festival, e.g. "Semi-finalista", "proiezione fuori concorso". */
  note?: string;
};

export type Award = {
  /** The award as written on the site, e.g. "Miglior fotografia". */
  title: string;
  festival: string;
  year: number;
};

export type Still = {
  src: string;
  /** Where this frame comes from, for the corner credit. */
  source: "still" | "trailer";
};

export type Film = {
  slug: string;
  title: string;
  format: Format;
  /**
   * "site" = the site says it (CATEGORIA field, or the synopsis/Chi siamo calls it that).
   * "inferred" = deduced (e.g. from runtime); confirm with the client.
   */
  formatSource: "site" | "inferred";
  roles: Role[];
  director: string | null;
  year: number | null;
  /** Minutes. */
  runtime: number | null;
  country: string | null;
  genre: string | null;
  synopsis: string;
  credits: Credit[];
  selections: Selection[];
  awards: Award[];
  poster: string | null;
  stills: Still[];
  /** YouTube video id. */
  trailer: string | null;
  /** Anything the client needs to resolve (conflicting data between pages, etc.). */
  notes?: string[];
};

export type Photo = {
  src: string;
  width: number;
  height: number;
  /** Caption/alt as written on the site; null where the site only had a filename. */
  caption: string | null;
};
