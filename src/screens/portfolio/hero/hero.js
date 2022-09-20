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

const queryString = require("query-string");


export const Hero = () => {
  const {isOpen, onClose, onOpen} = useOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [filteredArr, setFilteredArr] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");


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
    setFilterQuery(title);
    setCurrentPage(1)

    if (title === "all") {
      setFilteredArr(listProjects);
    } else {
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

      setFilteredArr(joinArr);
    }
  };

  const parseTechnologies = () => {
    if (typeof window !== "undefined") {
      const parsed = queryString.parse(window.location.search);
      return parsed.technologies;
    }
  };

  useEffect(() => {
    const cardsPerPage = setCountCardsPerScreenSize(size);

    setCardsPerPage(cardsPerPage);

    const query = parseTechnologies();

    if (typeof window !== "undefined") {
      const url = window.location.href;

      if (!query) {
        window.location.href = `${url}?technologies=all`;
        setFilterQuery("all");
      } else if (typeof query === "string") {
        setFilterQuery(query);
        filterListHandler(query);
      }
    }
  }, [size]);

  useEffect(() => {
    if (listProjects) {
      setFilteredArr(listProjects);
      setLoading(false);
    }

    setCurrentPage(1)
  }, []);

  //Pagination of cards

  const sliceCardsArrPerPage = (currentPage, cardsPerPage) => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    return filteredArr.slice(indexOfFirstCard, indexOfLastCard);
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

  const projectsList = sliceCardsArrPerPage(currentPage, cardsPerPage);

  return (
      <>
        <section className={style.hero}>
          <div className="noise"/>
          <div className="yCircle left"/>
          <div className="bCircle"/>
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
              <OptimizationCard result={98}/>
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
                    <ProjectsList currentsCard={projectsList}/>
                ) : (
                    <Loader inside/>
                )}
                {filteredArr.length > cardsPerPage && !loading && (
                    <PaginationList
                        listCardsProjects={filteredArr}
                        cardsPerPage={cardsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
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
