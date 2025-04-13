import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { ARS } from "@/lib/currency";
import { isPopulatedList } from "@/lib/is-populated";
import { cn } from "@/lib/utils";
import { Product } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

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
      className={cn("py-0 overflow-hidden gap-0 relative", className)}
      {...props}
    >
      <Image
        src={images[0].url}
        alt={images[0].alt}
        width={images[0].width}
        height={images[0].height}
        className="object-cover object-center bg-secondary aspect-[4/3]"
      />
      <CardContent className="flex h-full flex-col justify-between p-4">
        <div>
          <CardTitle className="mb-2 flex items-start justify-between">
          <h2>
            <Link
              href={`/productos/${product.slug}`}
              className="before:absolute before:inset-0 hover:underline focus:underline"
            >
              {name}
            </Link>
          </h2>
          <span>{ARS.format(price)}</span>
        </CardTitle>
        <CardDescription>
          <p className="line-clamp-2">{description}</p>
        </CardDescription>
        </div>
        <div className="after:to-background relative mt-3 flex gap-1 overflow-x-hidden after:absolute after:right-0 after:h-full after:w-4 after:bg-gradient-to-r after:from-transparent">
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
