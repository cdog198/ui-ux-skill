import Link from "next/link";
import { catalogueNav, companyNav } from "./nav";

function Logo() {
  return (
    <Link href="/" className="block shrink-0" aria-label="Sevenhalf Lab, home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/brand/logo-light.png" alt="" width={401} height={128} className="h-9 w-auto sm:h-10" />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="wrap absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-6 py-5">
      <Logo />

      <nav aria-label="Principale" className="hidden items-baseline gap-8 text-[0.95rem] lg:flex">
        <ul className="flex gap-5">
          {catalogueNav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <span aria-hidden className="h-4 w-px self-center bg-schermo/30" />
        <ul className="flex gap-5 text-schermo/75">
          {companyNav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-schermo hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: no JS needed */}
      <details className="group lg:hidden">
        <summary className="cursor-pointer list-none py-2 text-[0.95rem] [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">menu</span>
          <span className="hidden group-open:inline">chiudi</span>
        </summary>
        <nav
          aria-label="Principale"
          className="fixed inset-x-0 top-[4.75rem] bottom-0 z-40 overflow-y-auto bg-fondale px-[var(--gutter)] pt-6 pb-12"
        >
          <ul className="display display-md space-y-1">
            {catalogueNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="mt-10 space-y-3 text-lg text-schermo/80">
            {companyNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    </header>
  );
}
