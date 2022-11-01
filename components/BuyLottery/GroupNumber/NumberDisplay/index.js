import React from "react";

const button = ({ index, lottery_number }) => {
  return (
    <>
      <div className="flex">
        <label className="w-4 text-gray-400">{index}.</label>
        <label className="w-14">{lottery_number}</label>
        <label className="w-5">x</label>
      </div>
    </>
  );
};
export default button;
