import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddLotteryItem,
  handleRemoveLotteryItem,
  handleAddLotteryDayData,
} from "../../../redux/slices/lottery";

const Index = () => {
  const { Lottery } = useSelector((state) => ({ ...state }));
  const dispath = useDispatch();
  const AddDaysItem = (days, lottery_id) => {
    dispath(
      handleAddLotteryItem({
        lottery_id,
        days,
      })
    );
  };
  const RemoveDaysItem = (days) => {
    dispath(handleRemoveLotteryItem(days));
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      AddDaysItem(value, Lottery.lottery_id);
    } else {
      RemoveDaysItem(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const OjbData = Lottery.lottery_items;
    const OjbData = Lottery.lottery_items;

    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/lottery_day",
        data: OjbData,
        headers: { "Content-Type": "application/json" },
      });
      console.log("upload", data);
      if (data) {
        dispath(handleAddLotteryDayData(data));
      }
    } catch (error) {
      console.log("request error ", error);
    }
  };
  return (
    <>
      <button onClick={() => dispath(handleAddLotteryDayData("ssss"))}>
        Test
      </button>
      <form onSubmit={handleSubmit}>
        <div className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Daya
            </h1>
            <div className="grid grid-cols-6 gap-1 mr-10">
              <input
                type="checkbox"
                className="text-1xl ml-10"
                value="monday"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="text-start">
                Monday
                {/* {Days("monday")} 99 */}
              </label>
              <input
                type="checkbox"
                className="text-1xl ml-10"
                value="tuesday"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="text-start">
                Tuesday
              </label>
              <input
                type="checkbox"
                className="text-1xl ml-10"
                value="wednesday"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="text-start">
                Wednesday
              </label>
              <input
                type="checkbox"
                className="text-1xl ml-10"
                value="Thursday"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="text-start">
                Thursday
              </label>
              <input
                type="checkbox"
                className="text-1xl ml-10"
                value="friday"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="text-start">
                Friday
              </label>
              <input
                type="checkbox"
                className="text-1xl ml-10"
                value="saturday"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="text-start">
                Saturday
              </label>
              <input
                type="checkbox"
                className="text-1xl ml-10"
                value="sunday"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="text-start">
                Sunday
              </label>
            </div>
          </div>
        </div>

        <div className="max-w-lg m-auto text-center py-5 mt-4 ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Index;
