import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormFillDrawn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { data1 } = await axios({
        method: "PUT",
        url: "http://localhost:8000/api/v1/lottery_period",
        data: data,
        headers: { "Content-Type": "application/json" },
      });
      console.log("response upload", data1);
    } catch (error) {
      console.log("request error ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Fill is drawn number
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="shadow-sm -space-y-px">
              <div>
                <input
                  id="email-address"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                  placeholder="ເລກບົນ"
                  {...register("top")}
                />
              </div>
            </div>
            <div className="shadow-sm -space-y-px">
              <div>
                <input
                  id="email-address"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                  placeholder="ເລກລ່າງ"
                  {...register("bottom")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium  text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormFillDrawn;
