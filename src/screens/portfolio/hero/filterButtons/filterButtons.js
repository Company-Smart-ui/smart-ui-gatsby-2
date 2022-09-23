import React from "react";
import * as style from "./filterButtons.module.scss";

const filterOptions = [
  { title: "All", link: "all" },
  { title: "Angular", link: "angular" },
  { title: "Gatsby", link: "gatsby" },
  { title: "HTML", link: "html" },
  { title: "React", link: "react" },
  { title: "Next.Js", link: "next.js" },
  { title: "Wordpress", link: "wordpress" },
];

export const FilterButtons = ({ query, filterListHandler }) => (
  <>
    {filterOptions.map(({ title, link }, index) => (
      <button
        key={title}
        className={[
          style.filterButtons,
          link === query ? style.active : "",
        ].join(" ")}
        onClick={() => filterListHandler(link)}
      >
        {title}
      </button>
    ))}
  </>
);
