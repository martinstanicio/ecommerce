import { cn } from "@/lib/utils";
import { HighlightedStats } from "@/payload-types";
import React from "react";

type Props = React.ComponentProps<"div"> & {
  stat: HighlightedStats["stats"][number];
};

export default function HighlightedStatCard({
  stat,
  className,
  ...props
}: Props) {
  return (
    <div className={cn("space-y-2 text-center", className)} {...props}>
      <p className="text-4xl font-bold lg:text-5xl">{stat.value}</p>
      <p className="text-muted-foreground lg:text-lg">{stat.description}</p>
    </div>
  );
}
