import React from "react";
import { CircleButton } from "./circleButton/circleButton";
import * as style from "./swiperButtons.module.scss";

export const SwiperButtons = ({
  onPrev,
  onNext,
  sliderLength,
  activeIndex,
}) => {
  return (
    <div className={style.swiperButtons}>
      <CircleButton
        onClick={onPrev}
        classes={activeIndex !== 0 ? "fillButton" : "backgroundButton"}
      />
      <CircleButton
        onClick={onNext}
        toLeft
        classes={
          activeIndex !== sliderLength - 1 ? "fillButton" : "backgroundButton"
        }
      />
    </div>
  );
};
