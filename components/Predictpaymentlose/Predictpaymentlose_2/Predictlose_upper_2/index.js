import React from "react";
import Upperrow from "./Upperrow";

export default function index({ upper }) {
  if (!upper) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";
  const { results } = upper;

  return (
    <div>
      <>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-full mb-96 xl:mb-0 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-2 max-w-full flex-1">
                    <h3 className=" align-middle transition-all duration-150 font-Saysettha OT text-base text-blueGray-700">
                      ເລກບົນ 2
                    </h3>
                  </div>
                  <div className="relative flex-grow flex-1 text-right">
                    <div className="pt-2 relative mx-auto transition-all duration-150">
                      <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead className="bg-sky-500 ">
                    <tr>
                      <td className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ID
                      </td>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ເລກບົນ
                      </th>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ຈຳນວນຂາຍ
                      </th>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ຖືກ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item) => {
                      return (
                        <Upperrow
                          id={item.id}
                          number={item.number}
                          sales={item.sales}
                          win={item.win}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
