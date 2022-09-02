import React, { useState, useEffect } from "react";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import * as style from "./recentWorks.module.scss";
import { WorksSwiper } from "./swiper/WorksSwiper";
import { Pagination } from "../../../global/pagination/Pagination";
import { listCardsProjects } from "../../portfolio/hero/data";
import { useTranslation } from "react-i18next";

export const RecentWorks = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  const setActiveHandler = (idx) => setActiveIndex(idx);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const { t } = useTranslation();

  return (
    <div className={`${style.recentWorks} vertical-padding`}>
      <div className="overalay container">
          <div className="container-grid">
            <div className="title-container">
              <div className="second-title">{t('projects_small_title')}</div>
              <h2 className="h2 title">{t('projects_big_title')}</h2>
              <div className="subtitle">
              {t('projects_text')}
              </div>
            </div>
            <button className="button view-more-button overlay">
            {t('projects_btn')}
            </button>
            <div className="content-container">
              <div className="pagination-wrapper">
                <Pagination activeIdx={activeIndex} sliderLength={listCardsProjects.length} />
              </div>
              <WorksSwiper
                setActiveHandler={setActiveHandler}
                swiperRef={swiperRef}
                setSwiperRef={setSwiperRef}
                activeIndex={activeIndex}
              />
            </div>
            <div className="buttons-block overlay">
              <SwiperButtons
                onPrev={slidePrevHandler}
                onNext={slideNextHandler}
                loop
              />
            </div>
          </div>
      </div>
    </div>
  );
};
