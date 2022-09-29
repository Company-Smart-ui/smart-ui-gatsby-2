import React from "react";
import StarRating from "react-svg-star-rating";

export const SwiperList = ({ content }) => {
  const { title, rating, review, link } = content;
  return (
    <>
      <div className="list-title">{title}</div>
      <div className="list-rating">
        <StarRating
          isReadOnly
          size={14}
          initialRating={rating}
          unit="float"
          activeColor="#13CC00"
        />
        <span>{rating}</span>
      </div>
      <div className="list-review">{review}</div>
      <div className="list-link">
        <a href={link}>
          Review on <span className="green">Up work</span>
        </a>
      </div>
    </>
  );
};
