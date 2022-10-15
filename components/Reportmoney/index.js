import React from "react";
import Moneyreport from "./Moneyreport";

const Soldout = ({ soldout }) => {
  // if (!soldout) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";

  // const { results } = soldout;

  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-11/12 mb-12 xl:mb-0 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0"></div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead className="bg-blue-500">
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ຫວຍ
                      </button>
                    </th>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ຍອດຂາຍ
                      </button>
                    </th>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ຈຳນວນເງີນຄົນຊື້
                      </button>
                    </th>

                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ຈຳນວນຄົນຖືກ
                      </button>
                    </th>

                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ວັນເດືອນປີ
                      </button>
                    </th>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ເວລາ
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {results.map((item) => {
                    return (
                      <Moneyreport
                        username={item.username}
                        is_active={item.is_active ? "Active" : "Inactive"}
                        // commission={item.commission[0].commission}
                      />
                    );
                  })} */}
                </tbody>
              </table>
            </div>
            <div className=" flex flex-col py-5">
              <ul className="flex justify-end items-center">
                <li>
                  <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="flex text-sky-500 hover:bg-sky-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out rounded px-3 py-2 focus:outline-none">
                    1
                  </span>
                </li>
                <li>
                  <span className="flex text-sky-500 hover:bg-sky-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out rounded px-3 py-2 focus:outline-none">
                    2
                  </span>
                </li>
                <li>
                  <span className="flex text-sky-500 hover:bg-sky-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out rounded px-3 py-2 focus:outline-none">
                    3
                  </span>
                </li>
                <li>
                  <span className="flex text-sky-500 hover:bg-sky-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out rounded px-3 py-2 focus:outline-none">
                    4
                  </span>
                </li>
                <li>
                  <span className="flex text-sky-500 hover:bg-sky-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out rounded px-3 py-2 focus:outline-none">
                    5
                  </span>
                </li>
                <li>
                  <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Soldout;
