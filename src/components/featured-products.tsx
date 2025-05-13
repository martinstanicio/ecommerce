import FeaturedProductsGrid from "./featured-products-grid";
import { Button } from "./ui/button";
import { getFeaturedProducts } from "@/lib/get-featured-products";
import { isPopulatedList } from "@/lib/is-populated";
import { cn } from "@/lib/utils";
import Link from "next/link";

export async function FeaturedProducts(props: React.ComponentProps<"section">) {
  const { products } = await getFeaturedProducts();

  if (!products.length) return;

  if (!isPopulatedList(products)) {
    throw new Error(
      "Featured products must be populated. Try increasing depth.",
    );
  }

  return (
    <section {...props}>
      <div className="container mx-auto space-y-12 px-4 py-24">
        <div className="space-y-2 sm:text-center">
          <h2 className="text-3xl font-bold">Productos destacados</h2>
          <p className="text-muted-foreground">
            Nuestra selección de productos destacados, elegidos por su calidad y
            popularidad.
          </p>
        </div>
        <FeaturedProductsGrid products={products} />
        <div className="flex justify-center">
          <Button
            size="lg"
            asChild
            className={cn(
              products.length > 1 ? "max-lg:w-full" : "max-sm:w-full",
            )}
          >
            <Link href="/productos">Ver productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
