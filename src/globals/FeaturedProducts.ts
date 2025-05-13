import { anyone, editorOrAdmin } from "@/lib/access";
import { GlobalConfig } from "payload";

export const FeaturedProducts: GlobalConfig = {
  slug: "featured-products",
  access: {
    read: anyone,
    update: editorOrAdmin,
  },
  fields: [
    {
      label: "Enabled",
      name: "enabled",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description:
          "Enable or disable the featured products section. There must be at least one product in the list for it to be displayed.",
      },
    },
    {
      label: "Products",
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      minRows: 0,
      required: true,
      admin: {
        description: "Featured products to be displayed on the homepage.",
      },
    },
  ],
  typescript: {
    interface: "FeaturedProducts",
  },
};
