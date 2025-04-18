"use client";

import ProductCard from "@/components/product-card";
import { Product } from "@/payload-types";

export default function ProductsGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <main className="py-12 text-center">
        <h2 className="mb-2 text-xl font-medium">
          No se han encontrado productos
        </h2>
        <p className="text-muted-foreground">
          Intente ajustar sus criterios de búsqueda o filtrado
        </p>
      </main>
    );
  }

  return (
    <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
