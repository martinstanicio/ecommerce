import { anyone } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "products",
      type: "join",
      collection: "products",
      on: "images",
    },
  ],
  upload: {
    mimeTypes: ["image/*"],
  },
};
