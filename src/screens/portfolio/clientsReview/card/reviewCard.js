import React from 'react';
import StarRating from "react-svg-star-rating";

export const ReviewCard = ({ content }) => {
  const { contact, rating, message } = content;
  return (
    <div className="review-item">
      <div className="review-item-name">{contact}</div>
      <div className="review-item-rating">
        <StarRating
          isReadOnly
          size={22}
          initialRating={rating}
          unit="float"
          activeColor="#FFDC60"
        />
      </div>
      <div className="review-item-comment">{message}</div>
    </div>
  );
};
