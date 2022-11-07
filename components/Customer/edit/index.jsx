import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { patchAPI } from "./util";

import * as yup from "yup";

const schema = yup.object({}).required();

export default function index({customer, url}) {
  const [enabled, setEnabled] = useState(true);

  const formOptions = { resolver: yupResolver(schema) };

  if (customer) {
    const { ...defaultValues } = customer;
    formOptions.defaultValues = defaultValues;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm(formOptions);

  

  const onSubmit = (data) => {
    console.log('outer url', url)
    const result = patchAPI(url, data);
  }


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
        <label className="text-gray-600 font-medium">Balance</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          disabled
          {...register("deposit[0].deposit_amount")}
        />
        <label className="text-gray-600 font-medium">Status</label>
        <div><label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            {...register("is_active")}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">
            {enabled ? "Active" : "Inactive"}
          </span>
        </label></div>
        
        

        <input
          className="mt-4 w-full bg-blue-400 hover:bg-blue-600 text-blue-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        />
      </form>
    </>
  );
}
