import React, { useState } from "react";
import Button from "./NumberButton";
import Display from "./NumberDisplay";
import { useSelector } from "react-redux";

const GroupNumber = ({}) => {
  const lottery_num_display = useSelector(
    (state) => state.number_button.number
  );
  const N = 100;
  const lottery_number = Array.from({ length: N }, (_, index) => index);

  return (
    <>
      <div className="flex flex-col-2 text-2xl">
        <h1></h1>
        <div className="w-1/5 bg-sky-900 text-white text-sm text-center pt-2">
          ຈໍານວນລາຍການເລກແທງ
          {lottery_num_display.map((item, index) => {
            return <Display key={index} lottery_number={item} index={index} />;
          })}
        </div>
        <div className="w-4/5">
          <div className=" text-center">
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2  w-40">
              3 ໂຕ
            </button>
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2  w-40">
              3 ໂຕ
            </button>
          </div>
          <div className="grid lg:grid-cols-12 xl:grid-cols-12  md:grid-cols-6 sm:grid-cols-4 m-4 ">
            {lottery_number.map((item, index) => {
              return <Button key={index} lottery_number={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupNumber;
