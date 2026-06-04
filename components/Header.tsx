"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import { SHOW_TEXTILE_ENTRY } from "@/components/siteFlags";

const mainNavItemsBase = [
  { href: "/", label: "首页" },
  { href: "/#project", label: "项目介绍" },
  { href: "/#location", label: "区位优势" },
  { href: "/#opportunities", label: "招商业态" },
  { href: "/#cooperation", label: "合作模式" },
  { href: "/#resources", label: "商业配套" },
  { href: "/#contact", label: "联系咨询" }
];

const textileEntry = { href: "/textile", label: "进入瑞龙纺织" };

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

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = ui[lang];
  const isTextileArea = textilePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  const mainNavItems = SHOW_TEXTILE_ENTRY ? [...mainNavItemsBase, textileEntry] : mainNavItemsBase;
  const brand = isTextileArea ? "Ruilong Textile" : "瑞龙国际";
  const subtitle = isTextileArea ? "Textile sourcing | Xiqiao, Foshan" : "招商合作平台 | 佛山西樵";
  const logoHref = isTextileArea ? "/textile" : "/";
  const switchHref = isTextileArea ? "/" : "/textile";
  const switchLabel = isTextileArea ? "瑞龙国际招商" : "进入瑞龙纺织";
  const showSwitchButton = isTextileArea || SHOW_TEXTILE_ENTRY;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link href={logoHref} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
            RL
          </span>
          <span>
            <span className="block text-base font-bold text-navy">{brand}</span>
            <span className="hidden text-xs text-muted sm:block">{subtitle}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {isTextileArea
            ? navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-slate-100 hover:text-navy"
                >
                  {t.nav[item.key]}
                </Link>
              ))
            : mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-slate-100 hover:text-navy"
                >
                  {item.label}
                </Link>
              ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {isTextileArea && (
            <button
              onClick={toggleLang}
              className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy"
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
          )}
          {showSwitchButton && (
            <Link
              href={switchHref}
              className="focus-ring rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a27f43]"
            >
              {switchLabel}
            </Link>
          )}
        </div>

        <button
          className="focus-ring rounded-full border border-line p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {isTextileArea
              ? navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-charcoal hover:bg-slate-100"
                  >
                    {t.nav[item.key]}
                  </Link>
                ))
              : mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-charcoal hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ))}
            {(isTextileArea || showSwitchButton) && (
              <div className="mt-2 flex gap-2">
                {isTextileArea && (
                  <button
                    onClick={toggleLang}
                    className="focus-ring flex-1 rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy"
                  >
                    {lang === "en" ? "中文" : "EN"}
                  </button>
                )}
                {showSwitchButton && (
                  <Link
                    href={switchHref}
                    onClick={() => setOpen(false)}
                    className="focus-ring flex-1 rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold text-white"
                  >
                    {switchLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
