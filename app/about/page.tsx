"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { pages } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();
  const about = pages.about[lang];

  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading title={about.title} text={about.intro} />
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
