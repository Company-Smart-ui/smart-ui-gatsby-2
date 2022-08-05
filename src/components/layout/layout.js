import React from 'react';
import {Footer} from "./footer/footer";
import "../../global.scss"
import {Header} from "./header/header";
export const Layout = ({children}) => {

    return (
        <div className={'layout'}>
            <Header path={children.props.location.pathname }/>
            <main className={'main'}>
                {children}
            </main>
          <Footer/>
        </div>

    );
};

