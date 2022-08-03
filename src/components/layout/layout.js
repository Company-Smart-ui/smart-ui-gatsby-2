import React from 'react';
import {Footer} from "./footer/footer";
import "../../global.scss"
import {Header} from "./header/header";
export const Layout = ({children}) => {

    return (
        <div className={'layout'}>
            <Header/>
            <main>

                {children}
            </main>
          <Footer/>
        </div>

    );
};

