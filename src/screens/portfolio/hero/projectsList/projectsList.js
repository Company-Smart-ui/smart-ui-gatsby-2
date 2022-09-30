import React from "react";
import { ProjectCard } from "../../../../global/projectCard/projectCard";
import * as style from "./projectsList.module.scss";

export const ProjectsList = ({ currentsCard, button }) => {
  return (
    <ul className={style.cardsList}>
      {Array.isArray(currentsCard) &&
        currentsCard.map((el) => (
          <li key={el.id}>
            <ProjectCard button={button} {...el} />
          </li>
        ))}
    </ul>
  );
};
