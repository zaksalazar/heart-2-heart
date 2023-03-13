// page with the families in need in one page
import React from "react";

// export const Card = ({ data }) => {
//   return (
//     <div>
//       <div className="flex flex-col w-2/3 gap-5 p-2 mx-auto bg-white shadow-xl select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
//         <div
//           // style={{
//           //   backgroundImage: `url(${data.famPhoto})`,
//           // }}
//           className="bg-yellow-200 h-52 sm:h-full sm:w-72 rounded-xl "
//         ></div>
//         <div className="flex flex-col flex-1 gap-5 sm:p-2">
//           <div className="flex flex-col flex-1 gap-3">
//             <div className="w-full text-white bg-gray-100  h-14 rounded-2xl">
//               <h2 className="text-center p-4 text-black">{data.name}</h2>
//             </div>
//             <div>{data.bio}</div>
//           </div>
//           <div className="flex gap-3 mt-auto">
//             <button
//               type="button"
//               className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
//             >
//               {data.buttonText1}
//             </button>
//             <button
//               type="button"
//               className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
//             >
//               {data.buttonText2}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Card = () => {
  return (
    <div>
      <div className="flex flex-col w-2/3 gap-5 p-2 mx-auto bg-white shadow-xl select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
        <div
          // style={{
          //   backgroundImage: `url(${data.famPhoto})`,
          // }}
          className="bg-yellow-200 h-52 sm:h-full sm:w-72 rounded-xl"
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
      </div>
    </div>
  );
};

export default Card;
