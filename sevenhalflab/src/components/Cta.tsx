import Link from "next/link";
import Statement from "./Statement";

/** Section-page closer: the site's own closing line, then a link to Contatti. */
export default function Cta({ lines }: { lines: string[] }) {
  return (
    <section className="wrap py-28">
      <Statement lines={lines} size="display-md" />
      <Link href="/contatti/" className="mt-8 inline-block text-lg underline decoration-schermo/40 hover:decoration-schermo">
        Parlaci del tuo progetto
      </Link>
    </section>
  );
}
