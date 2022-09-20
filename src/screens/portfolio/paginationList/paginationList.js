import React from "react";
import * as style from "./paginationList.module.scss";
import { Pagination } from "../../../components/pagination/pagination";

export const PaginationList = ({
  listCardsProjects,
  cardsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className={style.projectsList}>
      {listCardsProjects && (
        <Pagination
          itemsPerPage={cardsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          length={listCardsProjects.length}
        />
      )}
    </div>
  );
};
