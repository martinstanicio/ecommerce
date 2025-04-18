"use client";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createForm } from "@/lib/create-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener por lo menos 2 caracteres.",
    })
    .trim(),
  email: z
    .string()
    .email({
      message: "Por favor ingrese un email válido.",
    })
    .trim(),
  subject: z
    .string()
    .min(5, {
      message: "El asunto debe tener al menos 5 caracteres.",
    })
    .trim(),
  message: z
    .string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres.",
    })
    .trim(),
  // honeypot field to avoid spam
  favoriteColor: z.string().optional(),
});

type Props = React.ComponentProps<"form">;

export default function ContactForm({ className, ...props }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      favoriteColor: "",
    },
  });

  async function onSubmit({
    favoriteColor,
    ...formData
  }: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // `favoriteColor` is a hidden field, so if it has a value it means a bot filled it in
    if (favoriteColor) return;

    const response = await createForm(formData);

    if (response.success) {
      form.reset();
      toast.success("Su mensaje ha sido enviado con éxito.");
    } else {
      toast.error("Hubo un error al enviar su mensaje.", {
        description:
          "Por favor, inténtelo de nuevo más tarde. Si el problema persiste, contáctenos directamente a través de nuestro correo electrónico.",
      });
    }

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6", className)}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="yo@ejemplo.com"
                  type="email"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asunto</FormLabel>
              <FormControl>
                <Input
                  placeholder="¿De qué se trata tu mensaje?"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tu pregunta o comentario..."
                  required
                  className="min-h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="favoriteColor"
          render={({ field }) => (
            <FormItem className="sr-only">
              <FormControl>
                <Input
                  type="text"
                  aria-hidden={true}
                  tabIndex={-1}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </Form>
  );
}
