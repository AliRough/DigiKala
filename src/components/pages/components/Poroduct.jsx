import React, { useEffect } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { CiBullhorn } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { getServing } from "../../../services/serving";

export default function Poroduct() {
  const { Pid } = useParams();
  useEffect(() => {}, []);
//   const [data ] = async () => await getServing(Pid);
//   console.log(data);
  return (
    <div className="px-6">
      <div className="flex justify-between items-center text-gray-500 text-sm ">
        <div className="flex ">
          <a href="#">
            <p>دیجی کالا</p>
          </a>
          <p className="mx-2">/</p>
          <a href="#">
            <p>خانه آشپزخانه</p>
          </a>
          <p className="mx-2">/</p>
          <a href="#">
            <p>سرو پذیرایی</p>
          </a>
          <p className="mx-2">/</p>
          <a href="#">
            <p>پارچ بطری لیوان</p>
          </a>
          <p className="mx-2">/</p>
          <a href="#">
            <p>ماگ</p>
          </a>
        </div>
        <div className="flex">
          <a href="#" className="flex mx-3">
            <p className=" mx-2">ثبت آگهی در پیندو </p>
            <CiBullhorn className="text-lg" />
          </a>
          <a href="#" className="flex">
            <p className=" mx-2">فروش در دیجی کالا </p>
            <BiHomeSmile />
          </a>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="w-1/3"></div>
        <div className="w-2/3">
          <div className="flex text-cyan-500 text-sm">
            <a href="#">متفرقه</a>
            <p className="px-2">/</p>
            <a href="#">ماگ متفرقه</a>
          </div>
          {/* <p>{data.title}</p> */}
        </div>
      </div>
    </div>
  );
}
