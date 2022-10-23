import React, { useRef, useState } from "react";
import { NumericFormat } from "react-number-format";

const FormPrize = () => {
  const FormDataPrize = useRef(null);
  const execRequest = (e) => {
    e.preventDefault();
    const formData = new FormData(FormDataPrize.current);
    console.log("object", formData);
  const result = getAxios()[method](url, formData);

  return (
    <>
      <section className="antialiased px-4 mt-11">
        <div className="flex flex-col justify-center h-full">
          <div className=" m-auto">
            <div className="w-full max-w-xs">
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                // action={url}
                // ref={FormDataPrize}
                // method={method}
                onSubmit={execRequest}
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="top"
                  >
                    ເລກບົນ
                  </label>
                  <NumericFormat
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="top"
                    name="top"
                    placeholder="ເລກບົນ "
                    maxLength="6"
                    min="0"
                    onChange={handleChange}
                  />
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="buttom"
                  >
                    ເລກລ່າງ
                  </label>
                  <NumericFormat
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="buttom"
                    type="text"
                    placeholder="ເລກລ່າງ "
                    name="buttom"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormPrize;
