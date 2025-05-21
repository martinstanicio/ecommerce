import { anyone, editorOrAdmin } from "@/lib/access";
import { GlobalConfig } from "payload";

export const PopularTags: GlobalConfig = {
  slug: "popular-tags",
  label: { en: "Popular tags", es: "Categorías populares" },
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
          en: "Enable or disable the popular tags section. There must be at least one tag in the list for it to be displayed.",
          es: "Habilitar o deshabilitar la sección de categorías populares. Debe haber al menos una categoría en la lista para que se muestre.",
        },
      },
    },
    {
      label: {
        en: "Automatically calculate popular tags",
        es: "Calcular automáticamente las categorías populares",
      },
      name: "autoCalculatePopularTags",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: {
          en: "Automatically calculate popular tags based on the number of products associated with each tag.",
          es: "Calcular automáticamente las categorías populares según el número de productos asociados a cada categoría.",
        },
      },
    },
    {
      label: {
        en: "Maximum number of tags to display",
        es: "Número máximo de categorías a mostrar",
      },
      name: "maxPopularTags",
      type: "number",
      required: true,
      defaultValue: 4,
      min: 1,
      admin: {
        description: {
          en: "The maximum number of popular tags to display. Only applies when 'Automatically calculate popular tags' is enabled.",
          es: "El número máximo de categorías populares a mostrar. Solo se aplica cuando 'Calcular automáticamente las categorías populares' está habilitado.",
        },
        condition: (_, siblingData) => !!siblingData.autoCalculatePopularTags,
      },
    },
    {
      label: { en: "Tags", es: "Categorías" },
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      minRows: 1,
      required: true,
      admin: {
        description: {
          en: "Popular tags to be displayed on the homepage hero.",
          es: "Categorías populares que se mostrarán en la sección hero de la página de inicio.",
        },
        condition: (_, siblingData) => !siblingData.autoCalculatePopularTags,
      },
    },
  ],
  typescript: {
    interface: "PopularTags",
  },
};
