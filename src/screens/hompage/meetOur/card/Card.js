import React from "react";
import * as style from "./card.module.scss";

export const Card = ({ content }) => {
  const { photo, name, position } = content;

  return (
    <div className={style.card}>
        <div className="img-wrapper">
          <img src={photo} alt={name} />
        </div>
        <div className="content-wrapper">
          <div className="content-title">{name}</div>
          <div className="contentWrapperDescription">{position}</div>
          <button className="button">Ask a question</button>
        </div>
    </div>
  );
};
