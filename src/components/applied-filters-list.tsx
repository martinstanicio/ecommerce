import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  search: string;
  appliedTags: string[];
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
        appliedTags.map((tag, i) => (
          <Badge key={i} variant="secondary">
            {tag}
          </Badge>
        ))
      ) : (
        <Badge variant="outline">Todas las categorías</Badge>
      )}
    </div>
  );
}
