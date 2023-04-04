import React from "react";

export default function DigiSuggestions(props) {
  return (
    <>
      <div className={` my-4 border rounded-lg md:mx-8 mx-6 overflow-x-scroll  ${props.className}`}>
        {props.children}
      </div>
    </>
  );
}
