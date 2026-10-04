"use client";

import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { contact, contactForm, pricing, type TierId } from "@/config/site";
import { useT } from "@/lib/i18n";
import { SELECT_PLAN_EVENT } from "./Pricing";
import { SectionHead } from "./SectionHead";

type Status = "idle" | "sending" | "success" | "error";
type Fields = { name: string; business: string; email: string; need: string; tier: TierId | "unsure"; consent: boolean };

const empty: Fields = { name: "", business: "", email: "", need: "", tier: "business", consent: false };

export function Contact() {
  const t = useT();
  const f = t.contact.form;
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  // Pricing "Choose plan" buttons pre-select the plan here.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<TierId>).detail;
      setFields((prev) => ({ ...prev, tier: id }));
    };
    window.addEventListener(SELECT_PLAN_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_PLAN_EVENT, onSelect);
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!fields.name.trim()) next.name = f.required;
    if (!fields.email.trim()) next.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = f.invalidEmail;
    if (!fields.need.trim()) next.need = f.required;
    if (!fields.consent) next.consent = f.required;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) document.getElementById(`contact-${first}`)?.focus();
    return !first;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    // Spam honeypot: real people never fill the hidden "_gotcha" field.
    if (form.get("_gotcha")) {
      setStatus("success");
      return;
    }

    /*
     * ── FORM ENDPOINT ────────────────────────────────────────────
     * Sends JSON to the endpoint in src/config/site.ts → contactForm.endpoint
     * (or the NEXT_PUBLIC_FORM_ENDPOINT env var). Formspree accepts this as-is.
     * Until a real endpoint is set, we simulate success so the site is demo-able.
     */
    if (contactForm.endpoint.includes("YOUR_FORM_ID")) {
      console.warn("[CPD] Contact form is in demo mode: set contactForm.endpoint in src/config/site.ts");
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name,
          business: fields.business,
          email: fields.email,
          message: fields.need,
          preferredPlan: fields.tier,
          _subject: `New website enquiry: ${fields.business || fields.name}`,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setFields(empty);
    } catch {
      setStatus("error");
    }
  };

  const tiers: { id: Fields["tier"]; label: string }[] = [
    ...pricing.tiers.map((x) => ({ id: x.id, label: x.name })),
    { id: "unsure", label: f.notSure },
  ];

  const input =
    "mt-2 block w-full rounded-none border-0 border-b-2 border-paper/40 bg-transparent px-0 py-3 text-lg text-paper placeholder:text-paper/40 focus:border-ochre focus:ring-0 focus:outline-none";

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <SectionHead dark id="contact-title" index="08" label={t.contact.label} title={t.contact.title} intro={t.contact.intro} />

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="space-y-4 lg:col-span-4">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-ink"
            >
              <span className="flex items-center gap-3">
                <MessageCircle aria-hidden className="size-5" />
                {t.contact.whatsapp}
              </span>
              <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${contact.email}`} className="group flex items-center justify-between gap-4 rounded-full border-2 border-paper px-6 py-4 font-semibold">
              <span className="flex min-w-0 items-center gap-3">
                <Mail aria-hidden className="size-5 shrink-0" />
                <span className="truncate">{contact.email}</span>
              </span>
              <ArrowRight aria-hidden className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="pt-6 font-mono text-xs tracking-widest text-muted-dark uppercase">↓ {t.contact.or}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            {status === "success" ? (
              <div role="status" className="border-2 border-ochre p-8 lg:p-12">
                <p className="display text-6xl text-ochre">{f.successTitle}</p>
                <p className="mt-4 text-lg text-muted-dark">{f.successBody}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-8 sm:grid-cols-2">
                <Field id="contact-name" label={f.name} error={errors.name}>
                  <input id="contact-name" name="name" autoComplete="name" required value={fields.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} className={input} />
                </Field>
                <Field id="contact-business" label={f.business}>
                  <input id="contact-business" name="business" autoComplete="organization" value={fields.business} onChange={(e) => set("business", e.target.value)} className={input} />
                </Field>
                <Field id="contact-email" label={f.email} error={errors.email} className="sm:col-span-2">
                  <input id="contact-email" name="email" type="email" autoComplete="email" required value={fields.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} className={input} />
                </Field>
                <Field id="contact-need" label={f.need} error={errors.need} className="sm:col-span-2">
                  <textarea id="contact-need" name="message" rows={4} required placeholder={f.needPlaceholder} value={fields.need} onChange={(e) => set("need", e.target.value)} aria-invalid={!!errors.need} aria-describedby={errors.need ? "contact-need-error" : undefined} className={`${input} resize-y`} />
                </Field>

                <fieldset className="sm:col-span-2">
                  <legend className="font-mono text-xs tracking-widest text-muted-dark uppercase">{f.tier}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tiers.map((tier) => (
                      <label key={tier.id} className="cursor-pointer">
                        <input type="radio" name="tier" value={tier.id} checked={fields.tier === tier.id} onChange={() => set("tier", tier.id)} className="peer sr-only" />
                        <span className="inline-flex min-h-11 items-center rounded-full border-2 border-paper/40 px-5 font-semibold transition-colors peer-checked:border-ochre peer-checked:bg-ochre peer-checked:text-ink peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ochre">
                          {tier.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Honeypot (hidden from people and screen readers) */}
                <div aria-hidden="true" className="hidden">
                  <label>
                    Leave empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3 text-muted-dark">
                    <input id="contact-consent" type="checkbox" checked={fields.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "contact-consent-error" : undefined} className="mt-1 size-5 shrink-0 accent-[var(--color-ochre)]" />
                    <span>
                      {f.consent}{" "}
                      <Link href="/privacy" className="text-paper underline underline-offset-4">
                        {f.privacy}
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="contact-consent-error" className="mt-2 text-sm font-semibold text-rosso-bright">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-rosso-bright px-8 text-lg font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? f.sending : f.submit}
                    <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  {status === "error" && (
                    <p role="alert" className="mt-4 font-semibold text-rosso-bright">
                      {f.error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, className = "", children }: { id: string; label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="font-mono text-xs tracking-widest text-muted-dark uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-rosso-bright">
          {error}
        </p>
      )}
    </div>
  );
}
