import React, { useState } from "react";
import * as style from "./filterButtons.module.scss";

const filterOptions = [
  { title: "All", link: "#" },
  { title: "Angular", link: "#" },
  { title: "Gatsby", link: "#" },
  { title: "HTML", link: "#" },
  { title: "React", link: "#" },
  { title: "Next.Js", link: "#" },
  { title: "Wordpress", link: "#" },
];

export const FilterButtons = ({ filterLIstHandler }) => {
  const [activeButton, setActiveButton] = useState(0);

  const { filterButtons, active } = style;

  return (
    <>
      {filterOptions.map(({ title }, index) => (
        <button
          key={title}
          className={`${filterButtons} ${
            index === activeButton ? `${active}` : " "
          }`}
          onClick={() => {
            setActiveButton(index);
            filterLIstHandler(title);
          }}
        >
          {title}
        </button>
      ))}
    </>
  );
};
