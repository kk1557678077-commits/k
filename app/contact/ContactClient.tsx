"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EmbeddedMap } from "@/components/EmbeddedMap";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import type { DisplayContactInfoByLang, DisplayFaq } from "@/sanity/lib/content";

export function ContactClient({
  contactInfo,
  faqs
}: {
  contactInfo: DisplayContactInfoByLang;
  faqs: DisplayFaq;
}) {
  const { lang } = useLanguage();
  const currentContactInfo = contactInfo[lang] || contactInfo.en;
  const faqItems = faqs[lang];
  const labels = lang === "en"
    ? {
        title: "Contact / Inquiry",
        text: "Use the forms below to request fabric samples, ask for a quotation or start a sourcing discussion with Ruilong International.",
        info: "Contact Information",
        inquiry: "Inquiry Form",
        samples: "Request Samples",
        quote: "Get a Quote",
        custom: "Custom Fabric Inquiry",
        visit: "Visit / Contact Us",
        mapPending: "Map embed will be added after confirming the business address.",
        privacyNote: "Your information will only be used to respond to your textile sourcing inquiry.",
        launchCta: "Send an inquiry",
        launchText:
          "Share your fabric type, target specification, quantity and delivery country. Ruilong International will use your details to prepare a practical sourcing or quotation discussion.",
        reminderTitle: "For faster follow-up",
        reminder:
          "Please include fabric type, quantity, application, target price and delivery country when submitting an inquiry.",
        guideTitle: "Inquiry checklist",
        guide: ["Fabric type", "Composition", "Weight / width", "Quantity", "Application", "Target price", "Delivery country", "Sample requirement", "Reference image or specification if available"],
        faqTitle: "Buyer FAQ",
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
          hours: "Business Hours",
          editable: "editable"
        }
      }
    : {
        title: "联系 / 询盘",
        text: "您可以通过以下表单申请面料样品、获取报价或与 Ruilong International 沟通采购需求。",
        info: "联系信息",
        inquiry: "询盘表单",
        samples: "申请样品",
        quote: "获取报价",
        custom: "定制面料询盘",
        visit: "到访 / 联系我们",
        mapPending: "确认实际业务地址后将添加地图嵌入。",
        privacyNote: "您的信息仅用于回复您的纺织面料采购咨询。",
        launchCta: "发送询盘",
        launchText: "请提供面料类型、目标规格、数量与交付国家/地区，Ruilong International 将根据需求沟通合适的采购或报价方向。",
        reminderTitle: "为了更快跟进",
        reminder: "提交询盘时请尽量包含面料类型、数量、用途、目标价格与交付国家/地区。",
        guideTitle: "询盘信息清单",
        guide: ["面料类型", "成分", "克重 / 门幅", "数量", "用途", "目标价格", "交付国家/地区", "样品需求", "可提供参考图片或规格"],
        faqTitle: "买家常见问题",
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
          hours: "工作时间",
          editable: "可编辑"
        }
      };

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading title={labels.title} text={labels.text} />
        <div className="mb-8 grid gap-5 rounded-lg border border-line bg-white p-6 shadow-sm lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">{labels.launchCta}</p>
            <h1 className="mt-3 text-2xl font-bold text-navy">{labels.inquiry}</h1>
          </div>
          <p className="text-sm leading-7 text-muted">{labels.launchText}</p>
        </div>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {labels.cards.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            [Mail, labels.fields.email, currentContactInfo.email],
            [Phone, labels.fields.phone, currentContactInfo.phone],
            [MessageCircle, labels.fields.whatsapp, currentContactInfo.whatsapp],
            [MessageCircle, labels.fields.wechat, currentContactInfo.wechat],
            [MapPin, labels.fields.address, currentContactInfo.address]
          ].map(([Icon, title, value]) => {
            const ContactIcon = Icon as typeof Mail;
            return (
              <article key={String(title)} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <ContactIcon className="text-gold" size={22} />
                <h2 className="mt-3 text-sm font-bold text-navy">{String(title)}</h2>
                <p className="mt-2 break-words text-sm leading-6 text-muted">{String(value)} ({labels.fields.editable})</p>
              </article>
            );
          })}
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">{labels.info}</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-muted">
              <span>{labels.fields.company}: {currentContactInfo.companyName}</span>
              <span>{labels.fields.address}: {currentContactInfo.address}</span>
              <span>{labels.fields.email}: {currentContactInfo.email} ({labels.fields.editable})</span>
              <span>{labels.fields.phone}: {currentContactInfo.phone} ({labels.fields.editable})</span>
              <span>{labels.fields.whatsapp}: {currentContactInfo.whatsapp} ({labels.fields.editable})</span>
              <span>{labels.fields.wechat}: {currentContactInfo.wechat} ({labels.fields.editable})</span>
              {currentContactInfo.businessHours && <span>{labels.fields.hours}: {currentContactInfo.businessHours}</span>}
            </div>
            <div className="mt-6 rounded-lg bg-slate-50 p-5">
              <h3 className="font-bold text-navy">{labels.reminderTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{labels.reminder}</p>
              <p className="mt-3 text-xs font-medium leading-5 text-muted">{labels.privacyNote}</p>
              <h4 className="mt-4 text-sm font-bold text-navy">{labels.guideTitle}</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {labels.guide.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal">
                    {item}
                  </span>
                ))}
              </div>
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
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <EmbeddedMap
            address={currentContactInfo.address}
            title={labels.visit}
            placeholderText={labels.mapPending}
            mapEmbedUrl={currentContactInfo.mapEmbedUrl}
          />
          <section className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">{labels.faqTitle}</h2>
            <div className="mt-5 grid gap-4">
              {faqItems.map((item) => (
                <article key={item.id} className="border-b border-line pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-bold text-navy">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
