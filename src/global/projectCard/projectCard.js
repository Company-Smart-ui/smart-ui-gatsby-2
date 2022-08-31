import React from "react";
import * as style from "./projectCard.module.scss";
import wordpressImg from "./img/wordpress.png";
import reactImg from "./img/react.png";
import { PageSpeed } from "../../components/pageSpeed/pageSpeed";

export const ProjectCard = ({ content }) => {
  const { img, title, description, link, technology, pageSpeedResult } =
    content;

  const rendeTechnology = (techList) =>
    techList.map((el) => {
      if (el === "react") {
        return <img key={el} src={reactImg} alt="react" />;
      }
      if (el === "wordpress") {
        return <img key={el} src={wordpressImg} alt="wordpress" />;
      }
    });

  return (
    <div className={style.projectCard}>
      <div className="cards-container">
        <div className="technology">{rendeTechnology(technology)}</div>
        <div className="progress">
          <PageSpeed result={pageSpeedResult} />
        </div>
        <div className="img-wrapper">
          <img src={img} alt={title} />
        </div>
        <div className="content-wrapper">
          <div>
            <div className="content-title">{title}</div>
            <a href={link} className="content-link">
              Website
            </a>
            <div className="content-description">{description}</div>
          </div>
          <button className="button">Learn more</button>
        </div>
      </div>
    </div>
  );
};
