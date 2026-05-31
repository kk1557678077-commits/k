"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

type InquiryFormProps = {
  compact?: boolean;
  formType?: "Quick Inquiry" | "Request Samples" | "Get a Quote" | "Custom Fabric";
  title?: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

type FormValues = {
  name: string;
  company: string;
  country: string;
  email: string;
  contact: string;
  productType: string;
  quantity: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  company: "",
  country: "",
  email: "",
  contact: "",
  productType: "",
  quantity: "",
  message: ""
};

function cleanValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function InquiryForm({
  compact = false,
  formType = "Quick Inquiry",
  title
}: InquiryFormProps) {
  const { lang } = useLanguage();
  const t = ui[lang];
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState<FormValues>(initialValues);
  const formMessages =
    lang === "en"
      ? {
          sending: "Sending...",
          success: "Thank you. Your inquiry has been sent successfully.",
          required: "Please enter your name, email and message before submitting.",
          error: "Sorry, the form could not be sent. Please try again or email us directly.",
          missingEndpoint:
            "Form service is not configured yet. Please add NEXT_PUBLIC_FORMSPREE_ENDPOINT in Vercel environment variables."
        }
      : {
          sending: "正在发送...",
          success: "感谢您提交询盘，我们已收到您的信息。",
          required: "请填写姓名、邮箱和留言内容后再提交。",
          error: "抱歉，表单暂时未能发送。请稍后重试，或直接通过邮箱联系我们。",
          missingEndpoint:
            "表单服务尚未配置。请在 Vercel 环境变量中添加 NEXT_PUBLIC_FORMSPREE_ENDPOINT。"
        };

  function onFieldChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({
      ...current,
      [name]: value
    }));
    if (submitState !== "idle") {
      setSubmitState("idle");
      setErrorMessage("");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setSubmitState("error");
      setErrorMessage(formMessages.missingEndpoint);
      return;
    }

    const cleanedValues: FormValues = {
      name: cleanValue(values.name),
      company: cleanValue(values.company),
      country: cleanValue(values.country),
      email: cleanValue(values.email),
      contact: cleanValue(values.contact),
      productType: cleanValue(values.productType),
      quantity: cleanValue(values.quantity),
      message: values.message.trim()
    };

    if (!cleanedValues.name || !cleanedValues.email || !cleanedValues.message) {
      setSubmitState("error");
      setErrorMessage(formMessages.required);
      return;
    }

    const subjectDetails = [cleanedValues.name, cleanedValues.company].filter(Boolean).join(" / ");
    const payload = {
      formType,
      name: cleanedValues.name,
      company: cleanedValues.company || "Not provided",
      country: cleanedValues.country || "Not provided",
      email: cleanedValues.email,
      contact: cleanedValues.contact || "Not provided",
      productType: cleanedValues.productType || "Not provided",
      quantity: cleanedValues.quantity || "Not provided",
      message: cleanedValues.message,
      sourcePage: typeof window !== "undefined" ? window.location.href : "",
      submittedAt: new Date().toISOString(),
      _replyto: cleanedValues.email,
      _subject: `Ruilong International | ${formType}${subjectDetails ? ` | ${subjectDetails}` : ""}`,
      summary: [
        `Form type: ${formType}`,
        `Name: ${cleanedValues.name}`,
        `Company: ${cleanedValues.company || "Not provided"}`,
        `Country: ${cleanedValues.country || "Not provided"}`,
        `Email: ${cleanedValues.email}`,
        `WhatsApp / WeChat: ${cleanedValues.contact || "Not provided"}`,
        `Product type: ${cleanedValues.productType || "Not provided"}`,
        `Quantity: ${cleanedValues.quantity || "Not provided"}`,
        "",
        "Message:",
        cleanedValues.message
      ].join("\n")
    };

    setSubmitState("loading");
    setErrorMessage("");

    // Future upgrade point: replace Formspree with a Vercel API route,
    // Resend, Supabase, or CRM integration without changing the visible form UI.
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      setSubmitState("success");
      setValues(initialValues);
    } catch {
      setSubmitState("error");
      setErrorMessage(formMessages.error);
    }
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
      <input type="hidden" name="formType" value={formType} />
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        {fields.map(([name, label]) => (
          <label key={name} className="grid gap-2 text-sm font-medium text-charcoal">
            {label}
            <input
              name={name}
              type={name === "email" ? "email" : "text"}
              required={["name", "email"].includes(name)}
              autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"}
              value={values[name as keyof Omit<FormValues, "message">]}
              onChange={onFieldChange}
              className="focus-ring rounded-lg border border-line px-3 py-3 text-sm"
            />
          </label>
        ))}
        <label className={`grid gap-2 text-sm font-medium text-charcoal ${compact ? "" : "sm:col-span-2"}`}>
          {t.forms.message}
          <textarea
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={onFieldChange}
            className="focus-ring rounded-lg border border-line px-3 py-3 text-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={submitState === "loading"}
        className="focus-ring mt-5 w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal sm:w-auto"
      >
        {submitState === "loading" ? formMessages.sending : t.cta.submit}
      </button>
      {submitState === "success" && (
        <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          {formMessages.success}
        </p>
      )}
      {submitState === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
