import React from "react";
import * as style from "./projectCard.module.scss";
import { PageSpeed } from "../../components/pageSpeed/pageSpeed";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export const ProjectCard = ({ content }) => {
  const {
    project_name,
    site_url,
    google_page_speed,
    seo_description,
    main_img,
    technology,
    technologies,
  } = content;

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

  return (
    <div className={style.projectCard}>
      <div className="cards-container">
        <div className="main-technology">
          <GatsbyImage alt={technology?.name} image={mainTechnology} />
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
              {img && <GatsbyImage alt={technology.name} image={img} />}
            </div>
          );
        })}
        <div className="progress">
          <PageSpeed result={google_page_speed} />
        </div>
        <div className="img-wrapper">
          {mainImage && <GatsbyImage alt={project_name} image={mainImage} />}
          <div className="overlay-block"></div>
        </div>
        <div className="content-wrapper">
          <div>
            <div className="content-title">{project_name}</div>
            <a href={site_url} className="content-link">
              Website
            </a>
            <div className="content-description">{seo_description}</div>
          </div>
          <a href={`project/${makeUrl}`} className="button">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
