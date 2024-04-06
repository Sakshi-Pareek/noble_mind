import Image from "next/image";
import weblogo from "../assets/images/png/footer-logo.png";
import Link from "next/link";
import { Fbicon, Insta, Linkedin, Twitter } from "./Icons";

export default function Footer() {
  const Dates = new Date();
  const year = Dates.getFullYear();
  return (
    <>
      <div className="bg-footer-pattern bg-no-repeat bg-center bg-full bg-[#141305] sm:pt-[138px] pt-24">
        <div className="container lg:max-w-[1164px] px-3 mx-auto">
          <div className="flex flex-wrap justify-between sm:mb-[52px] mb-10 lg:gap-0 gap-10">
            <div className="lg:w-[30%] w-full">
              <Link href={"/"}>
                <Image
                  src={weblogo}
                  alt="Weblogo"
                  className="sm:max-w-[221.86px] max-w-[180px] w-full"
                />
              </Link>
              <p className="sm:mt-7 mt-4 font-normal leading-[24px] text-[16px] text-white mb-2">
                Follow Us
              </p>
              <div className="flex gap-3 items-center">
                <Link
                  href={"https://www.facebook.com/login/"}
                  target="_blank"
                  className="hover:scale-90 transition-all duration-300 ease-linear"
                >
                  <Fbicon />
                </Link>
                <Link
                  href={"https://www.instagram.com/login/"}
                  target="_blank"
                  className="hover:scale-90 transition-all duration-300 ease-linear"
                >
                  <Insta />
                </Link>
                <Link
                  href={"https://www.twitter.com/login/"}
                  target="_blank"
                  className="hover:scale-90 transition-all duration-300 ease-linear"
                >
                  <Twitter />
                </Link>
                <Link
                  href={"https://www.linkedin.com/login/"}
                  target="_blank"
                  className="hover:scale-90 transition-all duration-300 ease-linear"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
            <div className="xl:w-[28%] lg:w-[35%] w-full flex lg:justify-between lg:gap-0 md:gap-96 sm:gap-40 gap-24">
              <ul className="pl-0 flex flex-col sm:gap-[14px] gap-2.5">
                <li className="text-white text-sm sm:text-base ff_outfit font-semibold mb-[2px]">
                  Maine
                </li>
                <li>
                  <Link
                    href={"#home"}
                    className="text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal text-center"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#about"}
                    className=" text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#services"}
                    className=" text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#choose"}
                    className=" text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal"
                  >
                    Why Choose Us
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col sm:gap-[14px] gap-2.5">
                <li className=" text-white text-sm sm:text-base ff_outfit font-semibold mb-[2px]">
                  Legal
                </li>
                <li>
                  <Link
                    href={"/"}
                    className=" text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal text-center"
                  >
                    Term & Conduction
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className=" text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#contact"}
                    className=" text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"tel:(629) 555-0129"}
                    className=" text-[#FDFDFF] duration-300 after:absolute relative after:bottom-[-15%] after:bg-[#FDFDFF] after:left-[100%] after:right-[100%] hover:after:left-0 hover:after:right-0 after:h-[2px] after:duration-500 after:rounded-md hover:opacity-100 opacity-70 text-sm sm:text-base font-normal"
                  >
                    (629) 555-0129
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#FFFFFF4D]"></div>
        <p className="text-xs sm:text-sm text-white opacity-70 text-center pt-4 px-3 lg:pb-[35px] pb-4">
          © Copyright {year} Noble Mind | All rights reserved.{" "}
        </p>
      </div>
    </>
  );
}
