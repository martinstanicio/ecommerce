import { FeaturedProducts } from "@/components/featured-products";
import SearchFocusedHero from "@/components/hero/search-focused-hero/main";
import HighlightedStats from "@/components/highlighted-stats";
import { FeaturedProductsSkeleton } from "@/components/skeleton/featured-products";
import HighlightedStatsSkeleton from "@/components/skeleton/highlighted-stats";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      <SearchFocusedHero />
      <main>
        <Suspense fallback={<HighlightedStatsSkeleton />}>
          <HighlightedStats />
        </Suspense>

        <Suspense fallback={<FeaturedProductsSkeleton />}>
          <FeaturedProducts />
        </Suspense>
      </main>
    </div>
  );
}
