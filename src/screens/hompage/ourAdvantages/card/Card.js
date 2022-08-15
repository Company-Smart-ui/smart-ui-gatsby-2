import React from "react";
import * as style from "./card.module.scss";

export const Card = ({ content }) => {
  const { title, description } = content;

  return (
    <div className={style.card}>
          <div className="content-title">{title}</div>
          <div className="content-description">{description}</div>
    </div>
  );
};
