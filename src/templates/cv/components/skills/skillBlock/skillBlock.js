import * as React from "react";
import * as style from "./skillBlock.module.scss";

export const Block = (props) => {
  return (
    <div
      className={`${style.skillBlock} ${
        props.full ? style.skillBlockFull : ""
      }`}
    >
      <div className={style.title}>
        <h3>{props.title}</h3>
        {props.subTitle && <span>{props.subTitle}</span>}
      </div>
      <div className={`${style.skillBlockContent} ${props.classes}`}>
        {props.children}
      </div>
    </div>
  );
};
