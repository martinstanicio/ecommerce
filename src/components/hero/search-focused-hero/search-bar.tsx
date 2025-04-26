"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!search) return;

    router.push(`/productos?search=${search}`);
  }

  return (
    <form
      className={cn("flex gap-2", className)}
      onSubmit={onSubmit}
      {...props}
    >
      <Input
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="!p-6 !text-lg backdrop-blur-md"
      />
      <Button type="submit" size="icon" className="p-6">
        <Search className="size-5" />
        <span className="sr-only">Buscar</span>
      </Button>
    </form>
  );
}
