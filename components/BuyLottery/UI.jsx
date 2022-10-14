import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../../mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const UI = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
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
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
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

  return (
    <div className="app-container">
      <h2>Add a number</h2>
      <form onSubmit={handleAddFormSubmit}>
        <label htmlFor="" className="mx-3">
          ເລກ
        </label>
        <input
          className="rounded-lg w-32"
          type="Number"
          name="fullName"
          placeholder="ເລກ"
          onChange={handleAddFormChange}
        />
        <label htmlFor="" className="mx-3">
          ບົນ
        </label>

        <input
          className="rounded-lg w-32"
          type="text"
          name="address"
          placeholder="ຈໍໍານວນເງິນ"
          onChange={handleAddFormChange}
        />
        <label htmlFor="" className="mx-3">
          ລ່າງ
        </label>

        <input
          className="rounded-lg w-32"
          type="text"
          name="phoneNumber"
          placeholder="ຈໍໍານວນເງິນ"
          onChange={handleAddFormChange}
        />
        <div>{addFormData.fullName}</div>
        <div className="mt-4">
          <button
            type="submit"
            className="border p-2 bg-sky-600 text-white rounded-lg mr-2"
          >
            ເພີ່ມ
          </button>
          <button
            type="submit"
            className="border p-2 bg-sky-600 text-white rounded-lg w-20"
          >
            ຊື່
          </button>
        </div>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table className="mt-5">
          <thead>
            <tr>
              <th className="p-3 bg-sky-400 text-white border-l-2">ເລກ</th>
              <th className="p-3 bg-sky-400 text-white border-l-2">ບົນ</th>
              <th className="p-3 bg-sky-400 text-white border-l-2">ລ່າງ</th>
              <th className="p-3 bg-sky-400 text-white border-l-2">ແກ້ໄຂ</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    className="mr-10"
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
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default UI;
