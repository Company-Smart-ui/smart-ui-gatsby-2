import React from 'react';
import * as style from './contactCard.module.scss'

export const ContactCard = ({data}) => {
    return <div className={style.contactCard}>
        <div dangerouslySetInnerHTML={{__html:     JSON.stringify(data.attributes).replace(/,/g , " <br>")}}/>
    </div>
};
 