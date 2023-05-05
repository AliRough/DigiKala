// import React from "react";

// import { Autoplay, Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import NextButton from "./components/NextButton";
// import PervButton from "./components/PervButton";
// import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

// export default function Slider2(props) {
//   return (
//     <Swiper
//       slidesPerView={'auto'}
//       spaceBetween={30}
//       centeredSlides={true}
//     //   autoplay={{
//     //     delay: 2500,
//     //     disableOnInteraction: false,
//     //   }}
//       pagination={{
//         dynamicBullets: true,
//       }}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="mySwiper   "
//     >
//        {props.children}
//       <div className="absolute bottom-5 right-16 md:block hidden z-10">
//         <NextButton className=" bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
//           <GrFormNextLink className=" md:text-2xl" />
//         </NextButton>
//         <PervButton className=" bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
//           <GrFormPreviousLink className=" md:text-2xl" />
//         </PervButton>
//       </div>
//     </Swiper>
//   );
// }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";

// import "swiper/css/hash-navigation";

// import required modules
import { Navigation, FreeMode } from "swiper";
// import { Navigation } from "swiper";
import NextButton from "./components/NextButton";
import PervButton from "./components/PervButton";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
// import addClasses from "swiper/core/classes/addClasses";    ///     what the fuck

export default function Slider2(props) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        onSwiper={setSwiperRef}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
        className={` mySwiper ${props.className}`}
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
