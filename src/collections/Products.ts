import { anyone, editorOrAdmin } from "@/lib/access";
import generateSlug from "@/lib/generate-slug";
import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: { en: "Product", es: "Producto" },
    plural: { en: "Products", es: "Productos" },
  },
  admin: {
    defaultColumns: ["name", "tags", "precio", "images"],
    description: {
      en: "This collection contains the products available in the store.",
      es: "Esta colección contiene los productos disponibles en la tienda.",
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
        beforeValidate: [generateSlug("products", "name")],
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
      label: { en: "SEO description", es: "Descripción SEO" },
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: {
          en: "This will be used as the meta description for the product's page. It should be between 120 and 160 characters.",
          es: "Esto se usará como la meta descripción de la página del producto. Debe tener entre 120 y 160 caracteres.",
        },
      },
    },
    {
      label: { en: "Full description", es: "Descripción completa" },
      name: "fullDescription",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ["h3", "h4", "h5", "h6"] }),
        ],
      }),
    },
    {
      label: { en: "Tags", es: "Categorías" },
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      required: true,
      hasMany: true,
      minRows: 1,
    },
    {
      label: { en: "Price", es: "Precio" },
      name: "price",
      type: "number",
      required: true,
    },
    {
      label: { en: "Images", es: "Imágenes" },
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
