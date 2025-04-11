import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ARS } from "@/lib/currency";
import { isPopulatedList } from "@/lib/is-populated";
import config from "@/payload.config";
import { ShoppingCart } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const products = await payload.find({
    collection: "products",
    depth: 0,
    pagination: false,
    select: {
      createdAt: false,
      updatedAt: false,
      name: false,
      description: false,
      tags: false,
      price: false,
      images: false,
    },
  });

  return products.docs.map((product) => ({ slug: product.id }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  const { name, description, tags, price, images } = await payload.findByID({
    collection: "products",
    id: slug,
    depth: 1,
  });

  if (!isPopulatedList(tags)) {
    throw new Error("Product tags must be populated. Try increasing depth.");
  }

  if (!isPopulatedList(images)) {
    throw new Error("Product images must be populated. Try increasing depth.");
  }

  return (
    <main className="container mx-auto px-4 py-8 space-y-6">
      <Carousel>
        <CarouselContent>
          {images.map((image) => {
            if (
              typeof image.url !== "string" ||
              typeof image.width !== "number" ||
              typeof image.height !== "number"
            ) {
              throw new Error("Images must have `url`, `width` and `height`.");
            }

            return (
              <CarouselItem key={image.id}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority
                  className="object-cover object-center bg-secondary aspect-[4/3]"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="prose col-span-5 w-full prose-a:no-underline">
        <header className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag.id}>{tag.name}</Badge>
            ))}
          </div>
          <h1>{name}</h1>
          <p>{description}</p>
        </header>

        <p>{ARS.format(price)}</p>

        <Button size="lg" asChild>
          <Link href="#">
            <ShoppingCart />
            <span>Agregar al carrito</span>
          </Link>
        </Button>
      </div>
    </main>
  );
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const payload = await getPayload({ config });
  const product = await payload.findByID({
    collection: "products",
    id: slug,
    depth: 1,
  });

  if (!isPopulatedList(product.tags)) {
    throw new Error("Product tags must be populated. Try increasing depth.");
  }

  if (!isPopulatedList(product.images)) {
    throw new Error("Product images must be populated. Try increasing depth.");
  }

  const parentKeywords = (await parent).keywords || [];

  const title = product.name;
  // Add a SEO-friendly description field to the product.
  // Full description is probably too long.
  const description = product.description;
  const url = `/productos/${product.id}`;
  const keywords = [
    product.name,
    ...product.tags.map((tag) => `${product.name} ${tag.name}`),
    ...parentKeywords,
  ];
  const images = product.images.map(({ url, width, height, alt }) => {
    if (
      typeof url !== "string" ||
      typeof width !== "number" ||
      typeof height !== "number"
    ) {
      throw new Error("Images must have `url`, `width` and `height`.");
    }

    return { url, width, height, alt };
  });

  return {
    title,
    description,
    keywords,
    openGraph: { title, description, url, images },
  };
}
