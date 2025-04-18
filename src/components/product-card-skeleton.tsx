import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

export default function ProductCardSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const tags = new Array(2).fill(null);

  return (
    <Card className={cn("gap-0 overflow-hidden py-0", className)} {...props}>
      <Skeleton className="aspect-[4/3]" />
      <CardContent className="flex h-full flex-col justify-between p-4">
        <div className="space-y-4">
          <CardTitle className="flex items-start justify-between">
            <Skeleton className="h-4 w-[16ch]" />
            <Skeleton className="h-4 w-[8ch]" />
          </CardTitle>
          <CardDescription className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </CardDescription>
        </div>
        <div className="after:to-background relative mt-4 flex gap-1 overflow-x-hidden after:absolute after:right-0 after:h-full after:w-4 after:bg-gradient-to-r after:from-transparent">
          {tags.map((_, i) => (
            <Badge key={i} variant="secondary">
              <Skeleton className="h-4 w-[6ch]"></Skeleton>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
