import React from "react";

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
          <img src="/minus.svg" alt="minus" className="minus" />
        ) : (
          <img src="/plus.svg" alt="plus" className="plus" />
        )}
      </button>
    </div>
  );
};
