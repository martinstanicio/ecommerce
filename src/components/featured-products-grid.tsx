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
        "grid justify-center gap-6",
        products.length >= 1 &&
          "grid-cols-[minmax(0,_38rem)] sm:grid-cols-[minmax(0,_24rem)]",
        products.length >= 2 && "sm:grid-cols-[repeat(2,_minmax(0,_24rem))]",
        products.length >= 3 && "md:grid-cols-[repeat(3,_minmax(0,_24rem))]",
        products.length >= 4 && "lg:grid-cols-[repeat(4,_minmax(0,_24rem))]",
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
