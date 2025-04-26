import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function PopularTagsSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const tags = new Array(4).fill(null);

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-2", className)}
      {...props}
    >
      {tags.map((_, i) => (
        <Button variant="secondary" size="sm" key={i} asChild>
          <Skeleton className="w-[12ch]" />
        </Button>
      ))}
    </div>
  );
}
