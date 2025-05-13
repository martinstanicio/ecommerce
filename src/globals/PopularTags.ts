import { anyone, editorOrAdmin } from "@/lib/access";
import { GlobalConfig } from "payload";

export const PopularTags: GlobalConfig = {
  slug: "popular-tags",
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
          "Enable or disable the popular tags section. There must be at least one tag in the list for it to be displayed.",
      },
    },
    {
      label: "Automatically calculate popular tags",
      name: "autoCalculatePopularTags",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description:
          "Automatically calculate popular tags based on the number of products associated with each tag.",
      },
    },
    {
      label: "Maximum number of tags to display",
      name: "maxPopularTags",
      type: "number",
      required: true,
      defaultValue: 4,
      min: 1,
      admin: {
        description:
          "The maximum number of popular tags to display. Only applies when 'Automatically calculate popular tags' is enabled.",
        condition: (_, siblingData) => !!siblingData.autoCalculatePopularTags,
      },
    },
    {
      label: "Tags",
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      minRows: 1,
      required: true,
      admin: {
        description: "Popular tags to be displayed on the homepage hero.",
        condition: (_, siblingData) => !siblingData.autoCalculatePopularTags,
      },
    },
  ],
  typescript: {
    interface: "PopularTags",
  },
};
