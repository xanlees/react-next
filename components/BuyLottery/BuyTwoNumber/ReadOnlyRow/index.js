import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="grid grid-cols-2">
      <td>
        <button
          className=""
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <BiEdit className=" text-blue-600" />
        </button>
      </td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <RiDeleteBin3Line className=" text-rose-600" />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
