import React, { useState } from "react";
import SelectNumber from "./SelectNumber";
import { useSelector } from "react-redux";
const NumberModal = () => {
  const Select_Lottery_Number = useSelector(
    (state) => state.number_button.number
  );
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
                {/*body*/}
                <div className="">
                  <div className="mb-3 ml-8">3 Digit </div>
                  <div className="grid  grid-cols-8 space-3 text-center">
                    {Select_Lottery_Number.map((item, index) => {
                      return (
                        <SelectNumber
                          key={index}
                          lottery_number={item}
                          index={index}
                        />
                      );
                    })}
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
