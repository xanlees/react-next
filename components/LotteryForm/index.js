import React, { useState, useEffect } from "react";

const Monday = {
  tuesday: false,
};
const Tuesday = {
  tuesday: false,
};
const Wednesday = {
  tuesday: false,
};
const Thursday = {
  tuesday: false,
};
const Friday = {
  tuesday: false,
};
const Saturday = {
  tuesday: false,
};
const Sunday = {
  tuesday: false,
};

const index = () => {
  const [monday, setMonday] = useState(Monday);
  const [tuesday, setTuesday] = useState(Tuesday);
  const [wednesday, setWednesday] = useState(Wednesday);
  const [thursday, setThursday] = useState(Thursday);
  const [friday, setFriday] = useState(Friday);
  const [saturday, setSaturday] = useState(Saturday);
  const [sunday, setSunday] = useState(Sunday);
  const [addTime, setAddTime] = useState([{}]);
  const [active, setActive] = useState(0);
  const [language, setLanguage] = useState("en");
  const [dateOpen, setDateOpen] = useState("");
  const [dateClose, setDateClose] = useState("");
  const [image, setImage] = useState("");
  const [group, setGroup] = useState({
    name: "Thai",
  });

  const handleChangeTrans = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleChangeDateOpen = (e) => {
    setDateOpen(e.target.value);
  };

  const handleChangeDateClose = (e) => {
    setDateClose(e.target.value);
  };

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const onFileChange = (e) => setImage(e.target.files[0]);

  const handleAddTimes = () => {
    const values = [...addTime];
    values.push({});
    setAddTime(values);
  };

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
    let translations = [];
    if (language === "la") {
      translations = {
        la: group,
      };
    } else {
      translations = {
        en: group,
      };
    }

    translations = JSON.stringify(translations);

    const sentdata = {
      translations,
      image: image,
      open_date: dateOpen,
      closing_date: dateClose,
      user: 1,
    };

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Set language */}
        <div className="max-w-lg  bg-gray-100  shadow-2xl rounded-lg mx-auto text-center py-2 ">
          <h1 className="text-gray-900 text-center font-extrabold text-3xl">
            Language
          </h1>
          <div className="container py-2 max-w-md mx-auto flex flex-col-2 justify-center">
            <div className="bg-gray-200 text-lg  p-1 rounded-md">
              <input
                id="en"
                type="radio"
                name="language"
                value="en"
                onChange={handleChangeLanguage}
                className="peer hidden"
              />
              <label
                className={`block cursor-pointer select-none rounded-xl p-3 text-center peer-checked:bg-sky-500 peer-checked:font-bold peer-checked:text-white${
                  active === 1 ? "bg-sky-400 rounded-lg" : ""
                } dark:text-white px-1 py-1 hover:bg-sky-400 hover:rounded-lg`}
                onClick={() => setActive(1)}
                htmlFor="en"
              >
                English
              </label>
            </div>
            <div className="bg-gray-200 ml-5 text-lg p-1 rounded-md">
              <input
                type="radio"
                name="language"
                value="en"
                className="peer hidden"
                id="la"
                onChange={handleChangeLanguage}
              />
              <label
                className={`block cursor-pointer select-none rounded-xl p-3 text-center peer-checked:bg-sky-500 peer-checked:font-bold peer-checked:text-white${
                  active === 2 ? "bg-sky-400 rounded-lg" : ""
                } dark:text-white px-1 py-1 hover:bg-sky-400 hover:rounded-lg`}
                onClick={() => setActive(2)}
                htmlFor="la"
              >
                Lao
              </label>
            </div>
          </div>
        </div>
        {/* Set lottery info */}
        <div className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Set Lottery
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="lottery_name"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Lottery Name
                </label>
                <input
                  type="text"
                  id="lottery_name"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  onChange={handleChangeTrans}
                />
              </div>
              <div>
                <label
                  htmlFor="code_name"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Code name
                </label>
                <input
                  type="text"
                  id="code_name"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
              >
                Image
              </label>
              <input
                type="file"
                id="password"
                className="border border-gray-300 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-100 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400 dark:focus:border-sky-400"
                required
                onChange={onFileChange}
              />
            </div>
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Day and Time
            </h1>
            <div className="grid grid-cols-6 gap-1">
              <input
                type="checkbox"
                className="text-1xl"
                onChange={() => {
                  setMonday(!monday);
                }}
              />
              <label htmlFor="" className=" items-start">
                Monday
              </label>
              <input
                type="checkbox"
                className="text-1xl item-end"
                onChange={() => {
                  setTuesday(!tuesday);
                }}
              />
              <label htmlFor="" className="text-start">
                Tuesday
              </label>
              <input
                type="checkbox"
                className="text-1xl"
                onChange={() => {
                  setWednesday(!wednesday);
                }}
              />
              <label htmlFor="" className="text-start">
                Wednesday
              </label>
              <input
                type="checkbox"
                className="text-1xl"
                onChange={() => {
                  setThursday(!Thursday);
                }}
              />
              <label htmlFor="" className="text-start">
                Thursday
              </label>
              <input
                type="checkbox"
                className="text-1xl"
                onChange={() => {
                  setFriday(!friday);
                }}
              />
              <label htmlFor="" className="text-start">
                Friday
              </label>
              <input
                type="checkbox"
                className="text-1xl"
                onChange={() => {
                  setSaturday(!saturday);
                }}
              />
              <label htmlFor="" className="text-start">
                Saturday
              </label>
              <input
                type="checkbox"
                className="text-1xl bg-sky"
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
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
          id="monday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Monday
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="time_open"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Set time to open
                </label>
                <input
                  type="datetime-local"
                  id="time_open"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateOpen(e)}
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
                  type="datetime-local"
                  id="phone"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateClose(e)}
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <button
                  className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleAddTimes()}
                >
                  + Add Time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* tuesday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
          id="tuesday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Tuesday
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="time_open"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Set time to open
                </label>
                <input
                  type="datetime-local"
                  id="time_open"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateOpen(e)}
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
                  type="datetime-local"
                  id="phone"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateClose(e)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* wednesday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
          id="wednesday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Wednesday
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="time_open"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Set time to open
                </label>
                <input
                  type="datetime-local"
                  id="time_open"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateOpen(e)}
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
                  type="datetime-local"
                  id="phone"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateClose(e)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* thursday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
          id="thursday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Thursday
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="time_open"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Set time to open
                </label>
                <input
                  type="datetime-local"
                  id="time_open"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateOpen(e)}
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
                  type="datetime-local"
                  id="phone"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateClose(e)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* friday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
          id="friday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Friday
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="time_open"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Set time to open
                </label>
                <input
                  type="datetime-local"
                  id="time_open"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateOpen(e)}
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
                  type="datetime-local"
                  id="phone"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateClose(e)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* saturday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
          id="saturday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Saturday
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="time_open"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Set time to open
                </label>
                <input
                  type="datetime-local"
                  id="time_open"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateOpen(e)}
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
                  type="datetime-local"
                  id="phone"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateClose(e)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* sunday */}
        <div
          className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 "
          id="sunday"
        >
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Sunday
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="time_open"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Set time to open
                </label>
                <input
                  type="datetime-local"
                  id="time_open"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateOpen(e)}
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
                  type="datetime-local"
                  id="phone"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  required
                  onChange={(e) => handleChangeDateClose(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg m-auto text-center py-5 mt-4 ">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default index;
