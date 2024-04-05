import Image from "next/image";
import triangleshape from "../assets/images/png/triangle_shape_1.png";
import aboutusimg from "../assets/images/png/aboutus.png";
import { Stars } from "./Icons";
import Commonbtn from "./Commonbtn";

export default function AboutUs() {
  return (
    <>
      <div className="relative lg:z-[2] z-[1] lg:py-[150px] md:py-24 sm:py-20 pt-10 pb-12">
        <Image
          src={triangleshape}
          className="absolute lg:top-[-20px] top-5 left-7 z-[2] lg:max-w-[75px] lg:max-h-[95px] md:w-[55px] md:h-[75px] w-[30px] sm:block hidden"
        />
        <Image
          src={triangleshape}
          className="absolute bottom-52 right-7 z-[2] lg:max-w-[75px] lg:max-h-[95px] md:w-[55px] md:h-[75px] w-[30px] lg:block hidden"
        />
        <div className="container lg:max-w-[1164px] px-3 mx-auto" id="about">
          <div className="flex flex-wrap justify-between items-center lg:gap-0 gap-7">
            <div className="lg:w-[49%] w-full" data-aos="fade-right">
              <Image
                src={aboutusimg}
                className="rounded-tr-[50px] max-w-[544px] w-full max-lg:mx-auto"
              />
            </div>
            <div
              className="lg:w-[47%] w-full lg:text-start text-center"
              data-aos="fade-left"
            >
              <p className="font-normal text-base text-[#131200] flex items-center gap-1.5 lg:justify-start justify-center">
                <Stars />
                About Us
              </p>
              <h2 className="ff_outfit font-light xl:text-[48px] sm:text-[40px] text-[32px] xl:leading-[58px] sm:leading-[45px] leading-[35px] text-black mt-2 sm:mb-4 mb-3 lg:text-start text-center">
                Pioneering Vision & Mission-{" "}
                <span className="font-semibold">
                  Driven Sectoral Innovation
                </span>
                "
              </h2>
              <p className="font-normal text-base text-[#131200] xl:pr-7 xl:mb-[42px] md:mb-7 mb-5 lg:text-start text-center">
                Imagine a future in Saudi Arabia influenced by the potential of
                Al, with Noble Mind at the forefront of this transformation.
                Healthcare stands to gain with the promise of enhanced data
                precision. In education, there's the potential for
                individualized learning experiences. Finance could witness
                seamless transactions, and entertainment may revel in customized
                experiences. Through Al's promise, transportation could innovate
                and cities might adapt smarter infrastructures. In every domain,
                the vision of Noble Mind hints at a brighter, more efficient
                nation.
              </p>
              <Commonbtn btnname="Read More" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
