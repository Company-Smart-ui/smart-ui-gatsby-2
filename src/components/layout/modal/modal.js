import React, { useEffect, useRef, useState } from "react";
import { useOpen } from "../../../hooks/useOpen";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { sendForm } from "../../../api/contactForm";
import { useForm } from "react-hook-form";
import { Messenger } from "../../../global/messengers/messengers";
import { useNoScroll } from "../../../hooks/useNoScroll";
import StarRating from "react-svg-star-rating";
import { leaveComment } from "../../../api/leaveComment";
import { Loader } from "../../../global/loader/loader";

export const Modal = ({
  onClose,
  children,
  title = "request consultation",
  isMessage = false,
  data = "",
  isReview = false,
  init = false,
}) => {
  const [loading, setLoader] = useState(init);
  const { isOpen: isFade, onOpen: fadeIn, onClose: fadeOut } = useOpen(false);
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  useNoScroll(isFade);

  function onSubmit(data, e) {
    setLoader((newLoader) => (newLoader = !loading));
    e.preventDefault();
    isReview
      ? leaveComment({ ...data, stars: rating })
      : sendForm({ type: title, data: { ...data } });
    reset();
    setLoader((newLoader) => (newLoader = !loading));
    fadeOutHandle();
  }

  const modalRef = useRef();

  const fadeOutHandle = () => {
    fadeOut();
    setTimeout(() => {
      onClose();
    }, 650);
  };

  useOnClickOutside(modalRef, fadeOutHandle);

  useEffect(() => {
    setTimeout(() => {
      fadeIn();
    }, 1);
  }, [fadeIn]);

  const handleOnClick = (rating) => {
    setRating(rating);
  };

  return (
    <>
      <div className={["mask", isFade ? "open" : ""].join(" ")}>
        <div
          ref={modalRef}
          className={["modal", isFade ? "open" : ""].join(" ")}
        >
          {children}
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            {isReview && (
              <div className="formRating">
                <StarRating
                  size={35}
                  initialRating={0}
                  unit="full"
                  activeColor="yellow"
                  handleOnClick={handleOnClick}
                />
              </div>
            )}
            <p>Write your comment</p>
            <label className="formField">
              <input
                {...register("name", {
                  required: true,
                  maxLength: {
                    value: 150,
                    message: "Not more than 150 symbols",
                  },
                })}
                placeholder={
                  "Leave any contacts: ( telegram ,whatsapp, linkedin , etc.. )"
                }
                type={"text"}
              />
              {errors.contact && (
                <span className="error">{errors.contact.message}</span>
              )}
            </label>
            <label className="formField">
              <textarea
                {...register("review", {
                  required: true,
                  maxLength: {
                    value: 300,
                    message: "Not more than 300 symbols",
                  },
                })}
                placeholder={"Your message*"}
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </label>
            <p className="md-only">
              Your data is safe and will not be passed on to third parties
            </p>
            {isMessage && <Messenger data={data} />}
            <div className={"btns"}>
              <button
                className="reset"
                type="reset"
                onClick={fadeOutHandle}
                disabled={isSubmitting}
              >
                No, cancel
              </button>
              <button type="submit" className="button">
                Yes, confirm
              </button>
            </div>
          </form>
          {loading && <Loader />}
        </div>
      </div>
    </>
  );
};
