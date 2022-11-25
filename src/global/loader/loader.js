import React from "react";
import * as style from "./loader.module.scss";
import { LoaderImg } from "./loaderImg";

export const Loader = ({ inside, className = "", fill }) => {
  let setFill;
  if (fill === "dark") {
    setFill = "#0cce6b";
  } else {
    setFill = "#fff";
  }
  return (
    <div
      className={[!inside ? style.loader : style.inside, className].join(" ")}
    >
      <div className={style.imgWrapper}>
        <LoaderImg fill={setFill} />
      </div>
    </div>
  );
};
