import config from "@/payload.config";
import { getPayload } from "payload";

export async function getFeaturedProducts() {
  const payload = await getPayload({ config });
  const featuredProducts = await payload.findGlobal({
    slug: "featured-products",
    depth: 2,
  });

  return featuredProducts;
}
