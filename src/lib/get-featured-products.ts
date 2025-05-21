import { isPopulatedList } from "./is-populated";
import { Product } from "@/payload-types";
import config from "@/payload.config";
import { getPayload } from "payload";

export async function getFeaturedProducts() {
  const products: (string | Product)[] = [];

  try {
    const payload = await getPayload({ config });
    const res = await payload.findGlobal({
      slug: "featured-products",
      depth: 2,
    });

    if (!res.enabled || !Array.isArray(res.products)) return [];

    products.push(...res.products);
  } catch (_) {
    return [];
  }

  if (!isPopulatedList(products)) {
    throw new Error(
      "Featured products must be populated. Try increasing depth.",
    );
  }

  return products;
}
