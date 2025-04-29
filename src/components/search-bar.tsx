"use client";

import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchBar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(
    () => {
      const newParams = new URLSearchParams(searchParams);

      if (debouncedSearch) newParams.set("search", debouncedSearch);
      else newParams.delete("search");

      router.replace(`?${newParams.toString()}`);
    },
    // Depends on searchParams and router, but I only want it to run when
    // debouncedSearch changes. Otherwise it runs twice every debounced update
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearch],
  );

  return (
    <div className={cn("relative", className)} {...props}>
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        placeholder="Buscar productos..."
        className="pl-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
