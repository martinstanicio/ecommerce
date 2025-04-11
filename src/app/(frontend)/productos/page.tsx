import FiltersBar from "@/components/filters-bar";
import PaginationBar from "@/components/pagination-bar";
import ProductsGrid from "@/components/products-grid";
import SearchBar from "@/components/search-bar";
import SortingBar from "@/components/sorting-bar";
import config from "@/payload.config";
import { getPayload } from "payload";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Productos({ searchParams }: Props) {
  const { sort = "-updatedAt", page = "1", search } = await searchParams;
  const payload = await getPayload({ config });
  const products = await payload.find({
    collection: "products",
    limit: 12,
    depth: 1,
    page: +page,
    sort: sort,
    where: {
      or: [{ name: { like: search } }, { description: { like: search } }],
    },
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Productos</h1>
        <p className="text-muted-foreground">
          Descubrí nuestra amplia gama de productos de alta calidad para cada
          necesidad.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <SearchBar className="flex-1" />

        <div className="flex gap-2 md:w-full md:max-w-xs">
          <SortingBar />
          <FiltersBar />
        </div>
      </div>

      <ProductsGrid products={products.docs} />

      <PaginationBar
        totalPages={products.totalPages}
        currentPage={products.page || +page}
      />
    </div>
  );
}
