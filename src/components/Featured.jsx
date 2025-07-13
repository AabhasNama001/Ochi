import { motion } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full py-20 bg-white">
      {/* Heading */}
      <div className="w-full px-6 sm:px-10 md:px-24 border-b-[1px] pb-10 border-zinc-700">
        <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight text-black">
          Featured projects
        </h1>
      </div>

      <div className="px-6 sm:px-10 md:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">
          {/* Card 1 */}
          <motion.div className="cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[60vh] md:h-[75vh]">
            <h1 className="absolute flex text-4xl sm:text-6xl md:text-8xl z-[9] font-semibold overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] pointer-events-none">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[60vh] md:h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-4xl sm:text-6xl md:text-8xl font-semibold z-[9] right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] pointer-events-none">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "0" }}
                  animate={isHovering ? { y: "100%" } : { y: "0" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="VISE"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
