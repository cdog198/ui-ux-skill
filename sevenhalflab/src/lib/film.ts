import type { Film, Format } from "@content/types";
import { films } from "@content/films";

export const formatLabel: Record<Format, string> = {
  corto: "cortometraggio",
  documentario: "documentario",
  lungometraggio: "lungometraggio",
  serie: "serie",
};

export const filmHref = (f: Pick<Film, "slug">) => `/film/${f.slug}/`;

/** "corto, 2024, 19′", skipping anything the site doesn't state. */
export function filmMeta(f: Film) {
  return [formatLabel[f.format], f.year, f.runtime ? `${f.runtime}′` : null].filter(Boolean).join(", ");
}

export const roleLabel = (f: Film) => {
  const r = f.roles;
  if (r.includes("produzione esecutiva")) return "produzione esecutiva";
  if (r.includes("produzione") && r.includes("distribuzione")) return "produzione e distribuzione";
  if (r.includes("distribuzione")) return "distribuzione";
  return "produzione";
};

export const byFormat = (format: Format) => films.filter((f) => f.format === format);
