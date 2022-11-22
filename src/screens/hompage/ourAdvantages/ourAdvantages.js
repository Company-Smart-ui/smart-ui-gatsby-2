import React, {useEffect, useState} from "react";
import * as style from "./ourAdvantages.module.scss";
import {SwiperButtons} from "../../../global/swiperButtons/SwiperButtons";
import {AdvantagesSwiper} from "./swiper/AdvantagesSwiper";
import {Pagination} from "../../../global/pagination/Pagination";
import {useTranslation} from "react-i18next";
import { StaticImage } from "gatsby-plugin-image";

export const OurAdvantages = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const {t} = useTranslation();

  const cardsList = t("advantages_cards", {returnObjects: true});

  return (
      <section className={`${style.ourAdvantages} vertical-padding`}>
        <StaticImage
            alt={""}
          src="../whatWeDo/line_background_grid.png"
          style={{position:'absolute', height: '100%', top:'0'}}
         />
        <div className="noise"/>
        <div className="container">
          <div className="clock-mobile"/>
          <div className="illustration-tablet">
          <StaticImage
              alt={""}
            src="./illustration_tablet.png"
            style={{ position: "absolute", top: 0, height: "100%" }}
          />
          </div>
          <div className="upperBlock">
            <div className="title-block">
              <div className="bCircle md-only"/>
              <div className="gCircle"/>
              <h2 className="h2 overlay">{t("advantages_title")}</h2>
              <div className="subtitle">{t("advantages_text")}</div>
            </div>
            <div className="pagination-wrapper">
              <Pagination
                  activeIdx={activeIndex}
                  sliderLength={cardsList.length}
                  whiteTheme
              />
            </div>
            <AdvantagesSwiper
                swiperRef={swiperRef}
                setSwiperRef={setSwiperRef}
                setActiveIndex={setActiveIndex}
                cardsList={cardsList}
            />
          </div>
          <div className="footer-buttons overlay">
            <SwiperButtons
                onPrev={slidePrevHandler}
                onNext={slideNextHandler}
                sliderLength={cardsList.length}
                activeIndex={activeIndex}
            />
          </div>
        </div>
      </section>
  );
};
