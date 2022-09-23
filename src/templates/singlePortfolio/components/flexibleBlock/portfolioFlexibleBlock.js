import * as React from "react";
import * as style from './portfolioFlexibleBlock.module.scss'
import {Block} from "../../../../components/simpleBlock/block";

export const FlexibleBlock = (props) => {
    return(
        <>
        {props.title_text && (
            <div className={`wrap ${style.projectBlockWrap}`}>
                {props.title_text.map((t) => {
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
        {props.img && (
            props.mobile_img === true ? (
                <div className={`picture-mobile ${style.pictureMobile}`}>
                    <div className="picture-mobile__wrap">
                        {props.img.map((t) => {
                            return (
                                <picture>
                                    <img src={t.url} alt={t.alternativeText} />
                                </picture>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className={`picture-desktop ${style.pictureDesktop}`}>
                    {props.img.map((t) => {
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
}