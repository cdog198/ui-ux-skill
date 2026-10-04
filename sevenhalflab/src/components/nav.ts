import { formats } from "@content/films";

// Catalogue by format first (as on shortsfit), then the rest of the company.
export const catalogueNav = formats.map((f) => ({ href: `/${f.slug}/`, label: f.label }));

export const companyNav = [
  { href: "/distribuzione-indipendente/", label: "distribuzione" },
  { href: "/subacquea/", label: "subacquea" },
  { href: "/commercial/", label: "commercial" },
  { href: "/chi-siamo/", label: "chi siamo" },
  { href: "/contatti/", label: "contatti" },
];
