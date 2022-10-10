import React, { useState } from "react";
import Link from "next/link";

const navbar = [
  { page: "Home", href: "/", order: 0 },
  { page: "Prize", href: "/", order: 1 },
  { page: "Order History", href: "/", order: 2 },
  { page: "Balance", href: "/", order: 3 },
  { page: "Balance History", href: "/", order: 4 },
  { page: "How to Play", href: "/", order: 5 },
];

export default function index() {
  const [active, setActive] = useState(0);
  return (
    <nav id="navbar" className="flex justify-between p-2 px-4">
      <div className="flex items-center justify-between w-full">
        <ul className="hidden lg:flex lg:justify-center w-full">
          {navbar.map((item) => {
            return (
              <>
                <li className="mr-1" onClick={() => setActive(item.order)}>
                  <Link href={item.href}>
                    <a
                      className={`font-medium ${
                        active === item.order ? "bg-sky-700 rounded-sm text-white" : "bg-sky-400"
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
  );
}
