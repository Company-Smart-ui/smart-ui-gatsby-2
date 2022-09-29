import React, { Fragment } from "react";
import * as style from "./singlePortfolio.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Block } from "../../components/simpleBlock/block";
import { Background } from "./components/background/portfolioBackGround";
import { FlexibleBlock } from "./components/flexibleBlock/portfolioFlexibleBlock";
import { Seo } from "../../components/SEO/SEO";
import componentDidMount from "../../global/chatbot";
import { useTranslation } from "react-i18next";
import desctopDevice from "./desctop.png";
import mobileDevice from "./mobile.png";

export const query = graphql`
  query ($language: String, $pageId: String) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: [$pageId, "global"] } }
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
  const { t } = useTranslation();
  const propProj = props?.data?.project?.edges[0]?.node;
  const mainImg =
    propProj?.main_img?.localFile?.childImageSharp?.gatsbyImageData;
  console.log(propProj);
  return (
    <div className={style.singlePortfolio}>
      {Background()}
      <div className="container">
        {mainImg && (
          <div className={style.heroImg}>
            <div className={style.heroImgDevice}>
              <img
                src={desctopDevice}
                alt={propProj?.project_name ? propProj.project_name : ""}
              />
            </div>
            <div className={style.heroImgWrapp}>
              <GatsbyImage
                alt={propProj?.project_name ? propProj.project_name : ""}
                image={getImage(
                  propProj?.main_img.localFile.childImageSharp.gatsbyImageData
                )}
              />
            </div>
          </div>
        )}
        <div>
          {propProj.project_name && (
            <div className={style.wrap}>
              <h1>{propProj.project_name}</h1>
            </div>
          )}
          <div className={`${style.mainInfo} ${style.wrap}`}>
            <div className={style.textInfo}>
              {propProj.technology.name && (
                <Block class={style.modified} title={t("tr_category") + ":"}>
                  <ul className={style.category}>
                    <li>{propProj.technology.name}</li>
                  </ul>
                </Block>
              )}
              {propProj.site_url && (
                <Block
                  class={`${style.modified} ${style.siteUrl}`}
                  title={t("tr_site") + ":"}
                  text={propProj.site_url}
                />
              )}
              {propProj.content_management_systems.length > 0 && (
                <Block class={style.modified} title={t("tr_cms") + ":"}>
                  <ul className={style.category}>
                    {propProj.content_management_systems.map((i) => (
                      <li key={i.name}>{i.name}</li>
                    ))}
                  </ul>
                </Block>
              )}
              {propProj.technologies.length > 0 && (
                <Block class={style.modified} title={t("tr_technology") + ":"}>
                  <ul className={style.category}>
                    {propProj.technologies.map((i) => (
                      <li key={i.name}>{i.name}</li>
                    ))}
                  </ul>
                </Block>
              )}
              {propProj.description_text?.data?.description_text && (
                <Block
                  title={t("tr_review")}
                  text={t(propProj.description_text.data.description_text)}
                />
              )}
              {propProj.services && (
                <div className={`${style.left} ${style.lists}`}>
                  <Block title={t("tr_services")}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: propProj.services.data.services,
                      }}
                    />
                  </Block>
                </div>
              )}
              <div className={`${style.right} ${style.lists}`}>
                <Block title="Адаптивний дизайн">
                  <div>
                    <ul>
                      <li>Десктоп</li>
                      <li>Планшет</li>
                      <li>Мобільна версії</li>
                    </ul>
                  </div>
                </Block>
              </div>
              {propProj.site_url && (
                <a
                  href={propProj.site_url}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("tr_view_site")}
                </a>
              )}
            </div>
            <div className={style.mobileWrapp}>
              {propProj.Blocks &&
                propProj.Blocks.map((i, key) => {
                  return (
                    i.mobile_img && (
                      <>
                        <div className={style.mobileImg}>
                          {i.img.map((t) => (
                            <GatsbyImage
                              key={t.alternativeText}
                              alt={t.alternativeText}
                              image={getImage(
                                t?.localFile.childImageSharp.gatsbyImageData
                              )}
                            />
                          ))}
                        </div>
                        <div key={key} className={style.mobileDevice}>
                          <img
                            src={mobileDevice}
                            alt={
                              propProj?.project_name
                                ? propProj.project_name
                                : ""
                            }
                          />
                        </div>
                      </>
                    )
                  );
                })}
            </div>
          </div>
        </div>
        {propProj.Blocks &&
          propProj.Blocks.map((i, idx) => {
            return (
              <Fragment key={idx}>
                <FlexibleBlock props={i} />
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
  return <Seo title={title}>{componentDidMount()}</Seo>;
};
