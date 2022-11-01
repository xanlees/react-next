import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const SelectNumber = ({ lottery_number, index }) => {
  return (
    <>
      <div className=" text-sm rounded-lg text-gray h-10 w-full pt-2">
        {index}
      </div>
      <div className="bg-gray-900 border border-gray-300 text-sm rounded-lg text-white h-10 w-full pt-2">
        {lottery_number}
      </div>
      <input
        type="text"
        placeholder="Enter Amount"
        className="pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:focus:ring-sky-500 dark:focus:border-sky-500 text-white"
      />
      <div className="pt-2 bg-gray-900 border border-gray-300 text-sm rounded-lg text-white w-full">
        Multiple
      </div>
      <input
        type="text"
        className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
      />
      <button className="mr-3">
        <RiDeleteBin5Line className=" text-white text-sm rounded-lg  w-full bg-red-500 h-10 mr-5 mb-1" />
      </button>
    </>
  );
};

export default SelectNumber;
