import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Amazing from "./inMain/Amazing";
import Slider from "./inMain/Slider";
import Slider2 from "./inMain/Slider2";
import UserSelection from "./inMain/UserSelection";
import slider2 from "../../Datas/slider2";
import Off from "./inMain/components/Off";
export default function Main() {
  const [sliderData, setSliderData] = useState(slider2);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Slider>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96  "
            src="./src/assets/images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full "
              src="./src/assets/images/upslider/myBaby.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96   "
            src="./src/assets/images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full   ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full "
              src="./src/assets/images/upslider/zelot.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96  "
            src="./src/assets/images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full "
              src="./src/assets/images/upslider/myBaby.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96   "
            src="./src/assets/images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full   ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full "
              src="./src/assets/images/upslider/zelot.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96  "
            src="./src/assets/images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full "
              src="./src/assets/images/upslider/myBaby.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96   "
            src="./src/assets/images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full   ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full "
              src="./src/assets/images/upslider/zelot.jpg"
              alt=""
            />
          </span>
        </a>
      </Slider>
      <UserSelection />
      <Slider2>
        <SwiperSlide>
          <div className=" w-40 mx-1 h-48 p-1  text-center">
            <img
              src="./src/assets/images/slider2/Amazings.svg"
              alt=""
              className=" h-[35%] mx-auto"
            />
            <img
              src="./src/assets/images/slider2/box.png"
              alt=""
              className="h-[55%] mx-auto"
            />
            <a
              href="#"
              className="text-white flex mt-2 items-center justify-center"
            >
              مشاهده همه
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  points="9 6 15 12 9 18"
                  transform="matrix(-1 0 0 1 24 0)"
                ></polyline>
              </svg>
            </a>
          </div>
        </SwiperSlide>
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="rounded-t-md overflow-hidden">
            <div className="bg-white text-center w-40 mx-1 rounded-md overflow-hidden cursor-pointer">
              <img src={slide.src} className="m-0 flex" />
              <div>
                <div className="flex justify-between items-center">
                  <Off sale={slide.sale} price={slide.price} />
                  <span className="flex mx-2">
                    <span>{numberWithCommas(slide.sale)}</span>
                    <div className="text-sm">تومان</div>
                  </span>
                </div>
                <p className="text-gray-400  line-through">
                  {numberWithCommas(slide.price)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="flex flex-col bg-white w-40 mx-1 h-[13.3rem] p-1  text-center justify-center rounded-md">
            <span className=" mx-auto border border-blue-400 text-blue-400 rounded-full w-2/6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  points="9 6 15 12 9 18"
                  transform="matrix(-1 0 0 1 24 0)"
                ></polyline>
              </svg>
            </span>
            <p>مشاهده همه</p>
          </div>
        </SwiperSlide>
      </Slider2>
      <Amazing />
    </>
  );
}
