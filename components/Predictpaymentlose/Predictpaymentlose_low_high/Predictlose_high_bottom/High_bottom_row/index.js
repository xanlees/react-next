import React from "react";

const Highupperrow = (props) => {
  let { id, lottery_name, cost, win } = props;

  return (
    <>
      <tr>
        <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
        <h1 className=" text-center">{id}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 border border-solid border-black py-3 ">
        <h1 className=" text-center">{lottery_name}</h1>
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 border border-solid border-black py-3 ">
        <h1 className=" text-center">{cost}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center bg-blueGray-50 border border-solid border-black py-3 ">
        <h1 className=" text-center">{win}</h1>
        </td>
      </tr>
    </>
  );
};

export default Highupperrow;
