import React from "react";

const SendDonation = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="flex flex-col h-[600px] px-10 py-10 bg-white rounded-lg shadow-2xl border xl:h-[800px] xl:w-[600px]">
        <h1 className="text-6xl text-center text-gray-800 font-black xl:mt-24">
          Thank you
        </h1>
        {/* Quote Card */}
        <div className="bg-slate-100 w-72 shadow-md shadow-red-800 mx-auto rounded-xl p-4 mt-10">
          <p className="text-gray-600">
            <span className="text-lg font-bold text-black">“</span>
            ALONE, WE CAN DO SO LITTLE; TOGETHER WE CAN DO SO MUCH
            <span className="text-lg font-bold text-black">”</span>
          </p>
          <div className="flex items-center mt-4">
            <div className="flex flex-col justify-between ml-2">
              <span className="text-sm text-red-700 italic font-bold">
                HELEN KELLER
              </span>
            </div>
          </div>
        </div>
        <div className="text-lg font-bold text-black text-center mt-12">
          <p>Please send your Donation to:</p>
          <p className="mt-4 text-2xl text-red-700">Heart 2 Heart</p>
          <p className="text-2xl text-red-700">Donation House</p>
          <p className="mt-5">27671 La Paz Rd</p>
          <p>Laguna Niguel, CA 92677</p>
        </div>
      </div>
    </div>
  );
};

export default SendDonation;
