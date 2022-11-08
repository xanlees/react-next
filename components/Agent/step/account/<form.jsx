<form
  onSubmit={handleSubmit(onSubmit)}
  className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
>
  <div className="space-y-6">
    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
      Create a new agent
    </h5>
    <div className="">
      <div className="flex justify-center">
        <BsPersonCircle className="text-7xl text-sky-500 items-center" />
      </div>
    </div>
    {/* Input Username */}
    <div className="">
      <div className=" ml-2">Username</div>
      <div className="flex my-2 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700  w-80 rounded-tr-lg rounded-tl-lg">
        <label
          htmlFor="Username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <AiOutlineUser className=" text-sky-400 mt-2 text-3xl mr-2" />
        </label>
        <input
          type="Username"
          name="username"
          id="Username"
          placeholder="••••••••"
          className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
          {...register("username")}
        />
      </div>
    </div>
    <p className="text-red-500">{errors.username?.message}</p>
    {/* Input Fullname */}
    <div className="">
      <div className=" ml-2">Fullname</div>
      <div className="flex my-2 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700  w-80 rounded-tr-lg rounded-tl-lg">
        <label
          htmlFor="fullname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <AiOutlineUser className=" text-sky-400 mt-2 text-3xl mr-2" />
        </label>
        <input
          {...register("fullname")}
          type="fullname"
          name="fullname"
          id="fullname"
          placeholder="••••••••"
          className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
        />
      </div>
    </div>
    <p className="text-red-500">{errors.fullname?.message}</p>
    {/* Input Phone number */}
    <div className="">
      <div className=" ml-2">password</div>
      <div className="flex my-2 md:mx-2 border-b-2 border-sky-600 hover:border-sky-700  w-80 rounded-tr-lg rounded-tl-lg">
        <label
          htmlFor="phone_number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <AiOutlineUser className=" text-sky-400 mt-2 text-3xl mr-2" />
        </label>
        <input
          {...register("password")}
          type="phone_number"
          name="phone_number"
          id="phone_number"
          placeholder="••••••••"
          className="w-full border-0 focus:outline-none  form-control text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-tr-lg rounded-tl-lg transition ease-in-out m-0"
        />
      </div>
    </div>
    <p className="text-red-500">{errors.password?.message}</p>
    <select hidden {...register("is_staff")}>
      <option value={true}>Agent</option>
    </select>
    <label
      for="active"
      class="block text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      Select an option
    </label>
    <select
      id="active"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value={true}>Active</option>
      <option value={false}>Inactive</option>
    </select>
  </div>
  <button type="submit">save</button>
</form>;
