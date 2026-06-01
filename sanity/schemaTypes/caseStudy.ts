import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule: any) => rule.required() }),
    defineField({
      name: "translationKey",
      title: "Translation Key",
      type: "string",
      description: "Optional helper to group English and Chinese versions of the same content, for example denim-garment-fabric-sourcing."
    }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "challenge", title: "Challenge", type: "text", rows: 3 }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 3 }),
    defineField({ name: "result", title: "Result", type: "text", rows: 3 }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description: "Create separate documents for English and Chinese versions. Use en for English and zh for Chinese.",
      initialValue: "en",
      options: { list: [{ title: "English", value: "en" }, { title: "中文", value: "zh" }] }
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image"
    }
  }
});
