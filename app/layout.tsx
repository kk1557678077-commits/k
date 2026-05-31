import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: {
    default: "Ruilong International | Foshan Textile Supply Chain Partner",
    template: "%s | Ruilong International"
  },
  description:
    "B2B textile sourcing, denim fabric, custom fabric development and supply chain coordination from Xiqiao, Foshan, Guangdong, China.",
  openGraph: {
    title: "Ruilong International",
    description:
      "Connecting global buyers with Foshan textile supply chain resources.",
    type: "website",
    locale: "en_US"
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
