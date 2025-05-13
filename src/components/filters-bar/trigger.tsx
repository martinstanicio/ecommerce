import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function Trigger(props: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="outline" size="icon" {...props}>
      <SlidersHorizontal />
      <span className="sr-only">Filtrar por categoría</span>
    </Button>
  );
}
