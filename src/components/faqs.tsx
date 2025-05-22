import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { getFrequentlyAskedQuestions } from "@/lib/get-frequently-asked-questions";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";

export default async function FAQs(props: React.ComponentProps<"section">) {
  const faqs = await getFrequentlyAskedQuestions();

  if (!faqs.length) return;

  return (
    <section {...props}>
      <div className="container mx-auto space-y-12 px-4 py-24">
        <div className="space-y-2 sm:text-center">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
          <p className="text-muted-foreground">
            Preguntas frecuentes sobre nuestros productos y servicios.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={"0"}
          className="mx-auto w-full max-w-3xl space-y-4"
        >
          {faqs.map(({ question, answer }, i) => (
            <AccordionItem value={i.toString()} key={i}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>
                <RichText
                  data={answer}
                  className="prose dark:prose-invert max-w-none"
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center">
          ¿Aún tenés dudas?{" "}
          <Button variant="link" asChild>
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </p>
      </div>
    </section>
  );
}
