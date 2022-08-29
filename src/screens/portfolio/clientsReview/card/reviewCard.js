import React from 'react';
import StarRating from "react-svg-star-rating";

export const ReviewCard = ({ content }) => {
  const { name, city, rating, comment } = content;
  return (
    <div className="review-item">
      <div className="review-item-name">{name}</div>
      <div className="review-item-city">{city}</div>
      <div className="review-item-rating">
        <StarRating
          isReadOnly
          size={22}
          initialRating={rating}
          unit="float"
          activeColor="#FFDC60"
        />
      </div>
      <div className="review-item-comment">{comment}</div>
    </div>
  );
};
