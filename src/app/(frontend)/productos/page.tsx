import FiltersBar from "@/components/filters-bar";
import PaginationBar from "@/components/pagination-bar";
import ProductsGrid from "@/components/products-grid";
import SearchBar from "@/components/search-bar";
import SortingBar from "@/components/sorting-bar";
import config from "@/payload.config";
import { Metadata } from "next";
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
    <div className="container mx-auto space-y-6 px-4 py-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold">Productos</h1>
        <p className="text-muted-foreground">
          Descubrí nuestra amplia gama de productos de alta calidad para cada
          necesidad.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
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

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { search } = await searchParams;

  let title = "Productos";
  let description =
    "Descubrí nuestra amplia gama de productos de alta calidad para cada necesidad.";
  const url = "/productos";

  if (search) {
    const payload = await getPayload({ config });
    const { totalDocs } = await payload.count({
      collection: "products",
      where: {
        or: [{ name: { like: search } }, { description: { like: search } }],
      },
    });

    title = `"${search}"`;
    description = `${totalDocs === 1 ? "1 resultado" : `${totalDocs} resultados`} de búsqueda para el término "${search}".`;
  }

  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}
