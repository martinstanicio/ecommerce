import { anyone, editorOrAdmin } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: { useAsTitle: "name" },
  access: {
    create: editorOrAdmin,
    read: anyone,
    update: editorOrAdmin,
    delete: editorOrAdmin,
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      label: "Products",
      name: "products",
      type: "join",
      collection: "products",
      on: "tags",
    },
  ],
};
