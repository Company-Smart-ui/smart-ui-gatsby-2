import React from "react"
import {useSiteMetadata} from "../../hooks/useSiteMetadata";
import {useChatBot} from "../../hooks/useChatBot";

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

export const Seo = ({title, description, pathname, children, keywords}) => {

    const {title: defaultTitle, description: defaultDescription, keywords: defaultKeywords, image, siteUrl, twitterUsername} = useSiteMetadata()
    const clearTitle = (title ? title + ' | ' + defaultTitle : defaultTitle)
    const seo = {
        title: ucFirst(clearTitle),
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    }

    useChatBot();
    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}></meta>
            <meta name="keywords" content={seo.keywords}></meta>
            <meta name="image" content={seo.image}></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
            {seo.title&&<meta name="twitter:title" content={seo.title}/>}
            {seo.url&&<meta name="twitter:url" content={seo.url}/>}
            <meta name="twitter:description" content={seo.description}/>
            {seo.image&&<meta name="twitter:image" content={seo.image}/>}
            {/*{seo.twitterUsername&&<meta name="twitter:creator" content={seo.twitterUsername}>}*/}

            {children && children}
        </>
    )
}