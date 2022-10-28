import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
const NumberModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Enter Amount
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-white/99">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="grid grid-cols-2 gap-2 border-b-2 ">
                  <div className="text-3xl font-semibold ml-10">
                    Enter Amount
                  </div>
                  <div className="text-3xl font-semibold ">
                    Balance: 100,000 kip
                  </div>
                </div>

                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <div>3 Digit </div>
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="">
                  <div className="mb-3 ml-8">3 Digit </div>
                  <div className="grid  grid-cols-8 space-3 text-center">
                    <div className=" text-sm rounded-lg text-gray h-10 w-full pt-2">
                      # 1
                    </div>
                    <div className="bg-gray-900 border border-gray-300 text-sm rounded-lg text-white h-10 w-full pt-2">
                      911
                    </div>

                    <input
                      type="text"
                      className="pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                    <div className="pt-2 bg-gray-900 border border-gray-300 text-sm rounded-lg text-white h-10 w-full">
                      Multiple
                    </div>

                    <input
                      type="text"
                      className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                    <button className="mr-3">
                      <RiDeleteBin5Line className=" text-white text-sm rounded-lg  w-full bg-red-500 h-10 mr-5 mb-1" />
                    </button>
                  </div>
                  <div className="grid  grid-cols-8 space-3 text-center">
                    <div className=" text-sm rounded-lg text-gray h-10 w-full pt-2">
                      # 1
                    </div>
                    <div className="bg-gray-900 border border-gray-300 text-sm rounded-lg text-white h-10 w-full pt-2">
                      911
                    </div>

                    <input
                      type="text"
                      className="pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                    <div className="pt-2 bg-gray-900 border border-gray-300 text-sm rounded-lg text-white h-10 w-full">
                      Multiple
                    </div>

                    <input
                      type="text"
                      className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                    <button className="mr-3">
                      <RiDeleteBin5Line className=" text-white text-sm rounded-lg  w-full bg-red-500 h-10 mr-5" />
                    </button>
                  </div>
                </div>
                <div className="grid  grid-cols-4 space-3 text-center">
                  <input
                    type="text"
                    className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  />
                  <div className="grid grid-cols-4 grid-rows-2 gap-2">
                    <input
                      type="text"
                      className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                    <input
                      type="text"
                      className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                    <input
                      type="text"
                      className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                    <input
                      type="text"
                      className=" pt-2 col-span-2 w-full border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500  bg-sky-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm buy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default NumberModal;
