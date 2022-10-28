import React from "react";
import { BsCalendarDay } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Moment from "moment";

<<<<<<< HEAD
const Card = ({ lotteries, time, days }) => {
  console.log("fdsefsdf", time);
  if (!lotteries) return "The lottery wasn't found!";
  const { name, image, code } = lotteries;
  const formatDate =  (time).format("LT");
=======
const Card = ({
  is_online,
  image,
  code,
  name,
  date_open,
  closing_time,
  period_number,
  day,
}) => {
  // if (!lotteries) return "The lottery wasn't found!";
  // const { name, image, code } = lotteries;
  const closing = Moment(closing_time).format("LT");
  const openDate = Moment(date_open).format("MMM Do YY");
  const closing_day = Moment(closing_time).format("dddd");

>>>>>>> ea668275925642d20189a5ee91da3e436ad91b3d
  return (
    <>
      <div className="transitin ease-in-out hover:scale-110 duration-700 cursor-pointer mb-5 mt-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-1  sm:grid-cols-1 md:text-center  bg-gray-900 text-white">
            <div className="lg:text-start lg:col-span-2 ml-4 md:text-center  sm:text-center ">
              Open on : <span>{openDate}</span>
            </div>
            <div className="lg:text-right xl:text-right mr-4 md:text-center sm:text-center">
              Period <span>{period_number}</span>
            </div>
          </div>

          <div className="flex-inline items-center">
            <div className="flex items-center">
              <div className="p-3">
                <img className="h-9 w-16" src={image} alt="lottery image" />
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
              <h1 className="text-red-500 text-lg font-bold">{is_online}</h1>
            </div>
            {/* <div className="grid xl:grid-cols-2 lg:grid-cols-2 h-20 bg-sky-400 ">
              <div className="grid  grid-cols-3  text-right">
                <BsCalendarDay className=" text-left" />
                Day : <span>{closing_day}</span>
              </div>
              <div>
                <BiTimeFive />
                Close on : <span className="text-red-600">{closing}</span>
              </div>
            </div> */}
            <div className="flex items-center justify-center text-center h-20 bg-sky-400 rounded m-3 ">
              <div className="w-1/12">
                <BsCalendarDay className="mx-auto ml-5" />
              </div>
              <div className="w-1/2">
                <h3>
<<<<<<< HEAD
                  Date <span>{days}</span>
=======
                  Day : <span>{closing_day}</span>
>>>>>>> ea668275925642d20189a5ee91da3e436ad91b3d
                </h3>
              </div>
              <div className="item w-1/12">
                <BiTimeFive className="mr-2" />
              </div>
              <div className="item w-1/2">
                <h3 className="text-left">
                  Close on : <span className="text-red-600">{closing}</span>
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
