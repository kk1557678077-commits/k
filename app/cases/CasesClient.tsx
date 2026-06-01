"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { useLanguage } from "@/components/LanguageProvider";
import type { DisplayCases } from "@/sanity/lib/content";

export function CasesClient({ cases }: { cases: DisplayCases }) {
  const { lang } = useLanguage();
  const items = cases[lang];

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          title={lang === "en" ? "Cases" : "案例"}
          text={
            lang === "en"
              ? "Neutral case types for sourcing, sample development, order support and buyer communication."
              : "面向采购、样品开发、订单支持与买家沟通的中性案例类型。"
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map(([title, challenge, solution, result], index) => (
            <article key={`${title}-${index}`} className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
              <VisualPlaceholder
                label={
                  lang === "en"
                    ? ["Denim sourcing image placeholder", "Custom fabric image placeholder", "Quality inspection image placeholder", "Buyer cooperation image placeholder"][index % 4]
                    : ["牛仔采购图片占位", "定制面料图片占位", "质量检验图片占位", "买家合作图片占位"][index % 4]
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
