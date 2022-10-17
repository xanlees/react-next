import React from "react";
import { IoMdCreate } from "react-icons/io";
import {
  AiOutlinePlusCircle,
  AiOutlineFileSearch,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const Listcustomerrow = ({ contact, handleEditClick }) => {


  return (
    <>
      <tr>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{contact.username}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{contact.date_joined}</h1>
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{contact.deposit[0]?.deposit_amount}</h1>
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <h1 className=" text-center">{contact.is_active ? "Active" : "Inactive"}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <button className=" bg-white text-sky-500 font-bold py-2 px-6 rounded-full whitespace-nowrap ">
            <AiOutlinePlusCircle className=" w-6 h-6" />
          </button>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <button className=" bg-white text-red-500 font-bold py-2 px-8 rounded-full whitespace-nowrap ">
            <AiOutlineMinusCircle className=" w-6 h-6" />
          </button>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <button className=" bg-white text-sky-500 font-bold py-2 px-12 rounded-full whitespace-nowrap ">
            <AiOutlineFileSearch className=" w-6 h-6" />
          </button>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 bg-blueGray-50 text-blueGray-500 border border-solid border-black py-3 ">
          <button
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
            className=" bg-white text-sky-500 font-bold py-2 px-4 rounded-full whitespace-nowrap "
          >
            <IoMdCreate className=" w-6 h-6" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Listcustomerrow;
