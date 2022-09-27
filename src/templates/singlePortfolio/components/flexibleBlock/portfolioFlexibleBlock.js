import React, { Fragment } from "react";
import * as style from "./portfolioFlexibleBlock.module.scss";
import { Block } from "../../../../components/simpleBlock/block";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const FlexibleBlock = ({ props }) => {
  return (
    <>
      {props.title_text && (
        <div className={`wrap ${style.projectBlockWrap}`}>
          {props.title_text.map((t) => (
            <Fragment key={t.title}>
              <Block title={t.title}>
                <div dangerouslySetInnerHTML={{ __html: t.text.data.text }} />
              </Block>
            </Fragment>
          ))}
        </div>
      )}
      {props.mobile_img ? (
        <div className={`picture-mobile ${style.pictureMobile}`}>
          <div className="picture-mobile__wrap">
            {Array.isArray(props.img) &&
              props.img.map((t) => (
                <GatsbyImage
                  key={t.alternativeText}
                  alt={t.alternativeText}
                  image={getImage(t?.localFile.childImageSharp.gatsbyImageData)}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className={`picture-desktop ${style.pictureDesktop}`}>
          {Array.isArray(props.img) &&
            props.img.map((t) => (
              <GatsbyImage
                key={t.alternativeText}
                alt={t.alternativeText}
                image={getImage(t?.localFile.childImageSharp.gatsbyImageData)}
              />
            ))}
        </div>
      )}
    </>
  );
};
