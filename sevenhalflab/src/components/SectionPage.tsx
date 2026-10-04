import Reel, { type ReelCredit } from "./Reel";
import Statement from "./Statement";
import ServiceList from "./ServiceList";
import Cta from "./Cta";

type Block = { title: string; text: string };

/** Shared shape of /cinema, /subacquea, /commercial: credited reel, intro, services, reasons, closer. */
export default function SectionPage({
  label,
  lead,
  lines,
  image,
  credit,
  intro,
  services,
  why,
  closing,
  children,
}: {
  label: string;
  lead?: string;
  lines: string[];
  image: string;
  credit: ReelCredit;
  intro: string[];
  services: Block[];
  why: Block[];
  closing: string[];
  children?: React.ReactNode;
}) {
  return (
    <>
      <Reel image={image} credit={credit} className="min-h-[88svh]" priority>
        <p className="mb-4 text-lg text-schermo/85">{label}</p>
        {lead && <p className="mb-3 max-w-[40ch] text-xl text-schermo/90">{lead}</p>}
        <Statement as="h1" lines={lines} size="display-lg" rise />
      </Reel>

      <section className="wrap grid gap-8 py-20 md:grid-cols-12">
        <div className="space-y-5 text-xl leading-relaxed md:col-span-7 md:col-start-5">
          {intro.map((p) => (
            <p key={p.slice(0, 24)} className="measure">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby={`${label}-servizi`} className="wrap pb-20">
        <h2 id={`${label}-servizi`} className="mb-8 text-lg text-schermo/80">
          cosa facciamo
        </h2>
        <ServiceList items={services} />
      </section>

      {children}

      <section aria-labelledby={`${label}-perche`} className="wrap py-20">
        <h2 id={`${label}-perche`} className="mb-8 text-lg text-schermo/80">
          perché sceglierci
        </h2>
        <ServiceList items={why} />
      </section>

      <Cta lines={closing} />
    </>
  );
}
