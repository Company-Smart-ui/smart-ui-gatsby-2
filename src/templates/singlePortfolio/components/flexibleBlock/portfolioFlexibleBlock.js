import React, { Fragment } from "react";
import * as style from "./portfolioFlexibleBlock.module.scss";
import { Block } from "../../../../components/simpleBlock/block";

export const FlexibleBlock = (props) => {
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
      {props.img &&
        (props.mobile_img === true ? (
          <div className={`picture-mobile ${style.pictureMobile}`}>
            <div className="picture-mobile__wrap">
              {props.img.map((t) => (
                <Fragment key={t.url}>
                  <picture>
                    <img src={t.url} alt={t.alternativeText} />
                  </picture>
                </Fragment>
              ))}
            </div>
          </div>
        ) : (
          <div className={`picture-desktop ${style.pictureDesktop}`}>
            {props.img.map((t) => (
              <Fragment key={t.url}>
                <picture>
                  <img src={t.url} alt={t.alternativeText} />
                </picture>
              </Fragment>
            ))}
          </div>
        ))}
    </>
  );
};
