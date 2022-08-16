import React from "react";
import * as style from "./card.module.scss";

export const Card = ({ content }) => {
  const { photo, name, position } = content;

  return (
    <div className={style.card}>
        <div className="imgWrapper">
          <img src={photo} alt={name} />
        </div>
        <div className="contentWrapper">
          <div className="contentWrapperTitle">{name}</div>
          <div className="contentWrapperDescription">{position}</div>
          <button className="button">Ask a question</button>
        </div>
    </div>
  );
};
