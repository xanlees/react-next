import React, { useState } from "react";

export default function index() {
  const [addTime, setAddTime] = useState([{}]);
  const handleAddTimes = () => {
    const values = [...addTime];
    values.push({});
    setAddTime(values);
  };
  return (
    <>
      <div
        className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
        id="monday"
      >
        <div className="mx-5">
          <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
            Monday
          </h1>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="time_open"
                className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
              >
                Set time to open
              </label>
              <input
                type="datetime-local"
                id="time_open"
                className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                required
                onChange={(e) => handleChangeDateOpen(e)}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
              >
                Set time to close
              </label>
              <input
                type="datetime-local"
                className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                required
                onChange={(e) => handleChangeDateClose(e)}
              />
            </div>
            <div className="flex items-center justify-between mt-5">
              <button
                className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => handleAddTimes()}
              >
                + Add Time
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
