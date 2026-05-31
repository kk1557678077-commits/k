"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import type { DisplayNews } from "@/sanity/lib/content";

export function NewsClient({ news }: { news: DisplayNews }) {
  const { lang } = useLanguage();
  const items = news[lang].length ? news[lang] : lang === "en" ? news.zh : news.en;

  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          title={lang === "en" ? "News" : "资讯"}
          text={
            lang === "en"
              ? "Company updates, textile industry notes, fabric development and sourcing tips."
              : "公司动态、纺织行业信息、面料开发与采购建议。"
          }
        />
        <div className="grid gap-5">
          {items.map(([title, text, publishedAt], index) => (
            <article key={`${title}-${index}`} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gold">
                {publishedAt ? new Date(publishedAt).toISOString().slice(0, 10) : `2026.0${index + 1}`}
              </p>
              <h2 className="mt-2 text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
