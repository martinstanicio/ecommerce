"use client";

import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClearFiltersButton(
  props: React.ComponentProps<typeof Button>,
) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function clearFilters() {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("page");
    newParams.delete("search");
    newParams.delete("tags");

    router.replace(`?${newParams.toString()}`);
  }

  return (
    <Button variant="destructive" size="icon" onClick={clearFilters} {...props}>
      <Trash />
      <span className="sr-only">Eliminar filtros de búsqueda</span>
    </Button>
  );
}
