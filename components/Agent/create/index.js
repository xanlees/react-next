import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { BsTelephone, BsPercent } from "react-icons/bs";
import { useForm } from "react-hook-form";

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-white">
          <div className="w-full my-2 md:w-4/5 lg:w-1/4">
            <div className="flex justify-center items-center ">
              <BsPersonCircle className="text-7xl text-sky-500" />
            </div>
            {/* Input Username */}
            <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700 w-96 rounded-tr-lg rounded-tl-lg">
              <div className="w-96">
                <label htmlFor="name" className="mb-10">
                  Usename
                </label>
                <div className="flex">
                  <AiOutlineUser className=" text-sky-400 mt-2 text-3xl mr-2" />

                  <input
                    type="text"
                    className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                    id="name"
                    placeholder=":"
                    {...register("username")}
                  />
                  <button className=" text-white bg-green-500 rounded-lg h-9 w-28">
                    Generate
                  </button>
                </div>
              </div>
            </div>
            {/* Input Fullname */}
            <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700 w-96 rounded-tr-lg rounded-tl-lg">
              <div className="w-96">
                <label htmlFor="fullname" className="mb-10">
                  Fullname
                </label>
                <div className="flex">
                  <CgUserList className=" text-sky-400 mt-2 text-2xl mr-2" />
                  <input
                    type="text"
                    className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                    id="fullname"
                    placeholder=":"
                    {...register("fullname")}
                  />
                </div>
              </div>
            </div>
            {/* Input Phone Number */}
            <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700 w-96 rounded-tr-lg rounded-tl-lg">
              <div className="w-96">
                <label htmlFor="phone_number" className="mb-10">
                  Phone Number
                </label>
                <div className="flex">
                  <BsTelephone className=" text-sky-400 mt-2 text-2xl mr-2" />
                  <input
                    type="text"
                    className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                    id="phone_number"
                    placeholder=": 20 x0000000"
                    {...register("phone_number", {
                      required: true,
                      minLength: 7,
                      maxLength: 12,
                    })}
                  />
                </div>
              </div>
            </div>
            {/* Input  Commission */}
            <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700 w-96 rounded-tr-lg rounded-tl-lg">
              <div className="w-96">
                <label htmlFor="commission" className="mb-10">
                  Commission
                </label>
                <div className="flex">
                  <BsPercent className=" text-sky-400 mt-2 text-2xl mr-2" />
                  <input
                    type="number"
                    className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                    id="commission"
                    placeholder=": "
                    {...register("commission")}
                  />
                </div>
              </div>
            </div>
            {/* Input Password */}
            <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700 w-96 rounded-tr-lg rounded-tl-lg">
              <div className="w-96">
                <label htmlFor="password" className="mb-10">
                  Password
                </label>
                <div className="flex">
                  <RiLockPasswordLine className=" text-sky-400 mt-2 text-2xl mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                    id="password"
                    placeholder=":  ******** "
                    {...register("password")}
                  />
                </div>
              </div>
            </div>
            {/* Input Confirm Password */}
            <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700 w-96 rounded-tr-lg rounded-tl-lg">
              <div className="w-96">
                <label htmlFor="confirm_password" className="mb-10">
                  Confirm Password
                </label>
                <div className="flex">
                  <RiLockPasswordLine className=" text-sky-400 mt-2 text-2xl mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                    id="confirm_password"
                    placeholder=": ********"
                  />
                </div>
              </div>
            </div>
            {/* Checkbox */}
            <div className="flex justify-left">
              <div className="ml-3">
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-600 checked:border-sky-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    onClick={() => setShowPassword(!showPassword)}
                    id="show_passord"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="show_passord"
                  >
                    {showPassword ? "Hide Password" : "Show Password"}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default index;
