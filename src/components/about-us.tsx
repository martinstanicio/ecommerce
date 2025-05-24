import aboutUs from "@/assets/about-us.jpg";
import Image from "next/image";

export default function AboutUs(props: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="container mx-auto grid gap-12 px-4 py-24 md:grid-cols-2 xl:max-w-7xl">
        <Image
          src={aboutUs}
          alt="Texto alternativo"
          className="self-stretch justify-self-end rounded-xl border object-cover object-center shadow-sm xl:max-w-lg"
        />
        <div className="space-y-4 self-center justify-self-start">
          <h2 className="text-3xl font-bold text-balance">Sobre nosotros</h2>
          <p className="text-muted-foreground sm:text-lg md:max-w-md">
            Somos una empresa dedicada a ofrecer productos de{" "}
            <strong>alta calidad</strong> y servicio excepcional. Nuestro
            compromiso es satisfacer las necesidades de nuestros clientes y{" "}
            <strong>superar sus expectativas</strong> en cada interacción. Con{" "}
            <strong>años de experiencia</strong> en la industria, nos
            enorgullece ofrecer soluciones innovadoras y personalizadas que se
            adaptan a cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
