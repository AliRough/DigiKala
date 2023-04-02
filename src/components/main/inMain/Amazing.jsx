import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import amazing from "../../../Datas/amazing";
import Off from "./components/Off";

export default function Amazing() {
  return (
    <a className="block px-6 py-4">
      <div className='bg-[url("./src/assets/images/amazing/freshPattern.svg")] bg-no-repeat '>
        <div className=" bg-gray-300  bg-opacity-30 py-4 rounded-xl md:flex md:justify-between justify-center md:px-6 ">
          <div className="flex align-middle items-center justify-center w-full md:w-auto ">
            <img src="./src/assets/images/amazing/fresh.png" alt=""  className="w-1/4 md:w-auto"/>

            <img
              className="mx-4 w-3/4 md:w-auto"
              src="./src/assets/images/amazing/fresh.svg"
              alt=""
            />

            <p className="hidden  md:block bg-lime-600 text-white rounded-3xl px-3 py-1">
              تا 45% تخفیف
            </p>
          </div>
          <div className="flex relative items-center justify-center">
            {amazing.slice(0,3).map((product, index) => (
              <div key={index} className=" rounded-full overflow-hidden w-1/6  mx-1">
                <a href="#">
                  <img src={product.image} alt="" className="md:h-20  w-full" />
                  <Off
                    className="text-[9px] md:text-sm absolute bottom-0 z-10  px-2 md:p-1"
                    sale={product.sale}
                    price={product.price}
                  />
                </a>
              </div>
            ))}
            <div className="flex bg-white rounded-3xl items-center mx-2  h-max p-4 ">
              <p className=" ml-2 hidden md:block "  > بیش از 80 کالا </p>
              <GrFormPreviousLink />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
