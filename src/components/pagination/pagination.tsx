import { FC } from "react";

import { usePagination } from "../../hooks";
import { DOTS } from "../../utils";
import { StyledPaginationArrow, StyledPaginationItem, Wrapper } from "./styled";

type PaginationProps = {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
};

export const Pagination: FC<PaginationProps> = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange?.[paginationRange.length - 1];
  const isFirstPageCurrent = currentPage === 1;
  const isLastPageCurrent = currentPage === lastPage;
  return (
    <Wrapper>
      <StyledPaginationItem
        className={isFirstPageCurrent ? "disabled" : ""}
        onClick={onPrevious}
      >
        <StyledPaginationArrow arrowType="left" />
      </StyledPaginationItem>
      {paginationRange?.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <StyledPaginationItem className="dots" key={pageNumber + idx}>
              ...
            </StyledPaginationItem>
          );
        }
        return (
          <StyledPaginationItem
            key={pageNumber}
            onClick={() => onPageChange(+pageNumber)}
            className={currentPage === pageNumber ? "selected" : ""}
          >
            {pageNumber}
          </StyledPaginationItem>
        );
      })}
      <StyledPaginationItem
        className={isLastPageCurrent ? "disabled" : ""}
        onClick={onNext}
      >
        <StyledPaginationArrow arrowType="right" />
      </StyledPaginationItem>
    </Wrapper>
  );
};
