"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { contactInfo } from "@/data/content";

const textilePaths = [
  "/textile",
  "/about",
  "/products",
  "/supply-chain",
  "/rd-technology",
  "/cases",
  "/news",
  "/downloads",
  "/contact"
];

export function FloatingContact() {
  const pathname = usePathname();
  const isTextileArea = textilePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  const contactHref = isTextileArea ? "/contact" : "/#contact";

  // 招商首页：手机底部两个带文字的主入口；平板显示在右下角，桌面由页头按钮代替
  if (!isTextileArea) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-30 bg-[#eeede9] p-2 md:inset-x-auto md:bottom-6 md:right-5 md:p-1.5 lg:hidden">
        <div className="grid grid-cols-2 gap-2 md:flex md:gap-1">
          <a
            href="tel:13929936713"
            className="focus-ring flex min-h-11 items-center justify-center gap-2 bg-[#e3e1db] text-[15px] font-semibold text-navy transition hover:bg-paper md:px-4"
          >
            <Phone size={17} />
            电话咨询
          </a>
          <Link
            href={contactHref}
            className="focus-ring flex min-h-11 items-center justify-center gap-2 bg-navy text-[15px] font-semibold text-white transition hover:bg-ink active:scale-[0.98] md:px-5"
          >
            <Send size={16} />
            预约看场
          </Link>
        </div>
      </div>
    );
  }

  const items = isTextileArea
    ? [
        { label: "Phone", icon: Phone, href: contactHref },
        { label: "WeChat", icon: MessageCircle, href: contactHref },
        { label: "WhatsApp", icon: Send, href: contactHref },
        { label: "Email", icon: Mail, href: `mailto:${contactInfo.email}` },
        { label: "Inquiry", icon: MessageCircle, href: contactHref }
      ]
    : [
        { label: "联系电话", icon: Phone, href: contactHref },
        { label: "微信咨询", icon: MessageCircle, href: contactHref },
        { label: "合作咨询", icon: Send, href: contactHref },
        { label: "邮件联系", icon: Mail, href: `mailto:${contactInfo.email}` },
        { label: "咨询表单", icon: MessageCircle, href: contactHref }
      ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-line bg-white p-2 shadow-soft md:bottom-6 md:left-auto md:right-4 md:w-auto md:rounded-full md:border">
      <div className="flex justify-around gap-1 md:flex-col">
        {items.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="focus-ring group flex h-11 w-11 items-center justify-center rounded-full text-navy transition hover:bg-slate-100"
            aria-label={label}
            title={label}
          >
            <Icon size={19} />
          </Link>
        ))}
      </div>
    </div>
  );
}
