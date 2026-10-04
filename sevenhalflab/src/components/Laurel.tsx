/** A small laurel wreath. Orange marks awards; plain marks selections. */
export function LaurelIcon({ className = "" }: { className?: string }) {
  const leaves = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 40 32" aria-hidden className={className} fill="currentColor">
      {[1, -1].map((side) => (
        <g key={side} transform={side === -1 ? "translate(40 0) scale(-1 1)" : undefined}>
          <path d="M13 30 C6 24 5 14 9 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {leaves.map((i) => {
            const y = 26 - i * 5;
            const x = 8.6 - Math.sin(i / 1.6) * 2.2 + (i === 0 ? 2 : 0);
            return <ellipse key={i} cx={x - 2} cy={y} rx="3.4" ry="1.5" transform={`rotate(${-50 + i * 8} ${x - 2} ${y})`} />;
          })}
        </g>
      ))}
    </svg>
  );
}

/** Proof for a poster corner: awards in orange, then the selection count. */
export function LaurelCount({ awards, selections }: { awards: number; selections: number }) {
  if (!awards && !selections) return null;
  return (
    <span className="condensed inline-flex items-center gap-1.5 text-[0.8rem] leading-none">
      <LaurelIcon className={`h-4 w-5 ${awards ? "text-settemezzo" : "text-schermo"}`} />
      {awards > 0 && <span className="text-settemezzo">{awards === 1 ? "1 premio" : `${awards} premi`}</span>}
      {selections > 0 && <span>{selections === 1 ? "1 selezione" : `${selections} selezioni`}</span>}
    </span>
  );
}
