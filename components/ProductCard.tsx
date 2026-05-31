"use client";

import Link from "next/link";
import { products, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

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
  const specLabels =
    lang === "en"
      ? { width: "Width", weight: "Weight", moq: "MOQ" }
      : { width: "门幅", weight: "克重", moq: "MOQ" };

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] bg-slate-100">
        <VisualPlaceholder label={item.imageLabel} sublabel={product.imagePath} tone={product.placeholderTone} />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {item.category}
        </p>
        <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-charcoal">
          {lang === "en" ? "Suggested inquiry" : "建议询盘"}: {product.inquiryType}
        </p>
        <h3 className="mt-2 text-xl font-bold text-navy">{item.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{item.description}</p>
        <dl className="mt-4 grid gap-2 border-t border-line pt-4 text-xs">
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-navy">{specLabels.width}</dt>
            <dd className="text-right text-muted">{item.width}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-navy">{specLabels.weight}</dt>
            <dd className="text-right text-muted">{item.weight}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-navy">{specLabels.moq}</dt>
            <dd className="text-right text-muted">{item.moq}</dd>
          </div>
        </dl>
        <ul className="mt-4 grid gap-1.5 text-xs leading-5 text-muted">
          {item.features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
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
