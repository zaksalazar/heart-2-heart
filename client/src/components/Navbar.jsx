import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full border-b">
        <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
          <div aria-label="Home. logo" role="img">
            <img
              className="max-w-[100px] md:w-auto"
              src="assets/images/logo1.png"
              alt="logo"
            />
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : ""
              } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            >
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden icon icon-tabler icon-tabler-menu"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button>
            <div
              id="menu"
              className={` ${show ? "" : "hidden"} md:block lg:block `}
            >
              <button
                onClick={() => setShow(!show)}
                className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
              >
                <svg
                  aria-label="close main menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="#team">Team</a>
                </li>
                <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-red-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-red-700 text-red-700 px-4 sm:px-8 py-1 sm:py-3 text-sm"> */}
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-700 py-2 sm:py-4 text-sm">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;