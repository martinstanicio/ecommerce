import { Button } from "./ui/button";
import Link from "next/link";

export default function GetInTouch(props: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="container mx-auto space-y-6 px-4 py-24 sm:text-center">
        <h2 className="text-3xl font-bold text-balance">Contactános</h2>
        <p className="text-muted-foreground mx-auto text-lg sm:max-w-[60ch] sm:text-balance">
          ¿Tenés preguntas o necesitás ayuda? No dudes en escribirnos, ¡nuestro
          equipo está para ayudarte!
        </p>
        <Button size="lg" asChild>
          <Link href="/contacto">Contactános</Link>
        </Button>
      </div>
    </section>
  );
}
