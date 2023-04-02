import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
// import "swiper/css/hash-navigation";

// import required modules
import { Navigation } from "swiper";
import NextButton from "./components/NextButton";
import PervButton from "./components/PervButton";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
// import addClasses from "swiper/core/classes/addClasses";    ///     what the fuck

export default function Slider2(props) {
  const [swiperRef, setSwiperRef] = useState(null);
 
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        centeredSlides={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="Swiper2 mySwiper bg-red-600 mx-4 rounded-2xl p-2 "
      >

        {props.children}
        <NextButton className="absolute z-10 top-[45%] right-5 md:block hidden bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
          <GrFormNextLink className=" md:text-2xl" />
        </NextButton>
        <PervButton className="absolute z-10 top-[45%] left-5 md:block hidden bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
          <GrFormPreviousLink className=" md:text-2xl" />
        </PervButton>
      </Swiper>
    </>
  );
}
