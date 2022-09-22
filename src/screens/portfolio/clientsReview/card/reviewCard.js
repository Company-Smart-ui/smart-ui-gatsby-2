import React from "react";
import StarRating from "react-svg-star-rating";

export const ReviewCard = ({ content }) => {
  const { name, stars, review } = content;
  return (
    <div className="review-item">
      <div className="review-item-name">{name}</div>
      <div className="review-item-rating">
        <StarRating
          isReadOnly
          size={22}
          initialRating={stars}
          unit="full"
          activeColor="#FFDC60"
        />
      </div>
      <div className="review-item-comment">{review}</div>
    </div>
  );
};
