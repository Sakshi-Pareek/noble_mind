"use client";
import React, { useState } from "react";
import Image from "next/image";
import triangleshape from "../assets/images/png/triangle_shape_1.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AccBtn } from "./Icons";

export default function Faq() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="relative z-[3]" id="faq">
        <Image
          src={triangleshape}
          className="absolute sm:top-[-20px] top-0 left-7 z-[2] lg:max-w-[75px] lg:max-h-[95px] md:w-[55px] md:h-[75px] w-[30px]"
        />
        <Image
          src={triangleshape}
          className="absolute top-[60%] right-7 z-[2] lg:max-w-[75px] lg:max-h-[95px] md:w-[55px] md:h-[75px] w-[30px] lg:block hidden"
        />
        <div className="container lg:max-w-[1164px] mx-auto px-3 xl:pb-[36px]">
          <h2
            className="text-center ff_outfit font-light xl:text-[48px] sm:text-[40px] text-[32px] xl:leading-[58px] sm:leading-[45px] leading-[35px] text-black mb-4"
            data-aos="fade-down"
          >
            Frequently <span className="font-semibold">Asked Questions</span>
          </h2>
          <p
            className="font-normal text-[14px] sm:text-[16px] text-[#131200] opacity-[70%] leading-[150%] text-center "
            data-aos="fade-down"
          >
            Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu{" "}
            <span className="lg:block">
              volutpat mi leo. Nibh nisl consequat metus.
            </span>
          </p>
          <div
            className="flex flex-col w-full gap-[18px] max-w-[780px] mx-auto overflow-hidden sm:px-5 px-2 md:pt-[52px] sm:pt-10 py-5 sm:pb-7"
            data-aos="zoom-in-up"
          >
            <Accordion
              open={open === 1}
              className={`${
                open === 1
                  ? "border border-b-[6px] border-[#A854E9]"
                  : "border-[#A854E933] border"
              }  border-solid rounded-md sm:px-6 px-2 sm:py-6 py-3 shadow-[0px_4px_32px_0px_#00000014]
                `}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="p-0 flex acco_arrow_none justify-between w-full items-center border-none"
              >
                <p
                  className={`${
                    open === 1 ? "text-[#000000]" : "text-[#4d4d4d]"
                  }
              ff_outfit text-[16px] font-semibold leading-[150%] duration-300 ease-linear transition-all text-start`}
                >
                  What is Artificial Intelligence (AI)?
                </p>{" "}
                <div
                  className={`${
                    open === 1 ? "rotate-180" : ""
                  } transition-all ease-linear duration-200`}
                >
                  <AccBtn />
                </div>
              </AccordionHeader>
              <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              className={`${
                open === 2
                  ? "border border-b-[6px] border-[#A854E9]"
                  : "border-[#A854E933] border"
              }  border-solid rounded-md sm:px-6 px-2 sm:py-6 py-3 shadow-[0px_4px_32px_0px_#00000014]`}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="p-0 flex acco_arrow_none justify-between w-full items-center border-none"
              >
                <p
                  className={`${
                    open === 2 ? "text-[#000000]" : "text-[#4d4d4d]"
                  }
              ff_outfit text-[16px] font-semibold leading-[150%] duration-300 ease-linear transition-all text-start`}
                >
                  How does AI benefit our company?
                </p>{" "}
                <div
                  className={`${
                    open === 2 ? "rotate-180" : ""
                  } transition-all ease-linear duration-200`}
                >
                  <AccBtn />
                </div>
              </AccordionHeader>
              <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              className={`${
                open === 3
                  ? "border border-b-[6px] border-[#A854E9]"
                  : "border-[#A854E933] border"
              }  border-solid  rounded-md sm:px-6 px-2 sm:py-6 py-3 shadow-[0px_4px_32px_0px_#00000014]`}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="p-0 flex acco_arrow_none justify-between w-full items-center border-none"
              >
                <p
                  className={`${
                    open === 3 ? "text-[#000000]" : "text-[#4d4d4d]"
                  }
              ff_outfit text-[16px] font-semibold leading-[150%] duration-300 ease-linear transition-all text-start`}
                >
                  What types of AI technologies are relevant to our industry?
                </p>{" "}
                <div
                  className={`${
                    open === 3 ? "rotate-180" : ""
                  } transition-all ease-linear duration-200`}
                >
                  <AccBtn />
                </div>
              </AccordionHeader>
              <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              className={`${
                open === 4
                  ? "border border-b-[6px] border-[#A854E9]"
                  : "border-[#A854E933] border"
              }  border-solid rounded-md sm:px-6 px-2 sm:py-6 py-3 shadow-[0px_4px_32px_0px_#00000014]`}
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="p-0 flex acco_arrow_none justify-between w-full items-center border-none"
              >
                <p
                  className={`${
                    open === 4 ? "text-[#000000]" : "text-[#4d4d4d]"
                  }
              ff_outfit text-[16px] font-semibold leading-[150%] duration-300 ease-linear transition-all text-start`}
                >
                  How can our employees adapt to AI integration?
                </p>{" "}
                <div
                  className={`${
                    open === 4 ? "rotate-180" : ""
                  } transition-all ease-linear duration-200`}
                >
                  <AccBtn />
                </div>
              </AccordionHeader>
              <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 5}
              className={`${
                open === 5
                  ? "border border-b-[6px] border-[#A854E9]"
                  : "border-[#A854E933] border"
              }  border-solid  rounded-md sm:px-6 px-2 sm:py-6 py-3 shadow-[0px_4px_32px_0px_#00000014]`}
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="p-0 flex acco_arrow_none justify-between w-full items-center border-none"
              >
                <p
                  className={`${
                    open === 5 ? "text-[#000000]" : "text-[#4d4d4d]"
                  }
              ff_outfit text-[16px] font-semibold leading-[150%] duration-300 ease-linear transition-all text-start`}
                >
                  How can our company ensure data security with AI?
                </p>{" "}
                <div
                  className={`${
                    open === 5 ? "rotate-180" : ""
                  } transition-all ease-linear duration-200`}
                >
                  <AccBtn />
                </div>
              </AccordionHeader>
              <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
