import React from 'react';
import {Footer} from "./footer/footer";
import "../../global.scss"
import "../../lazy.scss"
import {Header} from "./header/header";
 const  Layout = ( props) => {
    const path = props?.children?.props?.pageContext?.pageName;
     console.log(path)
    return (
        <div className={'layout'}>
            <Header path={ path }/>
            <main className={'main'}>
                {props.children}
            </main>
          <Footer/>
        </div>

    );
};

export default Layout