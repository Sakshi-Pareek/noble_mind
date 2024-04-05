"use client";
import { Stars } from "./Icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import one from "../assets/images/png/one.png";
import two from "../assets/images/png/two.png";
import three from "../assets/images/png/three.png";
import projectdiscuss from "../assets/images/png/disscussion-on-project.png";
import triangleshape from "../assets/images/png/triangle_shape_1.png";

export default function ChooseUs() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <>
      <div className="relative" id="choose">
        <Image
          src={triangleshape}
          className="absolute top-10 left-7 z-[2] lg:max-w-[75px] lg:max-h-[95px] md:w-[55px] md:h-[75px] w-[30px] md:block hidden"
        />
        <Image
          src={triangleshape}
          className="absolute bottom-5 2xl:right-7 right-1 z-[2] lg:max-w-[75px] lg:max-h-[95px] md:w-[55px] md:h-[75px] w-[30px] xl:block hidden"
        />
        <div className="container lg:max-w-[1164px] mx-auto px-3">
          <p className="font-normal text-base text-[#131200] justify-center flex items-center gap-1.5" data-aos="fade-down">
            <Stars />
            Why Choose Us
          </p>
          <h2 className="text-center ff_outfit font-light xl:text-[48px] sm:text-[40px] text-[32px] xl:leading-[58px] sm:leading-[45px] leading-[35px] text-black mt-2" data-aos="fade-down">
            Driving Innovation &{" "}
            <span className="font-semibold block">Transforming Industries</span>
          </h2>
          <div className="md:pt-[52px] mt-5">
            <Slider {...settings}>
              <div className="px-3">
                <div className="rounded-xl p-[18px] min-h-[210px] hover_active cursor-pointer" data-aos="zoom-in">
                  <div className="w-[36px] h-[36px] rounded-[50%] bg-[#a854e93d] flex items-center justify-center">
                    <p className=" w-[24px] h-[24px] rounded-[50%] bg-[#FDFDFF] flex items-center justify-center">
                      <Image src={one} height={14} width={6} />
                    </p>
                  </div>
                  <h3 className="ff_outfit font-normal text-[20px] leading-[25px] text-[#131200] mt-[11px] mb-1">
                    Customer-Centric
                  </h3>
                  <p className="font-normal text-base text-[#5A594D]">
                    Prioritize and anticipate client needs, ensuring our
                    technology solutions consistently deliver unparalleled
                    value.
                  </p>
                </div>
              </div>
              <div className="px-3">
                <div className="hover_active border rounded-xl p-[18px] min-h-[210px] cursor-pointer" data-aos="zoom-in">
                  <div className="w-[36px] h-[36px] rounded-[50%] bg-[#a854e93d] flex items-center justify-center">
                    <p className=" w-[24px] h-[24px] rounded-[50%] bg-[#FDFDFF] flex items-center justify-center">
                      <Image src={two} height={12} width={8} />
                    </p>
                  </div>
                  <h3 className="ff_outfit font-normal text-[20px] leading-[25px] text-[#131200] mt-[11px] mb-1">
                    Workplace Harmony
                  </h3>
                  <p className="font-normal text-base text-[#5A594D]">
                    Create a nurturing and peaceful environment for our staff,
                    fostering growth, well-being, and unity. We are more than a
                    team; we are a family.
                  </p>
                </div>
              </div>
              <div className="px-3">
                <div className="hover_active rounded-xl p-[18px] min-h-[210px] cursor-pointer" data-aos="zoom-in">
                  <div className="w-[36px] h-[36px] rounded-[50%] bg-[#a854e93d] flex items-center justify-center">
                    <p className="w-[24px] h-[24px] rounded-[50%] bg-[#FDFDFF] flex items-center justify-center">
                      <Image src={three} height={13} width={9} />
                    </p>
                  </div>
                  <h3 className="ff_outfit font-normal text-[20px] leading-[25px] text-[#131200] mt-[11px] mb-1">
                    Ethical Leadership
                  </h3>
                  <p className="font-normal text-base text-[#5A594D]">
                    Maintain the highest standards in all practices, ensuring
                    our solutions are responsible, safe, and transparent.
                  </p>
                </div>
              </div>
              <div className="px-3">
                <div className="hover_active rounded-xl p-[18px] min-h-[210px] cursor-pointer" data-aos="zoom-in">
                  <div className="w-[36px] h-[36px] rounded-[50%] bg-[#a854e93d] flex items-center justify-center">
                    <p className=" w-[24px] h-[24px] rounded-[50%] bg-[#FDFDFF] flex items-center justify-center">
                      <Image src={two} height={12} width={8} />
                    </p>
                  </div>
                  <h3 className="ff_outfit font-normal text-[20px] leading-[25px] text-[#131200] mt-[11px] mb-1">
                    Workplace Harmony
                  </h3>
                  <p className="font-normal text-base text-[#5A594D]">
                    Create a nurturing and peaceful environment for our staff,
                    fostering growth, well-being, and unity. We are more than a
                    team; we are a family.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div>
            <Image
              src={projectdiscuss}
              className="w-full rounded-3xl mt-14 object-cover min-h-[320px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
