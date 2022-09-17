import React from "react";
import * as style from "./pagination.module.scss";

export const Pagination = ({ activeIdx = 0, sliderLength, whiteTheme }) => {
  const showCurrentIndex = (index) => {
    if (typeof index === "number" && index < 9) {
      return `0${activeIdx + 1}`;
    }
    return activeIdx + 1;
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
