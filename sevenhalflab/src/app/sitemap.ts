import type { MetadataRoute } from "next";
import { films, formats } from "@content/films";

export const dynamic = "force-static";

const base = "https://sevenhalflab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "cinema", "subacquea", "commercial", "distribuzione-indipendente", "chi-siamo", "contatti"];
  return [
    ...pages.map((p) => ({ url: `${base}/${p ? p + "/" : ""}` })),
    ...formats.map((f) => ({ url: `${base}/${f.slug}/` })),
    ...films.map((f) => ({ url: `${base}/film/${f.slug}/` })),
  ];
}
