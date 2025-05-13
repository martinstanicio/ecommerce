import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.ComponentProps<"div">;

export default function HighlightedStatCardSkeleton({
  className,
  ...props
}: Props) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <Skeleton className="mx-auto h-10 w-[8ch] lg:h-12 lg:w-[10ch]"></Skeleton>
      <Skeleton className="mx-auto h-6 w-[14ch] lg:h-7 lg:w-[16ch]"></Skeleton>
    </div>
  );
}
