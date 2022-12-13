import { useSession } from "next-auth/react";
import Login from "./Login";
import Logout from "./Logout";

const Nav = () => {
  console.log("Nav");
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="flex flex-row bg-slate-600 h-20 rounded-b-lg">
      <div className=" w-1/6 bg-green-400 rounded-bl-lg">
        <p className=" px-4 py-4 text-sm bg-center">Welcome</p>
      </div>
      <div className="w-5/6 bg-red-400"></div>
      <div className="flex w-1/6 p-2 align-middle justify-center">
        {session && (
          <div>
            <div>
              <p className="text-white py-1">{session?.user.name}</p>
            </div>
            <div>
              <Logout />
            </div>
          </div>
        )}
        {!session && (
          <div>
            <Login />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
