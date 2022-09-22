import React, { useCallback, useEffect, useState } from "react";
import * as style from "./hero.module.scss";
import { useOpen } from "../../../hooks/useOpen";
import { Modal } from "../../../components/layout/modal/modal";
import { useProjectsList } from "../../../hooks/useProjectsList";
import { OptimizationCard } from "./optimizationCard/optimizationCard";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { FilterButtons } from "./filterButtons/filterButtons";
import { ProjectsList } from "./projectsList/projectsList";
import { Loader } from "../../../global/loader/loader";
import { PaginationList } from "../paginationList/paginationList";
import {
  parseTechnologies,
  setCountCardsPerScreenSize,
  sliceItemsPerPage,
} from "./handlers/handlers";

export const Hero = () => {
  const { isOpen, onClose, onOpen } = useOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [filteredArr, setFilteredArr] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [projects] = useState(useProjectsList());

  const size = useWindowResize();

  const checkString = (item) => {
    if (typeof item === "string") {
      return item.toLowerCase();
    }
    return "";
  };

  // Tab buttons

  const filterListHandler = useCallback(
    (title) => {
      setCurrentPage(1);
      setFilterQuery(title);

      if (title === "all") {
        setFilteredArr(projects);
      } else {
        const arr = [];
        projects?.forEach((item) => {
          item.technologies.forEach(
            (el) =>
              checkString(el.name) === checkString(title) && arr.push(item)
          );
        });

        const filterList = projects.filter(
          (item) => checkString(item?.technology?.name) === checkString(title)
        );

        const joinArr = [...arr, ...filterList];

        setFilteredArr(joinArr);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [projects, filterQuery]
  );

  useEffect(() => {
    const cardsPerPage = setCountCardsPerScreenSize(size);
    setCardsPerPage(cardsPerPage);
    setCurrentPage(1);
  }, [size]);

  useEffect(() => {
    if (!projects) {
    } else {
      setLoading(false);

      //Check query
      const query = parseTechnologies();
      if (typeof window !== "undefined") {
        const url = window.location.href;

        if (!query) {
          window.location.href = `${url}?technologies=all`;
          filterListHandler(query);
        } else if (typeof query === "string") {
          filterListHandler(query);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const projectsList = sliceItemsPerPage(
    filteredArr,
    currentPage,
    cardsPerPage
  );

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
                <FilterButtons
                  filterQuery={filterQuery}
                  filterListHandler={filterListHandler}
                />
              </div>
            </div>
            <div className="listWrapper overlay container">
              {!loading ? (
                <ProjectsList currentsCard={projectsList} />
              ) : (
                <Loader inside />
              )}
              {filteredArr.length > cardsPerPage && !loading && (
                <div className="paginationSection">
                  <PaginationList
                    listCardsProjects={filteredArr}
                    cardsPerPage={cardsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
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
