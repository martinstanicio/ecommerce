import { getCalculatedPopularTags } from "./get-calculated-popular-tags";
import { isPopulatedList } from "./is-populated";
import { PopularTags } from "@/payload-types";
import config from "@/payload.config";
import { getPayload } from "payload";

export async function getPopularTags() {
  let response: PopularTags;

  try {
    const payload = await getPayload({ config });
    response = await payload.findGlobal({
      slug: "popular-tags",
      depth: 1,
    });
  } catch (_) {
    return [];
  }

  if (!response.enabled) return [];

  if (!response.autoCalculatePopularTags) {
    if (!Array.isArray(response.tags)) return [];

    if (!isPopulatedList(response.tags)) {
      throw new Error("Popular tags must be populated. Try increasing depth.");
    }

    return response.tags;
  }

  if (!response.maxPopularTags) {
    throw new Error("Max popular tags must not be undefined.");
  }

  const calculatedPopularTags = await getCalculatedPopularTags();

  return calculatedPopularTags.slice(0, response.maxPopularTags);
}
