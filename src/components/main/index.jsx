import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Amazing from "./inMain/Amazing";
import Slider from "./inMain/Slider";
import Slider2 from "./inMain/Slider2";
import UserSelection from "./inMain/UserSelection";
import slider2 from "../../Datas/slider2";
import Off from "./inMain/components/Off";
import dasteBandi from "../../Datas/dasteBandi";
import DigiSuggestions from "./inMain/DigiSuggestion";
import digiSuggestions from "../../Datas/DigiSuggestions";
import brands from "../../Datas/berands";
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
                  <Off sale={slide.sale} price={slide.price} className="text-xs" />
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
      <div className="flex md:px-8 px-6 flex-wrap ">
        <div className="w-2/4 md:w-1/4  p-2 pr-0  ">
          <img
            className="rounded-2xl"
            src="./src/assets/images/suggestions/salname.webp"
            alt=""
          />
        </div>
        <div className="w-2/4 md:w-1/4  p-2 pl-0 md:pl-2">
          <img
            className="rounded-2xl"
            src="./src/assets/images/suggestions/rishtarash.webp"
            alt=""
          />
        </div>
        <div className="w-2/4 md:w-1/4   p-2 pr-0 md:pr-2">
          <img
            className="rounded-2xl"
            src="./src/assets/images/suggestions/kamarband.webp"
            alt=""
          />
        </div>
        <div className="w-2/4 md:w-1/4   p-2 pl-0 ">
          <img
            className="rounded-2xl"
            src="./src/assets/images/suggestions/atr.webp"
            alt=""
          />
        </div>
      </div>
      <div className="my-8 ">
        <p className="text-center md:text-3xl text-2xl">
          {" "}
          دسته بندی های دیجی کالا
        </p>
        <div className="flex flex-wrap md:p-8 px-6">
          {dasteBandi.map((daste, index) => (
            <a key={index} href="#" className="md:w-1/6 w-1/3 p-3 my-2">
              <img src={daste.img} alt={daste.title} />{" "}
              <p className="text-center text-xs">{daste.title}</p>
            </a>
          ))}
        </div>
      </div>
      <p className="text-center md:text-3xl text-2xl mb-8">
        {" "}
        پیشنهاد های دیجی کالا
      </p>
      <DigiSuggestions className="lg:overflow-hidden">
        <div className="flex w-max lg:w-full  justify-between ">
          {digiSuggestions.map((sug, index) => (
            <div key={index} className=" w-40 p-3 border-l ">
              <a href="#" className="border-3 w-full border-black">
                <img src={sug.img1} alt={sug.title1} className="   w-full" />{" "}
                <p className="text-center text-xs">{sug.title1}</p>
              </a>
              <a href="#" className=" mt-3 w-full  ">
                <img
                  src={sug.img2}
                  alt={sug.title2}
                  className="mt-4 pt-2    border-t w-full"
                />{" "}
                <p className="text-center text-xs">{sug.title2}</p>
              </a>
            </div>
          ))}
        </div>
      </DigiSuggestions>
      <div className="border rounded-lg mx-8">
        <p className="text-center md:text-3xl text-2xl my-8">
          {" "}
          محبوب ترین برند ها
        </p>
        <DigiSuggestions className="border-0  ">
          <div className="flex items-center w-max py-4   justify-between ">
            {brands.map((logo, index) => (
              <div key={index} className=" w-32 h-max p-3 border-l ">
                <a href="#" className="block  w-full h-full  ">
                  <img
                    src={logo.img}
                    alt="alt"
                    className=" object-fill  w-full"
                  />{" "}
                </a>
              </div>
            ))}
          </div>
        </DigiSuggestions>
      </div>
    </>
  );
}
