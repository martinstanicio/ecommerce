import ProductCardSkeleton from "./product-card";
import { cn } from "@/lib/utils";

export default function ProductsGridSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const products = new Array(4).fill(null);

  return (
    <main
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
      {...props}
    >
      {products.map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </main>
  );
}
