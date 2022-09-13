import React, { useEffect, useState } from "react";
import * as style from "./hero.module.scss";
import { ProjectsList } from "../projectsList/projectsList";
import { FilterButtons } from "./filterButtons/filterButtons";
import { useOpen } from "../../../hooks/useOpen";
import { Modal } from "../../../components/layout/modal/modal";
import { ProjectCard } from "../../../global/projectCard/projectCard";
import { Loader } from "../../../global/loader/loader";
import { useProjectsList } from "../../../hooks/useProjectsList";
import { OptimizationCard } from "./optimizationCard/optimizationCard";

export const Hero = () => {
  const { isOpen, onClose, onOpen } = useOpen(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const listOfProjects = useProjectsList();

  const checkString = (item) => {
    if (typeof item === "string") {
      return item.toLowerCase();
    }
    return "";
  };

  const filterListHandler = (title) => {
    if (title === "All") {
      setFilteredProjects(listOfProjects);
      return;
    }
    const arr = [];
    listOfProjects?.forEach((item) => {
      item.technologies.forEach(
        (el) => checkString(el.name) === checkString(title) && arr.push(item)
      );
    });

    const filterList = listOfProjects.filter(
      (item) => checkString(item?.technology?.name) === checkString(title)
    );

    const joinArr = [...arr, ...filterList];

    setFilteredProjects(joinArr);
  };

  useEffect(() => {
    setFilteredProjects(listOfProjects);
  }, [listOfProjects]);

  return (
    <>
      <section className={style.hero}>
        <div className="noise" />
        <div className="yCircle left" />
        <div className="bCircle" />
        <div className="grid-container container">
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
            <button
              className={["button", isOpen ? "disabledBtn" : ""].join(" ")}
              onClick={onOpen}
            >
              Contact the lead developer
            </button>
          </div>
        </div>
        <div className="portfolio-block overlay">
          <div className="bg-container">
            <div className="container">
              <div className="filter-buttons">
                <FilterButtons filterLIstHandler={filterListHandler} />
              </div>
            </div>
            <div className="list-wrapper overlay">
              <div className="container-block">
                {listOfProjects ? (
                  <div className="cards-list">
                    {Array.isArray(filteredProjects) &&
                      filteredProjects.map((el) => (
                        <div key={el.id}>
                          <ProjectCard {...el} />
                        </div>
                      ))}
                  </div>
                ) : (
                  <Loader inside />
                )}
              </div>
              <div className="overlay">
                <ProjectsList listCardsProjects={filteredProjects} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div className={style.heroWrap}>
          <Modal onClose={onClose} title={"Contact the lead developer"}>
            <h3>Contact the lead developer</h3>
          </Modal>
        </div>
      )}
    </>
  );
};
