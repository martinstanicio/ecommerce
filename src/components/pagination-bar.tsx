import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Fragment } from "react";

type Props = React.ComponentProps<"nav"> & {
  totalPages: number;
  currentPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  baseUrl: string;
};

export default function PaginationBar({
  totalPages,
  currentPage,
  hasPrevPage,
  hasNextPage,
  baseUrl,
  ...props
}: Props) {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  ).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      page === currentPage - 1 ||
      page === currentPage + 1,
  );

  return (
    <Pagination {...props}>
      <PaginationContent>
        {hasPrevPage && (
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}
        {pages.map((page, index, array) => (
          <Fragment key={page}>
            {page > 1 && page !== array[index - 1] + 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationLink href="#">{page}</PaginationLink>
          </Fragment>
        ))}
        {hasNextPage && (
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
