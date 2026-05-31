"use client";

import { FileText } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

export default function DownloadsPage() {
  const { lang } = useLanguage();
  const labels =
    lang === "en"
      ? {
          title: "Download Centre",
          text: "A prepared area for future catalogues, specification sheets, testing reports and company materials.",
          note: "Files will be added after official materials are confirmed.",
          items: ["Product Catalogue", "Fabric Specification Sheet", "Testing Report Placeholder", "Company Profile Placeholder"]
        }
      : {
          title: "资料下载",
          text: "为后续产品目录、规格表、检测报告与公司资料预留的下载区域。",
          note: "正式资料确认后将添加文件。",
          items: ["产品目录", "面料规格表", "检测报告占位", "公司简介占位"]
        };

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading title={labels.title} text={labels.text} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {labels.items.map((item) => (
            <article key={item} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <FileText className="text-gold" size={28} />
              <h2 className="mt-5 text-lg font-bold text-navy">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{labels.note}</p>
              <button
                type="button"
                disabled
                className="mt-5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted"
              >
                {lang === "en" ? "Coming Soon" : "即将添加"}
              </button>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-line bg-white p-6 text-sm leading-7 text-muted shadow-sm">
          {labels.note}
        </div>
      </div>
    </section>
  );
}
