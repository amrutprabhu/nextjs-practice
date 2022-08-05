import Link from "next/link";
import React, { useEffect } from "react";

const Users = () => {
  return (
    <div className="flex flex-row bg-slate-600 h-20 rounded-b-lg">
      <div className=" w-1/6 bg-green-400 rounded-bl-lg">
        <p className=" px-4 py-4 text-sm bg-center">Welcome</p>
      </div>
      <div className="w-5/6 bg-red-400"></div>
      <div className="flex w-1/6 py-4 justify-center">
        {/* <Link
          href={"/user"}
          className="border-spacing-7 border-red-400 p-4 bg-center"
        > */}
        <button className="hover:bg-green-400 bg-blue-600 rounded-lg px-10 py-3">
          Log in
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Users;
