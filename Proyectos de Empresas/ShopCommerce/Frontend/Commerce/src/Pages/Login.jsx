import { useState } from "react";
import loginImg from "../assets/Login.png";
function Login() {
  const [currState, setcurrState] = useState("Sign Up");
  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        <div className="flex w-full sm:w-1/2 items-center justify-center">
          <form
            action=""
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-700"
          >
            <div className="w-full mb-4">
              <h3 className="text-[36px] font-[700] leading-[120%]">
                {currState}
              </h3>
            </div>
            {currState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  // w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1
                  className="w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1"
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                // w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1
                className="w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                // w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1
                className="w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1"
              />
            </div>
            <button className="medium-14 bg-tertiary text-white px-7 py-3 rounded-lg w-full mt-5 ">
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex  flex-col gap-y-3">
              <div className="underline">Forgot your password?</div>
              {currState === "Login" ? (
                <div className="underline">
                  Dont have and account?
                  <span
                    className="cursor-pointer"
                    onClick={() => setcurrState("Sign Up")}
                  >
                    Create account
                  </span>
                </div>
              ) : (
                <div>
                  Already have an account?
                  <span
                    className="cursor-pointer underline"
                    onClick={() => setcurrState("Login")}
                  >
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="w-1/2 hidden sm:block">
          <img src={loginImg} alt="" className="object-cover h-full w-full" />
        </div>
      </div>
    </section>
  );
}

export default Login;
