import config from "@/payload.config";
import { getPayload, Where } from "payload";

export async function getProductsCount(where: Where = {}) {
  const payload = await getPayload({ config });
  const products = await payload.count({
    collection: "products",
    where,
  });

  return products.totalDocs;
}
