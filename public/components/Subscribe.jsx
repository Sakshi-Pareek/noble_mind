import Image from "next/image";
import triangleshape from "../assets/images/png/triangle_shape_1.png";

export default function Subscribe() {
  return (
    <>
      <div className="relative">
        <Image
          src={triangleshape}
          className="absolute sm:top-[-20px] top-0 left-7 z-[2] lg:max-w-[75px] lg:max-h-[95px] md:w-[55px] md:h-[75px] w-[30px]"
        />
        <div
          className="container lg:max-w-[1164px] px-3 mx-auto lg:translate-y-[86px] sm:translate-y-[68px] translate-y-[40px]"
          id="services"
        >
          <div className="bg-blue-pattern bg-no-repeat bg-center bg-full rounded-[20px] md:py-[60px] sm:py-12 py-10 px-3" data-aos="fade-down">
            <h2 className="text-center ff_outfit font-light xl:text-[48px] sm:text-[40px] text-[32px] xl:leading-[58px] sm:leading-[45px] leading-[35px] text-[#FDFDFF] mb-2">
              Subscribe to our{" "}
              <span className="font-semibold">Newsletter!</span>
            </h2>
            <p className="font-normal text-[14px] sm:text-[16px] text-[#FDFDFF] leading-[150%] text-center md:mb-9 mb-5">
              Be the first to get exclusive offers and the latest news.
            </p>
            <div className="max-w-[448px] mx-auto border border-solid border-[#fdfdff33] rounded-md bg-[#ffffff0d] md:ps-6 md:pe-2.5 sm:px-2 sm:py-2 p-1 flex justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="ff_outfit font-semibold text-[16px] leading-[24px] placeholder:text-[#FDFDFF] bg-transparent text-[#FDFDFF] outline-none w-full"
              />
              <button className="ff_outfit font-semibold text-[16px] leading-[24px] text-[#FDFDFF] hover:text-[#985FEC] transition-all duration-300 ease-linear hover:bg-white px-6 sm:py-[13px] py-3 border border-solid border-[#FDFDFF] rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
