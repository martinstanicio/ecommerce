import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function FiltersBarSkeleton(
  props: React.ComponentProps<typeof Skeleton>,
) {
  return (
    <Skeleton {...props}>
      <Button variant="outline" size="icon" disabled />
    </Skeleton>
  );
}
