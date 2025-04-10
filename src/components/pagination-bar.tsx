"use client";

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
};

export default function PaginationBar({
  totalPages,
  currentPage,
  ...props
}: Props) {
  const prevUrl = new URL(window.location.href);
  prevUrl.searchParams.set("page", (currentPage - 1).toString());

  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("page", (currentPage + 1).toString());

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  ).filter(
    (page) =>
      page === currentPage ||
      page === 1 ||
      page === totalPages ||
      page === currentPage - 1 ||
      page === currentPage + 1,
  );
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevUrl} replace disabled={!hasPrevPage} />
        </PaginationItem>

        {pages.map((page, index, array) => {
          const isFirstPage = page === 1;
          const isAdjacentToPrevPage = page - 1 === array[index - 1];

          return (
            <Fragment key={page}>
              {!isFirstPage && !isAdjacentToPrevPage && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  href={url}
                  replace
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </Fragment>
          );
        })}

        <PaginationItem>
          <PaginationNext href={nextUrl} replace disabled={!hasNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
