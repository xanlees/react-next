import React from "react";
import { BsCalendarDay } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Moment from "moment";

const Card = ({
  is_online,
  image,
  code,
  name,
  date_open,
  closing_time,
  period_number,
}) => {
  // if (!lotteries) return "The lottery wasn't found!";
  // const { name, image, code } = lotteries;
  const closing = Moment(closing_time).format("LT");
  const openDate = Moment(date_open).format("MMM Do YY");
  const closing_day = Moment(closing_time).format("dddd");

  return (
    <>
      <div className="transitin ease-in-out hover:scale-110 duration-700 cursor-pointer mb-5 mt-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="grid grid-cols-3 gap-2 bg-gray-900 text-white">
            {/* <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-1  md:text-center  sm:grid-cols-1 sm:text-center  bg-gray-900 text-white"> */}
            <div className="lg:text-start  col-span-2">
              Open on : <span>{openDate}</span>
            </div>
            <div className="text-right ">
              Period <span>{period_number}</span>
            </div>
          </div>
          <div className="flex-inline items-center">
            <div className="flex items-center">
              <div className="p-3">
                <img className="h-9 w-16" src={image} alt="lottery image" />
              </div>
              <div className="text-center w-full bg-white h- rounded-lg m-3">
                <p className="py-4 text-20 text-2xl font-bold ">{name}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-md text-center w-full">
                <h3 className="">{code}</h3>
              </div>
            </div>
            <div className="text-center w-full">
              <h1 className="text-red-500 text-md font-bold">{is_online}</h1>
            </div>
            <div className="flex items-center justify-center text-center h-20 bg-sky-400 rounded m-3 ">
              <div className="w-1/12">
                <BsCalendarDay className="mx-auto ml-5" />
              </div>
              <div className="w-1/2">
                <h3>
                  Day : <span>{closing_day}</span>
                </h3>
              </div>
              <div className="item w-1/12">
                <BiTimeFive className="mr-2" />
              </div>
              <div className="item w-1/2">
                <div className="text-left font-sm">
                  Close on : <span className="text-red-600">{closing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
