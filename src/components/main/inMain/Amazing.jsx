import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import amazing from "../../../Datas/amazing";
import Off from "./components/Off";

export default function Amazing() {
  const isXl = useMediaQuery({
    query: "(max-width: 1440px )",
  });
  return (
    <a href="#" className="block px-6 py-4">
      <div className='bg-[url("./src/assets/images/amazing/freshPattern.svg")] bg-no-repeat '>
        <div className=" bg-gray-300  bg-opacity-30 py-4 rounded-xl md:flex md:justify-between justify-center md:px-6 ">
          <div className="flex align-middle items-center justify-center w-full md:w-auto ">
            <img
              src="./src/assets/images/amazing/fresh.png"
              alt=""
              className="w-1/4 sm:w-1/6 md:w-auto"
            />

            <img
              className="mx-4 w-3/4 sm:w-3/6 md:w-auto"
              src="./src/assets/images/amazing/fresh.svg"
              alt=""
            />

            <p className="hidden  lg:block bg-lime-600 text-white rounded-3xl px-3 py-1">
              تا 45% تخفیف
            </p>
          </div>
          <div className="flex relative items-center justify-center">

            {isXl?(

              amazing.slice(0, 3).map((product, index) => (
                <div
                  key={index}
                  className=" rounded-full overflow-hidden w-1/6  mx-1"
                >
                  <img src={product.image} alt="" className="md:h-20  w-full" />
                  <Off
                    className="text-[9px] md:text-sm absolute bottom-0 z-10  px-2 md:p-1"
                    sale={product.sale}
                    price={product.price}
                  />
                </div>
              ))
              ):amazing.map((product, index) => (
                <div
                  key={index}
                  className=" rounded-full overflow-hidden w-1/6  mx-1"
                >
                  <img src={product.image} alt="" className="md:h-20  w-full" />
                  <Off
                    className="text-[9px] md:text-sm absolute bottom-0 z-10  px-2 md:p-1"
                    sale={product.sale}
                    price={product.price}
                  />
                </div>
              ))
            }
              
            <div className="flex bg-white rounded-3xl items-center mx-2  h-max p-4 ">
              <p className=" ml-2 hidden md:block "> بیش از 80 کالا </p>
              <GrFormPreviousLink />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
