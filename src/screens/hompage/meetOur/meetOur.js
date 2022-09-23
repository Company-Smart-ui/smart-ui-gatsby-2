import React, { useContext, useEffect, useState } from "react";
import * as style from "./meetOur.module.scss";
import { TeamSwiper } from "./swiper/TeamSwiper";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { Pagination } from "../../../global/pagination/Pagination";
import { useTranslation } from "react-i18next";
import { I18nextContext, Link } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";

export const MeetOur = () => {
  const { language: currentLng } = useContext(I18nextContext);
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const activeIndexHandler = () => setActiveIndex(swiperRef?.realIndex);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allStrapiTeam {
        nodes {
          linkedin
          name
          position
          telegram
          show_contact
          preview_photo {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 400, height: 400)
              }
            }
          }
        }
      }
    }
  `);

  const employees = Array.isArray(data.allStrapiTeam.nodes)
    ? data.allStrapiTeam.nodes
    : [];

  return (
    <div className={`${style.meetOur} vertical-padding`}>
      <div className="noise" />
      <div className="container">
        <div className="img-block" />
        <div className="container-grid">
          <div className="title-block">
            <div className="title-container">
              <h2 className="h2">{t("team_title")}</h2>
              <p className="subtitle">{t("team_text")}</p>
              <div className="pagination-wrapper">
                <Pagination
                  activeIdx={activeIndex}
                  sliderLength={employees.length}
                />
              </div>
            </div>
          </div>
          <div className="container-block overlay">
            <TeamSwiper
              activeIndexHandler={activeIndexHandler}
              swiperRef={swiperRef}
              setSwiperRef={setSwiperRef}
              teamList={employees}
            />
          </div>
          <div className="footer-buttons overlay">
            <SwiperButtons
              onPrev={slidePrevHandler}
              onNext={slideNextHandler}
              activeIndex={activeIndex}
              sliderLength={employees.length}
              fill
            />
          </div>
          <Link
            className="container button whole-team-button overlay"
            to={"/team/"}
            language={currentLng}
          >
            {t("team_btn")}
          </Link>
        </div>
      </div>
    </div>
  );
};
