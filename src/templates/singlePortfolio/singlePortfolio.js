import React, {Fragment} from "react";
import * as style from "./singlePortfolio.module.scss";
import {graphql} from "gatsby";
import {Block} from "../../components/simpleBlock/block";
import {Background} from "./components/background/portfolioBackGround";
import {FlexibleBlock} from "./components/flexibleBlock/portfolioFlexibleBlock";
import {Seo} from "../../components/SEO/SEO";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {HeroPortfolio} from "./components/hero/hero";
import {useTranslation} from "react-i18next";
import mobileDevice from "./mobile.png";
import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query ($language: String, $pageId: String) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: ["global"] } }
    ) {
      edges {
        node {
          ns
          language
          data
        }
      }
    }
    project: allStrapiSingleProject(filter: { id: { eq: $pageId } }) {
      edges {
        node {
          id
          project_name
          seo_title
          site_url
          main_img {
            url
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          description_text {
            data {
              description_text
            }
          }
          technology {
            name
          }
          technologies {
            name
          }
          content_management_systems {
            name
          }
          adaptive {
            data {
              adaptive
            }
          }
          services {
            data {
              services
            }
          }
          Blocks {
            ... on STRAPI__COMPONENT_TITLE_TEXT_SINGLE_PROJECT_BLOCK {
              title_text {
                title
                text {
                  data {
                    text
                  }
                }
              }
            }
            ... on STRAPI__COMPONENT_MEDIA_SINGLE_PROJECT_MEDIA {
              img {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              mobile_img
            }
          }
        }
      }
    }
  }
`;

const SinglePortfolio = (props) => {
    const {t} = useTranslation();
    const propProj = props?.data?.project?.edges[0]?.node;
    const mainImg =
        propProj?.main_img?.localFile?.childImageSharp?.gatsbyImageData;
    return (
        <div className={style.singlePortfolio}>
            <StaticImage 
                src="./logo-wp.png"
                style={{position:'absolute'}}
                alt={""}
             />
            {Background()}
            <div className="container">
                {mainImg && (
                    <HeroPortfolio
                        name={propProj?.project_name ? propProj.project_name : ""}
                        imgDesc={mainImg}
                        imgMob={propProj?.Blocks && propProj?.Blocks}
                    />
                )}
                <div>
                    {propProj?.project_name && (
                        <div className={style.wrap}>
                            <h1>{propProj?.project_name}</h1>
                        </div>
                    )}
                    <div className={`${style.mainInfo} ${style.wrap}`}>
                        <div className={style.textInfo}>
                            {propProj?.technology.name && (
                                <Block class={style.modified} title={t("tr_category") + ":"}>
                                    <ul className={style.category}>
                                        <li>{propProj?.technology.name}</li>
                                    </ul>
                                </Block>
                            )}
                            {propProj?.site_url && (
                                <Block
                                    class={`${style.modified} ${style.siteUrl}`}
                                    title={t("tr_site") + ":"}
                                    text={propProj?.site_url}
                                />
                            )}
                            {propProj?.content_management_systems.length > 0 && (
                                <Block class={style.modified} title={t("tr_cms") + ":"}>
                                    <ul className={style.category}>
                                        {propProj?.content_management_systems.map((i, key) => (
                                            <li key={key}>{i.name}</li>
                                        ))}
                                    </ul>
                                </Block>
                            )}
                            {propProj?.technologies.length > 0 && (
                                <Block class={style.modified} title={t("tr_technology") + ":"}>
                                    <ul className={style.category}>
                                        {propProj?.technologies.map((i, key) => (
                                            <li key={key}>{i.name}</li>
                                        ))}
                                    </ul>
                                </Block>
                            )}
                            {propProj?.description_text?.data?.description_text && (
                                <Block
                                    title={t("tr_review")}
                                    text={t(propProj?.description_text?.data?.description_text)}
                                />
                            )}
                            {propProj?.services && (
                                <div className={`${style.left} ${style.lists}`}>
                                    <Block title={t("tr_services")}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: propProj?.services?.data?.services.replace(
                                                    /(\r\n|\n|\r)/gm,
                                                    ""
                                                ),
                                            }}
                                        />
                                    </Block>
                                </div>
                            )}
                            {propProj?.adaptive && (
                                <div
                                    className={`${
                                        propProj?.services ? style.right : style.left
                                    } ${style.lists}`}
                                >
                                    <Block title={t("tr_adaptive_design")}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: propProj?.adaptive?.data?.adaptive.replace(
                                                    /(\r\n|\n|\r)/gm,
                                                    ""
                                                ),
                                            }}
                                        />
                                    </Block>
                                </div>
                            )}
                            {propProj?.site_url && (
                                <div className={style.siteLink}>
                                    <a
                                        href={propProj?.site_url}
                                        className="button"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t("tr_view_site")}
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className={style.onlyDesc}>
                            {propProj?.Blocks && (
                                <>
                                    {propProj?.Blocks.map((i, key) => {
                                        return i.mobile_img ? (
                                            <div key={key} className={style.scroll}>
                                                <span>{t("tr_scroll_to_explore")}</span>
                                            </div>
                                        ) : (
                                            ""
                                        );
                                    })}
                                    {propProj?.Blocks.map((i, key) => {
                                        return (
                                            i.mobile_img && (
                                                <div key={key} className={style.mobileWrapp}>
                                                    <div className={style.mobileImg}>
                                                        {i.img.map((t, key) => (
                                                            <GatsbyImage
                                                                key={key}
                                                                alt={t.alternativeText}
                                                                image={getImage(
                                                                    t?.localFile.childImageSharp.gatsbyImageData
                                                                )}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className={style.mobileDevice}>
                                                        <img
                                                            src={mobileDevice}
                                                            alt={
                                                                propProj?.project_name
                                                                    ? propProj.project_name
                                                                    : ""
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        );
                                    })}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {propProj?.Blocks &&
                    propProj?.Blocks.map((i, idx) => {
                        return (
                            <Fragment key={idx}>
                                <FlexibleBlock props={i}/>
                            </Fragment>
                        );
                    })}
            </div>
        </div>
    );
};

export default SinglePortfolio;

export const Head = (props) => {
    const title = props?.data?.project?.edges[0]?.node?.project_name;
    return <Seo title={title}> </Seo>;
};
