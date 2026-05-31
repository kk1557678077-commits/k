"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { contactInfo } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const sections =
    lang === "en"
      ? [
          ["Information We Collect", "When you submit an inquiry form, the website may collect your name, company, country or region, email address, phone, WhatsApp or WeChat contact, product interest, estimated quantity and message."],
          ["How We Use Information", "Inquiry information is used only for business communication, fabric sourcing discussion, sample request follow-up, quotation support and related buyer service communication."],
          ["No Payment or Sensitive Financial Data", "This website does not collect online payments and does not ask visitors to submit sensitive financial information."],
          ["Third-party Form Service", "Inquiry forms may be processed through Formspree or a similar form service configured by Ruilong International. The endpoint can be changed later without adding a database to this website."],
          ["Removal Requests", `You may contact Ruilong International at ${contactInfo.email} to request removal of inquiry information submitted through the website.`]
        ]
      : [
          ["我们收集的信息", "当您提交询盘表单时，网站可能收集您的姓名、公司、国家或地区、邮箱、电话、WhatsApp或微信联系方式、感兴趣的产品、预计数量与留言内容。"],
          ["信息用途", "询盘信息仅用于业务沟通、面料采购需求讨论、样品申请跟进、报价支持及相关买家服务沟通。"],
          ["不收集付款或敏感财务信息", "本网站不进行在线收款，也不会要求访客提交敏感财务信息。"],
          ["第三方表单服务", "询盘表单可能通过 Formspree 或瑞隆国际配置的类似表单服务处理。后续可更换接收方式，而无需为本网站增加数据库。"],
          ["删除请求", `您可以通过 ${contactInfo.email} 联系 Ruilong International，请求删除通过网站提交的询盘信息。`]
        ];

  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <SectionHeading
          title={lang === "en" ? "Privacy Policy" : "隐私政策"}
          text={
            lang === "en"
              ? "A simple privacy policy for a B2B textile sourcing inquiry website."
              : "适用于B2B纺织面料采购询盘网站的基础隐私政策。"
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
