"use client";

import { FileText } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import type { DisplayDownloads } from "@/sanity/lib/content";

const zhDownloadContent = [
  {
    title: "瑞龙国际招商推介资料",
    description: "用于了解项目定位、商业体量、招商方向、运营主体和基础联系方式。正式文件确认后将在此开放下载。"
  },
  {
    title: "碧霞路项目周边调研摘要",
    description: "整理项目周边2公里范围内人口、社区、公交、教育、餐饮、零售等配套信息，辅助品牌进行选址判断。"
  },
  {
    title: "商业空间与实景资料",
    description: "预留临街铺面、内街商铺、中庭空间、写字楼及现有业态图片资料入口，便于后续看场前预览。"
  },
  {
    title: "招商合作咨询表",
    description: "预留品牌入驻、商业租赁、商务办公、项目合作等合作需求表入口，便于招商团队快速对接。"
  }
];

export function DownloadsClient({ downloads }: { downloads: DisplayDownloads }) {
  const { lang } = useLanguage();
  const items = downloads[lang];
  const displayItems =
    lang === "zh"
      ? items.map((item, index) => ({
          ...item,
          ...(zhDownloadContent[index] || {})
        }))
      : items;
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
          title: "瑞龙国际招商资料下载",
          text: "集中展示瑞龙国际招商推介、项目区位调研、商业空间资料与合作咨询表入口，方便品牌方在沟通前了解项目基础信息。",
          note: "当前页面为资料入口预留区。正式招商文件确认并存放到 public/downloads 后，将在此补充下载链接；具体招商条件以项目实际沟通为准。",
          download: "下载 / 查看文件",
          comingSoon: "即将添加"
        };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-80">
        <Image
          src="/images/ruilong-international/hero-exterior-new-01.jpg"
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
            {lang === "en" ? "Project Materials" : "项目资料"}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{labels.title}</h1>
          <p className="mt-4 text-sm leading-7 text-white/78">{labels.text}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {displayItems.map((item) => (
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
