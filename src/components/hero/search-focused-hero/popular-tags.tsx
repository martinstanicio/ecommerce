import PopularTagsList from "./popular-tags-list";
import { getPopularTags } from "@/lib/get-popular-tags";
import { cn } from "@/lib/utils";

export default async function PopularTags({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const tags = await getPopularTags();

  if (!tags.length) return;

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <p className="text-sm font-bold tracking-wider uppercase">
        Categorías populares
      </p>

      <PopularTagsList tags={tags} />
    </div>
  );
}
