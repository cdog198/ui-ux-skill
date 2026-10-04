/**
 * Page section with a plain sentence-case heading.
 * layout="split": heading in a narrow left column, content on the right (reads like a document).
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
  tone?: "paper" | "paper-2" | "green";
  layout?: "split" | "stack";
}) {
  const bg = { paper: "bg-paper", "paper-2": "bg-paper-2", green: "on-green bg-green text-paper" }[tone];
  const introColor = tone === "green" ? "text-green-soft" : "text-muted";
  const headingId = `${id}-title`;

  const head = (
    <>
      <h2 id={headingId} className="heading text-[clamp(2rem,4.2vw,3.25rem)]">
        {title}
      </h2>
      {intro && <p className={`mt-4 max-w-[60ch] text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </>
  );

  return (
    <section id={id} aria-labelledby={headingId} className={bg}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        {layout === "split" ? (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">{head}</div>
            <div className="lg:col-span-8">{children}</div>
          </div>
        ) : (
          <>
            {head}
            <div className="mt-12 lg:mt-14">{children}</div>
          </>
        )}
      </div>
    </section>
  );
}

/** Shared button styles. Rectangular, small radius: no pills. */
export const btn = {
  primary:
    "inline-flex min-h-12 items-center justify-center rounded-[4px] bg-ochre px-6 font-semibold text-ink transition-colors hover:bg-[#f5c364]",
  secondaryOnGreen:
    "inline-flex min-h-12 items-center justify-center rounded-[4px] border border-paper/70 px-6 font-semibold text-paper transition-colors hover:bg-paper hover:text-ink",
  secondary:
    "inline-flex min-h-12 items-center justify-center rounded-[4px] border border-ink px-6 font-semibold transition-colors hover:bg-ink hover:text-paper",
  link: "font-semibold underline decoration-1 underline-offset-4 hover:decoration-2",
};
