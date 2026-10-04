import Link from "next/link";

/** Filmhub-style plain label: one word naming the section, linking to its page. */
export default function SectionLabel({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls = "mb-5 inline-block text-lg text-schermo/80";
  return href ? (
    <Link href={href} className={`${cls} underline decoration-schermo/40 hover:decoration-schermo`}>
      {children}
    </Link>
  ) : (
    <p className={cls}>{children}</p>
  );
}
