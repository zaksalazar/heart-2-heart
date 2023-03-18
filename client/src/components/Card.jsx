// page with the families in need in one page
import React from "react";

const Card = ({ cardData = {} }) => {
  const { name = "", bio = "", county = "" } = cardData;
  return (
    <div>
      {/* Card Layout */}
      <div>
        <div class="m-auto mt-10 overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <a href="#" class="block w-full h-full">
            <img
              alt="card photo"
              src="/assets/images/fam1.jpg"
              class="object-cover w-full max-h-40"
            />
            <div class="w-full p-4 bg-white dark:bg-gray-800">
              <p class="font-medium text-indigo-500 text-md">{county}</p>
              <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                {name}
              </p>
              <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                {bio}
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center w-4/5 mt-8 max-h-56">
        <a
          href="#"
          className="flex flex-col items-center bg-gray-100  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="assets/images/fam1.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-600">{bio}</p>
          </div>
          <div>
            <ul class="w-4/5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="vue-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Clothing
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="react-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    School Supplies
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Blankets
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="vue-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Canned Food
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </a>
      </div> */}

      {/* <div className="flex flex-col w-2/3 gap-5 p-2 mx-auto bg-white shadow-xl select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
        <div
          // style={{
          //   backgroundImage: `url(${data.famPhoto})`,
          // }}
          className="bg-yellow-400 h-25 sm:h-full sm:w-72 rounded-xl"
        ></div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-col flex-1 gap-3">
            <div className="w-full text-white bg-gray-100  h-14 rounded-2xl">
              <h2 className="text-center p-4 text-black">OWENS</h2>
            </div>
            <div>Help Needed</div>
          </div>
          <div className="flex gap-3 mt-auto">
            <button
              type="button"
              className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              Clothes
            </button>
            <button
              type="button"
              className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              School Supplies
            </button>
          </div>
        </div>
      </div> */}
      {/* New card idea */}
    </div>
  );
};

export default Card;
