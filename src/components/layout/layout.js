import React from 'react';
// import {Footer} from "./footer/footer";
import "../../global.scss"
import "../../lazy.scss"
import {Header} from "./header/header";

export const Layout = ({children}) => {
    const path =children.props.children.props.children.props.location.pathname;

    return (
        <div className={'layout'}>
            <Header path={children?.props?.location?.pathname ||path }/>
            <main className={'main'}>
                {children}
            </main>
          {/*<Footer/>*/}
        </div>

    );
};

