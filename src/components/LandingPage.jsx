import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    // Main Container of Landing Page
    <div
      data-scroll
      data-scroll-speed="-.3"
      className=" w-full h-screen bg-zinc-900 pt-1"
    >
      {/* Text-Box */}
      <div className="textstructure mt-36 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {/* Image */}
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] h-[5vw] relative top-[0.5vw] bg-red-500"
                  >
                    <img src="ss.png" className="w-full h-full absolute"></img>
                  </motion.div>
                )}

                {/* Text-Heading */}
                <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[6.5vw] leading-[6.5vw] font-['Founders_Grotesk_X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Border-Bottom */}
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        {/* Start the Project Button */}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
