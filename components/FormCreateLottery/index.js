import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormCreateLottery = () => {
  const [active, setActive] = useState(0);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      lotteryName: "",
      lastName: "",
      category: "",
      language: "",
      file: "",
    },
  });
  // const [picture, setPicture] = useState(null);

  // const onChangePicture = (e) => {
  //   setPicture(URL.createObjectURL(e.target.files[0]));
  // };
  return (
    <div>
      <form encType="multipart/form-data">
        {/* Set language */}
        <div className="max-w-lg  bg-gray-100  shadow-2xl mx-auto text-center">
          <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
            Set language
          </h1>
          <div className="container py-2 max-w-md mx-auto flex flex-col-2 justify-center">
            <div className="bg-gray-200 text-lg  p-1 rounded-md">
              <input
                {...register("language")}
                id="en"
                type="radio"
                name="language"
                value="en"
                className="peer hidden"
                defaultChecked
              />
              <label
                className={`block cursor-pointer select-none rounded-xl p-3 text-center dark:text-white  peer-checked:bg-sky-500 peer-checked:font-bold peer-checked:text-white${
                  active === 1 ? "bg-sky-400 rounded-lg" : ""
                } dark:text-white px-1 py-1 hover:bg-sky-400 hover:rounded-lg`}
                onClick={() => setActive(1)}
                htmlFor="en"
              >
                English
              </label>
            </div>

            <div className="bg-gray-200 ml-5 text-lg p-1 rounded-md">
              <input
                {...register("language")}
                type="radio"
                name="language"
                value="la"
                className="peer hidden"
                id="la"
              />
              <label
                className={`block cursor-pointer select-none rounded-xl p-3 text-center dark:text-white  peer-checked:bg-sky-500 peer-checked:font-bold peer-checked:text-white${
                  active === 2 ? "bg-sky-400 rounded-lg" : ""
                } px-1 py-1 hover:bg-sky-400 hover:rounded-lg`}
                onClick={() => setActive(2)}
                htmlFor="la"
              >
                Lao
              </label>
            </div>
          </div>
        </div>
        {/* Set lottery info */}
        <div className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
          <div className="mx-5">
            <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
              Set Lottery
            </h1>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="lotteryName"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Lottery Name
                </label>

                <input
                  {...register("lotteryName", { required: true })}
                  placeholder="lotteryName"
                  type="text"
                  id="lotteryName"
                  name="lotteryName"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                />
              </div>
              <div>
                <label
                  htmlFor="codeName"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
                >
                  Code name
                </label>
                <input
                  {...register("codeName", { required: true })}
                  placeholder="codeName"
                  type="text"
                  id="codeName"
                  name="codeName"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium dark:text-gray-900 text-left"
              >
                Image
              </label>
              <input
                type="file"
                id="password"
                className="border border-gray-300 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-100 block w-full p-2.5 bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400 dark:focus:border-sky-400"
              />
            </div>
          </div>
        </div>
        <div className="max-w-lg m-auto text-center py-5 mt-4 ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCreateLottery;
// import * as React from "react";
// import { useForm } from "react-hook-form";

// export default function FormCreateLottery() {
//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       category: "",
//       checkbox: [],
//       radio: "",
//     },
//   });
//   const convert = JSON.stringify(handleSubmit);
//   console.log(convert);

//   return (
//     <form onSubmit={handleSubmit(console.log)}>
//       <input
//         {...register("firstName", { required: true })}
//         placeholder="First name"
//       />

//       <input
//         {...register("lastName", { minLength: 2 })}
//         placeholder="Last name"
//       />

//       <select {...register("category")}>
//         <option value="">Select...</option>
//         <option value="A">Category A</option>
//         <option value="B">Category B</option>
//       </select>

//       <input {...register("checkbox")} type="checkbox" value="A" />
//       <input {...register("checkbox")} type="checkbox" value="B" />
//       <input {...register("checkbox")} type="checkbox" value="C" />

//       <input {...register("radio")} type="radio" value="A" />
//       <input {...register("radio")} type="radio" value="B" />
//       <input {...register("radio")} type="radio" value="C" />

//       <input type="submit" />
//     </form>
//   );
// }
