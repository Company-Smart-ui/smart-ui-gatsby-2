import React from "react";
import { CircleButton } from "./circleButton/circleButton";
import * as style from "./swiperButtons.module.scss";

export const SwiperButtons = ({
  onPrev,
  onNext,
  sliderLength,
  activeIndex,
  loop,
  fill,
  doubleEnd,
  countElementFromEnd,
}) => {
  const disableButton = fill ? "gray-button" : "transparent-button";
  const getLastElement = doubleEnd ? countElementFromEnd : 1;

  return (
    <div className={style.swiperButtons}>
      <CircleButton
        onClick={onPrev}
        classes={loop || activeIndex !== 0 ? "fillButton" : disableButton}
      />
      <CircleButton
        onClick={onNext}
        toLeft
        classes={
          loop || activeIndex !== sliderLength - getLastElement
            ? "fillButton"
            : disableButton
        }
      />
    </div>
  );
};
