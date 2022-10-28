import React from "react";
import { useState } from "react";
import { useRef } from "react";
import postAPI from "./util";
import { useNotification } from "@vechaiui/react";


export default function index({ url, method }) {
  const form = useRef(null);

  const execRequest = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
    console.log(result);
  };

  const notification = useNotification();
  const handleMessage = (show) => {
    notification({
      title: "Crete Customer Successful",
      className:
        " bg-green-500 border-lg text-white h-full w-64 text-2xl font-extralight tracking-tight ",
      status: show,
      position: "top-right",
      duration: "900",
    });
  };


  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    deposit_amount: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    deposit_amount: "",
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
            stateObj[name] = "ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "ກະລຸນາປ້ອນລະຫັດຜ່ານ.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "ຢືນຢັນລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "ກະລຸນາປ້ອນລະຫັດຢືນຢັນ.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "ຢືນຢັນລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ.";
          }
          break;

        case "deposit_amount":
          if (!value) {
            stateObj[name] = "ກະລຸນາປ້ອນເງີນຝາກ.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });


  };
  

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
                    className="w-full text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
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
                    placeholder="••••••••"
                    value={input.password}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {error.password && (
                    <span className="err">{error.password}</span>
                  )}
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
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder=""
                    value={input.confirmPassword}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {error.confirmPassword && (
                    <span className="err">{error.confirmPassword}</span>
                  )}
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
                    value={input.deposit_amount}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {error.deposit_amount && (
                    <span className="err">{error.deposit_amount}</span>
                  )}
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
                <div className="py-2 relative translate-x-60 ">
                  <button
                    type="submit"
                    onClick={() => handleMessage()}
                    className=" w-24 text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
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
