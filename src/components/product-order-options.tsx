"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ARS } from "@/lib/currency";
import { Minus, Plus, ShoppingCart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 999;

type Props = { unitPrice: number };

export default function ProductOrderOptions({ unitPrice }: Props) {
  const [quantity, setQuantity] = useState(1);
  const total = unitPrice * quantity;

  return (
    <div className="space-y-4">
      <p className="flex items-center gap-2 font-bold">
        <span className="text-3xl">{ARS.format(unitPrice)}</span>

        {quantity != 1 && (
          <>
            <span className="text-muted-foreground text-xl">&times;</span>
            <span className="text-muted-foreground text-xl">
              {quantity} = {ARS.format(total)}
            </span>
          </>
        )}
      </p>

      <div className="space-y-2">
        <Label htmlFor="quantity" className="font-medium">
          Cantidad
        </Label>
        <div className="flex w-min rounded-md border">
          <Button
            variant="secondary"
            size="icon"
            disabled={quantity <= MIN_QUANTITY}
            onClick={() => setQuantity(quantity - 1)}
            className="touch-manipulation rounded-none border-r"
          >
            <Minus />
            <span className="sr-only">Disminuir cantidad</span>
          </Button>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              const value = e.target.valueAsNumber;

              if (isNaN(value) || value < MIN_QUANTITY) {
                setQuantity(MIN_QUANTITY);
                return;
              }

              if (value > MAX_QUANTITY) {
                setQuantity(MAX_QUANTITY);
                return;
              }

              setQuantity(value);
            }}
            min={MIN_QUANTITY}
            max={MAX_QUANTITY}
            className="z-16 min-w-14 appearance-none rounded-none border-none text-center"
          />
          {/* z-index set to a higher value so the input's focus ring isn't overlapped by Plus button */}
          <Button
            variant="secondary"
            size="icon"
            disabled={quantity >= MAX_QUANTITY}
            onClick={() => setQuantity(quantity + 1)}
            className="touch-manipulation rounded-none border-l"
          >
            <Plus />
            <span className="sr-only">Aumentar cantidad</span>
          </Button>
        </div>
      </div>

      <div className="flex gap-2 max-sm:flex-col">
        <Button variant="default" size="lg" asChild className="sm:flex-1">
          <Link href="#" className="space-x-2">
            <ShoppingBag />
            <span>Comprar ahora</span>
          </Link>
        </Button>

        <Button variant="secondary" size="lg" asChild className="sm:flex-1">
          <Link href="#" className="space-x-2">
            <ShoppingCart />
            <span>Agregar al carrito</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
