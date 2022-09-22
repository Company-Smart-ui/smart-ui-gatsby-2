import React from "react";
import * as style from "./contactCard.module.scss";
import { Link } from "gatsby";
import { format } from "date-fns";

export const ContactCard = ({ data, archivedHandler }) => {
  const {
    contact,
    name,
    firstName = "guest",
    message,
    review,
    email,
  } = data.attributes.data_message;

  const date = format(
    new Date(data.attributes.createdAt),
    "dd-MM-yyyy | HH:mm"
  );

  return (
    <div className={style.contactCard}>
      <div className="control-panel">
        <div>
          <div className="date">
            {date} | <span>{data.attributes.type}</span>
          </div>
          <div className="title-message">{contact || name || firstName}</div>
          {email && (
            <div className="email-message">
              <Link to={`mailto:${email}`}>{email}</Link>
            </div>
          )}
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
      <div className="message">{message || review}</div>
    </div>
  );
};
