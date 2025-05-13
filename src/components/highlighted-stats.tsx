import HighlightedStatCard from "./highlighted-stat-card";
import { getHighlightedStats } from "@/lib/get-highlighted-stats";

export default async function HighlightedStats(
  props: React.ComponentProps<"section">,
) {
  const stats = await getHighlightedStats();

  if (!stats.length) return;

  return (
    <section {...props}>
      <div className="container mx-auto flex flex-wrap gap-10 border-y px-4 py-12 sm:gap-12">
        {stats.map((stat, i) => (
          <HighlightedStatCard key={i} stat={stat} className="flex-1" />
        ))}
      </div>
    </section>
  );
}
