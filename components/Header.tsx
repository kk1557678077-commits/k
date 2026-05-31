"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const t = ui[lang];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
            RL
          </span>
          <span>
            <span className="block text-base font-bold text-navy">{t.brand}</span>
            <span className="hidden text-xs text-muted sm:block">Xiqiao, Foshan</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-slate-100 hover:text-navy"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleLang}
            className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a27f43]"
          >
            {t.cta.quote}
          </Link>
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-charcoal hover:bg-slate-100"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <button
                onClick={toggleLang}
                className="focus-ring flex-1 rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy"
              >
                {lang === "en" ? "中文" : "EN"}
              </button>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="focus-ring flex-1 rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold text-white"
              >
                {t.cta.quote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
