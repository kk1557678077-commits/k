"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

const categories = ["All", "Denim Fabric", "Casual Fabric", "Functional Fabric", "Custom Fabric", "New Arrivals"];
const functions = ["All", "Stretch", "Durable", "Water Resistant", "Custom", "Soft Touch"];
const applications = ["All", "Garment", "Outdoor", "OEM/ODM"];

export default function ProductsPage() {
  const { lang } = useLanguage();
  const [category, setCategory] = useState("All");
  const [func, setFunc] = useState("All");
  const [application, setApplication] = useState("All");
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        return (
          (category === "All" || product.filters.category === category) &&
          (func === "All" || product.filters.function === func) &&
          (application === "All" || product.filters.application === application)
        );
      }),
    [category, func, application]
  );

  const labels = lang === "en"
    ? {
        title: "Products",
        text:
          "Browse practical fabric directions for sourcing discussion. Final composition, width, weight, MOQ and lead time are confirmed by sample, color, finishing and quantity.",
        category: "Category",
        function: "Function",
        application: "Application"
      }
    : {
        title: "产品中心",
        text: "浏览适用于采购沟通的面料方向。最终成分、门幅、克重、MOQ与交期需结合样品、颜色、后整理与数量确认。",
        category: "分类",
        function: "功能",
        application: "应用"
      };

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading title={labels.title} text={labels.text} />
        <div className="mb-8 grid gap-4 rounded-lg border border-line bg-white p-5 shadow-sm md:grid-cols-3">
          <Filter label={labels.category} value={category} options={categories} onChange={setCategory} />
          <Filter label={labels.function} value={func} options={functions} onChange={setFunc} />
          <Filter label={labels.application} value={application} options={applications} onChange={setApplication} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onDetails={setSelected} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="rounded-lg border border-line bg-white p-6 text-muted">
            {lang === "en" ? "No products match the selected filters." : "暂无符合筛选条件的产品。"}
          </p>
        )}
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function Filter({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring rounded-lg border border-line px-3 py-3 text-sm font-medium text-charcoal"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
