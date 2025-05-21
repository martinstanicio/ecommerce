import config from "@/payload.config";
import { getPayload } from "payload";

export async function getCalculatedPopularTags() {
  try {
    const payload = await getPayload({ config });
    const response = await payload.find({
      collection: "tags",
      depth: 0,
      pagination: false,
      sort: "name",
    });

    // Sort tags by the number of products they are associated with
    return response.docs.sort((a, b) => {
      const aCount = a.products.totalDocs || 0;
      const bCount = b.products.totalDocs || 0;

      return bCount - aCount;
    });
  } catch (_) {
    return [];
  }
}
