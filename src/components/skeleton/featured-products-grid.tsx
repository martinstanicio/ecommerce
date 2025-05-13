import ProductCardSkeleton from "./product-card";
import { cn } from "@/lib/utils";

export default function FeaturedProductsGridSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const products = Array.from({ length: 2 }, (_, i) => i);

  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,_38rem)] justify-center gap-6 sm:grid-cols-[repeat(2,_minmax(0,_24rem))]",
        className,
      )}
      {...props}
    >
      {products.map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
