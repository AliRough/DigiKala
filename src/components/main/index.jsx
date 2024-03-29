import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import bazdid from "../../Datas/bazdid";
import { FcPrevious } from "react-icons/fc";
import { useMediaQuery } from "react-responsive";
import { FreeMode } from "swiper";
import { Link } from "react-router-dom";
import { addNumbersCam } from "../../../Helper/helper";

export default function Main() {
  const [sliderData, setSliderData] = useState(slider2);
  const isSm = useMediaQuery({
    query: "(min-width: 640px )",
  });
  const isMd = useMediaQuery({
    query: "(min-width: 768px )",
  });
  
  return (
    <>
      <Slider>
        <div className="  h-max   ">
          <Link
            to="/product-List"
            className="flex items-center   sm:h-72 md:h-64 lg:h-80  xl:h-96 h-64 overflow-hidden  "
          >
            <img
              className=" object-cover w-full max-w-none  h-full  "
              src={`./src/assets/images/upslider/${
                isMd ? "lavazem" : "lavazemSM"
              }.webp`}
              alt=""
            />
          </Link>
        </div>
        <div className="  h-max   ">
          <Link
            to="/product-List"
            className="flex items-center md:h-64 lg:h-80  xl:h-96   sm:h-72 h-64 overflow-hidden "
          >
            <img
              className=" object-cover w-full  max-w-none  h-full "
              src={`./src/assets/images/upslider/${
                isMd ? "clear" : "clearSM"
              }.webp`}
              alt=""
            />
          </Link>
        </div>
      </Slider>
      <UserSelection />
      <Slider2 className=" bg-red-600 mx-4 rounded-2xl p-2 py-4 ">
        <SwiperSlide className="w-auto h-full">
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
        {
          <SwiperSlide key={sliderData[0].id} className="w-auto h-full    ">
            <div className="bg-white text-center w-40 ml-0.5 rounded-tr-md rounded-br-md overflow-hidden cursor-pointer">
              <img src={sliderData[0].src} className="m-0 flex" />
              <div>
                <div className="flex justify-between items-center">
                  <Off
                    sale={sliderData[0].sale}
                    price={sliderData[0].price}
                    className="text-xs flex items-center py-1"
                  />
                  <span className="flex mx-2">
                    <span>{addNumbersCam(sliderData[0].sale)}</span>
                    <div className="text-sm">تومان</div>
                  </span>
                </div>
                <p className="text-gray-400  line-through">
                  {addNumbersCam(sliderData[0].price)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        }
        {sliderData.map(
          (slide, index) =>
            index !== 0 && (
              <SwiperSlide key={slide.id} className="w-auto h-full  ">
                <div className="bg-white text-center w-40 ml-0.5   cursor-pointer">
                  <img src={slide.src} className="m-0 flex" />
                  <div>
                    <div className="flex justify-between items-center">
                      <Off
                        sale={slide.sale}
                        price={slide.price}
                        className="text-xs flex items-center py-1"
                      />
                      <span className="flex mx-2">
                        <span>{addNumbersCam(slide.sale)}</span>
                        <div className="text-sm">تومان</div>
                      </span>
                    </div>
                    <p className="text-gray-400  line-through">
                      {addNumbersCam(slide.price)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
        <SwiperSlide className="w-auto h-full">
          <div className="flex flex-col bg-white w-40  h-[13rem] p-1  text-center justify-center rounded-l-md">
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
      <DigiSuggestions className="md:overflow-hidden ">
        <div className="flex md:w-full w-min justify between  ">
          {digiSuggestions.map((sug, index) => (
            <div key={index} className="  md:w-[14.5%] w-32 border-l ">
              <a href="#" className=" md:h-1/2 block  w-full    border-black ">
                <div className="h-full py-4  border-b">
                  <img src={sug.img1} alt={sug.title1} className="w-full   " />{" "}
                  <p className="text-center text-xs truncate px-3 ">
                    {sug.title1}
                  </p>
                </div>
              </a>
              <a href="#" className="  w-full  md:h-1/2 block   ">
                <div className="h-full py-4 ">
                  <img
                    src={sug.img2}
                    alt={sug.title2}
                    className="w-full     "
                  />{" "}
                  <p className="text-center text-xs truncate p-3">
                    {sug.title2}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </DigiSuggestions>
      <div className="border rounded-lg mx-6 md:mx-8">
        <p className="text-center md:text-3xl text-2xl my-8">
          {" "}
          محبوب ترین برند ها
        </p>
        <Slider2 className=" ">
          {brands.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="  md:w-32 w-20 h-max p-3 border-l "
            >
              <a href="#" className="flex items-center md:h-28  w-full h-64  ">
                <img
                  src={logo.img}
                  alt="alt"
                  className=" object-fill  w-full"
                />{" "}
              </a>
            </SwiperSlide>
          ))}
        </Slider2>
      </div>
      <div className="flex flex-col md:flex-row  justify-between border rounded-2xl md:m-8 m-6 overflow-hidden">
        {bazdid.map((item, index) => {
          return (
            <div key={index} className="border-b md:border-l w-auto p-3">
              <div>
                <p className="font-bold text-lg">{item.title}</p>
                <p className="font-light text-gray-700 text-sm my-2">
                  {" "}
                  براساس بازدید شما
                </p>
              </div>
              <div className="flex  flex-wrap w-full ">
                <img
                  className="w-1/2 p-2 border-l border-b"
                  src={item.img1}
                  alt=""
                />
                <img className="w-1/2 p-2 border-b " src={item.img2} alt="" />
                <img className="w-1/2 p-2 border-l" src={item.img3} alt="" />
                <img className="w-1/2 p-2  " src={item.img4} alt="" />
              </div>
              <div>
                <a
                  href="#"
                  className="text-cyan-600 flex items-center my-2  justify-center "
                >
                  {" "}
                  <p>مشاهده</p>
                  <FcPrevious className="md:mx-1 text-cyan-600 text-sm " />{" "}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
