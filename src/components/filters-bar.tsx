import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function FiltersBar(props: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="outline" size="icon" {...props}>
      <SlidersHorizontal />
    </Button>
  );
}
