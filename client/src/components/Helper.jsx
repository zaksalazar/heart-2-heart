import React from "react";
import background from "/public/assets/images/familyPlaceholder.jpeg";

const Helper = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div aria-label="Home. logo" role="img">
        <img
          className="max-w-[200px] md:w-auto mt-20"
          src="assets/images/logo1.png"
          alt="logo"
        />
      </div>
      <button className="mt-8 w-40 focus:outline-none  focus:ring-red-700 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-700 py-2 sm:py-4 text-sm">
        Request Help?
      </button>
      <button className="mt-4 mb-40 w-40 focus:outline-none  focus:ring-red-700 bg-transparent transition duration-150 ease-in-out hover:border-red-600 lg:text-xl lg:font-bold  hover:text-red-600 rounded border border-red-700 text-red-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
        Help a Family
      </button>
    </div>
  );
};

export default Helper;
