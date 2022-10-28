import React from "react";
import { NumericFormat } from "react-number-format";
import { FiSave } from "react-icons/fi";
import { MdOutlineCancelPresentation } from "react-icons/md";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <NumericFormat
          className="rounded-lg w-32"
          name="number"
          placeholder="ເລກ"
          maxLength="2"
          value={editFormData.number}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <NumericFormat
          thousandSeparator=","
          className="rounded-lg w-32"
          prefix={"₭"}
          name="amount_buy_top"
          placeholder="ຈໍໍານວນເງິນ"
          maxLength="8"
          value={editFormData.amount_buy_top}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <NumericFormat
          thousandSeparator=","
          className="rounded-lg w-32"
          prefix={"₭"}
          placeholder="ຈໍໍານວນເງິນ"
          maxLength="8"
          name="amount_buy_bottom"
          value={editFormData.amount_buy_bottom}
          onChange={handleEditFormChange}
        />
      </td>
      <td className=" space-x-3">
        <button type="submit">
          <FiSave className=" ml-5 text-blue-600" />
        </button>
        <button type="button" onClick={handleCancelClick}>
          <MdOutlineCancelPresentation className=" text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
