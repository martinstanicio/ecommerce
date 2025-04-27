import ProductsCatalogue from "@/components/products-catalogue";
import ProductsCatalogueSkeleton from "@/components/skeleton/products-catalogue";
import config from "@/payload.config";
import { Metadata } from "next";
import { getPayload } from "payload";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Productos({ searchParams }: Props) {
  const {
    sort: _sort,
    page: _page,
    search: _search,
    tags: _tags,
  } = await searchParams;
  const sort = typeof _sort === "string" ? _sort : "-updatedAt";
  const page = typeof _page === "string" ? +_page : 1;
  const search = typeof _search === "string" ? _search : "";
  const tags: string[] = [];

  if (typeof _tags === "string") tags.push(_tags);
  if (Array.isArray(_tags)) tags.push(..._tags);

  return (
    <div className="container mx-auto space-y-6 px-4 py-8">
      <header>
        <h1 className="mb-2 text-3xl font-bold">Productos</h1>
        <p className="text-muted-foreground">
          Descubrí nuestra amplia gama de productos de alta calidad para cada
          necesidad.
        </p>
      </header>

      <Suspense fallback={<ProductsCatalogueSkeleton />}>
        {/* For Suspense to work, data must be awaited in a differnt async component */}
        <ProductsCatalogue
          page={page}
          sort={sort}
          search={search}
          tags={tags}
        />
      </Suspense>
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
