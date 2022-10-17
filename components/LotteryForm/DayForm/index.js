import React, { useState, useEffect } from "react";

const Monday = {
  monday: false,
};
const Tuesday = {
  tuesday: false,
};
const Wednesday = {
  wednesday: false,
};
const Thursday = {
  tuesday: false,
};
const Friday = {
  thursday: false,
};
const Saturday = {
  saturday: false,
};
const Sunday = {
  sunday: false,
};

export default function index() {
  const [monday, setMonday] = useState(Monday);
  const [tuesday, setTuesday] = useState(Tuesday);
  const [wednesday, setWednesday] = useState(Wednesday);
  const [thursday, setThursday] = useState(Thursday);
  const [friday, setFriday] = useState(Friday);
  const [saturday, setSaturday] = useState(Saturday);
  const [sunday, setSunday] = useState(Sunday);

  return (
    <>
      <div className="max-w-lg  bg-gray-100 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
        <div className="mx-5">
          <h1 className="text-gray-900 text-center font-extrabold mt-3 text-3xl mb-5">
            Days
          </h1>
          <div className="grid grid-cols-6 gap-1 mr-10">
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setMonday(!monday);
              }}
            />
            <label htmlFor="" className="text-start">
              Monday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setTuesday(!tuesday);
              }}
            />
            <label htmlFor="" className="text-start">
              Tuesday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setWednesday(!wednesday);
              }}
            />
            <label htmlFor="" className="text-start">
              Wednesday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setThursday(!thursday);
              }}
            />
            <label htmlFor="" className="text-start">
              Thursday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setFriday(!friday);
              }}
            />
            <label htmlFor="" className="text-start">
              Friday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10"
              onChange={() => {
                setSaturday(!saturday);
              }}
            />
            <label htmlFor="" className="text-start">
              Saturday
            </label>
            <input
              type="checkbox"
              className="text-1xl ml-10 bg-sky"
              onChange={() => {
                setSunday(!sunday);
              }}
            />
            <label htmlFor="" className="text-start">
              Sunday
            </label>
          </div>
        </div>
      </div>
    </>
  );
}