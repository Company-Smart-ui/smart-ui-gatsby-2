import React, { useMemo } from "react";
import * as style from "./login.module.scss";
import axios from "axios";
import { API } from "../../api/API";
import { Cookies } from "react-cookie";
import { useOpen } from "../../hooks/useOpen";
import { Loader } from "../../global/loader/loader";
import { navigate } from "gatsby";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const cookies = new Cookies();
  const {
    isOpen: loading,
    onOpen: startLoading,
    onClose: finishLoading,
  } = useOpen(true);

  useMemo(async () => {
    const jwt = cookies.get("jwt");
    try {
      axios
        .get(API.ADMIN_CHECK, {
          headers: {
            Authorization: `Bearer  ${jwt}`,
          },
        })
        .catch(() => {
          finishLoading();
        })
        .then((value) => {
          finishLoading();
          if (value?.status === 200) {
            navigate("/admin");
          }
        });
    } catch (e) {
      finishLoading();
    }
    // eslint-disable-next-line
  }, []);
  const loginHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const identifier = data.get("identifier").trim();
    const password = data.get("password").trim();

    try {
      startLoading();
      const data = await axios
        .post(API.LOGIN, {
          identifier,
          password,
        })
        .catch(() => {
          toast.error("wrong access data ", { theme: "colored" });
          finishLoading();
        });
      if (data?.data?.jwt) {
        cookies.set("jwt", data?.data?.jwt, { path: "/" });
        navigate("/admin");
      } else {
        toast.error("wrong access data ", { theme: "colored" });
      }
    } catch (e) {
      toast.error(e, { theme: "colored" });
      finishLoading();
    }
  };

  return (
    <section className={style.login}>
      <div className="container">
        {loading && <Loader />}
        <form onSubmit={loginHandler}>
          <div className="form-wrapper">
            <div className="form-row">
              <input id='identifier' name={"identifier"} type="text" required />
              <label for="identifier">Login</label>
            </div>
            <div className="form-row">
              <input id='password' name={"password"} type="password" required />
              <label for="password">Password</label>
            </div>
            <button type={"submit"} className="button">
              Login
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};
