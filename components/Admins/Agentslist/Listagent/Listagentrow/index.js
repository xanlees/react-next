import React from "react";
import { IoMdCreate } from "react-icons/io";

const index = (props) => {

<<<<<<< HEAD
  let {agent, agentStatus, commision} = props
=======
  let {username, is_active, commission} = props
>>>>>>> main

  return (
    <>
      <tr>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
<<<<<<< HEAD
          <h1 className=" text-center">{agent}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{agentStatus}</h1>
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{commision}</h1>
=======
          <h1 className=" text-center">{username}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{is_active}</h1>
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{commission}</h1>
>>>>>>> main
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <button className=" bg-white text-blue-500 font-bold py-2 px-2 rounded-full whitespace-nowrap ">
            <IoMdCreate className=" w-6 h-6" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default index;
