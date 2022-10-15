import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import UI from "./UI";

const index = () => {
  const [addNumber, setNumber] = useState([{ top: "", bottom: "" }]);
  const handleAddNummber = () => {
    const values = [...addNumber];
    values.push({
      top: "",
      bottom: "",
    });
    setNumber(values);
  };
  const handleRemoveNumber = (index) => {
    const values = [...addNumber];
    values.splice(index, 1);
    setNumber(values);
  };
  const handleInputNumber = (index, event) => {
    const values = [...addNumber];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setNumber(values);
  };

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
          {/* OPTION */}
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
          {/* INPUT */}
          <UI />
          {/* <div className="flex flex-cols mt-3 ">
            <div className="mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-2xl font-bold mb-2"
                  htmlFor="grid"
                >
                  Number
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-3 mb-2"
                  id="grid"
                  type="number"
                  placeholder="Your Number"
                  min={0}
                />
              </div>
            </div>
            <div className="mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-2xl font-bold mb-2"
                  htmlFor="grid"
                >
                  Top
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-3 mb-2 text-end"
                  id="grid"
                  type="number"
                  placeholder="LAK"
                />
              </div>
            </div>
            <div className="mx-3 md:flex mb-6 ">
              <div className="md:w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-2xl font-bold mb-2"
                  htmlFor="grid"
                >
                  Buttom
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-3 mb-2 text-end"
                  id="grid"
                  type="number"
                  placeholder="LAK"
                />
              </div>
            </div>
          </div> */}
          {/* BUTTON */}
          {/* <div className="flex flex-cols mt-3 ">
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              Random
            </button>
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              Add
            </button>
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2">
              Buy
            </button>
          </div> */}
          {/* BILL */}
          {/* <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center flex-col">
                        <p className=" text-start">2</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-3">2</p>
                        <p className="w-3">X</p>
                        <p className="w-3">2</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-3">2</p>
                        <p className="w-3"></p>
                        <p className="w-3">2</p>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:scale-110">
                          <FiEdit className="text-sky-600" />
                        </div>
                        <div className="w-4 mr-2 transform hover:scale-110">
                          <BsTrash className="text-red-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default index;
