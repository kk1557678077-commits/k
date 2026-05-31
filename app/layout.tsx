import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: {
    default: "Ruilong International | Foshan Textile Sourcing & Custom Fabric Supplier",
    template: "%s | Ruilong International"
  },
  description:
    "Ruilong International connects global buyers with textile sourcing, denim fabric, custom fabric development and supply chain coordination resources from Xiqiao, Foshan, China.",
  keywords: [
    "Foshan textile sourcing",
    "Xiqiao textile",
    "denim fabric supplier",
    "custom fabric China",
    "textile export support",
    "fabric sourcing China"
  ],
  openGraph: {
    title: "Ruilong International | Foshan Textile Sourcing & Custom Fabric Supplier",
    description:
      "Ruilong International connects global buyers with textile sourcing, denim fabric, custom fabric development and supply chain coordination resources from Xiqiao, Foshan, China.",
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
