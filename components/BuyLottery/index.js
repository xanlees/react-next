import React from "react";
import BuyTwoNumber from "./BuyTwoNumber";

const index = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-indigo-50">
        <div className="border text-3xl p-8 bg-white w-fll">
          <div className="flex flex-cols">
            <button className="border p-2 bg-sky-600 text-white rounded-lg                  ">
              Black
            </button>
            <div className="ml-4 flex flex-cols">
              <img src="/lao.png" alt="lao lotto" className=" h-14 w-34" />
              <p className="ml-2 m-auto">Lao lotto</p>
              <p className="ml-2 m-auto">Instalments: 12/10/2022</p>
              <p className="ml-2 m-auto">
                Close:<span className="text-red-500">12:30:30</span>
              </p>
            </div>
          </div>
          <div className="flex flex-cols mt-3 ">
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              2 ໂຕ
            </button>

            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              3 ໂຕ
            </button>

            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              ຕໍ່າ/ສູງ
            </button>

            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              ຄູ່/ຄີກ
            </button>

            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              ວິງ
            </button>
          </div>
          <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2">
            ຊື່ແບບ A
          </button>
          <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2 mb-3">
            ຊື່ແບບ B
          </button>
          <BuyTwoNumber />
        </div>
      </div>
    </>
  );
};

export default index;
