import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function index(url, method) {
  const form = useRef(null);
  const execRequest = (e) => {
    console.log("ENTER");
    e.preventDefault();
    console.log(form.current);
    const formData = new FormData(form.current);

    const result = getAxios()[method](url, formData);
    console.log(result);
  };

  const [input, setInput] = useState([{}]);
  const [data, setData] = useState([]);

  function handleChange(i, e) {
    e.preventDefault();

    setInput([
      {
        id: i,
        value: e.target.value,
      },
    ]);
  }

  function handleAddInput() {
    const values = [...input];
    values.push({ value: null });
    setInput(values);
  }

  const handleSave = () => {
    let value = input?.map((item) => {
      return item.value;
    });
    if (!value || /^\s*$/.test(value)) {
      return;
    }

    const newData = [...data, ...input];

    setData(newData);

    setInput([]);
  };

  return (
    <div>
      <>
        <div className="text-center mt-24">
          <h2 className="text-4xl font-sans font-semibold">Edit Customer</h2>
        </div>
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
                <div className="py-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Customer: asadew233
                  </label>
                </div>

                <form>
                  {input?.map((input, idx) => {
                    return (
                      <div key={input.id}>
                        <label
                          htmlFor="username"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required=""
                          onChange={(e) => handleChange(idx, e)}
                          value={input.value}
                        />
                      </div>
                    );
                  })}

                  {input?.map((input, idx) => {
                    return (
                      <div key={input.id}>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required=""
                          onChange={(e) => handleChange(idx, e)}
                          value={input.value}
                        />
                      </div>
                    );
                  })}
                  {input?.map((input, idx) => {
                    return (
                      <div className="py-4" key={input.id}>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirm_password"
                          id="confirm_password"
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                          onChange={(e) => handleChange(idx, e)}
                          value={input.value}
                        />
                      </div>
                    );
                  })}
                  {input?.map((input, idx) => {
                    return (
                      <div className="" key={input.id}>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Deposit Amount
                        </label>
                        <input
                          type="text"
                          name="commision"
                          id="commision"
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                          onChange={(e) => handleChange(idx, e)}
                          value={input.value}
                        />
                      </div>
                    );
                  })}
                  {input?.map((input, idx) => {
                    return (
                      <div className="py-3" key={input.id}>
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
                    );
                  })}

                  <div className="py-2 relative translate-x-60">
                    <button
                      type="submit"
                      onClick={handleSave}
                      className=" btn w-24 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
      </>
    </div>
  );
}
