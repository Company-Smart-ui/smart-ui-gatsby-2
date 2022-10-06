import React from "react";
import {Footer} from "./footer/footer";
import "../../global.scss";
import "../../lazy.scss";
import {Header} from "./header/header";
// import {RedLine} from "./redLine/redLine";

const Layout = (props) => {
    const path = props?.children?.props?.pageContext?.pageName[0];

    return (
        <div className={`layout ${path.startsWith("project") && "projects"}`}>
            <Header path={path}/>
            <main className={"main"}>{props.children}</main>
            <Footer path={path}/>
            {/*<RedLine/>*/}
        </div>
    );
};

export default Layout;
