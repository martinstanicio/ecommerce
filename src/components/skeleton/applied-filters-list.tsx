import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function AppliedFiltersListSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const appliedFilters = new Array(3).fill(null);

  return (
    <div
      className={cn("flex flex-wrap gap-2 overflow-x-auto", className)}
      {...props}
    >
      {appliedFilters.map((_, i) => (
        <Skeleton key={i} className="w-[12ch]">
          <Badge variant="secondary" />
        </Skeleton>
      ))}
    </div>
  );
}
