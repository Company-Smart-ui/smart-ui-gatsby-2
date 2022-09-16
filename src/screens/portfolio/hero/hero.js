import React, { useEffect, useState } from "react";
import * as style from "./hero.module.scss";
import { PaginationList } from "../paginationList/paginationList";
import { FilterButtons } from "./filterButtons/filterButtons";
import { useOpen } from "../../../hooks/useOpen";
import { Modal } from "../../../components/layout/modal/modal";
import { useProjectsList } from "../../../hooks/useProjectsList";
import { OptimizationCard } from "./optimizationCard/optimizationCard";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { Loader } from "../../../global/loader/loader";
import { ProjectsList } from "./projectsList/projectsList";

export const Hero = () => {
  const { isOpen, onClose, onOpen } = useOpen(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [loading, setLoading] = useState(true);

  const size = useWindowResize();
  const listProjects = useProjectsList();

  const checkString = (item) => {
    if (typeof item === "string") {
      return item.toLowerCase();
    }
    return "";
  };

  // Tab buttons

  const filterListHandler = (title) => {
    setCurrentPage(1);
    if (title === "All") {
      setFilteredProjects(listProjects);
      return;
    }
    const arr = [];
    listProjects?.forEach((item) => {
      item.technologies.forEach(
        (el) => checkString(el.name) === checkString(title) && arr.push(item)
      );
    });

    const filterList = listProjects.filter(
      (item) => checkString(item?.technology?.name) === checkString(title)
    );

    const joinArr = [...arr, ...filterList];

    setFilteredProjects(joinArr);
  };

  //Pagination of cards

  const sliceCardsArrPerPage = (currentPage, cardsPerPage) => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    return filteredProjects.slice(indexOfFirstCard, indexOfLastCard);
  };

  const setCountCardsPerScreenSize = (size) => {
    if (size < 768) {
      return 2;
    } else if (size >= 768 && size < 1440) {
      return 4;
    } else if (size >= 1440 && size < 1720) {
      return 6;
    }
    return 8;
  };

  useEffect(() => {
    setFilteredProjects(listProjects);
    setLoading(false);
    const cardsPerPage = setCountCardsPerScreenSize(size);

    setCardsPerPage(cardsPerPage);
  }, [listProjects, size]);

  const projectsList = sliceCardsArrPerPage(currentPage, cardsPerPage);

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
            <div className="listWrapper overlay container">
              {!loading ? (
                <ProjectsList currentsCard={projectsList} />
              ) : (
                <Loader inside />
              )}
              <div className="overlay">
                {filteredProjects.length > cardsPerPage && (
                  <PaginationList
                    listCardsProjects={filteredProjects}
                    cardsPerPage={cardsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )}
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
