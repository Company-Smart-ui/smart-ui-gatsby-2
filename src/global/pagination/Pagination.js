import React from "react";
import * as style from "./pagination.module.scss";

export const Pagination = ({ activeIdx, sliderLength, whiteTheme }) => {
  return (
    <div className={style.pagination}>
      <div className="paginationWrapper">
        <span className={`${whiteTheme ? "dark" : "white"} activeEl`}>
          {activeIdx < 10 ? `0${activeIdx + 1}` : activeIdx + 1}
        </span>
        <span className={whiteTheme ? 'horizontalLine dark' : 'horizontalLine white'}></span>
        <span className={whiteTheme ? "dark" : "white"}>
          {sliderLength < 10 ? `0${sliderLength}` : sliderLength}
        </span>
      </div>
    </div>
  );
};
