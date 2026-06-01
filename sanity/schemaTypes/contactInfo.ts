import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string" }),
    defineField({
      name: "translationKey",
      title: "Translation Key",
      type: "string",
      description: "Optional helper to group English and Chinese contact info versions, for example ruilong-contact."
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
    defineField({ name: "wechat", title: "WeChat", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "mapEmbedUrl", title: "Map Embed URL", type: "url" }),
    defineField({ name: "businessHours", title: "Business Hours", type: "string" }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description: "Create separate documents for English and Chinese versions. Use en for English and zh for Chinese.",
      initialValue: "en",
      options: { list: [{ title: "English", value: "en" }, { title: "中文", value: "zh" }] }
    }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true })
  ]
});
