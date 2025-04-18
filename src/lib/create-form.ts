"use server";

import { Form } from "@/payload-types";
import config from "@/payload.config";
import { getPayload } from "payload";

export async function createForm({
  name,
  email,
  subject,
  message,
}: Pick<Form, "name" | "email" | "subject" | "message">) {
  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: "forms",
      data: {
        name,
        email,
        subject,
        message,
        isResolved: false,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
