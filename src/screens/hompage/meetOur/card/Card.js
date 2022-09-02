import React from "react";
import * as style from "./card.module.scss";

export const Card = ({ content }) => {
  const { img, title, text, btn } = content;
  
  return (
    <div className={style.card}>
        <div className="img-wrapper">
          <img src={img} alt={title} />
        </div>
        <div className="content-wrapper">
          <div className="content-title">{title}</div>
          <div className="contentWrapperDescription">{text}</div>
          <button className="button">{btn}</button>
        </div>
    </div>
  );
};
