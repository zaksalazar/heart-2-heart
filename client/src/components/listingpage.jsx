// page with the families in need in one page
import React from "react";

export const ListingPage = () => {
  return (
    <div>
      <div class="flex flex-col w-2/3 gap-5 p-2 mx-auto bg-white shadow-xl select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
        <div class="bg-yellow-200 h-52 sm:h-full sm:w-72 rounded-xl "></div>
        <div class="flex flex-col flex-1 gap-5 sm:p-2">
          <div class="flex flex-col flex-1 gap-3">
            <div class="w-full text-white bg-gray-100  h-14 rounded-2xl">
              <h2 className="text-center p-4 text-black">The Owens Family</h2>
            </div>
            <div>
              the family is great and really needs help in the classroom
              supplies
            </div>
          </div>
          <div class="flex gap-3 mt-auto">
            <button
              type="button"
              class="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              clothing
            </button>
            <button
              type="button"
              class="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              School Supplies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
