import React, { useEffect, useState } from "react";
import * as style from "./admin.module.scss";
import { Cookies } from "react-cookie";
import { useOpen } from "../../hooks/useOpen";
import axios from "axios";
import { API } from "../../api/API";
import { Link, navigate } from "gatsby";
import { Loader } from "../../global/loader/loader";
import { ContactCard } from "./contactCard/contactCard";
import { FilterMessages } from "./filterMessages/filterMessages";

const ARCHIVE_ENUM = {
  all: 0,
  new: 1,
  archived: 2,
};

export const Admin = () => {
  const cookies = new Cookies();
  const { isOpen: loading, onClose: finishLoading } = useOpen(true);
  const [contacts, setContacts] = useState();
  const [activeIndex, setActiveIndex] = useState(1);

  const refreshArchivedData = (id) => {
    return contacts.map((el) => {
      if (el.id === id) {
        const { isArchived } = el.attributes;
        return {
          ...el,
          ...(el.attributes.isArchived = !isArchived),
        };
      }
      return el;
    });
  };

  const archivedHandler = (id) => {
    const jwt = cookies.get("jwt");

    if (!jwt) {
      navigate("/login");
    }

    const currentMessage = contacts.find((el) => el.id === id);
    const { isArchived } = currentMessage.attributes;

    const body = {
      data: {
        isArchived: !isArchived,
      },
    };

    axios
      .put(`${API.CONTACT_FORM}/${id}`, body, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const newData = refreshArchivedData(id);
          setContacts(newData);
        }
      })
      .catch(function (e) {
        alert(e);
      });
  };

  useEffect(() => {
    const jwt = cookies.get("jwt");
    if (!jwt) {
      navigate("/login");
    }
    axios
      .get(API.CONTACT_FORM, {
        headers: {
          Authorization: `Bearer  ${jwt}`,
        },
      })
      .catch(function (e) {
        alert(e);
        console.log(e);
        finishLoading();
      })
      .then((value) => {
        if (value?.status === 200 && value?.data?.data) {
          setContacts(value.data.data);
          finishLoading();
        } else {
          console.log(value);
        }
      });
    // eslint-disable-next-line
  }, []);

  const renderFilteredArr = (contactsArr) => {
    if (activeIndex === ARCHIVE_ENUM.new) {
      return contactsArr.filter((el) => !el.attributes.isArchived);
    }
    if (activeIndex === ARCHIVE_ENUM.archived) {
      return contactsArr.filter((el) => el.attributes.isArchived);
    }
    return contactsArr;
  };

  return (
    <section className={style.admin}>
      {loading && <Loader />}
      <div className="container">
        <Link to={"/login"}> Logout </Link>
        <FilterMessages
          contacts={contacts}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <div className="contacts-list">
          {contacts &&
            renderFilteredArr(contacts).map((contact, i) => {
              return (
                <ContactCard
                  key={i}
                  data={contact}
                  archivedHandler={archivedHandler}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
