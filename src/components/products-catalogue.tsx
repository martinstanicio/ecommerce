import FiltersBar from "./filters-bar";
import PaginationBar from "./pagination-bar";
import ProductsGrid from "./products-grid";
import SearchBar from "./search-bar";
import SortingBar from "./sorting-bar";
import config from "@/payload.config";
import { getPayload, Where } from "payload";

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
  tags: tagNames,
  limit = 12,
}: Props) {
  const conditions: Where[] = [];
  const payload = await getPayload({ config });
  const tags = await payload.find({
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

  if (tagNames.length) {
    tags.docs.forEach((tag) => {
      if (!tagNames.includes(tag.name)) return;
      conditions.push({ tags: { equals: tag.id } });
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
        </div>
      </div>

      <ProductsGrid products={products.docs} />

      <PaginationBar
        totalPages={products.totalPages}
        currentPage={products.page || +page}
      />
    </>
  );
}
