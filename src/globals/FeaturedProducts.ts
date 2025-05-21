import { anyone, editorOrAdmin } from "@/lib/access";
import { GlobalConfig } from "payload";

export const FeaturedProducts: GlobalConfig = {
  slug: "featured-products",
  label: { en: "Featured products", es: "Productos destacados" },
  admin: { hideAPIURL: true },
  access: {
    read: anyone,
    update: editorOrAdmin,
  },
  fields: [
    {
      label: { en: "Enabled", es: "Habilitado" },
      name: "enabled",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: {
          en: "Enable or disable the featured products section. There must be at least one product in the list for it to be displayed.",
          es: "Habilitar o deshabilitar la sección de productos destacados. Debe haber al menos un producto en la lista para que se muestre.",
        },
      },
    },
    {
      label: { en: "Products", es: "Productos" },
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      minRows: 0,
      required: true,
      admin: {
        description: {
          en: "Featured products to be displayed on the homepage.",
          es: "Productos destacados que se mostrarán en la página de inicio.",
        },
      },
    },
  ],
  typescript: {
    interface: "FeaturedProducts",
  },
};
