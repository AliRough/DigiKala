import React from "react";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import NextButton from "./components/NextButton";
import PervButton from "./components/PervButton";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function Slider(props) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper   "
    >
      {props.children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
      <div className="absolute bottom-5 right-16 md:block hidden z-10">
        <NextButton className=" bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
          <GrFormNextLink className=" md:text-2xl" />
        </NextButton>
        <PervButton className=" bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
          <GrFormPreviousLink className=" md:text-2xl" />
        </PervButton>
      </div>
    </Swiper>
  );
}
