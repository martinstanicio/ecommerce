import { anyone, editorOrAdmin } from "@/lib/access";
import generateSlug from "@/lib/generate-slug";
import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
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
      label: "Identifier",
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
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      label: "SEO description",
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description:
          "This will be used as the meta description for the product's page. It should be between 120 and 160 characters.",
      },
    },
    {
      label: "Full Description",
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
      label: "Tags",
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      required: true,
      hasMany: true,
      minRows: 1,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      required: true,
    },
    {
      label: "Images",
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
