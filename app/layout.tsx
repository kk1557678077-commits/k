import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const siteUrl = "https://www.ruilong.icu";
const seoTitle = "Ruilong International | Business & Investment Cooperation";
const seoDescription =
  "Ruilong International is a business cooperation and investment attraction platform based in Xiqiao, Foshan, Guangdong, China, supporting commercial leasing, project cooperation and business inquiries.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Ruilong International"
  },
  description: seoDescription,
  keywords: [
    "Ruilong International",
    "Xiqiao Foshan investment",
    "commercial leasing Foshan",
    "business cooperation Guangdong",
    "investment attraction Foshan"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Ruilong International",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
