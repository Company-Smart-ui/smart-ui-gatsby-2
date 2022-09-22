import React, { useEffect, useState } from "react";
import * as style from "./clientsReview.module.scss";
import { ReviewCard } from "./card/reviewCard";
import { graphql, useStaticQuery } from "gatsby";
import { useOpen } from "../../../hooks/useOpen";
import { Modal } from "../../../components/layout/modal/modal";
import { PaginationList } from "../paginationList/paginationList";
import { sliceItemsPerPage } from "../hero/handlers/handlers";
import { Loader } from "../../../global/loader/loader";

export const ClientsReview = () => {
  const { isOpen, onClose, onOpen } = useOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = useStaticQuery(graphql`
    query {
      allStrapiReviewPortfolio {
        nodes {
          review
          name
          stars
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

      setDataArr(list);
      setLoading(false);
    }
  }, [data]);

  const paginatedList = dataArr && sliceItemsPerPage(dataArr, currentPage, 2);

  return (
    <>
      <div className={`${style.review} vertical-padding`}>
        <div className="bCircle" />
        <div className="noise" />
        <div className="container">
          <div className="container-grid">
            <div className="title-section">
              <div className="yCircle" />
              <h2 className="overlay">
                Clients Reviews<span className="dot">.</span>
              </h2>
              <div className="subtitle">
                We will help to develop your best project based on your idea.
              </div>
              <button
                className={[
                  "button",
                  "overlay",
                  isOpen ? "disabledBtn" : "",
                ].join(" ")}
                onClick={onOpen}
              >
                Leave a comment
              </button>
            </div>
            {!loading ? (
              <div className="review-section">
                <div className="title">What others are saying</div>
                <div className="list">
                  {paginatedList.map((el, i) => (
                    <ReviewCard key={i} content={el} />
                  ))}
                </div>
              </div>
            ) : (
              <Loader inside />
            )}
            {dataArr.length > 2 && (
              <div className="paginationSection overlay">
                <PaginationList
                  listCardsProjects={dataArr}
                  cardsPerPage={2}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={style.reviewWrap}>
          <Modal onClose={onClose} title={"Leave a comment"} isReview={true}>
            <h3>Leave a comment</h3>
          </Modal>
        </div>
      )}
    </>
  );
};
