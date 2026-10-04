import type { Metadata } from "next";
import { company } from "@content/site";

export const metadata: Metadata = { title: "Contatti", description: `Scrivi a ${company.email} o chiama ${company.phone}.` };

export default function Contatti() {
  const tel = company.phone.replace(/\s/g, "");
  return (
    <section className="wrap pt-32 pb-28 md:pt-44">
      <p className="mb-4 text-lg text-schermo/85">contatti</p>
      {/* Site copy, minus the line about the form: there's no form here (TODO: ask client if they want one). */}
      <h1 className="measure text-2xl leading-snug">Siamo qui per ascoltare le tue idee e rispondere alle tue domande.</h1>

      <a href={`mailto:${company.email}`} className="display display-lg mt-16 block break-words hover:underline">
        {company.email}
      </a>
      <a href={`tel:${tel}`} className="display display-md mt-6 block hover:underline">
        {company.phone}
      </a>

      <dl className="mt-20 grid gap-10 sm:grid-cols-3">
        <div>
          <dt className="text-nebbia">sede</dt>
          <dd className="mt-1 text-lg">{company.city}</dd>
        </div>
        <div>
          <dt className="text-nebbia">social</dt>
          <dd className="mt-1">
            <ul className="space-y-1 text-lg">
              {company.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} rel="noopener" target="_blank" className="hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-nebbia">società</dt>
          <dd className="mt-1 text-lg">
            {company.legalName}
            <span className="block text-nebbia">P.IVA {company.vat}</span>
          </dd>
        </div>
      </dl>
    </section>
  );
}
