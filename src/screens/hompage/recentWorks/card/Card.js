import React from "react";
import * as style from "./card.module.scss";
import wordpressImg from "./wordpress.png";
import reactImg from "./react.png";

export const Card = ({ content }) => {
  const { img, title, description, link, technology } = content;

  return (
    <div className={style.card}>
      <div className="cards-container">
      <div className="technology">
        {technology === "wordpress" && (
          <img src={wordpressImg} alt="wordpress" />
        )}
         {technology === "react" && (
          <img src={reactImg} alt="react" />
        )}
      </div>
      <div className="img-wrapper">
        <img src={img} alt={title} />
      </div>
      <div className="content-wrapper">
        <div>
        <div className="content-title">{title}</div>
        <div className="content-description">{description}</div>
        <a href={link} className="content-link">Website</a>
        </div>
        <button className="button">Learn more</button>
      </div>
      </div>
    </div>
  );
};
