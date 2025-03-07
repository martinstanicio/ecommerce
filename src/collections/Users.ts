import { adminOrCurrentUser, admin } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: { useAsTitle: "username" },
  auth: { loginWithUsername: true },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "role",
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
      defaultValue: "editor",
      required: true,
      access: {
        update: ({ req: { user } }) => user?.role === "admin",
      },
    },
  ],
  access: {
    create: admin,
    read: adminOrCurrentUser,
    update: adminOrCurrentUser,
    delete: admin,
    unlock: admin,
  },
};
