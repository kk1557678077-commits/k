"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { supplySteps } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function SupplyChainPage() {
  const { lang } = useLanguage();
  const labels =
    lang === "en"
      ? {
          title: "Full Supply Chain Coordination",
          text:
            "A practical view of the textile process from yarn preparation to delivery support. Ruilong International helps buyers keep specifications, sampling, inspection and delivery communication clear at each stage.",
          noteTitle: "What buyers can prepare",
          noteText:
            "Reference sample, target composition, width, weight, color, application, quantity range, testing needs, packing notes and delivery country."
        }
      : {
          title: "全供应链协调",
          text:
            "从纱线准备到交付支持的纺织流程说明。瑞隆国际协助买家在各阶段清晰沟通规格、打样、检验与交付事项。",
          noteTitle: "建议买家提前准备",
          noteText: "参考样、目标成分、门幅、克重、颜色、用途、数量范围、测试需求、包装说明与交付国家/地区。"
        };

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow={lang === "en" ? "Process visibility" : "流程透明"}
          title={labels.title}
          text={labels.text}
        />
        <div className="mb-8 rounded-lg border border-line bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-navy">{labels.noteTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{labels.noteText}</p>
        </div>
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <VisualPlaceholder
            label={lang === "en" ? "Weaving process image placeholder" : "织造流程图片占位"}
            sublabel="/images/supply-chain/weaving-process.jpg"
            tone="denim"
          />
          <VisualPlaceholder
            label={lang === "en" ? "Finishing process image placeholder" : "后整理流程图片占位"}
            sublabel="/images/supply-chain/finishing-process.jpg"
            tone="gold"
          />
          <VisualPlaceholder
            label={lang === "en" ? "Quality inspection image placeholder" : "质量检验图片占位"}
            sublabel="/images/supply-chain/quality-inspection.jpg"
            tone="navy"
          />
        </div>
        <div className="relative grid gap-5 lg:grid-cols-3">
          {supplySteps[lang].map(([title, text], index) => (
            <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-base font-bold text-white">
                  {index + 1}
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-muted">
                  {lang === "en" ? "Step" : "步骤"} {index + 1}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
