import React, { useState, useEffect } from "react";
import axios from "axios";

const Monday = {
  monday: false,
};

const index = () => {
  const [lottery, setLottery] = useState(23);
  const [addTimeMonday, setAddTimeMonday] = useState([
    {
      open_date: "",
      closing_date: "",
    },
  ]);

  const handleAddTimes = () => {
    const values = [...addTimeMonday];
    values.push({
      open_date: "",
      closing_date: "",
    });
    setAddTimeMonday(values);
  };
  console.log(addTimeMonday);
  const handleRemoveTime = (index) => {
    const values = [...addTimeMonday];
    values.splice(index, 1);
    setAddTimeMonday(values);
  };
  const handleInputTime = (index, event) => {
    const values = [...addTimeMonday];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAddTimeMonday(values);
  };

  const [monday, setMonday] = useState(Monday);
  console.log(monday);

  // useEffect(() => {
  //   document.getElementById("monday").classList.toggle("hidden");
  // }, [monday]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const time = {
    //   open_date: "2022-10-28T19:51",
    //   closing_date: "2022-10-28T19:44",
    //   lottery: "23",
    // };
    // const sentdata = {
    //   open_date: time.open_date,
    //   closing_date: time.closing_date,
    //   lottery: time.lottery,
    // };

    const sentdata = {
      days: monday,
      lottery: 2,
    };

    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/lottery_day",
        data: sentdata,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("upload ", data);
    } catch (error) {
      console.log("request error ", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Day and Time
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
                  setMonday(!monday);
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
        {/* monday */}
        {/* <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
          id="monday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Monday
            </h1>

            {addTimeMonday.length > 0 && (
              <>
                {addTimeMonday.map((field, index) => (
                  <div key={field.closing_date}>
                    <h4 className="text-left  font-bold ml-10">
                      Time {index + 1}
                    </h4>
                    <div className="grid gap-6 mb-6 lg:grid-cols-3 ml-10">
                      <div>
                        <input
                          type="datetime-local"
                          name="open_date"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.name}
                          onChange={(event) => handleInputTime(index, event)}
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="closing_date"
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
        </div> */}

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

export default index;
