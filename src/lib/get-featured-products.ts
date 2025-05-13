import { isPopulatedList } from "./is-populated";
import config from "@/payload.config";
import { getPayload } from "payload";

export async function getFeaturedProducts() {
  const payload = await getPayload({ config });
  const { enabled, products } = await payload.findGlobal({
    slug: "featured-products",
    depth: 2,
  });

  if (!enabled) return [];

  if (!isPopulatedList(products)) {
    throw new Error(
      "Featured products must be populated. Try increasing depth.",
    );
  }

  return products;
}
