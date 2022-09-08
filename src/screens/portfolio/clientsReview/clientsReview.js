import React, { useState } from "react";
import * as style from "./clientsReview.module.scss";
import { ReviewCard } from "./card/reviewCard";
import { Pagination } from "../../../components/pagination/pagination";
import { reviewsList } from "./data";
import { graphql, useStaticQuery } from "gatsby";
import {useOpen} from "../../../hooks/useOpen";
import { Modal } from "../../../components/layout/modal/modal";

export const ClientsReview = () => {
  const {isOpen, onClose, onOpen}= useOpen(false);
  const [cards] = useState(reviewsList);
  const [itemOffset, setItemOffset] = useState(1);
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
  console.log(data);
  const itemsCount = { data: cards.length };

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
            <button className={["button", "overlay", (isOpen ? 'disabledBtn' : '')].join(' ') } onClick={onOpen}>
              Leave a comment
            </button>
          </div>
          <div className="review-section">
            <div className="title">What others are saying</div>
            <div className="list">
              {cards.slice(0, 2).map((el) => (
                <ReviewCard key={el.id} content={el} />
              ))}
            </div>
          </div>
          <div className="pagination-section overlay">
            <Pagination
              itemsPerPage={2}
              {...{
                itemOffset,
                setItemOffset,
                length: itemsCount.data,
              }}
            />
          </div>
        </div>
      </div>
    </div>
    {
      isOpen && 
      <div className={style.reviewWrap}>
          <Modal onClose={onClose} title={'Leave a comment'} isReview={true}>
              <h3>Contact the lead developer</h3>
          </Modal>
      </div>
    }
    </>
  );
};
