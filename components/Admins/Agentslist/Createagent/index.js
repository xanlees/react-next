import React from "react";
import { useState } from "react";
<<<<<<< HEAD
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";

const status = [{ name: "Active" }, { name: "Block" }];
export default function index({url, method }) {
  const form = useRef(null);
  const execRequest = (e) => {
    console.log("ENTER");
    e.preventDefault();
    console.log(form.current);
    const formData = new FormData(form.current);

    const result = getAxios()[method](url, formData);
    console.log(result);
  };

  const [selected, setSelected] = useState(status[0]);
=======
import { useRef } from "react";
import postAPI from "./util";

export default function index({ url, method }) {
  const form = useRef(null);

  const execRequest = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
    console.log(result);
  };

  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    commission: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    commission: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        case "commission":
          if (!value) {
            stateObj[name] = "Please enter Deposit.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
>>>>>>> main

  return (
    <div>
      <>
        <div className="text-center mt-24">
          <h2 className="text-4xl font-sans font-semibold">
            Create a new agent
          </h2>
        </div>
<<<<<<< HEAD
        <form
          action={url}
          ref={form}
          method={method}
          onSubmit={execRequest}
          encType="multipart/form-data"
        >
=======
        <form action={url} ref={form} method={method} onSubmit={execRequest}>
>>>>>>> main
          <div className=" py-7">
            <div className="mx-auto w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="py-1">
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Generate Agent
                  </button>
                </div>

                <div className="py-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Agent: asadew233
                  </label>
                </div>

<<<<<<< HEAD
                <form>
                  <div>
                    <label
                      htmlFor="username"
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
                    />
                  </div>
                  <div className="py-4">
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
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Commission
                    </label>
                    <input
                      type="text"
                      name="commision"
                      id="commision"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div className="py-3">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Status
                    </label>
                  </div>

                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button
                       id="status"
                       name="status"
                       className="relative cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {status.map((status, statusIdx) => (
                            <Listbox.Option
                              key={statusIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-gray-400"
                                    : "text-gray-900"
                                }`
                              }
                              value={status}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {status.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>

                  <div className="py-2 relative translate-x-60">
                    <button
                      type="submit"
                      className=" w-24 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                      Save
                    </button>
                  </div>
                </form>
=======
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={input.username}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required=""
                  />
                  {error.username && (
                    <span className="err">{error.username}</span>
                  )}
                </div>

                <div>
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
                    value={input.password}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="........."
                    required=""
                  />
                  {error.password && (
                    <span className="err">{error.password}</span>
                  )}
                </div>
                <div className="">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={input.confirmPassword}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {error.confirmPassword && (
                    <span className="err">{error.confirmPassword}</span>
                  )}
                </div>

                <div className="">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Commission
                  </label>
                  <input
                    type="float"
                    name="commission"
                    id="commission"
                    value={input.commission}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {error.commission && (
                    <span className="err">{error.commission}</span>
                  )}
                </div>
                <div className="">
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

                <div className="py-2 relative translate-x-60">
                  <button
                    type="submit"
                    className=" w-24 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
>>>>>>> main
              </div>
            </div>
          </div>
        </form>
      </>
    </div>
  );
}
