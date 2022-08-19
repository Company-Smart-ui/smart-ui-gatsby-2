import React, { useState } from "react";
import * as style from "./questions.module.scss";
import { Card } from "./Card";

const questionsList = [
  {
    id: "0",
    title: "Who did we work with?",
    description:
      "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
    isOpen: false,
  },
  {
    id: "1",
    title: "What services do we offer to clients?",
    description:
      "-Website design and development; -Website integration and maintenance; -Costomized e-commerce development; -CMS development/integration",
    isOpen: false,
  },
  {
    id: "2",
    title: "How is the cost of the project formed?",
    description:
      "The cost of services is calculated very simply: the time spent by us is multiplied by the tariff. But we can assure you that they are at the market level.",
    isOpen: false,
  },
  {
    id: "3",
    title: "Who owns the right to created solutions?",
    description:
      "As a rule, the exclusive rights to the software and the source code are transferred to the customer. Everything related to your project",
    isOpen: false,
  },
  {
    id: "4",
    title: "What technologies are used?",
    description:
      "We can solve any problem using any technology. These are not big words, they really are. At smart-ui, a team of employees with the highest set of knowledge.",
    isOpen: false,
  },
  {
    id: "5",
    title: "How long does it take to develop a project?",
    description:
      "Velocity doubled by quality is what our Agile approach boils down to.",
    isOpen: false,
  },
];

export const Questions = () => {
  const [options, setOptions] = useState(questionsList);

  const firstArr = [];
  const secondArr = [];

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

  options.forEach((el, index) => {
    index < questionsList.length / 2 ? firstArr.push(el) : secondArr.push(el);
  });

  return (
    <div className={`${style.questions} vertical-padding`}>
      <div className="container">
        <h2 className="h2 mobile">FAQ</h2>
        <h2 className="h2 tablet">Frequently asked questions</h2>
        <div className="cards-wrapper">
          <div>
            {firstArr.map((el) => (
            <Card key={el.id} el={el} dropdownHandler={dropdownHandler} />
            ))}
          </div>
          <div>
            {secondArr.map((el) => (
              <Card key={el.id} el={el} dropDownHandler={dropdownHandler} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
