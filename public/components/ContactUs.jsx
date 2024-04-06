"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import girlwithlaptop from "../assets/images/png/girl-with-laptop.png";
import Commonbtn from "./Commonbtn";
export default function first() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [_doc, _setdoc] = useState(null);
  useEffect(() => {
    _setdoc(document);
    if (showSuccessPopup === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      email: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
      message: /^[a-zA-Z\s]+$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "name is invalid.";
    }
    if (!regex.lastname.test(formData.lastname)) {
      errors.lastname = "lastname is invalid.";
    }
    if (!regex.message.test(formData.message)) {
      errors.message = "message is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "Email is invalid.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div
        className="container lg:max-w-[1164px] px-3 mx-auto xl:py-[150px] lg:py-28 md:py-24 sm:py-20 py-12"
        id="contact"
      >
        <div className="flex flex-wrap justify-between lg:gap-0 gap-7">
          <div className="xl:w-[42%] lg:w-[48%] w-full" data-aos="fade-right">
            <h2 className="ff_outfit font-lighter xl:text-[48px] sm:text-[40px] text-[32px] xl:leading-[58px] sm:leading-[45px] leading-[35px] text-[#131200] mb-[16px] lg:text-start text-center">
              <span className="font-semibold ">Contact</span> Us
            </h2>
            <p className="font-normal text-[14px] sm:text-[16px] text-[#131200] opacity-[70%] leading-[150%] mb-[18px] lg:text-start text-center ">
              Feel free to contact us any time . We will get back to you{" "}
              <span className="lg:block">as soon as we can! </span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="md:flex items-center justify-between gap-[11px]">
                <div className="form-group w-full">
                  <label
                    className="font-normal text-[#131200] text-[16px] opacity-[70%]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="error-message">{formErrors.name}</p>
                  )}
                </div>
                <div className="form-group w-full">
                  <label
                    className="font-normal text-[#131200] text-[16px] opacity-[70%]"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {formErrors.lastname && (
                    <p className="error-message">{formErrors.lastname}</p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="font-normal text-[#131200] text-[16px] opacity-[70%]"
                  htmlFor="number"
                >
                  Email
                </label>
                <input
                  className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="error-message">{formErrors.email}</p>
                )}
              </div>
              <div className="form-group w-full">
                <label
                  className="font-normal text-[#131200] text-[16px] opacity-[70%]"
                  htmlFor="lastname"
                >
                  Message
                </label>
                <textarea
                  className="min-h-[135px] outline-none border-solid border-[1px] border-[#13120033] w-full p-[11px] rounded-[5px] resize-none"
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && (
                  <p className="error-message">{formErrors.message}</p>
                )}
              </div>
              <div className="flex lg:justify-start justify-center items-center mt-[10px]">
                <Commonbtn className="submit-button" btnname="Submit" />
              </div>
            </form>
            {showSuccessPopup && (
              <div className="success-popup">
                <div className="success-popup-box">
                  <p className="mb-[10px]">Your form submitted successfully!</p>
                  <button onClick={handlePopupClose}>Close</button>
                </div>
              </div>
            )}
          </div>
          <div className="xl:w-[52.46%] lg:w-[50%]" data-aos="fade-left">
            <Image src={girlwithlaptop} className="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
