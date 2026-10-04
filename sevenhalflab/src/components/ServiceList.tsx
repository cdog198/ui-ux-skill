/** Services as a plain two-column definition list. No cards. */
export default function ServiceList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      {items.map((s) => (
        <div key={s.title} className="border-t border-linea pt-5">
          <dt className="display text-[clamp(1.7rem,2.6vw,2.4rem)]">{s.title}</dt>
          <dd className="measure mt-3 text-schermo/80">{s.text}</dd>
        </div>
      ))}
    </dl>
  );
}
