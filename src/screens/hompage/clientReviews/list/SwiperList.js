import React from "react";
import StarRating from "react-svg-star-rating";

export const SwiperList = ({ review, stars, name }) => {
  const link = "/upwork comments link";
  return (
    <>
      <div className="list-title">{name}</div>
      <div className="list-rating">
        <StarRating
          isReadOnly
          size={14}
          initialRating={stars}
          unit="float"
          activeColor="#13CC00"
        />
        <span>{stars}</span>
      </div>
      <div className="list-review">{review}</div>
      <div className="list-link">
        <a href={link} style={{ pointerEvents: "none" }}>
          Review on <span className="green">UpWork</span>
        </a>
      </div>
    </>
  );
};
