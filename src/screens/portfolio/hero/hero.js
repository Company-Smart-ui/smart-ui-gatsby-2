import React, { useEffect, useState } from "react";
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
  setCountCardsPerScreenSize,
  sliceItemsPerPage,
} from "./handlers/handlers";
import { useQueryParam } from "../../../hooks/useQueryParam";

export const Hero = () => {
  const { isOpen, onClose, onOpen } = useOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [filteredArr, setFilteredArr] = useState([]);
  const [query, setQuery] = useState("");

  const [search, setSearch] = useQueryParam("technologies", "");
  const [projects] = useState(useProjectsList());

  const size = useWindowResize();

  // Tab buttons

  const getProjectsList = (title) => {
    const filterList1 = [];
    projects?.forEach((el) => {
      el?.technologies.forEach(({ name }) => {
        if (name.toLowerCase() === title.toLowerCase()) {
          filterList1.push(el);
        }
      });
    });

    const filterList2 = projects.filter(
      ({ technology: { name } }) => name.toLowerCase() === title.toLowerCase()
    );

    return [...filterList1, ...filterList2];
  };

  const filterListHandler = (title) => {
    setQuery(title);
    setSearch(title);

    if (title === "all") {
      setFilteredArr(projects);
    } else {
      const joinedArr = getProjectsList(title);
      setFilteredArr(joinedArr);
    }
  };

  useEffect(() => {
    const cardsPerPage = setCountCardsPerScreenSize(size);
    setCardsPerPage(cardsPerPage);

    if (search) {
      filterListHandler(search);
    } else {
      filterListHandler("all");
    }
    if (projects) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, size]);

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
                  query={query}
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
