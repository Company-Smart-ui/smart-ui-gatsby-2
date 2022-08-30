import React, { useState } from "react";
import * as style from "./clientsReview.module.scss";
import { ReviewCard } from "./card/reviewCard";
import { Pagination } from "../../../components/pagination/pagination";
import { reviewOptions } from "./reviewList";

export const ClientsReview = () => {
  const [cards, setCards] = useState(reviewOptions);
  const [itemOffset, setItemOffset] = useState(1);

  const itemsCount = { data: cards.length };

  return (
    <div className={`${style.review} vertical-padding`}>
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
            <button className="button">Leave a comment</button>
          </div>
          <div className="review-section">
          <div className="title">What others are saying</div>
            <div className="list">
              {cards.slice(0, 2).map((el) => (
                <ReviewCard key={el.id} content={el} />
              ))}
            </div>
          </div>
          <div className="pagination-section">
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
  );
};
