import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { PageSpeed } from "../../components/pageSpeed/pageSpeed";

import * as style from "./projectCard.module.scss";

export const ProjectCard = ({
  project_name,
  site_url,
  google_page_speed,
  seo_description,
  main_img,
  technology,
  technologies,
  button,
}) => {
  const mainImage = getImage(main_img?.localFile);

  const mainTechnology = getImage(technology?.icon?.localFile);

  const makeUrl =
    typeof project_name === "string"
      ? project_name.replace(/[ ,./!@#$%^&*(?)=:;'"]/g, "_").toLowerCase()
      : "";

  const imageList = useStaticQuery(graphql`
    query {
      allStrapiTechnology {
        nodes {
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          name
        }
      }
    }
  `);

  const list = imageList?.allStrapiTechnology?.nodes;

  const getImageByName = (name) => list?.find((el) => el.name === name);

  const shortedDescription = (str) => {
    const arr = str.split(" ");

    if (arr.length > 17) {
      return arr.slice(0, 17).join(" ") + "...";
    }
    return str;
  };

  return (
    <div className={style.projectCard}>
      <div className="cards-container">
        <div className="main-technology">
          {mainTechnology && (
            <GatsbyImage alt={technology?.name} image={mainTechnology} />
          )}
        </div>
        {technologies?.slice(0, 2).map((el, i) => {
          const imgForCard = getImageByName(el.name);
          const img = getImage(imgForCard?.icon?.localFile);
          return (
            <div
              key={el.name}
              className="item"
              style={{
                top: 65 + i * 50,
                transitionDuration: `${400 + i * 600}ms`,
              }}
            >
              {img && <GatsbyImage alt={"image"} image={img} />}
            </div>
          );
        })}
        {google_page_speed && (
          <div className="progress">
            <PageSpeed result={google_page_speed} />
          </div>
        )}
        <div className="img-wrapper">
          {mainImage && <GatsbyImage alt={"image"} image={mainImage} />}
          <div className="overlay-block"></div>
        </div>
        <div className="content-wrapper">
          <div>
            <div className="content-title">{project_name}</div>
            <Link
              to={site_url}
              target="_blank"
              rel="noopener noreferrer"
              className="content-link projectCard-link"
            >
              Website
            </Link>
            <Link target="_blank" to={`/project/${makeUrl}`} className="projectCard-link__overlay"></Link>
            <div className="content-description">
              {shortedDescription(seo_description)}
            </div>
          </div>
          <div className="button">
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};
