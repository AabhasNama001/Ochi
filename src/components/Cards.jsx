import React from "react";

function Cards() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col md:flex-row items-center md:items-start px-6 sm:px-10 md:px-20 lg:px-32 gap-6 py-10">
      {/* Left Card */}
      <div className="cardcontainer w-full md:w-1/2 h-[40vh] md:h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-28 sm:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo 1"
          />
          <button className="absolute px-4 sm:px-5 text-[#CDEA68] py-1 rounded-full border-2 border-[#CDEA68] left-6 sm:left-10 bottom-6 sm:bottom-10 text-xs sm:text-sm">
            &copy;2019
          </button>
        </div>
      </div>

      {/* Right Two Cards */}
      <div className="cardcontainer w-full md:w-1/2 flex flex-col sm:flex-row gap-6 h-auto md:h-[50vh]">
        {/* Card 2 */}
        <div className="card relative rounded-xl w-full h-[40vh] md:h-full bg-[#192826] flex items-center justify-center">
          <img
            className="w-28 sm:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Logo 2"
          />
          <button className="absolute px-3 sm:px-5 py-1 rounded-full border-2 left-4 sm:left-10 bottom-6 sm:bottom-10 text-[10px] sm:text-xs whitespace-nowrap text-white border-white">
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        {/* Card 3 */}
        <div className="card relative rounded-xl w-full h-[40vh] md:h-full bg-[#192826] flex items-center justify-center">
          <img
            className="w-20 sm:w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Logo 3"
          />
          <button className="absolute px-2 sm:px-3 py-1 whitespace-nowrap rounded-full border-2 left-4 sm:left-10 bottom-6 sm:bottom-10 text-[10px] sm:text-xs text-white border-white">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
