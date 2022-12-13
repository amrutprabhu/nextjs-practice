import { signIn } from "next-auth/react";

function Login() {
  return (
    <div>
      <div>
        <div>
          <button
            className="rounded py-2 px-3 bg-blue-600 text-white"
            onClick={signIn}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
