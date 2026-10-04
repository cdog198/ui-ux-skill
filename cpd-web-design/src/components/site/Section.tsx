/**
 * Page section with a large, plain heading.
 * layout="split": heading on the left, content on the right.
 * layout="stack": heading above full-width content.
 */
export function Section({
  id,
  title,
  intro,
  children,
  tone = "paper",
  layout = "stack",
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "paper" | "paper-2" | "cobalt";
  layout?: "split" | "stack";
}) {
  const bg = { paper: "bg-paper", "paper-2": "bg-paper-2", cobalt: "on-cobalt bg-cobalt text-white" }[tone];
  const introColor = tone === "cobalt" ? "text-cobalt-soft" : "text-muted";
  const headingId = `${id}-title`;

  const head = (
    <>
      <h2 id={headingId} className="heading text-[clamp(2.4rem,5.2vw,4.5rem)]">
        {title}
      </h2>
      {intro && <p className={`mt-5 max-w-[58ch] text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </>
  );

  return (
    <section id={id} aria-labelledby={headingId} className={bg}>
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:py-32">
        {layout === "split" ? (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">{head}</div>
            <div className="lg:col-span-7">{children}</div>
          </div>
        ) : (
          <>
            {head}
            <div className="mt-14 lg:mt-16">{children}</div>
          </>
        )}
      </div>
    </section>
  );
}

/** Shared button styles: rounded pills, one strong colour. */
export const btn = {
  primary:
    "inline-flex min-h-12 items-center justify-center rounded-full bg-cobalt px-6 font-medium text-white transition-colors hover:bg-[#1a33b8]",
  onCobalt:
    "inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-medium text-cobalt transition-colors hover:bg-sky",
  secondary:
    "inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 px-6 font-medium transition-colors hover:border-ink",
  link: "font-medium underline decoration-1 underline-offset-4 hover:decoration-2",
};
