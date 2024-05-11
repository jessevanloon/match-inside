import React from "react";

const Loginpage = () => {
  return (
    <div id="page-login" className="w-screen	h-screen">
      <div className="container mx-auto h-full">
        <div className="flex w-full h-full justify-center items-center">
          <div className="bg-light-dark-background p-9 rounded-xl	border-4 border-accent-green border-solid">
            <div className="flex flex-col gap-3.5">
              <div className="text-5xl font-semibold">
                Match <span className="text-accent-orange">Inside</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="text-center">Welcome back!</div>
                <div className="text-center">
                  Let's start pushing your limits!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
