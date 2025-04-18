import ContactForm from "@/components/contact-form";
import SocialIcons from "@/components/social-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

const title = "Contacto";
const description =
  "¿Tenés alguna pregunta o querés colaborar? Contáctanos mediante el formulario a continuación.";
const url = "/contacto";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url },
};

export default function Contacto() {
  const details = [
    {
      icon: MapPin,
      title: "Nuestra ubicación",
      description: "San Martín 150, Belén de Escobar, Buenos Aires",
      href: "https://maps.google.com",
    },
    {
      icon: Mail,
      title: "Envianos un email",
      description: "contacto@ecommerce.com",
      href: "mailto:contacto@ecommerce.com",
    },
    {
      icon: Phone,
      title: "Llamanos",
      description: "+54 9 348 412-3456",
      href: "tel:+5493484123456",
    },
  ];
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.3335412153184!2d-58.794479187274085!3d-34.34599939227283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61baab870cab%3A0xdd91a53d238613d!2sPlaza%20General%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1745002624524!5m2!1ses-419!2sar";

  return (
    <section className="container mx-auto space-y-6 px-4 py-8 xl:max-w-6xl">
      <header>
        <h1 className="mb-2 text-3xl font-bold">Contacto</h1>
        <p className="text-muted-foreground">
          ¿Tenés alguna pregunta o querés colaborar? Contáctanos mediante el
          formulario a continuación.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="self-start">
            <CardHeader>
              <CardTitle>
                <h2 className="text-2xl">Envianos un mensaje</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
            <CardFooter>
              <p>Nos comprometemos a responder tu mensaje lo antes posible.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-2xl">Seguinos en las redes sociales</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SocialIcons className="justify-start" />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-2xl">Conectá con nosotros</h2>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {details.map(({ icon: Icon, title, description, href }, i) => (
                <div className="flex gap-4" key={i}>
                  <Icon className="text-muted-foreground mt-1 size-5" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <a
                      href={href}
                      target="_blank"
                      className="text-muted-foreground hover:underline focus:underline"
                    >
                      {description}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              <iframe
                src={map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="bg-secondary aspect-[4/3] w-full"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
