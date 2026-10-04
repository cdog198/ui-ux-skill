import type { Metadata } from "next";
import { films } from "@content/films";
import { filmHref } from "@/lib/film";

// The old site had a second page per distributed film. One page per film now holds
// both, so these old URLs forward to it (static hosts can't send real 301s).
export const dynamicParams = false;

const distributed = films.filter((f) => f.roles.includes("distribuzione"));

export function generateStaticParams() {
  return distributed.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/film-distribuzione/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { robots: { index: false }, alternates: { canonical: filmHref({ slug }) } };
}

export default async function Forward({ params }: PageProps<"/film-distribuzione/[slug]">) {
  const href = filmHref({ slug: (await params).slug });
  return (
    <div className="wrap pt-40 pb-32">
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <p>
        Questa pagina si è spostata: <a href={href} className="underline">vai alla scheda del film</a>.
      </p>
    </div>
  );
}
