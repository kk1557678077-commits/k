import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const displayFont = Noto_Serif_SC({
  weight: ["600", "700", "900"],
  display: "swap",
  preload: false,
  variable: "--font-display"
});

const siteUrl = "https://www.ruilong.icu";
const seoTitle = "瑞龙国际｜佛山西樵招商合作平台";
const seoDescription =
  "瑞龙国际立足佛山西樵，面向商业空间、品牌入驻、项目合作与产业资源合作提供招商咨询与合作对接。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | 瑞龙国际"
  },
  description: seoDescription,
  keywords: [
    "瑞龙国际",
    "佛山西樵招商",
    "商业空间",
    "品牌入驻",
    "项目合作",
    "产业资源合作"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "瑞龙国际",
    type: "website",
    locale: "zh_CN"
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={displayFont.variable}>
      <body id="top">
        <LanguageProvider>
          <Header />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
