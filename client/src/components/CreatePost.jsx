import React, { useState } from "react";
import Drop from "./Drop";
import Auth from "../utils/auth";
import Navbar from "./Navbar";
const NewPost = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [supplyData, setSupplyData] = useState({
    recipientId: "64125db501ab3c09a30c798a",
    title: "Test",
    description: "Test description",
    tags: [],
    county: "Orange",
    supplyImage: null,
  });

  const handleTagChange = (event) => {
    const tagName = event.target.name;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagName));
    }

    setSelectedTags((newSelectedTags) => {
      setSupplyData({ ...supplyData, tags: newSelectedTags });
      return newSelectedTags;
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSupplyData({ ...supplyData, [name]: value });
  };

  const createSupply = async () => {
    const token = Auth.getToken();
    try {
      const response = await fetch(
        "/api/supplies/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          body: JSON.stringify(supplyData),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-4/5 mt-10"
          src="https://h-2-h.s3.us-west-2.amazonaws.com/fam1.jpg"
          alt="photo"
        />
      </div>
      {/* Location entry */}
      <div className="flex flex-col w-4/5 mb-3 mt-5">
        <div class="mt-6 mb-6">
          <label
            for="large-input"
            className="mb-4 font-semibold text-gray-900 w-4/5"
          >
            Post Name:
          </label>
          <input
            type="text"
            id="large-input"
            placeholder="Brief title for your post"
            className="block w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <div className=" relative ">
            <select
              className="block px-3 py-2 text-gray-700 bg-white border border-gray-500 w-full rounded-md shadow-smc focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="county"
              onChange={(event) =>
                setSupplyData({ ...supplyData, county: event.target.value })
              }
            >
              <option value="">Select A Location</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Orange">Orange County</option>
              <option value="Riverside">Riverside</option>
            </select>
          </div>
        </div>
      </div>
      {/* CheckBoxes */}
      <div className=" justify-center items-center">
        <h3 className="mt-4 mb-4 font-semibold text-gray-900">
          What items do you need?
        </h3>
        <div className="flex flex-col mb-2 justify-center items-center">
          <ul class="w-4/5 text-sm font-medium text-gray-900 bg-white rounded-lg">
            <li class="w-full rounded-t-lg">
              <div class="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500"
                  name="Clothing"
                  onChange={handleTagChange}
                />
                <label
                  for="vue-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Clothing
                </label>
              </div>
            </li>
            <li class="w-full rounded-t-lg">
              <div class="flex items-center pl-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  name="School Supplies"
                  onChange={handleTagChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500"
                />
                <label
                  for="react-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  School Supplies
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  name="Baby Goods"
                  onChange={handleTagChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  for="angular-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  Baby Goods
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  name="Blankets"
                  onChange={handleTagChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  for="laravel-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Blankets
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  name="Canned Food"
                  onChange={handleTagChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="vue-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Canned Food
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Family Post Story */}
      <div className="mt-6 mb-6 w-4/5">
        <label for="large-input" className="mb-4 font-semibold text-gray-900">
          Post Bio:
        </label>
        <input
          type="text"
          id="large-input"
          placeholder="Tell us a little about your family"
          className="block w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          name="description"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="mb-10">
        <button
          onClick={createSupply}
          className="mt-1 w-40 focus:outline-none  focus:ring-red-700 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-700 py-2 sm:py-4 text-sm"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
