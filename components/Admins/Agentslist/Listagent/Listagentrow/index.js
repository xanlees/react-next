import React from "react";
import { IoMdCreate } from "react-icons/io";
import Link from 'next/link';

const index = (props) => {

  let {username, is_active, commission} = props

  return (
    <>
      <tr>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{username}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{is_active}</h1>
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{commission}</h1>
        </td>
        <td className="border-t-0 text-sky-500 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
            <IoMdCreate className=" w-6 h-6" />
        </td>
      </tr>
      
    </>
  );
};

export default index;
