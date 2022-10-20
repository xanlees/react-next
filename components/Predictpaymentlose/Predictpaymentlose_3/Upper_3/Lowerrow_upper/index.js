import React from "react";

const Lowerrow_upper = (props) => {
  let { id, number, sales, win } = props;

  return (
    <>
      <tr>
        <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
        <h1 className=" text-center">{id}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 border border-solid border-black py-3 ">
        <h1 className=" text-center">{number}</h1>
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 border border-solid border-black py-3 ">
        {/* <h1 className=" text-center">{sales}</h1> */}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 border border-solid border-black py-3 ">
        {/* <h1 className=" text-center">{win}</h1> */}
        </td>
      </tr>
    </>
  );
};

export default Lowerrow_upper;
