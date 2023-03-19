import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ onChange }) {
  return (
    <div className="flex flex-col items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex flex-colbg-red-700 transition duration-150 ease-in-out bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-700 py-2 sm:py-4 text-sm">
            Location
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-white "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <button
                      className={`${
                        active ? "text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Los Angeles, CA
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <button
                      className={`${
                        active ? "text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Orange County, CA
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <button
                      className={`${
                        active ? "text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Riverside County, CA
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
