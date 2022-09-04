import React from "react";
import * as style from "./hero.module.scss";
import { ProjectCard } from "../../../global/projectCard/projectCard";
import { listCardsProjects } from "./data";
import { ProjectsList } from "../projectsList/projectsList";
import { OptimizationCard } from "./optimizationCard/optimizationCard";
import { FilterButtons } from "./filterButtons/filterButtons";

// const modalText = {
//   title: "Contact the lead developer",
//   subtitle:
//     "Please leave one of your contacts, lead developer will contact you.",
//   input: "Contact the lead developer",
//   textarea: "Your message*",
//   resetBtn: "No, cancel",
//   submit: "Yes, confirm",
// };

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className="noise" />
      <div className="yCircle left" />
      <div className="bCircle" />
      <div className="container">
        <div className="grid-container">
          <div className="title-section overlay">
            <h1>Our portfolio</h1>
          </div>
          <div className="subtitle-section">
            <p className="subtitle">
              We help to develop business, using complex modern effective it
              solutions, tools of web development and Internet marketing.
            </p>
          </div>
          <div className="optimization-section overlay">
            <OptimizationCard result={98} />
          </div>
          <div className="modal-button-section">
            <button className="button">Contact the lead developer</button>
          </div>
        </div>
        <div className="portfolio-block">
          <div className="filter-buttons">
            <FilterButtons />
          </div>
          <div className="list-wrapper overlay">
            <div className="cards-list">
              {listCardsProjects.map((el) => (
                <div key={el.id}>
                  <ProjectCard content={el} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overlay">
          <ProjectsList listCardsProjects={listCardsProjects} />
        </div>
      </div>
    </section>
  );
};
