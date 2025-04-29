import AppliedFiltersList from "./applied-filters-list";
import ClearFiltersButton from "./clear-filters-button";
import FiltersBar from "./filters-bar/main";
import PaginationBar from "./pagination-bar";
import ProductsGrid from "./products-grid";
import SearchBar from "./search-bar";
import SortingBar from "./sorting-bar";
import { SimplifiedTag } from "@/lib/simplified-types";
import config from "@/payload.config";
import { getPayload, PaginatedDocs, Where } from "payload";

type Props = {
  page: number;
  sort: string;
  search: string;
  tags: string[];
  limit?: number;
};

export default async function ProductsCatalogue({
  page,
  sort,
  search,
  tags: tagSlugs,
  limit = 12,
}: Props) {
  const conditions: Where[] = [];
  const appliedTags: SimplifiedTag[] = [];
  const payload = await getPayload({ config });
  const tags: PaginatedDocs<SimplifiedTag> = await payload.find({
    collection: "tags",
    depth: 1,
    select: {
      createdAt: false,
      updatedAt: false,
      products: false,
    },
  });

  if (search) {
    conditions.push({
      or: [{ name: { like: search } }, { description: { like: search } }],
    });
  }

  if (tagSlugs.length) {
    tags.docs.forEach((tag) => {
      if (!tagSlugs.includes(tag.slug)) return;

      conditions.push({ tags: { equals: tag.id } });
      appliedTags.push(tag);
    });
  }

  const products = await payload.find({
    collection: "products",
    depth: 1,
    page,
    limit,
    sort,
    where: { and: conditions },
    select: {
      createdAt: false,
      updatedAt: false,
      fullDescription: false,
    },
  });

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <SearchBar className="flex-1" />

        <div className="flex gap-2 md:w-full md:max-w-xs">
          <SortingBar />
          <FiltersBar tags={tags.docs} />
          <ClearFiltersButton disabled={!search && !tagSlugs.length} />
        </div>
      </div>

      <AppliedFiltersList search={search} appliedTags={appliedTags} />

      <ProductsGrid products={products.docs} />

      <PaginationBar
        totalPages={products.totalPages}
        currentPage={products.page || +page}
      />
    </>
  );
}
