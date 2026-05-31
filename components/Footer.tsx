"use client";

import Link from "next/link";
import { navItems, products, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="text-xl font-bold">{t.brand}</div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">{t.footer.desc}</p>
        </div>
        <div>
          <h3 className="font-semibold">{t.footer.quickLinks}</h3>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{t.footer.products}</h3>
          <div className="mt-4 grid gap-2">
            {products.slice(0, 4).map((product) => (
              <Link key={product.id} href="/products" className="text-sm text-white/70 hover:text-white">
                {product[lang].category}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{t.footer.contact}</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <span>Xiqiao, Foshan, Guangdong, China</span>
            <span>Email: sales@example.com (editable)</span>
            <span>Phone: +86-000-0000-0000 (editable)</span>
            <span>WhatsApp / WeChat: editable</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Ruilong International. {t.footer.copyright}</span>
          <span>
            <Link href="/privacy-policy" className="hover:text-white">{t.footer.privacy}</Link> | {t.footer.icp}
          </span>
        </div>
      </div>
    </footer>
  );
}
