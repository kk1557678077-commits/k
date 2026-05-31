import { ContactClient } from "./ContactClient";
import { getContactInfoWithFallback, getFaqWithFallback } from "@/sanity/lib/content";

export default async function ContactPage() {
  const [contactInfo, faqs] = await Promise.all([
    getContactInfoWithFallback(),
    getFaqWithFallback()
  ]);

  return <ContactClient contactInfo={contactInfo} faqs={faqs} />;
}
