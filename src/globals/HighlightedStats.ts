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
  ],
  typescript: {
    interface: "HighlightedStats",
  },
};
