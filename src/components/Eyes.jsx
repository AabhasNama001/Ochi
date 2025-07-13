import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.4"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 sm:gap-6 md:gap-10 flex-wrap justify-center">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[30vw] sm:w-[20vw] md:w-[15vw] h-[30vw] sm:h-[20vw] md:h-[15vw] rounded-full bg-zinc-100"
            >
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">
                {/* Play text in center */}
                <h1 className="absolute text-[3vw] sm:text-[1.5vw] text-white">
                  Play
                </h1>
                {/* Rotating line */}
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
