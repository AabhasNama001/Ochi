import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-16 md:py-20 -mb-10 md:-mb-14 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        {[1, 2].map((i) => (
          <motion.h1
            key={i}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase mb-[4vw] pt-6 md:pt-10 pr-10 md:pr-20"
          >
            we are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
