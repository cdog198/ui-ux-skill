import Link from "next/link";

export type ReelCredit = {
  title: string;
  year?: number | null;
  director?: string | null;
  href?: string;
  /** "dal trailer" / "fotografia" etc., when the frame isn't a production still. */
  note?: string;
};

/**
 * A full-bleed, credited frame: filmhub's muted section loops.
 * With `video` it plays a muted mp4 loop. Until the client supplies clips it shows
 * a real still with a slow drift. Either way the corner credit names the work.
 */
export default function Reel({
  image,
  video,
  credit,
  children,
  className = "min-h-[80svh]",
  priority,
}: {
  image: string;
  video?: string;
  credit: ReelCredit;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
}) {
  const meta = [credit.year, credit.director ? `regia ${credit.director}` : null, credit.note].filter(Boolean).join(", ");
  const creditBody = (
    <>
      <span className="block text-schermo">{credit.title}</span>
      {meta && <span className="block text-schermo/70">{meta}</span>}
    </>
  );
  return (
    <section className={`relative isolate flex overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10">
        {video ? (
          <video
            className="h-full w-full object-cover"
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            aria-hidden
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            className="reel-media h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
          />
        )}
        {/* Weight the bottom-left, where the type sits, so the frame stays legible. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(13_34_48/0.92),rgb(13_34_48/0.25)_55%,rgb(13_34_48/0.45))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(13_34_48/0.7),transparent_60%)]" />
      </div>

      <div className="wrap relative flex w-full flex-col justify-end pt-32 pb-24 sm:pb-20">{children}</div>

      <p className="condensed absolute right-[var(--gutter)] bottom-5 max-w-[60vw] text-right text-[0.8rem] leading-tight">
        {credit.href ? (
          <Link href={credit.href} className="hover:underline">
            {creditBody}
          </Link>
        ) : (
          creditBody
        )}
      </p>
    </section>
  );
}
