import type { Metadata } from "next";
import Link from "next/link";
import { chiSiamo, home, company } from "@content/site";
import Statement from "@/components/Statement";

export const metadata: Metadata = { title: "Chi siamo", description: chiSiamo.paragraphs[0].slice(0, 155) };

export default function ChiSiamo() {
  return (
    <>
      <section className="wrap pt-32 pb-16 md:pt-44">
        <p className="mb-4 text-lg text-schermo/85">chi siamo</p>
        <Statement as="h1" lines={["“il visionario è", "l'unico realista”"]} size="display-xl" rise />
        <p className="mt-6 text-nebbia">{home.quote.author}</p>
      </section>

      <section className="wrap grid gap-10 py-16 md:grid-cols-12">
        <dl className="condensed space-y-4 md:col-span-3">
          <div>
            <dt className="text-nebbia">fondata</dt>
            <dd className="text-xl">{company.founded}</dd>
          </div>
          <div>
            <dt className="text-nebbia">sede</dt>
            <dd className="text-xl">{company.city}</dd>
          </div>
        </dl>
        <div className="space-y-6 text-xl leading-relaxed md:col-span-8 md:col-start-5">
          {chiSiamo.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="measure">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-10 border-t border-linea py-20 md:grid-cols-12">
        <h2 className="display display-md md:col-span-4">la nostra filosofia</h2>
        <div className="space-y-5 text-schermo/85 md:col-span-7 md:col-start-6">
          {home.philosophy.map((p) => (
            <p key={p.slice(0, 24)} className="measure">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-10 border-t border-linea py-20 md:grid-cols-12">
        <h2 className="display display-md md:col-span-4">impegno ambientale</h2>
        <p className="measure text-schermo/85 md:col-span-7 md:col-start-6">{home.environment}</p>
      </section>

      <section className="wrap grid gap-10 border-t border-linea py-20 md:grid-cols-12">
        <h2 className="display display-md md:col-span-4">formazione e laboratori</h2>
        <p className="measure text-schermo/85 md:col-span-7 md:col-start-6">{home.services[3].text}</p>
      </section>

      <section className="wrap border-t border-linea py-24">
        <p className="measure text-xl">{home.collaborate}</p>
        <Link href="/contatti/" className="mt-6 inline-block text-lg underline decoration-schermo/40 hover:decoration-schermo">
          Parlaci del tuo progetto
        </Link>
      </section>
    </>
  );
}
