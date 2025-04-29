import AppliedFiltersListSkeleton from "./applied-filters-list";
import FiltersBarSkeleton from "./filters-bar";
import PaginationBarSkeleton from "./pagination-bar";
import ProductsGridSkeleton from "./products-grid";
import SearchBarSkeleton from "./search-bar";
import SortingBarSkeleton from "./sorting-bar";

export default function ProductsCatalogueSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <SearchBarSkeleton className="flex-1" />

        <div className="flex gap-2 md:w-full md:max-w-xs">
          <SortingBarSkeleton className="flex-1" />
          <FiltersBarSkeleton />
        </div>
      </div>

      <AppliedFiltersListSkeleton />

      <ProductsGridSkeleton />

      <PaginationBarSkeleton />
    </>
  );
}
