import React, { useState } from "react";
import * as style from "./questions.module.scss";
import { Card } from "./Card";
import questionsList from "./questionsList";

export const Questions = () => {
  const [options, setOptions] = useState(questionsList);

  const dropdownHandler = (id) => {
    const newOptions = options.map((option) => {
      if (id === option.id) {
        return {
          ...option,
          isOpen: !option.isOpen,
        };
      }
      return option;
    });

    setOptions(newOptions);
  };

  const middleIndex = Math.floor(questionsList.length / 2);
  const lastIndex = questionsList.length - 1;

  return (
    <div className={`${style.questions} vertical-padding`}>
      <div className="container">
        <h2 className="h2 mobile">FAQ</h2>
        <h2 className="h2 tablet">Frequently asked questions</h2>
        <div className="cards-wrapper">
          <div className="first-column">
            {options.slice(0, middleIndex).map((el) => (
              <Card key={el.id} el={el} dropdownHandler={dropdownHandler} />
            ))}
          </div>
          <div className="second-column">
            {options.slice(middleIndex, lastIndex).map((el) => (
              <Card key={el.id} el={el} dropdownHandler={dropdownHandler} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
