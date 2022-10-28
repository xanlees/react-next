import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import { nanoid } from "nanoid";
import data from "../../../mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
import { useNotification } from "@vechaiui/react";
const index = () => {
  const notification = useNotification();
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    number: "",
    amount_buy_top: "",
    amount_buy_bottom: "",
  });
  const [editFormData, setEditFormData] = useState({
    number: "",
    amount_buy_top: "",
    amount_buy_bottom: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const number = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[number] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const number = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[number] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      number: addFormData.number,
      amount_buy_top: addFormData.amount_buy_top,
      amount_buy_bottom: addFormData.amount_buy_bottom,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      number: editFormData.number,
      amount_buy_top: editFormData.amount_buy_top,
      amount_buy_bottom: editFormData.amount_buy_bottom,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      number: contact.number,
      amount_buy_top: contact.amount_buy_top,
      amount_buy_bottom: contact.amount_buy_bottom,
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  const handleMessage = (status) => {
    notification({
      title: "Buy successfully",
      className:
        " bg-sky-400 border-none text-white w-64  text-2xl font-extralight tracking-tight ",
      status: status,
      position: "top",
      duration: "200",
    });
  };
  const formData = contacts;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/buy_lottery",
        data: formData,
        headers: { "Content-Type": "application/json" },
      });
      console.log("response upload", data);
    } catch (error) {
      console.log("request error ", error);
    }
  };
  return (
    <>
      <div className="app-container">
        <div className="grid grid-row-7">
          <form action="" onSubmit={handleAddFormSubmit}>
            <label className="mx-3">ເລກ</label>
            <NumericFormat
              className="rounded-lg w-32"
              name="number"
              placeholder="ເລກ"
              maxLength="2"
              onChange={handleAddFormChange}
            />
            <label className="mx-3">ບົນ</label>
            <NumericFormat
              thousandSeparator=","
              className="rounded-lg w-32"
              prefix={"₭"}
              name="amount_buy_top"
              placeholder="ຈໍໍານວນເງິນ"
              maxLength="8"
              onChange={handleAddFormChange}
            />
            <label className="mx-3">ລ່າງ</label>
            <NumericFormat
              thousandSeparator=","
              className="rounded-lg w-32"
              prefix={"₭"}
              placeholder="ຈໍໍານວນເງິນ"
              maxLength="8"
              name="amount_buy_bottom"
              onChange={handleAddFormChange}
            />
            <button
              type="submit"
              className="border p-2 bg-sky-600 text-white rounded-lg mr-2 w-32 mt-10 pb-11 h-3 ml-5"
            >
              ເພີ່ມ
            </button>
          </form>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <button
            type="submit"
            onClick={() => handleMessage()}
            className="border p-2 bg-sky-600 text-white rounded-lg mr-2 w-32 mb-5"
          >
            ຊື້
          </button>
          <form onSubmit={handleEditFormSubmit}>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full  text-lg text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                  <tr className="text-center text-lg">
                    <th
                      scope="col"
                      className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                    >
                      ເລກ
                    </th>
                    <th scope="col" className="py-3 px-6 ">
                      ຈໍໍານວນເງິນບົນ
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-gray-50 dark:bg-gray-800 "
                    >
                      ຈໍໍານວນເງິນລ່າງ
                    </th>
                    <th scope="col" className="py-3 px-6  ">
                      ແກ້ໄຂ
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {contacts.map((contact, index) => (
                    <tr
                      className="border-b border-gray-200 dark:border-gray-700"
                      key={contact + index}
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        {contact.number}
                      </th>
                      <td className="py-4 px-6"> {contact.amount_buy_top}</td>
                      <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                        {contact.amount_buy_bottom}
                      </td>
                      <td className="py-4 px-6">
                        {editContactId ? (
                          <EditableRow
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <ReadOnlyRow
                            contact={contact}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </form>
      </div>
    </>
  );
};
export default index;
