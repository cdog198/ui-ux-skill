"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { translations, type Dict } from "@/content/translations";

export type Lang = "en" | "it";
export const LANGS: Lang[] = ["en", "it"];

/** A bilingual string. Used in config and demo data files. */
export type L = { en: string; it: string };

const STORAGE_KEY = "cpd-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // On first load: saved choice → browser language → English.
  useEffect(() => {
    let initial: Lang = "en";
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "it") initial = saved;
      else if (navigator.language?.toLowerCase().startsWith("it")) initial = "it";
    } catch {
      /* storage blocked: keep English */
    }
    // Syncing from browser-only storage after hydration is intentional here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initial !== "en") setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Main-site copy for the active language (from src/content/translations.ts). */
export function useT(): Dict {
  const { lang } = useLang();
  return translations[lang];
}

/** Returns a picker for bilingual values: `const tr = useL(); tr(item.name)`. */
export function useL() {
  const { lang } = useLang();
  return useCallback((value: L) => value[lang], [lang]);
}

/** Simple {placeholder} interpolation. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}

export function formatEuro(amount: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "it" ? "it-IT" : "en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}
