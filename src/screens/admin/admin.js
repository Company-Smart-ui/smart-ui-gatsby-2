import React, {useEffect, useState} from 'react';
import * as style from './admin.module.scss'
import {Cookies} from "react-cookie";
import {useOpen} from "../../hooks/useOpen";
import axios from "axios";
import {API} from "../../api/API";
import {navigate} from "gatsby";
import {Loader} from "../../global/loader/loader";
import {ContactCard} from "./contactCard/contactCard";

export const Admin = () => {
    const cookies = new Cookies();
    const {isOpen: loading, onClose: finishLoading} = useOpen(true);
    const [contacts, setContacts] = useState();

    useEffect(() => {
        const jwt = cookies.get('jwt');
        if(!jwt){
            navigate('/login');
        }
        axios.get(API.CONTACT_FORM, {
            headers: {
                'Authorization': `Bearer  ${jwt}`
            }
        }).catch(function ( ) {
            navigate('/login');
        }).then((value) => {
                if (value?.status === 200 && value?.data?.data) {
                    setContacts(value.data.data)
                    finishLoading()
                } else {
                    console.log(value)
                }
            }
        )
        // eslint-disable-next-line
    }, [])

    return <section className={style.admin}>
        {loading && <Loader/>}
        <div className="container">
            <h1 style={{fontSize: 33}}> contact form results </h1>
            {contacts?.map((contact, i) => {
                return <ContactCard key={i} data={contact}/>
            })}
        </div>


    </section>
};
 