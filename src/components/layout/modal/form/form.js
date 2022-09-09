import React, { useState } from "react";
import { sendForm } from "../../../../api/contactForm";
import { leaveComment } from "../../../../api/leaveComment";
import { useForm } from "react-hook-form";
import { Messenger } from "../../../../global/messengers/messengers";
import StarRating from "react-svg-star-rating";

export const Form = ({ isReview, title, isMessage, data, handle }) => {
  const [rating, setRating] = useState("");
  const {register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm({mode: "onChange",});

  function onSubmit(data, e) {
    e.preventDefault();
    { isReview ? leaveComment({...data, rating}) : sendForm({ type: title, data: { ...data } });}
    reset();
    handle();
  }

  const handleOnClick = (rating) => {
    setRating(rating);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {isReview && (
        <div className="formRating">
          <StarRating size={35} initialRating={0} unit="float" activeColor="yellow"handleOnClick={handleOnClick}/>
        </div>
      )}
      <p>Write your comment</p>
      <label className="formField">
        <input {...register("contact", {required: true, maxLength: { value: 150, message: "Not more than 150 symbols" },})}
          placeholder={"Leave any contacts: ( telegram ,whatsapp, linkedin , etc.. )"}
          type={"text"}
        />
        {errors.contact && (
          <span className="error">{errors.contact.message}</span>
        )}
      </label>
      <label className="formField">
        <textarea
          {...register("message", {required: true,maxLength: { value: 300, message: "Not more than 300 symbols" },})}
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
        <button className="reset" type="reset" onClick={handle} disabled={isSubmitting}>
          No, cancel
        </button>
        <button type="submit" className="button">
          Yes, confirm
        </button>
      </div>
    </form>
  );
};
