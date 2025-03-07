import { anyone, editorOrAdmin } from "@/lib/access";
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
      name: "name",
      type: "text",
      required: true,
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
      hasMany: true,
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
      hasMany: true,
      minRows: 1,
      displayPreview: true,
    },
  ],
};
