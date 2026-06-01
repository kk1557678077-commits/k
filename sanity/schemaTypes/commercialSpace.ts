import { defineField, defineType } from "sanity";

export const commercialSpace = defineType({
  name: "commercialSpace",
  title: "Commercial Space",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule: any) => rule.required() }),
    defineField({
      name: "translationKey",
      title: "Translation Key",
      type: "string",
      description: "Optional helper to group English and Chinese versions of the same commercial space."
    }),
    defineField({ name: "spaceType", title: "Space Type", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "availabilityStatus",
      title: "Availability Status",
      type: "string",
      options: { list: ["To Be Confirmed", "Available", "Under Discussion", "Not Public"] },
      initialValue: "To Be Confirmed"
    }),
    defineField({
      name: "verifiedDetails",
      title: "Verified Details",
      type: "array",
      of: [{ type: "string" }],
      description: "Only add confirmed facts such as verified address notes, usable space type or approved leasing conditions."
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "Use real project photos only after approval."
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
      subtitle: "spaceType",
      media: "image"
    }
  }
});
