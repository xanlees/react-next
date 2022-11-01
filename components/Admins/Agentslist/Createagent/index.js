import React from "react";
import { useState } from "react";
import { useRef } from "react";
import postAPI from "./util";
import { useNotification } from "@vechaiui/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function index(props, { url, method }) {
  const form = useRef(null);

  const execRequest = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
    console.log(result);
  };

  const user = props?.user;
  const [showPassword, setShowPassword] = useState(false);
  const isAddMode = !user;

  const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('username is required'),
    password: Yup.string()
        .transform(x => x === '' ? undefined : x)
        .concat(isAddMode ? Yup.string().required('Password is required') : null)
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .transform(x => x === '' ? undefined : x)
        .when('password', (password, schema) => {
            if (password || isAddMode) return schema.required('Confirm Password is required');
        })
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    commission: Yup.string()
        .required('commissions required'),
});
const formOptions = { resolver: yupResolver(validationSchema) };

if (!isAddMode) {
  const { password, confirmPassword, ...defaultValues } = user;
  formOptions.defaultValues = defaultValues;
}
function onSubmit(data) {
  return isAddMode
      ? createUser(data)
      : updateUser(user.id, data);
}
const { register, handleSubmit, reset, formState } = useForm(formOptions);
const { errors } = formState;

  const notification = useNotification();
  const handleMessage = (show) => {
    notification({
      title: "Crete Agent Successful",
      className:
        " bg-green-500 border-lg text-white h-full w-64 text-2xl font-extralight tracking-tight ",
      status: show,
      position: "top-right",
      duration: "900",
    });
  };
  return (
    <div>
      <>
        <div className="text-center mt-24">
          <h2 className="text-4xl font-sans font-semibold">
            Create a new agent
          </h2>
        </div>
        <form action={url} ref={form} method={method} onSubmit={execRequest}>
          <div className=" py-7">
            <div className="mx-auto w-full bg-gray-100 rounded-lg shadow d onSubmit = {handleSubmit(onSubmit)}ark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="py-1">
                  <button
                    type="submit"
                    className="w-full text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Generate Agent
                  </button>
                </div>

                <div className="py-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Agent: asadew233
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
                    {...register('username')} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required=""
                  />
                   <div className="invalid-feedback">{errors.username?.message}</div>
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
                    {...register('password')} 
                    // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="........."
                    required=""
                  />
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="">
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
                    {...register('confirmPassword')} 
                    placeholder=""
                    // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                </div>

                <div className="">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Commission
                  </label>
                  <input
                    type="float"
                    name="commission"
                    id="commission"
                    {...register('commission')} 
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <div className="invalid-feedback">{errors.commission?.message}</div>
                </div>
                <div className="">
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

                <div className="">
                  <label
                    htmlFor="is_staff"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Type
                  </label>
                  <div className="py-2">
                    <select
                      id="is_staff"
                      name="is_staff"
                      className=" rounded-lg hover:border-sky-500 "
                    >
                      <option value={true}>Agent</option>
                      <option value={false}>User</option>
                    </select>
                  </div>
                </div>

                <div className="py-2 relative translate-x-60">
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
