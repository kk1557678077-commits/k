"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo, navItems, products, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import { SHOW_TEXTILE_ENTRY } from "@/components/siteFlags";

const textilePaths = [
  "/textile",
  "/about",
  "/products",
  "/supply-chain",
  "/rd-technology",
  "/cases",
  "/news",
  "/downloads",
  "/contact"
];

const mainFooterLinks = [
  ["项目介绍", "/#project"],
  ["楼层业态", "/#opportunities"],
  ["现场空间", "/#commercial-space"],
  ["联系咨询", "/#contact"]
];

export function Footer() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const t = ui[lang];
  const isTextileArea = textilePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  // 备案号未填写真实值前不在招商首页展示占位文字
  const showIcp = !/placeholder/i.test(contactInfo.icp);

  if (!isTextileArea) {
    // 名字先行的收尾：全宽“瑞龙国际”，其下是联系方式与少量链接
    return (
      <footer className="overflow-hidden bg-[#0a1420] pb-24 text-[#eeede9] md:pb-10">
        <div className="mx-auto w-full max-w-[90rem] px-5 pt-20 sm:px-8">
          <p className="whitespace-nowrap font-display text-[20.5vw] font-black leading-[0.92] tracking-[-0.04em] 2xl:text-[18.5rem]" aria-hidden>
            瑞龙国际
          </p>
          <div className="mt-[4.5rem] grid gap-12 md:grid-cols-12">
            <div className="grid gap-3 text-[clamp(1.375rem,1.1rem+0.9vw,1.875rem)] font-semibold text-[#d6b46a] md:col-span-5">
              <a href="tel:13929936713" className="tabular hover:text-white">139 2993 6713</a>
              <span>佛山市南海区西樵镇碧霞路10号</span>
            </div>
            <div className="grid grid-cols-2 gap-8 text-[15px] md:col-span-6 md:col-start-7 md:grid-cols-3">
              <div className="grid content-start gap-2">
                {mainFooterLinks.map(([label, href]) => (
                  <Link key={href} href={href} className="hover:text-[#d6b46a]">
                    {label}
                  </Link>
                ))}
                {SHOW_TEXTILE_ENTRY && (
                  <Link href="/textile" className="hover:text-[#d6b46a]">进入瑞龙纺织</Link>
                )}
              </div>
              <div className="grid content-start gap-2">
                <Link href="/#location" className="hover:text-[#d6b46a]">区位优势</Link>
                <Link href="/#cooperation" className="hover:text-[#d6b46a]">合作方式</Link>
                <Link href="/#resources" className="hover:text-[#d6b46a]">招商服务</Link>
              </div>
              <div className="grid content-start gap-2">
                <span>运营：佛山瑞龙国际酒店管理有限公司</span>
                <a href={`mailto:${contactInfo.email}`} className="break-all hover:text-[#d6b46a]">{contactInfo.email}</a>
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col gap-3 text-sm text-[#eeede9]/75 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} 瑞龙国际 · <Link href="/privacy-policy" className="hover:text-white">隐私政策</Link> ·{" "}
              <Link href="/terms" className="hover:text-white">使用条款</Link>
              {showIcp && <> · {contactInfo.icp}</>}
            </span>
            <a href="#top" className="hover:text-white">回到顶部 ↑</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="text-xl font-bold">Ruilong Textile</div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">{t.footer.desc}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/" className="font-semibold text-[#f0d28d] hover:text-white">返回瑞龙国际招商</Link>
            <Link href="/privacy-policy" className="text-white/70 hover:text-white">{t.footer.privacy}</Link>
            <Link href="/terms" className="text-white/70 hover:text-white">{t.footer.terms}</Link>
            <Link href="/downloads" className="text-white/70 hover:text-white">{t.footer.downloads}</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{t.footer.quickLinks}</h3>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {t.nav[item.key]}
              </Link>
            ))}
            <Link href="/downloads" className="text-sm text-white/70 hover:text-white">
              {t.footer.downloads}
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{t.footer.products}</h3>
          <div className="mt-4 grid gap-2">
            {products.slice(0, 6).map((product) => (
              <Link key={product.id} href={`/products?category=${encodeURIComponent(product.filters.category)}`} className="text-sm text-white/70 hover:text-white">
                {product[lang].category}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{t.footer.contact}</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <span>Textile website: www.ruilong.icu/textile</span>
            <span>{contactInfo.address}</span>
            <span>Email: {contactInfo.email} (editable)</span>
            <span>Phone: {contactInfo.phone} (editable)</span>
            <span>WhatsApp: {contactInfo.whatsapp} (editable)</span>
            <span>WeChat: {contactInfo.wechat} (editable)</span>
            <span>ICP: {contactInfo.icp}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Ruilong Textile. {t.footer.copyright}</span>
          <span>
            <Link href="/" className="hover:text-white">返回瑞龙国际招商</Link>
            {" | "}
            <Link href="/downloads" className="hover:text-white">{t.footer.downloads}</Link>
            {" | "}
            {contactInfo.icp}
          </span>
        </div>
      </div>
    </footer>
  );
}
