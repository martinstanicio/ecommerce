import HighlightedStatCardSkeleton from "./highlighted-stat-card";

export default function HighlightedStatsSkeleton(
  props: React.ComponentProps<"section">,
) {
  const stats = new Array(2).fill(null);

  return (
    <section {...props}>
      <div className="container mx-auto flex flex-wrap gap-10 px-4 py-12 sm:gap-12">
        {stats.map((_, i) => (
          <HighlightedStatCardSkeleton key={i} className="flex-1" />
        ))}
      </div>
    </section>
  );
}
