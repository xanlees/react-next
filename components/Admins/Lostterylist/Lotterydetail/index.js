import React from "react";

const Lotterydetail = ({ lotterydetail }) => {
  if (!lotterydetail) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";

  const { agent, status, commision } = lotterydetail;
  return (
    <div>
      <>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-96 mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0"></div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead className="bg-blue-500">
                    <tr>
                      <th className="px-6 w-11 bg-blueGray-50 text-blueGray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right"></th>
                      <th className="px-6 w-20 bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        ລາຍລະອຽດ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
                      <td className="border-t-0 border-l-0 border-r-10 border border-solid border-black text-xs whitespace-nowrap p-4 text-left ">
                        ຊື່
                      </td>
                      <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        Lao lottery
                      </td>
                    </tr>
                    <tr className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
                      <td className="border-t-0 border-l-0 border-r-10 border border-solid border-black text-xs whitespace-nowrap p-4 text-left ">
                        Code
                      </td>
                      <td className="border-r-0 text-xs whitespace-nowrap p-4">
                        U001
                      </td>
                    </tr>
                    <tr className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3">
                      <td className="border-r-10 border border-solid border-black text-xs whitespace-nowrap p-4 text-left ">
                        Close
                      </td>
                      <td className="border-r-10 text-xs whitespace-nowrap p-4">
                        13/09/2022 12:30
                      </td>
                    </tr>
                    <tr className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3">
                      <td className="border-r-10 border border-solid border-black text-xs whitespace-nowrap p-4 text-left ">
                        Open
                      </td>
                      <td className="border-r-10 text-xs whitespace-nowrap p-4">
                        13/09/2022 1:30
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Lotterydetail;