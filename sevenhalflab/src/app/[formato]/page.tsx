import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formats } from "@content/films";
import PosterWall from "@/components/PosterWall";
import FormatFilter from "@/components/FormatFilter";
import { byFormat } from "@/lib/film";

export const dynamicParams = false;

export function generateStaticParams() {
  return formats.map((f) => ({ formato: f.slug }));
}

const find = (slug: string) => formats.find((f) => f.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[formato]">): Promise<Metadata> {
  const f = find((await params).formato);
  return f ? { title: f.label.charAt(0).toUpperCase() + f.label.slice(1) } : {};
}

export default async function FormatPage({ params }: PageProps<"/[formato]">) {
  const f = find((await params).formato);
  if (!f) notFound();
  const list = byFormat(f.key);
  return (
    <>
      <h1 className="wrap display display-xl pt-32 pb-12 md:pt-40">{f.label}</h1>
      <FormatFilter current={f.slug} count={list.length} />
      <PosterWall films={list} eager={4} />
      <div className="h-24" />
    </>
  );
}
