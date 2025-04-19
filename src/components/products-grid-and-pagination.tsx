import PaginationBar from "./pagination-bar";
import ProductsGrid from "./products-grid";
import config from "@/payload.config";
import { getPayload } from "payload";

type Props = {
  page: number;
  sort: string;
  search: string;
  limit?: number;
};

export default async function ProductsGridAndPagination({
  page,
  sort,
  search,
  limit = 12,
}: Props) {
  const payload = await getPayload({ config });
  const products = await payload.find({
    collection: "products",
    depth: 1,
    page,
    limit,
    sort,
    where: {
      or: [{ name: { like: search } }, { description: { like: search } }],
    },
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
