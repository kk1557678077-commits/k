"use client";

import { SectionHeading } from "@/components/SectionHeading";
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
          {cases[lang].map(([title, challenge, solution, result]) => (
            <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              {[challenge, solution, result].map((line) => (
                <p key={line} className="mt-3 text-sm leading-7 text-muted">{line}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
