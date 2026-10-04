/** Big condensed lines with breaks placed by hand (one array item per line). */
export default function Statement({
  lines,
  as: Tag = "h2",
  size = "display-lg",
  rise = false,
  className = "",
}: {
  lines: string[];
  as?: "h1" | "h2" | "p";
  size?: "display-xl" | "display-lg" | "display-md";
  rise?: boolean;
  className?: string;
}) {
  return (
    <Tag className={`display ${size} ${className}`}>
      {lines.map((l, i) =>
        rise ? (
          <span key={i} className="rise" style={{ "--i": i } as React.CSSProperties}>
            <span>{l}</span>
          </span>
        ) : (
          <span key={i} className="block">
            {l}
          </span>
        ),
      )}
    </Tag>
  );
}
