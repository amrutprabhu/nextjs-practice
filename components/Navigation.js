import Link from "next/link";
import React, { useState } from "react";

function Navigation() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="flex flex-wrap p-3  bg-gradient-to-r from-purple-500 to-pink-500">
        <Link
          href="/"
          onClick={() => setNavbar(false)}
          className="inline-flex items-center"
        >
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            Navigation Bar
          </span>
          {/* </a> */}
        </Link>
        <button
          className="inline-flex p-3 hover:bg-gray-900 rounded ml-auto lg:hidden text-white "
          onClick={() => setNavbar(!navbar)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`w-full lg:w-auto lg:inline-flex flex flex-col lg:flex-row ml-auto ${
            navbar ? "block" : "hidden"
          } ` }
        >
            <Link
              href="/products"
              onClick={() => setNavbar(false)}
              className="px-3 py-2 text-white font-bold  hover:text-slate-200 "
            >
              Products
            </Link>
            <Link
              href="/"
              className="px-3 py-2 text-white font-bold  hover:text-slate-200"
            >
              About us
            </Link>
            <Link
              href="/"
              className="px-3 py-2 text-white font-bold  hover:text-slate-200"
            >
              Contact
            </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
