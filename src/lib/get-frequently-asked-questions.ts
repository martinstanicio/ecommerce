import config from "@/payload.config";
import { getPayload } from "payload";

export async function getFrequentlyAskedQuestions() {
  try {
    const payload = await getPayload({ config });
    const { enabled, faqs } = await payload.findGlobal({
      slug: "frequently-asked-questions",
      depth: 0,
    });

    if (!enabled) return [];

    return faqs;
  } catch (_) {
    return [];
  }
}
