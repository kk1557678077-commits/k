import { defineField, defineType } from "sanity";

export const news = defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule: any) => rule.required() }),
    defineField({
      name: "translationKey",
      title: "Translation Key",
      type: "string",
      description: "Optional helper to group English and Chinese versions of the same content, for example sourcing-tips-for-buyers."
    }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Company Updates", "Textile Industry Trends", "New Fabric Development", "Sourcing Tips"] }
    }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
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
