"use client";

import { FileText } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import type { DisplayDownloads } from "@/sanity/lib/content";

export function DownloadsClient({ downloads }: { downloads: DisplayDownloads }) {
  const { lang } = useLanguage();
  const items = downloads[lang];
  const labels =
    lang === "en"
      ? {
          title: "Download Centre",
          text: "A prepared area for future catalogues, specification sheets, testing reports and company materials.",
          note: "Files will be added after official materials are confirmed.",
          download: "Download / View File",
          comingSoon: "Coming Soon"
        }
      : {
          title: "资料下载",
          text: "预留瑞龙国际招商资料、项目区位调研资料、商业空间资料与合作咨询表下载入口。",
          note: "正式资料确认并存放到 public/downloads 后，可在 Sanity 中补充文件链接。",
          download: "下载 / 查看文件",
          comingSoon: "即将添加"
        };

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading title={labels.title} text={labels.text} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.id} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <FileText className="text-gold" size={28} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {item.category} / {item.fileType}
              </p>
              <h2 className="mt-3 text-lg font-bold text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description || labels.note}</p>
              {item.fileUrl ? (
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-5 inline-flex rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white"
                >
                  {labels.download}
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="mt-5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted"
                >
                  {labels.comingSoon}
                </button>
              )}
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
