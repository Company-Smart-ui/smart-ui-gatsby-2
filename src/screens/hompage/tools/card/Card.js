import React from 'react';
import * as style from "./card.module.scss";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export const Card = ({ content, indexEl, activeIndex }) => {

  const { img, Title, Text } = content;
  const image = getImage(img?.localFile );
  return (
    <div className={style.card}>
    <div
      className={
        `cards-container ${indexEl === activeIndex ? "active" : " "}`
      }
    >
      <div className="img-wrapper">
        <GatsbyImage alt={Title} image={image}/>
      </div>
      <div className="content-wrapper">
        <div className="content-title">{Title}</div>
        <div className="content-description">{Text}</div>
      </div>
    </div>
    </div>
  );
};
