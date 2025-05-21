import { anyone } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: { en: "Media", es: "Medio" },
    plural: { en: "Media", es: "Medios" },
  },
  admin: {
    defaultColumns: ["filename", "alt", "products"],
    description: {
      en: "This collection contains the images uploaded by users.",
      es: "Esta colección contiene las imágenes subidas por los usuarios.",
    },
    hideAPIURL: true,
    useAsTitle: "filename",
  },
  access: {
    read: anyone,
  },
  fields: [
    {
      label: { en: "Alternative Text", es: "Texto alternativo" },
      name: "alt",
      type: "text",
      required: true,
    },
    {
      label: { en: "Products", es: "Productos" },
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
