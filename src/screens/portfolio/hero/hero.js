import React from "react";
import * as style from "./hero.module.scss";
import {ProjectCard} from "../../../global/projectCard/projectCard";
import {listCardsProjects} from "./data";
import {ProjectsList} from "../projectsList/projectsList";
import {OptimizationCard} from "./optimizationCard/optimizationCard";
import {FilterButtons} from "./filterButtons/filterButtons";
import {useOpen} from "../../../hooks/useOpen";
import { Modal } from "../../../components/layout/modal/modal";

export const Hero = () => {
  const {isOpen, onClose, onOpen}= useOpen(false);
  return (
    <>
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
          <div className="modal-button-section overlay">
            <button className={["button", (isOpen ? 'disabledBtn' : '')].join(' ') } onClick={onOpen}>Contact the lead developer</button>
          </div>
        </div>
        <div className="portfolio-block overlay">
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
    {
        isOpen && 
        <div className={style.heroWrap}>
            <Modal onClose={onClose} title={'Contact the lead developer'}>
                <h3>Contact the lead developer</h3>
            </Modal>
        </div>
    }
    </>
  );
};
