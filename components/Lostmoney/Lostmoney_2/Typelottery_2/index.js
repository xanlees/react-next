import React from "react";
import Typelotryrow from './Typelotryrow'

export default function index({typelottery}) {
  if (!typelottery) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";

  const { results } = typelottery;
  return (
    <div>
      <>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-7/12 mb-12 xl:mb-0 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-2 max-w-full flex-1">
                    <h3 className=" align-middle transition-all duration-150 font-Saysettha OT text-base text-blueGray-700"></h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
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
                        ເງີນ
                      </th>
                      <th className="border-t-0 align-middle border-l-0 border-r-0 text-white text-xs whitespace-nowrap p-4 text-center border border-solid border-black py-3 ">
                        ງວດ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item) => {
                      return (
                        <Typelotryrow
                          name={item.name}
                          code={item.code}
                          opendate={item.open_date}
                          closingdate={item.closing_date}
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
