import SearchFocusedHero from "@/components/hero/search-focused-hero/main";
import HighlightedStats from "@/components/highlighted-stats";
import HighlightedStatsSkeleton from "@/components/skeleton/highlighted-stats-skeleton";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      <SearchFocusedHero />
      <main>
        <Suspense fallback={<HighlightedStatsSkeleton />}>
          <HighlightedStats />
        </Suspense>
      </main>
    </div>
  );
}
