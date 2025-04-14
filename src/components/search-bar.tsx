"use client";

import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchBar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [firstMount, setFirstMount] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (firstMount) {
      setFirstMount(false);
      const defaultSearchValue = url.searchParams.get("search");

      if (defaultSearchValue) setSearch(defaultSearchValue);
      return;
    }

    if (debouncedSearch) url.searchParams.set("search", debouncedSearch);
    else url.searchParams.delete("search");

    router.replace(url.toString());
  }, [debouncedSearch, firstMount, router]);

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
