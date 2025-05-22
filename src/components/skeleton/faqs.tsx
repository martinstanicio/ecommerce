import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function FAQsSkeleton(props: React.ComponentProps<"section">) {
  const faqs = new Array(3).fill(null);

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
          {faqs.map((_, i) => (
            <AccordionItem value={i.toString()} key={i}>
              <AccordionTrigger disabled>
                <Skeleton className="h-4 w-[16ch]" />
              </AccordionTrigger>
              <AccordionContent>
                <Skeleton className="h-4 w-[32ch]" />
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
