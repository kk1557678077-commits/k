"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import type { DisplayProduct } from "@/sanity/lib/content";

type Product = DisplayProduct;

export function ProductModal({
  product,
  onClose
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const t = ui[lang];

  if (!product) return null;
  const item = product[lang];
  const specLabels =
    lang === "en"
      ? ["Composition", "Width", "Weight", "Application", "MOQ", "Lead Time"]
      : ["成分", "门幅", "克重", "应用", "MOQ", "交期"];
  const specs = [
    [specLabels[0], item.composition],
    [specLabels[1], item.width],
    [specLabels[2], item.weight],
    [specLabels[3], item.application],
    [specLabels[4], item.moq],
    [specLabels[5], item.leadTime]
  ];

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-navy/60 p-4" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-lg bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-line p-4">
          <h3 className="text-xl font-bold text-navy">{item.name}</h3>
          <button onClick={onClose} className="focus-ring rounded-full p-2 hover:bg-slate-100" aria-label={t.cta.close}>
            <X size={20} />
          </button>
        </div>
        <div className="grid gap-6 p-5 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
            <VisualPlaceholder label={item.imageLabel} sublabel={product.imagePath} tone={product.placeholderTone} />
          </div>
          <div>
            <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-charcoal">
              {lang === "en" ? "Suggested inquiry" : "建议询盘"}: {product.inquiryType}
            </p>
            <p className="text-sm leading-6 text-muted">{item.description}</p>
            <dl className="mt-5 grid gap-3">
              {specs.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[110px_1fr] gap-3 border-b border-line pb-2 text-sm">
                  <dt className="font-semibold text-navy">{label}</dt>
                  <dd className="text-muted">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 rounded-lg bg-slate-50 p-4">
              <h4 className="text-sm font-bold text-navy">
                {lang === "en" ? "Key Features" : "主要特点"}
              </h4>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <Link
                href="/contact"
                className="focus-ring rounded-full border border-navy px-4 py-2.5 text-center text-sm font-semibold text-navy hover:bg-slate-50"
              >
                {t.cta.samples}
              </Link>
              <Link
                href="/contact"
                className="focus-ring rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#a27f43]"
              >
                {t.cta.quote}
              </Link>
              <Link
                href="/contact"
                className="focus-ring rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-charcoal"
              >
                {lang === "en" ? "Custom Fabric" : "定制面料"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
