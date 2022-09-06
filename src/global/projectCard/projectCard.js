import React from "react";
import * as style from "./projectCard.module.scss";
import {PageSpeed} from "../../components/pageSpeed/pageSpeed";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export const ProjectCard = ({content}) => {
    const {project_name, site_url, google_page_speed, description_text, main_img, technology} = content;

    const image = getImage(main_img?.localFile);

    // const showTechnology = (techList) =>
    //     techList.map((el, i) => {
    //         if (el === "react") {
    //             return <img key={i} src={reactImg} alt="react"/>;
    //         }
    //         if (el === "wordpress") {
    //             return <img key={i} src={wordpressImg} alt="wordpress"/>;
    //         }
    //         return <> </>
    //     });

    return (
        <div className={style.projectCard}>
            <div className="cards-container">
                {/*<div className="technology">{showTechnology(technology)}</div>*/}
                <div className="progress">
                    <PageSpeed result={google_page_speed || 90}/>
                </div>
                <div className="img-wrapper">
                    <GatsbyImage
                        alt={project_name}
                        src={image}
                    />
                </div>
                <div className="content-wrapper">
                    <div>
                        <div className="content-title">{project_name}</div>
                        <a href={site_url} className="content-link">
                            Website
                        </a>
                        <div className="content-description">{description_text?.data?.description_text}</div>
                    </div>
                    <button className="button">Learn more</button>
                </div>
            </div>
        </div>
    );
};
