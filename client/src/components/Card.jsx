// page with the families in need in one page
import React from "react";

const Card = ({ cardData = {} }) => {
  const { title = "", description = "", county = "", tags = "" } = cardData;
  return (
    <div>
      {/* Card Layout */}
      <div>
        <div className="m-auto mt-10 overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <a href="#" className="block w-full h-full">
            <img
              alt="card photo"
              src="https://h-2-h.s3.us-west-2.amazonaws.com/fam1.jpg"
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white ">
              <p className="font-medium text-indigo-500 text-md">{county}</p>
              <p className="mb-2 text-xl font-medium text-gray-800">{title}</p>
              <div className="flex flex-row flex-wrap items-start">
                {tags.map((tagData) => {
                  return (
                    <p className="py-2 px-3 m-1 text-xs rounded inline-block whitespace-nowrap text-center bg-[rgb(10,177,164)] text-white align-baseline font-bold uppercase leading-none">
                      {tagData}
                    </p>
                  );
                })}
              </div>
              <span> </span>
              <p className="font-light text-gray-400 text-md truncate">
                {description}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
