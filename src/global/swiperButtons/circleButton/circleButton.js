import React from "react";
import * as style from "./circleButton.module.scss";
import Arrow from "./arrow.svg";

export const CircleButton = ({ toLeft, classes, onClick }) => {
  return (
    <button className={`${style.button} ${classes}`} onClick={onClick}>
      <img
        src={Arrow}
        alt="Arrow"
        className={`${style.arrow} ${!toLeft ? style.rotateArrow : ""}`}
      />
    </button>
  );
};
