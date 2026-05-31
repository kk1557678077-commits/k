import { defineField, defineType } from "sanity";

export const downloadItem = defineType({
  name: "downloadItem",
  title: "Download Item",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule: any) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Product Catalogue", "Fabric Specification Sheet", "Testing Report Placeholder", "Company Profile", "Other"]
      }
    }),
    defineField({ name: "fileType", title: "File Type", type: "string" }),
    defineField({ name: "fileUrl", title: "File URL", type: "url" }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "en",
      options: { list: [{ title: "English", value: "en" }, { title: "Chinese", value: "zh" }] }
    }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number", initialValue: 0 }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true })
  ]
});
