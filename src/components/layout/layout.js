import React from 'react';
import {Footer} from "./footer/footer";
import "../../global.scss"
import "../../lazy.scss"
import {Header} from "./header/header";
import { Modal } from './modal/modal';
// import {RedLine} from "./redLine/redLine";

 const  Layout = ( props) => {
    const path = props?.children?.props?.pageContext?.pageName;
    return (
        <div className={'layout'}>
            <Header path={ path }/>
            <Modal />
            <main className={'main'}>
                {props.children}
            </main>
          <Footer/>
            {/*<RedLine/>*/}
        </div>

    );
};

export default Layout