import React from 'react';
import * as style from "./card.module.scss";

export const Card = ({ content, indexEl, activeIndex }) => {
  const { img, title, description } = content;

  console.log(img);

  return (
    <div className={style.card}>
    <div
      className={
        indexEl === activeIndex ? "cardsContainer active" : "cardsContainer"
      }
    >
      <div className="img-wrapper">
        <img src={img} alt={title} />
      </div>
      <div className="content-wrapper">
        <div className="content-title">{title}</div>
        <div className="content-description">{description}</div>
      </div>
    </div>
    </div>
  );
};
