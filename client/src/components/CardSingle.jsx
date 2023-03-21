// page with the families in need in one page
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SendDonation from "./SendDonation";

const CardSingle = ({ cardData = {} }) => {
  console.log("CardSingle", cardData);
  const { title = "", description = "", county = "", tags = [] } = cardData;

  return (
    <div>
      {/* Card Layout for a single post once its been picked
       */}
      <div>
        <div className="m-auto mt-10 mb-10 overflow-hidden rounded-lg shadow-xl cursor-pointer min-h-fit w-4/5">
          <a href="#" className="block w-full h-full">
            <img
              alt="card photo"
              src="https://h-2-h.s3.us-west-2.amazonaws.com/fam1.jpg"
              className="object-cover w-full max-h-90"
            />
            <div className="w-full p-4 bg-white">
              <p className="font-medium text-red-500 text-md">{county}</p>
              <p className="mb-2 text-xl font-medium text-gray-800">{title}</p>
              {/* <p className="mb-2 text-xl font-medium text-gray-800">{tags}</p> */}
              <div className="flex flex-row flex-wrap items-start">
                {tags.map((tags) => {
                  return (
                    <p className="py-2 px-3 m-1 text-xs rounded inline-block whitespace-nowrap text-center bg-[rgb(10,177,164)] text-white align-baseline font-bold uppercase leading-none">
                      {tags}
                    </p>
                  );
                })}
              </div>
              <p className="font-light text-gray-400 text-md">{description}</p>
            </div>
          </a>
          <div className="flex flex-col justify-center items-center mb-3">
            <Link to={`/send`}>
              <button className="mt-1 w-40 focus:outline-none  focus:ring-red-700 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-700 py-2 sm:py-4 text-sm">
                Help this Family
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSingle;
