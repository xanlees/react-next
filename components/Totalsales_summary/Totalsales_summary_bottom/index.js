import React from "react";
import Totalsales_top_Row from "./Totalsales_top_Row";

const Totalsales_summary_bottom = ({ totalsales_summary_bottom }) => {
  if (!totalsales_summary_bottom) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";

  const { results } = totalsales_summary_bottom;

  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-11/12 mb-12 xl:mb-0 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="relative w-full px-2 max-w-full flex-1">
              <h3 className=" align-middle transition-all duration-150 text-base text-blueGray-700">
                ລ່າງ
              </h3>
            </div>
            <div className="">
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead className="bg-sky-500">
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ລ່າງ
                      </button>
                    </th>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ຈຳນວນຊື້
                      </button>
                    </th>
                    <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-center">
                      <button
                        className=" text-white active:bg-blue-600 font-bold px-7 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                        type="button"
                      >
                        ຈຳນວນຈ່າຍ
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item) => {
                    return (
                      <Totalsales_top_Row
                        username={item.username}
                        is_active={item.is_active ? "Active" : "Inactive"}
                        // commission={item.commission[0].commission}
                      />
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Totalsales_summary_bottom;
