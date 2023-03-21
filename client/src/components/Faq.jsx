import React from "react";

const Faq = () => {
  return (
    <div className="px-4 py-20 bg-blue-100">
      <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
        <h2 className="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3 mb-6">
          Frequently-Asked Questions
        </h2>
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              What types of items does your non-profit accept as donations?
            </h3>
          </div>
          <div className="mb-16">
            <p>
              Our non-profit accepts a wide range of items as donations,
              including clothing, shoes, blankets, bedding, toys, books, and
              non-perishable food items. We also accept donations of larger
              items such as furniture and appliances on a case-by-case basis.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              How do families in need apply to receive donations from your
              organization?
            </h3>
          </div>
          <div className="mb-16">
            <p>
              Families in need can apply to receive donations from our
              organization by creating an account and filling out a simple
              online application form. They will need to provide some basic
              information about their family and the types of items they are in
              need of.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Can I make a monetary donation instead of donating goods?
            </h3>
          </div>
          <div className="mb-16">
            <p>
              Currently we are not accepting any monetary donations, but that is
              something we will be working on in the future.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Are there any specific geographic areas or demographic groups that
              your non-profit focuses on helping?
            </h3>
          </div>
          <div className="mb-16">
            <p>
              Currently we are only operating in Los Angeles County, Orange
              County, and Riverside County. We primarily focus on serving those
              who live in poverty or who are experiencing economic hardship. We
              do not discriminate on the basis of race, ethnicity, religion, or
              any other demographic characteristic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
