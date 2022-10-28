import React from "react";
import Totalpredictrow from "./Totalpredictrow";

export default function index({ totalpredict }) {
  if (!totalpredict) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";

  const { results } = totalpredict;
  return (
    <div>
      <>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-11/12 mb-12 xl:mb-0 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="block w-full overflow-x-auto">
                <div className="relative py-4 text-right">
                  <select
                    id="is_staff"
                    name="is_staff"
                    className=" w-40 h-10 rounded-lg hover:border-sky-500 "
                  >
                    <option value={true}> 3 ໂຕ </option>
                    <option value={false}> 2 ໂຕ </option>
                    <option value={false}> ຕໍ່າສູງ </option>
                    <option value={false}> ຄູ່/ຄີກ</option>
                    <option value={false}>ວິງ</option>
                  </select>
                </div>
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead className="bg-sky-500 ">
                    <tr>
                      <td className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ຊື່ຫວຍ
                      </td>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ຍອດຂາຍທັງຫມົດ
                      </th>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ຈຳນວນເງີນຊື້
                      </th>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ເງີນຖືກ
                      </th>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ງວດ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item) => {
                      return (
                        <Totalpredictrow
                          name={item.name}
                          date_open={item.period[0].date_open}
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
