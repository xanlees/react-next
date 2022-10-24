import React from "react";

export default function index() {
  return (
    <div>
      <>
        <div className="">
          <div className="py-2">
            <select
              id="is_staff"
              name="is_staff"
              className=" w-40 h-10 rounded-lg hover:border-sky-500 "
            >
              <option value={true}> Hanoi VIP </option>
              <option value={false}> Lao lottery </option>
              <option value={false}> Thai lottery </option>
              <option value={false}> Lao lotto</option>
              <option value={false}>Lao Premium </option>
            </select>
          </div>
        </div>
      </>
    </div>
  );
}
