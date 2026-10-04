import { Reveal } from "@/components/ui/Reveal";

/** Numbered section heading: "03 — Pricing" + big title + intro. */
export function SectionHead({
  index,
  label,
  title,
  intro,
  id,
  dark = false,
  className = "",
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
  id: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <div className="lg:col-span-8">
        <p className={`flex items-center gap-3 font-mono text-xs tracking-widest uppercase ${dark ? "text-ochre" : "text-rosso"}`}>
          <span>{index}</span>
          <span aria-hidden className="h-px w-10 bg-current" />
          <span>{label}</span>
        </p>
        <h2 id={id} className="display mt-4 text-[clamp(3.2rem,9vw,7.5rem)]">
          {title}
        </h2>
      </div>
      {intro && (
        <p className={`text-lg leading-relaxed lg:col-span-4 lg:pb-3 ${dark ? "text-muted-dark" : "text-muted"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
