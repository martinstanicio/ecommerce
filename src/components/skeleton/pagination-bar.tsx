import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

export default function PaginationBarSkeleton(
  props: React.ComponentProps<typeof Pagination>,
) {
  return (
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <Skeleton>
            <Button variant="ghost" disabled className="w-[12ch]" />
          </Skeleton>
        </PaginationItem>

        <PaginationItem>
          <Skeleton>
            <Button variant="outline" size="icon" disabled />
          </Skeleton>
        </PaginationItem>
        <PaginationItem>
          <Skeleton>
            <Button variant="outline" size="icon" disabled />
          </Skeleton>
        </PaginationItem>
        <PaginationItem>
          <Skeleton>
            <Button variant="outline" size="icon" disabled />
          </Skeleton>
        </PaginationItem>

        <PaginationItem>
          <Skeleton>
            <Button variant="ghost" disabled className="w-[12ch]" />
          </Skeleton>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
