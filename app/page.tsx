"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, PackageCheck, Search, Send, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { SectionHeading } from "@/components/SectionHeading";
import { pages, products, supplySteps, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const home = pages.home[lang];
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="container-page grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Xiqiao, Foshan Textile Resources
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {home.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">{t.cta.quote}</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">{t.cta.samples}</ButtonLink>
              <ButtonLink href="/products" variant="ghost">{t.cta.products}</ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {home.trustSignals.slice(0, 3).map(([title]) => (
                <div key={title} className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm">
                  {title}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1495414785729-6bc409fb2a7c?auto=format&fit=crop&w=1200&q=80"
              alt="Textile fabric sourcing and business cooperation"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow={lang === "en" ? "Sourcing support" : "采购支持"}
            title={home.strengthsTitle}
            text={home.trustText}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {home.strengths.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow={lang === "en" ? "Product directions" : "产品方向"}
            title={home.featuredTitle}
            text={
              lang === "en"
                ? "Product information is prepared as practical reference for sourcing discussion. Final specifications are confirmed by sample, color, finish and quantity."
                : "产品信息用于采购沟通参考，最终规格需结合样品、颜色、后整理与数量确认。"
            }
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} onDetails={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow={lang === "en" ? "From yarn to delivery" : "从纱线到交付"}
            title={home.supplyTitle}
            text={
              lang === "en"
                ? "We help buyers keep key production and delivery communication points visible during sourcing and order follow-up."
                : "我们帮助买家在采购与订单跟进中清晰掌握关键生产与交付沟通节点。"
            }
          />
          <div className="grid gap-3 md:grid-cols-7">
            {supplySteps[lang].slice(0, 7).map(([step], index) => (
              <div key={step} className="relative rounded-lg border border-line bg-white p-4 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold text-navy">{step}</p>
                {index < 6 && (
                  <ArrowRight className="absolute -right-3 top-8 hidden text-line md:block" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow={lang === "en" ? "Buyer confidence" : "买家信任"}
            title={home.trustTitle}
            text={home.trustText}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {home.trustSignals.map(([title, text], index) => {
              const icons = [Search, PackageCheck, FileText, ShieldCheck, Send, ClipboardCheck];
              const Icon = icons[index] || CheckCircle2;
              return (
                <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                  <Icon className="mb-4 text-gold" size={24} />
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow={lang === "en" ? "Service flow" : "服务流程"}
            title={home.howWorkTitle}
            text={home.howWorkText}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {home.howWeWork.map(([title, text], index) => (
              <article key={title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {home.whyTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              {home.heroSubtitle}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {home.why.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white/10 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
                <span className="text-sm leading-6 text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading title={home.inquiryTitle} text={home.finalCtaText} />
            <div className="rounded-lg border border-line bg-white p-5 text-sm leading-6 text-muted shadow-sm">
              {lang === "en"
                ? "For faster quotation, please include fabric type, composition or reference sample, width, weight, color, application, quantity and delivery country."
                : "为了更快报价，请尽量提供面料类型、成分或参考样、门幅、克重、颜色、用途、数量与交付国家/地区。"}
            </div>
          </div>
          <InquiryForm formType="Quick Inquiry" />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 rounded-lg bg-navy p-8 text-white shadow-soft md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{home.finalCtaTitle}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">{home.finalCtaText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <ButtonLink href="/contact" variant="secondary">{t.cta.quote}</ButtonLink>
              <ButtonLink href="/products" variant="secondary">{t.cta.products}</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
