import React from "react";
import Plus from "./plus.svg";
import Minus from "./minus.svg";

export const Card = ({ el, dropdownHandler }) => {
  const { title, id, isOpen, description } = el;

  return (
    <button className="card-container" onClick={() => dropdownHandler(id)}>
      <span className="card-title">{title}</span>
      <span className={`card-description ${isOpen ? "show" : " "}`}>
        {description}
      </span>
      <span className={`cube-button ${isOpen ? "open" : ""}`}>
        {isOpen ? (
          <img src={Minus} alt="minus" className="minus" />
        ) : (
          <img src={Plus} alt="plus" className="plus" />
        )}
      </span>
    </button>
  );
};
