"use client";

import Image from "next/image";
import Link from "next/link";
import { products, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

type Product = (typeof products)[number];

export function ProductCard({
  product,
  onDetails
}: {
  product: Product;
  onDetails?: (product: Product) => void;
}) {
  const { lang } = useLanguage();
  const t = ui[lang];
  const item = product[lang];

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image src={product.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {item.category}
        </p>
        <h3 className="mt-2 text-xl font-bold text-navy">{item.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-charcoal">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <button
            onClick={() => onDetails?.(product)}
            className="focus-ring rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy hover:bg-slate-50"
          >
            {t.cta.details}
          </button>
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold text-white hover:bg-[#a27f43]"
          >
            {t.cta.inquire}
          </Link>
        </div>
      </div>
    </article>
  );
}
