import { defineField, defineType } from "sanity";

export const investmentOpportunity = defineType({
  name: "investmentOpportunity",
  title: "Investment Opportunity",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule: any) => rule.required() }),
    defineField({
      name: "translationKey",
      title: "Translation Key",
      type: "string",
      description: "Optional helper to group English and Chinese versions of the same opportunity."
    }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Commercial Leasing", "Office Cooperation", "Brand Entry", "Project Cooperation", "Service Provider Cooperation"]
      }
    }),
    defineField({
      name: "editableNote",
      title: "Editable Note",
      type: "text",
      rows: 2,
      description: "Use this field to mark content that requires final confirmation before publishing."
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "en",
      options: { list: [{ title: "English", value: "en" }, { title: "Chinese", value: "zh" }] }
    }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number", initialValue: 0 }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category"
    }
  }
});
