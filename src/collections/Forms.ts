import { none, editorOrAdmin } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Forms: CollectionConfig = {
  slug: "forms",
  admin: { useAsTitle: "subject" },
  access: {
    create: none,
    read: editorOrAdmin,
    update: editorOrAdmin,
    delete: editorOrAdmin,
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: "Subject",
      name: "subject",
      type: "text",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: "Resolved",
      name: "isResolved",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
