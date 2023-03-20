// page with the families in need in one page
import React from "react";

const CardSingle = ({ cardData = {} }) => {
  const { title = "", description = "", county = "", tags = "" } = cardData;
  return (
    <div>
      {/* Card Layout for a single post once its been picked
       */}
      <div>
        <div className="m-auto mt-10 overflow-hidden rounded-lg shadow-xl cursor-pointer min-h-fit w-60 md:w-80">
          <a href="#" className="block w-full h-full">
            <img
              alt="card photo"
              src="/assets/images/fam1.jpg"
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white ">
              <p className="font-medium text-red-500 text-md">{county}</p>
              <p className="mb-2 text-xl font-medium text-gray-800">{title}</p>
              <p className="font-light text-gray-400 text-md">{tags}</p>
              <p className="font-light text-gray-400 text-md">{description}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSingle;
