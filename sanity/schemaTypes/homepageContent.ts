import { defineField, defineType } from "sanity";

export const homepageContent = defineType({
  name: "homepageContent",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 3 }),
    defineField({ name: "primaryButtonText", title: "Primary Button Text", type: "string" }),
    defineField({ name: "secondaryButtonText", title: "Secondary Button Text", type: "string" }),
    defineField({ name: "finalCtaTitle", title: "Final CTA Title", type: "string" }),
    defineField({ name: "finalCtaSubtitle", title: "Final CTA Subtitle", type: "text", rows: 3 }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "en",
      options: { list: [{ title: "English", value: "en" }, { title: "Chinese", value: "zh" }] }
    }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true })
  ]
});
