import React from "react";

export default function Off({sale, price, className}) {
  return (
    <span className={`${className}" bg-red-600 rounded-full text-white  mx-1 px-1 "`}>
      {Math.round(100 - (sale * 100) / price)} %
    </span>
  );
}
