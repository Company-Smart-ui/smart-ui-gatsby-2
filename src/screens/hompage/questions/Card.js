import React from "react";
import Plus from "./plus.svg";
import Minus from './minus.svg';

export const Card = ({ el, dropdownHandler }) => {
  const { title, id, isOpen, description } = el;

  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      <div className={`card-description ${isOpen ? "show" : " "}`}>
        {description}
      </div>
      <button
        className={`cube-button ${isOpen ? "open" : ""}`}
        onClick={() => dropdownHandler(id)}
      >
        {isOpen ? (
          <img src={Minus} alt="minus" className="minus" />
        ) : (
          <img src={Plus} alt="plus" className="plus" />
        )}
      </button>
    </div>
  );
};
