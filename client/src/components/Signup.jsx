import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl font-bold text-black sm:text-2xl ">
            Create a new account
          </div>
          <span className="justify-center text-sm text-center text-black flex-items-center">
            Already have an account?
            <a
              href="#"
              target="_blank"
              className="text-sm text-blue-500 underline hover:text-blue-700"
            >
              Sign in
            </a>
          </span>
          <div className="p-6 mt-8">
            <form action="#">
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="username"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="username"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="firstName"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="First name"
                    placeholder="First name"
                  />
                </div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="lastName"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="Last name"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="email"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="phone"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="password"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="*Password*"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="confirmPassword"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="**Confirm Password**"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <select
                    class="block px-3 py-2 text-gray-700 bg-white border border-gray-500 w-full rounded-md shadow-smc focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="cities"
                  >
                    <option value="">Select A Location</option>
                    <option value="losAngeles">Los Angeles</option>
                    <option value="orangeCounty">Orange County</option>
                    <option value="riverside">Riverside</option>
                  </select>
                </div>
              </div>

              <div className="flex w-full my-4">
                <button
                  type="submit"
                  className="py-2 px-4  bg-blue-600 hover:bg-red-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
