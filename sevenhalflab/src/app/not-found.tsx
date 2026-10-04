import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap pt-40 pb-32">
      <h1 className="display display-xl">fuori campo</h1>
      <p className="mt-8 text-lg">Questa pagina non esiste.</p>
      <Link href="/" className="mt-4 inline-block underline">
        Torna al catalogo
      </Link>
    </section>
  );
}
