import React from "react";
import { MdFamilyRestroom } from "react-icons/md";

function Explainer() {
  return (
    <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
      {/* Code block starts */}
      <dh-component>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p
                tabIndex={0}
                className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4"
              >
                ________________________________________________________________
              </p>
              <hh1
                tabIndex={0}
                className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
              >
                How it all works...
              </hh1>
            </div>
            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              <div
                tabIndex={0}
                aria-label="card 1"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-red-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                      alt="drawer"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                  >
                    1. Family in need
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    A family creates a profile with basic needs. These can be
                    school supplies, clothes, or furniture items.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 2"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-red-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                      alt="check"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Local neighbors help
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Local community members can create an account and see what
                    items they can donate for a specific family. Items can be
                    new or slightly used.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 3"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-red-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                      alt="html tag"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Donations are coordinated
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    A donation location is set up to get the needed items to the
                    family.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 4"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-red-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                      alt="monitor"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Social good created
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Take joy in knowing that you are helping a specific family
                    in need in your local community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dh-component>
      {/* Code block ends */}
    </div>
  );
}

export default Explainer;
