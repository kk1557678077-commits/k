"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { rdContent } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function RdTechnologyPage() {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          title={lang === "en" ? "R&D and Technology" : "研发与技术"}
          text={
            lang === "en"
              ? "Professional, realistic fabric development support for sourcing and custom projects."
              : "为采购与定制项目提供专业、务实的面料开发支持。"
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {rdContent[lang].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
