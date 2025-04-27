"use client";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Label } from "./ui/label";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Tag } from "@/payload-types";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const title = "Filtrar por categoría";
const description =
  "Selecciona una o más categorías para filtrar los productos que deseas ver.";
const exit = "Cerrar";

type SimplifiedTag = Pick<Tag, "id" | "name">;

type Props = React.ComponentProps<typeof FiltersBarTrigger> & {
  tags: SimplifiedTag[];
};

export default function FiltersBar({ tags, ...props }: Props) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 48rem)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <FiltersBarTrigger {...props} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <FiltersList tags={tags} />
          <DialogFooter className="pt-2">
            <DialogClose asChild>
              <Button variant="outline">{exit}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <FiltersBarTrigger {...props} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <FiltersList tags={tags} className="p-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{exit}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function FiltersBarTrigger(props: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="outline" size="icon" {...props}>
      <SlidersHorizontal />
      <span className="sr-only">Filtrar por categoría</span>
    </Button>
  );
}

type FiltersListProps = React.ComponentProps<"div"> & {
  tags: SimplifiedTag[];
};

function FiltersList({ tags, className, ...props }: FiltersListProps) {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      {tags.map(({ id, name }) => (
        <div key={id} className="flex items-center">
          <Checkbox id={id} className="size-5" />
          <Label htmlFor={id} className="text-md pl-3">
            {name}
          </Label>
        </div>
      ))}
    </div>
  );
}
