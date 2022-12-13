import { signOut } from "next-auth/react";

function Logout() {
  return (
    <div>
      <div>
        <div>
          <button
            className="rounded py-2 px-3 bg-blue-600 text-white"
            onClick={signOut}
          >
            signOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
