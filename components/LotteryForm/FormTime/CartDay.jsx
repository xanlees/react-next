import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleAddLotteryTime,
  handleRemoveLotteryTime,
} from "../../../redux/slices/lottery";
function CartDay({ item }) {
  // const [addTime, setAddTime] = useState([{ open: "", close: "" }]);

  const { Lottery } = useSelector((state) => ({ ...state }));

  const dispath = useDispatch();
  const AddTimeItem = (e) => {
    dispath(
      handleAddLotteryTime({
        day_id: item.id,
        [e.target.name]: e.target.value,
      })
    );
  };
  const RemoveDaysItem = (times) => {
    dispath(handleRemoveLotteryTime(times));
  };

  const [addTime, setAddTime] = useState([
    {
      open: "",
      close: "",
    },
  ]);
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
    console.log(addTime);
  };

  // const handleInputTime = (e) => {
  //   const { values } = e.target;
  //   console.log(first);
  //   if (values) {
  //     AddTimeItem(values, Lottery.lottery_day_id);
  //   } else {
  //     RemoveDaysItem(values);
  //   }
  // };

  return (
    <>
      <div className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4">
        <div className="mx-5">
          <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
            {item.days}
            {item.id}
          </h1>

          <div
            className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
            id=""
          >
            <div className="mx-5">
              <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5"></h1>

              {addTime.length > 0 && (
                <>
                  {addTime.map((field, index) => (
                    <div>
                      <h4 className="text-left  font-bold ml-10">
                        Time {index + 1}
                      </h4>
                      <div className="grid gap-6 mb-6 lg:grid-cols-3 ml-10">
                        <div>
                          <input
                            type="datetime-local"
                            name="open"
                            className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                            value={field.name}
                            onChange={(event) => handleInputTime(index, event)}
                          />
                        </div>
                        <div>
                          <input
                            type="datetime-local"
                            name="close"
                            className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                            value={field.description}
                            onChange={(event) => handleInputTime(index, event)}
                          />
                        </div>
                        <button
                          onClick={() => handleRemoveTime(index)}
                          className="bg-red-500 hover:bg-red-700 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className=" flex items-center justify-between mt-5 ml-16">
              <button
                onClick={() => handleAddTimes()}
                className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              >
                Add time
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDay;
