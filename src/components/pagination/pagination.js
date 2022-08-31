import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import * as styles from "./pagination.module.scss";

export const Pagination = ({
  itemsPerPage,
  itemOffset,
  setItemOffset,
  length,
}) => {
  const [pageCount, setPageCount] = useState(0);
  useEffect(
    () => {
      const endOffset = itemOffset + itemsPerPage;
      setPageCount(Math.ceil(length / itemsPerPage));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [itemOffset, itemsPerPage, length]
  );
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % length;
    setItemOffset(newOffset);
  };
  const btnNext = (
    <svg
      width="10"
      height="12"
      viewBox="0 0 13 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 21L11 11L1 0.999999"
        stroke="url(#paint0_linear_2473_11461)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2473_11461"
          x1="6"
          y1="21"
          x2="6"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop
            offset="1"
            stopColor="#737373"
          />
        </linearGradient>
      </defs>
    </svg>
  );
  return (
    <ReactPaginate
      nextLabel={btnNext}
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel={btnNext}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel={"..."}
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName={styles.pagination}
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};
