import React from "react";
import Listcustomerrow from "./Listcustomerrow";

const Listcustomer = ({ listcustomer }) => {
  if (!listcustomer) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";

  const { results } = listcustomer;
  console.log(results);

  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-11/12 mb-12 xl:mb-0 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-2 max-w-full flex-1">
                  <h3 className=" align-middle transition-all duration-150 font-semibold text-base text-blueGray-700">
                    List of customer
                  </h3>
                </div>

                <div className="relative translate-x-full translate-y-1 w-full max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-sky-500 hover:bg-sky-700 hover:text-gray-500 hover:border-blue text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                    type="button"
                  >
                    Add
                  </button>
                </div>

                <div className="relative w-full max-w-full flex-grow flex-1 text-right -inset-x-28">
                  <>
                    <div className="pt-2 relative">
                      <label htmlFor="search">
                        <input
                          className="border-2 relative break-words border-gray-300 cursor-default overflow-hidden bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                          id="search"
                          type="text"
                          name="search"
                          placeholder="Search"
                        />

                        <button
                          type="submit"
                          className="absolute right-0 top-0 mt-5 mr-4"
                        >
                          <svg
                            className="text-gray-600 h-4 w-4 fill-current"
                            id="Capa_1"
                            viewBox="0 0 56.966 56.966"
                          >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                          </svg>
                        </button>
                      </label>
                    </div>
                  </>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead className="bg-sky-500">
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      Custommer
                    </th>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      Create on
                    </th>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      Balance
                    </th>
                    <th className="px-10 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      status
                    </th>
                    <th className="px-10 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left">
                      Deposit
                    </th>
                    <th className="px-10 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left">
                      Withdraw
                    </th>
                    <th className="px-10 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left">
                      ເບີ່ງປະຫວັດຫວຍ
                    </th>
                    <th className="px-10 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item) => {
                    return (
                      <Listcustomerrow
                        username={item.username}
                        date={item.date_joined}
                        is_active={item.is_active ? "Active" : "Inactive"}
                        deposit={item.deposit[0]?.deposit_amount}
                      />
                    );
                  })}
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

export default Listcustomer;
