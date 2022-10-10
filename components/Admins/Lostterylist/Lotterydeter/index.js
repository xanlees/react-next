import React from "react";
import { useRef } from "react";
import postAPI from "./util";

export default function index({ url, method }) {
  const form = useRef(null);

  const execRequest = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
  };
  return (
    <div>
      <div className=" py-20">
        <div className="mx-auto w-96 bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="text-center ">
              <h2 className="text-2xl font-sans font-phetsarath OT">
                ກຳນົດຜົນຫວຍ
              </h2>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              ref={form}
              action={url}
              method={method}
              onSubmit={execRequest}
            >
              <div className=" py-5">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ບົນ
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 w-80 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ເລກ:"
                  required=""
                />
              </div>
              <div className="">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ລ່າງ
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 w-80 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ເລກ:"
                  required=""
                />
              </div>
              <div className="py-10 relative translate-x-52">
                <button
                  type="submit"
                  className=" w-24 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
