"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const sortingOptions = [
  { value: "-updatedAt", label: "Orden original" },
  { value: "price", label: "Precio: menor a mayor" },
  { value: "-price", label: "Precio: mayor a menor" },
  { value: "name", label: "Nombre: de A a Z" },
  { value: "-name", label: "Nombre: de Z a A" },
];

export default function SortingBar(props: React.ComponentProps<typeof Select>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSort = searchParams.get("sort") || sortingOptions[0].value;

  function setSort(value: string) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("sort", value);
    router.replace(`?${searchParams.toString()}`);
  }

  return (
    <Select defaultValue={defaultSort} onValueChange={setSort} {...props}>
      <SelectTrigger className="grow">
        <SelectValue placeholder="Ordenar por..." />
      </SelectTrigger>
      <SelectContent>
        {sortingOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
