import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const sidebar = [
  { page: "Customer", href: "/agent", order: 0 },
  { page: "List of lottery", href: "/", order: 1 },
  { page: "Sale Summary", href: "/", order: 2 },
  { page: "Manual", href: "/", order: 3 },
  { page: "History Withdraw", href: "/", order: 4 },
  { page: "History Deposit", href: "/", order: 5 },
  { page: "Predict Lose", href: "/agent/predict-lose", order: 5 },
];

function Sidebar() {
  const [scrollY, setScrollY] = useState(0);

  function showButton() {
    setScrollY(window.pageYOffset);
  }

  function watchScroll() {
    window.addEventListener("scroll", showButton);
  }

  useEffect(() => {
    watchScroll();
    return () => {
      window.removeEventListener("scroll", showButton);
    };
  });

  return (
    <div
      className={`sticky top-0 z-50 transition-all ${
        scrollY > 15 ? "bg-white-400" : "bg-white"
      } dark:bg-black`}
    >
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 md:hidden bg-sky-400 text-white hover:bg-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>

        <div className="p-6 w-1/2 h-screen  bg-sky-600 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-3xl text-center cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full m-2">
              Luad Game
            </h1>
            <div className=" my-4 border-bpb-4 bg-gray-400 rounded-lg">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-sky-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <AiOutlineUser className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-white group-hover:text-white font-semibold ">
                  User: Agent
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-sky-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FiSettings className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  Type: Agent
                </h3>
              </div>
            </div>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <h1 className="text-base text-center font-bold text-white">
                Menu
              </h1>
            </div>

            {sidebar.map((item) => {
              return (
                <>
                  <div className="mx-0 flex mb-2 justify-start gap-4 pl-5 hover:bg-sky-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <h3 className=" text-white group-hover:text-white font-semibold">
                      <Link href={item.href}>{item.page}</Link>
                    </h3>
                  </div>
                </>
              );
            })}

            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-sky-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default Sidebar;
