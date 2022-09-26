import React, { Fragment } from "react";
import * as style from "./singlePortfolio.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Block } from "../../components/simpleBlock/block";
import { Background } from "./components/background/portfolioBackGround";
import { FlexibleBlock } from "./components/flexibleBlock/portfolioFlexibleBlock";

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
                url
                alternativeText
              }
              mobile_img
            }
          }
        }
      }
    }
    global: allStrapiGlobal {
      nodes {
        tr_category
        tr_cms
        tr_site
        tr_technology
        tr_view_site
        tr_review
        tr_services
      }
    }
  }
`;

const SinglePortfolio = (props) => {
  const propProj = props?.data?.project?.edges[0]?.node;
  const propGlobal = props?.data?.global?.nodes[0];
  const mainImg =
    propProj?.main_img?.localFile?.childImageSharp?.gatsbyImageData;
  return (
    <div className={style.singlePortfolio}>
      {Background()}
      <div className="container">
        {mainImg && (
          <GatsbyImage
            alt={propProj?.project_name ? propProj.project_name : ""}
            image={getImage(
              propProj?.main_img.localFile.childImageSharp.gatsbyImageData
            )}
          />
        )}
        <div>
          {propProj.project_name && (
            <div className="wrap">
              <h1>{propProj.project_name}</h1>
            </div>
          )}
          <div className="wrap">
            <div className="left">
              {propProj.technology.name && (
                <Block class="modified" title={propGlobal.tr_category + ":"}>
                  <ul className="category">
                    <li>{propProj.technology.name}</li>
                  </ul>
                </Block>
              )}
              {propProj.site_url && (
                <Block
                  class="modified"
                  title={propGlobal.tr_site + ":"}
                  text={propProj.site_url}
                />
              )}
              {propProj.content_management_systems.length > 0 && (
                <Block class="modified" title={propGlobal.tr_cms + ":"}>
                  <ul className="category">
                    {propProj.content_management_systems.map((i) => (
                      <li key={i.name}>{i.name}</li>
                    ))}
                  </ul>
                </Block>
              )}
              {propProj.technologies.length > 0 && (
                <Block class="modified" title={propGlobal.tr_technology + ":"}>
                  <ul className="category">
                    {propProj.technologies.map((i) => (
                      <li key={i.name}>{i.name}</li>
                    ))}
                  </ul>
                </Block>
              )}
              {propProj.description_text?.data?.description_text && (
                <Block
                  title={propGlobal.tr_review}
                  text={propProj.description_text?.data?.description_text}
                />
              )}
            </div>
            <div className="right">
              {propProj.services && (
                <Block
                  title={propGlobal.tr_services}
                  text={propProj.description_text?.data?.description_text}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: propProj.services.data.services,
                    }}
                  />
                </Block>
              )}
            </div>
            {propProj.site_url && (
              <a
                href={propProj.site_url}
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                {propGlobal.tr_view_site}
              </a>
            )}
          </div>
        </div>
        {propProj.Blocks &&
          propProj.Blocks.map((i, idx) => (
            <Fragment key={idx}>{FlexibleBlock(i)}</Fragment>
          ))}
      </div>
    </div>
  );
};

export default SinglePortfolio;
