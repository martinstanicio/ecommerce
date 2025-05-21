import { getTagsCount } from "./get-tags-count";
import { getProductsCount } from "@/lib/get-products-count";
import { HighlightedStats } from "@/payload-types";
import config from "@/payload.config";
import { getPayload } from "payload";

export async function getHighlightedStats() {
  try {
    const payload = await getPayload({ config });
    const highlightedStats = await payload.findGlobal({
      slug: "highlighted-stats",
      depth: 0,
    });

    if (!highlightedStats.enabled) return [];

    const stats: HighlightedStats["stats"] = [];

    if (highlightedStats.showTagsCount) {
      const tagsCount = await getTagsCount();

      stats.push({
        value: tagsCount.toString(),
        description: "Categorías diferentes",
      });
    }

    if (highlightedStats.showProductsCount) {
      const productsCount = await getProductsCount();

      stats.push({
        value: productsCount.toString(),
        description: "Productos",
      });
    }

    stats.push(...highlightedStats.stats);

    return stats;
  } catch (_) {
    return [];
  }
}
