"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <SectionHeading
          title={lang === "en" ? "Privacy Policy" : "隐私政策"}
          text={
            lang === "en"
              ? "Placeholder privacy policy for Phase 1. Please replace with legal review before public launch if needed."
              : "Phase 1 隐私政策占位内容。如正式上线需要，请替换为经过审核的版本。"
          }
        />
        <div className="rounded-lg border border-line bg-white p-6 text-sm leading-7 text-muted shadow-sm">
          {lang === "en"
            ? "Ruilong International only uses inquiry information to respond to buyer requests. Placeholder contact forms do not send data in this Phase 1 demo."
            : "瑞隆国际仅将询盘信息用于回复买家需求。当前 Phase 1 演示表单不会实际发送数据。"}
        </div>
      </div>
    </section>
  );
}
