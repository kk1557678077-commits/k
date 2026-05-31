"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

export default function TermsPage() {
  const { lang } = useLanguage();
  const sections =
    lang === "en"
      ? [
          ["Business Reference Only", "Website content is provided for B2B textile sourcing and inquiry reference. It is not a final quotation, contract or guarantee."],
          ["Product Information", "Product information, categories, specifications and sample directions may be updated. Final specifications depend on confirmed samples, quotations, order notes and written agreements."],
          ["Images and Placeholders", "Some images may be placeholders until real company, product or process photos are added. Placeholder images are used only to show the intended website structure."],
          ["Inquiry Communication", "Submitting an inquiry does not create an order commitment. Ruilong International will review the information and respond with practical next steps when possible."],
          ["No Unverified Guarantee Claims", "The website does not claim unverified certificates, clients, export countries, factory size, annual output, production capacity or awards."]
        ]
      : [
          ["仅供业务参考", "网站内容用于B2B纺织面料采购与询盘参考，不代表最终报价、合同或保证。"],
          ["产品信息", "产品信息、分类、规格与样品方向可能会更新。最终规格以确认样品、报价、订单说明及书面约定为准。"],
          ["图片与占位内容", "部分图片在真实公司、产品或流程照片上传前可能为占位图。占位图仅用于展示网站结构。"],
          ["询盘沟通", "提交询盘不代表形成订单承诺。瑞隆国际会评估信息，并在可行时回复实际下一步。"],
          ["不使用未经核实的保证性表述", "网站不声明未经核实的证书、客户、出口国家、工厂规模、年产量、产能或奖项。"]
        ];

  return (
    <section className="section bg-slate-50">
      <div className="container-page max-w-4xl">
        <SectionHeading
          title={lang === "en" ? "Terms / Disclaimer" : "条款 / 免责声明"}
          text={
            lang === "en"
              ? "Basic website terms for inquiry reference and practical B2B communication."
              : "用于询盘参考与B2B业务沟通的基础网站条款。"
          }
        />
        <div className="grid gap-5">
          {sections.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
