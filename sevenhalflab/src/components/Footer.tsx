import Link from "next/link";
import { company } from "@content/site";

export default function Footer() {
  const tel = company.phone.replace(/\s/g, "");
  return (
    <footer className="wrap border-t border-linea pt-16 pb-10">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-nebbia">scrivici</p>
          <a href={`mailto:${company.email}`} className="display display-md mt-2 block break-words hover:underline">
            {company.email}
          </a>
          <a href={`tel:${tel}`} className="mt-4 inline-block text-lg hover:underline">
            {company.phone}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 text-[0.95rem] md:col-span-5">
          <ul className="space-y-1.5">
            {company.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="hover:underline" rel="noopener" target="_blank">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-1.5 text-nebbia">
            <li>
              <Link href="/chi-siamo/" className="hover:text-schermo hover:underline">
                chi siamo
              </Link>
            </li>
            <li>
              <Link href="/contatti/" className="hover:text-schermo hover:underline">
                contatti
              </Link>
            </li>
            {/* TODO: ask client — privacy and cookie policy pages live in WordPress (Complianz); migrate the text */}
          </ul>
        </div>
      </div>
      <p className="mt-16 text-sm text-nebbia">
        © {new Date().getFullYear()} {company.legalName}, {company.city}. P.IVA {company.vat}
      </p>
    </footer>
  );
}
