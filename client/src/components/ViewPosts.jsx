import React from "react";
import background from "/public/assets/images/fam1.webp";
import Drop from "./Drop";

const ViewPosts = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        height: "500px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div aria-label="Home. logo" role="img">
        <img
          className="max-w-[200px] md:w-auto mt-10"
          src="assets/images/logo1.png"
          alt="logo"
        />
      </div>

      <div className="">
        <Drop />
      </div>
      <section className="flex flex-col items-center w-4/5"></section>
    </div>
  );
};

export default ViewPosts;
