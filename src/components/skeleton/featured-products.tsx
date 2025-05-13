import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import FeaturedProductsGridSkeleton from "./featured-products-grid";

export async function FeaturedProductsSkeleton(
  props: React.ComponentProps<"section">,
) {
  return (
    <section {...props}>
      <div className="container mx-auto space-y-6 px-4 py-8">
        <div className="space-y-2 sm:text-center">
          <h2 className="text-3xl font-bold">Productos destacados</h2>
          <p className="text-muted-foreground">
            Nuestra selección de productos destacados, elegidos por su calidad y
            popularidad.
          </p>
        </div>
        <FeaturedProductsGridSkeleton />
        <div className="flex justify-center">
          <Skeleton className="w-full lg:w-[16ch]">
            <Button variant="secondary" size="lg" className="w-full" />
          </Skeleton>
        </div>
      </div>
    </section>
  );
}
