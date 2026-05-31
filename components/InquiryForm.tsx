"use client";

import { FormEvent, useState } from "react";
import { ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

type InquiryFormProps = {
  compact?: boolean;
  title?: string;
};

export function InquiryForm({ compact = false, title }: InquiryFormProps) {
  const { lang } = useLanguage();
  const t = ui[lang];
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Phase 1.5 keeps submissions client-side only.
    // Future email/CRM options: Formspree, EmailJS, Resend, Supabase,
    // or a Vercel API route that forwards inquiries to the sales inbox.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  const fields = [
    ["name", t.forms.name],
    ["company", t.forms.company],
    ["country", t.forms.country],
    ["email", t.forms.email],
    ["contact", t.forms.contact],
    ["productType", t.forms.productType],
    ["quantity", t.forms.quantity]
  ];

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-line bg-white p-5 shadow-soft sm:p-6">
      {title && <h3 className="mb-5 text-xl font-bold text-navy">{title}</h3>}
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        {fields.map(([name, label]) => (
          <label key={name} className="grid gap-2 text-sm font-medium text-charcoal">
            {label}
            <input
              name={name}
              type={name === "email" ? "email" : "text"}
              required={["name", "email"].includes(name)}
              className="focus-ring rounded-lg border border-line px-3 py-3 text-sm"
            />
          </label>
        ))}
        <label className={`grid gap-2 text-sm font-medium text-charcoal ${compact ? "" : "sm:col-span-2"}`}>
          {t.forms.message}
          <textarea
            name="message"
            rows={5}
            className="focus-ring rounded-lg border border-line px-3 py-3 text-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="focus-ring mt-5 w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal sm:w-auto"
      >
        {t.cta.submit}
      </button>
      {submitted && (
        <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          {t.forms.success}
        </p>
      )}
    </form>
  );
}
