import SearchFocusedHero from "@/components/hero/search-focused-hero/main";
import HighlightedStats from "@/components/highlighted-stats";

export default function HomePage() {
  return (
    <div>
      <SearchFocusedHero />
      <main>
        <HighlightedStats />
      </main>
    </div>
  );
}
