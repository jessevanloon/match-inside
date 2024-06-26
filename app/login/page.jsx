import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div id="page-login" className="w-screen	h-screen">
      <div className="container mx-auto h-full">
        <div className="flex w-full h-full justify-center items-center">
          <div className="bg-light-dark-background p-9 rounded-xl	border-4 border-accent-green border-solid min-w-[550px]">
            <div className="flex flex-col gap-3">
              <div className="text-5xl font-semibold text-center">
                Match <span className="text-accent-orange">Inside</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-center">Welcome back!</div>
                <div className="text-center">
                  Let's start pushing your limits!
                </div>
              </div>
            </div>

            <form>
              <div className="flex flex-col gap-3 mt-10	">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full py-2.5 px-3.5	rounded-lg	bg-grey"
                    id="email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold" htmlFor="password">
                    Password:
                  </label>
                  <input
                    className="w-full py-2 px-3	rounded-lg	bg-grey"
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>
                <div className="w-full flex justify-between	">
                  <a>Remember me</a>
                  <a className="text-accent-orange">Forgot password?</a>
                </div>
                <div className="w-full flex flex-col gap-4	 mt-4	">
                  <button
                    className="w-full bg-accent-orange flex justify-center items-center p-2 font-semibold"
                    formAction={login}>
                    Log in
                  </button>
                  <div className="text-center font-semibold">
                    Don’t have a account?{" "}
                    {/* <span className="text-accent-orange">Register now</span> */}
                    <button className="text-accent-orange" formAction={signup}>
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
