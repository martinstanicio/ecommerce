import { adminOrCurrentUser, admin } from "@/lib/access";
import config from "@/payload.config";
import { getPayload } from "payload";
import type { CollectionConfig, Where } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: { useAsTitle: "name" },
  auth: { loginWithUsername: { requireEmail: true, allowEmailLogin: true } },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Role",
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
      hooks: {
        beforeChange: [
          async ({ value, operation, originalDoc }) => {
            // If the user being created or updated has already been assigned
            // the admin role, there's no need to check for other admins
            if (value === "admin") return value;

            let where: Where = { role: { equals: "admin" } };
            if (operation === "update" && originalDoc && originalDoc.id) {
              where = { ...where, id: { not_equals: originalDoc.id } };
            }

            // UPDATE: If the current user is an admin, it will be excluded from the count
            const payload = await getPayload({ config });
            const admins = await payload.count({ collection: "users", where });

            // CREATE: If there are no admins in the system, set the role to admin
            // UPDATE: If there are no other admins in the system, keep the role as admin
            if (admins.totalDocs === 0) return "admin";

            return value;
          },
        ],
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
