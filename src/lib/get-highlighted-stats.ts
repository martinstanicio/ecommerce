import config from "@/payload.config";
import { getPayload } from "payload";

export async function getHighlightedStats() {
  const payload = await getPayload({ config });
  const highlightedStats = await payload.findGlobal({
    slug: "highlighted-stats",
  });

  return highlightedStats;
}
