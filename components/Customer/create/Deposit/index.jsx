import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postAPI } from "./util"

import * as yup from "yup";

const schema = yup
  .object({
  })
  .required();

export default function index(props) {
  const url = props?.url;
  const user_id = props?.user_id

  const formOptions = { resolver: yupResolver(schema) };

  formOptions.defaultValues = {
    user: user_id,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    console.log(url)
    console.log(data);
    const result = await postAPI(url, data);
    
    console.log(result)

  };

  return (
    <>
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-gray-600 font-medium">Fullname</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("fullname")}
        />
        
        <label className="text-gray-600 font-medium">Phone Number</label>
        <input
          type="number"
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("phone_number")}
        />
        <p className="text-red-500"> {errors.password?.message}</p>
        <label className="text-gray-600 font-medium">Balance</label>
        <input
          type="number"
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("deposit_amount")}
        />
        <p className="text-red-500"> {errors.confirm_password?.message}</p>

        <input
          className="mt-4 w-full bg-blue-400 hover:bg-blue-600 text-blue-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        />
      </form>
    </>
  );
}
