import { anyone, editorOrAdmin } from "@/lib/access";
import generateSlug from "@/lib/generate-slug";
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
      label: "Identifier",
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeValidate: [generateSlug("tags", "name")],
      },
    },
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
