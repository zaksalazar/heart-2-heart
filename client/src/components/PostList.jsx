import React from "react";
import background from "/public/assets/images/fam1.webp";
import Drop from "./Drop";
import Card from "./Card";

const ViewPosts = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        backgroundImage: `url(${background})`,
        height: "844px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="mt" role="img">
        <img
          className="max-w-[200px] md:w-auto mt-10"
          src="assets/images/logo1.png"
          alt="logo"
        />
      </div>
      <div className="text-2xl text-red-600 mb-5">
        <h1>Select nearest location to help</h1>
      </div>
      <div className="">
        <Drop />
      </div>
      {/* <div className="flex flex-col items-center w-4/5">
        <Card />
      </div> */}
    </div>
  );
};

export default ViewPosts;
