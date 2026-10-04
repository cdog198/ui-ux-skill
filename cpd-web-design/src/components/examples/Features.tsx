"use client";

import { Layers, X } from "lucide-react";
import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import { pricing } from "@/config/site";
import type { FeatureDef } from "@/content/examples/types";
import { useL, useLang } from "@/lib/i18n";

type Ctx = { show: boolean; features: FeatureDef[] };
const FeatureCtx = createContext<Ctx>({ show: false, features: [] });

const ui = {
  badge: { en: "Example site by CPD Web Design", it: "Sito di esempio di CPD Web Design" },
  cta: { en: "Get one like this free", it: "Ottienine uno così, gratis" },
  show: { en: "Show features", it: "Mostra funzioni" },
  hide: { en: "Hide features", it: "Nascondi funzioni" },
  plan: { en: "plan", it: "piano" },
  from: { en: "from", it: "dal" },
};

/**
 * Wraps a demo site: provides the "Features" overlay state and renders the
 * floating CPD badge + toggle. Feature labels come from the demo's data file.
 */
export function ExampleChrome({ features, children }: { features: FeatureDef[]; children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const tr = useL();

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShow(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show]);

  return (
    <FeatureCtx.Provider value={{ show, features }}>
      {children}

      {/* Floating CPD badge + feature toggle. Uses CPD branding on purpose. */}
      <div
        className="fixed bottom-3 left-3 z-[70] flex max-w-[calc(100vw-5.5rem)] flex-col gap-2 font-[family-name:var(--font-archivo)] sm:bottom-5 sm:left-5 sm:max-w-none sm:flex-row sm:items-stretch"
        role="region"
        aria-label={tr(ui.badge)}
      >
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-pressed={show}
          className={`inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-[#15120E] px-4 text-sm font-semibold shadow-lg transition-colors ${
            show ? "bg-[#E2A93B] text-[#15120E]" : "bg-[#F2ECE1] text-[#15120E] hover:bg-white"
          }`}
        >
          {show ? <X aria-hidden className="size-4" /> : <Layers aria-hidden className="size-4" />}
          {show ? tr(ui.hide) : tr(ui.show)}
          <span className="rounded-full bg-[#15120E] px-2 py-0.5 text-xs text-[#F2ECE1]">{features.length}</span>
        </button>
        <Link
          href="/#contact"
          className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-[#15120E] py-1.5 pr-4 pl-1.5 text-[#F2ECE1] shadow-lg"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#B8321A] text-[11px] font-black tracking-tight">CPD</span>
          <span className="text-xs leading-tight sm:text-sm">
            <span className="block opacity-80">{tr(ui.badge)}</span>
            <span className="block font-semibold text-[#E2A93B] group-hover:underline">{tr(ui.cta)} →</span>
          </span>
        </Link>
      </div>
    </FeatureCtx.Provider>
  );
}

/**
 * Marks a part of a demo page as a feature. When the overlay is on, it gets an
 * outline and a label explaining what it does and which plan includes it.
 */
export function FeatureZone({
  id,
  children,
  className = "",
  as: Comp = "div",
  labelPosition = "top-left",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "aside";
  labelPosition?: "top-left" | "top-right" | "bottom-left" | "below" | "below-right" | "below-nav";
}) {
  const { show, features } = useContext(FeatureCtx);
  const tr = useL();
  const { lang } = useLang();
  const index = features.findIndex((f) => f.id === id);
  const feature = features[index];
  const tier = feature ? pricing.tiers.find((t) => t.id === feature.tier) : undefined;

  const pos = {
    "top-left": "top-3 left-3",
    "top-right": "top-3 right-3",
    "bottom-left": "bottom-3 left-3",
    below: "top-full left-0 mt-2",
    "below-right": "top-full right-0 mt-2",
    "below-nav": "top-24 left-3",
  }[labelPosition];

  return (
    <Comp className={`relative ${className}`}>
      {children}
      {show && feature && (
        <>
          <span aria-hidden className="pointer-events-none absolute inset-1 z-40 rounded-md border-2 border-dashed border-[#E8462A] bg-[#E8462A]/[0.04]" />
          <span
            role="note"
            className={`absolute ${pos} z-50 w-max max-w-[min(17rem,calc(100vw-2rem))] rounded-md bg-[#15120E] p-3 text-left font-[family-name:var(--font-archivo)] text-[#F2ECE1] shadow-xl`}
          >
            <span className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#E8462A] text-xs font-bold text-[#15120E]">{index + 1}</span>
              <span className="text-sm leading-tight font-bold">{tr(feature.label)}</span>
            </span>
            <span className="mt-1.5 block text-xs leading-snug text-[#D9D0C3]">{tr(feature.description)}</span>
            {tier && (
              <span className="mt-2 inline-block rounded-full border border-[#E2A93B] px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#E2A93B] uppercase">
                {lang === "it" ? `${tr(ui.from)} ${tr(ui.plan)} ${tier.name}` : `${tier.name} ${tr(ui.plan)}+`}
              </span>
            )}
          </span>
        </>
      )}
    </Comp>
  );
}
