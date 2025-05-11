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
      label: "Products",
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      minRows: 4,
      maxRows: 4,
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
