import React from "react";
import { Modal } from "../../../components/layout/modal/modal";
import * as style from "./hero.module.scss";
import { ProjectCard } from "../../../global/projectCard/projectCard";
import { listCardsProjects } from "./data";
import { ProjectsList } from "../projectsList/projectsList";
import { OptimizationCard } from "./optimizationCard/optimizationCard";
import { FilterButtons } from "./filterButtons/filterButtons";

const modalText = {
  title: "Contact the lead developer",
  subtitle:
    "Please leave one of your contacts, lead developer will contact you.",
  input: "Contact the lead developer",
  textarea: "Your message*",
  resetBtn: "No, cancel",
  submit: "Yes, confirm",
};

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className="bCircle" />
      <div className="noise" />
      <div className="container">
        <div className="yCircle left md-only" />
        <div className={style.overlay}>
          <div className="grid-container">
            <div className="title-section">
              <h1>Our portfolio</h1>
            </div>
            <div className="subtitle-section">
              <p className="subtitle">
                We help to develop business, using complex modern effective it
                solutions, tools of web development and Internet marketing.
              </p>
            </div>
            <div className="optimization-section">
              <OptimizationCard result={98} />
            </div>
            <div className="modal-button-section">
              <Modal
                text={"Contact the lead developer"}
                dataText={modalText}
                isShow={false}
              />
            </div>
          </div>
          <div className={style.top}>
            <FilterButtons />
          </div>
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
        <div className="overlay">
          <ProjectsList listCardsProjects={listCardsProjects} />
        </div>
      </div>
    </section>
  );
};
