import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule: any) => rule.required() }),
    defineField({
      name: "translationKey",
      title: "Translation Key",
      type: "string",
      description: "Optional helper to group English and Chinese versions of the same content, for example sample-request-faq."
    }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Inquiry", "Samples", "Custom Fabric", "Quality", "Delivery", "Export Communication"] }
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description: "Create separate documents for English and Chinese versions. Use en for English and zh for Chinese.",
      initialValue: "en",
      options: { list: [{ title: "English", value: "en" }, { title: "中文", value: "zh" }] }
    }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number", initialValue: 0 }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true })
  ]
});
