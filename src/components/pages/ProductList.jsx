import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import kitchen from "../../Datas/kitchen";
import { berandsName } from "../../Datas/berands";
import { getAllServing } from "../../services/serving";

import { useDispatch, useSelector } from "react-redux";
import PorductCard from "./components/PorductCard";
import { poroducts } from "../../features/poroduts/poroductSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const allPoroduct=useSelector(({products:{poroductList}})=>poroductList)
  // console.log(allPoroduct);
  useEffect(() => {
    dispatch(poroducts())

  },[dispatch]);
  const [frontPrice, setFrontPrice] = useState(0);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  function handleMinValueChange(event) {
    setMinValue(event.target.value);
  }

  function handleMaxValueChange(event) {
    setMaxValue(event.target.value);
  }

  return (
    <div className="flex">
      <div className=" w-1/4 flex p-4  ">
        <div className="sticky top-0 w-full h-min border rounded-lg  p-4">
          <div className="flex justify-between">
            <p className="text-xl">فیلتر ها</p>
            <button className="text-cyan-500 text-sm">حذف فیلتر ها</button>
          </div>

          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  border-b border-gray-200   dark:border-gray-700 dark:text-gray-400 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-1"
              >
                <span>دسته بندی</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="relative  px-3 mt-3">
                <input
                  type="text"
                  name=""
                  className="border-gray-300 rounded-lg placeholder:pr-6 w-full   "
                  placeholder="جستجو دسته بندی ..."
                />
                <BsSearch className="absolute right-0 top-0 text-lg m-3 mx-5" />
              </div>
              <div className=" ">
                {kitchen.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex border-b py-4 items-center"
                  >
                    <input type="checkbox" className="rounded out" />
                    <label className="text-lg mx-3">{item}</label>
                  </div>
                ))}
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b border-gray-200  dark:border-gray-700 dark:text-gray-400 "
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>برند</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="relative  px-3 mt-3">
                <input
                  type="text"
                  name=""
                  className="border-gray-300 rounded-lg placeholder:pr-6 w-full   "
                  placeholder="جستجو برند ..."
                />
                <BsSearch className="absolute right-0 top-0 text-lg m-3 mx-5" />
              </div>
              <div className=" ">
                {berandsName.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex border-b py-4 items-center"
                  >
                    <input type="checkbox" className="rounded out" />
                    <div className="flex justify-between items-center w-full ">
                      <label className="text-lg mx-3">{item[0]}</label>
                      <label dir="ltr" className="text-xs mx-3">
                        {item[1]}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b border-gray-200  dark:border-gray-700 dark:text-gray-400 "
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>خدمات دیجی پلاس</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className=" ">
                <div className="w-full flex border-b py-4 items-center">
                  <input type="checkbox" className="rounded out" />
                  <label className="text-lg mx-3">ارسال فوری</label>
                </div>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b border-gray-200  dark:border-gray-700 dark:text-gray-400 "
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <span>محدوده قیمت</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="flex w-full border-b py-3 px-1 ">
                <div className="w-1/6 text-lg text-gray-600">از</div>
                <div dir="ltr" className="w-4/6 px-3 text-2xl font-bold">
                  0
                </div>
                <div className="w-1/6 text-lg text-gray-600">تومان</div>
              </div>
              <div className="flex w-full border-b py-3 px-1 ">
                <div className="w-1/6 text-lg text-gray-600">تا</div>
                <div dir="ltr" className="w-4/6 px-3 text-2xl font-bold">
                  {frontPrice}
                </div>
                <div className="w-1/6 text-lg text-gray-600">تومان</div>
              </div>

              {/* ****** test ***** */}
              <div className="w-full">
                <label
                  htmlFor="double-range-slider"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Double Range Slider
                </label>
                <div className="relative w-full">
                  <input
                    id="double-range-slider-min"
                    type="range"
                    className="absolute w-full h-4 cursor-pointer appearance-none rounded-full bg-gray-300 focus:outline-none"
                    min="100"
                    max="0"
                    step="1"
                    value={minValue}
                    onChange={handleMinValueChange}
                  />
                  <input
                    id="double-range-slider-max"
                    type="range"
                    className="absolute w-full h-4 cursor-pointer appearance-none rounded-full bg-gray-300 focus:outline-none"
                    min="0"
                    max="100"
                    step="1"
                    value={maxValue}
                    onChange={handleMaxValueChange}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

              {/* <div class="slider-container flex justify-between items-center">
                <div className=" relative">
                  <input
                    className=" absolute  right-0 left-0 w-full"
                    onInput={updateRange()}
                    type="range"
                    id="range1"
                    min="0"
                    max="100"
                    // value="20"
                  />
                </div>
                <div>
                  <input
                    className=" absolute  right-16 left-0 w-full"
                    onInput={updateRange()}
                    type="range"
                    id="range2"
                    min="0"
                    max="100"
                    // value="80"
                  />
                </div>
              </div> */}

              {/* <input
                type="range"
                min="0"
                max="10500000"
                className="w-full my-3"
                onChange={(e) => {
                  console.log(setFrontPrice(e.target.value));
                }}
              /> */}
            </div>
            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b border-gray-200  dark:border-gray-700 dark:text-gray-400 "
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-5"
              >
                <span>نوع فروشنده</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div className=" ">
                <div className="w-full flex border-b py-4 items-center">
                  <input type="checkbox" className="rounded out" />
                  <label className="text-lg mx-3">فروشنده رسمی</label>
                </div>
              </div>
              <div className=" ">
                <div className="w-full flex border-b py-4 items-center">
                  <input type="checkbox" className="rounded out" />
                  <label className="text-lg mx-3">فروشنده برگزیده</label>
                </div>
              </div>
              <div className=" ">
                <div className="w-full flex border-b py-4 items-center">
                  <input type="checkbox" className="rounded out" />
                  <label className="text-lg mx-3">دیجی کالا</label>
                </div>
              </div>
              <div className=" ">
                <div className="w-full flex border-b py-4 items-center">
                  <input type="checkbox" className="rounded out" />
                  <label className="text-lg mx-3">کسب و کار بومی</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-max  flex flex-wrap px-6">
        {
          allPoroduct.map(data=>(

            <PorductCard key={data.id} {...data}/>
          )
          )
        }
     
      </div>
    </div>
  );
}
