"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { pages } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();
  const about = pages.about[lang];

  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading title={about.title} text={about.intro} />
          <VisualPlaceholder
            label={lang === "en" ? "Buyer cooperation image placeholder" : "买家合作图片占位"}
            sublabel={lang === "en" ? "Replace with a real office, textile market or sourcing discussion image." : "后续替换为真实办公室、纺织市场或采购沟通图片。"}
            tone="slate"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {about.sections.map(([title, text]) => (
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
