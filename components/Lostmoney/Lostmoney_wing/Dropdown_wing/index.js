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
              <option value={true}> 3 ໂຕ </option>
              <option value={false}> 2 ໂຕ </option>
              <option value={false}> ຕໍ່າສູງ </option>
              <option value={false}> ຄູ່/ຄີກ</option>
              <option value={false}>ວິງ</option>
            </select>
          </div>
        </div>
      </>
    </div>
  );
}
