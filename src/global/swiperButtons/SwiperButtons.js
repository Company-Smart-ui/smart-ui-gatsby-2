import React from "react";
import { CircleButton } from "./circleButton/circleButton";
import * as style from "./swiperButtons.module.scss";

export const SwiperButtons = ({
  onPrev,
  onNext,
  sliderLength,
  activeIndex,
  loop,
}) => {
  return (
    <div className={style.swiperButtons}>
      <CircleButton
        onClick={onPrev}
        classes={loop || activeIndex !== 0 ? "fillButton" : " "}
      />
      <CircleButton
        onClick={onNext}
        toLeft
        classes={loop || activeIndex !== sliderLength - 1 ? "fillButton" : " "}
      />
    </div>
  );
};
