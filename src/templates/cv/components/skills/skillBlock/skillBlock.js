import * as React from "react";
import * as style from "./skillBlock.module.scss";

export const Block = (props) => {
  return (
    <div className={style.skillBlock}>
      <div className={style.title}>
        <h3>{props.title}</h3>
        {props.subTitle && <span>{props.subTitle}</span>}
      </div>
      <div className={props.classes}>{props.children}</div>
    </div>
  );
};
