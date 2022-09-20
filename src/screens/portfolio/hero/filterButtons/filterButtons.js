import React from "react";
import { Link } from "gatsby";
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

export const FilterButtons = ({ filterQuery, filterListHandler }) => {
  const { filterButtons, active } = style;

  return (
    <>
      {filterOptions.map(({ title, link }, index) => (
        <Link
          to={`?technologies=${link}`}
          key={title}
          className={`${filterButtons} ${
            link === filterQuery ? `${active}` : " "
          }`}
          onClick={() => {
            filterListHandler(link);
          }}
        >
          {title}
        </Link>
      ))}
    </>
  );
};
