import React from "react";

function About() {
  return (
    <div className="w-full px-6 py-16 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      {/* Top Text */}
      <h1 className="font-['Neue_Montreal'] text-[6vw] sm:text-[5vw] md:text-[4vw] leading-tight tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      {/* Bottom Content: Text + Image */}
      <div className="w-full flex flex-col md:flex-row gap-8 border-t border-[#a1b562] pt-10 mt-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Our approach:
          </h1>
          <button className="flex items-center gap-6 capitalize px-6 py-4 sm:px-10 sm:py-6 bg-zinc-900 mt-8 sm:mt-10 rounded-full text-white text-sm sm:text-base">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="About Ochi"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
