import React, { useState } from "react";
import * as style from "./projectsList.module.scss";
import { ItemsPerPage } from "../../../components/itemsPerPage/itemsPerPage";
import { Pagination } from "../../../components/pagination/pagination";

export const ProjectsList = ({ worksList }) => {
  const [itemsPerPage, setItemsPerPage] = useState({
    value: "10",
    label: "10 Rows",
  });
  const [itemOffset, setItemOffset] = useState(4);
  const itemsCount = { data: worksList.length };
  // const { data: itemsCount } = useQuery([API], () =>
  //     LeaderBoardService.getAllCount()
  // );
  const PerPageOptions = [
    { value: "1", label: "1 Row" },
    { value: "2", label: "2 Rows" },
    { value: "10", label: "10 Rows" },
    { value: "20", label: "20 Rows" },
    { value: "30", label: "30 Rows" },
  ];

  return (
    <section className={style.projectsList}>
          <Pagination
            itemsPerPage={Number(itemsPerPage.value)}
            {...{
              itemOffset,
              setItemOffset,
              length: itemsCount.data,
            }}
          />
        <ItemsPerPage
          value={itemsPerPage}
          changeHandler={setItemsPerPage}
          options={PerPageOptions}
        />
    </section>
  );
};
