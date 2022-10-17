import React from "react";
import { useRef } from "react";
import postAPI from "./util";


const Edits = ({
  url,
  method,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const form = useRef(null);

  const execRequest = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
    console.log(result);
  };

  return (
    <div>
      <>
        <form
          action={url}
          ref={form}
          method={method}
          onSubmit={execRequest}
          encType="multipart/form-data"
        >
          <div className=" py-7">
            <div className="mx-auto w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="py-2">
                  <label
                    for="username"
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    value={editFormData.username}
                    onChange={handleEditFormChange}
                  />
                </div>

                <div className="py-2">
                  <label
                    htmlFor="date_joined"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Create
                  </label>
                  <input
                    type="text"
                    name="date_joined"
                    id="date_joined"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                    value={editFormData.date_joined}
                    onChange={handleEditFormChange}
                  />
                </div>

                <div className="py-2">
                  <label
                    htmlFor="deposit_amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Balance
                  </label>
                  <input
                    type="text"
                    name="deposit_amount"
                    id="deposit_amount"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={editFormData.deposit_amount}
                    onChange={handleEditFormChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="is_active"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Status
                  </label>
                  <div className="py-2">
                    <select
                      id="is_active"
                      name="is_active"
                      className=" rounded-lg hover:border-sky-500 "
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="is_staff"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Type
                  </label>
                  <div className="py-2">
                    <select
                      id="is_staff"
                      name="is_staff"
                      className=" rounded-lg hover:border-sky-500 "
                    >
                      <option value={true}>Agent</option>
                      <option value={false}>User</option>
                    </select>
                  </div>
                </div>

                <div className="py-2">
                  <button
                    type="submit"
                    className="w-24 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={handleCancelClick}
                    className="w-24 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};
export default Edits;
