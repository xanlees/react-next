import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartDay from "./CartDay";
import Demo from "./demo";
function Index() {
  const { Lottery } = useSelector((state) => ({ ...state }));

  return (
    <>
      {Lottery && Lottery.lottery_day_data.length > 0 && (
        <>
          {Lottery.lottery_day_data.map((item, index) => (
            <CartDay item={item} key={item.days + index} />
          ))}
          <div className="max-w-lg m-auto text-center py-5 mt-4 ">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
          <Demo />
        </>
      )}
    </>
  );
}

export default Index;
