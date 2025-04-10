import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { ARS } from "@/lib/currency";
import { isPopulatedList } from "@/lib/is-populated";
import { cn } from "@/lib/utils";
import { Product } from "@/payload-types";
import Image from "next/image";

type Props = React.HTMLProps<HTMLDivElement> & { product: Product };

export default function ProductCard({ product, className, ...props }: Props) {
  const { name, description, tags, price, images } = product;

  if (!isPopulatedList(images)) {
    throw new Error("Product images must be populated. Try increasing depth.");
  }

  if (!isPopulatedList(tags)) {
    throw new Error("Product tags must be populated. Try increasing depth.");
  }

  if (
    typeof images[0].url !== "string" ||
    typeof images[0].width !== "number" ||
    typeof images[0].height !== "number"
  ) {
    throw new Error("Images must have `url`, `width` and `height`.");
  }

  return (
    <Card
      key={product.id}
      className={cn("py-0 overflow-hidden gap-0", className)}
      {...props}
    >
      <Image
        src={images[0].url}
        alt={images[0].alt}
        width={images[0].width}
        height={images[0].height}
        className="object-cover object-center bg-secondary aspect-[4/3]"
      />
      <CardContent className="p-4">
        <CardTitle className="flex justify-between items-start mb-2">
          <h2>{name}</h2>
          <span>{ARS.format(price)}</span>
        </CardTitle>
        <CardDescription>
          <p className="line-clamp-2">{description}</p>
        </CardDescription>
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
