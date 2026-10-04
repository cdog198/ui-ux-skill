"use client";

import { LANGS, useLang } from "@/lib/i18n";

/** EN / IT segmented switch. Pass colour classes to theme it for each site. */
export function LangToggle({
  className = "",
  label = "Language",
  activeClassName = "bg-ink text-paper",
  inactiveClassName = "hover:bg-ink/10",
}: {
  className?: string;
  label?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}) {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label={label} className={`inline-flex items-center rounded-full border border-current p-0.5 text-xs font-semibold ${className}`}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
          className={`min-h-9 min-w-10 cursor-pointer rounded-full px-2.5 uppercase tracking-wider transition-colors ${
            lang === code ? activeClassName : inactiveClassName
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
