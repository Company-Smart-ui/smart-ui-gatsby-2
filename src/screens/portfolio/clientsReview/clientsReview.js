import React, { useState } from "react";
import * as style from "./clientsReview.module.scss";
import { ReviewCard } from "./card/reviewCard";
import ArrowIcon from "./arrow.svg";

const reviewOptions = [
  {
    id: "1",
    name: "Dash Boston 1",
    city: "UI8 Canada 1",
    rating: 3.2,
    comment:
      "“ You will not regret hiring Alex. He was working for us (Weorder) for over two years and delivered the craziest (in a good sense) CSS designs stretching the looks of customised apps to the extent I did not know was possible”",
  },
  {
    id: "2",
    name: "Emily Boston 2",
    city: "Bento Canada 2",
    rating: 4.3,
    comment:
      "“ You will regret hiring Alex. He was working for us (Weorder) for over two years and delivered the craziest (in a good sense) CSS designs stretching the looks of customised apps to the extent I did not know was possible”",
  },
  {
    id: "3",
    name: "Miami Heat 3",
    city: "Bento Canada 3",
    rating: 4.3,
    comment:
      "“ You will regret hiring Alex. He was working for us (Weorder) for over two years and delivered the craziest (in a good sense) CSS designs stretching the looks of customised apps to the extent I did not know was possible”",
  },
  {
    id: "4",
    name: "Boston Celtics 4",
    city: "Bento Canada 4",
    rating: 4.3,
    comment:
      "“ You will regret hiring Alex. He was working for us (Weorder) for over two years and delivered the craziest (in a good sense) CSS designs stretching the looks of customised apps to the extent I did not know was possible”",
  },
  {
    id: "5",
    name: "Boston Celtics 5",
    city: "Bento Canada 4",
    rating: 4.3,
    comment:
      "“ You will regret hiring Alex. He was working for us (Weorder) for over two years and delivered the craziest (in a good sense) CSS designs stretching the looks of customised apps to the extent I did not know was possible”",
  },
];

export const ClientsReview = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [cards, setCards] = useState(reviewOptions);
  const [buttons, setButtons] = useState(5);

  const showCards = (idx) => {
    let startedIndex = idx * 2;
    let lastIndex = startedIndex + 2;

    return cards.slice(startedIndex, lastIndex);
  };

  const renderButtons = (buttons) => {
    return Array(buttons);
  };

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
          <div className="pagination-section">
            <div className="title-review">What others are saying</div>
          </div>
          <div className="review-section">
            <div className="list">
              {showCards(activeIndex).map((el) => (
                <ReviewCard key={el.id} content={el} />
              ))}
            </div>
          </div>
          <div className="pagination-block">
            <button
              className="pagination-button"
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              <img src={ArrowIcon} alt="arrow" width="20px" height="20px" />
            </button>
            {buttons &&
              Array.from(Array(buttons).keys()).map((el, index) => {
                return <button className={activeIndex === index ? "active" : ' '}>{el + 1}</button>;
              })}
            <button
              className="pagination-button right"
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              <img src={ArrowIcon} alt="arrow" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
