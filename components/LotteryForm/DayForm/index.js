import React, { useState } from "react";

export default function index() {
  const [addTime, setAddTime] = useState([{ open_date: "", closing_date: "" }]);

  const handleAddTimes = () => {
    const values = [...addTime];
    values.push({ open_date: "", closing_date: "" });
    setAddTime(values);
  };

  const handleRemoveTime = (index) => {
    const values = [...addTime];
    values.splice(index, 1);
    setAddTime(values);
  };

  const handleInputTime = (index, event) => {
    const values = [...addTime];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;
    setAddTime(values);
  };

  return (
    <>
      <div
        className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
        id="tuesday"
      >
        <div className="mx-5">
          <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
            Monday
          </h1>
          <div className="grid gap-6 mb-6 lg:grid-cols-3">
            {addTime.length > 0 && (
              <>
                {addTime.map((index) => (
                  <>
                    {/* <div className="bg-red-600"></div> */}
                    <div>
                      <label
                        htmlFor="open_date"
                        className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                      >
                        Set time to open
                      </label>
                      <input
                        type="datetime-local"
                        id="open_date"
                        name="open_date"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                        required
                        onChange={(e) => handleInputTime(e)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="closing_date"
                        className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                      >
                        Set time to close
                      </label>
                      <input
                        type="datetime-local"
                        name="closing_date"
                        id="closing_date"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                        required
                        onChange={(e) => handleInputTime(e)}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-7">
                      <button
                        className="bg-red-500 hover:bg-red-700 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => handleRemoveTime(index)}
                      >
                        delete
                      </button>
                    </div>
                  </>
                ))}
              </>
            )}
            <div className="flex  items-end mt-5">
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
