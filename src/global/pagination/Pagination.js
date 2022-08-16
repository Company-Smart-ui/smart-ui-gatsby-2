import React from "react";
import * as style from "./pagination.module.scss";

export const Pagination = ({ activeIdx, sliderLength, whiteTheme }) => {
  const showCurrentIndex = (index) => {
    if (typeof(index) === "number" && index < 10) {
      return `0${activeIdx + 1}`;
    }
    return index;
  };
  return (
    <div className={style.pagination}>
      <span className={`${whiteTheme ? "dark" : "white"} activeEl`}>
        {showCurrentIndex(activeIdx)}
      </span>
      <span
        className={whiteTheme ? "horizontalLine dark" : "horizontalLine white"}
      ></span>
      <span className={whiteTheme ? "dark" : "white"}>
        {sliderLength < 10 ? "0" + sliderLength : sliderLength}
      </span>
    </div>
  );
};
