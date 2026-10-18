"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

type InquiryFormProps = {
  compact?: boolean;
  formType?: "Quick Inquiry" | "Request Samples" | "Get a Quote" | "Custom Fabric" | "Investment Inquiry";
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
  phone: string;
  cooperationType: string;
  spaceRequirement: string;
  businessCategory: string;
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
  phone: "",
  cooperationType: "",
  spaceRequirement: "",
  businessCategory: "",
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
  const isInvestmentForm = formType === "Investment Inquiry";

  const formMessages = isInvestmentForm
    ? {
        sending: "正在提交...",
        success: "感谢您提交招商合作咨询，我们已收到您的信息。",
        required: "请填写称呼和联系电话后再提交。",
        invalidPhone: "联系电话格式不正确，请填写手机号或带区号的固定电话。",
        invalidEmail: "邮箱格式不正确；不方便填写可以留空。",
        error: "提交没有成功，请稍后重试，或直接拨打招商热线 13929936713。",
        missingEndpoint: "在线提交暂不可用，请直接拨打招商热线 13929936713 预约看场。"
      }
    : lang === "en"
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
          required: "请填写姓名、邮箱和留言后再提交。",
          error: "抱歉，表单暂时未能发送。请稍后重试，或直接通过邮箱联系我们。",
          missingEndpoint: "表单服务尚未配置。请在 Vercel 环境变量中添加 NEXT_PUBLIC_FORMSPREE_ENDPOINT。"
        };

  const trustText = isInvestmentForm
    ? "您的信息仅用于瑞龙国际招商合作咨询与项目沟通。"
    : lang === "en"
      ? "Your information will only be used to respond to your textile sourcing inquiry."
      : "您的信息仅用于回复您的纺织面料采购询盘。";

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
    const cleanedValues: FormValues = {
      name: cleanValue(values.name),
      company: cleanValue(values.company),
      country: cleanValue(values.country),
      email: cleanValue(values.email),
      contact: cleanValue(values.contact),
      productType: cleanValue(values.productType),
      quantity: cleanValue(values.quantity),
      phone: cleanValue(values.phone),
      cooperationType: cleanValue(values.cooperationType),
      spaceRequirement: cleanValue(values.spaceRequirement),
      businessCategory: cleanValue(values.businessCategory),
      message: values.message.trim()
    };

    if (isInvestmentForm) {
      // 招商咨询：称呼 + 联系电话必填，其余选填（团队方案“降低首次咨询门槛”）
      if (!cleanedValues.name || !cleanedValues.phone) {
        setSubmitState("error");
        setErrorMessage(formMessages.required);
        return;
      }
      if (!/^\+?[\d\s-]{7,20}$/.test(cleanedValues.phone)) {
        setSubmitState("error");
        setErrorMessage(("invalidPhone" in formMessages && formMessages.invalidPhone) || formMessages.required);
        return;
      }
      if (cleanedValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedValues.email)) {
        setSubmitState("error");
        setErrorMessage(("invalidEmail" in formMessages && formMessages.invalidEmail) || formMessages.required);
        return;
      }
    } else if (!cleanedValues.name || !cleanedValues.email || !cleanedValues.message) {
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
      email: cleanedValues.email || "Not provided",
      contact: cleanedValues.contact || "Not provided",
      productType: cleanedValues.productType || "Not provided",
      quantity: cleanedValues.quantity || "Not provided",
      phone: cleanedValues.phone || "Not provided",
      cooperationType: cleanedValues.cooperationType || "Not provided",
      spaceRequirement: cleanedValues.spaceRequirement || "Not provided",
      businessCategory: cleanedValues.businessCategory || "Not provided",
      message: cleanedValues.message || "Not provided",
      sourcePage: typeof window !== "undefined" ? window.location.href : "",
      submittedAt: new Date().toISOString(),
      ...(cleanedValues.email ? { _replyto: cleanedValues.email } : {}),
      _subject: `Ruilong International | ${formType}${subjectDetails ? ` | ${subjectDetails}` : ""}`,
      summary: [
        `Form type: ${formType}`,
        `Name: ${cleanedValues.name}`,
        `Company / Brand: ${cleanedValues.company || "Not provided"}`,
        `Country: ${cleanedValues.country || "Not provided"}`,
        `Email: ${cleanedValues.email || "Not provided"}`,
        `Phone: ${cleanedValues.phone || "Not provided"}`,
        `WhatsApp / WeChat: ${cleanedValues.contact || "Not provided"}`,
        `Product type: ${cleanedValues.productType || "Not provided"}`,
        `Quantity: ${cleanedValues.quantity || "Not provided"}`,
        `Cooperation type: ${cleanedValues.cooperationType || "Not provided"}`,
        `Space requirement: ${cleanedValues.spaceRequirement || "Not provided"}`,
        `Business category: ${cleanedValues.businessCategory || "Not provided"}`,
        "",
        "Message:",
        cleanedValues.message || "Not provided"
      ].join("\n")
    };

    // 先校验输入，再检查提交通道，访客不会在填错时先看到“暂不可用”
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setSubmitState("error");
      setErrorMessage(formMessages.missingEndpoint);
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

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

  const fields = isInvestmentForm
    ? [
        ["name", "称呼（必填）"],
        ["phone", "联系电话（必填）"],
        ["company", "公司/品牌"],
        ["businessCategory", "意向业态（可填“尚未确定”）"],
        ["cooperationType", "合作类型"],
        ["spaceRequirement", "需求面积/空间需求"],
        ["email", "邮箱"]
      ]
    : [
        ["name", t.forms.name],
        ["company", t.forms.company],
        ["country", t.forms.country],
        ["email", t.forms.email],
        ["contact", t.forms.contact],
        ["productType", t.forms.productType],
        ["quantity", t.forms.quantity]
      ];

  const fieldClass = isInvestmentForm
    ? "focus-ring border border-sand bg-white px-4 py-3 text-base transition duration-200 hover:border-navy/40 focus:border-navy"
    : "focus-ring rounded-lg border border-line px-3 py-3 text-sm";

  return (
    <form onSubmit={onSubmit} className={isInvestmentForm ? "bg-[#eeede9] p-6 text-charcoal sm:p-10" : "rounded-lg border border-line bg-white p-5 shadow-soft sm:p-6"}>
      {title && <h3 className={isInvestmentForm ? "mb-5 font-display text-[clamp(1.375rem,1.1rem+0.9vw,1.875rem)] font-bold text-navy" : "mb-5 text-xl font-bold text-navy"}>{title}</h3>}
      <p className={isInvestmentForm ? "mb-6 text-sm leading-6 text-stone" : "mb-5 rounded-lg bg-slate-50 px-4 py-3 text-xs leading-5 text-muted"}>
        {trustText}
        {isInvestmentForm && (
          <>
            {" "}
            <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-navy">
              隐私政策
            </Link>
          </>
        )}
      </p>
      <input type="hidden" name="formType" value={formType} />
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        {fields.map(([name, label]) => (
          <label key={name} className="grid gap-2 text-sm font-medium text-charcoal">
            {label}
            <input
              name={name}
              type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
              required={isInvestmentForm ? ["name", "phone"].includes(name) : ["name", "email"].includes(name)}
              autoComplete={name === "email" ? "email" : name === "name" ? "name" : name === "phone" ? "tel" : "off"}
              value={values[name as keyof Omit<FormValues, "message">]}
              onChange={onFieldChange}
              className={fieldClass}
            />
          </label>
        ))}
        <label className={`grid gap-2 text-sm font-medium text-charcoal ${compact ? "" : "sm:col-span-2"}`}>
          {isInvestmentForm ? "补充需求" : t.forms.message}
          <textarea
            name="message"
            rows={isInvestmentForm ? 4 : 5}
            required={!isInvestmentForm}
            value={values.message}
            onChange={onFieldChange}
            className={fieldClass}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={submitState === "loading"}
        className={isInvestmentForm ? "focus-ring mt-6 min-h-12 w-full bg-navy px-8 py-3 text-base font-semibold text-white transition duration-300 hover:bg-[#1d3350] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 sm:w-auto" : "focus-ring mt-5 w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal sm:w-auto"}
      >
        {submitState === "loading" ? formMessages.sending : isInvestmentForm ? "提交咨询" : t.cta.submit}
      </button>
      {submitState === "success" && (
        <p role="status" className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          {formMessages.success}
        </p>
      )}
      {submitState === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
