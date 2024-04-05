import { Exo_2 } from "next/font/google";
import Header from "../../public/components/Header";
import AboutUs from "../../public/components/AboutUs";
import ChooseUs from "../../public/components/ChooseUs";
import ContactUs from "../../public/components/ContactUs";
import Subscribe from "../../public/components/Subscribe";
import Footer from "../../public/components/Footer";
import Faq from "../../public/components/Faq";
import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from "../../public/components/Proloader";
import { BackToTop } from "../../public/components/Icons";


const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
// -------------aos-------------
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);
  // -------------backtotop-----------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ------------preloader-------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <main
            className={` ${exo_2.className} overflow-hidden`}
          >
            <Header />
            <AboutUs />
            <ChooseUs />
            <ContactUs />
            <Faq />
            <Subscribe />
            <Footer />
            <div>
              <button className={`${backToTop ? "fixed sm:right-[1%] right-2 bottom-[2%] z-30 !cursor-pointer updown_animation shadow-[0px_5px_10px_0px_#A05AEB] w-[40px] h-[40px] border-[#8A69EF] border-2 flex justify-center items-center bg-[#8A69EF] rounded-[50%]" : "d-none"}`} onClick={() => top()}><BackToTop /></button>
            </div>
          </main>
        </>
      )}
    </>

  );
}
