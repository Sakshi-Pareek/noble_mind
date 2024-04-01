"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="backdrop-blur-md bg-[#18181833] border-b-[1.5px] border-b-[#f1f1f129]">
        <div className="container lg:max-w-[1164px] xl:px-3 px-5 mx-auto">
          <nav className="flex items-center justify-between lg:h-[100px] md:h-[80px] sm:h-[70px] h-[60px]">
            <Link href="/">
              {/* <Image
                  src={Weblogo}
                  alt="Weblogo"
                  className="sm:max-w-[170px] max-w-[130px] w-full"
                /> */}
            </Link>
            <div className="flex gap-[60px]">
              <ul
                className={`${
                  show ? "left-[-100%]" : "left-0"
                } flex max-lg:fixed max-lg:top-0 max-lg:bg-navpattern md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-[7] max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-6 items-center justify-center`}
              >
                <li onClick={() => setShow(!show)}>
                  <Link
                    href="#about"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    About
                  </Link>
                </li>
                <li onClick={() => setShow(!show)}>
                  <Link
                    href="#Tokenomics"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Tokenomics
                  </Link>
                </li>
                <li onClick={() => setShow(!show)}>
                  <Link
                    href="#Audit"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Audit
                  </Link>
                </li>
                <li onClick={() => setShow(!show)}>
                  <link
                    href="#Roadmap"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Roadmap
                  </link>
                </li>
                <li onClick={() => setShow(!show)}>
                  <Link
                    href="#whitepapper"
                    className="font-medium text-[16px] leading-[24px] text-[#C1C1C1] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff624] hover:text-[#fff624] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    White Paper
                  </Link>
                </li>
              </ul>
              <button className="flex items-center sm:gap-5 gap-3">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
