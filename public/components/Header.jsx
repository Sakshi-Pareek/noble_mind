"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Stars, Weblogo } from "./Icons";
import Commonbtn from "./Commonbtn";

const Header = () => {
  const [show, setShow] = useState(true);
  const [_document, _setdocument] = useState(null);
  useEffect(() => {
    _setdocument(document);
    if (show === false) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  });

  return (
    <>
      <div className="bg-hero-pattern bg-no-repeat md:bg-left bg-right bg-cover xl:h-[810px] lg:h-[710px] relative z-[2] max-w-[1440px] mx-auto">
        <div className="lg:hidden block bg-white opacity-85 absolute top-0 left-0 h-full w-full z-0"></div>
        <div className="container lg:max-w-[1164px] px-3 mx-auto relative z-[10]">
          <nav className="flex items-center justify-between lg:h-[90px] md:h-[80px] sm:h-[70px] h-[60px] py-3">
            <Link href={"/"}>
              <Weblogo />
            </Link>
            <div className="flex items-center justify-between gap-10">
              <div
                className={`${
                  show ? "left-[-100%]" : "left-0"
                } flex max-lg:fixed max-lg:top-0 max-lg:bg-slate-400 max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-6 items-center justify-center`}
              >
                <Link
                  href={"#home"}
                  onClick={() => setShow(!show)}
                  className="font-normal text-[16px] leading-[24px] text-[#5A594D] hover:text-[#131200] transition-all duration-300 ease-linear"
                >
                  Home
                </Link>
                <Link
                  href={"#about"}
                  onClick={() => setShow(!show)}
                  className="font-normal text-[16px] leading-[24px] text-[#5A594D] hover:text-[#131200] transition-all duration-300 ease-linear"
                >
                  About Us
                </Link>
                <Link
                  onClick={() => setShow(!show)}
                  href={"#services"}
                  className="font-normal text-[16px] leading-[24px] text-[#5A594D] hover:text-[#131200] transition-all duration-300 ease-linear"
                >
                  Services
                </Link>
                <Link
                  onClick={() => setShow(!show)}
                  href={"#choose"}
                  className="font-normal text-[16px] leading-[24px] text-[#5A594D] hover:text-[#131200] transition-all duration-300 ease-linear"
                >
                  Why Choose Us
                </Link>
                <Link
                  href={"/"}
                  onClick={() => setShow(!show)}
                  className="font-normal text-[16px] leading-[24px] text-[#5A594D] hover:text-[#131200] transition-all duration-300 ease-linear"
                >
                  Blogs
                </Link>
                <Link
                  href={"#faq"}
                  onClick={() => setShow(!show)}
                  className="font-normal text-[16px] leading-[24px] text-[#5A594D] hover:text-[#131200] transition-all duration-300 ease-linear"
                >
                  FAQ
                </Link>
                <div className="lg:hidden block">
                  <Commonbtn btnname="Contact us" />
                </div>
              </div>
              <div
                onClick={() => setShow(!show)}
                className="lg:hidden w-[28px] h-[20px] relative z-30 flex justify-between flex-col"
              >
                <span
                  className={`${
                    show
                      ? "bg-black h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                      : "bg-black transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                  }`}
                ></span>
                <span
                  className={`${
                    show
                      ? "bg-black h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                      : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                  }`}
                ></span>
                <span
                  className={`${
                    show
                      ? "bg-black h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                      : "bg-black transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                  }`}
                ></span>
              </div>
              <div className="lg:flex hidden">
                <Commonbtn btnname="Contact us" />
              </div>
            </div>
          </nav>
          <div
            className="lg:max-w-[584px] md:py-[120px] sm:py-24 py-10 lg:text-start text-center"
            id="home"
            data-aos="zoom-in"
          >
            <p className="font-normal text-base text-[#131200] flex items-center gap-1.5 lg:justify-start justify-center">
              <Stars />
              AI With Noble Mind
            </p>
            <h1 className="ff_outfit font-light lg:text-[64px] md:text-[58px] sm:text-[44px] text-[37px] lg:leading-[76.8px] md:leading-[67px] sm:leading-[50px] leading-[40px] text-black mt-2 sm:mb-4 mb-3">
              <span className="lg:leading-[76.8px]">
                Inspiring Innovation, Elevating Solutions –{" "}
              </span>
              <span className="font-extrabold lg:leading-[70.8px]">
                Noble Mind
              </span>
              "
            </h1>
            <p className="font-normal text-base text-[#131200]">
              At Noble Mind is a forward-thinking AI specialised company
              dedicated to reshaping the future of how we live, work, and learn.
              Our mission is to create ground-breaking AI solutions for
              Healthcare, Education, and beyond, aligning with Saudi Arabia’s
              Vision 2030.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
