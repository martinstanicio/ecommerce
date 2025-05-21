import { none, editorOrAdmin } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Forms: CollectionConfig = {
  slug: "forms",
  labels: {
    singular: { en: "Form", es: "Formulario" },
    plural: { en: "Forms", es: "Formularios" },
  },
  admin: {
    defaultColumns: ["subject", "name", "createdAt", "isResolved"],
    description: {
      en: "This collection contains the forms submitted by users via the contact form.",
      es: "Esta colección contiene los formularios enviados por los usuarios a través del formulario de contacto.",
    },
    hideAPIURL: true,
    useAsTitle: "subject",
  },
  access: {
    create: none,
    read: editorOrAdmin,
    update: editorOrAdmin,
    delete: editorOrAdmin,
  },
  fields: [
    {
      label: { en: "Name", es: "Nombre" },
      name: "name",
      type: "text",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: { en: "Email", es: "Correo electrónico" },
      name: "email",
      type: "email",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: { en: "Subject", es: "Asunto" },
      name: "subject",
      type: "text",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: { en: "Message", es: "Mensaje" },
      name: "message",
      type: "textarea",
      required: true,
      admin: { readOnly: true },
    },
    {
      label: { en: "Resolved", es: "Resuelto" },
      name: "isResolved",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
