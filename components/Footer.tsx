"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo, navItems, products, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

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
  ["招商合作", "/#opportunities"],
  ["商业空间", "/#commercial-space"],
  ["项目介绍", "/#project"],
  ["联系方式", "/#contact"],
  ["瑞龙纺织入口", "/textile"]
];

export function Footer() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const t = ui[lang];
  const isTextileArea = textilePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  if (!isTextileArea) {
    return (
      <footer className="border-t border-[#d9c79f] bg-[#111c2e] text-white">
        <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="text-2xl font-bold">瑞龙国际</div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
              立足佛山西樵，面向商业空间、品牌入驻、项目合作与产业资源合作提供招商咨询与合作对接。
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#d6b46a]">招商合作</h3>
            <div className="mt-4 grid gap-2">
              {mainFooterLinks.slice(0, 4).map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-white/70 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#d6b46a]">项目入口</h3>
            <div className="mt-4 grid gap-2">
              <Link href="/#location" className="text-sm text-white/70 hover:text-white">区位优势</Link>
              <Link href="/#cooperation" className="text-sm text-white/70 hover:text-white">合作模式</Link>
              <Link href="/#resources" className="text-sm text-white/70 hover:text-white">商业配套</Link>
              <Link href="/textile" className="text-sm font-semibold text-[#f0d28d] hover:text-white">进入瑞龙纺织</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#d6b46a]">联系方式</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <span>项目地址：佛山市南海区西樵镇碧霞路10号瑞龙国际商业中心</span>
              <span>招商热线：13929936713</span>
              <span>运营公司：佛山瑞龙国际酒店管理有限公司</span>
              <span>邮箱：{contactInfo.email}（可编辑）</span>
              <span>{contactInfo.icp}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} 瑞龙国际。保留所有权利。</span>
            <span>
              <Link href="/textile" className="hover:text-white">瑞龙纺织入口</Link>
              {" | "}
              {contactInfo.icp}
            </span>
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
