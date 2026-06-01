import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruilong Textile | Textile Sourcing & Custom Fabric Support",
  description:
    "Ruilong Textile supports global buyers with textile sourcing, denim fabric, casual fabric, functional fabric, custom fabric development and supply chain coordination from Foshan, China.",
  keywords: [
    "textile sourcing China",
    "Foshan textile",
    "custom fabric supplier",
    "denim fabric sourcing",
    "fabric sourcing China",
    "Ruilong Textile"
  ],
  alternates: {
    canonical: "https://www.ruilong.icu/textile"
  },
  openGraph: {
    title: "Ruilong Textile | Textile Sourcing & Custom Fabric Support",
    description:
      "Textile sourcing, denim and custom fabric development support from Xiqiao, Foshan for international B2B buyers.",
    url: "https://www.ruilong.icu/textile",
    siteName: "Ruilong Textile",
    type: "website",
    locale: "en_US"
  }
};

export default function TextileLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
