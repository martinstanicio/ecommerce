import { anyone, editorOrAdmin } from "@/lib/access";
import { GlobalConfig } from "payload";

export const HighlightedStats: GlobalConfig = {
  slug: "highlighted-stats",
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
          "Enable or disable the highlighted stats section. There must be at least one stat for it to be displayed.",
      },
    },
    {
      label: "Stats",
      name: "stats",
      type: "array",
      maxRows: 4,
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              label: "Value",
              name: "value",
              type: "text",
              required: true,
              admin: {
                placeholder: "25+",
              },
            },
            {
              label: "Description",
              name: "description",
              type: "text",
              required: true,
              admin: {
                placeholder: "Years of experience",
              },
            },
          ],
        },
      ],
    },
    {
      label: "Show products count",
      name: "showProductsCount",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Show the number of available products as a stat.",
      },
    },
    {
      label: "Show tags count",
      name: "showTagsCount",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Show the amount of tags as a stat.",
      },
    },
  ],
  typescript: {
    interface: "HighlightedStats",
  },
};
