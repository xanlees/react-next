import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import postAPI from "./util";

const status = [
  { id: 1, name: "Active" },
  { id: 2, name: "Block" },
];

export default function index({ url, method }) {
  const form = useRef(null);

  const execRequest = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
    console.log(result);
  };

  const [selected, setSelected] = useState(status[0]);
  const [query1, setQuery1] = useState("");

  const filteredstatus =
    query1 === ""
      ? status
      : status.filter((status) =>
          status.status
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query1.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div>
      <>
        <div className="text-center mt-24">
          <h2 className="text-4xl font-sans font-semibold">
            Create a new customer
          </h2>
        </div>
        <form action={url} ref={form} method={method} onSubmit={execRequest}>
          <div className=" py-7">
            <div className="mx-auto w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="py-1">
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Generate Customer
                  </button>
                </div>

                <div className="py-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Customer: asadew233
                  </label>
                </div>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required=""
                  />
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    htmlFor="deposit_amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Deposit Amount
                  </label>
                  <input
                    type="text"
                    name="deposit_amount"
                    id="deposit_amount"
                    placeholder="deposit_amount"
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

                <Combobox value={selected} onChange={setSelected}>
                  <div className=" mt-1">
                    <div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <Combobox.Input
                        name="is_active"
                        className=" w-full border-none py-2 text-sm leading-5 text-gray-900 focus:ring-0"
                        displayValue={(status) => status.name}
                        red
                        onChange={(event) => setQuery1(event.target.value)}
                      />
                      <Combobox.Button className=" py-2 -mx-7">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Combobox.Button>
                    </div>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                      afterLeave={() => setQuery1("")}
                    >
                      <Combobox.Options className="fixed w-full">
                        {query1.length > 0 && (
                          <Combobox.Option
                            value={{ id: null, name: query1 }}
                          ></Combobox.Option>
                        )}
                        {filteredstatus.map((status) => (
                          <Combobox.Option
                            key={status.id}
                            value={status}
                            className={({ active }) =>
                              ` relative bg-gray-200 cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? "bg-blue-400 text-white" : "text-black"
                              }`
                            }
                          >
                            {status.name}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>

                <div className="py-2 relative translate-x-60">
                  <button
                    type="submit"
                    className=" w-24 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    </div>
  );
}
