import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      {/* Text Box */}
      <div className="textstructure mt-24 md:mt-36 px-6 md:px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {/* Animated Image */}
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[3vw] w-[8vw] h-[5vw] relative top-[0.5vw] bg-red-500"
                  >
                    <img
                      src="ss.png"
                      className="w-full h-full absolute object-cover"
                      alt="Decor"
                    />
                  </motion.div>
                )}

                {/* Heading Text */}
                <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[10vw] md:text-[6.5vw] leading-[10vw] md:leading-[6.5vw] font-['Founders_Grotesk_X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Border + Text + Button */}
      <div className="border-t-[1px] border-zinc-800 mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 py-6 px-6 md:px-20">
        {/* Descriptions */}
        <div className="flex flex-col gap-2 text-sm md:text-md font-light tracking-tight leading-none text-white">
          <p>For public and private companies</p>
          <p>From the first pitch to IPO</p>
        </div>

        {/* CTA Button */}
        <div className="start flex items-center gap-4 flex-wrap md:flex-nowrap">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-xs md:text-md uppercase">
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
