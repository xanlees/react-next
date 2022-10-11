import React, { useState, useEffect } from "react";

const Monday = {
  monday: false,
};

export default function index() {
  const [monday, setMonday] = useState(Monday);
  console.log(monday);

  useEffect(() => {
    document.getElementById("monday").classList.toggle("hidden");
  }, [monday]);

  const [addTime, setAddTime] = useState([{ open: "", close: "" }]);

  const handleAddTimes = () => {
    const values = [...addTime];
    values.push({
      open: "",
      close: "",
    });
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
      <div className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
        <div className="mx-5">
          <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
            Days
          </h1>
          <div className="grid grid-cols-6 gap-1 mr-10">
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setMonday(!monday);
              }}
            />
            <label htmlFor="" className="text-start">
              Monday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setTuesday(!tuesday);
              }}
            />
            <label htmlFor="" className="text-start">
              Tuesday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setWednesday(!wednesday);
              }}
            />
            <label htmlFor="" className="text-start">
              Wednesday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setThursday(!thursday);
              }}
            />
            <label htmlFor="" className="text-start">
              Thursday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setFriday(!friday);
              }}
            />
            <label htmlFor="" className="text-start">
              Friday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setSaturday(!saturday);
              }}
            />
            <label htmlFor="" className="text-start">
              Saturday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10 bg-sky"
              onChange={() => {
                setSunday(!sunday);
              }}
            />
            <label htmlFor="" className="text-start">
              Sunday
            </label>
          </div>
        </div>
      </div>

      <div
        className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
        id="monday"
      >
        <div className="mx-5">
          <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
            Monday
          </h1>
          <div className="grid gap-6 mb-6 lg:grid-cols-3 ml-10">
            {addTime.length > 0 && (
              <>
                {addTime.map((index, field) => (
                  <>
                    <div>
                      <label className="block mb-2 text-sm font-medium dark:text-gray-900 text-left">
                        Set time to open
                      </label>
                      <input
                        type="datetime-local"
                        name="name"
                        value={field.name}
                        onChange={(event) => handleInputTime(index, event)}
                        className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium dark:text-gray-900 text-left">
                        Set time to close
                      </label>
                      <input
                        type="datetime-local"
                        name="description"
                        value={field.description}
                        className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                        onChange={(event) => handleInputTime(index, event)}
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
