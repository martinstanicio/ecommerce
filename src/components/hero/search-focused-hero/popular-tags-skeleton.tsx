import PopularTagsListSkeleton from "./popular-tags-list-skeleton";
import { cn } from "@/lib/utils";

export default async function PopularTagsSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <p className="text-sm font-bold tracking-wider uppercase">
        Categorías populares
      </p>

      <PopularTagsListSkeleton />
    </div>
  );
}
