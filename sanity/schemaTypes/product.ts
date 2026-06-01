import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule: any) => rule.required() }),
    defineField({
      name: "translationKey",
      title: "Translation Key",
      type: "string",
      description: "Optional helper to group English and Chinese versions of the same content, for example mid-weight-denim-fabric."
    }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Denim Fabric", "Casual Fabric", "Functional Fabric", "Custom Fabric", "New Arrivals"]
      }
    }),
    defineField({ name: "composition", title: "Composition", type: "string" }),
    defineField({ name: "width", title: "Width", type: "string" }),
    defineField({ name: "weight", title: "Weight", type: "string" }),
    defineField({ name: "application", title: "Application", type: "string" }),
    defineField({ name: "moq", title: "MOQ", type: "string" }),
    defineField({ name: "leadTime", title: "Lead Time", type: "string" }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description: "Create separate documents for English and Chinese versions. Use en for English and zh for Chinese.",
      initialValue: "en",
      options: { list: [{ title: "English", value: "en" }, { title: "中文", value: "zh" }] }
    }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number", initialValue: 0 }),
    defineField({ name: "isFeatured", title: "Featured Product", type: "boolean", initialValue: false })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image"
    }
  }
});
