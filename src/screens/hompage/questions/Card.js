import React from "react";
import Plus from "./plus.svg";
import Minus from "./minus.svg";

export const Card = ({ el, dropdownHandler, options, idx }) => {
  const { title, text } = el;

  return (
    <button className="card-container" onClick={() => dropdownHandler(idx)}>
      <span className="card-wrap-title">
          <span className="card-title">{title}</span>
          <span className={`cube-button ${options[idx]?.isOpen ? "open" : ""}`}>
        {options[idx]?.isOpen ? (
            <img loading="lazy" src={Minus} alt="minus" className="minus" />
        ) : (
            <img loading="lazy" src={Plus} alt="plus" className="plus" />
        )}
        </span>
      </span>
      <span className={`card-description ${options[idx]?.isOpen ? "show" : " "}`}>
        {text}
      </span>

    </button>
  );
};
