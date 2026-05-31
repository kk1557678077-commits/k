"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { cases } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function CasesPage() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          title={lang === "en" ? "Cases" : "案例"}
          text={
            lang === "en"
              ? "Neutral sample case types for Phase 1. No fake client names or exaggerated claims are used."
              : "Phase 1 使用中性的案例类型，不使用虚假客户名称或夸大数据。"
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cases[lang].map(([title, challenge, solution, result], index) => (
            <article key={title} className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
              <VisualPlaceholder
                label={
                  lang === "en"
                    ? ["Denim sourcing image placeholder", "Custom fabric image placeholder", "Quality inspection image placeholder", "Buyer cooperation image placeholder"][index]
                    : ["牛仔采购图片占位", "定制面料图片占位", "质量检验图片占位", "买家合作图片占位"][index]
                }
                tone={index % 2 === 0 ? "denim" : "slate"}
                className="min-h-44 rounded-none"
              />
              <div className="p-6">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              {[challenge, solution, result].map((line) => (
                <p key={line} className="mt-3 text-sm leading-7 text-muted">{line}</p>
              ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
