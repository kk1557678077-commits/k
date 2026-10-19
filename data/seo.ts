import type { Metadata } from "next";

export const siteUrl = "https://www.ruilong.icu";
export const seoTitle = "瑞龙国际｜佛山西樵招商合作平台";
export const seoDescription =
  "瑞龙国际立足佛山西樵，面向商业空间、品牌入驻、项目合作与产业资源合作提供招商咨询与合作对接。";

// 分享卡片的公共部分；url 由各页面自己填写，避免所有页面都声明成首页
export const baseOpenGraph = {
  title: seoTitle,
  description: seoDescription,
  siteName: "瑞龙国际",
  type: "website" as const,
  locale: "zh_CN",
  images: [
    {
      url: "/images/ruilong-international/hero-exterior-new-01.jpg",
      width: 1800,
      height: 1200,
      alt: "瑞龙国际写字楼与岭南风格商业外立面"
    }
  ]
};

// 每个页面的 canonical 和 og:url 指向自己；path 以 / 开头，相对 metadataBase 解析
export function pageSeo(path: string): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, url: path }
  };
}
