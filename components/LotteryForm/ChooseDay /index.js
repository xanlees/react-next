import React, { useState, useEffect } from "react";
import axios from "axios";

const OpenTimeMonday = { open_date: "", closing_date: "" };
const Monday = {
  monday: false,
};
const Tuesday = {
  tuesday: false,
};
const Wednesday = {
  wednesday: false,
};
const Thursday = {
  tuesday: false,
};
const Friday = {
  thursday: false,
};
const Saturday = {
  saturday: false,
};
const Sunday = {
  sunday: false,
};

const index = () => {
  const [lottery, setLottery] = useState(18);
  const [addTimeMonday, setAddTimeMonday] = useState([
    {
      open_date: "",
      closing_date: "",
    },
  ]);
  const [addTimeTuesday, setAddTimeTuesday] = useState([
    { open: "", close: "" },
  ]);
  const [addTimeWednesday, setAddTimeWednesday] = useState([
    { open: "", close: "" },
  ]);
  const [addTimeThursday, setAddTimeThursday] = useState([
    { open: "", close: "" },
  ]);
  const [addTimeFriday, setAddTimeFriday] = useState([{ open: "", close: "" }]);
  const [addTimeSaturday, setAddTimeSaturday] = useState([
    { open: "", close: "" },
  ]);
  const [addTimeSunday, setAddTimeSunday] = useState([{ open: "", close: "" }]);
  /* monday */
  const handleAddTimes = () => {
    const values = [...addTimeMonday];
    values.push({
      open_date: "",
      open_date: "",
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
  /* Tuesday */
  const handleAddTimesTuesday = () => {
    const values = [...addTimeTuesday];
    values.push({
      openTuesday: "",
      closeTuesday: "",
    });
    setAddTimeTuesday(values);
  };
  const handleRemoveTimeTuesday = (index) => {
    const values = [...addTimeTuesday];
    values.splice(index, 1);
    setAddTimeTuesday(values);
  };
  const handleInputTimeTuesday = (index, event) => {
    const values = [...addTimeTuesday];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAddTimeTuesday(values);
  };
  /* Wednesday */
  const handleAddTimesWednesday = () => {
    const values = [...addTimeWednesday];
    values.push({
      open: "",
      close: "",
    });
    setAddTimeWednesday(values);
  };
  const handleRemoveTimeWednesday = (index) => {
    const values = [...addTimeWednesday];
    values.splice(index, 1);
    setAddTimeWednesday(values);
  };
  const handleInputTimeWednesday = (index, event) => {
    const values = [...addTimeWednesday];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAddTimeWednesday(values);
  };
  // Wednesday
  const handleAddTimesThursday = () => {
    const values = [...addTimeThursday];
    values.push({
      open: "",
      close: "",
    });
    setAddTimeThursday(values);
  };
  const handleRemoveTimeThursday = (index) => {
    const values = [...addTimeThursday];
    values.splice(index, 1);
    setAddTimeThursday(values);
  };
  const handleInputTimeThursday = (index, event) => {
    const values = [...addTimeThursday];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAddTimeThursday(values);
  };
  /* Friday */
  const handleAddTimesFriday = () => {
    const values = [...addTimeFriday];
    values.push({
      open: "",
      close: "",
    });
    setAddTimeFriday(values);
  };
  const handleRemoveTimeFriday = (index) => {
    const values = [...addTimeFriday];
    values.splice(index, 1);
    setAddTimeFriday(values);
  };
  const handleInputTimeFriday = (index, event) => {
    const values = [...addTimeFriday];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAddTimeFriday(values);
  };
  /* Saturday */
  const handleAddTimesSaturday = () => {
    const values = [...addTimeSaturday];
    values.push({
      open: "",
      close: "",
    });
    setAddTimeSaturday(values);
  };
  const handleRemoveTimeSaturday = (index) => {
    const values = [...addTimeSaturday];
    values.splice(index, 1);
    setAddTimeSaturday(values);
  };
  const handleInputTimeSaturday = (index, event) => {
    const values = [...addTimeSaturday];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAddTimeSaturday(values);
  };
  /* Sunday */
  const handleAddTimesSunday = () => {
    const values = [...addTimeSunday];
    values.push({
      open: "",
      close: "",
    });
    setAddTimeSunday(values);
  };
  const handleRemoveTimeSunday = (index) => {
    const values = [...addTimeSunday];
    values.splice(index, 1);
    setAddTimeSunday(values);
  };
  const handleInputTimeSunday = (index, event) => {
    const values = [...addTimeSunday];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAddTimeSunday(values);
  };

  const [monday, setMonday] = useState(Monday);
  const [tuesday, setTuesday] = useState(Tuesday);
  const [wednesday, setWednesday] = useState(Wednesday);
  const [thursday, setThursday] = useState(Thursday);
  const [friday, setFriday] = useState(Friday);
  const [saturday, setSaturday] = useState(Saturday);
  const [sunday, setSunday] = useState(Sunday);

  useEffect(() => {
    document.getElementById("monday").classList.toggle("hidden");
  }, [monday]);
  useEffect(() => {
    document.getElementById("tuesday").classList.toggle("hidden");
  }, [tuesday]);
  useEffect(() => {
    document.getElementById("wednesday").classList.toggle("hidden");
  }, [wednesday]);
  useEffect(() => {
    document.getElementById("thursday").classList.toggle("hidden");
  }, [thursday]);
  useEffect(() => {
    document.getElementById("friday").classList.toggle("hidden");
  }, [friday]);
  useEffect(() => {
    document.getElementById("saturday").classList.toggle("hidden");
  }, [saturday]);
  useEffect(() => {
    document.getElementById("sunday").classList.toggle("hidden");
  }, [sunday]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sentdata = {
      open_date,
      closing_date,
      lottery: lottery,
    };
    
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/lottery_time",
        data: sentdata,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("upload ", data);
    } catch (error) {
      console.log("request error ", error);
    }
    // await postAPI(method, url, sentdata);
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
        {/* monday */}
        <div
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
                  <div>
                    <h4 className="text-left  font-bold ml-10">
                      Time {index + 1}
                    </h4>
                    <div className="grid gap-6 mb-6 lg:grid-cols-3 ml-10">
                      <div>
                        <input
                          type="datetime-local"
                          name="omonday"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.name}
                          onChange={(event) => handleInputTime(index, event)}
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="cmonday"
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
        {/* tuesday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
          id="tuesday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Tuesday
            </h1>

            {addTimeTuesday.length > 0 && (
              <>
                {addTimeTuesday.map((field, index) => (
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
                          onChange={(event) =>
                            handleInputTimeTuesday(index, event)
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="close"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.description}
                          onChange={(event) =>
                            handleInputTimeTuesday(index, event)
                          }
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveTimeTuesday(index)}
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
              onClick={() => handleAddTimesTuesday()}
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Add time
            </button>
          </div>
        </div>
        {/* wednesday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
          id="wednesday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Wednesday
            </h1>

            {addTimeWednesday.length > 0 && (
              <>
                {addTimeWednesday.map((field, index) => (
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
                          onChange={(event) =>
                            handleInputTimeWednesday(index, event)
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="close"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.description}
                          onChange={(event) =>
                            handleInputTimeWednesday(index, event)
                          }
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveTimeWednesday(index)}
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
              onClick={() => handleAddTimesWednesday()}
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Add time
            </button>
          </div>
        </div>
        {/* thursday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
          id="thursday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Thursday
            </h1>

            {addTimeThursday.length > 0 && (
              <>
                {addTimeThursday.map((field, index) => (
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
                          onChange={(event) =>
                            handleInputTimeThursday(index, event)
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="close"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.description}
                          onChange={(event) =>
                            handleInputTimeThursday(index, event)
                          }
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveTimeThursday(index)}
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
              onClick={() => handleAddTimesThursday()}
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Add time
            </button>
          </div>
        </div>
        {/* friday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
          id="friday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Friday
            </h1>

            {addTimeFriday.length > 0 && (
              <>
                {addTimeFriday.map((field, index) => (
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
                          onChange={(event) =>
                            handleInputTimeFriday(index, event)
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="close"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.description}
                          onChange={(event) =>
                            handleInputTimeFriday(index, event)
                          }
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveTimeFriday(index)}
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
              onClick={() => handleAddTimesFriday()}
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Add time
            </button>
          </div>
        </div>
        {/* saturday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
          id="saturday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Saturday
            </h1>

            {addTimeSaturday.length > 0 && (
              <>
                {addTimeSaturday.map((field, index) => (
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
                          onChange={(event) =>
                            handleInputTimeSaturday(index, event)
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="close"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.description}
                          onChange={(event) =>
                            handleInputTimeSaturday(index, event)
                          }
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveTimeSaturday(index)}
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
              onClick={() => handleAddTimesSaturday()}
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Add time
            </button>
          </div>
        </div>
        {/* sunday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4"
          id="sunday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Sunday
            </h1>

            {addTimeSunday.length > 0 && (
              <>
                {addTimeSunday.map((field, index) => (
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
                          onChange={(event) =>
                            handleInputTimeSunday(index, event)
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="datetime-local"
                          name="close"
                          className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                          value={field.description}
                          onChange={(event) =>
                            handleInputTimeSunday(index, event)
                          }
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveTimeSunday(index)}
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
              onClick={() => handleAddTimesSunday()}
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Add time
            </button>
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

export default index;
