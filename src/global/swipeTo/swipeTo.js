import React from "react";
import * as style from "./swipeTo.module.scss";
import Img from "./pointer.svg";
import Scroll from "./scroll.svg";

export const SwipeTo = ({toLink}) => {
  // const scroll = () => {
  //   window.scrollBy({
  //     top: 500,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <a href={`${toLink}`} className={style.swipeTo + "  swipeTo "}>
      <span className="lg-only">
        <img src={Scroll} alt="" /> Scroll to explore
      </span>
      <span className="lg-end">
        <img src={Img} alt="" /> Swipe to explore
      </span>
    </a>
  );
};
