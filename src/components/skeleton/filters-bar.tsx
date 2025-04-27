import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export default function FiltersBarSkeleton(
  props: React.ComponentProps<typeof Skeleton>,
) {
  return (
    <Skeleton {...props}>
      <Button variant="outline" size="icon" disabled />
    </Skeleton>
  );
}
