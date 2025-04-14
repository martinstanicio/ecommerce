import { Product } from "@/payload-types";
import config from "@/payload.config";
import { getPayload } from "payload";

export default async function getProductBySlug(slug: string) {
  const payload = await getPayload({ config });

  const products = await payload.find({
    collection: "products",
    depth: 1,
    where: { slug: { equals: slug } },
    pagination: false,
    limit: 1,
  });

  // If no products are found, index 0 will be undefined
  return products.docs[0] as Product | undefined;
}
