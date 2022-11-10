import React, {useEffect, useState} from "react";
import {Footer} from "./footer/footer";
import "../../global.scss";
import "../../lazy.scss";
import {Header} from "./header/header";
// import {RedLine} from "./redLine/redLine";

const Layout = (props) => {
    const path = props?.children?.props?.pageContext?.pageName[0];

    const [pageURL, setPageURL] = useState(false);
    useEffect(() => {
        const currentUrl = window.location.href
        if(currentUrl.includes('uk-UA')) {
            setPageURL(true);
        } else{
            setPageURL(false);
        }
    },[])
    return (
        <div className={`layout ${path.startsWith("project") && "projects"} ${pageURL === true ? 'ua-font' : ''}`}>
            <Header path={path}/>
            <main className={"main"}>{props.children}</main>
            <Footer path={path}/>
            {/*<RedLine/>*/}
        </div>
    );
};

export default Layout;
