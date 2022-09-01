import React from 'react';
import * as style from './filterMessages.module.scss'


export const FilterMessages = ({
  activeIndex,
  setActiveIndex,
  contacts
}) => {

  const allMessages = contacts?.length;
  const newMessages = contacts?.filter((el) => !el.attributes.isArchived).length;
  const archivedMessages = contacts?.filter((el) => el.attributes.isArchived).length;

  const resultOptions = [
    {
      title: "All messages",
      count: allMessages,
    },
    {
      title: "New",
      count: newMessages,
    },
    {
      title: "Archived",
      count: archivedMessages,
    },
  ];

  return (
    <ul className={style.list}>
      {resultOptions?.map(({ id, title, count }, i) => {
        return (
          <li key={id} className={`item`}>
            <button
              className={`item-button ${activeIndex === i ? 'active' : ' '}`}
              onClick={() => setActiveIndex(i)}
            >
              <span>{title} </span>
                <span className={`dot ${activeIndex === i ? 'dot-active' : ' '}`}></span>
              <span className="count">{count}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};