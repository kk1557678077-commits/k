"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { products, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

type Product = (typeof products)[number];

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
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
            <Image src={product.image} alt={item.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm leading-6 text-muted">{item.description}</p>
            <dl className="mt-5 grid gap-3">
              {specs.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[110px_1fr] gap-3 border-b border-line pb-2 text-sm">
                  <dt className="font-semibold text-navy">{label}</dt>
                  <dd className="text-muted">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="focus-ring mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white"
            >
              {t.cta.inquire}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
