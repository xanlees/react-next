import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNotification } from "@vechaiui/react";

import * as yup from "yup";

const schema = yup
  .object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirm_password: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Confirm Passwords must match"),
  })
  .required();

export default function index(props) {
  const url = props?.url;

  const [enabled, setEnabled] = useState(true);

  const formOptions = { resolver: yupResolver(schema) };

  formOptions.defaultValues = {
    is_active: true,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm(formOptions);

  const notification = useNotification();
  const handleMessage = (show, title) => {
    notification({
      title: title,
      className:
        "bg-green-500 border-lg text-white h-full w-64 text-2xl font-extralight tracking-tight ",
      status: show,
      position: "top-right",
      duration: "900",
    });
  };

  const onSubmit = async (data) => {
    console.log(data);

    if (result.status == 200) {
      console.log("result.status", result);
      handleMessage("success", "Succesfully");
    }
  };

  return (
    <>
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-gray-600 font-medium">Username</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          disabled
          {...register("username")}
        />

        <label className="text-gray-600 font-medium">Fullname</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("deposit[0].fullname")}
        />
        <label className="text-gray-600 font-medium">Phone number</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("deposit[0].phone_number")}
        />
        
        <label className="text-gray-600 font-medium">Password</label>
        <input
          type="password"
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("password")}
        />
        <p className="text-red-500"> {errors.password?.message}</p>
        <label className="text-gray-600 font-medium">Confirm Password</label>
        <input
          type="password"
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("confirm_password")}
        />
        <p className="text-red-500"> {errors.confirm_password?.message}</p>


        <label className="text-gray-600 font-medium">Balance</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          disabled
          {...register("deposit[0].deposit_amount")}
        />

        <input
          className="mt-4 w-full bg-blue-400 hover:bg-blue-600 text-blue-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        />
      </form>
    </>
  );
}
