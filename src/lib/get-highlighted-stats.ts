import { getTagsCount } from "./get-tags-count";
import { getProductsCount } from "@/lib/get-products-count";
import config from "@/payload.config";
import { getPayload } from "payload";

export async function getHighlightedStats() {
  const payload = await getPayload({ config });
  const highlightedStats = await payload.findGlobal({
    slug: "highlighted-stats",
  });

  if (highlightedStats.showTagsCount) {
    const tagsCount = await getTagsCount();

    highlightedStats.stats = [
      { value: tagsCount.toString(), description: "Categorías diferentes" },
      ...highlightedStats.stats,
    ];
  }

  if (highlightedStats.showProductsCount) {
    const productsCount = await getProductsCount();

    highlightedStats.stats = [
      { value: productsCount.toString(), description: "Productos" },
      ...highlightedStats.stats,
    ];
  }

  return highlightedStats;
}
