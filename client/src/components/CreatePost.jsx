import React from "react";
import Drop from "./Drop";

const NewPost = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        <img className="w-4/5 mt-10" src="assets/images/fam1.jpg" alt="photo" />
      </div>
      {/* Location entry */}
      <div className="flex flex-col w-4/5 mb-3 mt-5">
        <Drop />
      </div>
      {/* CheckBoxes */}
      <div className=" justify-center items-center">
        <h3 className="mt-4 mb-4 font-semibold text-gray-900 dark:text-white">
          What items do you need?
        </h3>
        <div className="w-4/5">
          <ul class="w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            <li class="w-full border-b border-gray-200 rounded-t-lg">
              <div class="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="vue-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Clothing
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg">
              <div class="flex items-center pl-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="react-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  School Supplies
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="angular-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Baby Goods
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="laravel-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Blankets
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg">
              <div class="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="vue-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Canned Food
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Family Post Story */}
      <div class="mt-6 mb-6 w-4/5">
        <label
          for="large-input"
          class="mb-4 font-semibold text-gray-900 dark:text-white"
        >
          Post Bio:
        </label>
        <input
          type="text"
          id="large-input"
          class="truncate block w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <button className="mt-1 w-40 focus:outline-none  focus:ring-red-700 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-700 py-2 sm:py-4 text-sm">
          Create Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
