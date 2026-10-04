"use client";

import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact, contactForm, pricing, type TierId } from "@/config/site";
import { useT } from "@/lib/i18n";
import { SELECT_PLAN_EVENT } from "./Pricing";
import { Section, btn } from "./Section";

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
    "mt-1.5 block w-full min-h-12 rounded-[4px] border border-ink/30 bg-white px-3.5 text-ink placeholder:text-muted/80 focus:border-ink focus:outline-2 focus:outline-offset-0 focus:outline-ink";

  return (
    <Section id="contact" title={t.contact.title} intro={t.contact.intro} tone="green">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-3 lg:col-span-4">
          <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className={`${btn.primary} w-full gap-2.5`}>
            <MessageCircle aria-hidden className="size-5" />
            {t.contact.whatsapp}
          </a>
          <a href={`mailto:${contact.email}`} className={`${btn.secondaryOnGreen} w-full gap-2.5`}>
            <Mail aria-hidden className="size-5 shrink-0" />
            <span className="truncate">{contact.email}</span>
          </a>
        </div>

        <div className="rounded-md bg-paper p-6 text-ink sm:p-8 lg:col-span-8">
          {status === "success" ? (
            <div role="status">
              <p className="heading text-3xl">{f.successTitle}</p>
              <p className="mt-2 text-lg text-muted">{f.successBody}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <p className="font-semibold sm:col-span-2">{t.contact.or}</p>
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
                <textarea id="contact-need" name="message" rows={4} required placeholder={f.needPlaceholder} value={fields.need} onChange={(e) => set("need", e.target.value)} aria-invalid={!!errors.need} aria-describedby={errors.need ? "contact-need-error" : undefined} className={`${input} resize-y py-3`} />
              </Field>

              <fieldset className="sm:col-span-2">
                <legend className="font-semibold">{f.tier}</legend>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                  {tiers.map((tier) => (
                    <label key={tier.id} className="flex min-h-10 cursor-pointer items-center gap-2">
                      <input type="radio" name="tier" value={tier.id} checked={fields.tier === tier.id} onChange={() => set("tier", tier.id)} className="size-4 accent-[var(--color-green)]" />
                      {tier.label}
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
                <label className="flex cursor-pointer items-start gap-3 text-muted">
                  <input id="contact-consent" type="checkbox" checked={fields.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "contact-consent-error" : undefined} className="mt-1 size-4 shrink-0 accent-[var(--color-green)]" />
                  <span>
                    {f.consent}{" "}
                    <Link href="/privacy" className="text-ink underline underline-offset-4">
                      {f.privacy}
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p id="contact-consent-error" className="mt-1.5 text-sm font-semibold text-[#A3262F]">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={status === "sending"} className={`${btn.primary} w-full cursor-pointer disabled:opacity-60 sm:w-auto`}>
                  {status === "sending" ? f.sending : f.submit}
                </button>
                {status === "error" && (
                  <p role="alert" className="mt-3 font-semibold text-[#A3262F]">
                    {f.error}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Field({ id, label, error, className = "", children }: { id: string; label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-[#A3262F]">
          {error}
        </p>
      )}
    </div>
  );
}
