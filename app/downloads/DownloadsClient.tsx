"use client";

import { FileText } from "lucide-react";
import Image from "next/image";
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
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-80">
        <Image
          src="/images/ruilong-international/building-front-01.jpg"
          alt="瑞龙国际项目外立面"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111c2e]/72" />
      </div>
      <div className="container-page">
        <div className="relative mb-10 max-w-3xl text-white">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#d6b46a]">
            {lang === "en" ? "Project Materials" : "招商资料"}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{labels.title}</h1>
          <p className="mt-4 text-sm leading-7 text-white/78">{labels.text}</p>
        </div>
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
