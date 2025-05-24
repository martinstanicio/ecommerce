import { anyone, editorOrAdmin } from "@/lib/access";
import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

export const FrequentlyAskedQuestions: GlobalConfig = {
  slug: "frequently-asked-questions",
  label: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
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
          en: "Enable or disable the FAQs section. There must be at least one FAQ for it to be displayed.",
          es: "Habilitar o deshabilitar la sección de preguntas frecuentes. Debe haber al menos una pregunta frecuente para que se muestre.",
        },
      },
    },
    {
      label: { en: "FAQs", es: "Preguntas Frecuentes" },
      name: "faqs",
      type: "array",
      maxRows: 4,
      required: true,
      fields: [
        {
          label: { en: "Question", es: "Pregunta" },
          name: "question",
          type: "text",
          required: true,
        },
        {
          label: { en: "Answer", es: "Respuesta" },
          name: "answer",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: [] }),
            ],
          }),
        },
      ],
    },
  ],
  typescript: {
    interface: "FrequentlyAskedQuestions",
  },
};
