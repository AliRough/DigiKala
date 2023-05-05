import React from "react";
import Off from "../../main/inMain/components/Off";
import { BsStarFill } from "react-icons/bs";
import { addNumbersCam } from "../../../../Helper/helper";
import { Link } from "react-router-dom";

export default function PorductCard({id, title, price, off, src, rate, number,isInDigi }) {
  return (
    <Link to={id} className="w-1/3 px-4 border-l border-b py-2 hover:shadow-xl">
      <div className="m-6 mx-10 rounded-xl overflow-hidden">
        <img src={src} alt="" />
      </div>
      <p className="text-xs font-semibold text-gray-600 pb-8 h-16">{title} </p>
      <div className="flex justify-between">
        <div className="">
          {(number < 4 && (
            <p className="text-red-600 text-xs">
              تنها {number}عدد در انبار باقی مانده{" "}
            </p>
          )) ||
            (isInDigi==="true" && <p className="text-gray-600 text-xs"> موجود در دیجی پلاس</p>)}
        </div>
        <div className="flex">
          <p className="text-sm mx-2 ">{rate}</p>
          <BsStarFill className=" text-yellow-300 text-sm " />
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <Off
          sale={off}
          price={price}
          className={`${off === price && "invisible"} text-xs px-2 py-0.5 m-0`}
        />
        <p className=" font-bold text-left text-gray-600 ">{addNumbersCam(off)}</p>
      </div>
      <strike
        className={`${
          off === price && "invisible"
        } font-bold block text-left text-xs text-gray-400 px-3 decoration-dashed mb-4`}
      >
        {addNumbersCam(price)}
      </strike>
    </Link>
  );
}
