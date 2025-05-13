import { isPopulatedList } from "./is-populated";
import config from "@/payload.config";
import { getPayload } from "payload";

export async function getPopularTags() {
  const payload = await getPayload({ config });
  const popularTags = await payload.findGlobal({
    slug: "popular-tags",
    depth: 1,
  });

  if (!popularTags.autoCalculatePopularTags) {
    if (!popularTags.tags) {
      throw new Error("Manually selected popular tags must not be undefined.");
    }

    if (!isPopulatedList(popularTags.tags)) {
      throw new Error("Popular tags must be populated. Try increasing depth.");
    }

    return popularTags.tags;
  }

  if (!popularTags.maxPopularTags) {
    throw new Error("Max popular tags must not be undefined.");
  }

  const { docs: tags } = await payload.find({
    collection: "tags",
    depth: 0,
    pagination: false,
    sort: "name",
  });

  // Sort tags by the number of products they are associated with
  return tags
    .sort((a, b) => {
      const aCount = a.products.totalDocs || 0;
      const bCount = b.products.totalDocs || 0;

      return bCount - aCount;
    })
    .slice(0, popularTags.maxPopularTags);
}
