import PopularTags from "./popular-tags";
import PopularTagsSkeleton from "./popular-tags-skeleton";
import SearchBar from "./search-bar";
import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function SearchFocusedHero() {
  return (
    <section className="bg-background text-foreground dark relative w-full">
      <Image
        src={heroImage}
        alt=""
        fill
        className="inset-0 z-0 object-cover object-center opacity-15"
        priority
      />

      <div className="relative z-10 container mx-auto space-y-8 px-4 py-20 text-center md:space-y-12 md:py-24 lg:py-32 xl:max-w-6xl">
        <div className="space-y-4 text-balance">
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
            Encontrá exactamente lo que estás buscando
          </h1>
          <p className="text-muted-foreground text-lg">
            Navegá por nuestra amplia selección de productos premium.
          </p>
        </div>

        <SearchBar className="mx-auto max-w-md" />

        <div className="space-y-4">
          <p className="text-sm font-bold tracking-wider uppercase">
            Categorías populares
          </p>

          <Suspense fallback={<PopularTagsSkeleton />}>
            <PopularTags />
          </Suspense>
        </div>

        <div className="flex justify-center gap-4 max-sm:flex-col">
          <Button size="lg" asChild>
            <Link href="/productos">Ver productos</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
