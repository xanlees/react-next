import React, { useState } from "react";

export default function index() {
  const [addTime, setAddTime] = useState([{ date: ""}]);

  const handleInputTime = (index, event) => {
    const values = [...addTime];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;
    setAddTime(values);
  };

  return (
    <>
      <div>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-40 p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
          required
          onChange={(e) => handleInputTime(e)}
        />
      </div>
    </>
  );
}
