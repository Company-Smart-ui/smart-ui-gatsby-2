import React, { useState } from "react";
import * as style from "./projectsList.module.scss";
import { ItemsPerPage } from "../../../components/itemsPerPage/itemsPerPage";
import { Pagination } from "../../../components/pagination/pagination";

export const ProjectsList = ({ listCardsProjects }) => {
  const [itemsPerPage, setItemsPerPage] = useState({
    value: "2",
    label: "2 Rows",
  });
  const [itemOffset, setItemOffset] = useState(4);
  const itemsCount = { data: listCardsProjects.length };
  // const { data: itemsCount } = useQuery([API], () =>
  //     LeaderBoardService.getAllCount()
  // );
  const PerPageOptions = [
    { value: "2", label: "2 Rows" },
    { value: "10", label: "10 Rows" },
    { value: "20", label: "20 Rows" },
    { value: "30", label: "30 Rows" },
  ];

  return (
    <div className={style.projectsList}>
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
    </div>
  );
};
