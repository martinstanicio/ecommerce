"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import TagsList from "./tags-list";
import Trigger from "./trigger";
import { useMediaQuery } from "@/hooks/use-media-query";
import { SimplifiedTag } from "@/lib/simplified-types";
import { useState } from "react";

const title = "Filtrar por categoría";
const description =
  "Selecciona una o más categorías para filtrar los productos que deseas ver.";
const exit = "Cerrar";

type Props = React.ComponentProps<typeof Trigger> & {
  tags: SimplifiedTag[];
};

export default function FiltersBar({ tags, ...props }: Props) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 48rem)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Trigger {...props} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <TagsList tags={tags} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Trigger {...props} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <TagsList tags={tags} className="p-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{exit}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
