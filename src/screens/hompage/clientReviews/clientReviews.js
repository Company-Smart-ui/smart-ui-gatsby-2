import React, { useEffect, useState } from "react";
import * as style from "./clientReviews.module.scss";
import { Pagination } from "../../../global/pagination/Pagination";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { ReviewSwiper } from "./swiper/ReviewSwiper";
import { useTranslation } from "react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Loader } from "../../../global/loader/loader";

export const ClientReviews = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  const { t } = useTranslation();

  const link = t("reviews_link", { returnObjects: true });

  const data = useStaticQuery(graphql`
    query {
      allStrapiReviewPortfolio {
        nodes {
          id
          name
          stars
          review
          published
        }
      }
    }
  `);

  useEffect(() => {
    if (data) {
      const list = data?.allStrapiReviewPortfolio?.nodes.filter(
        (item) => item.published
      );
      setReviewList(list);
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className={`${style.clientReviews} vertical-padding`}>
      <StaticImage
        src="./upwork_label_mobile.png"
        alt="label"
        style={{ position: "absolute", right: 0, top: 0, width: "535px" }}
      />
      <div className="bg-upwork-title">
        <div className="noise" />
        <div className="container">
          <div className="overlay grid-container">
            <div className="title">
              <h2>
                <span
                  dangerouslySetInnerHTML={{ __html: t("reviews_title") }}
                />
              </h2>
              <div className="subtitle">{t("reviews_text")}</div>
            </div>
            <div className="review">
              <div
                dangerouslySetInnerHTML={{ __html: t("reviews_right_title") }}
                className="review-title"
              />
              <a href={link.url} className="button">
                {link.text}
              </a>
            </div>
            <div className="content">
              {isLoading ? (
                <Loader inside fill="dark" />
              ) : (
                <>
                  <Pagination
                    sliderLength={Math.ceil(reviewList.length / 2)}
                    activeIdx={activeIndex}
                  />
                  <ReviewSwiper
                    swiperRef={swiperRef}
                    setSwiperRef={setSwiperRef}
                    setActiveIndex={setActiveIndex}
                    reviewList={reviewList}
                  />
                </>
              )}
            </div>
            <div className="buttons">
              <SwiperButtons
                onPrev={slidePrevHandler}
                onNext={slideNextHandler}
                sliderLength={2}
                activeIndex={activeIndex}
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
