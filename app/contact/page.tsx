"use client";

import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { useLanguage } from "@/components/LanguageProvider";
import { contactInfo } from "@/data/content";

export default function ContactPage() {
  const { lang } = useLanguage();
  const labels = lang === "en"
    ? {
        title: "Contact / Inquiry",
        text: "Use the forms below to request fabric samples, ask for a quotation or start a sourcing discussion with Ruilong International.",
        info: "Contact Information",
        map: "Map placeholder - replace with an embedded Xiqiao, Foshan map later.",
        inquiry: "Inquiry Form",
        samples: "Request Samples",
        quote: "Get a Quote",
        custom: "Custom Fabric Inquiry",
        reminderTitle: "For faster follow-up",
        reminder:
          "Please include fabric type, quantity, application, target price and delivery country when submitting an inquiry.",
        guideTitle: "Inquiry checklist",
        guide: ["Fabric type", "Composition", "Weight / width", "Quantity", "Application", "Target price", "Delivery country", "Sample requirement"],
        cards: [
          ["Request Samples", "Share fabric direction, color, handfeel, application and delivery address for sample discussion."],
          ["Get a Quote", "Send composition, width, weight, color, quantity and packing notes for quotation preparation."],
          ["Custom Fabric Inquiry", "Provide reference sample, photos or target specifications for development communication."]
        ],
        fields: {
          company: "Company",
          address: "Address",
          email: "Email",
          phone: "Phone",
          whatsapp: "WhatsApp",
          wechat: "WeChat",
          editable: "editable"
        }
      }
    : {
        title: "联系 / 询盘",
        text: "您可以通过以下表单申请面料样品、获取报价或与瑞隆国际沟通采购需求。",
        info: "联系信息",
        map: "地图占位 - 后续可替换为佛山西樵嵌入地图。",
        inquiry: "询盘表单",
        samples: "申请样品",
        quote: "获取报价",
        custom: "定制面料询盘",
        reminderTitle: "为了更快跟进",
        reminder: "提交询盘时请尽量包含面料类型、数量、用途、目标价格与交付国家/地区。",
        guideTitle: "询盘信息清单",
        guide: ["面料类型", "成分", "克重 / 门幅", "数量", "用途", "目标价格", "交付国家/地区", "样品需求"],
        cards: [
          ["申请样品", "请提供面料方向、颜色、手感、用途与收样地址，便于样品沟通。"],
          ["获取报价", "请发送成分、门幅、克重、颜色、数量与包装要求，便于报价准备。"],
          ["定制面料询盘", "请提供参考样、图片或目标规格，便于开发沟通。"]
        ],
        fields: {
          company: "公司",
          address: "地址",
          email: "邮箱",
          phone: "电话",
          whatsapp: "WhatsApp",
          wechat: "微信",
          editable: "可编辑"
        }
      };

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading title={labels.title} text={labels.text} />
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {labels.cards.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">{labels.info}</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-muted">
              <span>{labels.fields.company}: {contactInfo.company}</span>
              <span>{labels.fields.address}: {contactInfo.address}</span>
              <span>{labels.fields.email}: {contactInfo.email} ({labels.fields.editable})</span>
              <span>{labels.fields.phone}: {contactInfo.phone} ({labels.fields.editable})</span>
              <span>{labels.fields.whatsapp}: {contactInfo.whatsapp} ({labels.fields.editable})</span>
              <span>{labels.fields.wechat}: {contactInfo.wechat} ({labels.fields.editable})</span>
            </div>
            <div className="mt-6 rounded-lg bg-slate-50 p-5">
              <h3 className="font-bold text-navy">{labels.reminderTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{labels.reminder}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {labels.guide.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <VisualPlaceholder label={labels.map} sublabel={contactInfo.address} tone="slate" />
            </div>
          </aside>
          <div className="grid gap-6">
            <InquiryForm formType="Quick Inquiry" title={labels.inquiry} />
            <div className="grid gap-6 md:grid-cols-2">
              <InquiryForm compact formType="Request Samples" title={labels.samples} />
              <InquiryForm compact formType="Get a Quote" title={labels.quote} />
            </div>
            <InquiryForm formType="Custom Fabric" title={labels.custom} />
          </div>
        </div>
      </div>
    </section>
  );
}
