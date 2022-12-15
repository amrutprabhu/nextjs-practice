import Link from "next/link";
import React, { useState } from "react";

function Navigation() {
  const [navbar, setNavbar] = useState(false);

  return (
    // https://letmefail.com/react/build-responsive-mobile-navigation-with-nextjs-and-tailwindcss/
    <div>
      <nav className="flex items-center flex-wrap p-3  bg-gradient-to-r from-purple-500 to-pink-500">
        <Link
          href="/"
          onClick={() => setNavbar(false)}
          className="inline-flex items-center"
        >
          {/* <a className='inline-flex items-center '> */}
          {/* <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-white h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg> */}
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            Navigation Bar
          </span>
          {/* </a> */}
        </Link>
        <button
          className="inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
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
          className={` w-full lg:w-auto lg:inline-flex flex-grow  ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto  lg:w-auto w-full lg:h-auto flex flex-col">
            <Link
              href="/service"
              onClick={() => setNavbar(false)}
              className="px-3 py-2 text-white font-bold  hover:text-slate-200"
            >
              Services
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
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
