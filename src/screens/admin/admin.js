import React, { useEffect, useState } from "react";
import * as style from "./admin.module.scss";
import { Cookies } from "react-cookie";
import { useOpen } from "../../hooks/useOpen";
import axios from "axios";
import { API } from "../../api/API";
import { Link, navigate } from "gatsby";
import { Loader } from "../../global/loader/loader";
import { ContactCard } from "./contactCard/contactCard";

const messages = [
  {
    attributes: {
      title: "Hello. Contact with me please!",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isChecked: false,
      date: new Date(),
    },
  },
];

export const Admin = () => {
  const cookies = new Cookies();
  const { isOpen: loading, onClose: finishLoading } = useOpen(true);
  const [contacts, setContacts] = useState();

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

  return (
    <section className={style.admin}>
      <Link to={"/login"}> login </Link>
      {loading && <Loader />}
      <div className="container">
        <h1 style={{ fontSize: 33 }}> contact form results </h1>
        {/* messages should be replaced on contacts?.map */}
        {messages?.map((contact, i) => {
          return <ContactCard key={i} data={contact} />;
        })}
      </div>
    </section>
  );
};
