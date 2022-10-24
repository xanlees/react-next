import React, { useState } from "react";

const demo = () => {
  const handleAddTime = () => {
    const [addTime, setAddTime] = useState([{ open: "", close: "" }]);
    const values = [...addTime];
    values.push({
      open: "",
      close: "",
    });
    setAddTime(values);
  };

  const handleRemoveTime = (index) => {
    const values = { ...addTime };
    values.splice(index, 1);
    setAddTime(values);
  };

  const handleInputTime = (index, event) => {
    const values = { ...addTime };
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;
    setAddTime(values);
    console.log(addTime);
  };
  return (
    <div>
      <div className="grid gap-6 mb-6 lg:grid-cols-3">
        {addTime.length > 0 && (
          <>
            {addTime.map((field, index) => (
              <>
                <div key="index+field">
                  <label
                    htmlFor="time_open"
                    className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                  >
                    Set time to open
                  </label>
                  <input
                    value={field.open_date}
                    name="open_date"
                    type="datetime-local"
                    id="phone"
                    className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    required
                    onChange={(event) => handleInputTime(index, event)}
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
                    value={field.closing_date}
                    name="closing_date"
                    type="datetime-local"
                    id="phone"
                    className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    required
                    onChange={(event) => handleInputTime(index, event)}
                  />
                </div>
                <div className="flex items-center justify-between mt-5">
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
            onClick={() => handleAddTime()}
          >
            + Add Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default demo;
