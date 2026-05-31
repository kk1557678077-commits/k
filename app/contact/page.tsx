"use client";

import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { lang } = useLanguage();
  const labels = lang === "en"
    ? {
        title: "Contact / Inquiry",
        text: "Use the forms below to request samples, ask for a quotation or start a sourcing discussion.",
        info: "Contact Information",
        map: "Map placeholder - replace with an embedded map later.",
        inquiry: "Inquiry Form",
        samples: "Request Samples",
        quote: "Get a Quote"
      }
    : {
        title: "联系 / 询盘",
        text: "您可以通过以下表单申请样品、获取报价或沟通采购需求。",
        info: "联系信息",
        map: "地图占位 - 后续可替换为嵌入地图。",
        inquiry: "询盘表单",
        samples: "申请样品",
        quote: "获取报价"
      };

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading title={labels.title} text={labels.text} />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">{labels.info}</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-muted">
              <span>Company: Ruilong International</span>
              <span>Location: Xiqiao, Foshan, Guangdong, China</span>
              <span>Email: sales@example.com (editable)</span>
              <span>Phone: +86-000-0000-0000 (editable)</span>
              <span>WeChat: editable</span>
              <span>WhatsApp: editable</span>
            </div>
            <div className="mt-6 flex min-h-56 items-center justify-center rounded-lg border border-dashed border-line bg-slate-50 p-6 text-center text-sm font-medium text-muted">
              {labels.map}
            </div>
          </aside>
          <div className="grid gap-6">
            <InquiryForm title={labels.inquiry} />
            <div className="grid gap-6 md:grid-cols-2">
              <InquiryForm compact title={labels.samples} />
              <InquiryForm compact title={labels.quote} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
