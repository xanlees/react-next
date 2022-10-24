import React from "react";
import { BsCalendarDay } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Moment from "moment";

const Card = ({ lotteries, time, days, open_date, period }) => {
  if (!lotteries) return "The lottery wasn't found!";
  const { name, image, code } = lotteries;
  const formatDate = Moment(time).format("LT");
  const openDate = Moment(open_date).format("MMM Do YY");
  return (
    <>
      <div className="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:w-1/3 transitin ease-in-out hover:scale-110 duration-700 cursor-pointer mb-5 mt-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-start col-span-2 ml-4">
              Open <span>{openDate}</span>
            </div>
            <div className=" text-right text-cyan-600 mr-4">
              Period <span>{period}</span>
            </div>
          </div>

          <div className="flex-inline items-center">
            <div className="flex items-center">
              <div className="p-3">
                <img className="h-9 w-16" src={image} alt="lao" />
              </div>
              <div className="text-center w-full bg-white h- rounded-lg m-3">
                <p className="py-4 text-20 text-3xl font-bold">{name}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-md text-center w-full">
                <h3 className="">{code}</h3>
              </div>
            </div>
            <div className="text-center w-full">
              <h1 className="text-red-500 text-lg font-bold">Open</h1>
            </div>
            <div className="flex items-center justify-center text-center h-20 bg-sky-400 rounded m-3">
              <div className="w-1/12">
                <BsCalendarDay className="mx-auto ml-5" />
              </div>
              <div className="w-1/2">
                <h3>
                  Date <span>{days}</span>
                </h3>
              </div>
              <div className="item w-1/12">
                <BiTimeFive className="mr-2" />
              </div>
              <div className="item w-1/2">
                <h3 className="text-left">
                  Close on:
                  <span className="text-red-600">{formatDate}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
