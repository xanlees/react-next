import React, { useState } from "react";
import postAPI from "./util";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = ({ url, method }) => {
  const [active, setActive] = useState(0);
  const [language, setLanguage] = useState("en");
  const [image, setImage] = useState("");
  const [code, setCode] = useState("");
  const [group, setGroup] = useState({
    name: "",
  });

  const handleChangeTrans = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };
  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const onFileChange = (e) => setImage(e.target.files[0]);

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
      image,
      code,
      user: 1,
    };

    const result = await postAPI(method, url, sentdata);
    console.log(result);
    // toast.success(result.status.code);
    return result.status.code;
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        {/* Set language */}
        <div className="max-w-lg  bg-gray-100  shadow-2xl mx-auto text-center">
          <h1 className="text-gray-900">Language</h1>
          <div className="container py-2 max-w-md mx-auto flex flex-col-2 justify-center">
            <div className="bg-gray-200 text-lg  p-1 rounded-md">
              <input
                id="en"
                type="radio"
                name="language"
                value="en"
                onChange={handleChangeLanguage}
                className="peer hidden"
                defaultChecked
              />
              <label
                className={`block cursor-pointer select-none rounded-xl p-3 text-center dark:text-white  peer-checked:bg-sky-500 peer-checked:font-bold peer-checked:text-white${
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
                value="la"
                className="peer hidden"
                id="la"
                onChange={handleChangeLanguage}
              />
              <label
                className={`block cursor-pointer select-none rounded-xl p-3 text-center dark:text-white  peer-checked:bg-sky-500 peer-checked:font-bold peer-checked:text-white${
                  active === 2 ? "bg-sky-400 rounded-lg" : ""
                } px-1 py-1 hover:bg-sky-400 hover:rounded-lg`}
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
                  name="name"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  onChange={(e) => handleChangeTrans(e)}
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
                  name="code"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  onChange={(e) => setCode(e.target.value)}
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
      {/* <ToastContainer /> */}
    </>
  );
};

export default index;
