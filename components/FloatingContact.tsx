"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { contactInfo } from "@/data/content";

const items = [
  { label: "Phone", icon: Phone, href: "/contact" },
  { label: "WeChat", icon: MessageCircle, href: "/contact" },
  { label: "WhatsApp", icon: Send, href: "/contact" },
  { label: "Email", icon: Mail, href: `mailto:${contactInfo.email}` },
  { label: "Inquiry", icon: MessageCircle, href: "/contact" }
];

export function FloatingContact() {
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
