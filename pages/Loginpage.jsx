import React from "react";

const Loginpage = () => {
  return (
    <div id="page-login" className="w-screen	h-screen">
      <div className="container mx-auto h-full">
        <div className="flex w-full h-full justify-center items-center">
          <div className="bg-light-dark-background p-9 rounded-xl	border-4 border-accent-green border-solid min-w-[550px]">
            <div className="flex flex-col gap-3.5">
              <div className="text-5xl font-semibold text-center">
                Match <span className="text-accent-orange">Inside</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="text-center">Welcome back!</div>
                <div className="text-center">
                  Let's start pushing your limits!
                </div>
              </div>
            </div>

            <form>
              <div className="flex flex-col gap-3.5 mt-10	">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold">Username</label>
                  <input
                    className="w-full py-2.5 px-3.5	rounded-lg	bg-grey"
                    type="text"
                    placeholder="Username.."></input>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold">Password</label>
                  <input
                    className="w-full py-2.5 px-3.5	rounded-lg	bg-grey"
                    type="text"
                    placeholder="Password.."></input>
                </div>
                <div className="w-full flex justify-between	">
                  <a>Remember me</a>
                  <a className="text-accent-orange">Forgot password?</a>
                </div>
                <div className="w-full flex flex-col gap-4	 mt-8	">
                  <a className="w-full bg-accent-orange flex justify-center items-center p-2 font-semibold">
                    Sign in
                  </a>
                  <div className="text-center font-semibold">
                    Don’t have a account?{" "}
                    <span className="text-accent-orange">Register now</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
