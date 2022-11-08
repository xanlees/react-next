import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const Details = () => {
  return (
    <>
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            Create a new agent
          </h5>
          <div className="">
            <div className="flex justify-center">
              <BsPersonCircle className="text-7xl text-sky-500 items-center" />
            </div>
          </div>
          {/* Input Username */}
          <div className="">
            <div className=" ml-2">Username</div>
            <div className="flex my-2 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700  w-80 rounded-tr-lg rounded-tl-lg">
              <label
                htmlFor="Username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <AiOutlineUser className=" text-sky-400 mt-2 text-3xl mr-2" />
              </label>
              <input
                type="Username"
                name="Username"
                id="Username"
                placeholder="••••••••"
                className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
              />
            </div>
          </div>
          {/* Input Fullname */}
          <div className="">
            <div className=" ml-2">Fullname</div>
            <div className="flex my-2 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700  w-80 rounded-tr-lg rounded-tl-lg">
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <AiOutlineUser className=" text-sky-400 mt-2 text-3xl mr-2" />
              </label>
              <input
                type="fullname"
                name="fullname"
                id="fullname"
                placeholder="••••••••"
                className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
              />
            </div>
          </div>
          {/* Input Phone number */}
          <div className="">
            <div className=" ml-2">Phone Number</div>
            <div className="flex my-2 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700  w-80 rounded-tr-lg rounded-tl-lg">
              <label
                htmlFor="phone_number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <AiOutlineUser className=" text-sky-400 mt-2 text-3xl mr-2" />
              </label>
              <input
                type="phone_number"
                name="phone_number"
                id="phone_number"
                placeholder="••••••••"
                className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Details;
