import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";

export default function SortingBarSkeleton(
  props: React.ComponentProps<typeof Skeleton>,
) {
  return (
    <Skeleton {...props}>
      <Input disabled />
    </Skeleton>
  );
}
