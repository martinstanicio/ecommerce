import { anyone, editorOrAdmin } from "@/lib/access";
import generateSlug from "@/lib/generate-slug";
import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: { useAsTitle: "name" },
  access: {
    create: editorOrAdmin,
    read: anyone,
    update: editorOrAdmin,
    delete: editorOrAdmin,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeValidate: [generateSlug("products", "name")],
      },
    },
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      required: true,
      hasMany: true,
      minRows: 1,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      required: true,
      hasMany: true,
      minRows: 1,
      displayPreview: true,
    },
  ],
};
