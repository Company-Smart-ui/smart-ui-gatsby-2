import React, { useEffect, useState } from "react";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import * as style from "./recentWorks.module.scss";
import { WorksSwiper } from "./swiper/WorksSwiper";
import { Pagination } from "../../../global/pagination/Pagination";
import { useTranslation } from "react-i18next";
import { Loader } from "../../../global/loader/loader";
import { useProjectsList } from "../../../hooks/useProjectsList";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const RecentWorks = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [countElementFromEnd, setCountElementFromEnd] = useState(1);

  const size = useWindowResize();

  const listOfProjects = useProjectsList();

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  const setActiveHandler = (idx) => setActiveIndex(idx);

  const { t } = useTranslation();

  useEffect(() => {
    if (size < 768) {
      setCountElementFromEnd(1);
    } else if (size >= 768 && size < 1440) {
      setCountElementFromEnd(2);
    } else {
      setCountElementFromEnd(3);
    }
  }, [size]);

  return (
    <div className={`${style.recentWorks} vertical-padding`}>
      <StaticImage
        alt={""}
        src="./img/react.png"
        alt={""}
        style={{ position: "absolute", right: 0, height: "100%" }}
      />
      <div className="overlay container">
        <div className="container-grid">
          <div className="title-container">
            <div className="second-title">{t("projects_small_title")}</div>
            <h2 className="h2 title">{t("projects_big_title")}</h2>
            <div className="subtitle">{t("projects_text")}</div>
          </div>
          <Link className="button view-more-button overlay" to="portfolio/">
            {t("projects_btn")}
          </Link>
          {listOfProjects ? (
            <>
              <div className="content-container">
                <div className="pagination-wrapper">
                  <Pagination
                    activeIdx={activeIndex}
                    sliderLength={listOfProjects.length}
                  />
                </div>
                <WorksSwiper
                  setActiveHandler={setActiveHandler}
                  swiperRef={swiperRef}
                  setSwiperRef={setSwiperRef}
                  listOfProjects={listOfProjects}
                  button={t("tr_learn_more")}
                />
              </div>
              <div className="buttons-block overlay">
                <SwiperButtons
                  onPrev={slidePrevHandler}
                  onNext={slideNextHandler}
                  sliderLength={listOfProjects.length}
                  activeIndex={activeIndex}
                  fill
                  doubleEnd
                  countElementFromEnd={countElementFromEnd}
                />
              </div>
            </>
          ) : (
            <Loader inside />
          )}
        </div>
      </div>
    </div>
  );
};
