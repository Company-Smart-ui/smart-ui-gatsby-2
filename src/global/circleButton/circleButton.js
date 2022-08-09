import React from "react";
import * as style from "./circleButton.module.scss";
import Arrow from "./arrow_right.svg";
import { useSwiper } from "swiper/react";

export const CircleButton = ({ toLeft, classes, prev }) => {
  const swiper = useSwiper();

  return (
    <button
      className={`${style.button} ${classes}`}
      onClick={prev ? () => swiper.slidePrev() : () => swiper.slideNext()}
    >
      <img
        src={Arrow}
        alt="Arrow"
        className={`${style.arrow} ${!toLeft ? style.rotateArrow : ""}`}
      />
    </button>
  );
};
