import { anyone, editorOrAdmin } from "@/lib/access";
import { GlobalConfig } from "payload";

export const HighlightedStats: GlobalConfig = {
  slug: "highlighted-stats",
  label: { en: "Highlighted stats", es: "Estadísticas destacadas" },
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
          en: "Enable or disable the highlighted stats section. There must be at least one stat for it to be displayed.",
          es: "Habilitar o deshabilitar la sección de estadísticas destacadas. Debe haber al menos una estadística para que se muestre.",
        },
      },
    },
    {
      label: { en: "Stats", es: "Estadísticas" },
      name: "stats",
      type: "array",
      maxRows: 4,
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              label: { en: "Value", es: "Valor" },
              name: "value",
              type: "text",
              required: true,
              admin: {
                placeholder: "25+",
              },
            },
            {
              label: { en: "Description", es: "Descripción" },
              name: "description",
              type: "text",
              required: true,
              admin: {
                placeholder: {
                  en: "Years of experience",
                  es: "Años de experiencia",
                },
              },
            },
          ],
        },
      ],
    },
    {
      label: { en: "Show products count", es: "Mostrar cantidad de productos" },
      name: "showProductsCount",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: {
          en: "Show the number of available products as a stat.",
          es: "Mostrar la cantidad de productos disponibles como una estadística.",
        },
      },
    },
    {
      label: { en: "Show tags count", es: "Mostrar cantidad de categorías" },
      name: "showTagsCount",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: {
          en: "Show the amount of tags as a stat.",
          es: "Mostrar la cantidad de categorías como una estadística.",
        },
      },
    },
  ],
  typescript: {
    interface: "HighlightedStats",
  },
};
