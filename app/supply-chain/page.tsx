"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { supplySteps } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function SupplyChainPage() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          title={lang === "en" ? "Full Supply Chain" : "全供应链"}
          text={
            lang === "en"
              ? "A practical overview of the textile process from yarn preparation to delivery coordination."
              : "从纱线准备到交付协调的纺织流程概览。"
          }
        />
        <div className="relative grid gap-5">
          {supplySteps[lang].map(([title, text], index) => (
            <article key={title} className="grid gap-4 rounded-lg border border-line bg-white p-5 shadow-sm sm:grid-cols-[80px_1fr]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                {index + 1}
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
