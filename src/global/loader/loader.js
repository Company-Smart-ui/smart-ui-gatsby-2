import React from "react";
import * as style from "./loader.module.scss";
import Icon from "./loader.svg";

export const Loader = ({ inside }) => {
  return (
    <div className={[style.loader, "loader", inside ? style.inside : " "].join(" ")}>
      <img src={Icon} alt="" />
    </div>
  );
};
