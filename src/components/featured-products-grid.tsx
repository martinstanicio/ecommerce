import ProductCard from "./product-card";
import { SimplifiedProduct } from "@/lib/simplified-types";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  products: SimplifiedProduct[];
};

export default function FeaturedProductsGrid({
  products,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
      {...props}
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
