import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export default function SortingBarSkeleton(
  props: React.ComponentProps<typeof Skeleton>,
) {
  return (
    <Skeleton {...props}>
      <Input disabled />
    </Skeleton>
  );
}
