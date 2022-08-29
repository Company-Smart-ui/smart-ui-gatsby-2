import React, { useEffect, useState } from "react";
import * as style from "./contactCard.module.scss";

export const ContactCard = ({ data, archivedHandler }) => {
  const { contact, message } = data.attributes.data_message;

  return (
    <div className={style.contactCard}>
      <div className="control-panel">
        <div>
          <div className="date">{data.attributes.createdAt}</div>
          <div className="title-message">{contact}</div>
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
