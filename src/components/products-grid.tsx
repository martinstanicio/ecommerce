"use client";

import ProductCard from "@/components/product-card";
import { Product } from "@/payload-types";

export default function ProductsGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium mb-2">
          No se han encontrado productos
        </h2>
        <p className="text-muted-foreground">
          Intente ajustar sus criterios de búsqueda o filtrado
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
