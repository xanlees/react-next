import React from "react";
import { useDispatch } from "react-redux";
import {
  handleAddValueNumber,
  handleRemoveValueNumber,
} from "./numberButton.redux";

const button = ({ lottery_number }) => {
  const dispath = useDispatch();

  const lottery_string = (lottery_number < 10 ? "0" : "").concat(
    lottery_number
  );

  const handleChange = (event) => {
    if (event.target.checked) {
      dispath(handleAddValueNumber(lottery_string));
    } else {
      dispath(handleRemoveValueNumber(lottery_string));
    }
  };
  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          className="peer hidden"
          id={lottery_string}
          onChange={handleChange}
        />
        <label
          htmlFor={lottery_string}
          className=" cursor-pointer rounded-lg border-2 bg-sky-400 border-gray-200 py-3 px-6 font-bold text-gray-200   peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "
        >
          {lottery_string}
        </label>
      </div>
    </>
  );
};
export default button;
