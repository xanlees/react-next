import React from "react";
const HistoryBuy = () => {
  return (
    <>
      <section className="antialiased px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="mx-auto font-bold text-4xl my-5">
            <h1>BUYING HISORY</h1>
          </div>
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 grid grid-cols-4">
              <div className=" text-gray-800 ">Bill ID: 123445</div>
              <div className="">LAO LOTTO</div>
              <div className="col-span-2 ">
                Time: Saturday, October 22, 2022
              </div>
            </header>
            <div>
              <table className="w-full text-left text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 uppercase dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                  <tr className="text-center text-lg">
                    <th
                      scope="col"
                      className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                    >
                      ປະເພດເລກ
                    </th>
                    <th scope="col" className="py-3 px-6 ">
                      ເລກ
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-gray-50 dark:bg-gray-800 "
                    >
                      ບົນ
                    </th>
                    <th scope="col" className="py-3 px-6  ">
                      ລ່າງ
                    </th>
                    <th scope="col" className="py-3 px-6  ">
                      ຜົນຫວຍ
                    </th>
                    <th scope="col" className="py-3 px-6  ">
                      ໄດ້ເສຍ
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      2 ໂຕ
                    </th>
                    <td className="py-4 px-6">10</td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                      ₭ 10,000
                    </td>
                    <td className="py-4 px-6">10,000</td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                      ຖືກ
                    </td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                      ₭ 10,000
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      ຕໍ່າ ສູງ
                    </th>
                    <td className="py-4 px-6"> ຕໍ່າ</td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                      ₭ 10,000
                    </td>
                    <td className="py-4 px-6">10,000</td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                      ບໍ່ຖືກ
                    </td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
              <div>Total</div>
              <div>10000</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HistoryBuy;
