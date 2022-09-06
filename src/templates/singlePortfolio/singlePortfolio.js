import * as React from "react"
import * as style from "./singlePortfolio.module.scss";
import chatIcon from './chat-white.png';
import flag from './flag.svg';
import logoSmartUIMobile from './smart-ui-logo-mobile.svg';
import { graphql } from "gatsby";

export const query = graphql`
  query ($language: String , $pageId:String ) {
   locales: allLocale(filter: {language: {eq: $language}, ns: {in:[  "global"]}}) {
      edges {
        node { 
          ns
          language
          data 
        }
      }
    }
    project :  allStrapiSingleProject(filter: {id: {eq:$pageId}}) {
        edges {
            node {
                id
                project_name
                seo_title
                site_url
                main_img {
                    url
                }
                description_text {
                    data {
                      description_text
                    }
                }
                technology {
                    name
                }
                technologies{
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
    global: allStrapiGlobal{
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
`
function Block(props) {
    return (
        <div className={`block${props.class ? ' ' + props.class : ''}`}>
            <h3 className="subtitle">{props.title}</h3>
            {props.text && (
                <p>{props.text}</p>
            )}
            {props.children}
        </div>
    )
}

const SinglePortfolio = (props) => {
    const propProj = props?.data?.project?.edges[0]?.node
    const propGlobal = props?.data?.global?.nodes[0]
    const blocks = propProj.Blocks
    console.log(props)
    return <div className={style.singlePortfolio}>
        <div className="noise"></div>
        <div>
            <div className="flag">
                <img className="flag__mobile" src={logoSmartUIMobile} alt="logoSmartUI" />
                <img className="flag__desktop" src={flag} alt="logoSmartUI" />
            </div>
            <button className="button button__chat">
                <img src={chatIcon} alt="chatIcon" />
            </button>
        </div>
        <div className="container">
            {propProj.main_img && (
                <picture>
                    <img src={propProj.main_img.url} alt="" />
                </picture>
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
                            <Block
                                class="modified"
                                title={propGlobal.tr_category + ':'}
                            >
                                <ul className="category">
                                    <li>{propProj.technology.name}</li>
                                </ul>
                            </Block>
                        )}

                        {propProj.site_url && (
                            <Block
                                class="modified"
                                title={propGlobal.tr_site + ':'}
                                text={propProj.site_url}
                            />
                        )}

                        {propProj.content_management_systems.length > 0 && (
                            <Block
                                class="modified"
                                title={propGlobal.tr_cms + ':'}
                            >
                                <ul className="category">
                                    {propProj.content_management_systems.map((i) => {
                                        return (
                                            <li>{i.name}</li>
                                        )
                                    })}
                                </ul>
                            </Block>
                        )}

                        {propProj.technologies.length > 0 && (
                            <Block
                                class="modified"
                                title={propGlobal.tr_technology + ':'}
                            >
                                <ul className="category">
                                    {propProj.technologies.map((i) => {
                                        return (
                                            <li>{i.name}</li>
                                        )
                                    })}
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
                                <div dangerouslySetInnerHTML={{ __html: propProj.services.data.services }} />
                            </Block>
                        )}

                    </div>
                    {propProj.site_url && (
                        <a href={propProj.site_url} className="button" target="_blank" rel="noreferrer">{propGlobal.tr_view_site}</a>
                    )}

                </div>
            </div>

            {blocks && (
                blocks.map((i) => {
                    return (
                        <>
                            {i.title_text && (
                                <div className={`wrap ${style.projectBlockWrap}`}>
                                    {i.title_text.map((t) => {
                                        return (
                                            <Block
                                                title={t.title}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: t.text.data.text }} />
                                            </Block>
                                        )
                                    })}

                                </div>
                            )}
                            {i.img && (
                                i.mobile_img === true ? (
                                    <div className="picture-mobile">
                                        <div className="picture-mobile__wrap">
                                            {i.img.map((t) => {
                                                return (
                                                    <picture>
                                                        <img src={t.url} alt={t.alternativeText} />
                                                    </picture>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="picture-desktop">
                                        {i.img.map((t) => {
                                            return (
                                                <picture>
                                                    <img src={t.url} alt={t.alternativeText} />
                                                </picture>
                                            )
                                        })}

                                    </div>
                                )

                            )}

                        </>
                    )
                })
            )}
        </div>
    </div>

}

export default SinglePortfolio
