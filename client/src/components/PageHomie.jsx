// First page rendered to user when they come to site
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Explainer from "./Explainer";

function Homepage() {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div
        className="bg-gray-400 bg-blend-soft-light bg-center"
        style={{
          backgroundImage: `url(https://h-2-h.s3.us-west-2.amazonaws.com/familyPlaceholder.jpeg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-4/5 sm:w-2/3 lg:flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center">
              <img
                className="min-w-[250px] mb-3"
                src="https://h-2-h.s3.us-west-2.amazonaws.com/logo-main.png"
                alt="photo"
              />
            </div>
            <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10">
              People Helping People
            </h1>
            <h2 className="text-red-700 bolder text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-center">
              Plain & Simple
            </h2>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-800 font-normal text-center text-sm sm:text-lg">
              Heart 2 Heart is a community driven way for people to help people{" "}
            </p>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Link to={`/create-post`}>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-700 py-2 sm:py-4 text-sm">
                Need Help?
              </button>
            </Link>
            <Link to={`/posts`}>
              <button className="ml-4 focus:outline-none bg-white focus:ring-2 focus:ring-offset-2 focus:ring-red-700 bg-transparent transition duration-150 ease-in-out hover:border-red-600 lg:text-xl lg:font-bold  hover:text-red-600 rounded border border-red-700 text-red-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Help a Family
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Explainer />
      </div>
    </div>
  );
}
export default Homepage;
