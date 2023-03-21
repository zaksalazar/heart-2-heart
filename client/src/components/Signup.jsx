import React, { useState, useEffect } from "react";
import { MdErrorOutline } from "react-icons/md";

import Auth from "../utils/auth";

const Signup = () => {
  const [ userData, setUserData ] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',

  });

  useEffect(() => {
    console.log(userData);
  },[userData])

  const handleUserChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

const createUser = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(
      "http://localhost:3001/api/users/create-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (response.ok){
    const data = await response.json();
    console.log(data);
    Auth.login(data.token);
    return data;
    }
  } catch (error) {
    console.log(error);
  }
};



  return (
    <div className="flex flex-col justify-center items-center p-10 bg-slate-400">
      <div>
        <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl font-bold text-black sm:text-2xl ">
            Create a new account
          </div>
          <span className="justify-center text-sm text-center text-black flex-items-center">
            Already have an account?
            <span className="pl-3 text-sm text-blue-500 underline hover:text-blue-700">
              Sign in
            </span>
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
                    onChange={(e) => handleUserChange(e)}
                    value={userData.username}
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="firstName"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="firstname"
                    placeholder="First name"
                    onChange={(e) => handleUserChange(e)}
                    value={userData.firstname}
                  />
                </div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="lastName"
                    className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="lastname"
                    placeholder="Last name"
                    onChange={(e) => handleUserChange(e)}
                    value={userData.lastname}
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
                    onChange={(e) => handleUserChange(e)}
                    name="email"
                    value={userData.email}
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
                    onChange={(e) => handleUserChange(e)}

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
                    name="password"
                    onChange={(e) => handleUserChange(e)}
                    value={userData.password}
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
                    className="block px-3 py-2 text-gray-700 bg-white border border-gray-500 w-full rounded-md shadow-smc focus:outline-none focus:ring-primary-500 focus:border-primary-500"
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
                  onClick={createUser}
                  className="py-2 px-4  bg-red-600 hover:bg-red-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
