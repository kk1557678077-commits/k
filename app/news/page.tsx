"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { news } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function NewsPage() {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          title={lang === "en" ? "News" : "资讯"}
          text={
            lang === "en"
              ? "Placeholder updates for company news, fabric development and sourcing tips."
              : "用于公司动态、面料开发与采购建议的占位资讯。"
          }
        />
        <div className="grid gap-5">
          {news[lang].map(([title, text], index) => (
            <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gold">2026.0{index + 1}</p>
              <h2 className="mt-2 text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
