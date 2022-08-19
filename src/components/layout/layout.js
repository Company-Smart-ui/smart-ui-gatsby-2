import React from 'react';
import {Footer} from "./footer/footer";
import "../../global.scss"
import "../../lazy.scss"
import {Header} from "./header/header";
import { Modal } from './modal/modal';
export const Layout = ({children}) => {

    return (
        <div className={'layout'}>
            <Header path={children.props.location.pathname }/>
            <Modal />
            <main className={'main'}>
                {children}
            </main>
          <Footer/>
        </div>

    );
};

