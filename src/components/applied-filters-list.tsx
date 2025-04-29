import { Badge } from "./ui/badge";
import { SimplifiedTag } from "@/lib/simplified-types";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  search: string;
  appliedTags: SimplifiedTag[];
};

export default function AppliedFiltersList({
  search,
  appliedTags,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn("flex flex-wrap gap-2 overflow-x-auto", className)}
      {...props}
    >
      {search && <Badge variant="default">&quot;{search}&quot;</Badge>}

      {appliedTags.length ? (
        appliedTags.map(({ id, name }) => (
          <Badge key={id} variant="secondary">
            {name}
          </Badge>
        ))
      ) : (
        <Badge variant="outline">Todas las categorías</Badge>
      )}
    </div>
  );
}
