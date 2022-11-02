import React, { useState } from "react";
import Link from "next/link";

const navbar = [
  { page: "Home", href: "/", order: 0 },
  { page: "Prize", href: "/coming", order: 1 },
  { page: "Order History", href: "/customer/order-history", order: 2 },
  { page: "Balance", href: "/coming", order: 3 },
  { page: "Balance History", href: "/coming", order: 4 },
  { page: "How to Play", href: "/coming", order: 5 },
];

export default function index() {
  const [active, setActive] = useState(0);
  return (
    <>
      <nav id="navbar" className="flex justify-between p-2 px-4">
        <div className="flex items-center justify-between w-full">
          <ul className="hidden lg:flex lg:justify-center w-full">
            {navbar.map((item, index) => {
              return (
                <>
                  <li
                    className="mr-1"
                    onClick={() => setActive(item.order)}
                    key={index + item.order}
                  >
                    <Link href={item.href}>
                      <a
                        className={`font-medium ${
                          active === item.order
                            ? "bg-sky-700 rounded-sm text-white"
                            : "bg-sky-400"
                        } dark:text-dark text-white px-2 py-1 hover:bg-sky-700 hover:text-white hover:rounded- dark:hover:text-white`}
                      >
                        {item.page}
                      </a>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* <div className="flex flex-wrap py-2 ml-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                >
                  <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <div
                className="flex lg:flex-grow items-center"
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none m-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#navbar"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#navbar"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#navbar"
                    >
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div> */}
    </>
  );
}
