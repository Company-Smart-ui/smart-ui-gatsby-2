import React  from "react";
import * as style from "./contactCard.module.scss";
import {Link} from "gatsby";

export const ContactCard = ({ data, archivedHandler }) => {
  const { contact, firstName = 'guest', message, email } = data.attributes.data_message;

  return (
    <div className={style.contactCard}>
      <div className="control-panel">
        <div>
          <div className="date">{data.attributes.createdAt} | <span>{data.attributes.type}</span></div>
          <div className="title-message">{contact || firstName}</div>
          { email && <div className="email-message"><Link to={`mailto:${email}`}>{email}</Link></div>}
        </div>
        <button
          className={`button ${data.attributes.isArchived ? "" : "archive"}`}
          onClick={() => archivedHandler(data.id)}
        >
          {!data.attributes.isArchived
            ? "Add to archive"
            : "Remove from archive"}
        </button>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};
