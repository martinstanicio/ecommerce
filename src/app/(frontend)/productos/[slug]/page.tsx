import CarouselOrImage from "@/components/carousel-or-image";
import ProductOrderOptions from "@/components/product-order-options";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import getProductBySlug from "@/lib/get-product-by-slug";
import { isPopulatedList } from "@/lib/is-populated";
import config from "@/payload.config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
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
      fullDescription: false,
      tags: false,
      price: false,
      images: false,
    },
  });

  return products.docs.map((product) => ({ slug: product.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();
  const { name, description, fullDescription, tags, price, images } = product;

  if (!isPopulatedList(tags)) {
    throw new Error("Product tags must be populated. Try increasing depth.");
  }

  if (!isPopulatedList(images)) {
    throw new Error("Product images must be populated. Try increasing depth.");
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-12">
      <CarouselOrImage images={images} />

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        <ProductOrderOptions unitPrice={price} />

        {fullDescription && (
          <>
            <Separator className="my-12" />

            <div className="prose dark:prose-invert max-w-none space-y-4">
              <h2>Detalles del producto</h2>
              <RichText data={fullDescription} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  if (!isPopulatedList(product.tags)) {
    throw new Error("Product tags must be populated. Try increasing depth.");
  }

  if (!isPopulatedList(product.images)) {
    throw new Error("Product images must be populated. Try increasing depth.");
  }

  const parentKeywords = (await parent).keywords || [];

  const title = product.name;
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
