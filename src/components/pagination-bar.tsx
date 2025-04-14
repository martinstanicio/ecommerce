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
import { Fragment, useEffect, useState } from "react";

type Props = React.ComponentProps<"nav"> & {
  totalPages: number;
  currentPage: number;
};

export default function PaginationBar({
  totalPages,
  currentPage,
  ...props
}: Props) {
  const [prevUrl, setPrevUrl] = useState<URL>();
  const [nextUrl, setNextUrl] = useState<URL>();
  const [pageUrls, setPageUrls] = useState<Record<number, URL>>({});

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

  useEffect(() => {
    const previous = new URL(window.location.href);
    previous.searchParams.set("page", (currentPage - 1).toString());
    setPrevUrl(previous);

    const next = new URL(window.location.href);
    next.searchParams.set("page", (currentPage + 1).toString());
    setNextUrl(next);

    const urls: typeof pageUrls = {};
    pages.forEach((page) => {
      const url = new URL(window.location.href);
      url.searchParams.set("page", page.toString());
      urls[page] = url;
    });
    setPageUrls(urls);
  }, [currentPage, pages]);

  return (
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={prevUrl || "#"}
            replace
            disabled={!hasPrevPage}
          />
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
                  href={pageUrls[page] || "#"}
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
          <PaginationNext
            href={nextUrl || "#"}
            replace
            disabled={!hasNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
