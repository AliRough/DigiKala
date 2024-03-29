import React, { Children } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import SearchBox from "./SearchBox";

export default function UpHeader(props) {
  return (
    <nav className="bg-white border-gray-200  ">
      <div className="flex justify-between items-center ">
        <button
          id="ay-navBtn"
          onClick={props.openNav}
          type="button"
          className="col-span-6 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className=" ">
          <a href="#">
            <img src="./src/assets/images/logo.svg" alt="Logo" />
          </a>
        </div>
        <BsQuestionSquare className="mx-4 text-2xl md:hidden " />
        {/* Search box */}
        <div className="w-2/4 hidden md:block ">
          <SearchBox placeholder="نام کالا ، برند و  یا دسته مورد نظر خود را جستجو کنید ..." />
        </div>

        <div className="hidden md:flex  lg:order-2  justify-end">
          {/* social box */}
          <a
            href="#"
            className="flex text-gray-800 md:border   font-medium rounded-lg items-center text-xs px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            <AiOutlineUser className="text-2xl" />
            <p className="hidden md:block">ورود به حساب کاربری</p>
          </a>
          <a
            href="#"
            className=" md:border-r text-gray bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium  text-sm pr-4 lg:pr-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
          >
            <AiOutlineShoppingCart className="text-2xl " />
          </a>
        </div>
      </div>
    </nav>
  );
}
