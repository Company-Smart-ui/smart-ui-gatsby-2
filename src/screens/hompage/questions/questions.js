import React from "react";
import * as style from "./questions.module.scss";

const questionsList = [
  {
    title: "Who did we work with?",
    description:
      "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
  },
  {
    title: "What services do we offer to clients?",
    description:
      "-Website design and development; -Website integration and maintenance; -Costomized e-commerce development; -CMS development/integration",
  },
  {
    title: "How is the cost of the project formed?",
    description:
      "The cost of services is calculated very simply: the time spent by us is multiplied by the tariff. But we can assure you that they are at the market level.",
  },
  {
    title: "Who owns the right to created solutions?",
    description:
      "As a rule, the exclusive rights to the software and the source code are transferred to the customer. Everything related to your project",
  },
  {
    title: "What technologies are used?",
    description:
      "We can solve any problem using any technology. These are not big words, they really are. At smart-ui, a team of employees with the highest set of knowledge.",
  },
  {
    title: "How long does it take to develop a project?",
    description:
      "Velocity doubled by quality is what our Agile approach boils down to.",
  },
];

export const Questions = () => {
  return (
    <div className={`${style.questions} vertical-padding`}>
      <div className="container">
        <div className="grid-container">
          <h2 className="h2 mobile">FAQ</h2>
          <h2 className="h2 tablet">Frequently asked questions</h2>
          <div className="cards-wrapper">
            {questionsList.map((el) => (
              <div className="card-container">
                <div className="card-title">{el.title}</div>
                <button className="cube-button"></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
