import { anyone, editorOrAdmin } from "@/lib/access";
import generateSlug from "@/lib/generate-slug";
import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  labels: {
    singular: { en: "Tag", es: "Categoría" },
    plural: { en: "Tags", es: "Categorías" },
  },
  admin: {
    defaultColumns: ["name", "products"],
    description: {
      en: "This collection contains the tags used to categorize products.",
      es: "Esta colección contiene las categorías utilizadas para clasificar los productos.",
    },
    hideAPIURL: true,
    useAsTitle: "name",
  },
  access: {
    create: editorOrAdmin,
    read: anyone,
    update: editorOrAdmin,
    delete: editorOrAdmin,
  },
  fields: [
    {
      label: { en: "Identifier", es: "Identificador" },
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
      label: { en: "Name", es: "Nombre" },
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      label: { en: "Products", es: "Productos" },
      name: "products",
      type: "join",
      collection: "products",
      on: "tags",
      required: true,
    },
  ],
};
