import config from "@/payload.config";
import { getPayload, Where } from "payload";

export async function getTagsCount(where: Where = {}) {
  const payload = await getPayload({ config });
  const tags = await payload.count({
    collection: "tags",
    where,
  });

  return tags.totalDocs;
}
