import React from 'react';
import * as style from "./card.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export const Card = ({ content, indexEl, activeIndex }) => {
  const { title, description } = content;

  return (
    <div className={style.card}>
    <div
      className={
        indexEl === activeIndex ? "cardsContainer active" : "cardsContainer"
      }
    >
      <div className="imgWrapper">
        <StaticImage
          placeholder={"none"}
          height={120}
          alt={""}
          src="./javascript.png"
        />
      </div>
      <div className="contentWrapper">
        <div className="contentWrapperTitle">{title}</div>
        <div className="contentWrapperDescription">{description}</div>
      </div>
    </div>
    </div>
  );
};
