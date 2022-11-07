import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { BsTelephone, BsPercent } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Set formate phone number
var phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username couldn't valid"),
    fullname: Yup.string()
      .required("Fullname couldn't valid")
      .min(4, "Fullname must be atleast 3 characters long..."),
    phone_number: Yup.string()
      .matches(phoneRegEx, "Phone number couldn't valid")
      .min(4, "Password must be at least 7 numbers"),
    commission: Yup.string().required("Commission couldn't valid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    password_repeat: Yup.string()
      .required("Repeat Password is required")
      .oneOf([Yup.ref("password")], "Repeat Passwords must match"),
  });

  // get functions to build form with useForm() hook
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => console.log("data", data);
  const [characters, setCharacters] = useState("");

  const hadleCreateUser = () => {
    let chars =
      "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let characters = "";
    let plength = Math.floor(Math.random() * 7) + 7;
    for (let index = 10; index < plength; index++) {
      characters += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log("New characters=>", characters);
    return setCharacters(characters);
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" flex justify-center items-center bg-white"
      >
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
                  name="username"
                  className="w-full border-0 focus:outline-0 form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                  id="name"
                  placeholder=":"
                  {...register("username")}
                  value={characters}
                />

                <button
                  type="button"
                  value="button"
                  onClick={hadleCreateUser}
                  className="w-full text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
          <p className="text-red-500">{errors.username?.message}</p>
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
          <p className="text-red-500">{errors.fullname?.message}</p>
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
                  {...register("phone_number")}
                />
              </div>
            </div>
          </div>
          <p className="text-red-500">{errors.phone_number?.message}</p>
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
          <p className="text-red-500">{errors.commission?.message}</p>
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
                  id="password"
                  placeholder=":  ******** "
                  {...register("password")}
                  className={`w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-00 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <p className="text-red-500"> {errors.password?.message}</p>
          {/* Input Confirm Password */}
          <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700 w-96 rounded-tr-lg rounded-tl-lg">
            <div className="w-96">
              <label htmlFor="password_repeat" className="mb-10">
                Confirm Password
              </label>
              <div className="flex">
                <RiLockPasswordLine className=" text-sky-400 mt-2 text-2xl mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  // className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
                  id="password_repeat"
                  placeholder=": ********"
                  {...register("password_repeat")}
                  className={`w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0 ${
                    errors.password_repeat ? "is-invalid" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <p className="text-red-500"> {errors.password_repeat?.message}</p>
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
            <input
              type="submit"
              className="bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default index;