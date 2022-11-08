import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import postAPI from "./util";
var phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Account = (url, data) => {
  const validationSchema = yup.object().shape({
    // username: yup.string().required("Username couldn't valid"),
    // fullname: yup
    //   .string()
    //   .required("Fullname couldn't valid")
    //   .min(4, "Fullname must be atleast 3 characters long..."),
    // phone_number: yup
    //   .string()
    //   .matches(phoneRegEx, "Phone number couldn't valid")
    //   .min(4, "Password must be at least 7 numbers"),
    username: yup.string().required("Username couldn't valid"),
    password: yup.string().required("Username couldn't valid"),
    // password: yup.string().required("password couldn't valid"),
  });
  // get functions to build form with useForm() hook
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log(data);
    console.log("outer url", url);
    const result = postAPI(url, data);
    console.log(result);
  };

  return (
    <>
      <form action="">
        <div className="font-sans">
          <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
            <div className="relative sm:max-w-sm w-full">
              <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
              <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <div className="">
                  <div className="flex justify-center">
                    <BsPersonCircle className="text-7xl text-blue-500 items-center" />
                  </div>
                </div>
                <label
                  htmlFor
                  className="block mt-3 text-lg text-gray-700 text-center font-semibold"
                >
                  Create a new agent
                </label>
                <div className="mt-10">
                  {/* Input Username */}
                  <div>
                    <label htmlFor="username" className="ml-2">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="robert "
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      {...register("username")}
                    />
                  </div>
                  {/* Input Fullname */}
                  <div className="mt-7">
                    <label htmlFor="username" className="ml-2">
                      Fullname
                    </label>
                    <input
                      placeholder="John Downey Jr"
                      type="text"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      {...register("fullname")}
                    />
                  </div>
                  {/* Input Password */}
                  <div className="mt-7">
                    <label htmlFor="username" className="ml-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      {...register("password")}
                    />
                  </div>
                  {/* Input Password */}
                  <div className="mt-7">
                    <label htmlFor="username" className="ml-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      {...register("password")}
                    />
                  </div>
                  {/* Input select */}
                  <label
                    for="active"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-400 mt-7 ml-2"
                  >
                    Select an option
                  </label>
                  <select
                    id="active"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                  <div className="mt-7">
                    <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Registrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Account;
