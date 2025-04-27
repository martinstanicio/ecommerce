import PaginationBar from "./pagination-bar";
import ProductsGrid from "./products-grid";
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

  if (search) {
    conditions.push({
      or: [{ name: { like: search } }, { description: { like: search } }],
    });
  }

  if (tagNames.length) {
    const tags = await payload.find({
      collection: "tags",
      depth: 1,
      where: { name: { in: tagNames } },
      select: {
        createdAt: false,
        updatedAt: false,
        name: false,
        products: false,
      },
    });

    tags.docs.forEach((tag) => {
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
  });

  return (
    <>
      <ProductsGrid products={products.docs} />

      <PaginationBar
        totalPages={products.totalPages}
        currentPage={products.page || +page}
      />
    </>
  );
}
